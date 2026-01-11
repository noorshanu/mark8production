/* eslint-disable @next/next/no-img-element */
'use client'

import React, { useEffect, useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiArrowRight, FiPlay } from 'react-icons/fi'

// Animated Counter Component
const AnimatedCounter = ({ value, label, delay = 0 }: { value: string; label: string; delay?: number }) => {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  useEffect(() => {
    if (!isInView) return

    // Extract number and suffix from value (e.g., "10K+" -> 10, "K+")
    const match = value.match(/(\d+)([K%+]*)/)
    if (!match) return

    const num = parseInt(match[1])
    const duration = 2000 // 2 seconds
    const steps = 60
    const increment = num / steps
    const stepDuration = duration / steps

    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= num) {
        setCount(num)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, stepDuration)

    return () => clearInterval(timer)
  }, [isInView, value])

  // Determine suffix from original value
  const suffix = value.includes('K') ? 'K+' : value.includes('%') ? '%' : '+'

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.5, delay }}
      className="text-center"
    >
      <motion.div
        key={count}
        initial={{ scale: 1.2, opacity: 0.5 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.2 }}
        className="text-3xl font-bold text-yellow-500"
      >
        {count}{suffix}
      </motion.div>
      <div className="text-sm text-gray-600 mt-1">{label}</div>
    </motion.div>
  )
}

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-white overflow-hidden pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="">
            {/* Main Tagline */}
            <h2 className="text-sm font-medium text-black bg-white-500 shadow-2xl px-4 py-2 border-2 border-yellow-500  font-tiktok-sans rounded-full w-fit">
            Aap Business Sambhalo,
           
            </h2>
            <h1 className="text-5xl sm:text-7xl font-bold leading-tight font-bangers">
              <motion.span
                className="text-yellow-500 inline-block"
                initial={{ opacity: 0, scale: 0, rotate: -180 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ 
                  duration: 0.6, 
                  ease: [0.34, 1.56, 0.64, 1] as const,
                  delay: 0.1
                }}
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
               Growth 
              </motion.span>
              
              <motion.span
                className="text-black inline-block"
                initial={{ opacity: 0, y: 50, scale: 0.5 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.8, 
                  ease: [0.68, -0.55, 0.265, 1.55] as const,
                  delay: 0.3
                }}
                whileHover={{ scale: 1.1, y: -5 }}
              >
               hum karwa 
              </motion.span>
              
              <br />
              
              <motion.span
                className="text-yellow-500 inline-block"
                initial={{ opacity: 0, x: -100, rotate: 180 }}
                animate={{ opacity: 1, x: 0, rotate: 0 }}
                transition={{ 
                  duration: 0.7, 
                  ease: [0.68, -0.6, 0.32, 1.6] as const,
                  delay: 0.5
                }}
                whileHover={{ scale: 1.1, rotate: -5 }}
              >
               denge.
              </motion.span>
            </h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
              className="text-sm md:text-base text-gray-700 "
            >
           Welcome to North East’s most creative marketing agency  <br/>where ideas never get boring, <span className="text-yellow-500 font-semibold">and results aren’t just promised… </span> <br /> they’re delivered.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
              className="flex flex-col sm:flex-row gap-4 mt-4"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(234, 179, 8, 0.3)' }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-2 bg-yellow-500 text-black font-bold text-lg rounded-lg flex items-center justify-center gap-2 hover:bg-yellow-600 transition-colors"
              >
               Let&apos;s Talk
                <FiArrowRight className="w-5 h-5" />
              </motion.button>
              
          
            </motion.div>

            {/* Stats or Features */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <AnimatedCounter value="10K+" label="Happy Clients" delay={0.7} />
              <AnimatedCounter value="50K+" label="Projects Done" delay={0.8} />
              <AnimatedCounter value="99%" label="Satisfaction" delay={0.9} />
            </div>
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
                    <div className="absolute bottom-20 right-20 w-32 h-32 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-20 blur-xl" />
                    
                    {/* Center Content */}
                    <div className="absolute inset-0 flex items-center justify-center z-20">
                      <motion.div
                 
                        className="text-center"
                      >
                     <img src="/hero.png" alt="Showcase Your Brand" className=" mx-auto  rounded-3xl h-[400px]"  />
                        <p className="mt-3 text-xl font-semibold text-gray-800 bg-white-500 shadow-2xl px-4 py-2 border-2 border-yellow-500 rounded-full w-fit mx-auto">
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