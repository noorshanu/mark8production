'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FiInstagram, FiVideo, FiLayers, FiImage, FiUsers, FiGlobe, FiTrendingUp, FiCamera } from 'react-icons/fi'
import Image from 'next/image'

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Social Media Marketing & Management',
      description: 'Creating engaging content and managing profiles across platforms. Specialized in Instagram reels, posts, story strategies, and Meta Ads with targeted campaigns to maximize your brand reach.',
      icon: FiInstagram,
      gradient: 'from-yellow-400 to-orange-500',
      image: '/Services/instagram.avif',
    },
    {
      id: 2,
      title: 'Creative Reels Production',
      description: 'High-engagement short-form video content that captures attention and drives conversions. Professional reel production optimized for maximum social media impact.',
      icon: FiVideo,
      gradient: 'from-yellow-500 to-red-500',
      image: '/Services/reel.jpg',
    },
    {
      id: 3,
      title: 'CGI Ads ',
      description: 'Stunning computer-generated imagery for advertisements and promotional content. Bring your products to life with photorealistic 3D visualizations.',
      icon: FiLayers,
      gradient: 'from-orange-400 to-yellow-500',
      image: '/Services/cgi.jpg',
    },
    {
      id: 4,
      title: 'Graphic Designing',
      description: 'Complete branding solutions including logo design, branding assets, posters, banners, and marketing materials. Professional designs that make your brand stand out.',
      icon: FiImage,
      gradient: 'from-yellow-400 to-yellow-600',
      image: '/Services/graphicdesigner.jpg',
    },
    {
      id: 5,
      title: 'Influencer Marketing',
      description: 'Strategic campaigns leveraging influencers to promote your brand authentically. Connect with the right influencers to reach your target audience effectively.',
      icon: FiUsers,
      gradient: 'from-orange-500 to-yellow-400',
      image: '/Services/influncer.avif',
    },
    {
      id: 6,
      title: 'Website Designing & Development',
      description: 'Modern, responsive websites that perfectly represent your brand online. Custom-built solutions that are fast, beautiful, and conversion-optimized.',
      icon: FiGlobe,
      gradient: 'from-yellow-500 to-orange-400',
      image: '/Services/webdesign.jpg',
    },
    {
      id: 7,
      title: 'Performance Marketing',
      description: 'Data-driven advertising campaigns focused on conversions and ROI. Advanced analytics and optimization strategies to maximize your marketing performance.',
      icon: FiTrendingUp,
      gradient: 'from-red-500 to-orange-500',
      image: '/Services/performance.avif',
    },
    {
      id: 8,
      title: 'Drone Shoots & Videography',
      description: 'Aerial cinematography and professional videography services. Capture stunning visuals from unique perspectives that elevate your brand storytelling.',
      icon: FiCamera,
      gradient: 'from-yellow-400 to-red-400',
      image: '/Services/droneshoot.avif',
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
            What We <span className="text-yellow-500">Actually Do ?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Hum sirf camera nahi chalate, story chalate hain.
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
            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative"
              >
                <div className="h-full flex flex-col">
                  {/* Image with Text Overlay */}
                  <div className="relative h-[400px] overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover rounded-2xl"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                    {/* Dark Overlay for text readability */}
                    <div className="absolute inset-0 bg-black/40" />
                    
                    {/* Text Overlay - Bottom Center */}
                    <div className="absolute inset-0 flex flex-col items-center justify-end p-6 text-center z-10">
                      {/* Title */}
                      <h3 className="text-xl font-bold text-white mb-4 group-hover:text-yellow-500 transition-colors">
                        {service.title}
                      </h3>

                      {/* View Details Button */}
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                      >
                        View Details
                      </motion.button>
                    </div>
                  </div>
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