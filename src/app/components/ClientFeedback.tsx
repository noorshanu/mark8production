'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { FiStar } from 'react-icons/fi'
import Image from 'next/image'

const ClientFeedback = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const testimonials = [
    {
      quote: "I was impressed by the service — every project is bursting with creativity! And I could really tell that they use high-quality strategies. The team was friendly and attentive, going the extra mile. I'll definitely be back for more!",
        name: "Tamar Mendelson",
      designation: "Happy Client",
        src: "https://images.unsplash.com/photo-1512316609839-ce289d3eba0a?q=80&w=1368&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: 5,
    },
    {
      quote: "This agency exceeded all expectations! The atmosphere is inviting, and the team truly goes above and beyond to ensure a fantastic experience. I'll definitely keep returning for more exceptional creative work.",
        name: "Joe Charlescraft",
      designation: "Satisfied Customer",
        src: "https://images.unsplash.com/photo-1628749528992-f5702133b686?q=80&w=1368&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D",
      rating: 5,
    },
    {
      quote: "Mark8 Production is a hidden gem! From the moment I contacted them, I knew I was in for a treat. The impeccable service and overall attention to detail created a memorable experience. I highly recommend it!",
        name: "Martina Edelweist",
      designation: "Loyal Client",
        src: "https://images.unsplash.com/photo-1524267213992-b76e8577d046?q=80&w=1368&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D",
      rating: 5,
    },
  ]

  const handleNext = () => {
    setIsAutoPlaying(false)
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const handlePrev = () => {
    setIsAutoPlaying(false)
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length)
      }, 5000)
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isAutoPlaying, testimonials.length])

  const getImageTransform = (index: number) => {
    const offset = (index - activeIndex + testimonials.length) % testimonials.length
    const isActive = offset === 0

    if (isActive) {
      return {
        x: 0,
        y: 0,
        scale: 1,
        rotateY: 0,
        zIndex: testimonials.length,
                opacity: 1,
      }
    } else if (offset === 1 || offset === testimonials.length - 1) {
      return {
        x: '20%',
        y: '-8%',
        scale: 0.85,
        rotateY: -15,
        zIndex: testimonials.length - 1,
        opacity: 0.8,
      }
    } else {
      return {
        x: '-20%',
        y: '-8%',
        scale: 0.85,
        rotateY: 15,
        zIndex: testimonials.length - 2,
        opacity: 0.8,
      }
    }
  }

  return (
    <section className="relative py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            What Our <span className="text-yellow-500">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real feedback from satisfied customers
          </p>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mt-6 rounded-full" />
        </motion.div>

        {/* Testimonial Container */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
            {/* Image Container */}
            <div className="relative h-96" style={{ perspective: '1000px' }}>
              <div className="relative w-full h-full">
                {testimonials.map((testimonial, index) => {
                  const transform = getImageTransform(index)
                  return (
                    <motion.div
                      key={index}
                      initial={false}
                      animate={{
                        x: transform.x,
                        y: transform.y,
                        scale: transform.scale,
                        rotateY: transform.rotateY,
                        opacity: transform.opacity,
                      }}
                      transition={{
                        duration: 0.8,
                        ease: [0.4, 0, 0.2, 1],
                      }}
                      style={{
                        zIndex: transform.zIndex,
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        transformStyle: 'preserve-3d',
                      }}
                    >
                      <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
                        <Image
                          src={testimonial.src}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>

            {/* Content Section */}
            <div className="flex flex-col justify-between">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-2xl font-bold text-black mb-2">
                    {testimonials[activeIndex].name}
                  </h3>
                  <p className="text-sm text-gray-500 mb-6">
                    {testimonials[activeIndex].designation}
                  </p>

                  {/* Star Rating */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{
                          opacity: i < testimonials[activeIndex].rating ? 1 : 0.3,
                          scale: 1,
                        }}
                        transition={{ delay: i * 0.1, duration: 0.3 }}
                      >
                        <FiStar
                          className={`w-5 h-5 ${
                            i < testimonials[activeIndex].rating
                              ? 'text-yellow-500 fill-yellow-500'
                              : 'text-gray-300'
                          }`}
                        />
                      </motion.div>
                    ))}
                  </div>

                  <p className="text-lg text-gray-700 leading-relaxed">
                    {testimonials[activeIndex].quote.split(' ').map((word, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          delay: i * 0.02,
                          duration: 0.2,
                        }}
                        className="inline-block mr-1"
                      >
                        {word}
                      </motion.span>
                    ))}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Arrows */}
              <div className="flex gap-4 mt-8 md:mt-0">
                <motion.button
                  onClick={handlePrev}
                  whileHover={{ scale: 1.1, backgroundColor: '#fdd820' }}
                  whileTap={{ scale: 0.9 }}
                  className="w-7 h-7 rounded-full bg-black flex items-center justify-center text-white transition-colors"
                  aria-label="Previous testimonial"
                >
                  <FiChevronLeft className="w-4 h-4" />
                </motion.button>
                <motion.button
                  onClick={handleNext}
                  whileHover={{ scale: 1.1, backgroundColor: '#fdd820' }}
                  whileTap={{ scale: 0.9 }}
                  className="w-7 h-7 rounded-full bg-black flex items-center justify-center text-white transition-colors"
                  aria-label="Next testimonial"
                >
                  <FiChevronRight className="w-4 h-4" />
                </motion.button>
              </div>
            </div>
          </div>
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
          className="absolute top-20 left-10 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl"
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
          className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"
        />
      </div>
    </section>
  )
}

export default ClientFeedback
