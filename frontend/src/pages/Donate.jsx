import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'; // To get the selected vibe from the previous page.
import gigaChad from "../assets/GigaChad.gif";
import chillGuy from "../assets/ChillGuy.gif";
import pookie from "../assets/Pookie.gif";
import { Star } from 'lucide-react';

const DonationPage = () => {
  const location = useLocation(); // Get the selected vibe from the location state.
  
  // Default vibe if no vibe is passed in the URL.
  const defaultVibe = { id: 'gigachad', name: 'Gigachad' };
  const selectedVibe = location.state || defaultVibe; // If no state, fallback to defaultVibe.

  const [donationAmount, setDonationAmount] = useState(5); // Default donation amount
  const [customAmount, setCustomAmount] = useState('');

  // GIFs for the vibes
  const vibeGifs = {
    gigachad: gigaChad,
    chill: chillGuy,
    pookie: pookie,
  };

  const handleAmountChange = (amount) => {
    setDonationAmount(amount);
  };

  const handleCustomAmountChange = (event) => {
    setCustomAmount(event.target.value);
  };

  const handleDonationSubmit = () => {
    // Here you can handle payment integration logic.
    alert(`Thank you for donating $${customAmount || donationAmount} as a ${selectedVibe.name}!`);
  };

  return (
    <div className="bg-black min-h-screen text-white flex flex-col items-center justify-center p-4 space-y-8">
      {/* Heading */}
      <div className="text-center">
        <h2 className="text-4xl font-bold text-white tracking-tight mb-4">
          You’ve Chosen to Donate Like a {selectedVibe.name}!
        </h2>
        <p className="text-xl text-white/80">Every contribution counts. Let's make a difference!</p>
      </div>

      {/* Vibe Section */}
      <div className="text-center mb-8">
        <img 
          src={vibeGifs[selectedVibe.id]} 
          alt={`${selectedVibe.name} GIF`} 
          className="w-64 h-64 object-cover mx-auto mb-4"
        />
        <p className="text-lg text-white/80">
          You’re making the world legendary, {selectedVibe.name}! Your kindness will create a lasting impact.
        </p>
      </div>

      {/* Donation Amount Selection */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        <button 
          onClick={() => handleAmountChange(5)} 
          className="bg-gray-800 p-4 rounded-full text-lg font-semibold text-white hover:bg-gray-700 transition"
        >
          $5
        </button>
        <button 
          onClick={() => handleAmountChange(10)} 
          className="bg-gray-800 p-4 rounded-full text-lg font-semibold text-white hover:bg-gray-700 transition"
        >
          $10
        </button>
        <button 
          onClick={() => handleAmountChange(25)} 
          className="bg-gray-800 p-4 rounded-full text-lg font-semibold text-white hover:bg-gray-700 transition"
        >
          $25
        </button>
      </div>

      {/* Custom Amount Input */}
      <div className="mb-8">
        <input
          type="number"
          placeholder="Enter Custom Amount"
          value={customAmount}
          onChange={handleCustomAmountChange}
          className="bg-gray-800 p-4 rounded-lg text-white text-lg w-64"
        />
      </div>

      {/* Proceed Button */}
      <div className="text-center">
        <button
          onClick={handleDonationSubmit}
          className="inline-flex items-center px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-white/90 transition-all duration-300"
        >
          Proceed to Payment
          <Star className="ml-2 text-yellow-500 group-hover:rotate-12 transition-transform" size={20} />
        </button>
      </div>

      {/* Optional: Thank You Section (Post-Donation Success) */}
      <div className="text-center mt-12 text-white/70">
        <p>Your donation is a game-changer! Thank you for your generosity. You'll be redirected soon to your dashboard.</p>
      </div>
    </div>
  );
};

export default DonationPage;
