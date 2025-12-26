'use client';

import { motion } from 'framer-motion';
import { clients } from '../../data/homePageData';

export default function ClientsSection() {
  return (
    <section className="py-16 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-sm text-gray-600 text-center mb-8 font-medium">Clients We've Served</p>
        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-300">
          {clients.map((client, idx) => (
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
  );
}

