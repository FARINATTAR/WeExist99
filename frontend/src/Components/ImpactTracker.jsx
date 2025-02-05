import React, { useState, useEffect } from 'react';
import { AlertCircle } from 'lucide-react';

const ImpactTracker = () => {
  const [stats, setStats] = useState({
    meals: 1234,
    people: 892,
    funds: 45678
  });
  
  const [progress, setProgress] = useState(75);
  const [latestDonation, setLatestDonation] = useState({
    id: Date.now(),
    name: 'John',
    amount: 5
  });
  const [isAnimating, setIsAnimating] = useState(false);
  
  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      // Update stats randomly
      setStats(prev => ({
        meals: prev.meals + Math.floor(Math.random() * 3),
        people: prev.people + Math.floor(Math.random() * 2),
        funds: prev.funds + Math.floor(Math.random() * 100)
      }));
      
      // Add new donation message with animation
      const names = ['John', 'Sarah', 'Miguel', 'Emma', 'Alex'];
      const amounts = [3, 5, 10, 15, 20];
      
      setIsAnimating(true);
      setTimeout(() => {
        setLatestDonation({
          id: Date.now(),
          name: names[Math.floor(Math.random() * names.length)],
          amount: amounts[Math.floor(Math.random() * amounts.length)]
        });
        setIsAnimating(false);
      }, 500);
      
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="bg-black text-white p-12 rounded-lg w-full max-w-6xl mx-auto">
      <h1 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-yellow-400 via-green-400 to-blue-500 bg-clip-text text-transparent">
        See Your Impact in Action
      </h1>
      
      <div className="grid grid-cols-3 gap-16 mb-16">
        <div className="text-center">
          <div className="text-4xl font-bold text-yellow-400 mb-3">
            {stats.meals.toLocaleString()}
          </div>
          <div className="text-gray-400 text-lg">Meals Donated</div>
        </div>
        
        <div className="text-center">
          <div className="text-4xl font-bold text-green-400 mb-3">
            {stats.people.toLocaleString()}
          </div>
          <div className="text-gray-400 text-lg">People Helped</div>
        </div>
        
        <div className="text-center">
          <div className="text-4xl font-bold text-blue-400 mb-3">
            ${stats.funds.toLocaleString()}
          </div>
          <div className="text-gray-400 text-lg">Funds Raised</div>
        </div>
      </div>
      
      <div className="mb-12">
        <div className="flex justify-between mb-3">
          <span className="text-gray-400 text-lg">Progress to next milestone</span>
          <span className="text-gray-400 text-lg">{progress}%</span>
        </div>
        <div className="h-6 bg-gray-800 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-yellow-400 via-green-400 to-blue-500 transition-all duration-1000 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="text-base text-gray-400 mt-3">
          5 more donations needed to feed 100 people this week!
        </div>
      </div>
      
      <div>
        <div className="flex items-center gap-2 text-gray-400 mb-4">
          <AlertCircle className="w-5 h-5" />
          <span className="text-lg">Recent Activity</span>
        </div>
        <div
          className={`bg-gray-800 p-6 rounded-lg text-gray-200 text-lg transition-opacity duration-500 ${
            isAnimating ? 'opacity-0' : 'opacity-100'
          }`}
        >
          {latestDonation.name} just donated {latestDonation.amount} meals!
        </div>
      </div>
    </div>
  );
};

export default ImpactTracker;