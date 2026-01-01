'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FiArrowRight, FiInstagram, FiVideo, FiLayers, FiImage, FiUsers, FiGlobe, FiTrendingUp, FiCamera } from 'react-icons/fi'

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Social Media Marketing & Management',
      description: 'Creating engaging content and managing profiles across platforms. Specialized in Instagram reels, posts, story strategies, and Meta Ads with targeted campaigns to maximize your brand reach.',
      icon: FiInstagram,
      gradient: 'from-yellow-400 to-orange-500',
    },
    {
      id: 2,
      title: 'Creative Reels Production',
      description: 'High-engagement short-form video content that captures attention and drives conversions. Professional reel production optimized for maximum social media impact.',
      icon: FiVideo,
      gradient: 'from-yellow-500 to-red-500',
    },
    {
      id: 3,
      title: 'CGI Ads & Product Visualizations',
      description: 'Stunning computer-generated imagery for advertisements and promotional content. Bring your products to life with photorealistic 3D visualizations.',
      icon: FiLayers,
      gradient: 'from-orange-400 to-yellow-500',
    },
    {
      id: 4,
      title: 'Graphic Designing',
      description: 'Complete branding solutions including logo design, branding assets, posters, banners, and marketing materials. Professional designs that make your brand stand out.',
      icon: FiImage,
      gradient: 'from-yellow-400 to-yellow-600',
    },
    {
      id: 5,
      title: 'Influencer Marketing',
      description: 'Strategic campaigns leveraging influencers to promote your brand authentically. Connect with the right influencers to reach your target audience effectively.',
      icon: FiUsers,
      gradient: 'from-orange-500 to-yellow-400',
    },
    {
      id: 6,
      title: 'Website Designing & Development',
      description: 'Modern, responsive websites that perfectly represent your brand online. Custom-built solutions that are fast, beautiful, and conversion-optimized.',
      icon: FiGlobe,
      gradient: 'from-yellow-500 to-orange-400',
    },
    {
      id: 7,
      title: 'Performance Marketing',
      description: 'Data-driven advertising campaigns focused on conversions and ROI. Advanced analytics and optimization strategies to maximize your marketing performance.',
      icon: FiTrendingUp,
      gradient: 'from-red-500 to-orange-500',
    },
    {
      id: 8,
      title: 'Drone Shoots & Videography',
      description: 'Aerial cinematography and professional videography services. Capture stunning visuals from unique perspectives that elevate your brand storytelling.',
      icon: FiCamera,
      gradient: 'from-yellow-400 to-red-400',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1] as const,
      },
    },
  }

  return (
    <section className="relative bg-white py-20 overflow-hidden">
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
          What We  <span className="text-yellow-500">Actually Do ?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Hum sirf camera nahi chalate,
          story chalate hain.
          </p>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mt-6 rounded-full" />
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service) => {
            const IconComponent = service.icon
            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative"
              >
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-gray-100 hover:border-yellow-500 h-full flex flex-col">
                  {/* Image Placeholder */}
                  <div className="relative h-38 bg-gray-200 overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-20`} />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                        className="relative z-10"
                      >
                        <IconComponent className="w-16 h-16 text-black" />
                      </motion.div>
                    </div>
                    {/* Decorative Pattern */}
                    <div className="absolute inset-0 opacity-10">
                      <svg width="100%" height="100%">
                        <pattern id={`pattern-${service.id}`} x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                          <circle cx="20" cy="20" r="2" fill="black" />
                        </pattern>
                        <rect width="100%" height="100%" fill={`url(#pattern-${service.id})`} />
                      </svg>
                    </div>
                    {/* Hover Overlay */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-90 transition-opacity duration-300`}
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    {/* Icon Badge */}
                    {/* <div className="mb-4">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                        className={`w-12 h-12 rounded-lg bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-md`}
                      >
                        <IconComponent className="w-6 h-6 text-white" />
                      </motion.div>
                    </div> */}

                    {/* Title */}
                    <h3 className="text-xl font-bold text-black mb-3 group-hover:text-yellow-500 transition-colors">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-4">
                      {service.description}
                    </p>

                    {/* CTA Arrow */}
                    {/* <motion.div
                      initial={{ x: 0 }}
                      whileHover={{ x: 5 }}
                      className="flex items-center text-yellow-500 font-semibold text-sm group-hover:text-black transition-colors"
                    >
                      Learn More
                      <FiArrowRight className="ml-2 w-4 h-4" />
                    </motion.div> */}
                  </div>

                  {/* Bottom Accent Line */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    className={`h-1 bg-gradient-to-r ${service.gradient}`}
                  />
                </div>
              </motion.div>
            )
          })}
        </motion.div>
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
          className="absolute top-20 left-10 w-96 h-96 bg-yellow-200 rounded-full blur-3xl opacity-10"
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
          className="absolute bottom-20 right-10 w-96 h-96 bg-orange-200 rounded-full blur-3xl opacity-10"
        />
      </div>
    </section>
  )
}

export default Services