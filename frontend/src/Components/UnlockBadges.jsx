import React, { useState, useEffect } from "react";
import { Lock, Download } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ally from "../assets/Member.png";
import Beacon from "../assets/BeaconofHope.png";
import impactBadge from "../assets/ImpactGuardian.png";
import kindnessBadge from "../assets/Kindness.png";
import JusticeBadge from "../assets/JusticeSentinel.png";
import Vanguard from "../assets/TrailblazerOfChange.png";

const badgeRequirements = [
  {
    id: 1,
    name: "WeExist Ally",
    image: ally,
    requirement: "Sign up to unlock your first badge!",
    isLocked: true, // Initially locked
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
    requirement:
      "Achieve all previous badges and maintain exceptional status for 3 months",
    isLocked: true,
    unlockCriteria: "legendary",
    progress: "0/3 months",
  },
];

const BadgeCollection = () => {
  const [badges, setBadges] = useState(badgeRequirements);
  const navigate = useNavigate();

  // Check if user has signed up
  useEffect(() => {
    const userSignedUp = localStorage.getItem("userSignedUp") === "true";
    if (userSignedUp) {
      setBadges((prevBadges) =>
        prevBadges.map((badge) =>
          badge.id === 1 ? { ...badge, isLocked: false } : badge
        )
      );
    }
  }, []);

  const handleSignupRedirect = () => {
    navigate("/signup");
  };

  const handleDownload = (badgeId) => {
    console.log(`Downloading badge ${badgeId}`);
  };

  return (
    <div className="min-h-screen bg-black py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">
          Badge Collection
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {badges.map((badge) => (
            <div
              key={badge.id}
              className="bg-gray-900 rounded-lg p-6 flex flex-col items-center"
            >
              <div className="relative mb-6 group">
                <img
                  src={badge.image}
                  alt={badge.name}
                  className={`w-48 h-48 object-contain ${
                    badge.isLocked ? "opacity-20" : ""
                  }`}
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
                  onClick={() => handleDownload(badge.id)}
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
