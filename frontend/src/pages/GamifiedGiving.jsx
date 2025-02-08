import BadgeShowcase from '../Components/BadgeReveal';
import Navbar from '../Components/Navbar'; 
import React, { useState } from 'react'; 
import UnlockBadge from '../Components/UnlockBadges';
import BadgeCollection from '../Components/UnlockBadges';


const GamifiedGiving = () => { 
  return (
    <div>
    <div>
      <Navbar/>
    </div>

    <div>
      <BadgeShowcase/>
    </div>
    <div>
      <BadgeCollection/>
    </div>
    </div>
  )

};

export default GamifiedGiving;
