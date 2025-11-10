import React, { useState } from 'react';
import { Mail, Github, Linkedin, ExternalLink, MapPin } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Event Ticketing Platform",
      subtitle: "Amphipass.com",
      tech: ["Python", "Flask", "PostgreSQL", "Payment Processing"],
      description: "Building a full-stack event ticketing platform for smaller venues seeking alternatives to high-fee platforms. Architecting scalable backend infrastructure to handle ticket sales and real-time event data.",
      link: "https://amphipass.com",
      status: "Live",
      impact: "Serving venues seeking cost-effective ticketing solutions"
    },
    {
      id: 2,
      title: "Internal OTP Service",
      subtitle: "Cost Optimization Solution",
      tech: ["Golang", "Redis", "Microservices"],
      description: "Identified opportunity and built internal OTP generation/validation service to replace Twilio dependency, saving $15k+ monthly in operational costs.",
      link: "https://github.com/RoMalms10/otp-generator",
      status: "Open Source",
      impact: "$15k+ monthly cost savings"
    },
    {
      id: 3,
      title: "WhatsApp Money Transfer Bot",
      subtitle: "RabbitMQ Implementation",
      tech: ["RabbitMQ", "WhatsApp API", "Microservices", ".NET"],
      description: "Pioneered first RabbitMQ implementation at Ria to build WhatsApp chatbot for money transfers, creating an entirely new customer channel.",
      status: "Live",
      impact: "New customer channel for money transfers"
    },
    {
      id: 4,
      title: "Mercari Authentication System",
      subtitle: "Luxury Goods Authentication",
      tech: ["PHP", "Go", "Kubernetes", "Third-party APIs"],
      description: "Designed and architected core authentication product for online item verification in collaboration with third-party vendors.",
      status: "Live",
      impact: "10% increase in luxury goods sell-through rate"
    }
  ];

  const experience = [
    {
      company: "Ria Money Transfer",
      role: "Software Engineer",
      period: "Jan 2025 - Oct 2025",
      location: "Denver, CO",
      highlights: ["$15k+ monthly cost savings", "Pioneered RabbitMQ implementation", "AI tooling evaluation"]
    },
    {
      company: "Ria Money Transfer",
      role: "Technical Product Manager",
      period: "June 2023 - Jan 2025",
      location: "Denver, CO",
      highlights: ["33% increase in new customers", "600% improvement in app ratings", "Global product launches"]
    },
    {
      company: "Mercari",
      role: "Backend Engineer",
      period: "July 2019 - Oct 2022",
      location: "Palo Alto, CA",
      highlights: ["8,000+ RPS API handling", "50M+ item inventory impact", "Founded Growth team"]
    }
  ];

  const skills = {
    "Languages": ["Golang", "Python", "PHP", "C#"],
    "Backend": ["RESTful APIs", "Microservices", "gRPC", "RabbitMQ"],
    "Databases": ["PostgreSQL", "MySQL", "Redis"],
    "Infrastructure": ["Docker", "Kubernetes", "AWS", "GCP"],
    "Tools": ["Git", "CircleCI", "Grafana", "Kibana"]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-8 md:py-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-600/10"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto pt-8 md:pt-0">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full flex items-center justify-center text-4xl font-bold mt-4 md:mt-0">
              RM
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Robert Malmstein
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-2">
              Senior Software Engineer
            </p>
            <p className="text-lg text-slate-400 mb-8">
              Backend Development • Product Engineering • FinTech
            </p>
          </div>
          
          <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            I bridge complex technical systems with real business impact. From startups with &lt;10 people 
            to global companies spanning 11+ hour time differences, I solve problems that matter.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <span className="px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-300">
              Golang
            </span>
            <span className="px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-300">
              Python
            </span>
            <span className="px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-full text-green-300">
              Microservices
            </span>
            <span className="px-4 py-2 bg-orange-500/20 border border-orange-500/30 rounded-full text-orange-300">
              FinTech
            </span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a href="mailto:romalms10@gmail.com" 
               className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">
              <Mail size={20} />
              Get In Touch
            </a>
            <a href="https://github.com/RoMalms10" 
               className="flex items-center gap-2 px-6 py-3 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors">
              <Github size={20} />
              GitHub
            </a>
            <a href="https://linkedin.com/in/robert-malmstein" 
               className="flex items-center gap-2 px-6 py-3 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors">
              <Linkedin size={20} />
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                Senior Software Engineer who bridges technical systems with business impact. 
                I don't just write code - I solve problems that matter.
              </p>
              <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                I've delivered cost-saving solutions at scale and driven significant growth as both 
                an engineer and product manager. Currently building an event ticketing platform at 
                amphipass.com because I saw a market gap.
              </p>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                I thrive in both startup environments (&lt;10 people) and global companies with teams 
                spanning 11+ hour time differences, adapting quickly and focusing on solutions that move the needle.
              </p>
              
              <div className="flex items-center gap-2 text-slate-400 mb-4">
                <MapPin size={20} />
                <span>Denver, Colorado</span>
              </div>
            </div>
            
            <div className="space-y-6">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category}>
                  <h3 className="text-xl font-semibold mb-3 text-blue-400">{category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-slate-700/50 border border-slate-600 rounded-md text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div key={project.id} 
                   className="bg-slate-700/30 border border-slate-600/50 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                    <p className="text-blue-400 text-sm font-medium">{project.subtitle}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.status === 'Live' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                    project.status === 'Production' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' :
                    'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                  }`}>
                    {project.status}
                  </span>
                </div>
                
                <p className="text-slate-300 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-slate-600/50 rounded text-xs text-slate-300">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <p className="text-sm text-blue-400 font-medium">{project.impact}</p>
                  {project.link && (
                    <a href={project.link} 
                       className="flex items-center gap-1 text-blue-400 hover:text-blue-300 transition-colors">
                      <ExternalLink size={16} />
                      <span className="text-sm">View</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Experience
          </h2>
          
          <div className="space-y-8">
            {experience.map((job, index) => (
              <div key={index} 
                   className="bg-slate-700/20 border border-slate-600/30 rounded-xl p-6 hover:border-blue-500/30 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">{job.role}</h3>
                    <p className="text-blue-400 font-medium">{job.company}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-slate-300">{job.period}</p>
                    <p className="text-slate-400 text-sm">{job.location}</p>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {job.highlights.map((highlight, idx) => (
                    <span key={idx} className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-sm text-blue-300">
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-slate-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Looking for engineering roles where I can tackle complex problems and drive meaningful results.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6">
            <a href="mailto:romalms10@gmail.com" 
               className="flex items-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors text-lg font-medium">
              <Mail size={24} />
              romalms10@gmail.com
            </a>
            <a href="https://linkedin.com/in/robert-malmstein" 
               className="flex items-center gap-3 px-8 py-4 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors text-lg font-medium">
              <Linkedin size={24} />
              LinkedIn
            </a>
            <a href="https://github.com/RoMalms10" 
               className="flex items-center gap-3 px-8 py-4 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors text-lg font-medium">
              <Github size={24} />
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-slate-700">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-slate-400">
            © 2025 Robert Malmstein. Built with React and hosted on GitHub Pages.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;