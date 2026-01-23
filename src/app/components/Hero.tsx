'use client'

import React, { useEffect, useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiArrowRight, FiPlay } from 'react-icons/fi'
import Image from 'next/image'

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
            <h2 className="text-sm font-medium text-black bg-white-500 shadow-2xl px-4 py-2 border-2 border-yellow-500  font-tiktok-sans rounded-full w-fit marker mb-2">
            Aap Business Sambhalo,
           
            </h2>
            <h1 className="text-5xl sm:text-[76px] font-bold mb-2 ">
              <motion.span
                className="text-yellow-500 inline-block"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.4, 
                  ease: [0.4, 0, 0.2, 1] as const,
                  delay: 0.1
                }}
                whileHover={{ scale: 1.05 }}
                style={{ willChange: 'transform, opacity' }}
              >
               Growth 
              </motion.span>
              
              <motion.span
                className="text-black inline-block"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.5, 
                  ease: [0.4, 0, 0.2, 1] as const,
                  delay: 0.2
                }}
                whileHover={{ scale: 1.05 }}
                style={{ willChange: 'transform, opacity' }}
              >
               Hum karwa 
              </motion.span>
              
              <br />
              
              <motion.span
                className="text-yellow-500 inline-block"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ 
                  duration: 0.5, 
                  ease: [0.4, 0, 0.2, 1] as const,
                  delay: 0.3
                }}
                whileHover={{ scale: 1.05 }}
                style={{ willChange: 'transform, opacity' }}
              >
               Denge.
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
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
            className="relative"
            style={{ willChange: 'transform, opacity' }}
          >
            {/* Main Image Container */}
            <div className="relative">
              {/* Floating Animation Container */}
              <motion.div
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="relative z-10"
                style={{ willChange: 'transform' }}
              >
                <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-orange-500/20 z-10" />
                  
                  {/* Image Container */}
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-100 via-white to-orange-100">
                    {/* Center Content */}
                    <div className="absolute inset-0 flex items-center justify-center z-20">
                      <div className="text-center">
                        <div className="relative w-full h-[400px] mx-auto">
                          <Image
                            src="/hero.png"
                            alt="Showcase Your Brand"
                            fill
                            className="object-contain rounded-3xl"
                            priority
                            sizes="(max-width: 768px) 100vw, 50vw"
                          />
                        </div>
                        <p className="mt-3 text-xl font-semibold text-gray-800 bg-white-500 shadow-2xl px-4 py-2 border-2 border-yellow-500 rounded-full w-fit mx-auto">
                          Showcase Your Brand
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Decorative Background Elements - Reduced for performance */}
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.2, 0.3, 0.2],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute -top-10 -right-10 w-64 h-64 bg-yellow-400 rounded-full blur-3xl -z-10"
                style={{ willChange: 'transform, opacity' }}
              />
            </div>

            {/* Floating Badge */}
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute -top-6 -left-6 bg-yellow-500 text-black px-6 py-3 rounded-full shadow-lg z-20"
              style={{ willChange: 'transform' }}
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-black rounded-full animate-pulse" />
                <span className="font-bold">Live Now</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Background Decorative Elements - Reduced for performance */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute top-20 left-10 w-72 h-72 bg-yellow-200 rounded-full blur-3xl opacity-10"
          style={{ willChange: 'transform' }}
        />
      </div>
    </section>
  )
}

export default Hero