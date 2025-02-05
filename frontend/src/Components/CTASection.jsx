import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

const CTASection = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [sliderPosition, setSliderPosition] = useState(0);
  const sliderRef = useRef(null);
  const containerRef = useRef(null);

  const handleDragStart = (e) => {
    setIsDragging(true);
    e.preventDefault();
  };

  const handleDrag = (e) => {
    if (!isDragging || !sliderRef.current || !containerRef.current) return;

    const container = containerRef.current.getBoundingClientRect();
    const maxWidth = container.width - sliderRef.current.offsetWidth;
    
    let newPosition;
    if (e.type === 'touchmove') {
      newPosition = e.touches[0].clientX - container.left - (sliderRef.current.offsetWidth / 2);
    } else {
      newPosition = e.clientX - container.left - (sliderRef.current.offsetWidth / 2);
    }

    newPosition = Math.max(0, Math.min(newPosition, maxWidth));
    setSliderPosition(newPosition);

    // When slider reaches 90%, navigate to signup page
    if (newPosition >= maxWidth * 0.9) {
      setIsDragging(false);
      setSliderPosition(0);
      // Replace '/signup' with your actual signup page URL
      window.location.href = '/signup';
    }
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    setSliderPosition(0);
  };

  useEffect(() => {
    const handleMouseUp = () => handleDragEnd();
    const handleMouseMove = (e) => handleDrag(e);
    const handleTouchMove = (e) => handleDrag(e);
    const handleTouchEnd = () => handleDragEnd();

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.addEventListener('touchmove', handleTouchMove);
      document.addEventListener('touchend', handleTouchEnd);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isDragging]);

  return (
    <div className="bg-black text-white p-16 rounded-lg w-full max-w-6xl mx-auto relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-50" />
      
      {/* Animated Circles */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse delay-700" />

      <div className="relative">
        {/* Main Content */}
        <div className="text-center max-w-3xl mx-auto">
          {/* Icon Group */}
          <div className="flex justify-center mb-8 relative">
            <div className="relative">
              <div className="absolute inset-0 bg-yellow-500/30 rounded-full blur-xl animate-pulse" />
              <div className="relative bg-gradient-to-r from-yellow-500 to-orange-500 p-4 rounded-full">
                <Sparkles className="w-8 h-8 text-black" />
              </div>
            </div>
          </div>

          {/* Heading */}
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
            Join Us Today & Be the Change!
          </h2>

          {/* Tagline */}
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            Together, we can fight hunger and transform lives.
            <br />
            <span className="text-yellow-400">Every action counts!</span>
          </p>

          {/* People Illustration */}
          <div className="flex justify-center items-center gap-4 mb-12">
            {[...Array(5)].map((_, i) => (
              <div 
                key={i}
                className="w-16 h-16 rounded-full bg-gradient-to-b shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                style={{
                  backgroundImage: `linear-gradient(to bottom, 
                    ${['from-yellow-400 to-yellow-500', 
                       'from-orange-400 to-orange-500',
                       'from-red-400 to-red-500',
                       'from-purple-400 to-purple-500',
                       'from-blue-400 to-blue-500'][i]})`,
                  animation: `bounce 2s infinite ${i * 200}ms`
                }}
              />
            ))}
          </div>

          {/* Sliding Button */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-yellow-600 to-orange-600 rounded-lg blur opacity-50 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-pulse" />
            <div 
              ref={containerRef}
              className="relative w-full max-w-md mx-auto h-16 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-lg overflow-hidden cursor-pointer"
            >
              {/* Slider Handle */}
              <div
                ref={sliderRef}
                onMouseDown={handleDragStart}
                onTouchStart={handleDragStart}
                className="absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg shadow-lg cursor-grab active:cursor-grabbing transform transition-transform"
                style={{ 
                  transform: `translateX(${sliderPosition}px)`,
                  touchAction: 'none'
                }}
              >
                <div className="h-full flex items-center justify-center">
                  <ArrowRight className="w-6 h-6 text-black" />
                </div>
              </div>

              {/* Slide Text */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span className="text-lg font-semibold text-white">
                  Slide to Sign Up & Make an Impact
                </span>
              </div>
            </div>
          </div>

          {/* Social Proof */}
          <p className="mt-8 text-gray-400">
            Join 10,000+ change-makers already making a difference
          </p>
        </div>
      </div>
    </div>
  );
};

export default CTASection;