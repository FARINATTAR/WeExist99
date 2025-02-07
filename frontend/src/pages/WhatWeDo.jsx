import Navbar from "../Components/Navbar";
import ImpactTracker from "../Components/ImpactTracker";
import IntroSection from "../Components/IntoWhatWeDo";

const WhatWeDo = () => {
  return (
    <div className="bg-black">
      <Navbar />
      <div>
        <IntroSection />
      </div>

      <div>
        <ImpactTracker />
      </div>
    </div>
  );
};

export default WhatWeDo;
