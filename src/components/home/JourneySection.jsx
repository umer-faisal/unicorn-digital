'use client';

import { motion, useInView } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

export default function JourneySection() {
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

  return (
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
  );
}

