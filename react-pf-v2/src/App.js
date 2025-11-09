import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Menu, Mail, Github, Linkedin, Twitter } from 'lucide-react';

const PortfolioShowcase = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const portfolios = [
    {
      name: "Cyberpunk Neon",
      component: CyberpunkNeon
    },
    {
      name: "Minimalistic Bold Typography",
      component: MinimalisticBold
    },
    {
      name: "Retro 90s Nostalgia",
      component: Retro90s
    },
    {
      name: "Y2K Futurism",
      component: Y2KFuturism
    },
    {
      name: "Monochrome with Neon Pop",
      component: MonochromeNeon
    },
    {
      name: "Whimsical Illustrations",
      component: WhimsicalIllustrations
    },
    {
      name: "Dark Mode + Glows",
      component: DarkModeGlow
    },
    {
      name: "Geometric + Abstract",
      component: GeometricAbstract
    },
    {
      name: "Collage Aesthetic",
      component: CollageAesthetic
    },
    {
      name: "Interactive 3D Elements",
      component: Interactive3D
    }
  ];

  const next = () => setCurrentIndex((currentIndex + 1) % portfolios.length);
  const prev = () => setCurrentIndex((currentIndex - 1 + portfolios.length) % portfolios.length);

  const CurrentPortfolio = portfolios[currentIndex].component;

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gray-900">
      {/* Navigation Controls */}
      <div className="absolute top-6 left-6 right-6 z-50 flex justify-between items-center">
        <div className="bg-black/80 backdrop-blur-sm px-6 py-3 rounded-full text-white font-semibold">
          {currentIndex + 1} / {portfolios.length}: {portfolios[currentIndex].name}
        </div>
        <div className="flex gap-3">
          <button
            onClick={prev}
            className="bg-black/80 backdrop-blur-sm p-3 rounded-full text-white hover:bg-black transition-all"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={next}
            className="bg-black/80 backdrop-blur-sm p-3 rounded-full text-white hover:bg-black transition-all"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      {/* Portfolio Display */}
      <div className="w-full h-full">
        <CurrentPortfolio />
      </div>

      {/* Thumbnail Navigation */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-50">
        <div className="flex gap-2 bg-black/80 backdrop-blur-sm px-4 py-3 rounded-full">
          {portfolios.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-2 h-2 rounded-full transition-all ${
                idx === currentIndex ? 'bg-white w-8' : 'bg-gray-500'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// 1. Cyberpunk Neon
const CyberpunkNeon = () => (
  <div className="w-full h-full bg-gray-900 relative overflow-hidden">
    <div className="absolute inset-0 opacity-20">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
    </div>
    
    <div className="relative z-10 h-full flex flex-col justify-center items-center px-8">
      <div className="text-cyan-400 text-sm mb-4 tracking-widest font-mono animate-pulse">
        &lt;SYSTEM.ONLINE /&gt;
      </div>
      <h1 className="text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-500 mb-6 text-center"
          style={{textShadow: '0 0 30px rgba(6,182,212,0.5)'}}>
        ALEX RIDER
      </h1>
      <p className="text-2xl text-pink-400 mb-12 tracking-wide font-mono"
         style={{textShadow: '0 0 20px rgba(236,72,153,0.5)'}}>
        // CREATIVE DEVELOPER
      </p>
      <div className="flex gap-6">
        <button className="px-8 py-4 bg-cyan-500 text-black font-bold rounded hover:bg-cyan-400 transition-all"
                style={{boxShadow: '0 0 30px rgba(6,182,212,0.6)'}}>
          VIEW WORK
        </button>
        <button className="px-8 py-4 border-2 border-pink-500 text-pink-500 font-bold rounded hover:bg-pink-500 hover:text-black transition-all"
                style={{boxShadow: '0 0 30px rgba(236,72,153,0.4)'}}>
          CONTACT
        </button>
      </div>
      <div className="flex gap-6 mt-12">
        <Github className="text-cyan-400 cursor-pointer hover:text-pink-400 transition-colors" size={28} />
        <Linkedin className="text-cyan-400 cursor-pointer hover:text-pink-400 transition-colors" size={28} />
        <Twitter className="text-cyan-400 cursor-pointer hover:text-pink-400 transition-colors" size={28} />
      </div>
    </div>
  </div>
);

// 2. Minimalistic Bold Typography
const MinimalisticBold = () => (
  <div className="w-full h-full bg-white flex flex-col justify-center items-start px-20">
    <div className="max-w-4xl">
      <div className="text-sm tracking-widest text-gray-400 mb-6">PORTFOLIO 2025</div>
      <h1 className="text-9xl font-black text-black leading-none mb-8">
        SARAH<br/>CHEN
      </h1>
      <p className="text-3xl text-gray-600 font-light mb-16 max-w-2xl">
        Product designer crafting meaningful digital experiences
      </p>
      <div className="flex gap-8 items-center">
        <button className="text-lg font-medium text-black border-b-4 border-black pb-2 hover:text-gray-600 hover:border-gray-600 transition-all">
          View Projects
        </button>
        <button className="text-lg font-medium text-gray-400 hover:text-black transition-all">
          About
        </button>
        <button className="text-lg font-medium text-gray-400 hover:text-black transition-all">
          Contact
        </button>
      </div>
    </div>
  </div>
);

// 3. Retro 90s Nostalgia
const Retro90s = () => (
  <div className="w-full h-full relative overflow-hidden"
       style={{background: 'linear-gradient(135deg, #ffc8dd 0%, #bde0fe 50%, #cdb4db 100%)'}}>
    <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-300 rounded-full opacity-60"></div>
    <div className="absolute bottom-20 right-20 w-40 h-40 bg-pink-300 rounded-full opacity-60"></div>
    <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-blue-300 transform rotate-45 opacity-60"></div>
    
    <div className="relative z-10 h-full flex flex-col justify-center items-center px-8">
      <div className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-12 max-w-3xl">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-4 h-4 bg-red-400 rounded-full"></div>
          <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
          <div className="w-4 h-4 bg-green-400 rounded-full"></div>
        </div>
        <h1 className="text-7xl font-black text-black mb-4"
            style={{fontFamily: 'Comic Sans MS, cursive'}}>
          Welcome!
        </h1>
        <h2 className="text-4xl font-bold text-purple-600 mb-6"
            style={{fontFamily: 'Comic Sans MS, cursive'}}>
          I'm Jamie Thompson
        </h2>
        <p className="text-xl text-gray-700 mb-8"
           style={{fontFamily: 'Comic Sans MS, cursive'}}>
          ✨ Web Designer & Pixel Artist ✨
        </p>
        <button className="px-8 py-4 bg-yellow-300 border-4 border-black text-black font-bold text-xl hover:bg-yellow-400 transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                style={{fontFamily: 'Comic Sans MS, cursive'}}>
          Enter Site →
        </button>
      </div>
    </div>
  </div>
);

// 4. Y2K Futurism
const Y2KFuturism = () => (
  <div className="w-full h-full relative overflow-hidden bg-black">
    <div className="absolute inset-0"
         style={{background: 'radial-gradient(circle at 50% 50%, #1a1a2e 0%, #000000 100%)'}}>
    </div>
    
    <div className="relative z-10 h-full flex flex-col justify-center items-center px-8">
      <div className="mb-8 text-center">
        <div className="inline-block px-6 py-2 rounded-full text-sm font-bold mb-6"
             style={{
               background: 'linear-gradient(90deg, #00f2fe 0%, #4facfe 50%, #00f2fe 100%)',
               backgroundSize: '200% auto',
               animation: 'shimmer 3s linear infinite'
             }}>
          FUTURE IS NOW
        </div>
      </div>
      
      <h1 className="text-8xl font-black text-transparent bg-clip-text mb-6 text-center"
          style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            filter: 'drop-shadow(0 0 30px rgba(102,126,234,0.5))'
          }}>
        NOVA STELLAR
      </h1>
      
      <p className="text-2xl text-blue-200 mb-12 tracking-wider">
        Digital Experience Designer
      </p>
      
      <div className="flex gap-6">
        <button className="px-10 py-4 rounded-full font-bold text-black relative overflow-hidden group"
                style={{background: 'linear-gradient(90deg, #00f2fe, #4facfe)'}}>
          <span className="relative z-10">EXPLORE</span>
        </button>
        <button className="px-10 py-4 rounded-full font-bold border-2 text-white hover:bg-white/10 transition-all"
                style={{borderColor: '#4facfe', boxShadow: '0 0 20px rgba(79,172,254,0.3)'}}>
          CONNECT
        </button>
      </div>
    </div>
    
    <style jsx>{`
      @keyframes shimmer {
        to {
          background-position: 200% center;
        }
      }
    `}</style>
  </div>
);

// 5. Monochrome with Neon Pop
const MonochromeNeon = () => (
  <div className="w-full h-full bg-black flex items-center justify-center px-8">
    <div className="max-w-5xl">
      <div className="flex items-baseline gap-4 mb-8">
        <h1 className="text-8xl font-black text-white">MARCUS</h1>
        <div className="w-6 h-6 bg-lime-400 rounded-full animate-pulse"
             style={{boxShadow: '0 0 30px rgba(163,230,53,0.8)'}}></div>
      </div>
      <h1 className="text-8xl font-black text-white mb-8">RIVERA</h1>
      
      <div className="flex gap-16 mb-12">
        <div className="border-l-4 border-white pl-6">
          <p className="text-gray-400 text-sm mb-2">LOCATION</p>
          <p className="text-white text-xl font-bold">San Francisco, CA</p>
        </div>
        <div className="border-l-4 border-white pl-6">
          <p className="text-gray-400 text-sm mb-2">EXPERTISE</p>
          <p className="text-white text-xl font-bold">Brand & UI/UX</p>
        </div>
        <div className="border-l-4 border-lime-400 pl-6"
             style={{boxShadow: '0 0 20px rgba(163,230,53,0.3)'}}>
          <p className="text-gray-400 text-sm mb-2">STATUS</p>
          <p className="text-lime-400 text-xl font-bold">Available</p>
        </div>
      </div>
      
      <button className="px-12 py-5 bg-lime-400 text-black text-xl font-black hover:bg-lime-300 transition-all"
              style={{boxShadow: '0 0 40px rgba(163,230,53,0.6)'}}>
        LET'S TALK
      </button>
    </div>
  </div>
);

// 6. Whimsical Illustrations
const WhimsicalIllustrations = () => (
  <div className="w-full h-full relative overflow-hidden"
       style={{background: 'linear-gradient(to bottom, #fef3c7, #fde68a)'}}>
    {/* Decorative illustrated elements */}
    <svg className="absolute top-10 right-20 w-24 h-24 animate-bounce" style={{animationDuration: '3s'}}>
      <circle cx="50" cy="50" r="40" fill="#fbbf24" opacity="0.7"/>
      <circle cx="50" cy="50" r="30" fill="#fcd34d"/>
    </svg>
    
    <svg className="absolute bottom-20 left-10 w-32 h-32" style={{animation: 'float 4s ease-in-out infinite'}}>
      <path d="M 20 60 Q 40 20, 60 60 T 100 60" stroke="#f59e0b" strokeWidth="3" fill="none"/>
    </svg>
    
    <div className="relative z-10 h-full flex flex-col justify-center items-center px-8">
      <div className="text-center max-w-3xl">
        <div className="inline-block mb-6">
          <svg width="120" height="120" viewBox="0 0 120 120">
            <ellipse cx="60" cy="60" rx="50" ry="55" fill="#fde68a" stroke="#f59e0b" strokeWidth="3"/>
            <circle cx="45" cy="50" r="8" fill="#000"/>
            <circle cx="75" cy="50" r="8" fill="#000"/>
            <path d="M 40 70 Q 60 85, 80 70" stroke="#000" strokeWidth="3" fill="none" strokeLinecap="round"/>
          </svg>
        </div>
        
        <h1 className="text-7xl font-black text-orange-900 mb-4"
            style={{fontFamily: 'system-ui', letterSpacing: '-0.02em'}}>
          Hey! I'm Luna Park
        </h1>
        
        <p className="text-2xl text-orange-700 mb-8 font-medium">
          🎨 Illustrator & Storyteller crafting joyful experiences ✨
        </p>
        
        <div className="flex gap-6 justify-center">
          <button className="px-8 py-4 bg-orange-500 text-white font-bold rounded-full hover:bg-orange-600 transition-all transform hover:scale-105 shadow-lg">
            See My Work
          </button>
          <button className="px-8 py-4 bg-white border-4 border-orange-500 text-orange-500 font-bold rounded-full hover:bg-orange-50 transition-all transform hover:scale-105">
            Say Hello!
          </button>
        </div>
      </div>
    </div>
    
    <style jsx>{`
      @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-20px); }
      }
    `}</style>
  </div>
);

// 7. Dark Mode + Glows
const DarkModeGlow = () => (
  <div className="w-full h-full bg-gray-950 relative overflow-hidden">
    <div className="absolute inset-0">
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-600 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-600 rounded-full blur-3xl opacity-20"></div>
    </div>
    
    <div className="relative z-10 h-full flex flex-col justify-center items-center px-8">
      <h1 className="text-7xl font-bold text-white mb-4">Taylor Brooks</h1>
      <p className="text-2xl text-gray-400 mb-12">Full-Stack Developer</p>
      
      <div className="flex gap-6 mb-16">
        <button className="px-10 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-500 transition-all group"
                style={{boxShadow: '0 0 0 rgba(37,99,235,0)'}}>
          <span className="group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]">Projects</span>
        </button>
        <button className="px-10 py-4 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-500 transition-all group"
                style={{boxShadow: '0 0 0 rgba(147,51,234,0)'}}>
          <span className="group-hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]">Contact</span>
        </button>
      </div>
      
      <div className="grid grid-cols-3 gap-8 max-w-2xl">
        <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-blue-500 transition-all group">
          <div className="text-4xl font-black text-blue-500 mb-2 group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]">50+</div>
          <div className="text-gray-400">Projects</div>
        </div>
        <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-purple-500 transition-all group">
          <div className="text-4xl font-black text-purple-500 mb-2 group-hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.6)]">5Y</div>
          <div className="text-gray-400">Experience</div>
        </div>
        <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-pink-500 transition-all group">
          <div className="text-4xl font-black text-pink-500 mb-2 group-hover:drop-shadow-[0_0_8px_rgba(236,72,153,0.6)]">30+</div>
          <div className="text-gray-400">Clients</div>
        </div>
      </div>
    </div>
  </div>
);

// 8. Geometric + Abstract
const GeometricAbstract = () => (
  <div className="w-full h-full bg-white relative overflow-hidden">
    <div className="absolute top-0 right-0 w-1/2 h-full bg-red-600"></div>
    <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-400"></div>
    <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-blue-600 transform rotate-45"></div>
    <div className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full bg-black"></div>
    
    <div className="relative z-10 h-full flex items-center px-20">
      <div className="max-w-2xl">
        <div className="bg-white p-12 shadow-2xl">
          <h1 className="text-8xl font-black text-black leading-none mb-6">
            RYAN<br/>MITCHELL
          </h1>
          <div className="w-20 h-1 bg-red-600 mb-8"></div>
          <p className="text-2xl text-gray-700 font-medium mb-8">
            Art Director & Visual Designer
          </p>
          <button className="bg-black text-white px-10 py-4 font-bold text-lg hover:bg-gray-800 transition-all">
            VIEW PORTFOLIO
          </button>
        </div>
      </div>
    </div>
  </div>
);

// 9. Collage Aesthetic
const CollageAesthetic = () => (
  <div className="w-full h-full relative overflow-hidden bg-amber-50">
    {/* Layered paper textures */}
    <div className="absolute top-10 left-10 w-64 h-80 bg-rose-200 transform -rotate-6 shadow-xl opacity-80"></div>
    <div className="absolute top-32 right-20 w-72 h-64 bg-blue-200 transform rotate-3 shadow-xl opacity-80"></div>
    <div className="absolute bottom-20 left-1/4 w-56 h-72 bg-yellow-200 transform rotate-12 shadow-xl opacity-80"></div>
    
    {/* Text cutouts */}
    <div className="absolute top-40 right-1/3 bg-white p-4 transform -rotate-3 shadow-lg border-4 border-black">
      <p className="font-bold text-2xl">CREATIVE</p>
    </div>
    
    <div className="absolute bottom-40 right-40 bg-white p-4 transform rotate-6 shadow-lg border-4 border-black">
      <p className="font-bold text-2xl">UNIQUE</p>
    </div>
    
    <div className="relative z-20 h-full flex flex-col justify-center items-center px-8">
      <div className="bg-white p-16 shadow-2xl border-8 border-black max-w-3xl transform -rotate-1">
        <h1 className="text-7xl font-black text-black mb-4"
            style={{fontFamily: 'Impact, sans-serif', letterSpacing: '0.05em'}}>
          KAI ANDERSON
        </h1>
        <p className="text-3xl font-bold text-gray-700 mb-8"
           style={{fontFamily: 'Courier New, monospace'}}>
          MULTIMEDIA ARTIST
        </p>
        <div className="flex gap-4">
          <button className="px-8 py-3 bg-black text-white font-bold hover:bg-gray-800 transition-all transform hover:rotate-1">
            PORTFOLIO
          </button>
          <button className="px-8 py-3 border-4 border-black text-black font-bold hover:bg-black hover:text-white transition-all transform hover:-rotate-1">
            CONTACT
          </button>
        </div>
      </div>
    </div>
  </div>
);

// 10. Interactive 3D Elements
const Interactive3D = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: ((e.clientX - rect.left) / rect.width - 0.5) * 20,
      y: ((e.clientY - rect.top) / rect.height - 0.5) * 20
    });
  };
  
  return (
    <div className="w-full h-full bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden"
         onMouseMove={handleMouseMove}>
      {/* Floating 3D cards */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-full max-w-6xl h-96">
          <div className="absolute top-0 left-1/4 w-64 h-80 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl shadow-2xl transform transition-transform duration-300"
               style={{
                 transform: `perspective(1000px) rotateY(${mousePos.x * 0.5}deg) rotateX(${-mousePos.y * 0.5}deg) translateZ(50px)`
               }}>
            <div className="p-8 text-white">
              <h3 className="text-2xl font-bold mb-2">Design</h3>
              <p className="text-blue-100">50+ Projects</p>
            </div>
          </div>
          
          <div className="absolute top-8 right-1/4 w-64 h-80 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl shadow-2xl transform transition-transform duration-300"
               style={{
                 transform: `perspective(1000px) rotateY(${mousePos.x * 0.3}deg) rotateX(${-mousePos.y * 0.3}deg) translateZ(30px)`
               }}>
            <div className="p-8 text-white">
              <h3 className="text-2xl font-bold mb-2">Development</h3>
              <p className="text-purple-100">Full-Stack</p>
            </div>
          </div>
          
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-64 h-80 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl shadow-2xl transition-transform duration-300"
               style={{
                 transform: `perspective(1000px) rotateY(${mousePos.x * 0.4}deg) rotateX(${-mousePos.y * 0.4}deg) translateZ(40px) translateX(-50%)`
               }}>
            <div className="p-8 text-white">
              <h3 className="text-2xl font-bold mb-2">Strategy</h3>
              <p className="text-orange-100">Brand & UX</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-30">
        <h1 className="text-8xl font-black text-white mb-4"
            style={{
              transform: `perspective(500px) rotateY(${mousePos.x * 0.2}deg) rotateX(${-mousePos.y * 0.2}deg)`,
              transition: 'transform 0.3s',
              textShadow: '0 10px 30px rgba(0,0,0,0.5)'
            }}>
          JORDAN LEE
        </h1>
        <p className="text-2xl text-purple-200"
           style={{
             transform: `perspective(500px) rotateY(${mousePos.x * 0.15}deg) rotateX(${-mousePos.y * 0.15}deg)`,
             transition: 'transform 0.3s'
           }}>
          Interactive Experience Designer
        </p>
      </div>
    </div>
  );
};

export default PortfolioShowcase;