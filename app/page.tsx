"use client";
// pages/index.js
import Head from 'next/head';
import { 
  Menu, 
  X, 
  Github, 
  Linkedin, 
  Mail, 
  Code, 
  Layout, 
  Smartphone, 
  Palette, 
  ChevronDown,
  ArrowRight
} from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const projects = [
    {
      title: "Streaming Service Platform",
      description: "Full-featured video streaming platform with user authentication, and content management",
      technologies: ["React", "Node.js", "MongoDB"],
      image: "Screenshot 2026-01-06 130533.png",
      result: "self project"
    },
    {
      title: "Company Portfolio Website",
      description: "Responsive corporate website showcasing services",
      technologies: ["React", "Node.js", "MongoDB"],
      image: "Screenshot 2026-01-06 134155.png",
      result: "self project"
    },
    {
      title: "Ai UI/UX Generated Website",
      description: "AI-powered platform that generates custom UI/UX designs based on user input",
      technologies: ["nextjs", "tailwindcss", "mongodb", "openai"],
      image: "Screenshot 2026-01-06 135227.png",
      result: "under development"
    }
  ];

  const skills = [
    { name: "JavaScript", level: 95, icon: Code },
    { name: "React", level: 90, icon: Code },
    { name: "HTML/CSS", level: 98, icon: Layout },
    { name: "Responsive Design", level: 92, icon: Smartphone },
    { name: "UI/UX Design", level: 85, icon: Palette },
    { name: "Node.js", level: 80, icon: Code }
  ];

  return (
    <>
      <Head>
        <title>Mochamad Belva Janitra | Web Developer Portfolio</title>
        <meta name="description" content="Professional web developer portfolio showcasing projects, skills, and experience" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Navigation */}
        <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <Code className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-white">DevPortfolio</span>
              </div>
              
              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`capitalize text-sm font-medium transition-all duration-300 ${
                      activeSection === item 
                        ? 'text-purple-400 border-b-2 border-purple-400' 
                        : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    {item}
                  </button>
                ))}
                {/* <a 
                  href="belvabel1120@gmail.com" 
                  className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center space-x-2"
                >
                  <Mail className="w-4 h-4" />
                  <span>Hire Me</span>
                </a> */}
              </div>

              {/* Mobile Menu Button */}
              <button 
                className="md:hidden text-gray-300"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden bg-black/90 backdrop-blur-sm border-t border-white/10">
              <div className="px-4 py-4 space-y-4">
                {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`block w-full text-left capitalize text-gray-300 hover:text-white transition-colors ${
                      activeSection === item ? 'text-purple-400 font-medium' : ''
                    }`}
                  >
                    {item}
                  </button>
                ))}
                {/* <a 
                  href="belvabel1120@gmail.com" 
                  className="block w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-3 rounded-lg text-center font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
                >
                  Hire Me
                </a> */}
              </div>
            </div>
          )}
        </nav>

        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-purple-500/10 rounded-full border border-purple-500/20 mb-6">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
              <span className="text-purple-300 text-sm font-medium">Available for work</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Hi, I'm <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Belva</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Web Developer</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
              I build beautiful, responsive, and high-performance websites and web applications that bring ideas to life.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => scrollToSection('projects')}
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/25"
              >
                View My Work
                <ArrowRight className="inline-block w-5 h-5 ml-2" />
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="border-2 border-white/20 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:border-purple-400 hover:text-purple-400 transition-all duration-300"
              >
                Get In Touch
              </button>
            </div>
            
            <div className="mt-16 flex justify-center space-x-6">
              <a href="github.com/abelva20" className="text-gray-400 hover:text-white transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="linkedin.com/in/Mochamad-Belva-Janitra" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="belvabel1120@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          <div className="mt-20 flex justify-center">
            <ChevronDown 
              className="w-8 h-8 text-gray-400 animate-bounce cursor-pointer" 
              onClick={() => scrollToSection('about')}
            />
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">About Me</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Turning Ideas into Digital Reality</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  With over 5 years of experience in web development, I specialize in creating modern, 
                  user-friendly websites and applications that deliver exceptional user experiences.
                </p>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  My passion lies in solving complex problems with elegant, clean code and staying 
                  at the forefront of web technologies to deliver cutting-edge solutions.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                    <div className="text-2xl font-bold text-white">50+</div>
                    <div className="text-gray-400 text-sm">Projects Completed</div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                    <div className="text-2xl font-bold text-white">98%</div>
                    <div className="text-gray-400 text-sm">Client Satisfaction</div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl p-1">
                  <img 
                    src="WhatsApp Image 2026-01-06 at 1.48.33 PM.jpeg" 
                    alt="Belva" 
                    className="rounded-2xl w-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-3 rounded-xl font-semibold shadow-lg">
                  <div className="text-2xl font-bold">5+ Years</div>
                  <div className="text-sm">Experience</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">My Skills</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {skills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <div key={index} className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-purple-500/30 transition-all duration-300">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2 mb-3">
                      <div 
                        className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                    <div className="text-gray-400 text-sm">{skill.level}% Proficient</div>
                  </div>
                );
              })}
            </div>
            
            <div className="mt-16 text-center">
              <div className="inline-flex flex-wrap justify-center gap-3">
                {['HTML5', 'CSS3', 'JavaScript', 'React', 'Vue.js', 'Node.js', 'TypeScript', 'Tailwind CSS', 'SASS', 'Git', 'Webpack', 'Figma'].map((tech, index) => (
                  <span 
                    key={index} 
                    className="px-4 py-2 bg-white/5 rounded-full text-gray-300 text-sm border border-white/10 hover:border-purple-500/30 hover:text-purple-400 transition-all duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Projects</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div 
                  key={index} 
                  className="bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-purple-500/30 transition-all duration-500 hover:transform hover:scale-105"
                >
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-300 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex} 
                          className="px-3 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full border border-purple-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <button className="text-purple-400 hover:text-purple-300 font-medium flex items-center group">
                      {project.result}
                      {/* <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" /> */}
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              {/* <button className="border-2 border-white/20 text-white px-8 py-3 rounded-xl font-medium hover:border-purple-400 hover:text-purple-400 transition-all duration-300">
                View All Projects
              </button> */}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900/30 to-pink-900/30">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get In Touch</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
              <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
                Have a project in mind or want to discuss potential opportunities? 
                I'd love to hear from you!
              </p>
            </div>
            
            <div className="bg-white/5 rounded-2xl p-8 border border-white/10 backdrop-blur-sm">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                        <Mail className="w-6 h-6 text-purple-400" />
                      </div>
                      <div>
                        <div className="text-gray-400 text-sm">Email</div>
                        <div className="text-white">belvabel1120@gmail.com</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                        <Github className="w-6 h-6 text-purple-400" />
                      </div>
                      <div>
                        <div className="text-gray-400 text-sm">GitHub</div>
                        <div className="text-white">github.com/abelva20</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                        <Linkedin className="w-6 h-6 text-purple-400" />
                      </div>
                      <div>
                        <div className="text-gray-400 text-sm">LinkedIn</div>
                        <div className="text-white">linkedin.com/in/Mochamad-Belva-Janitra</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 pt-8 border-t border-white/10">
                    <h4 className="text-lg font-semibold text-white mb-4">Working Hours</h4>
                    <p className="text-gray-300">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Weekend: Available for urgent projects
                    </p>
                  </div>
                </div>
                
                {/* <div>
                  <h3 className="text-2xl font-bold text-white mb-6">Send Me a Message</h3>
                  <form className="space-y-6">
                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">Name</label>
                      <input 
                        type="text" 
                        className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                        placeholder="Your name"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">Email</label>
                      <input 
                        type="email" 
                        className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                        placeholder="your@email.com"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">Message</label>
                      <textarea 
                        className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none"
                        placeholder="Tell me about your project..."
                      ></textarea>
                    </div>
                    
                    <button 
                      type="submit"
                      className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/25"
                    >
                      Send Message
                    </button>
                  </form>
                </div> */}
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-white/10">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center space-x-2 mb-4 md:mb-0">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <Code className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-white">DevPortfolio</span>
              </div>
              
              <div className="flex space-x-6">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Github className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="belvabel1120@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div className="mt-8 text-center text-gray-400 text-sm">
              <p>© {new Date().getFullYear()} Mochamad Belva Janitra. All rights reserved. Built with Next.js and Tailwind CSS.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
