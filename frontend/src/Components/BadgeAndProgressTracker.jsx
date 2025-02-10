import React, { useState, useEffect } from 'react';

const ImpactDashboard = () => {
  const [progress, setProgress] = useState(0);
  
  const userData = {
    name: "Sarah",
    mealsProvided: 24,
    communityActions: 8,
    nextBadgeProgress: 80,
    totalProgress: 65
  };

  useEffect(() => {
    const timer = setTimeout(() => setProgress(userData.totalProgress), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0A0F] bg-gradient-to-b from-purple-900/10 text-white p-6">
      <div className="max-w-4xl mx-auto space-y-10">
        {/* Premium Header */}
        <div className="relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent blur-sm" />
          <div className="pt-8 text-center space-y-3">
            <h1 className="text-5xl font-bold">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400">
                IMPACT SCORE
              </span>
            </h1>
            <p className="text-gray-400 text-lg">Level {Math.floor(progress/10)}</p>
          </div>
          
          {/* XP Bar */}
          <div className="mt-6 relative">
            <div className="h-4 bg-gray-900/50 rounded-full border border-gray-800 backdrop-blur-sm">
              <div 
                className="h-full rounded-full bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 transition-all duration-1000"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 px-4 py-1 bg-purple-500 rounded-full text-sm font-bold">
              {progress}/100 XP
            </div>
          </div>
        </div>

        {/* Main Stats */}
        <div className="grid grid-cols-2 gap-6">
          {/* Meals Card */}
          <div className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl blur-lg opacity-40 group-hover:opacity-75 transition-all duration-500" />
            <div className="relative h-full bg-gray-900/50 backdrop-blur-sm overflow-hidden rounded-xl border border-gray-800/50">
              <div className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center">
                  <span className="text-3xl">🍱</span>
                </div>
                <div>
                  <div className="text-4xl font-bold text-white mb-1">{userData.mealsProvided}</div>
                  <div className="text-gray-400">Meals Donated</div>
                </div>
                <span className="text-yellow-400 text-xl animate-pulse">★</span>
              </div>
            </div>
          </div>

          {/* Community Actions Card */}
          <div className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur-lg opacity-40 group-hover:opacity-75 transition-all duration-500" />
            <div className="relative h-full bg-gray-900/50 backdrop-blur-sm overflow-hidden rounded-xl border border-gray-800/50">
              <div className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
                  <span className="text-3xl">✨</span>
                </div>
                <div>
                  <div className="text-4xl font-bold text-white mb-1">{userData.communityActions}</div>
                  <div className="text-gray-400">Community Actions</div>
                </div>
                <span className="text-yellow-400 text-xl animate-pulse">★</span>
              </div>
            </div>
          </div>
        </div>

        {/* Achievement Progress */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-yellow-600 to-orange-600 rounded-2xl blur-lg opacity-30 group-hover:opacity-75 transition-all duration-500" />
          <div className="relative bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800/50">
            <div className="p-6 space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center">
                  <span className="text-2xl">🏆</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
                    Next Achievement Unlocking
                  </h3>
                  <p className="text-gray-400">2 more actions to become a Legend!</p>
                </div>
              </div>
              <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-yellow-400 to-orange-500 transition-all duration-1000"
                  style={{ width: `${userData.nextBadgeProgress}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <button className="w-full py-6 px-6 text-lg bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-xl font-bold shadow-lg group relative overflow-hidden transition-transform hover:-translate-y-1">
          <span className="relative flex items-center justify-center gap-2">
            TAKE ON NEXT CHALLENGE
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </span>
        </button>
      </div>
    </div>
  );
};

export default ImpactDashboard;