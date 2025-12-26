'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FiArrowRight, FiPlay } from 'react-icons/fi'

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-white overflow-hidden pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="space-y-8">
            {/* Main Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <h1 className="text-5xl  sm:text-7xl font-bold leading-tight">
                <span className="text-yellow-500">Dikhoge</span>  <span className="text-black">Tabhi to</span>
                <br />
                <span className="text-yellow-500">Bikoge</span>
              </h1>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
              className="text-xl md:text-2xl text-gray-700 leading-relaxed"
            >
              Show your products, showcase your brand, and watch your business grow. 
              <span className="text-yellow-500 font-semibold"> Visual storytelling</span> that converts.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(234, 179, 8, 0.3)' }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-yellow-500 text-black font-bold text-lg rounded-lg flex items-center justify-center gap-2 hover:bg-yellow-600 transition-colors"
              >
               Let&apos;s Talk
                <FiArrowRight className="w-5 h-5" />
              </motion.button>
              
          
            </motion.div>

            {/* Stats or Features */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-3 gap-6 pt-8"
            >
              {[
                { number: '10K+', label: 'Happy Clients' },
                { number: '50K+', label: 'Projects Done' },
                { number: '99%', label: 'Satisfaction' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold text-yellow-500">{stat.number}</div>
                  <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
            className="relative"
          >
            {/* Main Image Container */}
            <div className="relative">
              {/* Floating Animation Container */}
              <motion.div
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="relative z-10"
              >
                <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-orange-500/20 z-10" />
                  
                  {/* Dummy Image with Pattern */}
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-100 via-white to-orange-100">
                    {/* Pattern Overlay */}
                    <svg
                      className="absolute inset-0 w-full h-full opacity-10"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <defs>
                        <pattern
                          id="grid"
                          width="40"
                          height="40"
                          patternUnits="userSpaceOnUse"
                        >
                          <path
                            d="M 40 0 L 0 0 0 40"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1"
                          />
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill="url(#grid)" />
                    </svg>
                    
                    {/* Decorative Elements */}
                    <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-500 rounded-full opacity-20 blur-xl" />
                    <div className="absolute bottom-20 right-20 w-32 h-32 bg-orange-500 rounded-full opacity-20 blur-xl" />
                    
                    {/* Center Content */}
                    <div className="absolute inset-0 flex items-center justify-center z-20">
                      <motion.div
                        animate={{
                          scale: [1, 1.1, 1],
                          rotate: [0, 5, -5, 0],
                        }}
                        transition={{
                          duration: 6,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        }}
                        className="text-center"
                      >
                        <div className="w-48 h-48 mx-auto bg-gradient-to-br from-yellow-400 to-orange-500 rounded-3xl shadow-2xl flex items-center justify-center">
                          <div className="text-6xl font-bold text-white">📱</div>
                        </div>
                        <p className="mt-6 text-xl font-semibold text-gray-800">
                          Showcase Your Brand
                        </p>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Decorative Background Elements */}
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute -top-10 -right-10 w-64 h-64 bg-yellow-400 rounded-full blur-3xl -z-10"
              />
              <motion.div
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 0.5,
                }}
                className="absolute -bottom-10 -left-10 w-72 h-72 bg-orange-400 rounded-full blur-3xl -z-10"
              />
            </div>

            {/* Floating Badge */}
            <motion.div
              animate={{
                y: [0, -15, 0],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute -top-6 -left-6 bg-yellow-500 text-black px-6 py-3 rounded-full shadow-lg z-20"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-black rounded-full animate-pulse" />
                <span className="font-bold">Live Now</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute top-20 left-10 w-72 h-72 bg-yellow-200 rounded-full blur-3xl opacity-20"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-orange-200 rounded-full blur-3xl opacity-20"
        />
      </div>
    </section>
  )
}

export default Hero