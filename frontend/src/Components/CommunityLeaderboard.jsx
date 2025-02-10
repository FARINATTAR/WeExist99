// import React, { useState } from 'react';
// import { Crown, Medal, Trophy, Clock, Calendar, History } from 'lucide-react';

// const LeaderboardSection = () => {
//   const [timeFilter, setTimeFilter] = useState('weekly');
//   const [metricFilter, setMetricFilter] = useState('meals');

//   const topUsers = [
//     { id: 1, username: "Sarah_Gives", avatar: "/api/placeholder/50/50", score: 1250, rank: 1, title: "Legendary Giver" },
//     { id: 2, username: "JohnDoe", avatar: "/api/placeholder/50/50", score: 1100, rank: 2, title: "Community Hero" },
//     { id: 3, username: "GivingHeart", avatar: "/api/placeholder/50/50", score: 950, rank: 3, title: "Generous Soul" }
//   ];

//   const currentUser = {
//     rank: 12,
//     username: "CurrentUser",
//     score: 450,
//     progress: 75,
//     nextRank: 11,
//     pointsToNext: 25
//   };

//   const getMetricLabel = () => {
//     switch (metricFilter) {
//       case 'meals': return 'Meals';
//       case 'hours': return 'Hours';
//       case 'donations': return 'Donations';
//       default: return 'Contributions';
//     }
//   };

//   return (
//     <div className="w-full max-w-4xl mx-auto space-y-6 p-4 bg-black text-white mt-[200px]">
//       {/* Filters */}
//       <div className="flex flex-col sm:flex-row justify-between gap-4">
//         {/* Metric Filters */}
//         <div className="flex bg-zinc-900 rounded-xl p-1">
//           <button 
//             onClick={() => setMetricFilter('meals')}
//             className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
//               metricFilter === 'meals' 
//                 ? 'bg-zinc-800 text-white' 
//                 : 'text-zinc-400 hover:text-white'
//             }`}
//           >
//             🥗 Meals
//           </button>
//           <button 
//             onClick={() => setMetricFilter('hours')}
//             className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
//               metricFilter === 'hours' 
//                 ? 'bg-zinc-800 text-white' 
//                 : 'text-zinc-400 hover:text-white'
//             }`}
//           >
//             🏅 Hours
//           </button>
//           <button 
//             onClick={() => setMetricFilter('donations')}
//             className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
//               metricFilter === 'donations' 
//                 ? 'bg-zinc-800 text-white' 
//                 : 'text-zinc-400 hover:text-white'
//             }`}
//           >
//             💰 Donations
//           </button>
//         </div>

//         {/* Time Filters */}
//         <div className="flex bg-zinc-900 rounded-xl p-1">
//           <button 
//             onClick={() => setTimeFilter('weekly')}
//             className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all ${
//               timeFilter === 'weekly' 
//                 ? 'bg-zinc-800 text-white' 
//                 : 'text-zinc-400 hover:text-white'
//             }`}
//           >
//             <Clock className="w-4 h-4 mr-1" /> Weekly
//           </button>
//           <button 
//             onClick={() => setTimeFilter('monthly')}
//             className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all ${
//               timeFilter === 'monthly' 
//                 ? 'bg-zinc-800 text-white' 
//                 : 'text-zinc-400 hover:text-white'
//             }`}
//           >
//             <Calendar className="w-4 h-4 mr-1" /> Monthly
//           </button>
//           <button 
//             onClick={() => setTimeFilter('alltime')}
//             className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all ${
//               timeFilter === 'alltime' 
//                 ? 'bg-zinc-800 text-white' 
//                 : 'text-zinc-400 hover:text-white'
//             }`}
//           >
//             <History className="w-4 h-4 mr-1" /> All-Time
//           </button>
//         </div>
//       </div>

//       {/* Top 3 Podium */}
//       <div className="grid grid-cols-3 gap-4 my-8">
//         {/* Second Place */}
//         <div className="flex flex-col items-center justify-end bg-zinc-900/50 rounded-xl p-4">
//           <div className="w-16 h-16 rounded-full bg-zinc-800 mb-2 overflow-hidden">
//             <img src={topUsers[1].avatar} alt={topUsers[1].username} className="w-full h-full object-cover" />
//           </div>
//           <Medal className="w-6 h-6 text-zinc-400" />
//           <div className="text-center mt-2">
//             <div className="font-semibold">{topUsers[1].username}</div>
//             <div className="text-sm text-zinc-400">{topUsers[1].score} {getMetricLabel()}</div>
//           </div>
//         </div>

//         {/* First Place */}
//         <div className="flex flex-col items-center bg-gradient-to-b from-zinc-800 to-zinc-900 rounded-xl p-4 -mt-4">
//           <Crown className="w-8 h-8 text-yellow-500" />
//           <div className="w-20 h-20 rounded-full bg-zinc-800 mb-2 overflow-hidden ring-2 ring-yellow-500">
//             <img src={topUsers[0].avatar} alt={topUsers[0].username} className="w-full h-full object-cover" />
//           </div>
//           <div className="text-center mt-2">
//             <div className="font-bold text-yellow-500">{topUsers[0].username}</div>
//             <div className="text-sm text-zinc-400">{topUsers[0].score} {getMetricLabel()}</div>
//           </div>
//         </div>

//         {/* Third Place */}
//         <div className="flex flex-col items-center justify-end bg-zinc-900/50 rounded-xl p-4">
//           <div className="w-16 h-16 rounded-full bg-zinc-800 mb-2 overflow-hidden">
//             <img src={topUsers[2].avatar} alt={topUsers[2].username} className="w-full h-full object-cover" />
//           </div>
//           <Trophy className="w-6 h-6 text-orange-700" />
//           <div className="text-center mt-2">
//             <div className="font-semibold">{topUsers[2].username}</div>
//             <div className="text-sm text-zinc-400">{topUsers[2].score} {getMetricLabel()}</div>
//           </div>
//         </div>
//       </div>

//       {/* Your Rank Card */}
//       <div className="bg-zinc-900 rounded-xl p-6">
//         <h2 className="text-xl font-bold mb-4">Your Ranking</h2>
//         <div className="flex items-center justify-between mb-4">
//           <div>
//             <div className="text-2xl font-bold">#{currentUser.rank}</div>
//             <div className="text-sm text-zinc-400">{currentUser.username}</div>
//           </div>
//           <div className="text-right">
//             <div className="text-xl font-semibold">{currentUser.score} {getMetricLabel()}</div>
//             <div className="text-sm text-zinc-400">
//               {currentUser.pointsToNext} to rank #{currentUser.nextRank}
//             </div>
//           </div>
//         </div>
//         <div className="w-full bg-zinc-800 rounded-full h-2">
//           <div 
//             className="bg-white h-2 rounded-full transition-all duration-500"
//             style={{ width: `${currentUser.progress}%` }}
//           ></div>
//         </div>
//         <div className="text-sm text-center mt-2 text-zinc-400">
//           You're just {currentUser.pointsToNext} {getMetricLabel().toLowerCase()} away from the Top 10! Keep going!
//         </div>
//       </div>

//       {/* Main Leaderboard */}
//       <div className="bg-zinc-900 rounded-xl overflow-hidden">
//         <div className="p-6 border-b border-zinc-800">
//           <h2 className="text-xl font-bold">Leaderboard</h2>
//         </div>
//         <div>
//           {topUsers.map((user) => (
//             <div 
//               key={user.id}
//               className="flex items-center p-4 hover:bg-zinc-800 transition-colors"
//             >
//               <div className="w-8 font-bold text-zinc-400">#{user.rank}</div>
//               <div className="w-12 h-12 rounded-full bg-zinc-800 overflow-hidden mx-4">
//                 <img src={user.avatar} alt={user.username} className="w-full h-full object-cover" />
//               </div>
//               <div className="flex-grow">
//                 <div className="font-semibold">{user.username}</div>
//                 <div className="text-sm text-zinc-400">{user.title}</div>
//               </div>
//               <div className="text-right">
//                 <div className="font-semibold">{user.score}</div>
//                 <div className="text-sm text-zinc-400">{getMetricLabel()}</div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Call to Action */}
//       <div className="text-center py-8">
//         <h3 className="text-xl font-semibold mb-4">Want to climb the ranks? Start making an impact today!</h3>
//         <div className="flex justify-center gap-4">
//           <button className="px-6 py-2 bg-black text-text rounded-lg hover:bg-zinc-200 transition-colors">
//             Make a Donation
//           </button>
//           <button className="px-6 py-2 border border-zinc-700 rounded-lg hover:bg-zinc-800 transition-colors">
//             Volunteer Now
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LeaderboardSection;

import React, { useState } from 'react';
import { Crown, Medal, Trophy, Clock, Calendar, History } from 'lucide-react';

const LeaderboardSection = () => {
  const [timeFilter, setTimeFilter] = useState('weekly');
  const [metricFilter, setMetricFilter] = useState('meals');

  const topUsers = [
    { id: 1, username: "Sarah_Gives", avatar: "/api/placeholder/50/50", score: 1250, rank: 1, title: "Legendary Giver" },
    { id: 2, username: "JohnDoe", avatar: "/api/placeholder/50/50", score: 1100, rank: 2, title: "Community Hero" },
    { id: 3, username: "GivingHeart", avatar: "/api/placeholder/50/50", score: 950, rank: 3, title: "Generous Soul" }
  ];

  const currentUser = {
    rank: 12,
    username: "CurrentUser",
    score: 450,
    progress: 75,
    nextRank: 11,
    pointsToNext: 25
  };

  const getMetricLabel = () => {
    switch (metricFilter) {
      case 'meals': return 'Meals';
      case 'hours': return 'Hours';
      case 'donations': return 'Donations';
      default: return 'Contributions';
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0A0F] bg-gradient-to-b from-purple-900/10 text-white p-6 mt-[150px]">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header with Gradient Line */}
        <div className="relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent blur-sm" />
          <div className="pt-8 text-center space-y-3">
            <h1 className="text-5xl font-bold">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400">
                LEADERBOARD
              </span>
            </h1>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row justify-between gap-4">
          {/* Metric Filters */}
          <div className="flex bg-gray-900/50 backdrop-blur-sm rounded-xl p-1 border border-gray-800/50">
            <button 
              onClick={() => setMetricFilter('meals')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                metricFilter === 'meals' 
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              🥗 Meals
            </button>
            <button 
              onClick={() => setMetricFilter('hours')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                metricFilter === 'hours' 
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              🏅 Hours
            </button>
            <button 
              onClick={() => setMetricFilter('donations')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                metricFilter === 'donations' 
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              💰 Donations
            </button>
          </div>

          {/* Time Filters */}
          <div className="flex bg-gray-900/50 backdrop-blur-sm rounded-xl p-1 border border-gray-800/50">
            <button 
              onClick={() => setTimeFilter('weekly')}
              className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                timeFilter === 'weekly' 
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <Clock className="w-4 h-4 mr-1" /> Weekly
            </button>
            <button 
              onClick={() => setTimeFilter('monthly')}
              className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                timeFilter === 'monthly' 
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <Calendar className="w-4 h-4 mr-1" /> Monthly
            </button>
            <button 
              onClick={() => setTimeFilter('alltime')}
              className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                timeFilter === 'alltime' 
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <History className="w-4 h-4 mr-1" /> All-Time
            </button>
          </div>
        </div>

        {/* Top 3 Podium */}
        <div className="grid grid-cols-3 gap-4 my-8">
          {/* Second Place */}
          <div className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur-lg opacity-40 group-hover:opacity-75 transition-all duration-500" />
            <div className="relative flex flex-col items-center justify-end bg-gray-900/50 backdrop-blur-sm rounded-xl p-4 border border-gray-800/50">
              <div className="w-16 h-16 rounded-full bg-gray-800 mb-2 overflow-hidden">
                <img src={topUsers[1].avatar} alt={topUsers[1].username} className="w-full h-full object-cover" />
              </div>
              <Medal className="w-6 h-6 text-gray-400" />
              <div className="text-center mt-2">
                <div className="font-semibold">{topUsers[1].username}</div>
                <div className="text-sm text-gray-400">{topUsers[1].score} {getMetricLabel()}</div>
              </div>
            </div>
          </div>

          {/* First Place */}
          <div className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-yellow-600 to-orange-600 rounded-2xl blur-lg opacity-40 group-hover:opacity-75 transition-all duration-500" />
            <div className="relative flex flex-col items-center bg-gray-900/50 backdrop-blur-sm rounded-xl p-4 -mt-4 border border-gray-800/50">
              <Crown className="w-8 h-8 text-yellow-500" />
              <div className="w-20 h-20 rounded-full bg-gray-800 mb-2 overflow-hidden ring-2 ring-yellow-500">
                <img src={topUsers[0].avatar} alt={topUsers[0].username} className="w-full h-full object-cover" />
              </div>
              <div className="text-center mt-2">
                <div className="font-bold text-yellow-500">{topUsers[0].username}</div>
                <div className="text-sm text-gray-400">{topUsers[0].score} {getMetricLabel()}</div>
              </div>
            </div>
          </div>

          {/* Third Place */}
          <div className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur-lg opacity-40 group-hover:opacity-75 transition-all duration-500" />
            <div className="relative flex flex-col items-center justify-end bg-gray-900/50 backdrop-blur-sm rounded-xl p-4 border border-gray-800/50">
              <div className="w-16 h-16 rounded-full bg-gray-800 mb-2 overflow-hidden">
                <img src={topUsers[2].avatar} alt={topUsers[2].username} className="w-full h-full object-cover" />
              </div>
              <Trophy className="w-6 h-6 text-orange-700" />
              <div className="text-center mt-2">
                <div className="font-semibold">{topUsers[2].username}</div>
                <div className="text-sm text-gray-400">{topUsers[2].score} {getMetricLabel()}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Your Rank Card */}
        <div className="group relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur-lg opacity-40 group-hover:opacity-75 transition-all duration-500" />
          <div className="relative bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800/50">
            <h2 className="text-xl font-bold mb-4">Your Ranking</h2>
            <div className="flex items-center justify-between mb-4">
              <div>
                <div className="text-2xl font-bold">#{currentUser.rank}</div>
                <div className="text-sm text-gray-400">{currentUser.username}</div>
              </div>
              <div className="text-right">
                <div className="text-xl font-semibold">{currentUser.score} {getMetricLabel()}</div>
                <div className="text-sm text-gray-400">
                  {currentUser.pointsToNext} to rank #{currentUser.nextRank}
                </div>
              </div>
            </div>
            <div className="w-full bg-gray-800 rounded-full h-2">
              <div 
                className="h-full rounded-full bg-gradient-to-r from-purple-600 to-pink-600 transition-all duration-500"
                style={{ width: `${currentUser.progress}%` }}
              ></div>
            </div>
            <div className="text-sm text-center mt-2 text-gray-400">
              You're just {currentUser.pointsToNext} {getMetricLabel().toLowerCase()} away from the Top 10! Keep going!
            </div>
          </div>
        </div>

        {/* Main Leaderboard */}
        <div className="group relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur-lg opacity-40 group-hover:opacity-75 transition-all duration-500" />
          <div className="relative bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800/50">
            <div className="p-6 border-b border-gray-800">
              <h2 className="text-xl font-bold">Leaderboard</h2>
            </div>
            <div>
              {topUsers.map((user) => (
                <div 
                  key={user.id}
                  className="flex items-center p-4 hover:bg-gray-800/50 transition-colors"
                >
                  <div className="w-8 font-bold text-gray-400">#{user.rank}</div>
                  <div className="w-12 h-12 rounded-full bg-gray-800 overflow-hidden mx-4">
                    <img src={user.avatar} alt={user.username} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-grow">
                    <div className="font-semibold">{user.username}</div>
                    <div className="text-sm text-gray-400">{user.title}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold">{user.score}</div>
                    <div className="text-sm text-gray-400">{getMetricLabel()}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center py-8">
          <h3 className="text-xl font-semibold mb-4">Want to climb the ranks? Start making an impact today!</h3>
          <div className="flex justify-center gap-4">
            <button className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-lg font-bold transition-transform hover:-translate-y-1">
              Make a Donation
            </button>
            <button className="px-6 py-2 border border-gray-700 rounded-lg hover:bg-gray-800 transition-all hover:-translate-y-1">
              Volunteer Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaderboardSection;