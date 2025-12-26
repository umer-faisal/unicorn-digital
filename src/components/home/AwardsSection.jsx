'use client';

import { motion } from 'framer-motion';
import { awards } from '../../data/homePageData';

export default function AwardsSection() {
  return (
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
  );
}

