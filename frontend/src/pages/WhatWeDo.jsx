// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import Navbar from "../Components/Navbar";
// import food from "../assets/food.png";
// import bin from "../assets/waste-bin.png";

// const TypewriterEffect = ({ text, onComplete, className, speed = 45 }) => {
//   const [displayedText, setDisplayedText] = useState("");
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     if (index < text.length) {
//       const timeout = setTimeout(() => {
//         setDisplayedText((prev) => prev + text.charAt(index));
//         setIndex(index + 1);
//       }, speed);
//       return () => clearTimeout(timeout);
//     } else if (onComplete) {
//       onComplete();
//     }
//   }, [index, text, onComplete, speed]);

//   return (
//     <h1 className={`text-3xl md:text-5xl font-bold text-white text-center ${className}`}>
//       {displayedText}
//     </h1>
//   );
// };

// const WhatWeDo = () => {
//   const [showSecondText, setShowSecondText] = useState(false);
//   const [binAlert, setBinAlert] = useState(false);

//   return (
//     <div className="min-h-screen flex flex-col bg-black p-6 relative overflow-hidden">
//       <div className="w-full fixed top-0 left-0 z-50">
//         <Navbar />
//       </div>
//       <div className="flex flex-col items-center justify-center flex-grow mt-16">
//         {/* First Text Animation */}
//         {!showSecondText && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 1.5 }}
//           >
//             <TypewriterEffect 
//               text="WeExist: More Than Just a Platform" 
//               onComplete={() => setTimeout(() => setShowSecondText(true), 150)}
//               speed={70} // Adjust speed here for first text
//             />
//           </motion.div>
//         )}

//         {/* Second Text Animation and Image Animation Simultaneously */}
//         {showSecondText && (
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1.5 }}
//           >
//             <TypewriterEffect text="Imagine a world where no food goes to waste" className="mb-6" speed={45} />
//             <div className="relative w-full h-96 flex items-center justify-center mt-8">
//               <motion.img
//                 src={food}
//                 alt="Food Pack"
//                 className="w-60 h-60 absolute"
//                 initial={{ x: -600, opacity: 1 }}
//                 animate={{ x: -35, opacity: 1 }}
//                 transition={{ duration: 2.5, ease: "easeInOut" }}
//               />

//               <motion.img
//                 src={bin}
//                 alt="Waste Bin"
//                 className="w-60 h-60 absolute"
//                 initial={{ x: 500, opacity: 1 }}
//                 animate={{
//                   x: 150,
//                   opacity: 1,
//                   ...(binAlert && {
//                     scale: 1.2,
//                     rotate: [0, -10, 10, -10, 10, 0],
//                     filter: "brightness(0.5) hue-rotate(-50deg) saturate(200%)",
//                   }),
//                 }}
//                 transition={{
//                   duration: 2.5,
//                   ease: "easeInOut",
//                   ...(binAlert && { repeat: 2, repeatType: "reverse", duration: 0.5 }),
//                 }}
//                 onAnimationComplete={() => setBinAlert(true)}
//               />
//             </div>
//           </motion.div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default WhatWeDo;
// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import Navbar from "../Components/Navbar";
// import food from "../assets/food.png";
// import bin from "../assets/waste-bin.png";
// import student from "../assets/student.png";
// import school from "../assets/school.png";

// const TypewriterEffect = ({ text, onComplete, speed = 45, className }) => {
//   const [displayedText, setDisplayedText] = useState("");
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     if (index < text.length) {
//       const timeout = setTimeout(() => {
//         setDisplayedText((prev) => prev + text.charAt(index));
//         setIndex(index + 1);
//       }, speed);
//       return () => clearTimeout(timeout);
//     } else if (onComplete) {
//       setTimeout(onComplete, 1000);
//     }
//   }, [index, text, onComplete, speed]);

//   return (
//     <h1 className={`text-3xl md:text-5xl font-bold text-white text-center ${className}`}>
//       {displayedText}
//     </h1>
//   );
// };

// const WhatWeDo = () => {
//   const [stage, setStage] = useState(0);

//   return (
//     <div className="min-h-screen flex flex-col bg-black p-6 relative overflow-hidden">
//       <div className="w-full fixed top-0 left-0 z-50">
//         <Navbar />
//       </div>
//       <div className="flex flex-col items-center justify-center flex-grow mt-16">
//         {/* School image placed outside of stage conditions to remain completely static */}
//         {stage === 2 && (
//           <div className="absolute w-full h-96">
//             <img 
//               src={school} 
//               alt="School" 
//               className="absolute"
//               style={{
//                 left: '150px',
//                 bottom: '-30px',
//                 width: '350px',
//                 height: '300px',
//                 zIndex: 1
//               }}
//             />
//           </div>
//         )}

//         {stage === 0 && (
//           <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }}>
//             <TypewriterEffect text="WeExist: More Than Just a Platform" speed={30} onComplete={() => setStage(1)} />
//           </motion.div>
//         )}

//         {stage === 1 && (
//           <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }}>
//             <TypewriterEffect text="Imagine a world where no food goes to waste" className="mb-6" onComplete={() => setTimeout(() => setStage(2), 150)} />
//             <div className="relative w-full h-96 flex items-center justify-center mt-8">
//               <motion.img src={food} alt="Food Pack" className="w-60 h-60 absolute" initial={{ x: -600 }} animate={{ x: -35 }} transition={{ duration: 2.5, ease: "easeInOut" }} />
//               <motion.img src={bin} alt="Waste Bin" className="w-60 h-60 absolute" initial={{ x: 500 }} animate={{ x: 150 }} transition={{ duration: 2.5, ease: "easeInOut" }} />
//             </div>
//           </motion.div>
//         )}

//         {stage === 2 && (
//           <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }}>
//             <TypewriterEffect text="Every child gets an education..." className="mb-6" />
//             <div className="relative w-full h-96 flex items-center justify-center mt-8">
//               {/* Student Image - Animated from right to left */}
//               <motion.img 
//                 src={student} 
//                 alt="Student" 
//                 className="absolute w-[250px] h-[250px]"
//                 style={{ marginBottom: '-100px', zIndex: 2 }}
//                 initial={{ x: 500 }} 
//                 animate={{ x: -100 }} 
//                 transition={{ duration: 2.5, ease: "easeInOut" }} 
//               />
//             </div>
//           </motion.div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default WhatWeDo;
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../Components/Navbar";
import food from "../assets/food.png";
import bin from "../assets/waste-bin.png";
import student from "../assets/student.png";
import school from "../assets/school.png";
import communityHelp1 from "../assets/community1.png";
import celebration from "../assets/celebration.png";
import communityHelp2 from "../assets/community2.png";

const TypewriterEffect = ({ text, onComplete, speed = 45, className }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text.charAt(index));
        setIndex(index + 1);
      }, speed);
      return () => clearTimeout(timeout);
    } else if (onComplete) {
      setTimeout(onComplete, 1000);
    }
  }, [index, text, onComplete, speed]);

  return (
    <h1 className={`text-3xl md:text-5xl font-bold text-white text-center ${className}`}>
      {displayedText}
    </h1>
  );
};

const WhatWeDo = () => {
  const [stage, setStage] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [communityHelp1, celebration, communityHelp2];

  useEffect(() => {
    if (stage === 3) {
      // Show each image once in sequence with faster timing
      if (currentImageIndex < images.length - 1) {
        const timeout = setTimeout(() => {
          setCurrentImageIndex(prev => prev + 1);
        }, 1800); // Faster timing between images
        return () => clearTimeout(timeout);
      }
    }
  }, [stage, currentImageIndex]);

  return (
    <div className="min-h-screen flex flex-col bg-black p-6 relative overflow-hidden">
      <div className="w-full fixed top-0 left-0 z-50">
        <Navbar />
      </div>
      <div className="flex flex-col items-center justify-center flex-grow mt-16">
        {/* School image placed outside of stage conditions to remain completely static */}
        {stage === 2 && (
          <div className="absolute w-full h-96">
            <img 
              src={school} 
              alt="School" 
              className="absolute"
              style={{
                left: '150px',
                bottom: '-30px',
                width: '350px',
                height: '300px',
                zIndex: 1
              }}
            />
          </div>
        )}

        {stage === 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }}>
            <TypewriterEffect text="WeExist: More Than Just a Platform" speed={30} onComplete={() => setStage(1)} />
          </motion.div>
        )}

        {stage === 1 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }}>
            <TypewriterEffect text="Imagine a world where no food goes to waste" className="mb-6" onComplete={() => setTimeout(() => setStage(2), 150)} />
            <div className="relative w-full h-96 flex items-center justify-center mt-8">
              <motion.img src={food} alt="Food Pack" className="w-60 h-60 absolute" initial={{ x: -600 }} animate={{ x: -35 }} transition={{ duration: 2.5, ease: "easeInOut" }} />
              <motion.img src={bin} alt="Waste Bin" className="w-60 h-60 absolute" initial={{ x: 500 }} animate={{ x: 150 }} transition={{ duration: 2.5, ease: "easeInOut" }} />
            </div>
          </motion.div>
        )}

        {stage === 2 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }}>
            <TypewriterEffect 
              text="Every child gets an education..." 
              className="mb-6" 
              onComplete={() => setTimeout(() => setStage(3), 150)} 
            />
            <div className="relative w-full h-96 flex items-center justify-center mt-8">
              <motion.img 
                src={student} 
                alt="Student" 
                className="absolute w-[250px] h-[250px]"
                style={{ marginBottom: '-100px', zIndex: 2 }}
                initial={{ x: 500 }} 
                animate={{ x: -100 }} 
                transition={{ duration: 2.5, ease: "easeInOut" }} 
              />
            </div>
          </motion.div>
        )}

        {/* Updated community help section with larger images and faster transitions */}
        {stage === 3 && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 1.5 }}
          >
            <TypewriterEffect 
              text="Together, we're building a community where compassion meets action..." 
              className="mb-6" 
            />
            <div className="relative w-full h-96 flex items-center justify-center mt-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImageIndex}
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 100 }}
                  transition={{ duration: 0.8 }}
                  className="absolute"
                >
                  <motion.img
                    src={images[currentImageIndex]}
                    alt={`Community ${currentImageIndex + 1}`}
                    className="w-[500px] h-[400px] object-contain"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default WhatWeDo;