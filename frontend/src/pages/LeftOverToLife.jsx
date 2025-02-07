import Navbar from '../Components/Navbar'; 
import React, { useState } from 'react'; 
import { motion, AnimatePresence } from 'framer-motion'; 
import { MoveRight, HandHeart } from 'lucide-react';

const LeftOverToLife = () => {
    const [isRevealed, setIsRevealed] = useState(false);

    const handleReveal = () => {
      setIsRevealed(true);
    };

    return (
        <div className="bg-gradient-to-br from-gray-900 via-black to-slate-800 text-white min-h-screen">
          {/* Hero Section */}
          <Navbar/>
          <section className="relative h-screen flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-black/50 z-10" />
            
            <div className="relative z-20 container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
              {/* Left Side */}
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-500">
                  Millions struggle with hunger,
                  <br />
                  but guess what?
                </h1>
              </motion.div>
    
              {/* Right Side */}
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative flex justify-center"
              >
                {/* Vertical Line */}
                <div className="absolute left-[-10px] top-0 h-full w-[2px] bg-white/40"></div>
    
                {!isRevealed ? (
                  <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-4 max-w-[300px] mx-auto">
                    <h2 className="text-2xl font-bold mb-4 text-gray-200">
                      Who can solve this?
                    </h2>
                    <motion.button 
                      onClick={handleReveal}
                      className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-8 py-3 rounded-full font-bold"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Reveal the Solution <MoveRight className="inline ml-2" />
                    </motion.button>
                  </div>
                ) : (
                  <AnimatePresence>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, type: "spring", stiffness: 70 }}
                      className="bg-gradient-to-br from-pink-500 to-red-500 rounded-full px-12 py-6 max-w-[450px] mx-auto flex flex-col items-center justify-center"
                    >
                      <motion.div
                        animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }}
                        transition={{
                          duration: 0.5,
                          repeat: Infinity,
                          repeatType: "reverse"
                        }}
                      >
                        <HandHeart size={120} className="text-white" />
                      </motion.div>
                      <h2 className="text-3xl font-bold mt-4 text-center">
                        YOU CAN SOLVE THIS!
                      </h2>
                      <p className="text-center mt-2 text-white/80">
                        One act of kindness at a time.
                      </p>
                    </motion.div>
                  </AnimatePresence>
                )}
              </motion.div>
            </div>
          </section>
    
          {/* Rest of the existing page content */}
          {/* ... (previous sections remain the same) */}
        </div>
      );
}

export default LeftOverToLife
