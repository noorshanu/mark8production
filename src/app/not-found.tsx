'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FiHome, FiArrowLeft } from 'react-icons/fi'
import Image from 'next/image'

export default function NotFound() {
  const funnyMessages = [
    'Oops! Page ko humne edit kar diya! 🎬',
    'Yeh page abhi shoot ho raha hai! 📹',
    'Content missing... just like your followers! 😅',
    '404 - Page ko delete kar diya gaya! 🗑️',
    'Yeh page abhi production mein hai! 🎥',
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-400 via-yellow-500 to-orange-500 flex items-center justify-center relative overflow-hidden">
      {/* Background Animated Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[
          { x: 200, y: -150, left: 10, top: 20, delay: 0, duration: 5 },
          { x: -180, y: 120, left: 80, top: 10, delay: 0.5, duration: 6 },
          { x: 150, y: 180, left: 20, top: 60, delay: 1, duration: 7 },
          { x: -200, y: -100, left: 70, top: 80, delay: 1.5, duration: 5.5 },
          { x: 100, y: 200, left: 50, top: 30, delay: 2, duration: 6.5 },
        ].map((config, i) => (
          <motion.div
            key={i}
            animate={{
              x: [0, config.x],
              y: [0, config.y],
              scale: [0, 1, 0],
              opacity: [0, 0.3, 0],
            }}
            transition={{
              duration: config.duration,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: config.delay,
            }}
            className="absolute w-20 h-20 bg-white/20 rounded-full blur-xl"
            style={{
              left: `${config.left}%`,
              top: `${config.top}%`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center px-4">
     

        {/* 404 Text */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6"
        >
          <motion.h1
            className="text-9xl md:text-[12rem] font-bold text-black mb-4"
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            4
            <motion.span
              animate={{
                rotate: [0, 360],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="inline-block text-white"
            >
              0
            </motion.span>
            4
          </motion.h1>
        </motion.div>

        {/* Funny Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-8"
        >
          <motion.div
            animate={{
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="text-6xl mb-4"
          >
            😅
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Page Not Found!
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-xl md:text-2xl text-black/80 font-semibold"
          >
            {funnyMessages[0]}
          </motion.p>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-lg text-black/70 mb-8 max-w-md mx-auto"
        >
          Lagta hai aap galat URL pe aa gaye hain. Chaliye home page pe wapas chale jate hain!
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link href="/">
            <motion.button
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="bg-black text-yellow-500 px-8 py-4 rounded-lg font-bold text-lg flex items-center gap-2 shadow-2xl hover:bg-gray-900 transition-colors"
            >
              <FiHome className="w-5 h-5" />
              Home Page
            </motion.button>
          </Link>

          <motion.button
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.history.back()}
            className="bg-white/90 text-black px-8 py-4 rounded-lg font-bold text-lg flex items-center gap-2 shadow-2xl hover:bg-white transition-colors"
          >
            <FiArrowLeft className="w-5 h-5" />
            Go Back
          </motion.button>
        </motion.div>

       
      </div>
    </div>
  )
}
