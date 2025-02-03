import React, { useState, useEffect, useRef } from 'react';
import { Clock } from 'lucide-react';

const HungerImpactSection = () => {
  const [seconds, setSeconds] = useState(0);
  const [showMessage, setShowMessage] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds(s => (s + 1) % 3);
      setShowMessage(true);
      setTimeout(() => setShowMessage(false), 2000);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (statsRef.current) {
      observer.observe(statsRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative bg-black text-white overflow-hidden w-full rounded-[100px] pb-32">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-red-900/30 to-black/95" />
      
      {/* Main Content */}
      <div className="relative z-10">
        {/* Timer Impact */}
        <div className="absolute top-8 right-8 flex items-center gap-2">
          <Clock className="w-6 h-6 text-red-500 animate-pulse" />
          <div className="text-xl font-mono">
            {seconds} seconds
          </div>
          <div className={`transition-opacity duration-500 ${showMessage ? 'opacity-100' : 'opacity-0'}`}>
            = 1 life affected by hunger
          </div>
        </div>

        {/* Hero Section */}
        <div className="h-screen flex items-center px-4 md:px-12">
          <div className="space-y-8 max-w-4xl mx-auto">
            <h1 className="text-8xl font-bold leading-tight animate-fade-in">
              This isn't just another
              <span className="block text-red-500">statistic.</span>
            </h1>
            <p className="text-2xl text-gray-300">
              Scroll to witness the reality millions face every day.
            </p>
          </div>
        </div>

        {/* Story Sections */}
        <div className="space-y-64 pb-32 px-4 md:px-12">
          {/* Hunger Story */}
          <div className="flex flex-col items-start space-y-8 opacity-90 hover:opacity-100 transition-opacity">
            <div className="bg-red-500/20 p-1">
              <h2 className="text-6xl font-bold">
                No food. No hope.
              </h2>
            </div>
            <p className="text-2xl max-w-2xl text-gray-300">
              A mother in India gives her portion of food to her children. Every bite saved is a chance for her children to survive another day.
            </p>
          </div>

          {/* Global Crisis Stats */}
          <div className="flex justify-end">
            <div className="max-w-2xl space-y-8">
              <div className="text-right">
                <div className="inline-block">
                  <span className="text-8xl font-bold text-red-500">105th</span>
                  <span className="block text-xl text-gray-300 mt-2">
                    India's rank in Global Hunger Index 2024
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Somalia Reality */}
          <div className="flex items-center justify-center">
            <div className="text-center max-w-4xl space-y-8">
              <h2 className="text-7xl font-bold">
                In Somalia,
                <span className="block text-red-500">
                  walking 10 miles for water
                </span>
                is not a choice.
                <span className="block text-2xl mt-8 text-gray-300">
                  It's survival.
                </span>
              </h2>
            </div>
          </div>

          {/* Yemen Crisis */}
          <div className="flex justify-start">
            <div className="max-w-2xl space-y-4">
              <h3 className="text-5xl font-bold">
                In Yemen:
              </h3>
              <p className="text-2xl text-gray-300">
                Families don't choose between different meals.
                They choose between food and medicine.
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="min-h-screen flex items-center justify-center -mt-[150px]">
            <div className="text-center space-y-8">
              <h2 className="text-7xl font-bold">
                This story
                <span className="block text-red-500">
                  doesn't have to end here.
                </span>
              </h2>
              <button className="bg-red-500 text-white px-12 py-4 text-2xl rounded-full hover:bg-red-600 transition-colors mt-8">
                Join The Movement
              </button>
            </div>
          </div>

          {/* Floating Impact Stats - Scroll-revealed */}
          <div ref={statsRef} className={`transition-opacity  -mt-[350px] duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="absolute bottom-4 left-8 text-xl bg-black/80 px-4 py-2 rounded-lg shadow-lg">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full" />
                  <span>828 million hungry globally</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full" />
                  <span>Every 3 seconds, someone dies of hunger</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default HungerImpactSection;
