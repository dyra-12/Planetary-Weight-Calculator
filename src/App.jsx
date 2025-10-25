import React, { useState } from 'react';
import { Rocket, Weight, Globe } from 'lucide-react';

const PlanetaryWeightCalculator = () => {
  const [mass, setMass] = useState('');
  const [showResults, setShowResults] = useState(false);

  const PlanetIcon = ({ name }) => {
    const icons = {
      Mercury: (
        <svg viewBox="0 0 100 100" className="w-20 h-20">
          <circle cx="50" cy="50" r="45" fill="#8B8680" />
          <circle cx="35" cy="35" r="8" fill="#6B6660" opacity="0.5" />
          <circle cx="65" cy="45" r="6" fill="#6B6660" opacity="0.5" />
          <circle cx="50" cy="65" r="10" fill="#6B6660" opacity="0.5" />
        </svg>
      ),
      Venus: (
        <svg viewBox="0 0 100 100" className="w-20 h-20">
          <defs>
            <radialGradient id="venus-grad">
              <stop offset="0%" stopColor="#FDB462" />
              <stop offset="100%" stopColor="#E8954A" />
            </radialGradient>
          </defs>
          <circle cx="50" cy="50" r="45" fill="url(#venus-grad)" />
          <circle cx="50" cy="50" r="45" fill="#FFA500" opacity="0.3" />
        </svg>
      ),
      Earth: (
        <svg viewBox="0 0 100 100" className="w-20 h-20">
          <defs>
            <radialGradient id="earth-grad">
              <stop offset="0%" stopColor="#4A90E2" />
              <stop offset="100%" stopColor="#2E5C8A" />
            </radialGradient>
          </defs>
          <circle cx="50" cy="50" r="45" fill="url(#earth-grad)" />
          <path d="M 30 40 Q 40 35 50 40 T 70 45" fill="#2D7A3E" opacity="0.8" />
          <path d="M 25 60 Q 35 55 45 58 T 60 62" fill="#2D7A3E" opacity="0.8" />
          <circle cx="50" cy="50" r="45" fill="white" opacity="0.1" />
        </svg>
      ),
      Mars: (
        <svg viewBox="0 0 100 100" className="w-20 h-20">
          <defs>
            <radialGradient id="mars-grad">
              <stop offset="0%" stopColor="#E57373" />
              <stop offset="100%" stopColor="#C62828" />
            </radialGradient>
          </defs>
          <circle cx="50" cy="50" r="45" fill="url(#mars-grad)" />
          <circle cx="40" cy="35" r="7" fill="#B71C1C" opacity="0.6" />
          <circle cx="65" cy="50" r="9" fill="#B71C1C" opacity="0.6" />
          <ellipse cx="50" cy="70" rx="15" ry="8" fill="white" opacity="0.3" />
        </svg>
      ),
      Jupiter: (
        <svg viewBox="0 0 100 100" className="w-20 h-20">
          <defs>
            <linearGradient id="jupiter-grad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#F4E4C1" />
              <stop offset="30%" stopColor="#E8B968" />
              <stop offset="60%" stopColor="#D4A055" />
              <stop offset="100%" stopColor="#C18F42" />
            </linearGradient>
          </defs>
          <circle cx="50" cy="50" r="45" fill="url(#jupiter-grad)" />
          <ellipse cx="50" cy="35" rx="40" ry="4" fill="#C18F42" opacity="0.5" />
          <ellipse cx="50" cy="50" rx="42" ry="5" fill="#A67A3D" opacity="0.5" />
          <ellipse cx="50" cy="65" rx="40" ry="4" fill="#C18F42" opacity="0.5" />
          <circle cx="60" cy="45" r="8" fill="#D4756E" opacity="0.7" />
        </svg>
      ),
      Saturn: (
        <svg viewBox="0 0 100 100" className="w-20 h-20">
          <defs>
            <linearGradient id="saturn-grad">
              <stop offset="0%" stopColor="#F4E4C1" />
              <stop offset="100%" stopColor="#E8D4A8" />
            </linearGradient>
          </defs>
          <ellipse cx="50" cy="50" rx="55" ry="8" fill="#D4C5A0" opacity="0.6" />
          <ellipse cx="50" cy="50" rx="50" ry="6" fill="#E8D4A8" opacity="0.4" />
          <circle cx="50" cy="50" r="30" fill="url(#saturn-grad)" />
          <ellipse cx="50" cy="50" rx="30" ry="3" fill="#C5B590" opacity="0.5" />
        </svg>
      ),
      Uranus: (
        <svg viewBox="0 0 100 100" className="w-20 h-20">
          <defs>
            <radialGradient id="uranus-grad">
              <stop offset="0%" stopColor="#7DD3C0" />
              <stop offset="100%" stopColor="#4A9B8E" />
            </radialGradient>
          </defs>
          <circle cx="50" cy="50" r="45" fill="url(#uranus-grad)" />
          <circle cx="50" cy="50" r="45" fill="#ADE5D8" opacity="0.2" />
          <ellipse cx="50" cy="50" rx="20" ry="45" fill="white" opacity="0.1" />
        </svg>
      ),
      Neptune: (
        <svg viewBox="0 0 100 100" className="w-20 h-20">
          <defs>
            <radialGradient id="neptune-grad">
              <stop offset="0%" stopColor="#5B8FD8" />
              <stop offset="100%" stopColor="#2E4A8A" />
            </radialGradient>
          </defs>
          <circle cx="50" cy="50" r="45" fill="url(#neptune-grad)" />
          <path d="M 20 45 Q 35 40 50 45 T 80 50" fill="white" opacity="0.2" />
          <circle cx="40" cy="35" r="6" fill="#1E3A6A" opacity="0.6" />
        </svg>
      ),
    };
    return icons[name] || null;
  };

  const planets = [
    { name: 'Mercury', gravity: 3.7, color: 'from-gray-400 to-gray-600', emoji: '�水', fact: 'Smallest planet, closest to the Sun' },
    { name: 'Venus', gravity: 8.87, color: 'from-yellow-400 to-orange-500', emoji: '🪐', fact: 'Hottest planet with thick atmosphere' },
    { name: 'Earth', gravity: 9.81, color: 'from-blue-400 to-green-500', emoji: '🌍', fact: 'Our home, the perfect Goldilocks zone' },
    { name: 'Mars', gravity: 3.71, color: 'from-red-500 to-orange-600', emoji: '🔴', fact: 'The Red Planet with polar ice caps' },
    { name: 'Jupiter', gravity: 24.79, color: 'from-orange-300 to-yellow-600', emoji: '🟠', fact: 'Largest planet, has a Great Red Spot' },
    { name: 'Saturn', gravity: 10.44, color: 'from-yellow-200 to-amber-400', emoji: '🪐', fact: 'Famous for its stunning ring system' },
    { name: 'Uranus', gravity: 8.69, color: 'from-cyan-300 to-blue-400', emoji: '🔵', fact: 'Tilted on its side, icy giant' },
    { name: 'Neptune', gravity: 11.15, color: 'from-blue-500 to-indigo-600', emoji: '💙', fact: 'Windiest planet in the solar system' },
  ];

  const calculateWeight = (planetGravity) => {
    const massNum = parseFloat(mass);
    const weightInNewtons = massNum * planetGravity;
    return weightInNewtons.toFixed(1);
  };

  const handleCalculate = () => {
    if (mass && parseFloat(mass) > 0) {
      setShowResults(true);
    }
  };

  const handleReset = () => {
    setMass('');
    setShowResults(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleCalculate();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white relative overflow-hidden">
      {/* Animated Background Stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              opacity: Math.random() * 0.7 + 0.3,
            }}
          />
        ))}
      </div>

      {/* Floating Planets Background */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full blur-2xl animate-float-slow" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8 min-h-screen flex flex-col justify-center">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Rocket className="w-16 h-16 text-pink-300 animate-bounce" />
            <h1 className="text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-200 via-rose-300 to-pink-200">
              Planetary Weight Calculator
            </h1>
          </div>
          <p className="text-2xl text-pink-100 max-w-2xl mx-auto font-medium">
            Discover how much you'd weigh across the solar system
          </p>
        </div>

        {/* Input Section - Only show when results are not displayed */}
        {!showResults ? (
          <div className="max-w-md mx-auto">
            <div className="backdrop-blur-xl bg-white/10 rounded-3xl p-8 shadow-2xl border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 animate-fade-in">
              <div className="mb-6">
                <label className="block text-xl font-semibold mb-3 text-pink-100">
                  Enter Your Mass (kg)
                </label>
                <div className="relative">
                  <Weight className="absolute left-4 top-1/2 transform -translate-y-1/2 text-pink-300" />
                  <input
                    type="number"
                    value={mass}
                    onChange={(e) => setMass(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="e.g., 70"
                    className="w-full pl-12 pr-4 py-5 bg-black/30 border-2 border-pink-400/50 rounded-xl text-pink-50 placeholder-pink-300/50 focus:outline-none focus:border-pink-300 focus:ring-2 focus:ring-pink-300/50 transition-all duration-300 text-xl"
                    step="0.1"
                    min="0"
                  />
                </div>
              </div>

              <button
                type="button"
                onClick={handleCalculate}
                className="w-full bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-400 hover:to-rose-400 py-5 rounded-xl font-bold text-xl text-white shadow-lg shadow-pink-500/50 hover:shadow-pink-400/70 transition-all duration-300 transform hover:scale-105"
              >
                Calculate Weight
              </button>
            </div>

            {/* Footer Info */}
            <div className="text-center mt-12 text-pink-100/80 max-w-2xl mx-auto">
              <Globe className="w-10 h-10 mx-auto mb-3 text-pink-300" />
              <p className="text-base">
                Weight is the force exerted on your mass by gravity. Since different planets have different gravitational pulls, 
                your weight varies across the solar system—but your mass stays the same!
              </p>
            </div>
          </div>
        ) : (
          /* Results Grid - Shows in place of input */
          <div>
            <div className="text-center mb-8">
              <div className="mb-4 text-pink-100">
                <p className="text-2xl font-semibold">Your Mass: <span className="text-pink-200">{mass} kg</span></p>
                <p className="text-sm text-pink-200/70 mt-1">(Mass remains constant across all planets)</p>
              </div>
              <button
                type="button"
                onClick={handleReset}
                className="px-8 py-4 bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-400 hover:to-rose-400 rounded-xl font-semibold text-lg text-white transition-all duration-300 shadow-lg shadow-pink-500/50 hover:shadow-pink-400/70 transform hover:scale-105"
              >
                ← Calculate Again
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in">
              {planets.map((planet, index) => (
                <div
                  key={planet.name}
                  className="backdrop-blur-xl bg-white/10 rounded-2xl p-6 border border-pink-400/30 hover:border-pink-300/70 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 shadow-xl hover:shadow-2xl hover:shadow-pink-500/30"
                  style={{
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  <div className="text-center">
                    <div className="flex justify-center mb-4 animate-float-slow" style={{ animationDelay: `${index * 0.2}s` }}>
                      <PlanetIcon name={planet.name} />
                    </div>
                    <h3 className="text-3xl font-bold mb-3 text-pink-100">
                      {planet.name}
                    </h3>
                    <div className="mb-2">
                      <div className="text-lg text-pink-200/80 font-semibold">
                        Mass: {mass} kg
                      </div>
                    </div>
                    <div className="mb-4">
                      <div className="text-5xl font-bold text-pink-200">
                        {calculateWeight(planet.gravity)}
                      </div>
                      <div className="text-base text-pink-100 mt-2 font-medium">
                        Newtons (N)
                      </div>
                    </div>
                    <div className="text-sm text-pink-200/90 italic border-t border-pink-400/30 pt-3">
                      {planet.fact}
                    </div>
                    <div className="text-sm text-pink-200/70 mt-2">
                      Gravity: {planet.gravity} m/s²
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-30px); }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-10px) translateX(10px); }
        }
        
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
        
        .animate-float-slow {
          animation: float-slow 10s ease-in-out infinite;
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default PlanetaryWeightCalculator;