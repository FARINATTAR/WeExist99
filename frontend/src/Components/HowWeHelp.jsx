import React from 'react';
import { ShoppingCart, DollarSign, Handshake } from 'lucide-react';

const HowYouCanHelp = () => {
  const helpSections = [
    {
      icon: <ShoppingCart className="text-yellow-500 w-16 h-16 " />,
      title: "Food Donation",
      description: "Donate surplus food or sponsor meals to help end hunger. Every meal makes a difference.",
      stats: [
        "Every meal you donate feeds a hungry child",
        "Partner with local food banks to make an impact"
      ],
      bgGradient: "from-yellow-900/30 to-black/50",
      buttonText: "Donate Food"
    },
    {
      icon: <DollarSign className="text-green-500 w-16 h-16" />,
      title: "Community Funds",
      description: "Your contributions help fund education, healthcare, and basic needs for underprivileged communities.",
      stats: [
        "Even a small donation can create lasting change",
        "Support long-term solutions to fight hunger"
      ],
      bgGradient: "from-green-900/30 to-black/50",
      buttonText: "Contribute"
    },
    {
      icon: <Handshake className="text-blue-500 w-16 h-16" />,
      title: "Partner With Us",
      description: "Businesses, NGOs, and changemakers—join us in making a larger impact. Let’s create a hunger-free world together.",
      stats: [
        "Collaborate on food drives and fundraising",
        "Leverage networks to expand impact"
      ],
      bgGradient: "from-blue-900/30 to-black/50",
      buttonText: "Partner Now"
    }
  ];

  return (
    <div className="bg-black text-white py-24 px-4">
      {/* Section Heading */}
      <h2 className="text-5xl font-poppins font-extrabold text-center mb-30">
        Be the Change: <span className="text-yellow-500">Make an Impact Today!</span>
      </h2>

      {/* Help Sections */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
        {helpSections.map((section, index) => (
          <div 
            key={index}
            className={`
              font-poppins
              relative overflow-hidden rounded-2xl p-8 
              border border-white/10 
              bg-gradient-to-br ${section.bgGradient}
              transform transition-all duration-300
              hover:scale-105 hover:shadow-2xl
            `}
          >
            <div className="absolute inset-0 bg-black/20 z-0" />
            <div className="relative z-10 space-y-6">
              <div className="flex items-center space-x-4 mb-4">
                {section.icon}
                <h3 className="text-3xl font-bold">{section.title}</h3>
              </div>
              <p className="text-xl text-gray-300 mb-6">{section.description}</p>
              <ul className="space-y-4">
                {section.stats.map((stat, statIndex) => (
                  <li 
                    key={statIndex} 
                    className="flex items-center text-base text-white/80"
                  >
                    <span className="w-3 h-3 bg-yellow-500 rounded-full mr-4" />
                    {stat}
                  </li>
                ))}
              </ul>
              {/* Individual Card Button */}
              <button className="mt-6 px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-300 transition">
                {section.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Volunteering Button */}
      <div className="mt-16 flex justify-center">
        <button className="w-full max-w-3xl py-4 text-2xl font-semibold bg-yellow-500 text-black rounded-lg hover:bg-yellow-400 transition">
          Become a Volunteer
        </button>
      </div>
    </div>
  );
};

export default HowYouCanHelp;
