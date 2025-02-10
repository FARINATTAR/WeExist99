import React, { useState, useEffect } from "react";
import { Lock, Download } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import ally from "../assets/Member.png";
import Beacon from "../assets/BeaconofHope.png";
import impactBadge from "../assets/ImpactGuardian.png";
import kindnessBadge from "../assets/Kindness.png";
import JusticeBadge from "../assets/JusticeSentinel.png";
import Vanguard from "../assets/TrailblazerOfChange.png";
import { useAuth } from "../context/AuthContext";  

const initialBadges = [
  {
    id: 1,
    name: "WeExist Ally",
    image: ally,
    requirement: "Sign up to unlock your first badge!",
    isLocked: true,
    unlockCriteria: "signup",
  },
  {
    id: 2,
    name: "Beacon of Hope",
    image: Beacon,
    requirement: "Complete 5 community support actions",
    isLocked: true,
    unlockCriteria: "actions",
    progress: "0/5",
  },
  {
    id: 3,
    name: "Impact Guardian",
    image: impactBadge,
    requirement: "Lead 3 successful community initiatives",
    isLocked: true,
    unlockCriteria: "initiatives",
    progress: "0/3",
  },
  {
    id: 4,
    name: "Kindness Crusader",
    image: kindnessBadge,
    requirement: "Receive 10 community appreciation votes",
    isLocked: true,
    unlockCriteria: "votes",
    progress: "0/10",
  },
  {
    id: 5,
    name: "Justice Sentinel",
    image: JusticeBadge,
    requirement: "Successfully resolve 5 community challenges",
    isLocked: true,
    unlockCriteria: "challenges",
    progress: "0/5",
  },
  {
    id: 6,
    name: "Trailblazer of Change",
    image: Vanguard,
    requirement: "Achieve all previous badges and maintain exceptional status for 3 months",
    isLocked: true,
    unlockCriteria: "legendary",
    progress: "0/3 months",
  },
];

const BadgeCollection = () => {
  const [badges, setBadges] = useState(initialBadges);
  const navigate = useNavigate();
  const location = useLocation();
  const { user, login } = useAuth(); // Added setUser for signup handling

  // Load badge unlocks from localStorage
  useEffect(() => {
    const firstBadgeUnlocked = localStorage.getItem("firstBadgeUnlocked") === "true";

    setBadges((prevBadges) =>
      prevBadges.map((badge) =>
        badge.id === 1 && firstBadgeUnlocked ? { ...badge, isLocked: false } : badge
      )
    );
  }, []); // Runs only on mount

  // Function to unlock badge & update UI
  const unlockBadge = () => {
    localStorage.setItem("firstBadgeUnlocked", "true");
    setBadges((prevBadges) =>
      prevBadges.map((badge) =>
        badge.id === 1 ? { ...badge, isLocked: false } : badge
      )
    );
  };

  // Handle signup and badge unlock
  const handleSignupRedirect = () => {
    // Simulate signup by storing a test user
    localStorage.setItem("user", JSON.stringify({ name: "Test User" }));
    login({ name: "Test User" }); // Update auth context

    unlockBadge(); // Unlock badge instantly

    const currentPath = `${location.pathname}${location.search}${location.hash}`;
    navigate(`/signup?redirect=${encodeURIComponent(currentPath)}`, {
      state: { from: currentPath }
    });
  };

  return (
    <div className="min-h-screen bg-black py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">
          Badge Collection
        </h2>
  
        {/* DEBUG BUTTON FOR TESTING
        <div className="flex justify-center mb-6">
          <button
            onClick={unlockBadge}
            className="py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Unlock Badge (Test)
          </button>
        </div> */}
  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {badges.map((badge) => (
            <div key={badge.id} className="bg-gray-900 rounded-lg p-6 flex flex-col items-center">
              <div className="relative mb-6 group">
                <img
                  src={badge.image}
                  alt={badge.name}
                  className={`w-48 h-48 object-contain ${badge.isLocked ? "opacity-20" : ""}`}
                />
                {badge.isLocked && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Lock className="w-12 h-12 text-gray-400" />
                  </div>
                )}
              </div>
  
              <h3 className="text-xl font-bold text-white mb-2">{badge.name}</h3>
  
              <p className="text-gray-400 text-center mb-4 flex-grow">
                {badge.requirement}
              </p>
  
              {badge.isLocked ? (
                <div className="w-full">
                  {badge.unlockCriteria === "signup" ? (
                    <button
                      onClick={handleSignupRedirect}
                      className="w-full py-2 px-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center gap-2"
                    >
                      <span>Sign Up to Unlock</span>
                      <Lock className="w-4 h-4" />
                    </button>
                  ) : (
                    <button
                      disabled
                      className="w-full py-2 px-4 bg-gray-700 text-gray-400 rounded-lg cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      <span>Complete Requirements</span>
                      <Lock className="w-4 h-4" />
                    </button>
                  )}
                </div>
              ) : (
                <button
                  onClick={() => console.log(`Downloading badge ${badge.id}`)}
                  className="w-full py-2 px-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
                >
                  <span>Download Badge</span>
                  <Download className="w-4 h-4" />
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BadgeCollection;
