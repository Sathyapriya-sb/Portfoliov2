import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, BarChart3, TrendingUp, Database, Github, Linkedin, Mail, Award, Target, Users } from 'lucide-react';

const PortfolioShowcase = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Data Analyst specific content
  const content = {
    name: "Alex Morgan",
    title: "Data Analyst & Insights Specialist",
    tagline: "Transforming complex data into actionable business intelligence",
    stats: [
      { label: "Projects Completed", value: "85+" },
      { label: "Years Experience", value: "6" },
      { label: "Reports Delivered", value: "200+" }
    ],
    skills: [
      { name: "Python & R", level: 95 },
      { name: "SQL & Databases", level: 90 },
      { name: "Tableau & Power BI", level: 88 },
      { name: "Machine Learning", level: 82 }
    ],
    projects: [
      { name: "Customer Churn Analysis", impact: "15% reduction" },
      { name: "Sales Forecasting Model", impact: "$2M revenue" },
      { name: "Marketing Campaign ROI", impact: "3x improvement" }
    ],
    chartData: {
      monthly: [
        { month: 'Jan', projects: 8, insights: 24 },
        { month: 'Feb', projects: 10, insights: 28 },
        { month: 'Mar', projects: 12, insights: 32 },
        { month: 'Apr', projects: 15, insights: 38 },
        { month: 'May', projects: 14, insights: 35 },
        { month: 'Jun', projects: 16, insights: 42 }
      ],
      tools: [
        { name: 'Python', value: 35 },
        { name: 'SQL', value: 30 },
        { name: 'Tableau', value: 20 },
        { name: 'Excel', value: 15 }
      ]
    },
    cta: {
      primary: "View Portfolio",
      secondary: "Download Resume"
    }
  };

  const portfolios = [
    { name: "Cyberpunk Neon", component: CyberpunkNeon },
    { name: "Minimalistic Bold Typography", component: MinimalisticBold },
    { name: "Retro 90s Nostalgia", component: Retro90s },
    { name: "Y2K Futurism", component: Y2KFuturism },
    { name: "Monochrome with Neon Pop", component: MonochromeNeon },
    { name: "Whimsical Illustrations", component: WhimsicalIllustrations },
    { name: "Dark Mode + Glows", component: DarkModeGlow },
    { name: "Geometric + Abstract", component: GeometricAbstract },
    { name: "Collage Aesthetic", component: CollageAesthetic },
    { name: "Interactive 3D Elements", component: Interactive3D },
    { name: "Indian Textiles & Patterns", component: IndianTextiles },
    { name: "Minimalist Indian Elegance", component: MinimalistIndian },
    { name: "Indian Folk Art", component: IndianFolkArt }
  ];

  const next = () => setCurrentIndex((currentIndex + 1) % portfolios.length);
  const prev = () => setCurrentIndex((currentIndex - 1 + portfolios.length) % portfolios.length);

  const CurrentPortfolio = portfolios[currentIndex].component;

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gray-900">
      <div className="absolute top-6 left-6 right-6 z-50 flex justify-between items-center">
        <div className="bg-black/80 backdrop-blur-sm px-6 py-3 rounded-full text-white font-semibold">
          {currentIndex + 1} / {portfolios.length}: {portfolios[currentIndex].name}
        </div>
        <div className="flex gap-3">
          <button onClick={prev} className="bg-black/80 backdrop-blur-sm p-3 rounded-full text-white hover:bg-black transition-all">
            <ChevronLeft size={24} />
          </button>
          <button onClick={next} className="bg-black/80 backdrop-blur-sm p-3 rounded-full text-white hover:bg-black transition-all">
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      <div className="w-full h-full overflow-y-auto">
        <CurrentPortfolio content={content} />
      </div>

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
const CyberpunkNeon = ({ content }) => (
  <div className="w-full min-h-screen bg-gray-900 relative overflow-hidden pb-20">
    <div className="absolute inset-0 opacity-20">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
    </div>
    
    <div className="relative z-10 pt-32 pb-20 px-8">
      {/* Hero Section */}
      <div className="text-center mb-20">
        <div className="text-cyan-400 text-sm mb-4 tracking-widest font-mono animate-pulse">
          &lt;DATA.ANALYST /&gt;
        </div>
        <h1 className="text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-500 mb-6"
            style={{textShadow: '0 0 30px rgba(6,182,212,0.5)'}}>
          {content.name.toUpperCase()}
        </h1>
        <p className="text-2xl text-pink-400 mb-4 tracking-wide font-mono"
           style={{textShadow: '0 0 20px rgba(236,72,153,0.5)'}}>
          // {content.title.toUpperCase()}
        </p>
        <p className="text-lg text-cyan-300 mb-12 max-w-2xl mx-auto font-mono">
          {content.tagline}
        </p>
        
        <div className="flex gap-8 justify-center mb-12">
          {content.stats.map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="text-4xl font-black text-cyan-400 mb-1"
                   style={{textShadow: '0 0 20px rgba(6,182,212,0.6)'}}>
                {stat.value}
              </div>
              <div className="text-sm text-pink-400 font-mono">{stat.label}</div>
            </div>
          ))}
        </div>
        
        <div className="flex gap-6 justify-center mb-8">
          <button className="px-8 py-4 bg-cyan-500 text-black font-bold rounded hover:bg-cyan-400 transition-all"
                  style={{boxShadow: '0 0 30px rgba(6,182,212,0.6)'}}>
            {content.cta.primary.toUpperCase()}
          </button>
          <button className="px-8 py-4 border-2 border-pink-500 text-pink-500 font-bold rounded hover:bg-pink-500 hover:text-black transition-all"
                  style={{boxShadow: '0 0 30px rgba(236,72,153,0.4)'}}>
            {content.cta.secondary.toUpperCase()}
          </button>
        </div>
        
        <div className="flex gap-6 justify-center">
          <Github className="text-cyan-400 cursor-pointer hover:text-pink-400 transition-colors" size={28} />
          <Linkedin className="text-cyan-400 cursor-pointer hover:text-pink-400 transition-colors" size={28} />
          <Mail className="text-cyan-400 cursor-pointer hover:text-pink-400 transition-colors" size={28} />
        </div>
      </div>

      {/* Skills Chart */}
      <div className="max-w-6xl mx-auto mb-16">
        <h2 className="text-4xl font-black text-cyan-400 mb-8 text-center font-mono"
            style={{textShadow: '0 0 20px rgba(6,182,212,0.6)'}}>
          // TECHNICAL.SKILLS
        </h2>
        <div className="space-y-6 bg-black/40 backdrop-blur-sm p-8 rounded-lg border border-cyan-500/30">
          {content.skills.map((skill, idx) => (
            <div key={idx}>
              <div className="flex justify-between mb-2">
                <span className="text-cyan-300 font-mono">{skill.name}</span>
                <span className="text-pink-400 font-mono">{skill.level}%</span>
              </div>
              <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-cyan-500 to-pink-500 rounded-full transition-all duration-1000"
                  style={{width: `${skill.level}%`, boxShadow: '0 0 20px rgba(6,182,212,0.6)'}}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Projects Impact */}
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-black text-pink-400 mb-8 text-center font-mono"
            style={{textShadow: '0 0 20px rgba(236,72,153,0.6)'}}>
          // KEY.PROJECTS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {content.projects.map((project, idx) => (
            <div key={idx} className="bg-black/40 backdrop-blur-sm p-6 rounded-lg border border-purple-500/30 hover:border-cyan-500 transition-all">
              <BarChart3 className="text-cyan-400 mb-4" size={32} style={{filter: 'drop-shadow(0 0 10px rgba(6,182,212,0.6))'}} />
              <h3 className="text-xl font-bold text-white mb-2">{project.name}</h3>
              <p className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500">
                {project.impact}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

// 2. Minimalistic Bold Typography
const MinimalisticBold = ({ content }) => (
  <div className="w-full min-h-screen bg-white pb-20">
    <div className="pt-32 px-20">
      {/* Hero */}
      <div className="max-w-6xl mb-24">
        <div className="text-sm tracking-widest text-gray-400 mb-6">DATA ANALYST • 2025</div>
        <h1 className="text-9xl font-black text-black leading-none mb-8">
          {content.name.split(' ')[0]}<br/>{content.name.split(' ')[1]}
        </h1>
        <p className="text-3xl text-gray-600 font-light mb-4">{content.title}</p>
        <p className="text-xl text-gray-500 mb-12 max-w-2xl">{content.tagline}</p>
        
        <div className="flex gap-12 mb-12">
          {content.stats.map((stat, idx) => (
            <div key={idx}>
              <div className="text-5xl font-black text-black mb-1">{stat.value}</div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>
        
        <div className="flex gap-8 items-center mb-8">
          <button className="text-lg font-medium text-black border-b-4 border-black pb-2 hover:text-gray-600 hover:border-gray-600 transition-all">
            {content.cta.primary}
          </button>
          <button className="text-lg font-medium text-gray-400 hover:text-black transition-all">
            {content.cta.secondary}
          </button>
        </div>
      </div>

      {/* Skills Visualization */}
      <div className="max-w-6xl mb-24">
        <h2 className="text-5xl font-black text-black mb-12">Expertise</h2>
        <div className="grid grid-cols-2 gap-16">
          {content.skills.map((skill, idx) => (
            <div key={idx}>
              <div className="flex justify-between items-baseline mb-4">
                <span className="text-2xl font-bold text-black">{skill.name}</span>
                <span className="text-4xl font-black text-black">{skill.level}</span>
              </div>
              <div className="h-2 bg-gray-200">
                <div className="h-full bg-black transition-all duration-1000" style={{width: `${skill.level}%`}} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Projects */}
      <div className="max-w-6xl">
        <h2 className="text-5xl font-black text-black mb-12">Impact</h2>
        <div className="space-y-8">
          {content.projects.map((project, idx) => (
            <div key={idx} className="border-l-8 border-black pl-8 py-4 hover:border-gray-400 transition-all">
              <h3 className="text-3xl font-bold text-black mb-2">{project.name}</h3>
              <p className="text-5xl font-black text-black">{project.impact}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

// 3. Retro 90s Nostalgia
const Retro90s = ({ content }) => (
  <div className="w-full min-h-screen relative overflow-hidden pb-20"
       style={{background: 'linear-gradient(135deg, #ffc8dd 0%, #bde0fe 50%, #cdb4db 100%)'}}>
    <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-300 rounded-full opacity-60"></div>
    <div className="absolute bottom-20 right-20 w-40 h-40 bg-pink-300 rounded-full opacity-60"></div>
    <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-blue-300 transform rotate-45 opacity-60"></div>
    
    <div className="relative z-10 pt-32 px-8">
      {/* Hero */}
      <div className="max-w-4xl mx-auto mb-16">
        <div className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-4 h-4 bg-red-400 rounded-full"></div>
            <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
            <div className="w-4 h-4 bg-green-400 rounded-full"></div>
          </div>
          <h1 className="text-6xl font-black text-black mb-4" style={{fontFamily: 'Comic Sans MS, cursive'}}>
            Welcome to my Data World!
          </h1>
          <h2 className="text-4xl font-bold text-purple-600 mb-3" style={{fontFamily: 'Comic Sans MS, cursive'}}>
            I'm {content.name}
          </h2>
          <p className="text-xl text-gray-700 mb-2" style={{fontFamily: 'Comic Sans MS, cursive'}}>
            ✨ {content.title} ✨
          </p>
          <p className="text-lg text-gray-600 mb-8" style={{fontFamily: 'Comic Sans MS, cursive'}}>
            {content.tagline}
          </p>
          
          <div className="flex gap-6 mb-8 justify-center flex-wrap">
            {content.stats.map((stat, idx) => (
              <div key={idx} className="bg-yellow-100 border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <div className="text-4xl font-black text-purple-600" style={{fontFamily: 'Comic Sans MS, cursive'}}>
                  {stat.value}
                </div>
                <div className="text-sm text-gray-700" style={{fontFamily: 'Comic Sans MS, cursive'}}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
          
          <button className="px-8 py-4 bg-yellow-300 border-4 border-black text-black font-bold text-xl hover:bg-yellow-400 transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] w-full"
                  style={{fontFamily: 'Comic Sans MS, cursive'}}>
            {content.cta.primary} →
          </button>
        </div>
      </div>

      {/* Skills Chart */}
      <div className="max-w-4xl mx-auto mb-16">
        <div className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8">
          <h2 className="text-4xl font-black text-center mb-8 text-purple-600" style={{fontFamily: 'Comic Sans MS, cursive'}}>
            My Super Skills! 🎯
          </h2>
          <div className="space-y-6">
            {content.skills.map((skill, idx) => (
              <div key={idx}>
                <div className="flex justify-between mb-2" style={{fontFamily: 'Comic Sans MS, cursive'}}>
                  <span className="text-lg font-bold">{skill.name}</span>
                  <span className="text-lg font-bold text-purple-600">{skill.level}%</span>
                </div>
                <div className="h-6 bg-pink-200 border-3 border-black rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-yellow-300 to-pink-400 transition-all duration-1000 flex items-center justify-end pr-2"
                    style={{width: `${skill.level}%`}}>
                    <span className="text-xs font-bold">★</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Projects */}
      <div className="max-w-4xl mx-auto">
        <div className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8">
          <h2 className="text-4xl font-black text-center mb-8 text-blue-600" style={{fontFamily: 'Comic Sans MS, cursive'}}>
            Cool Projects! 🚀
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {content.projects.map((project, idx) => (
              <div key={idx} className="bg-blue-100 border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <div className="text-4xl mb-3">📊</div>
                <h3 className="text-lg font-bold mb-2" style={{fontFamily: 'Comic Sans MS, cursive'}}>
                  {project.name}
                </h3>
                <p className="text-2xl font-black text-purple-600" style={{fontFamily: 'Comic Sans MS, cursive'}}>
                  {project.impact}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

// 4. Y2K Futurism
const Y2KFuturism = ({ content }) => (
  <div className="w-full min-h-screen relative overflow-hidden bg-black pb-20">
    <div className="absolute inset-0" style={{background: 'radial-gradient(circle at 50% 50%, #1a1a2e 0%, #000000 100%)'}}></div>
    
    <div className="relative z-10 pt-32 px-8">
      {/* Hero */}
      <div className="text-center mb-20">
        <div className="inline-block px-6 py-2 rounded-full text-sm font-bold mb-6"
             style={{
               background: 'linear-gradient(90deg, #00f2fe 0%, #4facfe 50%, #00f2fe 100%)',
               backgroundSize: '200% auto',
               animation: 'shimmer 3s linear infinite'
             }}>
          DATA INTELLIGENCE • AI-POWERED
        </div>
        
        <h1 className="text-8xl font-black text-transparent bg-clip-text mb-6"
            style={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              filter: 'drop-shadow(0 0 30px rgba(102,126,234,0.5))'
            }}>
          {content.name.toUpperCase()}
        </h1>
        
        <p className="text-2xl text-blue-200 mb-4 tracking-wider">{content.title}</p>
        <p className="text-lg text-blue-300/80 mb-12 max-w-2xl mx-auto">{content.tagline}</p>
        
        <div className="flex gap-8 justify-center mb-12 flex-wrap">
          {content.stats.map((stat, idx) => (
            <div key={idx} className="text-center px-6 py-4 rounded-lg"
                 style={{background: 'linear-gradient(135deg, rgba(102,126,234,0.2), rgba(118,75,162,0.2))', border: '1px solid rgba(79,172,254,0.3)'}}>
              <div className="text-4xl font-black text-transparent bg-clip-text"
                   style={{background: 'linear-gradient(90deg, #00f2fe, #4facfe)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>
                {stat.value}
              </div>
              <div className="text-sm text-blue-300">{stat.label}</div>
            </div>
          ))}
        </div>
        
        <div className="flex gap-6 justify-center">
          <button className="px-10 py-4 rounded-full font-bold text-black"
                  style={{background: 'linear-gradient(90deg, #00f2fe, #4facfe)'}}>
            {content.cta.primary.toUpperCase()}
          </button>
          <button className="px-10 py-4 rounded-full font-bold border-2 text-white hover:bg-white/10 transition-all"
                  style={{borderColor: '#4facfe', boxShadow: '0 0 20px rgba(79,172,254,0.3)'}}>
            {content.cta.secondary.toUpperCase()}
          </button>
        </div>
      </div>

      {/* Monthly Performance Chart */}
      <div className="max-w-6xl mx-auto mb-16">
        <h2 className="text-4xl font-black text-transparent bg-clip-text mb-8 text-center"
            style={{background: 'linear-gradient(90deg, #00f2fe, #4facfe)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>
          PERFORMANCE METRICS
        </h2>
        <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 p-8 rounded-2xl border border-blue-500/30">
          <div className="flex items-end justify-between h-64 gap-4">
            {content.chartData.monthly.map((data, idx) => (
              <div key={idx} className="flex-1 flex flex-col items-center gap-2">
                <div className="w-full flex flex-col gap-1">
                  <div 
                    className="w-full rounded-t-lg transition-all duration-1000"
                    style={{
                      height: `${(data.projects / 20) * 200}px`,
                      background: 'linear-gradient(to top, #667eea, #764ba2)',
                      boxShadow: '0 0 20px rgba(102,126,234,0.5)'
                    }}
                  />
                </div>
                <span className="text-blue-300 text-sm">{data.month}</span>
                <span className="text-blue-400 text-xs">{data.projects}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Skills Radar */}
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-black text-transparent bg-clip-text mb-8 text-center"
            style={{background: 'linear-gradient(90deg, #f093fb, #f5576c)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>
          TECHNICAL STACK
        </h2>
        <div className="grid grid-cols-2 gap-8">
          {content.skills.map((skill, idx) => (
            <div key={idx} className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 p-6 rounded-xl border border-purple-500/30">
              <div className="flex justify-between items-center mb-4">
                <span className="text-blue-200 text-lg font-bold">{skill.name}</span>
                <span className="text-3xl font-black text-transparent bg-clip-text"
                      style={{background: 'linear-gradient(90deg, #00f2fe, #4facfe)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>
                  {skill.level}%
                </span>
              </div>
              <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                <div 
                  className="h-full rounded-full transition-all duration-1000"
                  style={{
                    width: `${skill.level}%`,
                    background: 'linear-gradient(90deg, #667eea, #764ba2)',
                    boxShadow: '0 0 10px rgba(102,126,234,0.6)'
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    
    <style>{`
      @keyframes shimmer {
        to { background-position: 200% center; }
      }
    `}</style>
  </div>
);

// 5. Monochrome with Neon Pop
const MonochromeNeon = ({ content }) => (
  <div className="w-full min-h-screen bg-black pb-20">
    <div className="pt-32 px-8">
      {/* Hero */}
      <div className="max-w-6xl mx-auto mb-20">
        <div className="flex items-baseline gap-4 mb-8">
          <h1 className="text-8xl font-black text-white">{content.name.split(' ')[0].toUpperCase()}</h1>
          <div className="w-6 h-6 bg-lime-400 rounded-full animate-pulse"
               style={{boxShadow: '0 0 30px rgba(163,230,53,0.8)'}}></div>
        </div>
        <h1 className="text-8xl font-black text-white mb-6">{content.name.split(' ')[1].toUpperCase()}</h1>
        
        <p className="text-2xl text-gray-400 mb-4">{content.title}</p>
        <p className="text-lg text-gray-500 mb-12 max-w-2xl">{content.tagline}</p>
        
        <div className="flex gap-16 mb-12 flex-wrap">
          {content.stats.map((stat, idx) => (
            <div key={idx} className={`border-l-4 ${idx === 2 ? 'border-lime-400' : 'border-white'} pl-6`}
                 style={idx === 2 ? {boxShadow: '0 0 20px rgba(163,230,53,0.3)'} : {}}>
              <p className="text-gray-400 text-sm mb-2">{stat.label.toUpperCase()}</p>
              <p className={`text-3xl font-bold ${idx === 2 ? 'text-lime-400' : 'text-white'}`}>{stat.value}</p>
            </div>
          ))}
        </div>
        
        <div className="flex gap-6 mb-8">
          <button className="px-12 py-5 bg-lime-400 text-black text-xl font-black hover:bg-lime-300 transition-all"
                  style={{boxShadow: '0 0 40px rgba(163,230,53,0.6)'}}>
            {content.cta.primary.toUpperCase()}
          </button>
          <button className="px-12 py-5 border-2 border-white text-white text-xl font-black hover:bg-white hover:text-black transition-all">
            {content.cta.secondary.toUpperCase()}
          </button>
        </div>
      </div>

      {/* Skills Chart */}
      <div className="max-w-6xl mx-auto mb-20">
        <h2 className="text-5xl font-black text-white mb-12">EXPERTISE</h2>
        <div className="grid grid-cols-2 gap-8">
          {content.skills.map((skill, idx) => (
            <div key={idx} className="bg-gray-900 p-8 border-l-4 border-lime-400"
                 style={{boxShadow: '0 0 30px rgba(163,230,53,0.2)'}}>
              <div className="flex justify-between items-center mb-6">
                <span className="text-2xl font-bold text-white">{skill.name}</span>
                <span className="text-5xl font-black text-lime-400">{skill.level}</span>
              </div>
              <div className="h-3 bg-gray-800 overflow-hidden">
                <div 
                  className="h-full bg-lime-400 transition-all duration-1000"
                  style={{width: `${skill.level}%`, boxShadow: '0 0 20px rgba(163,230,53,0.6)'}}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Impact */}
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-black text-white mb-12">KEY DELIVERABLES</h2>
        <div className="space-y-6">
          {content.projects.map((project, idx) => (
            <div key={idx} className="bg-gray-900 p-8 border-l-8 border-lime-400 hover:border-white transition-all"
                 style={{boxShadow: '0 0 30px rgba(163,230,53,0.1)'}}>
              <h3 className="text-2xl font-bold text-white mb-3">{project.name}</h3>
              <p className="text-6xl font-black text-lime-400">{project.impact}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

// 6. Whimsical Illustrations
const WhimsicalIllustrations = ({ content }) => (
  <div className="w-full min-h-screen relative overflow-hidden pb-20"
       style={{background: 'linear-gradient(to bottom, #fef3c7, #fde68a)'}}>
    <svg className="absolute top-10 right-20 w-24 h-24 animate-bounce" style={{animationDuration: '3s'}}>
      <circle cx="50" cy="50" r="40" fill="#fbbf24" opacity="0.7"/>
      <circle cx="50" cy="50" r="30" fill="#fcd34d"/>
    </svg>
    
    <svg className="absolute bottom-20 left-10 w-32 h-32" style={{animation: 'float 4s ease-in-out infinite'}}>
      <path d="M 20 60 Q 40 20, 60 60 T 100 60" stroke="#f59e0b" strokeWidth="3" fill="none"/>
    </svg>
    
    <div className="relative z-10 pt-32 px-8">
      {/* Hero */}
      <div className="text-center max-w-4xl mx-auto mb-16">
        <div className="inline-block mb-6">
          <svg width="120" height="120" viewBox="0 0 120 120">
            <ellipse cx="60" cy="60" rx="50" ry="55" fill="#fde68a" stroke="#f59e0b" strokeWidth="3"/>
            <circle cx="45" cy="50" r="8" fill="#000"/>
            <circle cx="75" cy="50" r="8" fill="#000"/>
            <path d="M 40 70 Q 60 85, 80 70" stroke="#000" strokeWidth="3" fill="none" strokeLinecap="round"/>
          </svg>
        </div>
        
        <h1 className="text-7xl font-black text-orange-900 mb-4">
          Hey! I'm {content.name}
        </h1>
        
        <p className="text-2xl text-orange-700 mb-3 font-medium">
          📊 {content.title} ✨
        </p>
        <p className="text-xl text-orange-600 mb-8">{content.tagline}</p>
        
        <div className="flex gap-6 justify-center mb-8 flex-wrap">
          {content.stats.map((stat, idx) => (
            <div key={idx} className="bg-white border-4 border-orange-500 rounded-2xl p-4 shadow-lg">
              <div className="text-5xl font-black text-orange-500">{stat.value}</div>
              <div className="text-sm text-orange-700">{stat.label}</div>
            </div>
          ))}
        </div>
        
        <div className="flex gap-6 justify-center mb-6">
          <button className="px-8 py-4 bg-orange-500 text-white font-bold rounded-full hover:bg-orange-600 transition-all transform hover:scale-105 shadow-lg">
            {content.cta.primary}
          </button>
          <button className="px-8 py-4 bg-white border-4 border-orange-500 text-orange-500 font-bold rounded-full hover:bg-orange-50 transition-all transform hover:scale-105">
            {content.cta.secondary}
          </button>
        </div>
      </div>

      {/* Skills with cute graphics */}
      <div className="max-w-4xl mx-auto mb-16">
        <h2 className="text-5xl font-black text-orange-900 mb-8 text-center">My Toolkit 🛠️</h2>
        <div className="bg-white border-4 border-orange-500 rounded-3xl p-8 shadow-xl">
          {content.skills.map((skill, idx) => (
            <div key={idx} className="mb-6 last:mb-0">
              <div className="flex justify-between items-center mb-3">
                <span className="text-xl font-bold text-orange-800">{skill.name}</span>
                <span className="text-3xl font-black text-orange-500">{skill.level}%</span>
              </div>
              <div className="h-8 bg-orange-100 rounded-full overflow-hidden border-2 border-orange-300">
                <div 
                  className="h-full bg-gradient-to-r from-orange-400 to-orange-600 rounded-full transition-all duration-1000 flex items-center justify-end pr-3"
                  style={{width: `${skill.level}%`}}>
                  <span className="text-white text-xl">✓</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Projects */}
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl font-black text-orange-900 mb-8 text-center">Amazing Projects 🚀</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {content.projects.map((project, idx) => (
            <div key={idx} className="bg-white border-4 border-orange-500 rounded-2xl p-6 shadow-lg transform hover:rotate-2 transition-all">
              <div className="text-6xl mb-4">📈</div>
              <h3 className="text-lg font-bold text-orange-800 mb-3">{project.name}</h3>
              <p className="text-4xl font-black text-orange-500">{project.impact}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    
    <style>{`
      @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-20px); }
      }
    `}</style>
  </div>
);

// 7. Dark Mode + Glows
const DarkModeGlow = ({ content }) => (
  <div className="w-full min-h-screen bg-gray-950 relative overflow-hidden pb-20">
    <div className="absolute inset-0">
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-600 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-600 rounded-full blur-3xl opacity-20"></div>
    </div>
    
    <div className="relative z-10 pt-32 px-8">
      {/* Hero */}
      <div className="text-center mb-20">
        <h1 className="text-7xl font-bold text-white mb-4">{content.name}</h1>
        <p className="text-2xl text-gray-400 mb-4">{content.title}</p>
        <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto">{content.tagline}</p>
        
        <div className="flex gap-6 justify-center mb-12">
          <button className="px-10 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-500 transition-all group">
            <span className="group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]">{content.cta.primary}</span>
          </button>
          <button className="px-10 py-4 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-500 transition-all group">
            <span className="group-hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]">{content.cta.secondary}</span>
          </button>
        </div>
        
        <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto mb-16">
          {content.stats.map((stat, idx) => {
            const colors = ['blue', 'purple', 'pink'];
            const color = colors[idx];
            return (
              <div key={idx} className={`bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-${color}-500 transition-all group`}>
                <div className={`text-4xl font-black text-${color}-500 mb-2 group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]`}>
                  {stat.value}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Skills with glow effect */}
      <div className="max-w-5xl mx-auto mb-20">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">Technical Proficiency</h2>
        <div className="grid grid-cols-2 gap-6">
          {content.skills.map((skill, idx) => (
            <div key={idx} className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-blue-500 transition-all group">
              <div className="flex justify-between items-center mb-4">
                <span className="text-xl text-gray-300 group-hover:text-white transition-colors">{skill.name}</span>
                <span className="text-3xl font-black text-blue-500 group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]">
                  {skill.level}%
                </span>
              </div>
              <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-1000 group-hover:shadow-[0_0_10px_rgba(59,130,246,0.6)]"
                  style={{width: `${skill.level}%`}}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Data Visualization */}
      <div className="max-w-5xl mx-auto mb-20">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">Monthly Activity</h2>
        <div className="bg-gray-900 p-8 rounded-xl border border-gray-800">
          <div className="flex items-end justify-between h-64 gap-3">
            {content.chartData.monthly.map((data, idx) => (
              <div key={idx} className="flex-1 flex flex-col items-center gap-2">
                <div 
                  className="w-full rounded-t-lg bg-gradient-to-t from-blue-600 to-purple-600 transition-all duration-1000 hover:shadow-[0_0_20px_rgba(59,130,246,0.6)]"
                  style={{height: `${(data.projects / 20) * 200}px`}}
                />
                <span className="text-gray-400 text-sm">{data.month}</span>
                <span className="text-blue-400 font-bold">{data.projects}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Projects */}
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">Featured Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {content.projects.map((project, idx) => {
            const colors = ['blue', 'purple', 'pink'];
            const color = colors[idx];
            return (
              <div key={idx} className={`bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-${color}-500 transition-all group`}>
                <Database className={`text-${color}-500 mb-4 group-hover:drop-shadow-[0_0_10px_rgba(59,130,246,0.6)]`} size={32} />
                <h3 className="text-xl font-bold text-white mb-3">{project.name}</h3>
                <p className={`text-4xl font-black text-${color}-500 group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]`}>
                  {project.impact}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  </div>
);

// 8. Geometric + Abstract
const GeometricAbstract = ({ content }) => (
  <div className="w-full min-h-screen bg-white relative overflow-hidden pb-20">
    <div className="absolute top-0 right-0 w-1/2 h-full bg-red-600"></div>
    <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-400"></div>
    <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-blue-600 transform rotate-45"></div>
    <div className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full bg-black"></div>
    
    <div className="relative z-10 pt-32 px-20">
      {/* Hero */}
      <div className="max-w-2xl mb-20">
        <div className="bg-white p-12 shadow-2xl">
          <h1 className="text-8xl font-black text-black leading-none mb-6">
            {content.name.split(' ')[0].toUpperCase()}<br/>{content.name.split(' ')[1].toUpperCase()}
          </h1>
          <div className="w-20 h-1 bg-red-600 mb-6"></div>
          <p className="text-2xl text-gray-700 font-medium mb-3">{content.title}</p>
          <p className="text-lg text-gray-600 mb-8">{content.tagline}</p>
          
          <div className="flex gap-8 mb-8">
            {content.stats.map((stat, idx) => (
              <div key={idx}>
                <div className="text-4xl font-black text-black">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
          
          <div className="flex gap-6 mb-6">
            <button className="bg-black text-white px-10 py-4 font-bold text-lg hover:bg-gray-800 transition-all">
              {content.cta.primary.toUpperCase()}
            </button>
            <button className="border-4 border-black text-black px-10 py-4 font-bold text-lg hover:bg-black hover:text-white transition-all">
              {content.cta.secondary.toUpperCase()}
            </button>
          </div>
        </div>
      </div>

      {/* Skills Bars */}
      <div className="max-w-4xl mb-20">
        <div className="bg-white p-12 shadow-2xl">
          <h2 className="text-5xl font-black text-black mb-8">CAPABILITIES</h2>
          <div className="w-16 h-1 bg-red-600 mb-12"></div>
          <div className="space-y-8">
            {content.skills.map((skill, idx) => (
              <div key={idx}>
                <div className="flex justify-between items-baseline mb-3">
                  <span className="text-2xl font-black text-black">{skill.name}</span>
                  <span className="text-5xl font-black text-red-600">{skill.level}</span>
                </div>
                <div className="h-4 bg-gray-200">
                  <div className="h-full bg-black transition-all duration-1000" style={{width: `${skill.level}%`}} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-6xl">
        <h2 className="text-6xl font-black text-black mb-12">IMPACT</h2>
        <div className="w-20 h-1 bg-red-600 mb-12"></div>
        <div className="grid grid-cols-3 gap-8">
          {content.projects.map((project, idx) => {
            const bgColors = ['bg-blue-600', 'bg-yellow-400', 'bg-red-600'];
            return (
              <div key={idx} className={`${bgColors[idx]} p-8 text-white`}>
                <h3 className="text-xl font-black mb-4">{project.name.toUpperCase()}</h3>
                <p className="text-6xl font-black">{project.impact}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  </div>
);

// 9. Collage Aesthetic
const CollageAesthetic = ({ content }) => (
  <div className="w-full min-h-screen relative overflow-hidden bg-amber-50 pb-20">
    <div className="absolute top-10 left-10 w-64 h-80 bg-rose-200 transform -rotate-6 shadow-xl opacity-80"></div>
    <div className="absolute top-32 right-20 w-72 h-64 bg-blue-200 transform rotate-3 shadow-xl opacity-80"></div>
    <div className="absolute bottom-20 left-1/4 w-56 h-72 bg-yellow-200 transform rotate-12 shadow-xl opacity-80"></div>
    
    <div className="absolute top-40 right-1/3 bg-white p-4 transform -rotate-3 shadow-lg border-4 border-black">
      <p className="font-bold text-2xl">DATA</p>
    </div>
    
    <div className="absolute bottom-40 right-40 bg-white p-4 transform rotate-6 shadow-lg border-4 border-black">
      <p className="font-bold text-3xl">{content.stats[0].value}</p>
      <p className="text-sm">{content.stats[0].label}</p>
    </div>
    
    <div className="relative z-20 pt-32 px-8">
      {/* Hero */}
      <div className="max-w-3xl mx-auto mb-16">
        <div className="bg-white p-16 shadow-2xl border-8 border-black transform -rotate-1">
          <h1 className="text-7xl font-black text-black mb-4"
              style={{fontFamily: 'Impact, sans-serif', letterSpacing: '0.05em'}}>
            {content.name.toUpperCase()}
          </h1>
          <p className="text-3xl font-bold text-gray-700 mb-3"
             style={{fontFamily: 'Courier New, monospace'}}>
            {content.title.toUpperCase()}
          </p>
          <p className="text-xl text-gray-600 mb-8"
             style={{fontFamily: 'Courier New, monospace'}}>
            {content.tagline}
          </p>
          
          <div className="flex gap-6 mb-8 justify-center flex-wrap">
            {content.stats.map((stat, idx) => (
              <div key={idx} className="bg-yellow-100 border-4 border-black p-4 transform -rotate-2 shadow-lg">
                <div className="text-4xl font-black text-black">{stat.value}</div>
                <div className="text-sm text-gray-700">{stat.label}</div>
              </div>
            ))}
          </div>
          
          <div className="flex gap-4 mb-6">
            <button className="px-8 py-3 bg-black text-white font-bold hover:bg-gray-800 transition-all transform hover:rotate-1">
              {content.cta.primary.toUpperCase()}
            </button>
            <button className="px-8 py-3 border-4 border-black text-black font-bold hover:bg-black hover:text-white transition-all transform hover:-rotate-1">
              {content.cta.secondary.toUpperCase()}
            </button>
          </div>
        </div>
      </div>

      {/* Skills Collage */}
      <div className="max-w-4xl mx-auto mb-16">
        <div className="bg-white p-12 shadow-2xl border-8 border-black transform rotate-1">
          <h2 className="text-5xl font-black text-black mb-8" style={{fontFamily: 'Impact, sans-serif'}}>
            SKILLS
          </h2>
          <div className="grid grid-cols-2 gap-6">
            {content.skills.map((skill, idx) => (
              <div key={idx} className="bg-pink-100 border-4 border-black p-6 shadow-lg transform -rotate-1">
                <h3 className="text-2xl font-black mb-3" style={{fontFamily: 'Courier New, monospace'}}>
                  {skill.name}
                </h3>
                <div className="text-6xl font-black">{skill.level}%</div>
                <div className="h-4 bg-black mt-3" style={{width: `${skill.level}%`}}></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Projects */}
      <div className="max-w-4xl mx-auto">
        <div className="bg-white p-12 shadow-2xl border-8 border-black transform -rotate-1">
          <h2 className="text-5xl font-black text-black mb-8" style={{fontFamily: 'Impact, sans-serif'}}>
            PROJECTS
          </h2>
          <div className="space-y-6">
            {content.projects.map((project, idx) => (
              <div key={idx} className="bg-blue-100 border-4 border-black p-6 shadow-lg transform rotate-1">
                <h3 className="text-2xl font-bold mb-2" style={{fontFamily: 'Courier New, monospace'}}>
                  {project.name.toUpperCase()}
                </h3>
                <p className="text-5xl font-black">{project.impact}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

// 10. Interactive 3D Elements
const Interactive3D = ({ content }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: ((e.clientX - rect.left) / rect.width - 0.5) * 20,
      y: ((e.clientY - rect.top) / rect.height - 0.5) * 20
    });
  };
  
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden pb-20"
         onMouseMove={handleMouseMove}>
      {/* Floating 3D cards with stats */}
      <div className="absolute inset-0 flex items-center justify-center pt-32">
        <div className="relative w-full max-w-6xl h-96">
          {content.stats.map((stat, idx) => {
            const positions = [
              { top: '0', left: '25%' },
              { top: '2rem', right: '25%' },
              { bottom: '0', left: '50%', transform: 'translateX(-50%)' }
            ];
            const gradients = [
              'from-blue-500 to-cyan-500',
              'from-purple-500 to-pink-500',
              'from-orange-500 to-red-500'
            ];
            const depths = [50, 30, 40];
            const rotationMults = [0.5, 0.3, 0.4];
            
            return (
              <div key={idx}
                   className={`absolute w-64 h-80 bg-gradient-to-br ${gradients[idx]} rounded-xl shadow-2xl transform transition-transform duration-300`}
                   style={{
                     ...positions[idx],
                     transform: `perspective(1000px) rotateY(${mousePos.x * rotationMults[idx]}deg) rotateX(${-mousePos.y * rotationMults[idx]}deg) translateZ(${depths[idx]}px)${positions[idx].transform ? ' ' + positions[idx].transform : ''}`
                   }}>
                <div className="p-8 text-white h-full flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold mb-2 opacity-80">{stat.label}</h3>
                    <p className="text-6xl font-black">{stat.value}</p>
                  </div>
                  {idx === 0 && (
                    <div className="text-sm opacity-80">
                      {content.tagline}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-30">
        <h1 className="text-8xl font-black text-white mb-4"
            style={{
              transform: `perspective(500px) rotateY(${mousePos.x * 0.2}deg) rotateX(${-mousePos.y * 0.2}deg)`,
              transition: 'transform 0.3s',
              textShadow: '0 10px 30px rgba(0,0,0,0.5)'
            }}>
          {content.name.toUpperCase()}
        </h1>
        <p className="text-2xl text-purple-200 mb-8"
           style={{
             transform: `perspective(500px) rotateY(${mousePos.x * 0.15}deg) rotateX(${-mousePos.y * 0.15}deg)`,
             transition: 'transform 0.3s'
           }}>
          {content.title}
        </p>
        
        <div className="flex gap-6 justify-center mb-8"
             style={{
               transform: `perspective(500px) rotateY(${mousePos.x * 0.1}deg) rotateX(${-mousePos.y * 0.1}deg)`,
               transition: 'transform 0.3s'
             }}>
          <button className="px-10 py-4 bg-white text-purple-900 font-bold rounded-lg hover:bg-purple-100 transition-all">
            {content.cta.primary}
          </button>
          <button className="px-10 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-all">
            {content.cta.secondary}
          </button>
        </div>
      </div>

      {/* Skills Section Below */}
      <div className="relative z-30 pt-[600px] px-8">
        <div className="max-w-5xl mx-auto mb-16">
          <h2 className="text-4xl font-black text-white mb-8 text-center">Technical Expertise</h2>
          <div className="grid grid-cols-2 gap-6">
            {content.skills.map((skill, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20"
                   style={{
                     transform: `perspective(500px) rotateY(${mousePos.x * 0.05}deg) rotateX(${-mousePos.y * 0.05}deg)`,
                     transition: 'transform 0.3s'
                   }}>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xl text-white font-bold">{skill.name}</span>
                  <span className="text-3xl font-black text-cyan-400">{skill.level}%</span>
                </div>
                <div className="h-3 bg-white/20 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full transition-all duration-1000"
                    style={{width: `${skill.level}%`}}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Projects */}
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-black text-white mb-8 text-center">Key Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {content.projects.map((project, idx) => {
              const gradients = [
                'from-blue-500 to-cyan-500',
                'from-purple-500 to-pink-500',
                'from-orange-500 to-red-500'
              ];
              return (
                <div key={idx} className={`bg-gradient-to-br ${gradients[idx]} p-6 rounded-xl shadow-xl`}
                     style={{
                       transform: `perspective(500px) rotateY(${mousePos.x * 0.1}deg) rotateX(${-mousePos.y * 0.1}deg)`,
                       transition: 'transform 0.3s'
                     }}>
                  <TrendingUp className="text-white mb-4" size={32} />
                  <h3 className="text-xl font-bold text-white mb-3">{project.name}</h3>
                  <p className="text-4xl font-black text-white">{project.impact}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

// 11. Indian Textiles & Patterns
const IndianTextiles = ({ content }) => (
  <div className="w-full min-h-screen relative overflow-hidden pb-20"
       style={{background: 'linear-gradient(135deg, #8B0000 0%, #B8860B 50%, #006400 100%)'}}>
    {/* Paisley Pattern Background */}
    <div className="absolute inset-0 opacity-10">
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="paisley" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
            <path d="M100,20 Q120,40 120,70 Q120,100 100,120 Q80,100 80,70 Q80,40 100,20 M100,30 Q110,45 110,70 Q110,95 100,110 Q90,95 90,70 Q90,45 100,30" 
                  fill="currentColor" opacity="0.3"/>
            <circle cx="100" cy="70" r="3" fill="currentColor"/>
            <circle cx="95" cy="60" r="2" fill="currentColor"/>
            <circle cx="105" cy="60" r="2" fill="currentColor"/>
            <circle cx="95" cy="80" r="2" fill="currentColor"/>
            <circle cx="105" cy="80" r="2" fill="currentColor"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#paisley)" className="text-yellow-600"/>
      </svg>
    </div>

    {/* Mandala Corner Decorations */}
    <svg className="absolute top-0 left-0 w-64 h-64 opacity-30" viewBox="0 0 200 200">
      <circle cx="100" cy="100" r="80" fill="none" stroke="#FFD700" strokeWidth="2"/>
      <circle cx="100" cy="100" r="60" fill="none" stroke="#FFD700" strokeWidth="2"/>
      <circle cx="100" cy="100" r="40" fill="none" stroke="#FFD700" strokeWidth="2"/>
      {[...Array(12)].map((_, i) => (
        <line key={i} x1="100" y1="100" 
              x2={100 + 80 * Math.cos((i * 30 * Math.PI) / 180)} 
              y2={100 + 80 * Math.sin((i * 30 * Math.PI) / 180)} 
              stroke="#FFD700" strokeWidth="1"/>
      ))}
    </svg>
    
    <svg className="absolute bottom-0 right-0 w-64 h-64 opacity-30" viewBox="0 0 200 200">
      <circle cx="100" cy="100" r="80" fill="none" stroke="#DC143C" strokeWidth="2"/>
      <circle cx="100" cy="100" r="60" fill="none" stroke="#DC143C" strokeWidth="2"/>
      <circle cx="100" cy="100" r="40" fill="none" stroke="#DC143C" strokeWidth="2"/>
      {[...Array(12)].map((_, i) => (
        <line key={i} x1="100" y1="100" 
              x2={100 + 80 * Math.cos((i * 30 * Math.PI) / 180)} 
              y2={100 + 80 * Math.sin((i * 30 * Math.PI) / 180)} 
              stroke="#DC143C" strokeWidth="1"/>
      ))}
    </svg>
    
    <div className="relative z-10 pt-32 px-8">
      {/* Hero Section */}
      <div className="text-center mb-20">
        <div className="inline-block mb-6 px-8 py-3 bg-amber-600/80 backdrop-blur-sm border-2 border-yellow-400"
             style={{clipPath: 'polygon(10% 0%, 90% 0%, 100% 10%, 100% 90%, 90% 100%, 10% 100%, 0% 90%, 0% 10%)'}}>
          <p className="text-yellow-200 text-sm tracking-widest font-semibold">DATA INSIGHTS SPECIALIST</p>
        </div>
        
        <h1 className="text-8xl font-black mb-6 text-transparent bg-clip-text"
            style={{
              background: 'linear-gradient(135deg, #FFD700 0%, #DC143C 50%, #228B22 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 0 40px rgba(255,215,0,0.3)'
            }}>
          {content.name.toUpperCase()}
        </h1>
        
        <div className="max-w-3xl mx-auto mb-6">
          <div className="h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent mb-6"></div>
          <p className="text-2xl text-yellow-100 font-semibold mb-3">{content.title}</p>
          <p className="text-lg text-yellow-200/90 mb-8">{content.tagline}</p>
          <div className="h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent"></div>
        </div>
        
        <div className="flex gap-8 justify-center mb-12 flex-wrap">
          {content.stats.map((stat, idx) => {
            const colors = ['border-yellow-500 bg-yellow-900/40', 'border-red-600 bg-red-900/40', 'border-green-600 bg-green-900/40'];
            return (
              <div key={idx} className={`${colors[idx]} backdrop-blur-sm border-4 p-6 relative`}
                   style={{clipPath: 'polygon(5% 0%, 95% 0%, 100% 5%, 100% 95%, 95% 100%, 5% 100%, 0% 95%, 0% 5%)'}}>
                <div className="text-5xl font-black text-yellow-300 mb-2">{stat.value}</div>
                <div className="text-sm text-yellow-100 font-semibold">{stat.label}</div>
                <div className="absolute top-2 left-2 w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="absolute top-2 right-2 w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="absolute bottom-2 left-2 w-3 h-3 bg-green-500 rounded-full"></div>
                <div className="absolute bottom-2 right-2 w-3 h-3 bg-yellow-400 rounded-full"></div>
              </div>
            );
          })}
        </div>
        
        <div className="flex gap-6 justify-center">
          <button className="px-12 py-4 bg-gradient-to-r from-yellow-600 to-yellow-700 text-white font-bold text-lg border-2 border-yellow-400 hover:from-yellow-500 hover:to-yellow-600 transition-all shadow-lg">
            {content.cta.primary.toUpperCase()}
          </button>
          <button className="px-12 py-4 border-3 border-yellow-400 text-yellow-100 font-bold text-lg hover:bg-yellow-400 hover:text-red-900 transition-all">
            {content.cta.secondary.toUpperCase()}
          </button>
        </div>
      </div>

      {/* Skills Section */}
      <div className="max-w-6xl mx-auto mb-16">
        <h2 className="text-5xl font-black text-yellow-300 mb-12 text-center">Technical Excellence</h2>
        <div className="bg-red-900/40 backdrop-blur-sm border-4 border-yellow-600 p-10"
             style={{clipPath: 'polygon(2% 0%, 98% 0%, 100% 2%, 100% 98%, 98% 100%, 2% 100%, 0% 98%, 0% 2%)'}}>
          <div className="grid grid-cols-2 gap-8">
            {content.skills.map((skill, idx) => (
              <div key={idx} className="relative">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xl font-bold text-yellow-200">{skill.name}</span>
                  <span className="text-4xl font-black text-yellow-400">{skill.level}%</span>
                </div>
                <div className="h-4 bg-red-950 border-2 border-yellow-700 relative overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-yellow-500 via-red-600 to-green-600 transition-all duration-1000"
                       style={{width: `${skill.level}%`}}>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-around">
                    {[...Array(10)].map((_, i) => (
                      <div key={i} className="w-0.5 h-full bg-yellow-800/30"></div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-black text-red-300 mb-12 text-center">Project Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {content.projects.map((project, idx) => {
            const gradients = [
              'from-yellow-700 to-yellow-900',
              'from-red-700 to-red-900',
              'from-green-700 to-green-900'
            ];
            const borderColors = ['border-yellow-500', 'border-red-500', 'border-green-500'];
            return (
              <div key={idx} className={`bg-gradient-to-br ${gradients[idx]} backdrop-blur-sm border-4 ${borderColors[idx]} p-8 relative hover:scale-105 transition-all`}
                   style={{clipPath: 'polygon(5% 0%, 95% 0%, 100% 5%, 100% 95%, 95% 100%, 5% 100%, 0% 95%, 0% 5%)'}}>
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
                <BarChart3 className="text-yellow-300 mb-4" size={40} />
                <h3 className="text-xl font-bold text-yellow-100 mb-3">{project.name}</h3>
                <p className="text-5xl font-black text-yellow-300">{project.impact}</p>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-400 to-transparent"></div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  </div>
);

// 12. Minimalist Indian Elegance
const MinimalistIndian = ({ content }) => (
  <div className="w-full min-h-screen bg-gradient-to-br from-amber-50 via-stone-100 to-amber-100 pb-20">
    {/* Subtle Jharokha (Window) Pattern */}
    <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-amber-300 to-transparent opacity-60"></div>
    
    {/* Decorative Arches */}
    <svg className="absolute top-20 left-10 w-32 h-32 opacity-20" viewBox="0 0 100 100">
      <path d="M10,90 L10,40 Q10,10 50,10 Q90,10 90,40 L90,90" 
            fill="none" stroke="#B8860B" strokeWidth="2"/>
      <path d="M20,85 L20,45 Q20,20 50,20 Q80,20 80,45 L80,85" 
            fill="none" stroke="#B8860B" strokeWidth="1.5"/>
    </svg>
    
    <svg className="absolute top-20 right-10 w-32 h-32 opacity-20" viewBox="0 0 100 100">
      <path d="M10,90 L10,40 Q10,10 50,10 Q90,10 90,40 L90,90" 
            fill="none" stroke="#B8860B" strokeWidth="2"/>
      <path d="M20,85 L20,45 Q20,20 50,20 Q80,20 80,45 L80,85" 
            fill="none" stroke="#B8860B" strokeWidth="1.5"/>
    </svg>
    
    <div className="relative z-10 pt-32 px-20">
      {/* Hero Section */}
      <div className="max-w-5xl mx-auto mb-24">
        <div className="text-center mb-8">
          <div className="inline-block mb-6">
            <div className="flex items-center gap-3 px-6 py-2 border border-amber-400">
              <div className="w-2 h-2 bg-amber-600 rotate-45"></div>
              <p className="text-amber-800 text-sm tracking-[0.3em] font-light">DATA ANALYST</p>
              <div className="w-2 h-2 bg-amber-600 rotate-45"></div>
            </div>
          </div>
        </div>
        
        <h1 className="text-8xl font-light text-amber-900 mb-8 text-center tracking-tight">
          {content.name}
        </h1>
        
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="h-px w-24 bg-gradient-to-r from-transparent to-amber-400"></div>
          <svg width="20" height="20" viewBox="0 0 20 20" className="text-amber-600">
            <circle cx="10" cy="10" r="8" fill="none" stroke="currentColor" strokeWidth="1"/>
            <circle cx="10" cy="10" r="4" fill="currentColor"/>
          </svg>
          <div className="h-px w-24 bg-gradient-to-l from-transparent to-amber-400"></div>
        </div>
        
        <p className="text-xl text-amber-800 font-light text-center mb-3">{content.title}</p>
        <p className="text-base text-amber-700 text-center max-w-2xl mx-auto mb-12 leading-relaxed">
          {content.tagline}
        </p>
        
        <div className="flex gap-16 justify-center mb-12">
          {content.stats.map((stat, idx) => (
            <div key={idx} className="text-center relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-6 h-6 border border-amber-400 rotate-45"></div>
              <div className="text-6xl font-light text-amber-900 mb-2 pt-4">{stat.value}</div>
              <div className="text-sm text-amber-700 tracking-widest uppercase">{stat.label}</div>
              <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-6 h-6 border border-amber-400 rotate-45"></div>
            </div>
          ))}
        </div>
        
        <div className="flex gap-8 justify-center items-center">
          <button className="px-10 py-3 bg-amber-800 text-amber-50 font-light tracking-wide hover:bg-amber-700 transition-all">
            {content.cta.primary}
          </button>
          <div className="w-px h-8 bg-amber-400"></div>
          <button className="px-10 py-3 border border-amber-800 text-amber-900 font-light tracking-wide hover:bg-amber-800 hover:text-amber-50 transition-all">
            {content.cta.secondary}
          </button>
        </div>
      </div>

      {/* Skills Section */}
      <div className="max-w-5xl mx-auto mb-24">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-16 bg-amber-400"></div>
            <h2 className="text-4xl font-light text-amber-900 tracking-wide">Expertise</h2>
            <div className="h-px w-16 bg-amber-400"></div>
          </div>
        </div>
        
        <div className="space-y-12">
          {content.skills.map((skill, idx) => (
            <div key={idx} className="relative">
              <div className="flex justify-between items-baseline mb-4">
                <span className="text-2xl font-light text-amber-900">{skill.name}</span>
                <span className="text-4xl font-light text-amber-800">{skill.level}</span>
              </div>
              <div className="h-px bg-amber-200 relative">
                <div className="absolute top-0 left-0 h-px bg-amber-700 transition-all duration-1000"
                     style={{width: `${skill.level}%`}}>
                </div>
                <div className="absolute top-0 transition-all duration-1000"
                     style={{left: `${skill.level}%`, transform: 'translateX(-50%)'}}>
                  <div className="w-3 h-3 bg-amber-800 rotate-45 -mt-1.5"></div>
                </div>
              </div>
              {idx < content.skills.length - 1 && (
                <svg className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-8 h-8 opacity-30" viewBox="0 0 20 20">
                  <circle cx="10" cy="10" r="2" fill="#B8860B"/>
                  <circle cx="10" cy="10" r="6" fill="none" stroke="#B8860B" strokeWidth="0.5"/>
                </svg>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Projects Section */}
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-16 bg-amber-400"></div>
            <h2 className="text-4xl font-light text-amber-900 tracking-wide">Impact Delivered</h2>
            <div className="h-px w-16 bg-amber-400"></div>
          </div>
        </div>
        
        <div className="space-y-8">
          {content.projects.map((project, idx) => (
            <div key={idx} className="group">
              <div className="border border-amber-300 p-8 hover:border-amber-600 transition-all hover:shadow-lg bg-white/50">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-2 h-2 bg-amber-600 rotate-45"></div>
                      <h3 className="text-2xl font-light text-amber-900">{project.name}</h3>
                    </div>
                    <div className="h-px w-24 bg-amber-300 mb-6"></div>
                    <p className="text-5xl font-light text-amber-800">{project.impact}</p>
                  </div>
                  <Target className="text-amber-600 opacity-40 group-hover:opacity-100 transition-opacity" size={48} />
                </div>
              </div>
              {idx < content.projects.length - 1 && (
                <div className="h-8 flex items-center justify-center">
                  <div className="w-px h-full bg-gradient-to-b from-amber-300 to-transparent"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
    
    {/* Gold Corner Embellishments */}
    <div className="absolute bottom-4 left-4 w-16 h-16 border-l-2 border-b-2 border-amber-400 opacity-40"></div>
    <div className="absolute bottom-4 right-4 w-16 h-16 border-r-2 border-b-2 border-amber-400 opacity-40"></div>
  </div>
);

// 13. Indian Folk Art
const IndianFolkArt = ({ content }) => (
  <div className="w-full min-h-screen relative overflow-hidden pb-20"
       style={{background: 'linear-gradient(to bottom, #E8D5B7 0%, #D2B48C 100%)'}}>
    {/* Warli-style decorative elements */}
    <div className="absolute top-10 right-10 opacity-20">
      <svg width="150" height="150" viewBox="0 0 150 150">
        {/* Warli dancing figures */}
        <circle cx="75" cy="30" r="8" fill="#8B4513"/>
        <line x1="75" y1="38" x2="75" y2="60" stroke="#8B4513" strokeWidth="3"/>
        <line x1="75" y1="45" x2="60" y2="55" stroke="#8B4513" strokeWidth="3"/>
        <line x1="75" y1="45" x2="90" y2="55" stroke="#8B4513" strokeWidth="3"/>
        <line x1="75" y1="60" x2="60" y2="80" stroke="#8B4513" strokeWidth="3"/>
        <line x1="75" y1="60" x2="90" y2="80" stroke="#8B4513" strokeWidth="3"/>
        
        <circle cx="45" cy="40" r="6" fill="#8B4513"/>
        <line x1="45" y1="46" x2="45" y2="63" stroke="#8B4513" strokeWidth="2.5"/>
        <line x1="45" y1="52" x2="35" y2="60" stroke="#8B4513" strokeWidth="2.5"/>
        <line x1="45" y1="52" x2="55" y2="60" stroke="#8B4513" strokeWidth="2.5"/>
        <line x1="45" y1="63" x2="35" y2="78" stroke="#8B4513" strokeWidth="2.5"/>
        <line x1="45" y1="63" x2="55" y2="78" stroke="#8B4513" strokeWidth="2.5"/>
      </svg>
    </div>
    
    <div className="absolute bottom-20 left-10 opacity-20">
      <svg width="120" height="120" viewBox="0 0 120 120">
        {/* Madhubani-style fish */}
        <ellipse cx="60" cy="60" rx="35" ry="20" fill="none" stroke="#8B4513" strokeWidth="2.5"/>
        <circle cx="50" cy="55" r="3" fill="#8B4513"/>
        <path d="M95,60 L110,50 L110,70 Z" fill="#8B4513"/>
        <line x1="60" y1="40" x2="60" y2="80" stroke="#8B4513" strokeWidth="1"/>
        <line x1="50" y1="45" x2="50" y2="75" stroke="#8B4513" strokeWidth="1"/>
        <line x1="70" y1="45" x2="70" y2="75" stroke="#8B4513" strokeWidth="1"/>
        {[...Array(8)].map((_, i) => (
          <circle key={i} cx={40 + i * 5} cy={60 + (i % 2) * 5} r="1" fill="#8B4513"/>
        ))}
      </svg>
    </div>
    
    {/* Decorative tribal border at top */}
    <div className="absolute top-0 left-0 right-0 h-8 flex items-center justify-center gap-4 bg-amber-900/20">
      {[...Array(20)].map((_, i) => (
        <div key={i} className="flex items-center gap-1">
          <div className="w-2 h-2 bg-amber-900 rotate-45"></div>
          <div className="w-1 h-6 bg-amber-900"></div>
          <div className="w-2 h-2 bg-amber-900 rotate-45"></div>
        </div>
      ))}
    </div>
    
    <div className="relative z-10 pt-32 px-8">
      {/* Hero Section */}
      <div className="text-center mb-20">
        <div className="inline-block mb-6">
          <div className="flex items-center gap-3 bg-white/70 backdrop-blur-sm px-8 py-3 border-4 border-amber-900">
            <div className="flex gap-1">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="w-2 h-2 bg-amber-900 rounded-full"></div>
              ))}
            </div>
            <p className="text-amber-900 text-sm tracking-widest font-bold">ANALYTICS & INSIGHTS</p>
            <div className="flex gap-1">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="w-2 h-2 bg-amber-900 rounded-full"></div>
              ))}
            </div>
          </div>
        </div>
        
        <h1 className="text-8xl font-black text-amber-950 mb-6"
            style={{fontFamily: 'Impact, sans-serif', letterSpacing: '0.05em'}}>
          {content.name.toUpperCase()}
        </h1>
        
        <div className="flex items-center justify-center gap-4 mb-6">
          {[...Array(7)].map((_, i) => (
            <div key={i} className={`w-3 h-3 ${i === 3 ? 'bg-red-800' : 'bg-amber-900'} rotate-45`}></div>
          ))}
        </div>
        
        <p className="text-2xl text-amber-900 font-bold mb-3">{content.title}</p>
        <p className="text-lg text-amber-800 mb-12 max-w-2xl mx-auto">{content.tagline}</p>
        
        <div className="flex gap-8 justify-center mb-12 flex-wrap">
          {content.stats.map((stat, idx) => (
            <div key={idx} className="relative">
              <div className="bg-white border-4 border-amber-900 p-8 relative">
                {/* Tribal corner decorations */}
                <div className="absolute top-1 left-1 w-4 h-4 border-t-2 border-l-2 border-red-800"></div>
                <div className="absolute top-1 right-1 w-4 h-4 border-t-2 border-r-2 border-red-800"></div>
                <div className="absolute bottom-1 left-1 w-4 h-4 border-b-2 border-l-2 border-red-800"></div>
                <div className="absolute bottom-1 right-1 w-4 h-4 border-b-2 border-r-2 border-red-800"></div>
                
                <div className="text-6xl font-black text-amber-950 mb-2">{stat.value}</div>
                <div className="text-sm text-amber-900 font-bold tracking-wider">{stat.label}</div>
                
                {/* Decorative dots */}
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-red-800 rounded-full"></div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-green-800 rounded-full"></div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex gap-6 justify-center">
          <button className="px-12 py-4 bg-amber-900 text-amber-50 font-bold text-lg border-4 border-amber-950 hover:bg-amber-800 transition-all relative">
            <div className="absolute -top-1 -left-1 w-3 h-3 bg-red-700"></div>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-700"></div>
            <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-green-700"></div>
            <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-red-700"></div>
            {content.cta.primary.toUpperCase()}
          </button>
          <button className="px-12 py-4 border-4 border-amber-900 text-amber-900 font-bold text-lg hover:bg-amber-900 hover:text-amber-50 transition-all">
            {content.cta.secondary.toUpperCase()}
          </button>
        </div>
      </div>

      {/* Skills Section */}
      <div className="max-w-5xl mx-auto mb-16">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-6">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-2 h-2 bg-amber-900 rounded-full"></div>
            ))}
          </div>
          <h2 className="text-5xl font-black text-amber-950 mb-6"
              style={{fontFamily: 'Impact, sans-serif'}}>
            MY SKILLS
          </h2>
          <div className="flex items-center justify-center gap-4">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-2 h-2 bg-amber-900 rounded-full"></div>
            ))}
          </div>
        </div>
        
        <div className="bg-white border-4 border-amber-900 p-10 relative">
          {/* Tribal pattern border */}
          <div className="absolute top-2 left-2 right-2 bottom-2 border-2 border-red-800 opacity-30"></div>
          
          <div className="relative z-10 space-y-8">
            {content.skills.map((skill, idx) => (
              <div key={idx}>
                <div className="flex justify-between items-center mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 bg-amber-900 rotate-45"></div>
                    <span className="text-2xl font-bold text-amber-950">{skill.name}</span>
                  </div>
                  <span className="text-5xl font-black text-red-800">{skill.level}%</span>
                </div>
                <div className="h-6 bg-amber-100 border-3 border-amber-900 relative overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-amber-700 via-red-700 to-green-800 transition-all duration-1000"
                       style={{width: `${skill.level}%`}}>
                  </div>
                  {/* Tribal pattern overlay */}
                  <div className="absolute inset-0 flex items-center">
                    {[...Array(15)].map((_, i) => (
                      <div key={i} className="flex-1 border-r border-amber-900/20 h-full"></div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Corner tribal motifs */}
          {[...Array(4)].map((_, i) => {
            const positions = [
              'top-4 left-4',
              'top-4 right-4',
              'bottom-4 left-4',
              'bottom-4 right-4'
            ];
            return (
              <div key={i} className={`absolute ${positions[i]}`}>
                <svg width="30" height="30" viewBox="0 0 30 30">
                  <circle cx="15" cy="15" r="3" fill="#8B4513"/>
                  <circle cx="15" cy="15" r="8" fill="none" stroke="#8B4513" strokeWidth="1"/>
                  <circle cx="15" cy="15" r="12" fill="none" stroke="#8B4513" strokeWidth="0.5"/>
                </svg>
              </div>
            );
          })}
        </div>
      </div>

      {/* Projects Section */}
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-6">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-2 h-2 bg-amber-900 rounded-full"></div>
            ))}
          </div>
          <h2 className="text-5xl font-black text-amber-950 mb-6"
              style={{fontFamily: 'Impact, sans-serif'}}>
            PROJECT GALLERY
          </h2>
          <div className="flex items-center justify-center gap-4">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-2 h-2 bg-amber-900 rounded-full"></div>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {content.projects.map((project, idx) => {
            const bgColors = ['bg-yellow-100', 'bg-red-100', 'bg-green-100'];
            return (
              <div key={idx} className={`${bgColors[idx]} border-4 border-amber-900 p-8 relative hover:scale-105 transition-all`}>
                {/* Warli-style icon */}
                <div className="mb-6">
                  <svg width="60" height="60" viewBox="0 0 60 60">
                    <circle cx="30" cy="15" r="6" fill="#8B4513"/>
                    <line x1="30" y1="21" x2="30" y2="38" stroke="#8B4513" strokeWidth="3"/>
                    <line x1="30" y1="27" x2="18" y2="35" stroke="#8B4513" strokeWidth="3"/>
                    <line x1="30" y1="27" x2="42" y2="35" stroke="#8B4513" strokeWidth="3"/>
                    <line x1="30" y1="38" x2="20" y2="50" stroke="#8B4513" strokeWidth="3"/>
                    <line x1="30" y1="38" x2="40" y2="50" stroke="#8B4513" strokeWidth="3"/>
                  </svg>
                </div>
                
                <h3 className="text-xl font-bold text-amber-950 mb-4">{project.name}</h3>
                <div className="h-1 bg-amber-900 w-16 mb-4"></div>
                <p className="text-5xl font-black text-amber-900">{project.impact}</p>
                
                {/* Decorative corner elements */}
                <div className="absolute top-2 left-2 w-6 h-6 border-l-3 border-t-3 border-red-800"></div>
                <div className="absolute top-2 right-2 w-6 h-6 border-r-3 border-t-3 border-red-800"></div>
                <div className="absolute bottom-2 left-2 w-6 h-6 border-l-3 border-b-3 border-green-800"></div>
                <div className="absolute bottom-2 right-2 w-6 h-6 border-r-3 border-b-3 border-green-800"></div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
    
    {/* Bottom decorative tribal border */}
    <div className="absolute bottom-0 left-0 right-0 h-8 flex items-center justify-center gap-4 bg-amber-900/20">
      {[...Array(20)].map((_, i) => (
        <div key={i} className="flex items-center gap-1">
          <div className="w-2 h-2 bg-amber-900 rotate-45"></div>
          <div className="w-1 h-6 bg-amber-900"></div>
          <div className="w-2 h-2 bg-amber-900 rotate-45"></div>
        </div>
      ))}
    </div>
  </div>
);

export default PortfolioShowcase;