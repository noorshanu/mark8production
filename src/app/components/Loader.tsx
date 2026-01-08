'use client'

import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const Loader = () => {
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => setLoading(false), 500)
          return 100
        }
        return prev + 2
      })
    }, 50)

    return () => clearInterval(interval)
  }, [])

  const funnyMessages = [
    'Aapke brand ko polish kar rahe hain... ✨',
    'Creativity load ho rahi hai... 🎨',
    'Ideas generate kar rahe hain... 💡',
    'Content ban raha hai... 📱',
    'Almost there... 🚀',
  ]

  const [currentMessage, setCurrentMessage] = useState(0)

  useEffect(() => {
    const messageInterval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % funnyMessages.length)
    }, 800)

    return () => clearInterval(messageInterval)
  }, [])

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[9999] bg-gradient-to-br from-yellow-400 via-yellow-500 to-orange-500 flex items-center justify-center"
        >
          <div className="text-center">
            {/* Logo with Animation */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{
                duration: 0.8,
                ease: [0.34, 1.56, 0.64, 1] as const,
              }}
              className="mb-8"
            >
              <motion.div
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="relative w-48 h-24 mx-auto"
              >
                <Image
                  src="/logo.png"
                  alt="Mark8 Production Logo"
                  width={192}
                  height={96}
                  className="object-contain"
                />
              </motion.div>
            </motion.div>

            {/* Funny Message */}
            <motion.div
              key={currentMessage}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="mb-8"
            >
              <p className="text-2xl md:text-3xl font-bold text-black">
                {funnyMessages[currentMessage]}
              </p>
            </motion.div>

            {/* Progress Bar */}
            <div className="w-80 md:w-96 mx-auto mb-4">
              <div className="bg-black/20 rounded-full h-4 overflow-hidden shadow-inner">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  className="h-full bg-black rounded-full relative overflow-hidden"
                >
                  <motion.div
                    animate={{
                      x: ['-100%', '100%'],
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  />
                </motion.div>
              </div>
              <motion.p
                key={progress}
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                className="text-black font-bold text-lg mt-2"
              >
                {progress}%
              </motion.p>
            </div>

            {/* Animated Emojis */}
            {/* <div className="flex justify-center gap-4 mt-8">
              {['🎬', '📱', '🎨', '🚀', '💡'].map((emoji, index) => (
                <motion.div
                  key={index}
                  animate={{
                    y: [0, -15, 0],
                    rotate: [0, 360],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: index * 0.2,
                  }}
                  className="text-4xl"
                >
                  {emoji}
                </motion.div>
              ))}
            </div> */}

            {/* Loading Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {[0, 1, 2].map((index) => (
                <motion.div
                  key={index}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: index * 0.2,
                  }}
                  className="w-3 h-3 bg-black rounded-full"
                />
              ))}
            </div>
          </div>

          {/* Background Animated Elements */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {[
              { x: 100, y: -80 },
              { x: -120, y: 60 },
              { x: 150, y: 100 },
              { x: -90, y: -120 },
              { x: 80, y: 140 },
            ].map((offset, i) => (
              <motion.div
                key={i}
                animate={{
                  x: [0, offset.x],
                  y: [0, offset.y],
                  scale: [0, 1, 0],
                  opacity: [0, 0.3, 0],
                }}
                transition={{
                  duration: 3 + i,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: i * 0.5,
                }}
                className="absolute w-32 h-32 bg-white/20 rounded-full blur-2xl"
                style={{
                  left: `${20 + i * 15}%`,
                  top: `${20 + i * 15}%`,
                }}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Loader
