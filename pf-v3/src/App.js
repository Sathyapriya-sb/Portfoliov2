import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Mail, Github, Linkedin, BarChart3, Database, TrendingUp, FileText, ExternalLink } from 'lucide-react';

const PortfolioShowcase = () => {
  const [currentTheme, setCurrentTheme] = useState(0);

  const themes = [
    {
      name: 'Cottagecore',
      description: 'Nature-inspired, rural simplicity',
      component: CottagecorePortfolio
    },
    {
      name: 'Vaporwave',
      description: 'Retro-futuristic 80s/90s vibes',
      component: VaporwavePortfolio
    },
    {
      name: 'Dark Academia',
      description: 'Literary intellectualism',
      component: DarkAcademiaPortfolio
    },
    {
      name: 'Y2K',
      description: 'Early 2000s tech nostalgia',
      component: Y2KPortfolio
    },
    {
      name: 'Minimalism',
      description: 'Clean lines and simplicity',
      component: MinimalismPortfolio
    },
    {
      name: 'Gothic',
      description: 'Dark and mysterious',
      component: GothicPortfolio
    },
    {
      name: 'Boho',
      description: 'Free-spirited and eclectic',
      component: BohoPortfolio
    },
    {
      name: 'Grunge',
      description: 'Raw 90s rebellion',
      component: GrungePortfolio
    },
    {
      name: 'Pastel Goth',
      description: 'Dark meets whimsical pastels',
      component: PastelGothPortfolio
    },
    {
      name: 'Cyberpunk',
      description: 'Futuristic dystopian tech',
      component: CyberpunkPortfolio
    }
  ];

  const nextTheme = () => {
    setCurrentTheme((prev) => (prev + 1) % themes.length);
  };

  const prevTheme = () => {
    setCurrentTheme((prev) => (prev - 1 + themes.length) % themes.length);
  };

  const CurrentComponent = themes[currentTheme].component;

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation Header */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Portfolio Theme Showcase</h1>
            <p className="text-sm text-gray-400">Data Analyst Portfolio Designs</p>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={prevTheme}
              className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition"
            >
              <ChevronLeft size={24} />
            </button>
            <div className="text-center min-w-[200px]">
              <div className="text-lg font-semibold">{themes[currentTheme].name}</div>
              <div className="text-xs text-gray-400">{themes[currentTheme].description}</div>
            </div>
            <button
              onClick={nextTheme}
              className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
        
        {/* Theme Dots */}
        <div className="flex justify-center gap-2 pb-3">
          {themes.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentTheme(idx)}
              className={`w-2 h-2 rounded-full transition ${
                idx === currentTheme ? 'bg-blue-500 w-8' : 'bg-gray-600 hover:bg-gray-500'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Portfolio Display */}
      <div className="pt-32">
        <CurrentComponent />
      </div>
    </div>
  );
};

// 1. Cottagecore Portfolio
function CottagecorePortfolio() {
  return (
    <div className="min-h-screen bg-[#f5f0e8] text-[#4a3f35]">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <header className="text-center mb-16 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 text-6xl opacity-20">🌿</div>
          <h1 className="text-5xl font-serif mb-4 text-[#5d4e37]">Emma Woodhouse</h1>
          <p className="text-xl text-[#7a6f5d] font-serif italic">Data Analyst & Storyteller</p>
          <div className="mt-4 flex justify-center gap-6 text-[#7a6f5d]">
            <Mail size={20} /> <Github size={20} /> <Linkedin size={20} />
          </div>
        </header>

        <section className="bg-white/60 backdrop-blur rounded-lg p-8 mb-8 border-2 border-[#d4c5a9] shadow-lg">
          <h2 className="text-2xl font-serif mb-4 text-[#5d4e37] flex items-center gap-2">
            🌾 About Me
          </h2>
          <p className="leading-relaxed text-[#6b5d4f]">
            Like tending a garden, I cultivate insights from data with patience and care. I believe in the beauty of simple truths found in numbers, and the stories they tell about our world.
          </p>
        </section>

        <section className="bg-white/60 backdrop-blur rounded-lg p-8 mb-8 border-2 border-[#d4c5a9] shadow-lg">
          <h2 className="text-2xl font-serif mb-6 text-[#5d4e37] flex items-center gap-2">
            🌻 Projects
          </h2>
          <div className="space-y-4">
            {['Farm-to-Table Supply Chain Analysis', 'Seasonal Harvest Predictions', 'Rural Community Health Metrics'].map((project, idx) => (
              <div key={idx} className="border-l-4 border-[#9c8b6f] pl-4 py-2">
                <h3 className="font-serif text-lg text-[#5d4e37]">{project}</h3>
                <p className="text-sm text-[#7a6f5d]">Gentle analysis rooted in practical wisdom</p>
              </div>
            ))}
          </div>
        </section>

        <div className="text-center text-[#7a6f5d] font-serif italic">
          "In every dataset, there blooms a story" 🌸
        </div>
      </div>
    </div>
  );
}

// 2. Vaporwave Portfolio
function VaporwavePortfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-600 to-cyan-500 text-white">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <header className="text-center mb-16 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="text-9xl">統計</div>
          </div>
          <h1 className="text-6xl font-bold mb-2 relative" style={{fontFamily: 'Courier New, monospace', textShadow: '3px 3px 0px #ff00ff, 6px 6px 0px #00ffff'}}>
            ＡＬＥＸ　ＣＨＥＮ
          </h1>
          <p className="text-2xl mb-4" style={{fontFamily: 'Courier New, monospace'}}>データアナリスト // 1998</p>
          <div className="flex justify-center gap-8 text-cyan-300">
            <Mail size={24} /> <Github size={24} /> <Linkedin size={24} />
          </div>
        </header>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <section className="bg-gradient-to-br from-pink-500/30 to-purple-600/30 backdrop-blur border-2 border-cyan-400 p-6 rounded-none shadow-[8px_8px_0px_rgba(0,255,255,0.5)]">
            <h2 className="text-2xl font-bold mb-4" style={{fontFamily: 'Courier New, monospace'}}>
              ► ＳＫＩＬＬＳ
            </h2>
            <div className="space-y-2 text-cyan-200">
              <div>⬛ Python // R // SQL</div>
              <div>⬛ Machine Learning</div>
              <div>⬛ Data Visualization</div>
              <div>⬛ Statistical Modeling</div>
            </div>
          </section>

          <section className="bg-gradient-to-br from-cyan-500/30 to-blue-600/30 backdrop-blur border-2 border-pink-400 p-6 rounded-none shadow-[8px_8px_0px_rgba(255,0,255,0.5)]">
            <h2 className="text-2xl font-bold mb-4" style={{fontFamily: 'Courier New, monospace'}}>
              ► ＰＲＯＪＥＣＴＳ
            </h2>
            <div className="space-y-3">
              {['Retro Gaming Analytics', 'E-Commerce Trends 2000-2025', 'Digital Nostalgia Metrics'].map((p, i) => (
                <div key={i} className="border border-yellow-300 p-2 bg-black/30">
                  <div className="text-yellow-300 text-sm">{p}</div>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="text-center text-2xl" style={{fontFamily: 'Courier New, monospace', textShadow: '2px 2px 0px #ff00ff'}}>
          Ａ Ｅ Ｓ Ｔ Ｈ Ｅ Ｔ Ｉ Ｃ　Ｄ Ａ Ｔ Ａ
        </div>
      </div>
    </div>
  );
}

// 3. Dark Academia Portfolio
function DarkAcademiaPortfolio() {
  return (
    <div className="min-h-screen bg-[#1a1410] text-[#e8dcc4]">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <header className="text-center mb-16 border-b-2 border-[#5c4a3a] pb-8">
          <h1 className="text-5xl font-serif mb-4 text-[#d4c5a0]">Sebastian Moriarty</h1>
          <p className="text-xl italic text-[#b39b7a]">Data Analyst & Scholar</p>
          <p className="text-sm mt-2 text-[#8b7355]">Oxford • Cambridge • MIT</p>
          <div className="mt-6 flex justify-center gap-6 text-[#b39b7a]">
            <Mail size={20} /> <Github size={20} /> <Linkedin size={20} />
          </div>
        </header>

        <section className="mb-12">
          <h2 className="text-3xl font-serif mb-6 text-[#d4c5a0] border-l-4 border-[#5c4a3a] pl-4">
            Scholarly Pursuits
          </h2>
          <p className="text-[#b39b7a] leading-relaxed font-serif mb-4">
            In the quiet corners of vast libraries, I have devoted myself to the pursuit of knowledge through data. My research bridges the classical traditions of statistical inference with modern computational methods.
          </p>
          <p className="text-[#8b7355] italic text-sm">
            "There is no data but that which illuminates truth, and no truth but that which bears scrutiny."
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-serif mb-6 text-[#d4c5a0] border-l-4 border-[#5c4a3a] pl-4">
            Research Portfolio
          </h2>
          <div className="space-y-6">
            {[
              { title: 'Philosophical Foundations of Bayesian Statistics', year: '2024' },
              { title: 'Historical Trends in Economic Data', year: '2023' },
              { title: 'Literary Analysis Through Textual Data Mining', year: '2023' }
            ].map((project, idx) => (
              <div key={idx} className="bg-[#2a2018] border border-[#5c4a3a] p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-serif text-[#d4c5a0]">{project.title}</h3>
                  <span className="text-sm text-[#8b7355]">{project.year}</span>
                </div>
                <p className="text-sm text-[#8b7355] italic">Published research exploring the intersection of classical methodology and contemporary analysis</p>
              </div>
            ))}
          </div>
        </section>

        <footer className="text-center text-[#8b7355] font-serif italic border-t-2 border-[#5c4a3a] pt-8">
          "Data vincit omnia" — Knowledge conquers all
        </footer>
      </div>
    </div>
  );
}

// 4. Y2K Portfolio
function Y2KPortfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-purple-500 to-pink-400">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <header className="text-center mb-12 bg-white/90 backdrop-blur rounded-3xl p-8 shadow-2xl border-4 border-purple-600">
          <div className="text-6xl mb-4">💿</div>
          <h1 className="text-6xl font-bold mb-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent" style={{fontFamily: 'Arial Black, sans-serif'}}>
            JESSICA TECH
          </h1>
          <p className="text-2xl text-purple-700 font-bold">★ DATA ANALYST ★</p>
          <div className="flex justify-center gap-6 mt-4 text-purple-600">
            <Mail size={28} /> <Github size={28} /> <Linkedin size={28} />
          </div>
        </header>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {[
            { icon: '📊', title: 'SKILLS', color: 'from-blue-400 to-cyan-300', items: ['Python', 'SQL', 'Tableau', 'Excel'] },
            { icon: '💾', title: 'PROJECTS', color: 'from-purple-400 to-pink-300', items: ['E-Commerce 2.0', 'Social Media Analytics', 'Tech Trends'] },
            { icon: '🌟', title: 'ABOUT', color: 'from-pink-400 to-orange-300', items: ['Creative', 'Tech-Savvy', 'Innovative', 'Results-Driven'] }
          ].map((section, idx) => (
            <section key={idx} className={`bg-gradient-to-br ${section.color} rounded-3xl p-6 shadow-xl border-4 border-white`}>
              <div className="text-4xl mb-3">{section.icon}</div>
              <h2 className="text-2xl font-bold mb-4 text-white" style={{fontFamily: 'Arial Black, sans-serif', textShadow: '2px 2px 4px rgba(0,0,0,0.3)'}}>
                {section.title}
              </h2>
              <div className="space-y-2">
                {section.items.map((item, i) => (
                  <div key={i} className="bg-white/80 rounded-full px-4 py-2 text-center font-bold text-purple-700">
                    {item}
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="bg-white/90 backdrop-blur rounded-3xl p-8 text-center shadow-2xl border-4 border-blue-600">
          <p className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-pink-600 bg-clip-text text-transparent">
            ✨ Making Data Fun Since 2000! ✨
          </p>
        </div>
      </div>
    </div>
  );
}

// 5. Minimalism Portfolio
function MinimalismPortfolio() {
  return (
    <div className="min-h-screen bg-white text-black">
      <div className="max-w-3xl mx-auto px-8 py-16">
        <header className="mb-24">
          <h1 className="text-6xl font-light mb-4 tracking-tight">Michael Chen</h1>
          <p className="text-xl text-gray-600">Data Analyst</p>
          <div className="flex gap-8 mt-8 text-gray-600">
            <Mail size={20} /> <Github size={20} /> <Linkedin size={20} />
          </div>
        </header>

        <section className="mb-24">
          <h2 className="text-sm uppercase tracking-widest text-gray-500 mb-6">About</h2>
          <p className="text-lg leading-relaxed text-gray-800">
            I transform complex data into clear insights. My approach emphasizes clarity, precision, and actionable results.
          </p>
        </section>

        <section className="mb-24">
          <h2 className="text-sm uppercase tracking-widest text-gray-500 mb-8">Experience</h2>
          <div className="space-y-12">
            {[
              { role: 'Senior Data Analyst', company: 'Tech Corp', year: '2022—Present' },
              { role: 'Data Analyst', company: 'StartupXYZ', year: '2020—2022' }
            ].map((job, idx) => (
              <div key={idx} className="border-l-2 border-gray-300 pl-6">
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="text-xl font-light">{job.role}</h3>
                  <span className="text-sm text-gray-500">{job.year}</span>
                </div>
                <p className="text-gray-600">{job.company}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-24">
          <h2 className="text-sm uppercase tracking-widest text-gray-500 mb-8">Skills</h2>
          <div className="grid grid-cols-2 gap-4">
            {['Python', 'SQL', 'R', 'Tableau', 'Machine Learning', 'Statistics'].map((skill, idx) => (
              <div key={idx} className="py-3 text-gray-800">{skill}</div>
            ))}
          </div>
        </section>

        <footer className="text-center text-gray-400 text-sm">
          © 2025
        </footer>
      </div>
    </div>
  );
}

// 6. Gothic Portfolio
function GothicPortfolio() {
  return (
    <div className="min-h-screen bg-black text-gray-300">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <header className="text-center mb-16 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 text-9xl opacity-10">🦇</div>
          <h1 className="text-6xl font-serif mb-4 text-red-900 relative" style={{textShadow: '2px 2px 8px rgba(139, 0, 0, 0.8)'}}>
            Vivienne Darkmore
          </h1>
          <p className="text-xl text-gray-400 font-serif italic">Data Analyst • Researcher • Night Scholar</p>
          <div className="mt-6 flex justify-center gap-8 text-red-900">
            <Mail size={22} /> <Github size={22} /> <Linkedin size={22} />
          </div>
        </header>

        <section className="mb-12 bg-gradient-to-b from-gray-900 to-black border border-red-900/30 p-8 shadow-2xl">
          <h2 className="text-3xl font-serif mb-6 text-red-800 flex items-center gap-3">
            <span>⚰️</span> The Archives
          </h2>
          <p className="text-gray-400 leading-relaxed font-serif">
            In the shadowed halls of data, I uncover truths that others dare not seek. My work dwells in the space between numbers and narrative, where patterns emerge like whispers in the dark.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-serif mb-8 text-red-800 flex items-center gap-3">
            <span>📜</span> Dark Portfolio
          </h2>
          <div className="space-y-6">
            {[
              'Mortality Trends in Victorian Literature',
              'Cryptographic Analysis of Historical Texts',
              'Nocturnal Consumer Behavior Patterns'
            ].map((project, idx) => (
              <div key={idx} className="bg-gray-900 border-2 border-red-900/50 p-6 shadow-lg hover:shadow-red-900/20 transition">
                <h3 className="text-xl font-serif text-gray-200 mb-2">{project}</h3>
                <p className="text-sm text-gray-500 italic">Delving into the depths of data's darker truths</p>
                <div className="mt-3 text-red-800">⸎⸎⸎</div>
              </div>
            ))}
          </div>
        </section>

        <footer className="text-center text-gray-600 font-serif italic border-t border-red-900/30 pt-8">
          "In darkness, we find the clearest patterns" 🕯️
        </footer>
      </div>
    </div>
  );
}

// 7. Boho Portfolio
function BohoPortfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 via-amber-50 to-yellow-100">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <header className="text-center mb-16">
          <div className="text-6xl mb-4">🌙✨</div>
          <h1 className="text-5xl mb-4 text-amber-800" style={{fontFamily: 'Georgia, serif'}}>
            Luna Rivers
          </h1>
          <p className="text-xl text-amber-700 italic">Free-Spirit Data Analyst & Creative Thinker</p>
          <div className="flex justify-center gap-6 mt-6 text-amber-600">
            <Mail size={22} /> <Github size={22} /> <Linkedin size={22} />
          </div>
        </header>

        <section className="mb-12 bg-white/60 backdrop-blur rounded-2xl p-8 border-2 border-amber-300 shadow-lg">
          <h2 className="text-3xl mb-6 text-amber-800 flex items-center gap-3" style={{fontFamily: 'Georgia, serif'}}>
            🌻 My Journey
          </h2>
          <p className="text-amber-900 leading-relaxed">
            I believe data tells stories that connect us all. My approach blends creativity with analysis, finding beauty in patterns and meaning in numbers. I'm passionate about sustainable practices and human-centered insights.
          </p>
        </section>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <section className="bg-gradient-to-br from-orange-200/60 to-yellow-200/60 backdrop-blur rounded-2xl p-6 border-2 border-amber-400 shadow-lg">
            <h2 className="text-2xl mb-4 text-amber-800" style={{fontFamily: 'Georgia, serif'}}>
              ☀️ Skills & Tools
            </h2>
            <div className="space-y-2 text-amber-900">
              <div>• Python & R for storytelling</div>
              <div>• Tableau for visual narratives</div>
              <div>• Ethical data practices</div>
              <div>• Community-focused insights</div>
            </div>
          </section>

          <section className="bg-gradient-to-br from-amber-200/60 to-orange-200/60 backdrop-blur rounded-2xl p-6 border-2 border-orange-400 shadow-lg">
            <h2 className="text-2xl mb-4 text-amber-800" style={{fontFamily: 'Georgia, serif'}}>
              🌿 Values
            </h2>
            <div className="space-y-2 text-amber-900">
              <div>• Sustainability</div>
              <div>• Creativity</div>
              <div>• Authenticity</div>
              <div>• Connection</div>
            </div>
          </section>
        </div>

        <section className="mb-12">
          <h2 className="text-3xl mb-8 text-amber-800" style={{fontFamily: 'Georgia, serif'}}>
            🪶 Featured Projects
          </h2>
          <div className="space-y-6">
            {[
              'Sustainable Living Trends Analysis',
              'Community Wellness Metrics',
              'Artisan Market Insights'
            ].map((project, idx) => (
              <div key={idx} className="bg-white/70 backdrop-blur border-l-4 border-amber-500 p-6 rounded-r-2xl shadow">
                <h3 className="text-xl text-amber-800 mb-2">{project}</h3>
                <p className="text-sm text-amber-700 italic">Exploring data with heart and soul</p>
              </div>
            ))}
          </div>
        </section>

        <div className="text-center text-amber-700 italic" style={{fontFamily: 'Georgia, serif'}}>
          "Let the data flow where it may" 🌈
        </div>
      </div>
    </div>
  );
}

// 8. Grunge Portfolio
function GrungePortfolio() {
  return (
    <div className="min-h-screen bg-gray-800 text-gray-300">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <header className="mb-16 border-b-4 border-gray-700 pb-8">
          <h1 className="text-6xl font-bold mb-4 text-gray-100" style={{fontFamily: 'Impact, sans-serif', textTransform: 'uppercase', letterSpacing: '2px'}}>
            JAKE MORRISON
          </h1>
          <p className="text-2xl text-gray-400">DATA ANALYST // RAW & UNFILTERED</p>
          <div className="flex gap-6 mt-6 text-gray-400">
            <Mail size={24} /> <Github size={24} /> <Linkedin size={24} />
          </div>
        </header>

        <section className="mb-12 bg-gray-900 border-l-8 border-red-900 p-8">
          <h2 className="text-3xl font-bold mb-4 text-gray-200" style={{fontFamily: 'Impact, sans-serif'}}>
            // ABOUT
          </h2>
          <p className="text-gray-400 leading-relaxed">
            No corporate speak. No unnecessary fluff. Just straight data analysis that gets results. I cut through the noise to find what actually matters.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-gray-200" style={{fontFamily: 'Impact, sans-serif'}}>
            // PROJECTS
          </h2>
          <div className="space-y-6">
            {[
              { title: 'Underground Music Streaming Analytics', tag: 'AUTHENTIC' },
              { title: 'Anti-Corporate Brand Analysis', tag: 'RAW' },
              { title: 'DIY Market Research Platform', tag: 'INDEPENDENT' }
            ].map((project, idx) => (
              <div key={idx} className="bg-gray-900 border-2 border-gray-700 p-6 relative overflow-hidden">
                <div className="absolute top-2 right-2 bg-red-900 text-white px-3 py-1 text-xs font-bold rotate-3">
                  {project.tag}
                </div>
                <h3 className="text-xl font-bold text-gray-200 mb-2">{project.title}</h3>
                <p className="text-sm text-gray-500">Real work. Real impact.</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12 bg-gray-900 p-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-200" style={{fontFamily: 'Impact, sans-serif'}}>
            // SKILLS
          </h2>
          <div className="grid grid-cols-2 gap-4">
            {['Python', 'SQL', 'R', 'Machine Learning', 'Data Viz', 'Statistics'].map((skill, idx) => (
              <div key={idx} className="bg-gray-800 border-l-4 border-gray-600 p-3 text-gray-300 font-bold">
                {skill}
              </div>
            ))}
          </div>
        </section>

        <div className="text-center text-gray-500 font-bold border-t-4 border-gray-700 pt-8">
          NO COMPROMISES. JUST DATA.
        </div>
      </div>
    </div>
  );
}

// 9. Pastel Goth Portfolio
function PastelGothPortfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-200 via-pink-200 to-blue-200">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <header className="text-center mb-16 bg-white/70 backdrop-blur rounded-3xl p-8 border-4 border-purple-300 shadow-xl">
          <div className="text-6xl mb-4">💀✨</div>
          <h1 className="text-5xl font-bold mb-4 text-purple-900" style={{fontFamily: 'Comic Sans MS, cursive'}}>
            Violet Moonstone
          </h1>
          <p className="text-xl text-purple-700">Spooky Cute Data Analyst 👻💕</p>
          <div className="flex justify-center gap-6 mt-6 text-purple-600">
            <Mail size={22} /> <Github size={22} /> <Linkedin size={22} />
          </div>
        </header>

        <section className="mb-12 bg-gradient-to-br from-pink-300/60 to-purple-300/60 backdrop-blur rounded-3xl p-8 border-4 border-purple-400 shadow-lg">
          <h2 className="text-3xl font-bold mb-6 text-purple-900 flex items-center gap-3">
            <span>🌙</span> About Me
          </h2>
          <p className="text-purple-900 leading-relaxed">
            Where dark meets dreamy! I'm a data analyst who loves finding patterns in the shadows and bringing them to light with pastel-colored visualizations. My work is equal parts mysterious and magical! ✨
          </p>
        </section>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <section className="bg-gradient-to-br from-blue-200/60 to-purple-200/60 backdrop-blur rounded-3xl p-6 border-4 border-blue-300 shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-purple-900 flex items-center gap-2">
              <span>🦇</span> Mystical Skills
            </h2>
            <div className="space-y-3">
              {['Python Spells', 'SQL Sorcery', 'R Rituals', 'Tableau Enchantments'].map((skill, idx) => (
                <div key={idx} className="bg-white/80 rounded-full px-4 py-2 text-purple-800 font-semibold border-2 border-purple-300">
                  ☆ {skill}
                </div>
              ))}
            </div>
          </section>

          <section className="bg-gradient-to-br from-pink-200/60 to-purple-200/60 backdrop-blur rounded-3xl p-6 border-4 border-pink-300 shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-purple-900 flex items-center gap-2">
              <span>💜</span> Spooky Projects
            </h2>
            <div className="space-y-3">
              {['Gothic Fashion Trends', 'Nocturnal User Behavior', 'Dark Fantasy Analytics'].map((project, idx) => (
                <div key={idx} className="bg-white/80 rounded-2xl p-3 border-2 border-pink-300">
                  <div className="text-purple-800 font-semibold">🌟 {project}</div>
                </div>
              ))}
            </div>
          </section>
        </div>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-purple-900 text-center">
            ✨ Featured Work ✨
          </h2>
          <div className="space-y-6">
            {[
              { title: 'Halloween Consumer Insights', emoji: '🎃' },
              { title: 'Alternative Fashion E-Commerce', emoji: '👗' },
              { title: 'Spiritual Wellness App Analytics', emoji: '🔮' }
            ].map((project, idx) => (
              <div key={idx} className="bg-white/80 backdrop-blur border-4 border-purple-300 p-6 rounded-3xl shadow-lg">
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-4xl">{project.emoji}</span>
                  <h3 className="text-xl font-bold text-purple-900">{project.title}</h3>
                </div>
                <p className="text-sm text-purple-700 italic">Mixing darkness with sweetness in every insight</p>
              </div>
            ))}
          </div>
        </section>

        <div className="text-center text-2xl text-purple-900 font-bold">
          Stay Spooky, Stay Sweet! 💀💕✨
        </div>
      </div>
    </div>
  );
}

// 10. Cyberpunk Portfolio
function CyberpunkPortfolio() {
  return (
    <div className="min-h-screen bg-black text-cyan-400">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-8 gap-4 h-full">
            {[...Array(64)].map((_, i) => (
              <div key={i} className="border border-cyan-500"></div>
            ))}
          </div>
        </div>

        <header className="relative text-center mb-16 bg-gradient-to-r from-purple-900/50 to-cyan-900/50 backdrop-blur border border-cyan-500 p-8 shadow-[0_0_30px_rgba(0,255,255,0.3)]">
          <div className="text-6xl mb-4">⚡</div>
          <h1 className="text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400" style={{fontFamily: 'Courier New, monospace', textShadow: '0 0 20px rgba(0,255,255,0.5)'}}>
            NEO_MATRIX
          </h1>
          <p className="text-xl text-cyan-300 font-mono">DATA_ANALYST.EXE // SYSTEM ONLINE</p>
          <div className="flex justify-center gap-8 mt-6 text-cyan-400">
            <Mail size={24} /> <Github size={24} /> <Linkedin size={24} />
          </div>
        </header>

        <div className="relative grid md:grid-cols-2 gap-6 mb-12">
          <section className="bg-gradient-to-br from-purple-900/30 to-black border-2 border-cyan-500 p-6 shadow-[0_0_20px_rgba(0,255,255,0.2)]">
            <h2 className="text-2xl font-bold mb-4 text-cyan-400 font-mono flex items-center gap-2">
              <span className="text-pink-500">{'>'}</span> NEURAL_SKILLS.sys
            </h2>
            <div className="space-y-3 font-mono text-sm">
              {[
                { skill: 'Python', level: '████████░░ 85%' },
                { skill: 'Machine_Learning', level: '█████████░ 90%' },
                { skill: 'Big_Data', level: '███████░░░ 75%' },
                { skill: 'AI_Analytics', level: '████████░░ 82%' }
              ].map((item, idx) => (
                <div key={idx} className="border-l-2 border-pink-500 pl-3">
                  <div className="text-cyan-300">{item.skill}</div>
                  <div className="text-purple-400 text-xs">{item.level}</div>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-gradient-to-br from-cyan-900/30 to-black border-2 border-purple-500 p-6 shadow-[0_0_20px_rgba(138,43,226,0.2)]">
            <h2 className="text-2xl font-bold mb-4 text-purple-400 font-mono flex items-center gap-2">
              <span className="text-cyan-500">{'>'}</span> STATUS.log
            </h2>
            <div className="space-y-2 font-mono text-sm text-cyan-300">
              <div>[CONNECTED] Neural Network</div>
              <div>[ACTIVE] Predictive Models</div>
              <div>[SCANNING] Data Streams</div>
              <div>[ONLINE] Quantum Analytics</div>
            </div>
          </section>
        </div>

        <section className="relative mb-12">
          <h2 className="text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 font-mono">
            {'>'} PROJECTS_ARCHIVE //
          </h2>
          <div className="space-y-6">
            {[
              { id: 'PRJ_001', name: 'Cybersecurity Threat Analytics', status: 'CLASSIFIED' },
              { id: 'PRJ_002', name: 'Neural Network Consumer Prediction', status: 'ACTIVE' },
              { id: 'PRJ_003', name: 'Blockchain Data Mining System', status: 'DEPLOYED' }
            ].map((project, idx) => (
              <div key={idx} className="bg-gradient-to-r from-purple-900/20 to-cyan-900/20 border border-cyan-500 p-6 shadow-[0_0_15px_rgba(0,255,255,0.1)] hover:shadow-[0_0_30px_rgba(0,255,255,0.3)] transition">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <div className="text-pink-500 font-mono text-sm mb-1">[{project.id}]</div>
                    <h3 className="text-xl text-cyan-300 font-mono">{project.name}</h3>
                  </div>
                  <span className="bg-purple-900/50 border border-purple-500 px-3 py-1 text-xs font-mono text-purple-300">
                    {project.status}
                  </span>
                </div>
                <div className="text-xs text-cyan-600 font-mono">
                  {'>'} ACCESSING_DATA... NEURAL_LINK_ESTABLISHED
                </div>
              </div>
            ))}
          </div>
        </section>

        <footer className="relative text-center font-mono border-t-2 border-cyan-500 pt-8">
          <div className="text-cyan-400 mb-2">SYSTEM.status: OPERATIONAL</div>
          <div className="text-purple-400 text-sm">
            {'>'} JACK_IN // STAY_CONNECTED // DATA_IS_POWER {'<'}
          </div>
        </footer>
      </div>
    </div>
  );
}

export default PortfolioShowcase;