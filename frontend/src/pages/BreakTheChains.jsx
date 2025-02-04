import React, { useEffect, useRef, useState } from 'react';

const JigsawGame = () => {
  const canvasRef = useRef(null);
  const imageRef = useRef(null);
  const [loadingStatus, setLoadingStatus] = useState('Initializing...');
  const [pieces, setPieces] = useState([]);
  const [dragPiece, setDragPiece] = useState(null);

  // Fisher-Yates shuffle algorithm
  const shuffleArray = (array) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  useEffect(() => {
    if (!canvasRef.current) {
      setLoadingStatus('Canvas not ready');
      return;
    }

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const image = new Image();
    imageRef.current = image;
    const rows = 3;
    const cols = 3;

    canvas.width = 600;
    canvas.height = 600;
    
    ctx.fillStyle = '#eee';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    image.onload = () => {
      setLoadingStatus('Image loaded successfully!');
      
      const pieceWidth = canvas.width / cols;
      const pieceHeight = canvas.height / rows;
      
      // Create pieces with their original positions
      const newPieces = [];
      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          newPieces.push({
            id: y * cols + x,
            x: x * pieceWidth,
            y: y * pieceHeight,
            origX: x * (image.width / cols),
            origY: y * (image.height / rows),
            correctX: x * pieceWidth,
            correctY: y * pieceHeight,
            width: image.width / cols,
            height: image.height / rows,
            displayWidth: pieceWidth,
            displayHeight: pieceHeight,
            isPlaced: false
          });
        }
      }
      
      // Shuffle pieces to random positions within canvas
      const shuffledPieces = shuffleArray(newPieces).map((piece, index) => {
        // Distribute pieces around the canvas edges
        if (index < 3) { // Top edge
          piece.x = index * (canvas.width / 3);
          piece.y = -pieceHeight / 2;
        } else if (index < 6) { // Bottom edge
          piece.x = (index - 3) * (canvas.width / 3);
          piece.y = canvas.height - pieceHeight / 2;
        } else { // Right edge
          piece.x = canvas.width - pieceWidth / 2;
          piece.y = (index - 6) * (canvas.height / 3);
        }
        return piece;
      });
      
      setPieces(shuffledPieces);
      drawPieces(shuffledPieces);
    };

    image.onerror = () => {
      setLoadingStatus('Error loading image');
    };

    image.src = '/assets/FoodPuzzle.jpg';
  }, []);

  const drawPieces = (piecesToDraw) => {
    if (!canvasRef.current || !imageRef.current) return;
    
    const ctx = canvasRef.current.getContext('2d');
    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    
    // Draw background
    ctx.fillStyle = '#eee';
    ctx.fillRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    
    // Draw grid for guidance
    ctx.strokeStyle = '#ddd';
    ctx.setLineDash([5, 5]);
    const gridSize = canvasRef.current.width / 3;
    for (let i = 1; i < 3; i++) {
      ctx.beginPath();
      ctx.moveTo(gridSize * i, 0);
      ctx.lineTo(gridSize * i, canvasRef.current.height);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(0, gridSize * i);
      ctx.lineTo(canvasRef.current.width, gridSize * i);
      ctx.stroke();
    }
    ctx.setLineDash([]);
    
    // Draw pieces
    piecesToDraw.forEach(piece => {
      if (dragPiece && piece.id === pieces[dragPiece.index].id) {
        // Add shadow for dragged piece
        ctx.shadowColor = 'rgba(0, 0, 0, 0.3)';
        ctx.shadowBlur = 10;
        ctx.shadowOffsetX = 5;
        ctx.shadowOffsetY = 5;
      } else {
        ctx.shadowColor = 'rgba(0, 0, 0, 0.1)';
        ctx.shadowBlur = 5;
        ctx.shadowOffsetX = 2;
        ctx.shadowOffsetY = 2;
      }

      ctx.drawImage(
        imageRef.current,
        piece.origX, piece.origY,
        piece.width, piece.height,
        piece.x, piece.y,
        piece.displayWidth, piece.displayHeight
      );

      // Reset shadow
      ctx.shadowColor = 'transparent';
      ctx.shadowBlur = 0;
      ctx.shadowOffsetX = 0;
      ctx.shadowOffsetY = 0;

      // Draw border
      if (!piece.isPlaced) {
        ctx.strokeStyle = '#000';
        ctx.lineWidth = 2;
        ctx.strokeRect(piece.x, piece.y, piece.displayWidth, piece.displayHeight);
      }
    });
  };

  const handleMouseDown = (e) => {
    const rect = canvasRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Find clicked piece (in reverse to get top piece)
    for (let i = pieces.length - 1; i >= 0; i--) {
      const piece = pieces[i];
      if (!piece.isPlaced && 
          x >= piece.x && x <= piece.x + piece.displayWidth &&
          y >= piece.y && y <= piece.y + piece.displayHeight) {
        
        const newPieces = [...pieces];
        const [draggedPiece] = newPieces.splice(i, 1);
        newPieces.push(draggedPiece);
        
        setDragPiece({
          index: newPieces.length - 1,
          offsetX: x - piece.x,
          offsetY: y - piece.y
        });
        
        setPieces(newPieces);
        drawPieces(newPieces);
        break;
      }
    }
  };

  const handleMouseMove = (e) => {
    if (!dragPiece) return;
    
    const rect = canvasRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const newPieces = [...pieces];
    const draggedPiece = newPieces[dragPiece.index];
    
    draggedPiece.x = x - dragPiece.offsetX;
    draggedPiece.y = y - dragPiece.offsetY;
    
    setPieces(newPieces);
    drawPieces(newPieces);
  };

  const handleMouseUp = () => {
    if (!dragPiece) return;
    
    const newPieces = [...pieces];
    const draggedPiece = newPieces[dragPiece.index];
    
    // Check if piece is close to its correct position
    if (Math.abs(draggedPiece.x - draggedPiece.correctX) < 30 && 
        Math.abs(draggedPiece.y - draggedPiece.correctY) < 30) {
      draggedPiece.x = draggedPiece.correctX;
      draggedPiece.y = draggedPiece.correctY;
      draggedPiece.isPlaced = true;
      
      // Check if puzzle is completed
      const isComplete = newPieces.every(piece => piece.isPlaced);
      if (isComplete) {
        setLoadingStatus('Puzzle Completed! 🎉');
      }
    }
    
    setPieces(newPieces);
    drawPieces(newPieces);
    setDragPiece(null);
  };

  return (
    <div className="relative w-full h-full">
      <canvas
        ref={canvasRef}
        className="border border-gray-300"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      />
      <div className="absolute top-0 left-0 bg-black/50 text-white p-2 rounded">
        Status: {loadingStatus}
      </div>
    </div>
  );
};

export default JigsawGame;