import React, { useState } from 'react';
import { Download, Mail, Linkedin, Github, ExternalLink, ChevronDown, Menu, X } from 'lucide-react';

export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(id);
    setMobileMenuOpen(false);
  };

  const skills = [
    { category: 'Analytics & BI', items: ['Python', 'R', 'SQL', 'Power BI', 'Tableau', 'Excel'] },
    { category: 'Data Engineering', items: ['ETL Pipelines', 'Data Warehousing', 'Apache Spark', 'PostgreSQL'] },
    { category: 'Machine Learning', items: ['Scikit-learn', 'TensorFlow', 'Statistical Modeling', 'Predictive Analytics'] },
    { category: 'Tools & Technologies', items: ['Git', 'Jupyter', 'VS Code', 'Azure', 'Google Analytics'] }
  ];

  const projects = [
    {
      title: 'Customer Churn Prediction Model',
      description: 'Developed a machine learning model to predict customer churn using classification algorithms and historical customer data.',
      impact: 'Achieved 89% model accuracy with comprehensive feature engineering',
      tech: ['Python', 'Random Forest', 'XGBoost', 'Pandas'],
      link: '#'
    },
    {
      title: 'Sales Dashboard & Analytics Platform',
      description: 'Designed and implemented an interactive Power BI dashboard tracking KPIs across multiple business units with real-time data integration.',
      impact: 'Enabled data-driven insights for stakeholder decision-making',
      tech: ['Power BI', 'SQL Server', 'DAX', 'Python'],
      link: '#'
    },
    {
      title: 'E-commerce Recommendation Engine',
      description: 'Built a collaborative filtering recommendation system to analyze customer behavior patterns and personalize product suggestions.',
      impact: 'Successfully implemented recommendation algorithm with extensive testing',
      tech: ['Python', 'TensorFlow', 'PostgreSQL', 'NumPy'],
      link: '#'
    }
  ];

  const certifications = [
    { name: 'NTU PACE Professional Certificate in Data Analytics', issuer: 'Nanyang Technological University', year: '2024' },
    { name: 'NPTEL Online Certification - Data Science', issuer: 'IIT Madras', year: '2024', score: '85%' },
    { name: 'Microsoft Certified: Power BI Data Analyst Associate', issuer: 'Microsoft', year: '2024' },
    { name: 'Google Data Analytics Professional Certificate', issuer: 'Google', year: '2023' }
  ];

  const testimonials = [
    {
      text: 'Sathya consistently delivered actionable insights that drove strategic decisions. Her ability to translate complex data into clear business recommendations is exceptional.',
      author: 'Michael Chen',
      role: 'Head of Analytics, TechCorp Solutions'
    },
    {
      text: 'Working with Sathya was a pleasure. She brought fresh perspectives to our data challenges and exceeded expectations on every project.',
      author: 'Sarah Williams',
      role: 'Product Manager, DataFlow Inc'
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className="fixed w-full bg-white border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-light tracking-tight">SATHYAPRIYA SUBBIAH</div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 text-sm">
              {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="hover:text-gray-600 transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-3">
              {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left py-2 hover:text-gray-600"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center pt-20 px-6">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-sm tracking-widest text-gray-500 mb-4">DATA ANALYST</div>
              <h1 className="text-6xl md:text-7xl font-light mb-6 leading-tight">
                Sathyapriya Subbiah
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Transforming complex data into strategic insights. Specialized in predictive analytics, 
                business intelligence, and data-driven decision making.
              </p>
              <div className="flex gap-4">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="bg-black text-white px-8 py-3 hover:bg-gray-800 transition-colors"
                >
                  Get In Touch
                </button>
                <button className="border border-black px-8 py-3 hover:bg-gray-50 transition-colors flex items-center gap-2">
                  <Download size={18} />
                  Resume
                </button>
              </div>
              <div className="flex gap-6 mt-8">
                <a href="#" className="text-gray-600 hover:text-black transition-colors">
                  <Linkedin size={24} />
                </a>
                <a href="#" className="text-gray-600 hover:text-black transition-colors">
                  <Github size={24} />
                </a>
                <a href="#" className="text-gray-600 hover:text-black transition-colors">
                  <Mail size={24} />
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gray-100 relative">
                <div className="absolute inset-0 flex items-center justify-center text-9xl font-light text-gray-300">
                  SS
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown size={32} className="text-gray-400" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <div className="text-sm tracking-widest text-gray-500 mb-4">ABOUT ME</div>
              <h2 className="text-4xl font-light mb-6">Bridging Data & Strategy</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                With a Bachelor's degree in Information Technology and specialized training in data analytics, 
                I combine technical expertise with business acumen to deliver impactful data solutions.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                My journey in data analytics began during my internship where I automated reporting processes, 
                followed by a year of professional experience developing predictive models and interactive 
                dashboards that drove strategic decisions for stakeholders.
              </p>
              <p className="text-gray-600 leading-relaxed">
                I'm passionate about uncovering patterns in data that tell compelling stories and drive 
                measurable business outcomes.
              </p>
            </div>
            <div>
              <div className="space-y-6">
                <div className="border-l-2 border-black pl-6">
                  <div className="text-3xl font-light mb-2">1+ Year</div>
                  <div className="text-gray-600">Professional Experience in Analytics</div>
                </div>
                <div className="border-l-2 border-black pl-6">
                  <div className="text-3xl font-light mb-2">2</div>
                  <div className="text-gray-600">Conference Papers Presented</div>
                </div>
                <div className="border-l-2 border-black pl-6">
                  <div className="text-3xl font-light mb-2">15+</div>
                  <div className="text-gray-600">Data Projects Delivered</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-sm tracking-widest text-gray-500 mb-8">EXPERIENCE</div>
          <div className="space-y-12">
            <div className="border-l-2 border-gray-200 pl-8 relative">
              <div className="absolute w-4 h-4 bg-black rounded-full -left-[9px] top-0"></div>
              <div className="text-sm text-gray-500 mb-2">2023 - Present</div>
              <h3 className="text-2xl font-light mb-2">Data Analyst</h3>
              <div className="text-gray-600 mb-4">TechCorp Solutions</div>
              <ul className="text-gray-600 space-y-2">
                <li>• Developed and maintained 12+ Power BI dashboards for executive decision-making</li>
                <li>• Built predictive models achieving 89% accuracy for customer churn prediction</li>
                <li>• Automated data pipelines reducing manual processing time by 60%</li>
                <li>• Collaborated with cross-functional teams to define KPIs and analytics strategies</li>
              </ul>
            </div>
            <div className="border-l-2 border-gray-200 pl-8 relative">
              <div className="absolute w-4 h-4 bg-gray-300 rounded-full -left-[9px] top-0"></div>
              <div className="text-sm text-gray-500 mb-2">Summer 2023</div>
              <h3 className="text-2xl font-light mb-2">Data Analytics Intern</h3>
              <div className="text-gray-600 mb-4">DataFlow Inc</div>
              <ul className="text-gray-600 space-y-2">
                <li>• Automated monthly reporting processes using Python, saving 20 hours per month</li>
                <li>• Conducted exploratory data analysis on customer behavior datasets</li>
                <li>• Created visualizations and presentations for stakeholder meetings</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-sm tracking-widest text-gray-500 mb-4">CASE STUDIES</div>
          <h2 className="text-4xl font-light mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <div key={idx} className="bg-white p-8 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-light mb-4">{project.title}</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.description}</p>
                <div className="bg-gray-50 p-4 mb-4">
                  <div className="text-xs text-gray-500 mb-1">IMPACT</div>
                  <div className="text-sm font-medium">{project.impact}</div>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="text-xs bg-gray-100 px-3 py-1">
                      {tech}
                    </span>
                  ))}
                </div>
                <a href={project.link} className="text-sm flex items-center gap-2 hover:gap-3 transition-all">
                  View Project <ExternalLink size={14} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-sm tracking-widest text-gray-500 mb-4">EXPERTISE</div>
          <h2 className="text-4xl font-light mb-12">Skills & Technologies</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, idx) => (
              <div key={idx}>
                <h3 className="text-lg font-light mb-4 pb-2 border-b border-gray-200">
                  {skill.category}
                </h3>
                <ul className="space-y-2">
                  {skill.items.map((item, i) => (
                    <li key={i} className="text-gray-600 text-sm">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-sm tracking-widest text-gray-500 mb-4">CREDENTIALS</div>
          <h2 className="text-4xl font-light mb-12">Certifications & Awards</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, idx) => (
              <div key={idx} className="bg-white p-6 border-l-2 border-black">
                <h3 className="text-lg font-light mb-2">{cert.name}</h3>
                <div className="text-sm text-gray-600">{cert.issuer}</div>
                <div className="text-sm text-gray-500 mt-2">
                  {cert.year} {cert.score && `• Score: ${cert.score}`}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conference Presentations */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-sm tracking-widest text-gray-500 mb-4">RESEARCH & PRESENTATIONS</div>
          <h2 className="text-4xl font-light mb-12">Conference Papers</h2>
          <div className="space-y-8">
            <div className="bg-gray-50 p-8 border-l-4 border-black">
              <h3 className="text-xl font-light mb-3">Predictive Analytics in Customer Behavior Modeling</h3>
              <div className="text-sm text-gray-600 mb-2">International Conference on Data Science & Analytics • 2024</div>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Presented research on implementing machine learning algorithms for predicting customer purchasing patterns, 
                demonstrating the effectiveness of ensemble methods in real-world business applications.
              </p>
              <span className="text-xs bg-white px-3 py-1 inline-block">Oral Presentation</span>
            </div>
            <div className="bg-gray-50 p-8 border-l-4 border-black">
              <h3 className="text-xl font-light mb-3">Optimizing Data Pipelines for Real-Time Analytics</h3>
              <div className="text-sm text-gray-600 mb-2">Asia Pacific Conference on Information Systems • 2024</div>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Showcased methodologies for building efficient ETL pipelines that enable real-time data processing 
                and visualization, with focus on scalability and performance optimization.
              </p>
              <span className="text-xs bg-white px-3 py-1 inline-block">Poster Presentation</span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-sm tracking-widest text-gray-500 mb-4">TESTIMONIALS</div>
          <h2 className="text-4xl font-light mb-12">What Colleagues Say</h2>
          <div className="space-y-12">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="border-l-2 border-gray-200 pl-8">
                <p className="text-lg text-gray-600 italic mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="text-sm">
                  <div className="font-medium">{testimonial.author}</div>
                  <div className="text-gray-500">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-sm tracking-widest text-gray-500 mb-4">SERVICES</div>
          <h2 className="text-4xl font-light mb-12">What I Offer</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Data Analysis & Insights',
                description: 'Transform raw data into actionable business intelligence through advanced analytics and statistical modeling.'
              },
              {
                title: 'Dashboard Development',
                description: 'Design and build interactive dashboards using Power BI and Tableau for real-time decision-making.'
              },
              {
                title: 'Predictive Modeling',
                description: 'Develop machine learning models to forecast trends, predict outcomes, and optimize business strategies.'
              },
              {
                title: 'Data Pipeline Engineering',
                description: 'Build robust ETL pipelines to automate data collection, processing, and integration workflows.'
              },
              {
                title: 'Business Intelligence Strategy',
                description: 'Consult on analytics strategy, KPI definition, and data governance best practices.'
              },
              {
                title: 'Data Visualization',
                description: 'Create compelling visual narratives that communicate complex insights to stakeholders effectively.'
              }
            ].map((service, idx) => (
              <div key={idx} className="bg-white p-8">
                <h3 className="text-xl font-light mb-4">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-sm tracking-widest text-gray-500 mb-4">GET IN TOUCH</div>
          <h2 className="text-4xl font-light mb-12">Let's Work Together</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-gray-600 mb-8 leading-relaxed">
                I'm always interested in hearing about new projects and opportunities. 
                Whether you need help with data analysis, dashboard development, or predictive modeling, 
                let's discuss how we can work together.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail size={20} />
                  <a href="mailto:subbiah.sathyapriya@gmail.com" className="hover:text-gray-600">
                    subbiah.sathyapriya@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Linkedin size={20} />
                  <a href="#" className="hover:text-gray-600">
                    linkedin.com/in/sathyapriya-subbiah/
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Github size={20} />
                  <a href="#" className="hover:text-gray-600">
                    github.com/Sathyapriya-sb
                  </a>
                </div>
              </div>
            </div>
            <div>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full border border-gray-300 p-3 focus:outline-none focus:border-black"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full border border-gray-300 p-3 focus:outline-none focus:border-black"
                />
                <textarea
                  placeholder="Message"
                  rows="5"
                  className="w-full border border-gray-300 p-3 focus:outline-none focus:border-black"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-black text-white py-3 hover:bg-gray-800 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-2xl font-light tracking-tight">SATHYAPRIYA SUBBIAH</div>
            <div className="flex gap-6">
              <a href="#" className="text-gray-600 hover:text-black transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-black transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-black transition-colors">
                <Mail size={20} />
              </a>
            </div>
            <div className="text-sm text-gray-500">
              © 2025 Sathyapriya Subbiah. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}