'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiChevronLeft, FiChevronRight, FiLinkedin, FiInstagram, FiTwitter } from 'react-icons/fi'
import Image from 'next/image'

const OurTeam = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const teamMembers = [
    {
      id: 1,
      name: 'Rahul',
      role: 'Creative Director',
      description: 'Leading our creative vision with 10+ years of experience in digital marketing and brand strategy.',
      image: '/team/rahul.jpeg',
      gradient: 'from-orange-500 to-red-500',
      social: {
     
        instagram: '#',
        twitter: '#',
      },
    },
    {
      id: 2,
      name: 'Ismile',
      role: 'Video Production Lead',
      description: 'Expert in cinematic storytelling and video production, bringing brands to life through visual narratives.',
     
      image: '/team/ismile.JPG',
      gradient: 'from-yellow-500 to-yellow-600',
      social: {
        
        instagram: '#',
        twitter: '#',
      },
    },
    {
      id: 3,
      name: 'Noor',
      role: 'Full Stack Developer',
      description: 'Full-stack developer specializing in modern web technologies and creating seamless user experiences.',

      image: '/team/Noor.png',
      gradient: 'from-yellow-400 to-orange-500',
      social: {
   
        instagram: '#',
        twitter: '#',
      },
    },

   
  ]

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % teamMembers.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + teamMembers.length) % teamMembers.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <section className="relative py-20 overflow-hidden">
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
            Meet Our <span className="text-yellow-500">Team</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            The talented individuals behind our success
          </p>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mt-6 rounded-full" />
        </motion.div>

        {/* Slider Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Slider */}
          <div className="relative h-[600px] overflow-hidden rounded-2xl">
            <AnimatePresence mode="wait">
              {teamMembers.map((member, index) => {
                if (index !== currentIndex) return null

                return (
                  <motion.div
                    key={member.id}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0"
                  >
                    <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-2xl border-2 border-gray-800 h-full flex flex-col lg:flex-row">
                      {/* Image Section */}
                      <div className="lg:w-1/2 relative overflow-hidden">
                        <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-90`}>
                          {/* Pattern Overlay */}
                          <div className="absolute inset-0 opacity-20">
                            <svg width="100%" height="100%">
                              <pattern
                                id={`team-pattern-${member.id}`}
                                x="0"
                                y="0"
                                width="40"
                                height="40"
                                patternUnits="userSpaceOnUse"
                              >
                                <circle cx="20" cy="20" r="2" fill="white" />
                              </pattern>
                              <rect width="100%" height="100%" fill={`url(#team-pattern-${member.id})`} />
                            </svg>
                          </div>
                        </div>

                        {/* Member Image */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <motion.div
                            animate={{
                              scale: [1, 1.05, 1],
                            }}
                            transition={{
                              duration: 4,
                              repeat: Infinity,
                              ease: 'easeInOut',
                            }}
                            className="relative w-full h-full"
                          >
                            <Image
                              src={member.image}
                              alt={member.name}
                              fill
                              className="object-cover object-center"
                              sizes="(max-width: 768px) 100vw, 50vw"
                            />
                          </motion.div>
                        </div>

                        {/* Social Links */}
                        <div className="absolute bottom-8 left-8 flex gap-3">
                          {[
                            { icon: FiInstagram, href: member.social.instagram, label: 'Instagram' },
                            { icon: FiTwitter, href: member.social.twitter, label: 'Twitter' },
                          ].map((social) => {
                            const Icon = social.icon
                            return (
                              <motion.a
                                key={social.label}
                                href={social.href}
                                whileHover={{ scale: 1.2, y: -5 }}
                                whileTap={{ scale: 0.9 }}
                                className="w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-yellow-500 hover:text-black transition-colors"
                                aria-label={social.label}
                              >
                                <Icon className="w-5 h-5" />
                              </motion.a>
                            )
                          })}
                        </div>
                      </div>

                      {/* Content Section */}
                      <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center bg-gray-900">
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                        >
                          <div className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${member.gradient} text-black text-sm font-semibold mb-4`}>
                            {member.role}
                          </div>
                          <h3 className="text-4xl font-bold text-white mb-4">{member.name}</h3>
                          <p className="text-gray-400 text-lg leading-relaxed mb-8">
                            {member.description}
                          </p>

                          {/* Decorative Line */}
                          <div className={`h-1 w-24 bg-gradient-to-r ${member.gradient} rounded-full`} />
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <motion.button
            onClick={prevSlide}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-black shadow-lg hover:bg-yellow-600 transition-colors z-10"
            aria-label="Previous slide"
          >
            <FiChevronLeft className="w-6 h-6" />
          </motion.button>

          <motion.button
            onClick={nextSlide}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-black shadow-lg hover:bg-yellow-600 transition-colors z-10"
            aria-label="Next slide"
          >
            <FiChevronRight className="w-6 h-6" />
          </motion.button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {teamMembers.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-yellow-500 w-8'
                    : 'bg-gray-700 hover:bg-gray-600'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
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
          className="absolute top-20 left-10 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl"
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
          className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"
        />
      </div>
    </section>
  )
}

export default OurTeam
