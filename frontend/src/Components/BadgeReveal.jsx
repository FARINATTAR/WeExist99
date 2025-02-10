import React, { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';
import ally from "../assets/Member.png";
import Beacon from "../assets/BeaconofHope.png";
import impactBadge from "../assets/ImpactGuardian.png";
import kindnessBadge from "../assets/Kindness.png";
import JusticeBadge from "../assets/JusticeSentinel.png";
import Vanguard from "../assets/TrailblazerOfChange.png";

const badges = [
  {
    name: "WeExist Ally",
    image: ally,
    description: "A sleek silver badge with a bold 'W' engraved at the center",
    significance: "The beginning of a changemaker's journey",
    titleGradient: "from-gray-200 to-white"
  },
  {
    name: "Beacon of Hope",
    image: Beacon,
    description: "A golden shield-shaped badge with a radiant sunburst pattern",
    significance: "Symbolizing hope and new beginnings",
    titleGradient: "from-yellow-300 to-yellow-100"
  },
  {
    name: "Impact Guardian",
    image: impactBadge,
    description: "A circular, deep-blue badge with a raised Earth emblem",
    significance: "Protection and global impact",
    titleGradient: "from-blue-300 to-white"
  },
  {
    name: "Kindness Crusader",
    image: kindnessBadge,
    description: "A striking bronze and silver badge with crossed swords over a heart",
    significance: "Courage meets kindness",
    titleGradient: "from-orange-300 to-white"
  },
  {
    name: "Justice Sentinel",
    image: JusticeBadge,
    description: "A powerful, flame-engraved, platinum shield badge",
    significance: "Leadership and bravery in action",
    titleGradient: "from-red-300 to-white"
  },
  {
    name: "Trailblazer of Change",
    image: Vanguard,
    description: "A legendary badge forged from cosmic energy",
    significance: "God-Level Achievement - Ultimate Changemaker",
    titleGradient: "from-purple-300 via-pink-200 to-yellow-200"
  }
];

const BadgeShowcase = () => {
  const [currentBadgeIndex, setCurrentBadgeIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);
  const [showCTA, setShowCTA] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(false);
      setTimeout(() => {
        setCurrentBadgeIndex((prev) => {
          if (prev === badges.length - 1) {
            setShowCTA(true);
            clearInterval(timer);
            return prev;
          }
          return prev + 1;
        });
        setIsAnimating(true);
      }, 500);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const currentBadge = badges[currentBadgeIndex];

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="max-w-6xl w-full p-8">
        {!showCTA ? (
          <div className="flex items-center gap-16">
            <div 
              className={`flex-shrink-0 transform
                ${isAnimating ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}
                transition-all duration-500 ease-in-out`}
            >
              <img 
                src={currentBadge.image} 
                alt={currentBadge.name}
                className="max-w-[400px] max-h-[400px] w-auto h-auto object-contain transform hover:scale-110 transition-transform duration-300"
              />
            </div>
            
            <div className={`flex-1 transform
              ${isAnimating ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}
              transition-all duration-500 ease-in-out delay-200`}
            >
              <div className="mb-6">
                <h2 className={`text-6xl font-bold bg-gradient-to-r ${currentBadge.titleGradient} bg-clip-text text-transparent drop-shadow-lg`}>
                  {currentBadge.name}
                </h2>
                {currentBadgeIndex === badges.length - 1 && (
                  <span className="inline-block mt-2 px-4 py-1 bg-gradient-to-r from-yellow-400 to-purple-600 rounded-full text-white text-sm font-semibold tracking-wide">
                    God-Level Achievement
                  </span>
                )}
              </div>
              
              <p className="text-2xl mb-6 font-medium text-gray-300 leading-relaxed">
                {currentBadge.description}
              </p>
              
              <p className="text-xl bg-gradient-to-r from-purple-400 to-pink-300 bg-clip-text text-transparent font-semibold">
                {currentBadge.significance}
              </p>
            </div>
          </div>
        ) : (
          <div className="text-center transform animate-fade-in">
            <h2 className="text-6xl font-bold mb-8 bg-gradient-to-r from-purple-300 via-pink-200 to-yellow-200 bg-clip-text text-transparent">
            Make Moves, Get Badges, Show ‘Em Who’s Boss 💪
            </h2>
            
            <button className="group relative inline-flex items-center gap-2 px-8 py-4 text-xl font-semibold text-white bg-gradient-to-r from-purple-600 to-blue-600 rounded-full overflow-hidden shadow-xl hover:shadow-2xl transition-shadow">
              <span className="relative z-10">View Your Progress</span>
              <ChevronRight className="w-6 h-6 relative z-10 group-hover:translate-x-1 transition-transform" />
              
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BadgeShowcase;

