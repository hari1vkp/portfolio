'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Github, Mail, Phone } from 'lucide-react';
import { StarsBackground } from '@/components/portfolio/stars';

export default function Home() {
  const [currentSection, setCurrentSection] = useState('welcome');
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Show welcome screen with delay to let solar system establish
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleExplore = () => {
    setCurrentSection('hero');
  };

  if (currentSection === 'welcome') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted overflow-hidden">
        {/* Animated background stars */}
        <StarsBackground count={10} />
        
        {/* Solar system animation - responsive for mobile */}
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Sun - responsive sizing */}
          <motion.div
            className="absolute w-12 h-12 sm:w-16 sm:h-16 md:w-32 md:h-32 bg-yellow-500 rounded-full shadow-[0_0_15px_7px_rgba(255,204,0,0.5)] sm:shadow-[0_0_20px_10px_rgba(255,204,0,0.5)] md:shadow-[0_0_40px_20px_rgba(255,204,0,0.5)]"
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
          />
          
          {/* Orbiting planets using custom orbital paths - scaled for mobile */}
          {/* Planet 1 - Mercury */}
          <div className="absolute w-1 h-1 md:w-2 md:h-2 bg-gray-400 rounded-full animate-orbit-mobile md:animate-orbit" 
               style={{ 
                 top: '50%',
                 left: '50%',
                 ['--orbit-radius-mobile' as any]: '30px',
                 ['--orbit-radius' as any]: '70px'
               }}>
          </div>
          
          {/* Planet 2 - Venus */}
          <div className="absolute w-1.5 h-1.5 md:w-3 md:h-3 bg-yellow-200 rounded-full animate-orbit-mobile md:animate-orbit" 
               style={{ 
                 top: '50%',
                 left: '50%',
                 ['--orbit-radius-mobile' as any]: '50px',
                 ['--orbit-radius' as any]: '110px',
                 animationDuration: '8s'
               }}>
          </div>
          
          {/* Planet 3 - Earth */}
          <div className="absolute w-1.5 h-1.5 md:w-3 md:h-3 bg-blue-500 rounded-full animate-orbit-mobile md:animate-orbit" 
               style={{ 
                 top: '50%',
                 left: '50%',
                 ['--orbit-radius-mobile' as any]: '70px',
                 ['--orbit-radius' as any]: '150px',
                 animationDuration: '12s'
               }}>
            {/* Moon */}
            <div className="absolute w-0.5 h-0.5 md:w-1 md:h-1 bg-gray-300 rounded-full animate-orbit-mobile md:animate-orbit" 
                 style={{ 
                   top: '50%',
                   left: '50%',
                   ['--orbit-radius-mobile' as any]: '4px',
                   ['--orbit-radius' as any]: '8px',
                   animationDuration: '2s',
                   animationDirection: 'reverse'
                 }}>
            </div>
          </div>
          
          {/* Planet 4 - Mars */}
          <div className="absolute w-1.5 h-1.5 md:w-2.5 md:h-2.5 bg-red-500 rounded-full animate-orbit-mobile md:animate-orbit" 
               style={{ 
                 top: '50%',
                 left: '50%',
                 ['--orbit-radius-mobile' as any]: '90px',
                 ['--orbit-radius' as any]: '190px',
                 animationDuration: '16s'
               }}>
          </div>
          
          {/* Planet 5 - Jupiter */}
          <div className="absolute w-2.5 h-2.5 md:w-5 md:h-5 bg-orange-300 rounded-full animate-orbit-mobile md:animate-orbit" 
               style={{ 
                 top: '50%',
                 left: '50%',
                 ['--orbit-radius-mobile' as any]: '120px',
                 ['--orbit-radius' as any]: '240px',
                 animationDuration: '24s'
               }}>
          </div>
          
          {/* Planet 6 - Saturn */}
          <div className="absolute w-2 h-2 md:w-4 md:h-4 bg-yellow-100 rounded-full animate-orbit-mobile md:animate-orbit" 
               style={{ 
                 top: '50%',
                 left: '50%',
                 ['--orbit-radius-mobile' as any]: '150px',
                 ['--orbit-radius' as any]: '290px',
                 animationDuration: '30s'
               }}>
            {/* Saturn's rings - responsive */}
            <div className="absolute w-3 h-0.5 md:w-6 md:h-1 bg-yellow-200 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          </div>
          
          {/* Planet 7 - Uranus */}
          <div className="absolute w-2 h-2 md:w-3.5 md:h-3.5 bg-blue-300 rounded-full animate-orbit-mobile md:animate-orbit" 
               style={{ 
                 top: '50%',
                 left: '50%',
                 ['--orbit-radius-mobile' as any]: '180px',
                 ['--orbit-radius' as any]: '340px',
                 animationDuration: '36s'
               }}>
          </div>
          
          {/* Planet 8 - Neptune */}
          <div className="absolute w-2 h-2 md:w-3.5 md:h-3.5 bg-blue-700 rounded-full animate-orbit-mobile md:animate-orbit" 
               style={{ 
                 top: '50%',
                 left: '50%',
                 ['--orbit-radius-mobile' as any]: '210px',
                 ['--orbit-radius' as any]: '390px',
                 animationDuration: '42s'
               }}>
          </div>
        </div>
        
        <AnimatePresence>
          {showContent && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8 }}
              className="text-center px-4 relative z-10 w-full max-w-xs sm:max-w-md md:max-w-3xl mx-auto"
            >
              {/* Blur card background with yellow border - responsive padding */}
              <div className="absolute inset-0 bg-card/30 backdrop-blur-lg rounded-2xl shadow-2xl -z-10 border border-yellow-400/50"></div>
              
              <motion.div
                className="relative z-10 py-6 px-3 sm:py-8 sm:px-4 md:py-12 md:px-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <motion.h1 
                  className="text-xl sm:text-2xl md:text-4xl lg:text-6xl font-bold mb-3 sm:mb-4 md:mb-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7, duration: 0.8 }}
                >
                  Welcome to <span className="text-yellow-400">Hari's Universe</span>
                </motion.h1>
                
                <motion.p 
                  className="text-sm sm:text-base md:text-xl lg:text-2xl text-muted-foreground mb-5 sm:mb-6 md:mb-10 max-w-2xl mx-auto"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.9, duration: 0.8 }}
                >
                  Where innovation orbits excellence in Java development
                </motion.p>
                
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.1, duration: 0.8 }}
                >
                  <Button 
                    size="default"
                    onClick={handleExplore}
                    className="animate-pulse hover:animate-none bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 w-full sm:w-4/5 md:w-auto md:px-8 mx-auto"
                  >
                    Explore My World <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted">
      {/* Stars background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <StarsBackground count={75} />
      </div>
      
      <HeroSection />
      <SkillsSection />
      <InternshipSection />
      <ProjectsSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
}

function HeroSection() {
  const skills = ["Java", "Spring Boot", "AWS", "MySQL", "JavaScript"];
  
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 -z-10"></div>
      <div className="container px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Hi, I&#39;m <span className="text-yellow-400">Hariharasudhan R</span>
          </motion.h1>
          
          <motion.h2 
            className="text-2xl md:text-3xl font-semibold text-muted-foreground mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Java Full Stack Developer
          </motion.h2>
          
          <motion.p 
            className="text-lg md:text-xl max-w-3xl mx-auto mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Passionate and skilled Java Developer with hands-on experience in building robust applications 
            using Java, Spring Boot, and AWS. Strong understanding of Data Structures and Algorithms, 
            and proficient in SQL with JDBC. Experienced in full-stack development with JavaScript and Java.
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-3 mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            {skills.map((skill, index) => (
              <motion.span
                key={skill}
                className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + index * 0.1 }}
                whileHover={{ scale: 1.05, backgroundColor: "#f59e0b" }}
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>
          
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <Button asChild size="lg" className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700">
              <a href="#projects">View My Work</a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="#contact">Contact Me</a>
            </Button>
          </motion.div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        >
          <div className="bg-card/80 backdrop-blur-sm p-6 rounded-lg border shadow-lg">
            <h3 className="text-xl font-bold mb-4 text-yellow-400">Education</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold">Bachelor of Computer Applications (BCA)</h4>
                <p className="text-muted-foreground">SRM Arts and Science College, Trichy | [2020-2023]</p>
              </div>
              <div>
                <h4 className="font-semibold">Master of Computer Application (MCA)</h4>
                <p className="text-muted-foreground">Srinivasan College of Arts and Science | [2024-2026]</p>
              </div>
            </div>
          </div>
          
          <div className="bg-card/80 backdrop-blur-sm p-6 rounded-lg border shadow-lg">
            <h3 className="text-xl font-bold mb-4 text-yellow-400">Experience</h3>
            <div>
              <h4 className="font-semibold">Web Dev Intern</h4>
              <p className="text-muted-foreground">Cloud Garage | Oct 2024 - March 2025</p>
              <ul className="mt-2 list-disc list-inside text-muted-foreground space-y-1">
                <li>Built Java applications using Spring Boot</li>
                <li>Integrated REST APIs and managed cloud services</li>
                <li>Used API to trigger Terraform IAAC</li>
                <li>Improved performance and security</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function SkillsSection() {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: ["Java", "JavaScript"]
    },
    {
      category: "Frameworks & Libraries",
      skills: ["Spring Boot", "Bootstrap"]
    },
    {
      category: "Databases",
      skills: ["MySQL"]
    },
    {
      category: "Cloud Technologies",
      skills: ["AWS (EC2, S3, Lambda, RDS)"]
    },
    {
      category: "Web Technologies",
      skills: ["HTML", "CSS", "JavaScript"]
    },
    {
      category: "Tools & Version Control",
      skills: ["Git", "GitHub"]
    },
    {
      category: "Software Development Concepts",
      skills: ["Data Structures & Algorithms", "Object-Oriented Programming (OOP)", "Software Licensing & Open Source"]
    }
  ];
  
  return (
    <section id="skills" className="py-20 bg-muted/30 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full filter blur-[100px] opacity-20"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500 rounded-full filter blur-[100px] opacity-20"></div>
      </div>
      
      <div className="container px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-yellow-400">My Skills</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to build robust, scalable Java applications
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="h-full"
            >
              <div className="bg-card/80 backdrop-blur-sm p-6 rounded-lg border shadow-sm h-full hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold mb-4 text-yellow-400">{category.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex} 
                      className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function InternshipSection() {
  return (
    <section id="internship" className="py-20 bg-muted/30 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/3 w-48 h-48 bg-yellow-500 rounded-full filter blur-[80px] opacity-20"></div>
        <div className="absolute bottom-1/3 right-1/3 w-48 h-48 bg-blue-500 rounded-full filter blur-[80px] opacity-20"></div>
      </div>
      
      <div className="container px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-yellow-400">My Internship</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hands-on experience in real-world development environments
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-card/80 backdrop-blur-sm p-6 rounded-lg border shadow-lg">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3">
                <h3 className="text-2xl font-bold mb-2 text-yellow-400">Web Dev Intern</h3>
                <p className="text-lg font-semibold">Cloud Garage</p>
                <p className="text-muted-foreground">Oct 2024 - March 2025</p>
              </div>
              
              <div className="md:w-2/3">
                <h4 className="text-xl font-bold mb-4">Key Responsibilities:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-2">•</span>
                    <span>Built Java applications using Spring Boot</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-2">•</span>
                    <span>Integrated REST APIs and managed cloud services</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-2">•</span>
                    <span>Used API to trigger Terraform IAAC</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-2">•</span>
                    <span>Improved application performance and security</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ProjectsSection() {
  const projects = [
    {
      title: "Auto Cloud",
      description: "Developed a cloud services portal integrating AWS, Azure, and GCP. Contributed to backend development using Java and Spring Boot. Implemented multi-cloud API integration and authentication.",
      technologies: ["Java", "Spring Boot", "AWS", "Azure", "GCP"],
      githubUrl: "#",
      demoUrl: "#"
    },
    {
      title: "StagKitchen",
      description: "AI-powered kitchen companion that generates recipes from available ingredients and creates personalized daily meal plans. Features include image recognition, dietary preference support, and nutritional tracking.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Google AI (Gemini)", "Genkit"],
      githubUrl: "https://github.com/hari1vkp/Stagkitchen",
      demoUrl: "#"
    }
  ];
  
  return (
    <section id="projects" className="py-20">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-yellow-400">My Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcase of my Java development work and real-world applications
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="h-full"
            >
              <div className="bg-card/80 backdrop-blur-sm p-6 rounded-lg border shadow-sm h-full flex flex-col">
                <h3 className="text-2xl font-bold mb-3 text-yellow-400">{project.title}</h3>
                <p className="text-muted-foreground mb-4 flex-grow">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2 mt-auto">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.githubUrl}>GitHub</a>
                  </Button>
                  <Button size="sm" asChild className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700">
                    <a href={project.demoUrl}>Live Demo</a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const [formData, setFormData] = useState({
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create Gmail compose URL with form data
    const { subject, message } = formData;
    const gmailSubject = encodeURIComponent(subject || 'Portfolio Contact');
    const gmailBody = encodeURIComponent(`Subject: ${subject}

Message:
${message}`);
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=hariharasudhan.info02@gmail.com&su=${gmailSubject}&body=${gmailBody}`;
    
    // Open Gmail in a new tab
    window.open(gmailUrl, '_blank');
    
    // Reset form
    setFormData({ subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-muted/30 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 right-1/3 w-48 h-48 bg-green-500 rounded-full filter blur-[80px] opacity-20"></div>
      </div>
      
      <div className="container px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-yellow-400">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
          </p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-xl font-bold mb-6 text-yellow-400">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-yellow-400" />
                  <a href="mailto:hariharasudhan.info02@gmail.com" className="hover:underline">
                    hariharasudhan.info02@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-yellow-400" />
                  <a href="tel:+918667637540" className="hover:underline">
                    +91 8667637540
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Github className="h-5 w-5 text-yellow-400" />
                  <a href="https://github.com/hari1vkp" target="_blank" rel="noopener noreferrer" className="hover:underline">
                    github.com/hari1vkp
                  </a>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4 text-yellow-400">Follow Me</h3>
              <div className="flex gap-3">
                <Button variant="outline" size="icon" asChild>
                  <a href="https://github.com/hari1vkp" target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <a href="https://mail.google.com/mail/?view=cm&fs=1&to=hariharasudhan.info02@gmail.com" target="_blank" rel="noopener noreferrer">
                    <Mail className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <a href="tel:+918667637540">
                    <Phone className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-card/80 backdrop-blur-sm p-6 rounded-lg border shadow-sm">
              <h3 className="text-xl font-bold mb-6 text-yellow-400">Send Me a Message</h3>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-1">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-md bg-background/50"
                    placeholder="Subject"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                  <textarea
                    id="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-md bg-background/50"
                    placeholder="Your message"
                    required
                  ></textarea>
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600"
                >
                  Send Message via Gmail
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function FooterSection() {
  return (
    <footer className="py-10 border-t relative">
      <div className="container px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Hariharasudhan R. All rights reserved.
          </div>
          
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" asChild>
              <a href="https://github.com/hari1vkp" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="mailto:hariharasudhan.info02@gmail.com">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="tel:+918667637540">
                <Phone className="h-5 w-5" />
              </a>
            </Button>
          </div>
          
          <div className="text-sm text-muted-foreground">
            Built with Next.js and shadcn/ui
          </div>
        </div>
      </div>
    </footer>
  );
}
