import BadgeShowcase from '../Components/BadgeReveal';
import Navbar from '../Components/Navbar'; 
import React, { useState } from 'react'; 


const GamifiedGiving = () => { 
  return (
    <div>
    <div>
      <Navbar/>
    </div>

    <div>
      <BadgeShowcase/>
    </div>
    </div>
  )

};

export default GamifiedGiving;
