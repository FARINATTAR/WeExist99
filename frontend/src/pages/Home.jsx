import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar';
import Earth from '../models/Earth';
import { Hud } from '@react-three/drei';
import HungerImpactSection from '../Components/WhyWeExist';
import BreakTheChains from './BreakTheChains';
import JigsawGame from './BreakTheChains';
import HowYouCanHelp from '../Components/HowWeHelp';
import ImpactTracker from '../Components/ImpactTracker';
import BadgesSection from '../Components/BadgesSection';
import CTASection from '../Components/CTASection';
import Footer from '../Components/Footer'

const Home = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <div className="bg-black min-h-screen w-full text-white flex flex-col items-center">
      <Navbar />
      
      {/* Centered Content */}
      <div className="flex flex-col items-center justify-center mt-20 md:mt-20 space-y-12 text-center">
        {/* Animated Headings */}
        <h1 className={`unlock-regular text-5xl md:text-7xl text-yellow-600 transition-all duration-1000 ease-out transform ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          TOGETHER WE THRIVE TOGETHER
        </h1>
        <h2 className={`unlock-regular text-4xl md:text-6xl font-bold text-white transition-all duration-1000 ease-out delay-500 transform ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          WE EXIST
        </h2>
        
        {/* Earth Model - Centered Properly */}
        <div className="w-full h-[500px] flex justify-center items-center -mt-10">
          <Earth />
        </div>

        <div>
          <HungerImpactSection/>
        </div>

        <div>
          <HowYouCanHelp/>
        </div>

        {/* <div>
          <ImpactTracker/>
        </div> */}
      </div>

      <div>
        <BadgesSection/>
      </div>

      <div>
        <CTASection/>
      </div>

      <div className='w-full'>
        <Footer/>
      </div>
    </div>
  );
};

export default Home;
