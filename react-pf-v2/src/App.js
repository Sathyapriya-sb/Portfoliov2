import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Palette } from 'lucide-react';

const PortfolioShowcase = () => {
  const [current, setCurrent] = useState(0);

  const portfolios = [
    {
      name: "Minimalist Terminal",
      description: "Clean, code-inspired aesthetic",
      component: <MinimalistTerminal />
    },
    {
      name: "Bold Neon",
      description: "Vibrant, modern, eye-catching",
      component: <BoldNeon />
    },
    {
      name: "Elegant Serif",
      description: "Professional, sophisticated",
      component: <ElegantSerif />
    },
    {
      name: "Playful Geometric",
      description: "Fun, creative, unique shapes",
      component: <PlayfulGeometric />
    },
    {
      name: "Dark Dashboard",
      description: "Sleek, data-focused interface",
      component: <DarkDashboard />
    },
    {
      name: "Warm Gradient",
      description: "Friendly, approachable, colorful",
      component: <WarmGradient />
    },
    {
      name: "Brutalist Grid",
      description: "Raw, bold, unconventional",
      component: <BrutalistGrid />
    },
    {
      name: "Glassmorphic",
      description: "Modern, frosted glass effect",
      component: <Glassmorphic />
    }
  ];

  const next = () => setCurrent((current + 1) % portfolios.length);
  const prev = () => setCurrent((current - 1 + portfolios.length) % portfolios.length);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Palette className="w-8 h-8 text-blue-400" />
            <h1 className="text-4xl font-bold text-white">Portfolio Style Explorer</h1>
          </div>
          <p className="text-slate-300 text-lg">Browse different design personalities for your data analyst portfolio</p>
        </div>

        <div className="bg-slate-800 rounded-lg p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={prev}
              className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <div className="text-center">
              <h2 className="text-2xl font-bold text-white mb-1">
                {portfolios[current].name}
              </h2>
              <p className="text-slate-400">{portfolios[current].description}</p>
              <p className="text-sm text-slate-500 mt-2">
                {current + 1} of {portfolios.length}
              </p>
            </div>

            <button
              onClick={next}
              className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          <div className="bg-white rounded-lg overflow-hidden shadow-2xl" style={{ height: '600px' }}>
            {portfolios[current].component}
          </div>
        </div>

        <div className="flex flex-wrap gap-2 justify-center">
          {portfolios.map((p, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`px-4 py-2 rounded-lg transition-all ${
                i === current
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
              }`}
            >
              {p.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

const MinimalistTerminal = () => (
  <div className="h-full bg-black text-green-400 font-mono p-8 overflow-auto">
    <div className="max-w-4xl">
      <div className="mb-6">
        <span className="text-green-500">$</span> cat portfolio.txt
      </div>
      <div className="mb-8">
        <h1 className="text-3xl mb-2">&gt; [YOUR_NAME].data_analyst</h1>
        <p className="text-green-300">[your.email@example.com]</p>
      </div>
      <div className="mb-6">
        <div className="text-green-500 mb-2">## ABOUT</div>
        <p className="text-green-300 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="mb-6">
        <div className="text-green-500 mb-2">## SKILLS</div>
        <div className="flex flex-wrap gap-2">
          {['[Skill 1]', '[Skill 2]', '[Skill 3]', '[Skill 4]', '[Skill 5]'].map(s => (
            <span key={s} className="border border-green-400 px-3 py-1">{s}</span>
          ))}
        </div>
      </div>
      <div>
        <div className="text-green-500 mb-2">## PROJECTS</div>
        <div className="space-y-2">
          <div className="border-l-2 border-green-400 pl-4">→ [project_name_1]</div>
          <div className="border-l-2 border-green-400 pl-4">→ [project_name_2]</div>
          <div className="border-l-2 border-green-400 pl-4">→ [project_name_3]</div>
        </div>
      </div>
      <div className="mt-8">
        <span className="text-green-500 animate-pulse">█</span>
      </div>
    </div>
  </div>
);

const BoldNeon = () => (
  <div className="h-full bg-slate-950 p-8 overflow-auto relative">
    <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-cyan-900/20"></div>
    <div className="relative z-10 max-w-5xl mx-auto">
      <h1 className="text-7xl font-black mb-4" style={{
        background: 'linear-gradient(45deg, #ff00ff, #00ffff)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        textShadow: '0 0 40px rgba(255,0,255,0.5)'
      }}>
        [YOUR NAME]
      </h1>
      <div className="text-2xl text-cyan-400 mb-12 font-bold">[JOB TITLE] / [TAGLINE]</div>
      
      <div className="grid grid-cols-3 gap-4 mb-12">
        {['[SERVICE 1]', '[SERVICE 2]', '[SERVICE 3]'].map(text => (
          <div key={text} className="bg-gradient-to-br from-purple-600 to-cyan-600 p-6 rounded-lg text-center font-black text-2xl text-white transform hover:scale-105 transition-transform cursor-pointer" style={{boxShadow: '0 0 30px rgba(139,92,246,0.5)'}}>
            {text}
          </div>
        ))}
      </div>

      <div className="border-4 border-cyan-400 p-8 rounded-lg mb-8" style={{boxShadow: '0 0 30px rgba(34,211,238,0.3)'}}>
        <h2 className="text-3xl font-black text-pink-400 mb-4">[FEATURED PROJECT]</h2>
        <div className="h-32 bg-gradient-to-r from-purple-900 to-cyan-900 rounded"></div>
        <p className="text-cyan-300 mt-4 text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
        </p>
      </div>

      <button className="bg-gradient-to-r from-pink-600 to-cyan-600 text-white font-black text-xl px-12 py-4 rounded-full hover:scale-110 transition-transform" style={{boxShadow: '0 0 40px rgba(236,72,153,0.6)'}}>
        [CALL TO ACTION]
      </button>
    </div>
  </div>
);

const ElegantSerif = () => (
  <div className="h-full bg-slate-50 p-12 overflow-auto">
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-16 border-b-2 border-slate-300 pb-8">
        <h1 className="text-6xl mb-4 font-serif text-slate-800" style={{fontFamily: 'Georgia, serif'}}>
          [Your Name]
        </h1>
        <p className="text-slate-600 text-xl tracking-widest uppercase text-sm">[Job Title]</p>
      </div>

      <div className="prose prose-lg max-w-none mb-16">
        <p className="text-slate-700 leading-relaxed font-serif text-lg" style={{fontFamily: 'Georgia, serif'}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
          exercitation ullamco laboris.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-8 mb-16">
        <div>
          <h3 className="text-2xl font-serif mb-4 text-slate-800" style={{fontFamily: 'Georgia, serif'}}>[Section Title 1]</h3>
          <ul className="space-y-2 text-slate-600">
            <li className="border-l-2 border-slate-400 pl-4">[Item 1]</li>
            <li className="border-l-2 border-slate-400 pl-4">[Item 2]</li>
            <li className="border-l-2 border-slate-400 pl-4">[Item 3]</li>
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-serif mb-4 text-slate-800" style={{fontFamily: 'Georgia, serif'}}>[Section Title 2]</h3>
          <ul className="space-y-2 text-slate-600">
            <li className="border-l-2 border-slate-400 pl-4">[Tool 1]</li>
            <li className="border-l-2 border-slate-400 pl-4">[Tool 2]</li>
            <li className="border-l-2 border-slate-400 pl-4">[Tool 3]</li>
          </ul>
        </div>
      </div>

      <div className="border-t-2 border-slate-300 pt-8">
        <h2 className="text-3xl font-serif mb-6 text-slate-800" style={{fontFamily: 'Georgia, serif'}}>[Portfolio Section]</h2>
        <div className="space-y-6">
          {[1, 2].map(i => (
            <div key={i} className="bg-white p-6 border border-slate-200 hover:shadow-lg transition-shadow">
              <h4 className="text-xl font-serif mb-2 text-slate-800">[Project Title {i}]</h4>
              <p className="text-slate-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const PlayfulGeometric = () => (
  <div className="h-full bg-amber-50 p-8 overflow-auto relative">
    <div className="absolute top-10 right-10 w-32 h-32 bg-pink-400 rounded-full opacity-50"></div>
    <div className="absolute bottom-20 left-10 w-24 h-24 bg-blue-400 rotate-45 opacity-50"></div>
    <div className="absolute top-40 left-1/4 w-20 h-20 bg-green-400 opacity-50" style={{clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)'}}></div>
    
    <div className="relative z-10 max-w-5xl mx-auto">
      <div className="bg-white p-8 rounded-3xl shadow-xl mb-8 transform -rotate-1">
        <h1 className="text-6xl font-black text-slate-800 mb-2" style={{fontFamily: 'Comic Sans MS, cursive'}}>
          [Your Name]! 
        </h1>
        <p className="text-2xl text-blue-600 font-bold">✨ [Your Title] & [Your Passion]</p>
      </div>

      <div className="grid grid-cols-2 gap-6 mb-8">
        <div className="bg-gradient-to-br from-pink-400 to-pink-500 p-6 rounded-2xl shadow-lg transform rotate-1">
          <h3 className="text-white font-bold text-2xl mb-3">🎯 [Section 1]</h3>
          <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Making data fun!</p>
        </div>
        <div className="bg-gradient-to-br from-blue-400 to-blue-500 p-6 rounded-2xl shadow-lg transform -rotate-1">
          <h3 className="text-white font-bold text-2xl mb-3">🚀 [Section 2]</h3>
          <div className="flex flex-wrap gap-2">
            {['[Skill 1]', '[Skill 2]', '[Skill 3]', '[Skill 4]'].map(s => (
              <span key={s} className="bg-white text-blue-600 px-3 py-1 rounded-full font-bold text-sm">{s}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white p-8 rounded-3xl shadow-xl transform rotate-1">
        <h2 className="text-4xl font-black text-slate-800 mb-6">[Projects Section] 📊</h2>
        <div className="grid grid-cols-3 gap-4">
          {['[Project 1]', '[Project 2]', '[Project 3]'].map((p, i) => (
            <div key={i} className="h-32 bg-gradient-to-br from-green-300 to-green-400 rounded-xl flex items-center justify-center shadow-md transform hover:scale-105 transition-transform cursor-pointer">
              <span className="text-white font-bold text-lg">{p}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const DarkDashboard = () => (
  <div className="h-full bg-slate-900 p-6 overflow-auto">
    <div className="max-w-6xl mx-auto">
      <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-700">
        <div>
          <h1 className="text-3xl font-bold text-white mb-1">[YOUR_NAME]</h1>
          <p className="text-slate-400">[Job Title]</p>
        </div>
        <div className="flex gap-3">
          <div className="bg-slate-800 px-4 py-2 rounded text-slate-300">● [STATUS]</div>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4 mb-6">
        {[
          { label: '[Metric 1]', value: '[XX]' },
          { label: '[Metric 2]', value: '[X.XK]' },
          { label: '[Metric 3]', value: '[XX]' },
          { label: '[Metric 4]', value: '[XXX]' }
        ].map(stat => (
          <div key={stat.label} className="bg-slate-800 p-4 rounded-lg border border-slate-700">
            <div className="text-3xl font-bold text-blue-400 mb-1">{stat.value}</div>
            <div className="text-slate-400 text-sm">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
          <h3 className="text-white font-bold mb-4 flex items-center gap-2">
            <div className="w-3 h-3 bg-green-400 rounded-full"></div>
            [FEATURED SECTION]
          </h3>
          <div className="h-40 bg-slate-900 rounded mb-4 flex items-center justify-center">
            <div className="text-slate-600">[ Chart Visualization ]</div>
          </div>
          <p className="text-slate-300 text-sm">Lorem ipsum dolor sit amet consectetur adipiscing elit</p>
        </div>

        <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
          <h3 className="text-white font-bold mb-4">[TECH STACK]</h3>
          <div className="space-y-3">
            {[
              { name: '[Tool 1]', level: 95 },
              { name: '[Tool 2]', level: 90 },
              { name: '[Tool 3]', level: 85 },
              { name: '[Tool 4]', level: 75 }
            ].map(skill => (
              <div key={skill.name}>
                <div className="flex justify-between text-sm text-slate-300 mb-1">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="bg-slate-900 h-2 rounded-full overflow-hidden">
                  <div className="bg-blue-500 h-full" style={{ width: `${skill.level}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 bg-slate-800 p-6 rounded-lg border border-slate-700">
        <h3 className="text-white font-bold mb-4">[RECENT PROJECTS]</h3>
        <div className="space-y-2">
          {['[project_name_1]', '[project_name_2]', '[project_name_3]'].map(p => (
            <div key={p} className="bg-slate-900 p-3 rounded flex items-center justify-between hover:bg-slate-750 cursor-pointer">
              <span className="text-slate-300">{p}</span>
              <span className="text-slate-500 text-sm">[time]</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const WarmGradient = () => (
  <div className="h-full bg-gradient-to-br from-orange-100 via-pink-100 to-purple-100 p-12 overflow-auto">
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <div className="inline-block bg-gradient-to-r from-orange-500 to-pink-500 text-white px-8 py-3 rounded-full mb-6 font-bold">
          ✨ [Your Role]
        </div>
        <h1 className="text-7xl font-black mb-4 bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
          [Your Name]
        </h1>
        <p className="text-xl text-slate-700">
          [Your tagline or mission statement]
        </p>
      </div>

      <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl mb-8">
        <p className="text-lg text-slate-700 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
          exercitation ullamco laboris nisi ut aliquip.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-6 mb-8">
        {[
          { color: 'from-orange-400 to-orange-500', icon: '📊' },
          { color: 'from-pink-400 to-pink-500', icon: '🎯' },
          { color: 'from-purple-400 to-purple-500', icon: '💡' }
        ].map((item, i) => (
          <div key={i} className={`bg-gradient-to-br ${item.color} p-6 rounded-2xl shadow-lg text-white text-center transform hover:scale-105 transition-transform cursor-pointer`}>
            <div className="text-5xl mb-3">{item.icon}</div>
            <h3 className="font-bold text-xl mb-2">[Service {i + 1}]</h3>
            <p className="text-sm opacity-90">[Brief description here]</p>
          </div>
        ))}
      </div>

      <div className="text-center">
        <button className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 text-white font-bold text-lg px-12 py-4 rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all">
          [Call to Action]
        </button>
      </div>
    </div>
  </div>
);

const BrutalistGrid = () => (
  <div className="h-full bg-yellow-300 p-0 overflow-auto">
    <div className="border-8 border-black h-full">
      <div className="bg-black text-yellow-300 p-4 border-b-8 border-black">
        <h1 className="text-5xl font-black uppercase">[YOUR NAME]</h1>
      </div>
      
      <div className="grid grid-cols-2" style={{ gridAutoRows: 'minmax(200px, auto)' }}>
        <div className="border-4 border-black p-6 bg-red-500">
          <h2 className="text-3xl font-black mb-3 uppercase">[JOB TITLE]</h2>
          <p className="text-lg font-bold">[BRIEF TAGLINE OR DESCRIPTION]</p>
        </div>
        
        <div className="border-4 border-black p-6 bg-white">
          <h3 className="text-2xl font-black mb-4 uppercase">[SKILLS]</h3>
          <div className="space-y-2">
            {['[SKILL 1]', '[SKILL 2]', '[SKILL 3]'].map(s => (
              <div key={s} className="bg-black text-white px-3 py-2 font-black">{s}</div>
            ))}
          </div>
        </div>
        
        <div className="border-4 border-black p-6 bg-blue-400 col-span-2">
          <h3 className="text-2xl font-black mb-4 uppercase">[ABOUT]</h3>
          <p className="text-lg font-bold leading-tight">
            LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT, SED DO EIUSMOD 
            TEMPOR INCIDIDUNT UT LABORE ET DOLORE MAGNA ALIQUA.
          </p>
        </div>
        
        <div className="border-4 border-black p-6 bg-green-400">
          <div className="bg-black h-full flex items-center justify-center">
            <span className="text-green-400 text-4xl font-black">[PROJECT_01]</span>
          </div>
        </div>
        
        <div className="border-4 border-black p-6 bg-yellow-300">
          <div className="bg-black h-full flex items-center justify-center">
            <span className="text-yellow-300 text-4xl font-black">[PROJECT_02]</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Glassmorphic = () => (
  <div className="h-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-12 overflow-auto relative">
    <div className="absolute inset-0 opacity-30">
      <div className="absolute top-20 left-20 w-64 h-64 bg-white rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-yellow-300 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-pink-300 rounded-full blur-3xl"></div>
    </div>
    
    <div className="relative z-10 max-w-4xl mx-auto">
      <div className="bg-white/20 backdrop-blur-lg rounded-3xl p-10 shadow-2xl border border-white/30 mb-8">
        <h1 className="text-6xl font-bold text-white mb-3">[Your Name]</h1>
        <p className="text-2xl text-white/90">[Job Title & Specialty]</p>
      </div>

      <div className="grid grid-cols-2 gap-6 mb-8">
        <div className="bg-white/15 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/20">
          <h3 className="text-white font-bold text-xl mb-4">[Section 1]</h3>
          <p className="text-white/90">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        
        <div className="bg-white/15 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/20">
          <h3 className="text-white font-bold text-xl mb-4">[Section 2]</h3>
          <div className="flex flex-wrap gap-2">
            {['[Skill 1]', '[Skill 2]', '[Skill 3]', '[Skill 4]', '[Skill 5]'].map(s => (
              <span key={s} className="bg-white/30 backdrop-blur-sm text-white px-4 py-1 rounded-full text-sm font-semibold border border-white/40">
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-white/20">
        <h2 className="text-white font-bold text-2xl mb-6">[Portfolio Section]</h2>
        <div className="grid grid-cols-3 gap-4">
          {[1, 2, 3].map(i => (
            <div key={i} className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/30 hover:bg-white/30 transition-all cursor-pointer">
              <div className="h-24 bg-white/20 rounded-lg mb-3"></div>
              <h4 className="text-white font-semibold">[Project {i}]</h4>
              <p className="text-white/80 text-sm">[Brief description]</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default PortfolioShowcase;