import { useState, useEffect } from "react";
import { Heart, Star, Gift } from "lucide-react";

// Enhanced Animation Components
const ChocolateAnimation = () => (
  <div 
    className="cursor-pointer transform transition-all duration-300 hover:scale-110 hover:rotate-12"
    onClick={() => alert("🍫 You always shared your chocolate with me! That's true love!")}
  >
    <div className="text-6xl animate-bounce">🍫</div>
    <div className="text-sm text-amber-600 font-medium mt-2">Click to share!</div>
  </div>
);

const BikeAnimation = () => {
  const [position, setPosition] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setPosition(prev => prev === 0 ? 100 : 0);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-20 overflow-hidden">
      <div 
        className="text-4xl absolute transition-all duration-2000 ease-in-out"
        style={{ transform: `translateX(${position}px)` }}
      >
        🤖
      </div>
      <div className="text-sm text-blue-600 font-medium mt-12">Our tech adventures!</div>
    </div>
  );
};

const PhotoCollage = () => (
  <div className="cursor-pointer transform transition-all duration-300 hover:scale-105">
    <div className="relative">
      <div className="text-5xl mb-2">📸</div>
      <div className="grid grid-cols-2 gap-1 text-2xl">
        <span className="animate-pulse delay-100">👫</span>
        <span className="animate-pulse delay-200">🏠</span>
        <span className="animate-pulse delay-300">🎮</span>
        <span className="animate-pulse delay-400">🍕</span>
      </div>
    </div>
    <div className="text-sm text-purple-600 font-medium mt-2">Our beautiful memories</div>
  </div>
);

const RakhiAnimation = () => (
  <div className="flex items-center justify-center">
    <div className="relative">
      <div className="text-6xl animate-spin-slow">🎀</div>
      <div className="absolute inset-0 flex items-center justify-center">
        <Heart className="text-red-500 w-6 h-6 animate-pulse" />
      </div>
    </div>
    <div className="ml-4">
      <div className="text-2xl font-bold text-pink-600 animate-pulse">
        Virtual Rakhi Tied!
      </div>
      <div className="text-lg text-pink-500">Happy Raksha Bandhan! 🎉</div>
    </div>
  </div>
);

export default function App() {
  const [currentMemory, setCurrentMemory] = useState(0);
  const [showRakhi, setShowRakhi] = useState(false);

  const memories = [
    {
      title: "The Chocolate Wars",
      text: "Remember when we fought over the last chocolate? But you always ended up sharing it with me anyway. That's when I knew you'd always have my back! 💕",
      animation: <ChocolateAnimation />,
      bgColor: "from-amber-100 to-orange-100",
      textColor: "text-amber-800"
    },
    {
      title: "Tech Adventures",
      text: "Thank you for always being there Porashona r kora te help korar jonno, guide korar jonno!!🥰",
      animation: <BikeAnimation />,
      bgColor: "from-blue-100 to-cyan-100",
      textColor: "text-blue-800"
    },
    {
      title: "Forever Connected",
      text: "Now we're miles apart, but you're still my first hero, my protector, my partner in crime. Distance can't change our bond! ❤️",
      animation: <PhotoCollage />,
      bgColor: "from-purple-100 to-pink-100",
      textColor: "text-purple-800"
    },
  ];

  const handleMemoryClick = (index) => {
    setCurrentMemory(index);
    if (index === memories.length - 1) {
      setTimeout(() => setShowRakhi(true), 1000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 p-6">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-2">
          For My Amazing Brother
        </h1>
        <div className="flex items-center justify-center gap-2">
          <Star className="text-yellow-500 w-5 h-5" />
          <p className="text-lg text-gray-700">A journey through our beautiful memories</p>
          <Star className="text-yellow-500 w-5 h-5" />
        </div>
      </div>

      {/* Memory Cards */}
      <div className="max-w-4xl mx-auto space-y-6">
        {memories.map((memory, index) => (
          <div
            key={index}
            className={`
              relative overflow-hidden rounded-2xl shadow-xl cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-2xl
              ${index <= currentMemory ? 'opacity-100' : 'opacity-50'}
              bg-gradient-to-r ${memory.bgColor}
            `}
            onClick={() => handleMemoryClick(index)}
          >
            <div className="p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-lg">
                  <span className="text-2xl">{index + 1}</span>
                </div>
                <h3 className={`text-2xl font-bold ${memory.textColor}`}>
                  {memory.title}
                </h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <p className={`text-lg leading-relaxed ${memory.textColor}`}>
                    {memory.text}
                  </p>
                </div>
                <div className="flex justify-center">
                  {memory.animation}
                </div>
              </div>
            </div>
            
            {/* Click indicator */}
            {index > currentMemory && (
              <div className="absolute bottom-4 right-4 bg-white rounded-full p-2 shadow-lg animate-bounce">
                <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
              </div>
            )}
          </div>
        ))}

        {/* Rakhi Finale */}
        {showRakhi && (
          <div className="mt-12 p-8 bg-gradient-to-r from-pink-200 to-purple-200 rounded-2xl shadow-xl animate-fade-in">
            <div className="text-center">
              <RakhiAnimation />
              <div className="mt-6 p-4 bg-white rounded-lg shadow-inner">
                <p className="text-lg text-gray-700 italic">
                  "Even though we're far apart, this virtual rakhi carries all my love, 
                  prayers, and wishes for your happiness. You'll always be my superhero! 💝"
                </p>
              </div>
              <div className="mt-4 flex items-center justify-center gap-2">
                <Gift className="text-pink-600 w-6 h-6" />
                <span className="text-pink-600 font-semibold">With endless love from your sister</span>
                <Gift className="text-pink-600 w-6 h-6" />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
        
        .duration-2000 {
          transition-duration: 2000ms;
        }
      `}</style>
    </div>
  );
}