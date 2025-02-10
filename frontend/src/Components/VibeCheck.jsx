import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import gigaChad from "../assets/GigaChad.gif";
import chillGuy from "../assets/ChillGuy.gif";
import pookie from "../assets/Pookie.gif";

const VibeCheckDonation = () => {
  const [selectedVibe, setSelectedVibe] = useState(null);
  const navigate = useNavigate();

  const vibeOptions = [
    {
      id: 'gigachad',
      name: 'GIGACHAD',
      text: 'I donate like a legend.',
      description: 'LEGENDARY HERO MODE ON.',
      gifUrl: gigaChad,
      textColor: 'bg-gradient-to-r from-green-200 via-lime-300 to-green-400 bg-clip-text text-transparent',
      borderColor: 'border-white-300',
    },
    {
      id: 'chill',
      name: 'CHILL GUY',
      text: 'I help out in my own way.',
      description: 'COOL AND COLLECTED HERO.',
      gifUrl: chillGuy,
      textColor: 'bg-gradient-to-r from-blue-200 via-cyan-300 to-blue-400 bg-clip-text text-transparent',
      borderColor: 'border-white-300',
    },
    {
      id: 'pookie',
      name: 'POOKIE',
      text: 'I do things my way, but I still care.',
      description: 'UNIQUE HERO ENERGY.',
      gifUrl: pookie,
      textColor: 'bg-gradient-to-r from-pink-200 via-rose-300 to-pink-400 bg-clip-text text-transparent',
      borderColor: 'border-white-300',
    }
  ];

  const handleVibeSelect = (vibe) => {
    setSelectedVibe(vibe);
    navigate('/donate', { state: vibe });
  };

  return (
    <div className="bg-black min-h-screen text-white flex flex-col items-center justify-center p-4 space-y-8">
      <div className="text-center">
        <h2 className="text-5xl font-extrabold tracking-wide uppercase text-white mb-4 font-anton">
          Now That You Know Us, Tell Us Who You Are!
        </h2>
        <p className="text-2xl text-white/80 font-bebas-neue">Are you a GIGACHAD, CHILL GUY, or POOKIE?</p>
      </div>

      <div className="grid md:grid-cols-3 gap-24 w-full max-w-5xl">
        {vibeOptions.map((vibe) => (
          <div
            key={vibe.id}
            onClick={() => handleVibeSelect(vibe)}
            className={`bg-gray-900/50 rounded-2xl overflow-hidden transform transition-all duration-300 hover:scale-105 cursor-pointer group relative border-2 ${vibe.borderColor}`}
          >
            <div className="h-64 bg-gray-800 flex items-center justify-center overflow-hidden">
              <img 
                src={vibe.gifUrl} 
                alt={`${vibe.name} GIF`} 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="p-6 relative">
              <div className="flex justify-between items-center mb-4">
                <h3 className={`text-3xl font-extrabold uppercase ${vibe.textColor} font-anton`}>
                  {vibe.name}
                </h3>
              </div>

              <p className="text-white/70 text-lg font-bebas-neue mb-4">{vibe.description}</p>
              
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold text-white/80 font-bebas-neue">
                  {vibe.text}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VibeCheckDonation;
