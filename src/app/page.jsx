'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';
import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function Home() {
  // Animated stats
  const [projects, setProjects] = useState(0);
  const [talented, setTalented] = useState(0);
  const [clients, setClients] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, threshold: 0.3 });

  useEffect(() => {
    if (statsInView && !hasAnimated) {
          setHasAnimated(true);
      const animate = (setter, end, duration = 2000) => {
            let start = 0;
            const increment = end / (duration / 16);
            function step() {
              start += increment;
              if (start < end) {
                setter(Math.floor(start));
                requestAnimationFrame(step);
              } else {
                setter(end);
              }
            }
            step();
          };
          animate(setProjects, 500);
      animate(setTalented, 350);
          animate(setClients, 150);
    }
  }, [statsInView, hasAnimated]);

  // Process steps
  const processSteps = [
    {
      number: '01/06',
      title: 'Ideate',
      description: 'We analyze your vision thoroughly to ensure the roadmap is perfectly aligned with your end goals, setting the stage for product success.'
    },
    {
      number: '02/06',
      title: 'Design',
      description: 'Crafting a minimal viable product (MVP) that balances design with core functionality, maximizing value and user satisfaction.'
    },
    {
      number: '03/06',
      title: 'Develop',
      description: 'Developing end-to-end solutions with a focus on feasibility assessment, architecture design, and agile process to ensure rapid, high-quality delivery.'
    },
    {
      number: '04/06',
      title: 'Test',
      description: 'Ensuring your product meets the highest standards of quality and reliability through extensive QA and software testing across all user touch points.'
    },
    {
      number: '05/06',
      title: 'Launch',
      description: 'Executing a successful product launch by developing tailored deployment plans, executing a smooth rollout, and offering dedicated post-launch assistance.'
    },
    {
      number: '06/06',
      title: 'Support',
      description: 'Providing ongoing support and enhancements to ensure continued product success.'
    }
  ];

  const [activeProcess, setActiveProcess] = useState(0);
  const stepRefs = useRef([]);

  // Scroll-based active step detection
  useEffect(() => {
    const observers = stepRefs.current.map((ref, idx) => {
      if (!ref) return null;
      
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveProcess(idx);
          }
        },
        { threshold: 0.5, rootMargin: '-20% 0px -20% 0px' }
      );
      
      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach(observer => observer?.disconnect());
    };
  }, []);

  // Graphics for each step
  const getStepGraphic = (stepIndex) => {
    switch(stepIndex) {
      case 0: // Ideate - Lightbulb with Brain
        return (
          <svg viewBox="0 0 400 500" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <path d="M200 50 Q150 50 120 80 L120 200 Q120 250 150 280 L150 350 Q150 380 180 380 L220 380 Q250 380 250 350 L250 280 Q280 250 280 200 L280 80 Q250 50 200 50 Z" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.3)" strokeWidth="2"/>
            <path d="M200 120 Q160 120 140 150 Q130 180 140 210 Q150 240 180 250 Q200 260 220 250 Q250 240 260 210 Q270 180 260 150 Q240 120 200 120 Z" fill="rgba(255,248,220,0.8)"/>
            <ellipse cx="200" cy="200" rx="60" ry="50" fill="rgba(255,165,0,0.4)">
              <animate attributeName="opacity" values="0.4;0.6;0.4" dur="2s" repeatCount="indefinite"/>
            </ellipse>
            <path d="M200 350 L180 380 L220 380 Z" fill="rgba(255,20,147,0.6)"/>
            <line x1="200" y1="280" x2="200" y2="350" stroke="rgba(64,224,208,0.8)" strokeWidth="3"/>
            <ellipse cx="200" cy="200" rx="80" ry="100" fill="rgba(255,255,255,0.1)">
              <animate attributeName="opacity" values="0.1;0.2;0.1" dur="3s" repeatCount="indefinite"/>
            </ellipse>
          </svg>
        );
      case 1: // Design - Design Tools
        return (
          <svg viewBox="0 0 400 500" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <rect x="100" y="100" width="200" height="150" rx="10" fill="rgba(34,197,94,0.2)" stroke="rgba(34,197,94,0.5)" strokeWidth="2"/>
            <circle cx="150" cy="150" r="20" fill="rgba(34,197,94,0.6)"/>
            <rect x="180" y="140" width="100" height="20" rx="5" fill="rgba(34,197,94,0.6)"/>
            <rect x="180" y="170" width="80" height="20" rx="5" fill="rgba(34,197,94,0.4)"/>
            <path d="M200 300 L150 400 L250 400 Z" fill="rgba(34,197,94,0.3)"/>
            <circle cx="200" cy="350" r="30" fill="rgba(34,197,94,0.2)" stroke="rgba(34,197,94,0.5)" strokeWidth="2"/>
          </svg>
        );
      case 2: // Develop - Code
        return (
          <svg viewBox="0 0 400 500" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <rect x="120" y="120" width="160" height="200" rx="5" fill="rgba(59,130,246,0.2)" stroke="rgba(59,130,246,0.5)" strokeWidth="2"/>
            <text x="200" y="180" textAnchor="middle" fill="rgba(59,130,246,0.8)" fontSize="24" fontFamily="monospace">{'<'}</text>
            <text x="200" y="210" textAnchor="middle" fill="rgba(59,130,246,0.8)" fontSize="24" fontFamily="monospace">{'/'}</text>
            <text x="200" y="240" textAnchor="middle" fill="rgba(59,130,246,0.8)" fontSize="24" fontFamily="monospace">{'>'}</text>
            <circle cx="200" cy="350" r="40" fill="rgba(59,130,246,0.3)"/>
            <rect x="150" y="320" width="100" height="5" rx="2" fill="rgba(59,130,246,0.5)"/>
          </svg>
        );
      case 3: // Test - Checkmark/Quality
        return (
          <svg viewBox="0 0 400 500" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <path d="M200 100 L250 200 L150 200 Z" fill="rgba(234,179,8,0.3)" stroke="rgba(234,179,8,0.5)" strokeWidth="2"/>
            <circle cx="200" cy="250" r="60" fill="rgba(234,179,8,0.2)" stroke="rgba(234,179,8,0.5)" strokeWidth="2"/>
            <path d="M180 250 L195 265 L220 240" stroke="rgba(234,179,8,0.8)" strokeWidth="4" fill="none" strokeLinecap="round"/>
            <path d="M200 320 L180 380 L220 380 Z" fill="rgba(234,179,8,0.4)"/>
          </svg>
        );
      case 4: // Launch - Rocket
        return (
          <svg viewBox="0 0 400 500" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <path d="M200 400 L180 350 L200 300 L220 350 Z" fill="rgba(239,68,68,0.4)" stroke="rgba(239,68,68,0.6)" strokeWidth="2"/>
            <ellipse cx="200" cy="280" rx="30" ry="60" fill="rgba(239,68,68,0.3)"/>
            <circle cx="200" cy="200" r="20" fill="rgba(239,68,68,0.5)">
              <animate attributeName="opacity" values="0.5;0.8;0.5" dur="1.5s" repeatCount="indefinite"/>
            </circle>
            <path d="M200 180 L190 150 L200 140 L210 150 Z" fill="rgba(239,68,68,0.6)"/>
            <ellipse cx="200" cy="160" rx="15" ry="25" fill="rgba(239,68,68,0.4)"/>
          </svg>
        );
      case 5: // Support - Help/Support
        return (
          <svg viewBox="0 0 400 500" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <circle cx="200" cy="200" r="80" fill="rgba(168,85,247,0.2)" stroke="rgba(168,85,247,0.5)" strokeWidth="2"/>
            <path d="M200 150 Q220 150 220 170 Q220 190 200 190 Q180 190 180 170 Q180 150 200 150" fill="rgba(168,85,247,0.4)"/>
            <path d="M200 220 Q180 240 160 260 Q180 280 200 280 Q220 280 240 260 Q220 240 200 220" fill="rgba(168,85,247,0.4)"/>
            <circle cx="200" cy="350" r="50" fill="rgba(168,85,247,0.1)" stroke="rgba(168,85,247,0.3)" strokeWidth="2"/>
          </svg>
        );
      default:
        return null;
    }
  };

  // Case Studies
  const caseStudies = [
    {
      title: 'Goobr',
      subtitle: 'A Social Networking for Pets and Pet Owners',
      description: 'Goobr is a trailblazing social networking app dedicated to pets and their owners.',
      image: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=800'
    },
    {
      title: 'Tulsa Airport',
      subtitle: 'Official Website and App for Tulsa Airport',
      description: 'Tulsa Airport, a prominent name in aviation, sought expertise to enhance its digital presence.',
      image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800'
    },
    {
      title: 'Party Shark',
      subtitle: 'A Social Networking and Event Management App',
      description: 'App designed for young partygoers, specializes in facilitating the organization & discovery of house parties.',
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800'
    },
    {
      title: 'WAGMI',
      subtitle: 'Multiplayer Tower Defense Game',
      description: 'A PvP play-and-earn mobile tower defense game where players can own, trade, and use in-game NFT assets.',
      image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800'
    }
  ];

  // Technologies
  const technologies = {
    mobile: ['iOS', 'Android', 'React Native', 'Flutter'],
    web: ['React', 'Next.js', 'Vue.js', 'Angular'],
    crossPlatform: ['Flutter', 'React Native', 'Ionic'],
    games: ['Unity', 'Unreal Engine', 'Godot'],
    database: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis'],
    cloud: ['AWS', 'Azure', 'GCP', 'Docker']
  };

  // Testimonials
  const testimonials = [
    {
      name: 'Jackie Dallas',
      role: 'Director',
      company: 'Hotset',
      initials: 'JD',
      text: 'Cubix managed to provide successful support and development in a timely manner. The app is still in preparation for the beta launch, but it has been receiving a lot of positive feedback from the client. The team provided excellent workflow and communication throughout the project.'
      },
    {
      name: 'Hamed Al Zadjal',
      role: 'Digital Manager',
      company: 'Oman Oil',
      initials: 'HA',
      text: 'The engagement met the expectations of the internal team. Cubix successfully worked within the robust scope, often going above and beyond to ensure client satisfaction. The team provides clients with a high level of support while still working quickly and creatively.'
    },
    {
      name: 'Geoffrey Anderson',
      role: 'Co-Founder and CEO',
      company: 'Glimmer',
      initials: 'GA',
      text: 'Cubix produced clean code and the app got positive reviews. While there were staffing and language issues, the overall experience was positive. The assigned resources were attentive and fixed problems within a day.'
    },
    {
      name: 'Cleitn Kimberly A. Dalius',
      role: 'Founder',
      company: 'Pauseitive',
      initials: 'CK',
      text: 'Cubix successfully built the application, and the client is waiting for Appstore and Playstore approval. The project manager communicated primarily on Zoom and Slack, frequently providing updates. Above all, their genuine interest in the project and in-depth knowledge in this field were notable.'
    }
  ];

  // Industries
  const industries = [
    { name: 'Automotive', icon: 'ri-car-line', description: 'Enhance your vehicle management operations and boost customer satisfaction with tailored custom API solutions designed for your business needs.' },
    { name: 'Finance', icon: 'ri-bank-line', description: 'Get scalable custom solutions that enhance operational efficiency, boost data security, and streamline your financial services seamlessly.' },
    { name: 'Real Estate', icon: 'ri-building-line', description: 'Our custom real estate solutions simplify property management and sales, streamline operations, and enhance customer experience effectively.' },
    { name: 'Hospitality', icon: 'ri-hotel-line', description: 'Get user-friendly hospitality solutions that enhance guest experiences, boost satisfaction, and streamline hotel operations for better service delivery.' },
    { name: 'Education', icon: 'ri-book-open-line', description: 'Revolutionize ed-tech with innovative solutions that increase student engagement, simplify learning, and support personalized education experiences.' },
    { name: 'Healthcare', icon: 'ri-hospital-line', description: 'Our healthcare solutions streamline operations, reduce administrative tasks, and improve patient care for more efficient and responsive medical services.' }
  ];

  // Awards
  const awards = [
    { rating: '4.0', title: 'Ranked among the top gaming app development companies of 2025' },
    { rating: '4.9', title: 'Ranked among the leading game development companies for 2025' },
    { rating: '5.0', title: 'Acknowledged among the top software consulting experts 2025' },
    { rating: '4.9', title: 'Recognized among top mobile app development companies 2025' },
    { rating: '4.9', title: 'Acclaimed as a top-rated software development company 2025' },
    { rating: '4.8', title: 'Ranked among top software development companies of 2025' }
  ];

  // Blogs
  const blogs = [
    { title: '10 Fintech Trends Shaping the Industry in 2026', category: 'Software Development', date: '28 Nov, 2025', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400' },
    { title: 'Hire Mobile App Developers: Guide to Find the Best Team', category: 'App Development', date: '28 Nov, 2025', image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400' },
    { title: 'How do you Develop a Perfect ERP System? Hire a Professional ERP Developer', category: 'Software development', date: '26 Nov, 2025', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400' }
  ];

  return (
    <>
      <div className="bg-white">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
          <div className="absolute inset-0 bg-black/40 z-0"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent)] z-0"></div>
          
          <div className="relative z-10 w-full">
            <Header />
            
            <div className="max-w-7xl mx-auto px-4 pt-32 pb-20 text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
                  We are a Software<br />
                  Development<br />
                  <span className="text-blue-400">Company</span>
                </h1>
                <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
                  We are your trusted development partner with just one goal in focus to build products that generate a lasting, profitable impact.
                </p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    Let's Discuss Your Idea
                  </Link>
                  <Link
                    href="/services"
                    className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
                  >
                      Explore Services
                    </Link>
                </motion.div>
              </motion.div>
                </div>
              </div>
            </section>

        {/* Clients Section */}
        <section className="py-16 bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4">
            <p className="text-sm text-gray-600 text-center mb-8 font-medium">Clients We've Served</p>
            <div className="flex flex-wrap items-center justify-center gap-12 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-300">
              {['Micheals', 'Dreamworks', 'Micheals', 'Dreamworks'].map((client, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="text-2xl md:text-3xl font-bold text-gray-400"
                >
                  {client}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">our success stories</h2>
              <Link href="/case-studies" className="text-blue-400 hover:text-blue-300 font-medium inline-flex items-center gap-2">
                More case studies
                <i className="ri-arrow-right-line"></i>
              </Link>
              </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {caseStudies.map((study, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-700"
                >
                  <div className="h-64 bg-gradient-to-br from-blue-500 to-purple-600 relative overflow-hidden">
                    <img src={study.image} alt={study.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{study.title}</h3>
                    <p className="text-gray-300 font-medium mb-2">{study.subtitle}</p>
                    <p className="text-gray-400">{study.description}</p>
                  </div>
                </motion.div>
              ))}
              </div>
            </div>
          </section>

        {/* Journey Section */}
          <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">our journey of building success</h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                We are a full-cycle product development company that combines creative thinking with technical expertise to create user-centric products that solve real problems and drive business growth.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16" ref={statsRef}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8"
              >
                <div className="text-6xl font-bold text-blue-600 mb-4">{projects}+</div>
                <div className="text-xl font-semibold text-gray-700">Completed Projects</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-center bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8"
              >
                <div className="text-6xl font-bold text-green-600 mb-4">{talented}+</div>
                <div className="text-xl font-semibold text-gray-700">Talented Cubixians</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8"
              >
                <div className="text-6xl font-bold text-purple-600 mb-4">{clients}+</div>
                <div className="text-xl font-semibold text-gray-700">Satisfied Clients</div>
              </motion.div>
                  </div>
                </div>
        </section>
                
        {/* Product Development Process */}
        <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                <span className="text-white">our product</span>
                <br />
                <span className="text-green-500">development process</span>
              </h2>
              <Link href="/about/our-process" className="text-white hover:text-green-400 font-medium inline-flex items-center gap-2 transition-colors">
                View More
                <i className="ri-arrow-right-line"></i>
              </Link>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Left Side - Steps with Timeline */}
              <div className="relative">
                {/* Vertical Timeline Line */}
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-700"></div>
                
                <div className="space-y-8 relative">
                  {processSteps.map((step, idx) => (
                    <motion.div
                      key={idx}
                      ref={(el) => (stepRefs.current[idx] = el)}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, threshold: 0.5 }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      onMouseEnter={() => setActiveProcess(idx)}
                      onClick={() => setActiveProcess(idx)}
                      className="relative pl-16 cursor-pointer group"
                    >
                      {/* Timeline Dot */}
                      <div className={`absolute left-0 top-2 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                        activeProcess === idx
                          ? 'bg-green-500 scale-110 shadow-lg shadow-green-500/50'
                          : 'bg-gray-700 group-hover:bg-gray-600'
                      }`}>
                        <div className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          activeProcess === idx ? 'bg-white' : 'bg-gray-400'
                        }`}></div>
                </div>
                
                      {/* Step Content */}
                      <div className={`transition-all duration-300 ${
                        activeProcess === idx ? 'transform translate-x-2' : ''
                      }`}>
                        <div className={`text-sm font-medium mb-2 transition-colors duration-300 ${
                          activeProcess === idx ? 'text-green-400' : 'text-gray-400'
                        }`}>
                          {step.number}
                  </div>
                        <h3 className={`text-3xl md:text-4xl font-bold mb-3 transition-colors duration-300 ${
                          activeProcess === idx ? 'text-green-500' : 'text-white'
                        }`}>
                          {step.title}
                        </h3>
                        <p className={`text-base leading-relaxed transition-colors duration-300 ${
                          activeProcess === idx ? 'text-white' : 'text-gray-400'
                        }`}>
                          {step.description}
                        </p>
                </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Right Side - Visual Element */}
              <div className="hidden lg:block sticky top-20">
                <motion.div
                  key={activeProcess}
                  initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
                  animate={{ 
                    opacity: 1, 
                    scale: 1, 
                    rotate: 0,
                    transition: { duration: 0.5, ease: "easeOut" }
                  }}
                  className="relative"
                >
                  {/* Dynamic Graphics based on active step */}
                  <div className="relative w-full h-[500px] flex items-center justify-center">
                    {getStepGraphic(activeProcess)}
                    
                    {/* Step Number Overlay */}
                    <motion.div
                      key={activeProcess}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 0.2, scale: 1 }}
                      transition={{ duration: 0.5 }}
                      className="absolute top-10 left-1/2 -translate-x-1/2 text-6xl font-bold text-green-500"
                    >
                      {processSteps[activeProcess].number}
                    </motion.div>
                  </div>
                </motion.div>
              </div>
              </div>
            </div>
          </section>

        {/* Technologies Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">technologies we use</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Hire from our pool of 350+ specialized experts in web, mobile, and software engineering, specializing in the latest technologies and frameworks, ready to scale your development teams effortlessly.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Object.entries(technologies).map(([category, techs], idx) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-4 capitalize">{category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {techs.map((tech, techIdx) => (
                      <span
                        key={techIdx}
                        className="px-4 py-2 bg-white rounded-lg text-sm font-medium text-gray-700 hover:bg-blue-600 hover:text-white transition-all duration-300 cursor-pointer"
                      >
                        {tech}
                      </span>
                    ))}
                </div>
                </motion.div>
              ))}
                </div>

            <div className="text-center mt-12">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Create a software development Team with us
              </Link>
              </div>
            </div>
          </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">our clients simply love what we do</h2>
              <p className="text-xl text-gray-300">
                Proud to serve as the innovation partner for industry leaders who have experienced our expertise and excellence firsthand.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-700"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-xl font-bold">
                      {testimonial.initials}
              </div>
                    <div>
                      <h4 className="text-lg font-bold text-white">{testimonial.name}</h4>
                      <p className="text-gray-300">{testimonial.role}</p>
                      <p className="text-sm text-gray-400">{testimonial.company}</p>
                    </div>
                  </div>
                  <p className="text-gray-200 leading-relaxed italic">"{testimonial.text}"</p>
                </motion.div>
              ))}
            </div>
                  </div>
        </section>

        {/* Industries Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">industries we serve</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                With a wide range of services and proven experience across major industries, we understand your challenges and deliver tailored solutions that overcome them and drive meaningful impact.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-gray-50 rounded-xl p-6 hover:bg-blue-50 hover:shadow-lg transition-all duration-300 group cursor-pointer"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center group-hover:bg-blue-700 transition-colors">
                      <i className={`${industry.icon} text-white text-2xl`}></i>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {industry.name}
                    </h3>
                  </div>
                  <p className="text-gray-600">{industry.description}</p>
                </motion.div>
              ))}
            </div>
                  </div>
        </section>

        {/* Awards Section */}
        <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">our awards and recognitions</h2>
              <p className="text-xl text-gray-300">
                Recognized globally for our industry-leading development expertise and innovative solutions. Creating innovative, user-friendly, and life-changing products is what we do!
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {awards.map((award, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 text-center border border-gray-700"
                >
                  <div className="text-4xl font-bold text-blue-400 mb-3">{award.rating}</div>
                  <p className="text-gray-300">{award.title}</p>
                </motion.div>
              ))}
                </div>
                    </div>
        </section>

        {/* Blogs Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">our blogs</h2>
              <Link href="/resources/blog" className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center gap-2">
                View All
                <i className="ri-arrow-right-line"></i>
              </Link>
                  </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {blogs.map((blog, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
                >
                  <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 overflow-hidden">
                    <img src={blog.image} alt={blog.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                      <span>{blog.category}</span>
                      <span>•</span>
                      <span>{blog.date}</span>
                </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-blue-600 transition-colors">
                      {blog.title}
                    </h3>
              </div>
                </motion.div>
              ))}
              </div>
            </div>
          </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-6xl font-bold mb-6">Let's bring your vision to life</h2>
              <p className="text-xl text-white/90 mb-8">
                Ready to transform your business with cutting-edge digital solutions?
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Get Started
                  </Link>
            </motion.div>
            </div>
          </section>
      </div>

      <Footer />
    </>
  );
}
