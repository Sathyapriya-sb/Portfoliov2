import React, { useState, useEffect } from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { Target, Zap, Award, TrendingUp, Database, Code2, Mail, Linkedin, Github, ExternalLink, Download, Moon, Sun, MapPin, Briefcase, Calendar, ChevronRight, Check } from 'lucide-react';

export default function DataPortfolio() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeMetric, setActiveMetric] = useState(0);

  const projectsData = [
    { name: 'ERP 2.0', completion: 100 },
    { name: 'HR Analytics', completion: 100 },
    { name: 'Nike Forecast', completion: 100 },
    { name: 'ML Clustering', completion: 100 },
    { name: 'YOLOv3 Research', completion: 100 },
  ];

  const skillGrowthData = [
    { skill: 'Python', proficiency: 90 },
    { skill: 'Tableau', proficiency: 88 },
    { skill: 'SQL', proficiency: 85 },
    { skill: 'ML', proficiency: 80 },
    { skill: 'Geospatial', proficiency: 85 },
  ];

  const keyMetrics = [
    { label: "Projects Completed", value: "12+", sublabel: "End-to-End Analytics", color: "#3b82f6" },
    { label: "Academic CGPA", value: "9.26", sublabel: "First Class Distinction", color: "#10b981" },
    { label: "Research Papers", value: "2", sublabel: "Conference Presented", color: "#8b5cf6" }
  ];

  const coreStrengths = [
    {
      icon: Target,
      title: "Business Impact Focus",
      desc: "Consistently deliver measurable results: 75% efficiency gains, 99.99% accuracy standards"
    },
    {
      icon: Database,
      title: "Technical Versatility",
      desc: "Full-stack analytics: SQL, Python, Tableau, Machine Learning, Geospatial Intelligence"
    },
    {
      icon: Zap,
      title: "End-to-End Execution",
      desc: "From data collection to dashboard delivery - proven ability to own complete analytics workflows"
    },
    {
      icon: Award,
      title: "Academic Excellence",
      desc: "9.26/10 CGPA, NTU Advanced Analytics certified, published researcher with strong fundamentals"
    }
  ];

  const experience = {
    company: "Mitsubishi Heavy Industries",
    role: "Data Analyst",
    period: "Sep 2024 - Sep 2025",
    project: "Singapore ERP 2.0 (S$556M Government Initiative)",
    achievements: [
      "Achieved 99.99% accuracy across 100+ test locations for public deployment",
      "Analyzed 36,000+ daily samples, identifying critical system failures",
      "Automated reporting workflows saving 15 hours/week (75% reduction)",
      "Developed KPI dashboards tracking project completion status",
      "Created SOPs ensuring seamless knowledge transfer"
    ]
  };

  const projects = [
    {
      title: "Employee Satisfaction Analytics",
      type: "Tableau Dashboard",
      impact: "Identified $X cost savings opportunity through attrition reduction",
      keyInsight: "Found optimal workload sweet spot: 8-20 projects/year maximizes satisfaction",
      metrics: ["5 Departments", "Multi-variate Analysis", "HR Strategy"],
      tools: ["Tableau", "Statistical Analysis", "Data Storytelling"]
    },
    {
      title: "Nike Revenue Forecasting (FY2025-2026)",
      type: "Financial Analysis",
      impact: "Forecasted revenue trends identifying post-FY2023 plateau",
      keyInsight: "3 scenario models (Optimistic/Expected/Pessimistic) using PEST analysis",
      metrics: ["8-Year Historical Data", "3 Scenarios", "Competitor Benchmarking"],
      tools: ["Excel", "Time Series", "CAGR Analysis"]
    },
    {
      title: "Customer Segmentation (K-Means)",
      type: "Machine Learning",
      impact: "Identified 5 distinct segments for targeted marketing strategies",
      keyInsight: "High-income, high-spending segment (32.7 avg age) prime for premium products",
      metrics: ["200 Customers", "5 Segments", "Behavioral Patterns"],
      tools: ["Python", "Scikit-learn", "K-Means Clustering"]
    },
    {
      title: "Intelligent Video Surveillance (YOLOv3)",
      type: "Deep Learning Research",
      impact: "Achieved 0.76 mAP with 30+ FPS for real-time banking security",
      keyInsight: "Solved attention fatigue problem (human accuracy drops to 45% after 20 min)",
      metrics: ["200K+ Images", "80+ Object Classes", "Real-time Detection"],
      tools: ["Python", "YOLOv3", "Computer Vision"]
    }
  ];

  const skills = [
    { name: "Python (Pandas, NumPy)", level: 90 },
    { name: "SQL & Database Design", level: 85 },
    { name: "Tableau & Data Viz", level: 88 },
    { name: "Excel Advanced Analytics", level: 92 },
    { name: "Machine Learning", level: 80 },
    { name: "Geospatial Analysis", level: 85 }
  ];

  const bgClass = darkMode ? 'bg-slate-900' : 'bg-white';
  const textClass = darkMode ? 'text-slate-100' : 'text-slate-900';
  const cardBg = darkMode ? 'bg-slate-800/80' : 'bg-white';
  const borderColor = darkMode ? 'border-slate-700' : 'border-slate-200';
  const secondaryText = darkMode ? 'text-slate-400' : 'text-slate-600';

  return (
    <div className={`min-h-screen ${bgClass} ${textClass} transition-colors duration-300`}>
      {/* Fixed Header */}
      <header className={`fixed top-0 w-full z-50 ${darkMode ? 'bg-slate-900/95' : 'bg-white/95'} backdrop-blur-md border-b ${borderColor} shadow-sm`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold">
              SP
            </div>
            <div>
              <div className="font-bold text-lg">Sathyapriya Subbiah</div>
              <div className="text-xs text-blue-600">Data Analyst</div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a href="mailto:sathyapriya.analyst@email.com" className="hidden md:flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all">
              <Mail size={16} />
              Contact Me
            </a>
            <button onClick={() => setDarkMode(!darkMode)} className={`p-2 rounded-lg ${darkMode ? 'bg-slate-800' : 'bg-slate-100'} hover:scale-110 transition-transform`}>
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>
      </header>

      <div className="pt-20">
        {/* Hero Section - Data-Driven Introduction */}
        <section className="px-6 py-16 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-900">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-full text-sm font-semibold mb-6">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  Available for Immediate Hire • Singapore PR
                </div>
                <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  Transforming Complex Data Into
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> Strategic Insights</span>
                </h1>
                <p className="text-xl mb-8 text-slate-600 dark:text-slate-400">
                  Data Analyst combining <strong>government infrastructure experience</strong>, <strong>machine learning expertise</strong>, and <strong>business intelligence</strong> to solve complex analytical challenges.
                </p>
                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 rounded-lg shadow-sm">
                    <MapPin size={18} className="text-blue-600" />
                    <span className="font-semibold">Singapore</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 rounded-lg shadow-sm">
                    <Briefcase size={18} className="text-green-600" />
                    <span className="font-semibold">1+ Year Experience</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 rounded-lg shadow-sm">
                    <Award size={18} className="text-purple-600" />
                    <span className="font-semibold">CGPA 9.26/10</span>
                  </div>
                </div>
                <div className="flex gap-4">
                  <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all flex items-center gap-2 shadow-lg hover:shadow-xl">
                    <Download size={18} />
                    Download Resume
                  </button>
                  <a href="https://linkedin.com" className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 dark:hover:bg-slate-800 transition-all flex items-center gap-2">
                    <Linkedin size={18} />
                    LinkedIn
                  </a>
                </div>
              </div>
              
              {/* Live Metrics Dashboard */}
              <div className="space-y-4">
                <div className={`${cardBg} p-6 rounded-2xl shadow-xl border ${borderColor}`}>
                  <h3 className="text-sm font-semibold text-slate-500 mb-4">KEY PERFORMANCE METRICS</h3>
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {keyMetrics.map((metric, idx) => (
                      <div
                        key={idx}
                        className={`text-center p-4 rounded-xl transition-all cursor-pointer ${activeMetric === idx ? 'bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 scale-105' : 'bg-slate-50 dark:bg-slate-700/50'}`}
                        onMouseEnter={() => setActiveMetric(idx)}
                      >
                        <div className="text-3xl font-bold mb-1" style={{ color: metric.color }}>{metric.value}</div>
                        <div className="text-xs font-semibold mb-1">{metric.label}</div>
                        <div className="text-xs text-slate-500">{metric.sublabel}</div>
                      </div>
                    ))}
                  </div>
                  
                  {activeMetric === 0 && (
                    <div>
                      <div className="text-sm font-semibold mb-2 text-blue-600">Portfolio Project Completion</div>
                      <ResponsiveContainer width="100%" height={180}>
                        <BarChart data={projectsData}>
                          <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
                          <XAxis dataKey="name" tick={{ fontSize: 11 }} angle={-15} textAnchor="end" height={60} />
                          <YAxis tick={{ fontSize: 12 }} domain={[0, 100]} />
                          <Tooltip contentStyle={{ backgroundColor: darkMode ? '#1e293b' : '#fff', border: 'none', borderRadius: '8px' }} />
                          <Bar dataKey="completion" fill="#3b82f6" radius={[8, 8, 0, 0]} />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  )}
                  
                  {activeMetric === 1 && (
                    <div>
                      <div className="text-sm font-semibold mb-2 text-green-600">Academic Excellence Journey</div>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span className="text-sm">Overall CGPA</span>
                          <span className="font-bold text-green-600">9.26/10</span>
                        </div>
                        <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3">
                          <div className="bg-gradient-to-r from-green-600 to-emerald-600 h-3 rounded-full" style={{ width: '92.6%' }}></div>
                        </div>
                        <div className="grid grid-cols-[3fr_2fr] gap-3 mt-4">
                          <div className="text-center p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                            <div className="text-xl font-bold text-green-600">NTU Certification</div>
                            <div className="text-xs text-slate-600 dark:text-slate-400">Advanced Professional Certificate in Data Analytics</div>
                          </div>
                          <div className="text-center p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                            <div className="text-xl font-bold text-green-600">First Class</div>
                            <div className="text-xs text-slate-600 dark:text-slate-400">With Distinction</div>
                          </div>
                        </div>
                        <div className="text-xs text-slate-500 mt-2">
                          Outstanding in: AI, DBMS, Compiler Design, Data Structures
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {activeMetric === 2 && (
                    <div>
                      <div className="text-sm font-semibold mb-4 text-purple-600">Research & Publications</div>
                      <div className="space-y-4">
                        <div className={`p-4 rounded-lg ${darkMode ? 'bg-purple-900/20' : 'bg-purple-50'} border-l-4 border-purple-600`}>
                          <div className="flex items-start gap-3 mb-2">
                            <Award size={18} className="text-purple-600 flex-shrink-0 mt-1" />
                            <div>
                              <div className="font-semibold text-sm">ICSIE 2024 Conference</div>
                              <div className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                                "Intelligent Video Surveillance System for Banking Security using YOLOv3 & Darknet"
                              </div>
                              <div className="flex gap-2 mt-2">
                                <span className="text-xs px-2 py-1 bg-purple-100 dark:bg-purple-900/40 rounded text-purple-700 dark:text-purple-400">Computer Vision</span>
                                <span className="text-xs px-2 py-1 bg-purple-100 dark:bg-purple-900/40 rounded text-purple-700 dark:text-purple-400">Deep Learning</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className={`p-4 rounded-lg ${darkMode ? 'bg-purple-900/20' : 'bg-purple-50'} border-l-4 border-purple-600`}>
                          <div className="flex items-start gap-3 mb-2">
                            <Award size={18} className="text-purple-600 flex-shrink-0 mt-1" />
                            <div>
                              <div className="font-semibold text-sm">ICCET 2024 Conference</div>
                              <div className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                                "Personalized Budget Optimization System using Machine Learning"
                              </div>
                              <div className="flex gap-2 mt-2">
                                <span className="text-xs px-2 py-1 bg-purple-100 dark:bg-purple-900/40 rounded text-purple-700 dark:text-purple-400">ML</span>
                                <span className="text-xs px-2 py-1 bg-purple-100 dark:bg-purple-900/40 rounded text-purple-700 dark:text-purple-400">FinTech</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="text-center pt-2">
                          <div className="text-xs text-slate-500">
                            Additional seminars: Blue Brain Project, Generative AI in Visual Arts
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Strengths - What Recruiters Care About */}
        <section className="px-6 py-16">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Why Hire Me?</h2>
              <p className={secondaryText}>Four reasons I deliver results from day one</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {coreStrengths.map((strength, idx) => {
                const Icon = strength.icon;
                return (
                  <div key={idx} className={`${cardBg} p-6 rounded-2xl border ${borderColor} hover:shadow-xl transition-all hover:scale-105`}>
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                      <Icon size={24} className="text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{strength.title}</h3>
                    <p className={`text-sm ${secondaryText}`}>{strength.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Professional Experience - Deep Dive */}
        <section className="px-6 py-16 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-800 dark:to-slate-900">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Recent Experience</h2>
              <p className={secondaryText}>Track record of delivering high-impact analytics solutions</p>
            </div>
            
            <div className={`${cardBg} rounded-2xl shadow-2xl border ${borderColor} overflow-hidden`}>
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-white">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <div className="text-sm font-semibold opacity-90 mb-2">MOST RECENT ROLE</div>
                    <h3 className="text-3xl font-bold mb-2">{experience.role}</h3>
                    <div className="text-xl mb-2">{experience.company}</div>
                    <div className="inline-block px-4 py-1 bg-white/20 rounded-full text-sm">
                      Singapore ERP 2.0 (S$556M Government Initiative)
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mt-4 md:mt-0 bg-white/20 px-4 py-2 rounded-lg">
                    <Calendar size={18} />
                    <span>{experience.period}</span>
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <Target size={20} className="text-blue-600" />
                  Key Achievements
                </h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    {experience.achievements.slice(0, 3).map((achievement, idx) => (
                      <div key={idx} className="flex gap-4 items-start group">
                        <div className="mt-1 w-6 h-6 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                          <Check size={16} className="text-green-600" />
                        </div>
                        <p>{achievement}</p>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-4">
                    {experience.achievements.slice(3).map((achievement, idx) => (
                      <div key={idx} className="flex gap-4 items-start group">
                        <div className="mt-1 w-6 h-6 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                          <Check size={16} className="text-green-600" />
                        </div>
                        <p>{achievement}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl border-l-4 border-blue-600">
                  <div className="flex items-start gap-3">
                    <Award size={24} className="text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold mb-2">Manager's Commendation</div>
                      <p className="italic text-slate-700 dark:text-slate-300 mb-2">
                        "Your analyses always met or even exceeded our expectations on many occasions."
                      </p>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        — Tatsuya Higuchi, Project Manager
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education & Certifications */}
        <section className="px-6 py-16">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Education & Certifications</h2>
              <p className={secondaryText}>Academic foundation built on excellence and continuous learning</p>
            </div>
            
            <div className="space-y-6">
              {/* B.Tech Degree */}
              <div className={`${cardBg} rounded-xl border ${borderColor} shadow-md hover:shadow-lg transition-all`}>
                <div className="p-6">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Award size={24} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="text-xs font-semibold text-blue-600 mb-1">UNDERGRADUATE DEGREE</div>
                      <h4 className="text-xl font-bold mb-1">Bachelor of Technology in Information Technology</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">SRM Institute of Science and Technology (SRMIST)</p>
                      <p className="text-sm text-slate-500 dark:text-slate-500">Kattankulathur, Chennai, Tamil Nadu, India</p>
                    </div>
                    <div className="bg-slate-100 dark:bg-slate-700 px-4 py-2 rounded-lg text-center">
                      <div className="text-sm font-semibold">2020 - 2024</div>
                      <div className="text-xs text-slate-500">4 Years</div>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <div className="text-sm font-semibold text-slate-500 mb-3">KEY SUBJECTS (Outstanding Grades)</div>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1.5 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-lg text-sm font-semibold">Artificial Intelligence</span>
                      <span className="px-3 py-1.5 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-lg text-sm font-semibold">Database Management Systems</span>
                      <span className="px-3 py-1.5 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-lg text-sm font-semibold">Compiler Design</span>
                      <span className="px-3 py-1.5 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-lg text-sm font-semibold">Data Structures & Algorithms</span>
                    </div>
                  </div>
                  
                  <div className={`p-4 bg-gradient-to-r from-slate-50 to-blue-50 dark:from-slate-800 dark:to-blue-900/20 rounded-xl border-l-4 border-blue-600`}>
                    <div className="flex items-start gap-3">
                      <Award size={20} className="text-blue-600 flex-shrink-0 mt-1" />
                      <div>
                        <div className="font-semibold text-sm mb-1">Academic Highlights</div>
                        <p className={`text-sm ${secondaryText}`}>
                          Graduated with First Class Distinction, maintaining consistent excellence throughout the program with Outstanding grades in core IT subjects including AI, DBMS, and Data Structures.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Certifications */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* NTU Certificate */}
                <div className={`${cardBg} rounded-xl border ${borderColor} shadow-md hover:shadow-lg transition-all`}>
                  <div className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Award size={24} className="text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="text-xs font-semibold text-green-600 mb-1">PROFESSIONAL CERTIFICATION</div>
                        <h4 className="text-lg font-bold mb-1">Advanced Analytics Certificate</h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400">Nanyang Technological University (NTU)</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 mb-4 text-sm">
                      <Calendar size={16} className="text-slate-500" />
                      <span className={secondaryText}>April 2024 - August 2024</span>
                    </div>
                    
                    <div className={`p-3 bg-green-50 dark:bg-green-900/20 rounded-lg`}>
                      <p className={`text-sm ${secondaryText}`}>
                        Completed advanced training in analytics methodologies, statistical modeling, and data-driven decision making from Singapore's premier research university.
                      </p>
                    </div>
                    
                    <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700">
                      <div className="flex items-center gap-2 text-xs text-green-600 dark:text-green-400 font-semibold">
                        <Check size={14} />
                        <span>Completed in Singapore</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* NPTEL Certificate */}
                <div className={`${cardBg} rounded-xl border ${borderColor} shadow-md hover:shadow-lg transition-all`}>
                  <div className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-yellow-600 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Award size={24} className="text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="text-xs font-semibold text-yellow-600 mb-1">NATIONAL CERTIFICATION</div>
                        <h4 className="text-lg font-bold mb-1">Python Programming</h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400">NPTEL (IIT/IISc Initiative)</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 mb-4 text-sm">
                      <Calendar size={16} className="text-slate-500" />
                      <span className={secondaryText}>January 2023 - April 2023</span>
                    </div>
                    
                    <div className={`p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg mb-3`}>
                      <p className={`text-sm ${secondaryText}`}>
                        Earned Silver Medal certification in Python programming, demonstrating proficiency in core programming concepts and practical application.
                      </p>
                    </div>
                    
                    <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700">
                      <div className="flex items-center gap-2">
                        <div className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 rounded-full text-xs font-semibold flex items-center gap-1">
                          <Award size={12} />
                          Silver Medal
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Projects - Portfolio Highlights */}
        <section className="px-6 py-16">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
              <p className={secondaryText}>Real-world applications across analytics, ML, and deep learning</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, idx) => (
                <div key={idx} className={`${cardBg} rounded-2xl border ${borderColor} overflow-hidden hover:shadow-2xl transition-all group`}>
                  <div className="p-6 border-b border-slate-200 dark:border-slate-700 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-2xl font-bold group-hover:text-blue-600 transition-colors">{project.title}</h3>
                      <ExternalLink size={20} className="text-slate-400 group-hover:text-blue-600 transition-colors" />
                    </div>
                    <div className="text-sm text-blue-600 font-semibold">{project.type}</div>
                  </div>
                  
                  <div className="p-6">
                    <div className="mb-4">
                      <div className="text-xs font-semibold text-slate-500 mb-2">BUSINESS IMPACT</div>
                      <p className="text-sm font-semibold text-green-600">{project.impact}</p>
                    </div>
                    
                    <div className="mb-4">
                      <div className="text-xs font-semibold text-slate-500 mb-2">KEY INSIGHT</div>
                      <p className={`text-sm ${secondaryText}`}>{project.keyInsight}</p>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.metrics.map((metric, i) => (
                        <span key={i} className="px-3 py-1 text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-full font-semibold">
                          {metric}
                        </span>
                      ))}
                    </div>
                    
                    <div className="pt-4 border-t border-slate-200 dark:border-slate-700">
                      <div className="text-xs font-semibold text-slate-500 mb-2">TECH STACK</div>
                      <div className="flex flex-wrap gap-2">
                        {project.tools.map((tool, i) => (
                          <span key={i} className="text-xs text-slate-600 dark:text-slate-400">
                            {tool}{i < project.tools.length - 1 ? ' •' : ''}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Research & Publications Section - Timeline Style */}
        <section className="px-6 py-16 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-800 dark:to-slate-900">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Research & Publications</h2>
              <p className={secondaryText}>Contributing to academic discourse in AI and machine learning</p>
            </div>
            
            {/* Conference Papers */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <Award size={24} className="text-purple-600" />
                <h3 className="text-2xl font-bold">Conference Publications</h3>
              </div>
              
              <div className="space-y-6">
                {/* Conference Paper 1 */}
                <div className={`${cardBg} rounded-xl border-l-4 border-purple-600 shadow-lg hover:shadow-xl transition-all`}>
                  <div className="p-6">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                      <div className="flex-1">
                        <h4 className="text-xl font-bold mb-2">Intelligent Video Surveillance System for Banking Security using YOLOv3 & Darknet</h4>
                        <div className="flex flex-wrap items-center gap-3 text-sm mb-3">
                          <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 rounded-full font-semibold">ICSIE 2024 Conference</span>
                          <span className={secondaryText}>April 2024</span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <span className="px-3 py-1 text-xs bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full font-semibold">✓ Presented</span>
                        <span className="px-3 py-1 text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-full font-semibold">Journal Submitted</span>
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <div className="text-xs font-semibold text-purple-600 mb-2">RESEARCH FOCUS</div>
                        <p className={`text-sm ${secondaryText} mb-3`}>
                          Developed intelligent surveillance system addressing attention fatigue in banking security. Achieved 0.76 mAP with 30+ FPS real-time processing.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <span className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-700 rounded">Computer Vision</span>
                          <span className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-700 rounded">Deep Learning</span>
                          <span className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-700 rounded">YOLOv3</span>
                        </div>
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-purple-600 mb-2">KEY FINDINGS</div>
                        <ul className={`text-sm ${secondaryText} space-y-1.5`}>
                          <li className="flex items-start gap-2">
                            <span className="text-purple-600 mt-0.5">▸</span>
                            <span>Human detection accuracy drops to 45% after 20 minutes</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-purple-600 mt-0.5">▸</span>
                            <span>YOLOv3 outperformed two-stage detectors in speed</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-purple-600 mt-0.5">▸</span>
                            <span>System enables 24/7 consistent monitoring</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Conference Paper 2 */}
                <div className={`${cardBg} rounded-xl border-l-4 border-purple-600 shadow-lg hover:shadow-xl transition-all`}>
                  <div className="p-6">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                      <div className="flex-1">
                        <h4 className="text-xl font-bold mb-2">Personalized Budget Optimization System using Machine Learning</h4>
                        <div className="flex flex-wrap items-center gap-3 text-sm mb-3">
                          <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 rounded-full font-semibold">ICCET 2024 Conference</span>
                          <span className={secondaryText}>March 2024</span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <span className="px-3 py-1 text-xs bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full font-semibold">✓ Presented</span>
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <div className="text-xs font-semibold text-purple-600 mb-2">RESEARCH FOCUS</div>
                        <p className={`text-sm ${secondaryText} mb-3`}>
                          ML-based financial management system using Decision Trees to provide personalized budget recommendations across 8 expense categories.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <span className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-700 rounded">Machine Learning</span>
                          <span className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-700 rounded">Decision Trees</span>
                          <span className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-700 rounded">FinTech</span>
                        </div>
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-purple-600 mb-2">KEY CONTRIBUTIONS</div>
                        <ul className={`text-sm ${secondaryText} space-y-1.5`}>
                          <li className="flex items-start gap-2">
                            <span className="text-purple-600 mt-0.5">▸</span>
                            <span>Trained on 202 real users' expenditure data</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-purple-600 mt-0.5">▸</span>
                            <span>Decision Tree Regressor with R² evaluation</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-purple-600 mt-0.5">▸</span>
                            <span>Streamlit interface for real-time predictions</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Academic Seminars */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Code2 size={24} className="text-blue-600" />
                <h3 className="text-2xl font-bold">Academic Seminars</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {/* Seminar 1 */}
                <div className={`${cardBg} rounded-xl border ${borderColor} shadow-md hover:shadow-lg transition-all p-6`}>
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                      <TrendingUp size={20} className="text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold mb-1">Blue Brain Project</h4>
                      <p className="text-sm text-blue-600">Computational Neuroscience & Brain Simulation</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mb-3 text-xs">
                    <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded">Academic Seminar II</span>
                    <span className={secondaryText}>Semester 6</span>
                  </div>
                  <p className={`text-sm ${secondaryText} mb-3`}>
                    Explored brain simulation technologies, neural networks, and nanobots for data acquisition in creating biologically detailed digital reconstructions.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-700 rounded">Neuroscience</span>
                    <span className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-700 rounded">Neural Networks</span>
                    <span className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-700 rounded">Brain Simulation</span>
                  </div>
                </div>

                {/* Seminar 2 */}
                <div className={`${cardBg} rounded-xl border ${borderColor} shadow-md hover:shadow-lg transition-all p-6`}>
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Zap size={20} className="text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold mb-1">Generative AI in Visual Arts</h4>
                      <p className="text-sm text-blue-600">GANs, Neural Style Transfer & Creative AI</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mb-3 text-xs">
                    <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded">Academic Seminar I</span>
                    <span className={secondaryText}>Semester 5</span>
                  </div>
                  <p className={`text-sm ${secondaryText} mb-3`}>
                    Investigated Generative Adversarial Networks (GANs), neural style transfer, DALL-E 2, and AI's transformative role in art creation and analysis.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-700 rounded">GANs</span>
                    <span className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-700 rounded">Generative AI</span>
                    <span className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-700 rounded">DALL-E</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Visualization */}
        <section className="px-6 py-16">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Technical Proficiency</h2>
              <p className={secondaryText}>Core competencies with real-world application</p>
            </div>
            
            <div className={`${cardBg} p-8 rounded-2xl shadow-xl border ${borderColor}`}>
              <div className="space-y-6">
                {skills.map((skill, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold">{skill.name}</span>
                      <span className="text-blue-600 font-bold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-blue-600 to-purple-600 h-3 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-700">
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <div className="text-sm font-semibold text-slate-500 mb-2">SPECIALIZATIONS</div>
                    <div className="text-sm space-y-1">
                      <div>• Geospatial Intelligence</div>
                      <div>• Predictive Analytics</div>
                      <div>• Process Automation</div>
                    </div>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-500 mb-2">CERTIFICATIONS</div>
                    <div className="text-sm space-y-1">
                      <div>• NTU Advanced Analytics</div>
                      <div>• NPTEL Python (Silver)</div>
                      <div>• B.Tech IT (9.26 CGPA)</div>
                    </div>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-500 mb-2">TOOLS & PLATFORMS</div>
                    <div className="text-sm space-y-1">
                      <div>• Tableau Public</div>
                      <div>• Git/GitHub</div>
                      <div>• Google Earth/GNSS</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="px-6 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-12 text-white shadow-2xl">
              <h2 className="text-4xl font-bold mb-4">Let's Work Together</h2>
              <p className="text-xl mb-8 opacity-90">
                Ready to bring data-driven insights to your organization. Available for immediate start in Singapore.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <a href="mailto:sathyapriya.analyst@email.com" className="px-8 py-4 bg-white text-blue-600 rounded-xl hover:bg-blue-50 transition-all font-semibold flex items-center gap-2 shadow-lg hover:shadow-xl">
                  <Mail size={20} />
                  Email Me
                </a>
                <a href="#" className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white rounded-xl hover:bg-white/30 transition-all font-semibold flex items-center gap-2">
                  <Linkedin size={20} />
                  LinkedIn
                </a>
                <a href="#" className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white rounded-xl hover:bg-white/30 transition-all font-semibold flex items-center gap-2">
                  <Github size={20} />
                  GitHub
                </a>
              </div>
              
              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <Check size={16} />
                  <span>Singapore PR</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check size={16} />
                  <span>Immediate Availability</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check size={16} />
                  <span>Full-time Ready</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className={`px-6 py-8 border-t ${borderColor}`}>
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
            <div>© 2025 Sathyapriya Subbiah • Last Updated: November 2025</div>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-blue-600 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-blue-600 transition-colors">Terms</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}