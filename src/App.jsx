import { useState, useEffect } from "react";
import { Heart, Shield, Star, MessageCircle, MapPin, Sparkles } from "lucide-react";

// Enhanced Animation Components
const HeartProtection = () => {
  const [isProtecting, setIsProtecting] = useState(false);
  
  return (
    <div 
      className="relative cursor-pointer group"
      onMouseEnter={() => setIsProtecting(true)}
      onMouseLeave={() => setIsProtecting(false)}
    >
      <div className="relative">
        <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
        <div className="relative text-7xl transition-all duration-500 group-hover:scale-110">
          {isProtecting ? '🛡️💙' : '💔➡️❤️‍🩹'}
        </div>
      </div>
      <div className="mt-4 text-center">
        <Shield className="w-8 h-8 text-blue-500 mx-auto animate-pulse mb-2" />
        <p className="text-sm text-blue-700 font-semibold bg-white/50 rounded-full px-3 py-1">
          My Heart's Guardian
        </p>
      </div>
    </div>
  );
};

const SupportSystem = () => {
  const [currentIcon, setCurrentIcon] = useState(0);
  const supportItems = [
    { emoji: '🤗', text: 'Comfort' },
    { emoji: '💪', text: 'Strength' },
    { emoji: '🌟', text: 'Hope' },
    { emoji: '🫂', text: 'Embrace' }
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIcon(prev => (prev + 1) % supportItems.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-center relative">
      <div className="absolute -inset-6 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full blur opacity-25"></div>
      <div className="relative">
        <div className="text-7xl mb-4 transition-all duration-700 transform hover:rotate-12">
          {supportItems[currentIcon].emoji}
        </div>
        <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-3 border border-white/30">
          <div className="flex items-center justify-center gap-2 mb-2">
            <MessageCircle className="w-5 h-5 text-emerald-600 animate-bounce" />
            <span className="text-emerald-800 font-bold">Always There</span>
          </div>
          <div className="text-sm text-emerald-700 font-medium">
            Giving me {supportItems[currentIcon].text}
          </div>
        </div>
      </div>
    </div>
  );
};

const DistanceVisualization = () => {
  const [pulse, setPulse] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setPulse(prev => (prev + 1) % 3);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-center relative">
      <div className="absolute -inset-8 bg-gradient-to-r from-violet-400 to-purple-400 rounded-full blur opacity-20"></div>
      <div className="relative">
        <div className="mb-6">
          <div className="flex items-center justify-center gap-8">
            <div className="relative">
              <div className={`text-5xl transition-all duration-500 ${pulse === 0 ? 'scale-110' : 'scale-100'}`}>
                👤
              </div>
              <div className="absolute -top-2 -right-2">
                <div className="w-3 h-3 bg-blue-400 rounded-full animate-ping"></div>
              </div>
            </div>
            
            <div className="relative flex-1 max-w-24">
              <div className="h-1 bg-gradient-to-r from-blue-300 via-purple-300 to-blue-300 rounded-full"></div>
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <Heart className={`w-6 h-6 text-red-500 transition-all duration-500 ${pulse === 1 ? 'scale-125' : 'scale-100'}`} />
              </div>
              <div className="absolute -top-1 left-0 w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <div className="absolute -top-1 right-0 w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
            </div>
            
            <div className="relative">
              <div className={`text-5xl transition-all duration-500 ${pulse === 2 ? 'scale-110' : 'scale-100'}`}>
                👤
              </div>
              <div className="absolute -top-2 -left-2">
                <div className="w-3 h-3 bg-purple-400 rounded-full animate-ping"></div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 border border-white/30">
          <div className="flex items-center justify-center gap-2 mb-2">
            <MapPin className="w-5 h-5 text-violet-600" />
            <span className="text-violet-800 font-bold">365 Days Apart</span>
          </div>
          <p className="text-sm text-violet-700 font-medium">
            But connected in every heartbeat
          </p>
        </div>
      </div>
    </div>
  );
};

const FloatingElements = () => (
  <div className="fixed inset-0 pointer-events-none overflow-hidden">
    <div className="absolute top-20 left-10 text-2xl animate-bounce" style={{animationDelay: '0s'}}>✨</div>
    <div className="absolute top-40 right-20 text-xl animate-bounce" style={{animationDelay: '1s'}}>💙</div>
    <div className="absolute bottom-40 left-20 text-2xl animate-bounce" style={{animationDelay: '2s'}}>🌟</div>
    <div className="absolute bottom-20 right-10 text-xl animate-bounce" style={{animationDelay: '1.5s'}}>💫</div>
    <div className="absolute top-60 left-1/2 text-lg animate-bounce" style={{animationDelay: '0.5s'}}>✨</div>
  </div>
);

const RakhiAnimation = () => (
  <div className="flex flex-col items-center relative">
    <div className="absolute -inset-12 bg-gradient-to-r from-blue-200 via-purple-200 to-cyan-200 rounded-full blur-2xl opacity-30"></div>
    <div className="relative mb-6">
      <div className="text-8xl animate-spin-slow relative">
        🎀
        <div className="absolute inset-0 animate-ping text-8xl opacity-20">🎀</div>
      </div>
      <div className="absolute -top-4 -right-4 text-2xl animate-bounce">✨</div>
      <div className="absolute -bottom-4 -left-4 text-2xl animate-bounce" style={{animationDelay: '0.5s'}}>💫</div>
    </div>
    <div className="text-center relative z-10">
      <h3 className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent mb-3">
        Virtual Rakhi Tied! 💫
      </h3>
      <p className="text-xl text-blue-700 italic font-medium mb-4">
        For my brother by choice, my heart's protector
      </p>
      <div className="flex items-center justify-center gap-2 text-blue-600">
        <Sparkles className="w-5 h-5" />
        <span className="font-semibold">Bond Sealed Forever</span>
        <Sparkles className="w-5 h-5" />
      </div>
    </div>
  </div>
);

export default function App() {
  const [currentMemory, setCurrentMemory] = useState(-1);
  const [showRakhi, setShowRakhi] = useState(false);

  const memories = [
    {
      title: "My Guardian Angel",
      text: "You've shielded my heart from so many breaks, caught my tears before they fell, and reminded me of my worth when others made me forget. You see through every facade and love me anyway.",
      animation: <HeartProtection />,
      bgGradient: "from-blue-100 via-sky-50 to-cyan-100",
      textColor: "text-blue-900",
      borderGradient: "from-blue-300 to-cyan-300",
      accentColor: "blue"
    },
    {
      title: "My Constant North Star",
      text: "In every storm, every doubt, every moment I felt lost - you were there. Your unwavering support has been my anchor. You believe in me even when I don't believe in myself.",
      animation: <SupportSystem />,
      bgGradient: "from-emerald-100 via-teal-50 to-cyan-100",
      textColor: "text-emerald-900",
      borderGradient: "from-emerald-300 to-teal-300",
      accentColor: "emerald"
    },
    {
      title: "365 Days of Missing You",
      text: "Almost a year has passed since we last met, but you're in every sunset I watch, every song that makes me smile, every moment I need to share something with someone who truly gets me.",
      animation: <DistanceVisualization />,
      bgGradient: "from-violet-100 via-purple-50 to-blue-100",
      textColor: "text-violet-900",
      borderGradient: "from-violet-300 to-purple-300",
      accentColor: "violet"
    },
  ];

  const handleStart = () => {
    setCurrentMemory(0);
  };

  const handleMemoryClick = (index) => {
    setCurrentMemory(Math.max(currentMemory, index));
    if (index === memories.length - 1) {
      setTimeout(() => {
        setTimeout(() => setShowRakhi(true), 1500);
      }, 2000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative">
      <FloatingElements />
      
      {/* Animated background pattern */}
      <div className="fixed inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #3B82F6 0%, transparent 50%), 
                           radial-gradient(circle at 75% 75%, #8B5CF6 0%, transparent 50%)`,
          animation: 'float 6s ease-in-out infinite alternate'
        }}></div>
      </div>

      {/* Hero Section */}
      {currentMemory === -1 && (
        <div className="flex items-center justify-center min-h-screen p-6 relative z-10">
          <div className="text-center max-w-3xl">
            <div className="mb-8">
              <div className="relative inline-block mb-6">
                <div className="absolute -inset-8 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 rounded-full blur-2xl opacity-20"></div>
                <div className="relative text-9xl animate-float">💝</div>
              </div>
              <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-6 leading-tight">
                For My Brother<br/>by Choice
              </h1>
              <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-6 border border-white/30 mb-8">
                <p className="text-2xl text-gray-800 mb-4 leading-relaxed font-medium">
                  Blood doesn't make family. Love does.
                </p>
                <p className="text-xl text-blue-700 font-medium">
                  And you've been family from day one.
                </p>
              </div>
              <div className="flex items-center justify-center gap-4 mb-10">
                <Star className="text-amber-400 w-8 h-8 animate-spin-slow" />
                <span className="text-lg text-gray-700 font-semibold bg-white/50 px-4 py-2 rounded-full">
                  A letter from the heart
                </span>
                <Star className="text-amber-400 w-8 h-8 animate-spin-slow" />
              </div>
            </div>
            <button 
              onClick={handleStart}
              className="group relative overflow-hidden bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white px-10 py-5 rounded-full text-xl font-bold hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 transform hover:scale-110 transition-all duration-500 shadow-2xl hover:shadow-blue-500/25"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <span className="relative flex items-center gap-3">
                Open My Heart 
                <Heart className="w-6 h-6 animate-pulse" />
              </span>
            </button>
          </div>
        </div>
      )}

      {/* Memory Journey */}
      {currentMemory >= 0 && (
        <div className="p-6 pt-16 relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Enhanced Progress indicator */}
            <div className="flex justify-center mb-12">
              <div className="bg-white/70 backdrop-blur-sm rounded-full p-4 border border-white/30 shadow-xl">
                <div className="flex gap-4">
                  {memories.map((_, index) => (
                    <div key={index} className="relative">
                      <div
                        className={`w-4 h-4 rounded-full transition-all duration-700 ${
                          index <= currentMemory 
                            ? 'bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg' 
                            : 'bg-gray-300'
                        }`}
                      />
                      {index <= currentMemory && (
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 animate-ping"></div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Enhanced Memory Cards */}
            <div className="space-y-12">
              {memories.map((memory, index) => (
                <div
                  key={index}
                  className={`
                    transform transition-all duration-1000 cursor-pointer group
                    ${index <= currentMemory ? 'opacity-100 translate-y-0' : 'opacity-70 translate-y-4'}
                    hover:scale-105
                  `}
                  onClick={() => handleMemoryClick(index)}
                >
                  <div className={`
                    relative overflow-hidden rounded-3xl shadow-2xl p-10
                    bg-gradient-to-br ${memory.bgGradient}
                    border-2 border-gradient-to-r ${memory.borderGradient}
                    transition-all duration-700 group-hover:shadow-3xl
                    backdrop-blur-sm
                  `}>
                    {/* Animated border effect */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${memory.borderGradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-3xl`}></div>
                    
                    <div className="relative z-10">
                      <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                          <div className="flex items-center gap-4 mb-8">
                            <div className={`w-14 h-14 rounded-full bg-gradient-to-r from-${memory.accentColor}-500 to-${memory.accentColor}-600 shadow-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                              <Heart className="w-7 h-7 text-white animate-pulse" />
                            </div>
                            <h2 className={`text-4xl font-bold ${memory.textColor} group-hover:scale-105 transition-transform duration-300`}>
                              {memory.title}
                            </h2>
                          </div>
                          <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-6 border border-white/30">
                            <p className={`text-xl leading-relaxed ${memory.textColor} font-medium`}>
                              {memory.text}
                            </p>
                          </div>
                        </div>
                        <div className="flex justify-center">
                          <div className="transform group-hover:scale-110 transition-all duration-500">
                            {memory.animation}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Enhanced Final Rakhi Ceremony */}
            {showRakhi && (
              <div className="mt-20 p-12 bg-gradient-to-r from-blue-100 via-purple-100 to-cyan-100 rounded-3xl shadow-3xl border-2 border-gradient-to-r from-blue-300 to-purple-300 animate-fade-in backdrop-blur-sm">
                <RakhiAnimation />
                <div className="mt-10 p-8 bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/40">
                  <p className="text-xl text-gray-800 leading-relaxed text-center italic font-medium mb-6">
                    "Distance means nothing when someone means everything. This virtual rakhi carries 
                    a year's worth of gratitude, countless unshed tears of missing you, and an ocean 
                    of love that grows stronger each day. Thank you for being my chosen family, 
                    my safe space, my brother in every way that matters. ❤️"
                  </p>
                  <div className="text-center">
                    <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-bold text-lg shadow-xl">
                      <Heart className="w-6 h-6 text-red-300 animate-pulse" />
                      Forever your sister by choice
                      <Heart className="w-6 h-6 text-red-300 animate-pulse" />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-fade-in {
          animation: fade-in 2s ease-out;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        
        .shadow-3xl {
          box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
        }
      `}</style>
    </div>
  );
}