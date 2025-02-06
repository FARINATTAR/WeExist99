// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import Navbar from "../Components/Navbar";
// import food from "../assets/food.png";
// import bin from "../assets/waste-bin.png";

// const TypewriterEffect = ({ text, onComplete }) => {
//   const [displayedText, setDisplayedText] = useState("");
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     if (index < text.length) {
//       const timeout = setTimeout(() => {
//         setDisplayedText((prev) => prev + text.charAt(index));
//         setIndex(index + 1);
//       }, 100);
//       return () => clearTimeout(timeout);
//     } else if (index === text.length && onComplete) {
//       setTimeout(onComplete, 200);
//     }
//   }, [index, text, onComplete]);

//   return (
//     <h1 className="text-3xl md:text-5xl font-bold text-white text-center">
//       {displayedText}
//     </h1>
//   );
// };

// const WhatWeDo = () => {
//   const [showAnimation, setShowAnimation] = useState(false);
//   const [binAlert, setBinAlert] = useState(false);

//   return (
//     <div className="min-h-screen flex flex-col bg-black p-6 relative overflow-hidden">
//       <div className="w-full fixed top-0 left-0 z-50">
//         <Navbar />
//       </div>
//       <div className="flex flex-col items-center justify-center flex-grow mt-16">
//         {!showAnimation ? (
//           <TypewriterEffect
//             text="Imagine a world where no food goes to waste"
//             onComplete={() => setShowAnimation(true)}
//           />
//         ) : (
//           <div className="relative w-full h-96 flex items-center justify-center">
//             {/* Food Image Animation (Extreme Left to Center) */}
//             <motion.img
//               src={food}
//               alt="Food Pack"
//               className="w-60 h-60 absolute"
//               initial={{ x: -600, opacity: 1 }}
//               animate={{ x: -35, opacity: 1 }}
//               transition={{ duration: 2, ease: "easeInOut" }}
//               onAnimationComplete={() => setBinAlert(true)}
//             />

//             {/* Waste Bin (Extreme Right to Center, then shakes and turns red) */}
//             <motion.img
//               src={bin}
//               alt="Waste Bin"
//               className="w-60 h-60 absolute"
//               initial={{ x: 500, opacity: 1 }}
//               animate={{
//                 x: 150,
//                 opacity: 1,
//                 ...(binAlert && {
//                   scale: 1.2,
//                   rotate: [0, -10, 10, -10, 10, 0], 
//                   filter: "brightness(0.5) hue-rotate(-50deg) saturate(200%)"
//                 }),
//               }}
//               transition={{
//                 duration: 2,
//                 ease: "easeInOut",
//                 ...(binAlert && { repeat: 2, repeatType: "reverse", duration: 0.5 }),
//               }}
//             />
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default WhatWeDo;
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "../Components/Navbar";
import food from "../assets/food.png";
import bin from "../assets/waste-bin.png";

const TypewriterEffect = ({ text }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text.charAt(index));
        setIndex(index + 1);
      }, 45); // Faster text animation
      return () => clearTimeout(timeout);
    }
  }, [index, text]);

  return (
    <h1 className="text-3xl md:text-5xl font-bold text-white text-center">
      {displayedText}
    </h1>
  );
};

const WhatWeDo = () => {
  const [binAlert, setBinAlert] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-black p-6 relative overflow-hidden">
      <div className="w-full fixed top-0 left-0 z-50">
        <Navbar />
      </div>
      <div className="flex flex-col items-center justify-center flex-grow mt-16">
        {/* Text Animation */}
        <TypewriterEffect text="Imagine a world where no food goes to waste" />

        {/* Image Animations */}
        <div className="relative w-full h-96 flex items-center justify-center mt-8">
          <motion.img
            src={food}
            alt="Food Pack"
            className="w-60 h-60 absolute"
            initial={{ x: -600, opacity: 1 }}
            animate={{ x: -35, opacity: 1 }}
            transition={{ duration: 2.5, ease: "easeInOut" }} // Faster image animation
          />

          <motion.img
            src={bin}
            alt="Waste Bin"
            className="w-60 h-60 absolute"
            initial={{ x: 500, opacity: 1 }}
            animate={{
              x: 150,
              opacity: 1,
              ...(binAlert && {
                scale: 1.2,
                rotate: [0, -10, 10, -10, 10, 0],
                filter: "brightness(0.5) hue-rotate(-50deg) saturate(200%)",
              }),
            }}
            transition={{
              duration: 2.5,
              ease: "easeInOut",
              ...(binAlert && { repeat: 2, repeatType: "reverse", duration: 0.5 }),
            }}
            onAnimationComplete={() => setBinAlert(true)} // Trigger shake after movement
          />
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
