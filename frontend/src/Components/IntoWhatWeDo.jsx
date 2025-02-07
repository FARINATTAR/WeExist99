import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import food from "../assets/food.png";
import bin from "../assets/waste-bin.png";
import student from "../assets/student.png";
import school from "../assets/school.png";
import communityHelp1 from "../assets/community1.png";
import celebration from "../assets/celebration.png";
import communityHelp2 from "../assets/community2.png";


const TypewriterEffect = ({ text, onComplete, speed = 45, className }) => {
    const [displayedText, setDisplayedText] = useState("");
    const [index, setIndex] = useState(0);
  
    useEffect(() => {
      if (index < text.length) {
        const timeout = setTimeout(() => {
          setDisplayedText((prev) => prev + text.charAt(index));
          setIndex(index + 1);
        }, speed);
        return () => clearTimeout(timeout);
      } else if (onComplete) {
        setTimeout(onComplete, 1000);
      }
    }, [index, text, onComplete, speed]);
  
    return (
      <h1
        className={`text-3xl md:text-5xl font-bold text-white text-center ${className}`}
      >
        {displayedText}
      </h1>
    );
  };
  
  const BlockchainVisualization = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 600 200"
        className="w-full h-full"
      >
        <defs>
          <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: "#000000" }} />
            <stop offset="100%" style={{ stopColor: "#101835" }} />
          </linearGradient>
  
          <filter id="glow">
            <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
  
          <marker
            id="arrowhead"
            markerWidth="8"
            markerHeight="6"
            refX="6"
            refY="3"
            orient="auto"
          >
            <path
              d="M0,0 L8,3 L0,6"
              fill="none"
              stroke="#4A90E2"
              strokeWidth="1"
              filter="url(#glow)"
            />
          </marker>
        </defs>
  
        <rect width="600" height="200" fill="url(#bgGradient)" />
  
        <path d="M120 100 L480 100" stroke="#1a4a7a" strokeWidth="1.5" />
        <path
          d="M120 100 L480 100"
          stroke="#4A90E2"
          strokeWidth="1"
          strokeDasharray="10,10"
        >
          <animate
            attributeName="stroke-dashoffset"
            from="0"
            to="-20"
            dur="2s"
            repeatCount="indefinite"
          />
        </path>
  
        <g transform="translate(40,25)">
          <rect
            x="0"
            y="0"
            width="100"
            height="150"
            fill="#1A1A1A"
            stroke="#4A90E2"
            strokeWidth="1.5"
            rx="10"
          />
          <text
            x="50"
            y="40"
            fill="#FFFFFF"
            textAnchor="middle"
            fontSize="14"
            fontWeight="bold"
          >
            DONATION
          </text>
          <text
            x="50"
            y="75"
            fill="#4A90E2"
            textAnchor="middle"
            fontSize="20"
            fontWeight="bold"
          >
            $100
          </text>
          <text x="50" y="105" fill="#FFFFFF" textAnchor="middle" fontSize="12">
            Initial Block
          </text>
          <circle cx="50" cy="130" r="10" fill="#4A90E2">
            <animate
              attributeName="opacity"
              values="1;0.3;1"
              dur="2s"
              repeatCount="indefinite"
            />
          </circle>
        </g>
  
        <g transform="translate(250,25)">
          <rect
            x="0"
            y="0"
            width="100"
            height="150"
            fill="#1A1A1A"
            stroke="#4A90E2"
            strokeWidth="1.5"
            rx="10"
          />
          <text
            x="50"
            y="40"
            fill="#FFFFFF"
            textAnchor="middle"
            fontSize="14"
            fontWeight="bold"
          >
            VERIFIED
          </text>
          <text x="50" y="75" fill="#4A90E2" textAnchor="middle" fontSize="14">
            Processing
          </text>
          <text x="50" y="105" fill="#FFFFFF" textAnchor="middle" fontSize="12">
            Smart Contract
          </text>
          <g transform="translate(50,130)">
            <circle r="4" fill="#4A90E2">
              <animate
                attributeName="opacity"
                values="1;0.3;1"
                dur="1.5s"
                repeatCount="indefinite"
                begin="0s"
              />
            </circle>
            <circle r="4" transform="translate(12,0)">
              <animate
                attributeName="opacity"
                values="1;0.3;1"
                dur="1.5s"
                repeatCount="indefinite"
                begin="0.5s"
              />
            </circle>
            <circle r="4" transform="translate(-12,0)">
              <animate
                attributeName="opacity"
                values="1;0.3;1"
                dur="1.5s"
                repeatCount="indefinite"
                begin="1s"
              />
            </circle>
          </g>
        </g>
  
        <g transform="translate(460,25)">
          <rect
            x="0"
            y="0"
            width="100"
            height="150"
            fill="#1A1A1A"
            stroke="#4A90E2"
            strokeWidth="1.5"
            rx="10"
          />
          <text
            x="50"
            y="40"
            fill="#FFFFFF"
            textAnchor="middle"
            fontSize="14"
            fontWeight="bold"
          >
            IMPACT
          </text>
          <text x="50" y="75" fill="#4A90E2" textAnchor="middle" fontSize="14">
            Delivered
          </text>
          <text x="50" y="105" fill="#FFFFFF" textAnchor="middle" fontSize="12">
            Confirmed
          </text>
          <path
            d="M35,130 L45,140 L65,120"
            stroke="#4A90E2"
            strokeWidth="3"
            fill="none"
          >
            <animate
              attributeName="stroke-dasharray"
              values="0,200;200,0"
              dur="2s"
              fill="freeze"
            />
          </path>
        </g>
  
        <g>
          <circle cx="0" cy="0" r="2" fill="#4A90E2">
            <animateMotion
              path="M120,100 L480,100"
              dur="3s"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx="0" cy="0" r="2" fill="#4A90E2">
            <animateMotion
              path="M120,100 L480,100"
              dur="3s"
              begin="1s"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx="0" cy="0" r="2" fill="#4A90E2">
            <animateMotion
              path="M120,100 L480,100"
              dur="3s"
              begin="2s"
              repeatCount="indefinite"
            />
          </circle>
        </g>
      </svg>
    );
  };
  
const IntroSection = () => {
      const [stage, setStage] = useState(0);
      const [currentImageIndex, setCurrentImageIndex] = useState(0);
      const images = [communityHelp1, celebration, communityHelp2];
    
      useEffect(() => {
        if (stage === 3) {
          if (currentImageIndex < images.length - 1) {
            const timeout = setTimeout(() => {
              setCurrentImageIndex((prev) => prev + 1);
            }, 1800);
            return () => clearTimeout(timeout);
          }
        }
      }, [stage, currentImageIndex]);

  return (
    <div className="min-h-screen flex flex-col bg-black p-4 relative overflow-hidden">
      <div className="w-full fixed top-0 left-0 z-50">
      </div>
      <div className="flex flex-col items-center justify-center flex-grow mt-16">
        {stage === 2 && (
          <div className="absolute w-full h-96">
            <img
              src={school}
              alt="School"
              className="absolute"
              style={{
                left: "150px",
                bottom: "-30px",
                width: "350px",
                height: "300px",
                zIndex: 1,
              }}
            />
          </div>
        )}

        {stage === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            <TypewriterEffect
              text="WeExist: More Than Just a Platform"
              className= "-mt-[100px]"
              speed={30}
              onComplete={() => setStage(1)}
            />
          </motion.div>
        )}

        {stage === 1 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            <TypewriterEffect
              text="Imagine a world where no food goes to waste"
              className="mb-[25px]"
              onComplete={() => setTimeout(() => setStage(2), 150)}
            />
            <div className="relative w-full h-96 flex items-center justify-center mt-8">
              <motion.img
                src={food}
                alt="Food Pack"
                className="w-60 h-60 absolute"
                initial={{ x: -600 }}
                animate={{ x: -35 }}
                transition={{ duration: 2.5, ease: "easeInOut" }}
              />
              <motion.img
                src={bin}
                alt="Waste Bin"
                className="w-60 h-60 absolute"
                initial={{ x: 500 }}
                animate={{ x: 150 }}
                transition={{ duration: 2.5, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        )}

        {stage === 2 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            <TypewriterEffect
              text="Every child gets an education..."
              className="mb-[25px]"
              onComplete={() => setTimeout(() => setStage(3), 150)}
            />
            <div className="relative w-full h-96 flex items-center justify-center mt-8">
              <motion.img
                src={student}
                alt="Student"
                className="absolute w-[250px] h-[250px]"
                style={{ marginBottom: "-100px", zIndex: 2 }}
                initial={{ x: 500 }}
                animate={{ x: -100 }}
                transition={{ duration: 2.5, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        )}

        {stage === 3 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            <TypewriterEffect
              text="Together, we're building a community where compassion meets action..."
              className="mb-[25px]"
              onComplete={() => setTimeout(() => setStage(4), 150)}
            />
            <div className="relative w-full h-96 flex items-center justify-center mt-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImageIndex}
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 100 }}
                  transition={{ duration: 0.8 }}
                  className="absolute"
                >
                  <motion.img
                    src={images[currentImageIndex]}
                    alt={`Community ${currentImageIndex + 1}`}
                    className="w-[500px] h-[400px] object-contain"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        )}

        {stage === 4 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="w-full"
          >
            <TypewriterEffect
              text="Making giving simple, impactful, and transparent"
              className="mb-[25px] -mt-[20px]"
              speed={40}
              onComplete={() => setTimeout(() => setStage(5), 150)}
            />
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 1.5,
                delay: 1,
                ease: "easeOut",
              }}
              className="w-full h-[300px]"
            >
              <BlockchainVisualization />
            </motion.div>
          </motion.div>
        )}

        {stage === 5 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="w-full flex flex-col items-center justify-center min-h-[50vh] -mt-[50px]"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="relative w-full max-w-4xl flex flex-col items-center justify-center"
            >
              {/* Animated background effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 blur-xl animate-pulse" />

              <div className="relative z-10 text-center space-y-8">
                <motion.h1
                  className="text-5xl md:text-7xl font-bold"
                  initial={{ y: 20 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Change Lives
                  </span>
                  <br />
                  <span className="text-white">In Real Time</span>
                </motion.h1>

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                  className="flex flex-col items-center gap-6"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative px-10 py-5 text-2xl font-bold text-white overflow-hidden rounded-full"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 animate-gradient-x" />
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-purple-600 to-pink-600 transition-opacity duration-300" />
                    <span className="relative z-10">Make It Happen →</span>
                  </motion.button>

                  <motion.div
                    className="flex gap-8 text-gray-300 text-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                  >
                    <span>Instant Impact</span>
                    <span>•</span>
                    <span>100% Transparent</span>
                    <span>•</span>
                    <span>Zero Fees</span>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default IntroSection;
