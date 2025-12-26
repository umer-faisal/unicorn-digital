'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { caseStudies } from '../../data/homePageData';

export default function SuccessStories() {
  return (
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
  );
}

