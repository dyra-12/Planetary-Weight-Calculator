import React, { useState } from 'react';
import { Rocket, Weight, Globe } from 'lucide-react';

const PlanetaryWeightCalculator = () => {
  const [mass, setMass] = useState('');
  const [showResults, setShowResults] = useState(false);

  const planets = [
    { name: 'Mercury', gravity: 3.7, color: 'from-gray-400 to-gray-600', emoji: '☿️', fact: 'Smallest planet, closest to the Sun' },
    { name: 'Venus', gravity: 8.87, color: 'from-yellow-400 to-orange-500', emoji: '♀️', fact: 'Hottest planet with thick atmosphere' },
    { name: 'Earth', gravity: 9.81, color: 'from-blue-400 to-green-500', emoji: '🌍', fact: 'Our home, the perfect Goldilocks zone' },
    { name: 'Mars', gravity: 3.71, color: 'from-red-500 to-orange-600', emoji: '♂️', fact: 'The Red Planet with polar ice caps' },
    { name: 'Jupiter', gravity: 24.79, color: 'from-orange-300 to-yellow-600', emoji: '♃', fact: 'Largest planet, has a Great Red Spot' },
    { name: 'Saturn', gravity: 10.44, color: 'from-yellow-200 to-amber-400', emoji: '♄', fact: 'Famous for its stunning ring system' },
    { name: 'Uranus', gravity: 8.69, color: 'from-cyan-300 to-blue-400', emoji: '♅', fact: 'Tilted on its side, icy giant' },
    { name: 'Neptune', gravity: 11.15, color: 'from-blue-500 to-indigo-600', emoji: '♆', fact: 'Windiest planet in the solar system' },
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
            <Rocket className="w-12 h-12 text-purple-400 animate-bounce" />
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent">
              Planetary Weight Calculator
            </h1>
          </div>
          <p className="text-xl text-purple-200 max-w-2xl mx-auto">
            Discover how much you'd weigh across the solar system
          </p>
        </div>

        {/* Input Section - Only show when results are not displayed */}
        {!showResults ? (
          <div className="max-w-md mx-auto">
            <div className="backdrop-blur-xl bg-white/10 rounded-3xl p-8 shadow-2xl border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 animate-fade-in">
              <div className="mb-6">
                <label className="block text-lg font-semibold mb-3 text-purple-200">
                  Enter Your Mass (kg)
                </label>
                <div className="relative">
                  <Weight className="absolute left-4 top-1/2 transform -translate-y-1/2 text-purple-400" />
                  <input
                    type="number"
                    value={mass}
                    onChange={(e) => setMass(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="e.g., 70"
                    className="w-full pl-12 pr-4 py-4 bg-black/30 border-2 border-purple-500/50 rounded-xl text-white placeholder-purple-300/50 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/50 transition-all duration-300 text-lg"
                    step="0.1"
                    min="0"
                  />
                </div>
              </div>

              <button
                type="button"
                onClick={handleCalculate}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 py-4 rounded-xl font-bold text-lg shadow-lg shadow-purple-500/50 hover:shadow-purple-400/70 transition-all duration-300 transform hover:scale-105"
              >
                Calculate Weight
              </button>
            </div>

            {/* Footer Info */}
            <div className="text-center mt-12 text-purple-300/70 max-w-2xl mx-auto">
              <Globe className="w-8 h-8 mx-auto mb-3 text-purple-400" />
              <p className="text-sm">
                Weight is the force exerted on your mass by gravity. Since different planets have different gravitational pulls, 
                your weight varies across the solar system—but your mass stays the same!
              </p>
            </div>
          </div>
        ) : (
          /* Results Grid - Shows in place of input */
          <div>
            <div className="text-center mb-8">
              <button
                type="button"
                onClick={handleReset}
                className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 rounded-xl font-semibold transition-all duration-300 shadow-lg shadow-purple-500/50 hover:shadow-purple-400/70 transform hover:scale-105"
              >
                ← Calculate Again
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in">
              {planets.map((planet, index) => (
                <div
                  key={planet.name}
                  className="backdrop-blur-xl bg-white/10 rounded-2xl p-6 border border-purple-500/30 hover:border-purple-400/70 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 shadow-xl hover:shadow-2xl hover:shadow-purple-500/30"
                  style={{
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  <div className="text-center">
                    <div className={`text-6xl mb-3 animate-float-slow`} style={{ animationDelay: `${index * 0.2}s` }}>
                      {planet.emoji}
                    </div>
                    <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r ${planet.color} bg-clip-text text-transparent">
                      {planet.name}
                    </h3>
                    <div className="mb-4">
                      <div className={`text-4xl font-bold bg-gradient-to-r ${planet.color} bg-clip-text text-transparent`}>
                        {calculateWeight(planet.gravity)}
                      </div>
                      <div className="text-sm text-purple-300 mt-1">
                        Newtons (N)
                      </div>
                    </div>
                    <div className="text-xs text-purple-200/80 italic border-t border-purple-500/30 pt-3">
                      {planet.fact}
                    </div>
                    <div className="text-xs text-purple-300/60 mt-2">
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