import React, { useState } from 'react';
import { Menu, X, Github, Linkedin, Mail, ExternalLink, Code, Briefcase, GraduationCap, FileText, ChevronDown, MapPin, Calendar } from 'lucide-react';

export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const projects = [
    {
      id: 1,
      title: "Personal Finance Management Tool",
      category: "Web Application",
      description: "Built a comprehensive credit card tracker managing 11 personal cards across 7 banks. Features automated payment tracking, CSV/Excel import, and spending categorization.",
      tech: ["JavaScript", "HTML/CSS", "PapaParse", "SheetJS"],
      highlights: ["Prevents late payment fees", "Processes bank statements", "Real-time calculations"],
      impact: "Successfully tracking $X in monthly transactions",
      github: "#",
      demo: "#",
      featured: true
    },
    {
      id: 2,
      title: "Fashion Trends Analysis",
      category: "Data Analysis",
      description: "Analyzed 11,597+ Myntra products to identify gender-specific preferences, pricing strategies, and brand positioning insights.",
      tech: ["Python", "Pandas", "Matplotlib", "Seaborn"],
      highlights: ["28+ color categories analyzed", "30+ brands compared", "Business recommendations"],
      kaggle: "https://www.kaggle.com/code/sathyapriyasubbiah/comprehensive-analysis-on-fashion-trends",
      featured: true
    },
    {
      id: 3,
      title: "Nike Financial Forecasting",
      category: "Business Analytics",
      description: "Led forecasting analysis for Nike's FY2025-2026 revenue. Developed 3 scenario models considering geopolitical factors and market trends.",
      tech: ["Excel", "Time Series", "PEST Analysis", "Scenario Modeling"],
      highlights: ["Analyzed 6+ years of data", "3 scenario models", "Competitor benchmarking"],
      presentation: true,
      featured: true
    },
    {
      id: 4,
      title: "HR Analytics Dashboard",
      category: "Data Visualization",
      description: "Interactive Tableau dashboard analyzing employee satisfaction and attrition patterns across departments.",
      tech: ["Tableau", "Data Storytelling"],
      highlights: ["50% workforce insights", "Workload optimization", "Salary analysis"],
      tableau: "https://public.tableau.com/app/profile/sathyapriya.subbiah",
      featured: true
    },
    {
      id: 5,
      title: "Customer Segmentation Analysis",
      category: "Machine Learning",
      description: "Applied K-Means clustering to segment 200 mall customers into 5 distinct groups with tailored marketing recommendations.",
      tech: ["Python", "Scikit-learn", "K-Means", "EDA"],
      highlights: ["5 customer segments", "Marketing strategies", "Business insights"],
      kaggle: "#",
      featured: false
    },
    {
      id: 6,
      title: "Smart Budget Assistant",
      category: "Machine Learning",
      description: "ML-based budget recommendation system using income data. Built with Python and Streamlit, testing multiple regression algorithms.",
      tech: ["Python", "Streamlit", "Linear Regression", "Decision Trees"],
      highlights: ["100+ data samples", "Real-time predictions", "User-friendly interface"],
      featured: false
    }
  ];

  const education = [
    {
      degree: "Advanced Professional Certificate in Data Analytics",
      institution: "Nanyang Technological University (NTU)",
      duration: "3 months",
      period: "May-Aug 2025",
      highlights: [
        "SQL, Python, Tableau, Advanced Excel",
        "Time Series Forecasting & Scenario Analysis",
        "Data Visualization & Storytelling",
        "Nike Financial Analysis Project (Forecasting Lead)"
      ]
    },
    {
      degree: "B.Tech in Information Technology",
      institution: "SRM Institute of Science and Technology",
      duration: "4 years",
      period: "2021-2024",
      gpa: "9.26/10",
      highlights: [
        "Published paper at ICSIE 2024 conference",
        "Final Year Project: YOLO-based Weapon Detection System",
        "Minor Project: Smart Budget Assistant with ML"
      ]
    }
  ];

  const skills = {
    "Programming": ["Python", "SQL", "JavaScript", "HTML/CSS"],
    "Data Analysis": ["Pandas", "NumPy", "Excel", "Statistical Analysis"],
    "Visualization": ["Tableau", "Matplotlib", "Seaborn", "Dashboard Design"],
    "Machine Learning": ["Scikit-learn", "K-Means", "Regression", "Time Series"],
    "Tools": ["Git", "Jupyter", "Google Earth", "DB Browser"]
  };

  const ScrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Sathyapriya
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => ScrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors ${
                    activeSection === item.toLowerCase()
                      ? 'text-blue-600'
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['Home', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => ScrollToSection(item.toLowerCase())}
                  className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Data Analyst &
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Problem Solver
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Transforming data into actionable insights. Experienced in geospatial analysis, financial forecasting, and building data-driven solutions.
            </p>
            <div className="flex justify-center gap-4 mb-12">
              <a href="#" className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                <FileText size={20} />
                View Resume
              </a>
              <a href="#projects" className="flex items-center gap-2 px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition">
                View Projects
                <ChevronDown size={20} />
              </a>
            </div>
            <div className="flex justify-center gap-6">
              <a href="#" className="text-gray-600 hover:text-blue-600 transition">
                <Github size={24} />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition">
                <Linkedin size={24} />
              </a>
              <a href="mailto:your.email@example.com" className="text-gray-600 hover:text-blue-600 transition">
                <Mail size={24} />
              </a>
              <a href="https://www.kaggle.com/sathyapriyasubbiah" className="text-gray-600 hover:text-blue-600 transition">
                <Code size={24} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Highlight Card */}
      <section id="experience" className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl shadow-2xl p-8 text-white">
            <div className="flex items-start justify-between mb-6">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <Briefcase size={24} />
                  <span className="text-sm font-semibold bg-white/20 px-3 py-1 rounded-full">
                    RECENT EXPERIENCE
                  </span>
                </div>
                <h2 className="text-3xl font-bold mb-2">Data Analyst</h2>
                <p className="text-xl text-blue-100 font-semibold mb-3">Mitsubishi Heavy Industries (MHI)</p>
                <div className="flex items-center gap-4 text-blue-100 text-sm">
                  <div className="flex items-center gap-1">
                    <Calendar size={16} />
                    <span>Sep 2024 - Sep 2025</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin size={16} />
                    <span>Singapore</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 rounded-lg p-5 mb-4 backdrop-blur-sm">
              <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                <span className="text-yellow-300">🎯</span>
                ERP 2.0: Validating Singapore's Next-Generation Road Pricing System
              </h3>
              <p className="text-blue-50 leading-relaxed mb-3">
                Performed quality assurance testing for Singapore's S$556 million satellite-based Electronic Road Pricing system (LTA project). Validated charging and alert zone accuracy across 100+ test locations using GNSS data from On-Board Units installed since November 2023.
              </p>
              <ul className="space-y-2 text-blue-50 text-sm">
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Analyzed 20-50 daily test cases validating 36,000 samples per charging zone location to meet 99.99% accuracy threshold for public deployment</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Conducted geospatial validation using Google Earth and multiple data sources (KML, GUI logs, WWAN, DSRC) to diagnose charging and alert zone errors</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Automated Python reporting workflows, saving 15 hours weekly while improving data accuracy for quality assurance tracking</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Developed dashboards to track Pass/Fail/NG status across test locations, monitoring progress toward location qualification</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Created Standard Operating Procedures (SOPs) for data validation processes to ensure consistency before project handover</span>
                </li>
              </ul>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                <div className="text-2xl font-bold mb-1">15 hrs</div>
                <div className="text-blue-100 text-sm">Saved weekly via Python automation</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                <div className="text-2xl font-bold mb-1">20-50</div>
                <div className="text-blue-100 text-sm">Test cases analyzed daily</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                <div className="text-2xl font-bold mb-1">99.99%</div>
                <div className="text-blue-100 text-sm">KPI performance threshold</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                <div className="text-2xl font-bold mb-1">SOP Docs</div>
                <div className="text-blue-100 text-sm">Created for QA processes</div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-white/20">
              <p className="text-sm text-blue-100 mb-3 font-semibold">Key Technologies & Skills:</p>
              <div className="flex flex-wrap gap-2">
                {["Python Automation", "Geospatial Analysis", "Google Earth", "Report Development", "Dashboard Creation", "SOP Documentation"].map(skill => (
                  <span key={skill} className="px-3 py-1 bg-white/20 rounded-full text-sm backdrop-blur-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Building solutions that solve real problems. From personal tools to business analytics.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {projects.filter(p => p.featured).map((project) => (
              <div key={project.id} className="bg-gradient-to-br from-white to-blue-50 rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 border border-blue-100">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full mb-2">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mb-4">
                  <ul className="text-sm text-gray-600 space-y-1">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-blue-600 mr-2">✓</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex gap-3 pt-4 border-t border-gray-200">
                  {project.github && (
                    <a href={project.github} className="flex items-center gap-1 text-sm text-blue-600 hover:text-blue-700">
                      <Github size={16} />
                      Code
                    </a>
                  )}
                  {project.demo && (
                    <a href={project.demo} className="flex items-center gap-1 text-sm text-blue-600 hover:text-blue-700">
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  )}
                  {project.kaggle && (
                    <a href={project.kaggle} className="flex items-center gap-1 text-sm text-blue-600 hover:text-blue-700">
                      <Code size={16} />
                      Kaggle
                    </a>
                  )}
                  {project.tableau && (
                    <a href={project.tableau} className="flex items-center gap-1 text-sm text-blue-600 hover:text-blue-700">
                      <ExternalLink size={16} />
                      Tableau
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Other Projects */}
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Other Projects</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {projects.filter(p => !p.featured).map((project) => (
              <div key={project.id} className="bg-white rounded-lg shadow hover:shadow-md transition-shadow p-5 border border-gray-200">
                <span className="inline-block px-2 py-1 bg-gray-100 text-gray-600 text-xs font-semibold rounded mb-2">
                  {project.category}
                </span>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{project.title}</h4>
                <p className="text-sm text-gray-600 mb-3">{project.description}</p>
                <div className="flex flex-wrap gap-1 mb-3">
                  {project.tech.slice(0, 3).map((tech) => (
                    <span key={tech} className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Education & Certifications</h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 border border-gray-200 hover:shadow-xl transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-purple-100 p-3 rounded-lg">
                      <GraduationCap size={24} className="text-purple-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{edu.degree}</h3>
                      <p className="text-lg text-purple-600 font-semibold">{edu.institution}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-600 font-medium">{edu.duration}</p>
                    <p className="text-gray-500 text-sm">{edu.period}</p>
                    {edu.gpa && <p className="text-gray-700 font-semibold mt-1">CGPA: {edu.gpa}</p>}
                  </div>
                </div>
                <ul className="space-y-2">
                  {edu.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start text-gray-700">
                      <span className="text-purple-600 mr-2">✓</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Technical Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg p-6 border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="text-blue-600">●</span>
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-purple-600">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Let's Connect</h2>
          <p className="text-xl text-blue-100 mb-8">
            Interested in working together or have a question? Feel free to reach out!
          </p>
          <div className="flex justify-center gap-6 mb-8">
            <a href="mailto:your.email@example.com" className="flex items-center gap-2 px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition font-semibold">
              <Mail size={20} />
              Email Me
            </a>
            <a href="#" className="flex items-center gap-2 px-6 py-3 border-2 border-white text-white rounded-lg hover:bg-white/10 transition font-semibold">
              <Linkedin size={20} />
              LinkedIn
            </a>
          </div>
          <div className="flex justify-center gap-6">
            <a href="#" className="text-white hover:text-blue-200 transition">
              <Github size={28} />
            </a>
            <a href="https://www.kaggle.com/sathyapriyasubbiah" className="text-white hover:text-blue-200 transition">
              <Code size={28} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="mb-2">© 2025 Sathyapriya Subbiah. All rights reserved.</p>
          <p className="text-sm">Built with React • Designed with passion for data</p>
        </div>
      </footer>
    </div>
  );
}