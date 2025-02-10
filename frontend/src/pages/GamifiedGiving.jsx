import BadgeShowcase from '../Components/BadgeReveal';
import Navbar from '../Components/Navbar'; 
import React, { useState } from 'react'; 
import BadgeCollection from '../Components/UnlockBadges';
import VibeCheck from "../Components/VibeCheck";
import ImpactDashboard from '../Components/BadgeAndProgressTracker';
import LeaderboardSection from '../Components/CommunityLeaderboard';
import Footer from "../Components/Footer";

const GamifiedGiving = () => { 
  return (
    <div className='bg-black'>
    <div>
      <Navbar/>
    </div>

    <div>
      <BadgeShowcase/>
    </div>
    <div>
      <BadgeCollection/>
    </div>

    <div>
      <VibeCheck/>
    </div>

    <div>
      <ImpactDashboard/>
    </div>

    <div>
      <LeaderboardSection/>
    </div>

    <div>
      <Footer/>
    </div>
    </div>
  )

};

export default GamifiedGiving;
