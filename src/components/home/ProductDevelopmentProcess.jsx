'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import { processSteps } from '../../data/homePageData';

// Graphics for each step
const getStepGraphic = (stepIndex) => {
  switch(stepIndex) {
    case 0: // Ideate - Lightbulb with Brain
      return (
        <div className="w-full h-full flex items-center justify-center">
          <svg viewBox="0 0 400 500" className="w-full h-full max-w-[400px]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="bulbGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(255,255,255,0.15)" />
                <stop offset="100%" stopColor="rgba(255,255,255,0.05)" />
              </linearGradient>
            </defs>
            <path
              d="M200 50 Q150 50 120 80 L120 200 Q120 250 150 280 L150 350 Q150 380 180 380 L220 380 Q250 380 250 350 L250 280 Q280 250 280 200 L280 80 Q250 50 200 50 Z"
              fill="url(#bulbGradient)"
              stroke="rgba(255,255,255,0.4)"
              strokeWidth="2.5"
            />
            <path
              d="M200 120 Q160 120 140 150 Q130 180 140 210 Q150 240 180 250 Q200 260 220 250 Q250 240 260 210 Q270 180 260 150 Q240 120 200 120 Z"
              fill="rgba(255,248,220,0.9)"
            />
            <ellipse cx="200" cy="200" rx="65" ry="55" fill="rgba(255,165,0,0.5)">
              <animate attributeName="opacity" values="0.4;0.7;0.4" dur="2s" repeatCount="indefinite"/>
            </ellipse>
            <path d="M200 350 L180 380 L220 380 Z" fill="rgba(255,20,147,0.7)"/>
            <line x1="200" y1="280" x2="200" y2="350" stroke="rgba(64,224,208,0.9)" strokeWidth="4" strokeLinecap="round"/>
            <ellipse cx="200" cy="200" rx="90" ry="110" fill="rgba(255,255,255,0.15)">
              <animate attributeName="opacity" values="0.1;0.25;0.1" dur="3s" repeatCount="indefinite"/>
            </ellipse>
          </svg>
        </div>
      );
    case 1: // Design - Design Tools
      return (
        <div className="w-full h-full flex items-center justify-center">
          <svg viewBox="0 0 400 500" className="w-full h-full max-w-[400px]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="designGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(34,197,94,0.3)" />
                <stop offset="100%" stopColor="rgba(34,197,94,0.1)" />
              </linearGradient>
            </defs>
            <rect x="80" y="80" width="240" height="180" rx="15" fill="url(#designGradient)" stroke="rgba(34,197,94,0.6)" strokeWidth="3"/>
            <circle cx="140" cy="150" r="25" fill="rgba(34,197,94,0.7)"/>
            <rect x="180" y="135" width="120" height="25" rx="6" fill="rgba(34,197,94,0.7)"/>
            <rect x="180" y="170" width="100" height="25" rx="6" fill="rgba(34,197,94,0.5)"/>
            <path d="M200 300 L150 400 L250 400 Z" fill="rgba(34,197,94,0.4)"/>
            <circle cx="200" cy="360" r="35" fill="rgba(34,197,94,0.2)" stroke="rgba(34,197,94,0.6)" strokeWidth="2.5"/>
          </svg>
        </div>
      );
    case 2: // Develop - Code
      return (
        <div className="w-full h-full flex items-center justify-center">
          <svg viewBox="0 0 400 500" className="w-full h-full max-w-[400px]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="codeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(59,130,246,0.3)" />
                <stop offset="100%" stopColor="rgba(59,130,246,0.1)" />
              </linearGradient>
            </defs>
            <rect x="100" y="100" width="200" height="220" rx="8" fill="url(#codeGradient)" stroke="rgba(59,130,246,0.6)" strokeWidth="3"/>
            <text x="200" y="170" textAnchor="middle" fill="rgba(59,130,246,0.9)" fontSize="32" fontFamily="monospace" fontWeight="bold">{'<'}</text>
            <text x="200" y="210" textAnchor="middle" fill="rgba(59,130,246,0.9)" fontSize="32" fontFamily="monospace" fontWeight="bold">{'/'}</text>
            <text x="200" y="250" textAnchor="middle" fill="rgba(59,130,246,0.9)" fontSize="32" fontFamily="monospace" fontWeight="bold">{'>'}</text>
            <circle cx="200" cy="360" r="45" fill="rgba(59,130,246,0.3)"/>
            <rect x="140" y="330" width="120" height="6" rx="3" fill="rgba(59,130,246,0.6)"/>
          </svg>
        </div>
      );
    case 3: // Test - Checkmark/Quality
      return (
        <div className="w-full h-full flex items-center justify-center">
          <svg viewBox="0 0 400 500" className="w-full h-full max-w-[400px]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="testGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(234,179,8,0.3)" />
                <stop offset="100%" stopColor="rgba(234,179,8,0.1)" />
              </linearGradient>
            </defs>
            <path d="M200 80 L270 200 L130 200 Z" fill="url(#testGradient)" stroke="rgba(234,179,8,0.6)" strokeWidth="3"/>
            <circle cx="200" cy="250" r="70" fill="rgba(234,179,8,0.2)" stroke="rgba(234,179,8,0.6)" strokeWidth="3"/>
            <path d="M175 250 L195 270 L225 240" stroke="rgba(234,179,8,0.9)" strokeWidth="5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M200 310 L175 380 L225 380 Z" fill="rgba(234,179,8,0.5)"/>
          </svg>
        </div>
      );
    case 4: // Launch - Rocket
      return (
        <div className="w-full h-full flex items-center justify-center">
          <svg viewBox="0 0 400 500" className="w-full h-full max-w-[400px]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="launchGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(239,68,68,0.3)" />
                <stop offset="100%" stopColor="rgba(239,68,68,0.1)" />
              </linearGradient>
            </defs>
            <path d="M200 400 L175 340 L200 280 L225 340 Z" fill="url(#launchGradient)" stroke="rgba(239,68,68,0.7)" strokeWidth="3"/>
            <ellipse cx="200" cy="270" rx="35" ry="70" fill="rgba(239,68,68,0.4)"/>
            <circle cx="200" cy="190" r="25" fill="rgba(239,68,68,0.6)">
              <animate attributeName="opacity" values="0.6;0.9;0.6" dur="1.5s" repeatCount="indefinite"/>
            </circle>
            <path d="M200 160 L185 130 L200 120 L215 130 Z" fill="rgba(239,68,68,0.7)"/>
            <ellipse cx="200" cy="145" rx="18" ry="30" fill="rgba(239,68,68,0.5)"/>
          </svg>
        </div>
      );
    case 5: // Support - Help/Support
      return (
        <div className="w-full h-full flex items-center justify-center">
          <svg viewBox="0 0 400 500" className="w-full h-full max-w-[400px]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="supportGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(168,85,247,0.3)" />
                <stop offset="100%" stopColor="rgba(168,85,247,0.1)" />
              </linearGradient>
            </defs>
            <circle cx="200" cy="200" r="90" fill="url(#supportGradient)" stroke="rgba(168,85,247,0.6)" strokeWidth="3"/>
            <path d="M200 140 Q225 140 225 165 Q225 190 200 190 Q175 190 175 165 Q175 140 200 140" fill="rgba(168,85,247,0.5)"/>
            <path d="M200 220 Q170 240 150 270 Q170 300 200 300 Q230 300 250 270 Q230 240 200 220" fill="rgba(168,85,247,0.5)"/>
            <circle cx="200" cy="360" r="55" fill="rgba(168,85,247,0.15)" stroke="rgba(168,85,247,0.4)" strokeWidth="2.5"/>
          </svg>
        </div>
      );
    default:
      return null;
  }
};

export default function ProductDevelopmentProcess() {
  const [activeProcess, setActiveProcess] = useState(0);
  const stepRefs = useRef([]);

  // Scroll-based active step detection - Optimized for performance
  useEffect(() => {
    let ticking = false;
    let lastActiveIndex = 0;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const viewportCenter = window.innerHeight / 2;
          let closestIndex = lastActiveIndex;
          let minDistance = Infinity;

          stepRefs.current.forEach((ref, idx) => {
            if (!ref) return;

            const rect = ref.getBoundingClientRect();
            
            // Only check if element is in viewport
            if (rect.bottom > 0 && rect.top < window.innerHeight) {
              const elementCenter = rect.top + rect.height / 2;
              const distance = Math.abs(viewportCenter - elementCenter);

              if (distance < minDistance) {
                minDistance = distance;
                closestIndex = idx;
              }
            }
          });

          // Only update state if index changed
          if (closestIndex !== lastActiveIndex) {
            lastActiveIndex = closestIndex;
            setActiveProcess(closestIndex);
          }
          
          ticking = false;
        });
        ticking = true;
      }
    };

    // Initial check with a small delay to ensure refs are ready
    const timeoutId = setTimeout(() => {
      handleScroll();
    }, 100);

    // Listen to scroll events with passive for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
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
                  viewport={{ once: true, threshold: 0.4 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="relative pl-16 group"
                >
                  {/* Timeline Dot */}
                  <div className={`absolute left-0 top-2 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-700 ease-in-out ${
                    activeProcess === idx
                      ? 'bg-green-500 scale-110 shadow-lg shadow-green-500/50'
                      : 'bg-gray-700'
                  }`}>
                    <div className={`w-3 h-3 rounded-full transition-all duration-700 ease-in-out ${
                      activeProcess === idx ? 'bg-white' : 'bg-gray-400'
                    }`}></div>
                  </div>

                  {/* Step Content */}
                  <div className={`transition-all duration-700 ease-in-out ${
                    activeProcess === idx ? 'transform translate-x-2' : ''
                  }`}>
                    <div className={`text-sm font-medium mb-2 transition-colors duration-700 ease-in-out ${
                      activeProcess === idx ? 'text-green-400' : 'text-gray-400'
                    }`}>
                      {step.number}
                    </div>
                    <h3 className={`text-3xl md:text-4xl font-bold mb-3 transition-colors duration-700 ease-in-out ${
                      activeProcess === idx ? 'text-green-500' : 'text-white'
                    }`}>
                      {step.title}
                    </h3>
                    <p className={`text-base leading-relaxed transition-colors duration-700 ease-in-out ${
                      activeProcess === idx ? 'text-white' : 'text-gray-400'
                    }`}>
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Side - Visual Element with Frame */}
          <div className="hidden lg:block sticky top-20">
            <motion.div
              key={activeProcess}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                transition: { duration: 1, ease: [0.25, 0.1, 0.25, 1] }
              }}
              className="relative"
            >
              {/* Frame Container */}
              <div className="relative w-full h-[500px] bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl border-2 border-gray-700/50 backdrop-blur-sm p-8 flex items-center justify-center overflow-hidden shadow-2xl">
                {/* Inner Frame Glow */}
                <div className="absolute inset-4 rounded-xl border border-gray-600/30"></div>
                
                {/* Dynamic Graphics with smooth transition */}
                <motion.div
                  key={activeProcess}
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -30, scale: 0.95 }}
                  transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
                  className="relative z-10 w-full h-full flex items-center justify-center"
                >
                  {getStepGraphic(activeProcess)}
                </motion.div>
                
                {/* Step Number Overlay */}
                <motion.div
                  key={activeProcess}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 0.15, scale: 1 }}
                  transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
                  className="absolute top-12 left-1/2 -translate-x-1/2 text-7xl font-bold text-green-500 z-0"
                >
                  {processSteps[activeProcess].number}
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

