import { useState } from "react";
import { ChevronLeft, ChevronRight, Lock } from "lucide-react";
import ally from "../assets/Member.png";
import Beacon from "../assets/Beacon of hope.png";
import impactBadge from "../assets/Impact Guardian.png";
import kindnessBadge from "../assets/Kindness.png";
import JusticeBadge from "../assets/Justice Sentinel.png";
import Vangaurd from "../assets/Trailblazer of Change.png";
const badges = [
  {
    name: "WeExist Ally",
    icon: ally,
    description: "Earned by signing up & joining the movement!",
    unlocked: true,
  },
  {
    name: "Beacon of Hope",
    icon: Beacon,
    description: "For first-time participation (donation, volunteer, or spreading awareness).",
    unlocked: false,
  },
  {
    name: "Impact Guardian",
    icon: impactBadge,
    description: "Awarded for consistent contributions – 3+ impact actions.",
    unlocked: false,
  },
  {
    name: "Kindness Crusader",
    icon: kindnessBadge,
    description: "For leading a small initiative or inspiring others to join.",
    unlocked: false,
  },
  {
    name: "Justice Sentinel",
    icon: JusticeBadge,
    description: "For making a major impact, like sponsoring a child or organizing donations.",
    unlocked: false,
  },
  {
    name: "Trailblazer of Change",
    icon: Vangaurd,
    description: "The ultimate badge for long-term leadership in WeExist!",
    unlocked: false,
  },
];

export default function BadgeShowcase() {
  const [currentBadge, setCurrentBadge] = useState(0);

  const nextBadge = () => setCurrentBadge((prev) => (prev + 1) % badges.length);
  const prevBadge = () => setCurrentBadge((prev) => (prev - 1 + badges.length) % badges.length);

  return (
    <div className=" bg-black flex flex-col items-center justify-center p-6">
      {/* Badge Display Section */}
      <div className="relative w-96 h-96 flex items-center justify-center shadow-lg bg-gray-900 rounded-2xl">
        <ChevronLeft className="absolute left-4 text-white cursor-pointer" size={40} onClick={prevBadge} />
        
        <img
          src={badges[currentBadge].icon}
          alt={badges[currentBadge].name}
          className="w-64 h-64 object-contain transition-transform duration-300"
        />
        
        <ChevronRight className="absolute right-4 text-white cursor-pointer" size={40} onClick={nextBadge} />
      </div>

      {/* Badge Info */}
      <div className="mt-6 text-center">
        <h2 className="text-2xl font-bold text-white">{badges[currentBadge].name}</h2>
        <p className="text-gray-400">{badges[currentBadge].description}</p>
      </div>

      {/* Unlock Progress Tracker */}
      <div className="mt-8 grid grid-cols-3 gap-4">
        {badges.map((badge, index) => (
          <div key={index} className="relative w-24 h-24">
            <img src={badge.icon} alt={badge.name} className={`w-full h-full object-contain ${!badge.unlocked ? "opacity-30" : ""}`} />
            {!badge.unlocked && <Lock className="absolute inset-0 m-auto text-gray-500" size={30} />}
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg text-lg shadow-md hover:bg-blue-700">
        Unlock Your First Badge!
      </button>
    </div>
  );
}
