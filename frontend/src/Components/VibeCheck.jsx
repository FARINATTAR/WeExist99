import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import gigaChad from "../assets/GigaChad.gif";
import chillGuy from "../assets/ChillGuy.gif";
import pookie from "../assets/Pookie.gif";

const VibeCheckDonation = () => {
  const [selectedVibe, setSelectedVibe] = useState(null);
  const navigate = useNavigate(); // Hook for navigation

  const vibeOptions = [
    {
      id: 'gigachad',
      name: 'Gigachad',
      text: 'I donate like a legend.',
      description: 'Legendary hero mode ON.',
      gifUrl: gigaChad,
      textColor: 'text-lime-300',
      borderColor: 'border-lime-500',
    },
    {
      id: 'chill',
      name: 'Chill Guy',
      text: 'I help out in my own way.',
      description: 'Cool and collected hero.',
      gifUrl: chillGuy,
      textColor: 'text-cyan-300',
      borderColor: 'border-cyan-500',
    },
    {
      id: 'pookie',
      name: 'Pookie',
      text: 'I do things my way, but I still care.',
      description: 'Unique hero energy.',
      gifUrl: pookie,
      textColor: 'text-pink-300',
      borderColor: 'border-pink-500',
    }
  ];

  const handleVibeSelect = (vibe) => {
    setSelectedVibe(vibe);
    // Navigate to the Donation Page with the selected vibe as state
    navigate('/donate', { state: vibe });
  };

  return (
    <div className="bg-black min-h-screen text-white flex flex-col items-center justify-center p-4 space-y-8">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-white tracking-tight mb-4">Choose Your Hero Vibe</h2>
        <p className="text-xl text-white/80">Are you a GIGACHAD, CHILL GUY, or POOKIE?</p>
      </div>

      <div className="grid md:grid-cols-3 gap-24 w-full max-w-5xl">
        {vibeOptions.map((vibe) => (
          <div
            key={vibe.id}
            onClick={() => handleVibeSelect(vibe)}
            className={`bg-gray-900/50 rounded-2xl overflow-hidden transform transition-all duration-300 hover:scale-105 cursor-pointer group relative`}
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
                <h3 className={`text-2xl font-bold ${vibe.textColor}`}>
                  {vibe.name}
                </h3>
              </div>

              <p className="text-white/70 mb-4">{vibe.description}</p>
              
              <div className="flex justify-between items-center">
                <span className="text-md font-semibold text-white/80">
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
