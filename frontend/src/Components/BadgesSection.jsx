import React from 'react';
import { Trophy, Star, LockKeyhole } from 'lucide-react';

const BadgesSection = () => {
  return (
    <div className="bg-black text-white p-16 rounded-lg w-full max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Join Our Community of Change Makers</h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">Sign up to be part of WeExist and start your journey of making a difference. Every contribution counts, and we celebrate each step.</p>
      </div>

      <div className="grid grid-cols-3 gap-8 mb-16">
        {/* First Badge - Unlockable */}
        <div className="relative p-8 rounded-lg border border-gray-800 bg-gradient-to-b from-gray-900 to-black group hover:border-yellow-500/30 transition-all duration-300">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="p-4 rounded-full bg-yellow-500/10 border border-yellow-500/20">
              <Trophy className="w-8 h-8 text-yellow-500" />
            </div>
          </div>
          <div className="mt-8 text-center">
            <h3 className="text-xl font-semibold mb-2 text-yellow-500">First Step Badge</h3>
            <p className="text-gray-400">Create your account and join our community of change makers</p>
          </div>
        </div>

        {/* Second Badge - Locked */}
        <div className="relative p-8 rounded-lg border border-gray-800 bg-gradient-to-b from-gray-900 to-black opacity-60">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="p-4 rounded-full bg-gray-800 border border-gray-700">
              <LockKeyhole className="w-8 h-8 text-gray-600" />
            </div>
          </div>
          <div className="mt-8 text-center">
            <h3 className="text-xl font-semibold mb-2 text-gray-500">First Donation</h3>
            <p className="text-gray-500">Make your first contribution to unlock this badge</p>
          </div>
        </div>

        {/* Third Badge - Locked */}
        <div className="relative p-8 rounded-lg border border-gray-800 bg-gradient-to-b from-gray-900 to-black opacity-60">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="p-4 rounded-full bg-gray-800 border border-gray-700">
              <LockKeyhole className="w-8 h-8 text-gray-600" />
            </div>
          </div>
          <div className="mt-8 text-center">
            <h3 className="text-xl font-semibold mb-2 text-gray-500">Community Star</h3>
            <p className="text-gray-500">Share your first impact story with the community</p>
          </div>
        </div>
      </div>

      <div className="text-center max-w-xl mx-auto">
        <button className="w-full px-8 py-4 text-lg font-semibold rounded-lg bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 transform hover:scale-105 transition-all duration-300 mb-4">
          View Your All Badges
        </button>
        <p className="text-gray-400">Join 5,000+ members making a difference every day</p>
      </div>
    </div>
  );
};

export default BadgesSection;