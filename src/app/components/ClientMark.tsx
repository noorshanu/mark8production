'use client'

import React from 'react'
import Marquee from 'react-fast-marquee'
import { motion } from 'framer-motion'

const ClientMark = () => {
  // Client/Brand data - you can replace these with actual client logos
  const clients = [
    { name: 'TechCorp', logo: '🚀' },
    { name: 'InnovateHub', logo: '💡' },
    { name: 'DigitalFlow', logo: '🌊' },
    { name: 'CloudSync', logo: '☁️' },
    { name: 'NextGen', logo: '⚡' },
    { name: 'SmartBiz', logo: '📊' },
    { name: 'FutureTech', logo: '🔮' },
    { name: 'DataVault', logo: '💾' },
    { name: 'CodeCraft', logo: '💻' },
    { name: 'PixelPerfect', logo: '🎨' },
    { name: 'WebWizards', logo: '✨' },
    { name: 'BrandBoost', logo: '📈' },
  ]

  // Duplicate array for seamless loop
  const duplicatedClients = [...clients, ...clients]

  return (
    <section className="relative bg-[#fdd820]  py-16 overflow-hidden">
      {/* Background Gradient Overlay */}

      
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12 relative z-10"
      >
        <p className="text-sm font-semibold text-gray-600 uppercase tracking-wider mb-2">
          Trusted By
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Brands We Work With
        </h2>
        <div className="w-24 h-1 bg-yellow-500 mx-auto mt-4 rounded-full" />
      </motion.div>

      {/* Marquee Container */}
      <div className="relative">
        {/* Gradient Fade on Left */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 to-transparent z-20 pointer-events-none" />
        
        {/* Gradient Fade on Right */}
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-50 to-transparent z-20 pointer-events-none" />

        {/* First Marquee - Scroll Right */}
        <Marquee
          speed={50}
          gradient={false}
          pauseOnHover={true}
          className="py-4"
        >
          {duplicatedClients.map((client, index) => (
            <motion.div
              key={`${client.name}-${index}`}
              whileHover={{ scale: 1.1, y: -5 }}
              className="mx-8 flex flex-col items-center justify-center min-w-[200px]"
            >
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 group">
                <div className="text-5xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {client.logo}
                </div>
                <h3 className="text-lg font-bold text-gray-800 group-hover:text-yellow-500 transition-colors">
                  {client.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </Marquee>

        {/* Second Marquee - Scroll Left (Reverse) */}
        <Marquee
          speed={50}
          direction="right"
          gradient={false}
          pauseOnHover={true}
          className="py-4 mt-4"
        >
          {duplicatedClients.reverse().map((client, index) => (
            <motion.div
              key={`reverse-${client.name}-${index}`}
              whileHover={{ scale: 1.1, y: -5 }}
              className="mx-8 flex flex-col items-center justify-center min-w-[200px]"
            >
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 group">
                <div className="text-5xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {client.logo}
                </div>
                <h3 className="text-lg font-bold text-gray-800 group-hover:text-yellow-500 transition-colors">
                  {client.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </Marquee>
      </div>

      {/* Bottom Decorative Line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mt-12 h-px bg-gradient-to-r from-transparent via-yellow-500 to-transparent max-w-4xl mx-auto"
      />
    </section>
  )
}

export default ClientMark