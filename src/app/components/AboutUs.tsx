'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FiTarget, FiEye, FiChevronDown, FiChevronUp } from 'react-icons/fi'
import OurTeam from './OurTeam'
import Cta from './Cta'

const AboutUs = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const faqs = [
    {
      id: 1,
      question: 'What services do you offer?',
      answer: 'We offer a comprehensive range of digital services including social media marketing, video production, web development, graphic design, influencer marketing, and performance marketing.',
    },
    {
      id: 2,
      question: 'How long does a typical project take?',
      answer: 'Project timelines vary based on scope and complexity. A simple social media campaign might take 2-4 weeks, while a full website development project could take 8-12 weeks. We provide detailed timelines during the initial consultation.',
    },
    {
      id: 3,
      question: 'Do you work with small businesses?',
      answer: 'Absolutely! We work with businesses of all sizes, from startups to established enterprises. We tailor our services to fit your budget and goals.',
    },
    {
      id: 4,
      question: 'What is your pricing structure?',
      answer: 'Our pricing is customized based on your specific needs and project scope. We offer both project-based and retainer options. Contact us for a detailed quote tailored to your requirements.',
    },
    {
      id: 5,
      question: 'Can you help with existing projects?',
      answer: 'Yes, we can take over and improve existing projects, whether it&apos;s a website redesign, rebranding, or optimizing your current marketing strategy.',
    },
    {
      id: 6,
      question: 'What makes you different from other agencies?',
      answer: 'We combine creative excellence with data-driven strategies. Our team stays ahead of trends, uses cutting-edge technology, and focuses on delivering measurable results that drive real business growth.',
    },
  ]

  const whyChooseUs = [
    {
      title: 'Proven Track Record',
      description: 'Years of experience delivering successful campaigns and projects for diverse clients.',
      icon: '📊',
    },
    {
      title: 'Creative Excellence',
      description: 'Award-winning creative team that brings fresh ideas and innovative solutions.',
      icon: '🎨',
    },
    {
      title: 'Data-Driven Approach',
      description: 'We use analytics and insights to make informed decisions and optimize performance.',
      icon: '📈',
    },
    {
      title: 'Client-Focused',
      description: 'Your success is our priority. We work closely with you every step of the way.',
      icon: '🤝',
    },
    {
      title: 'Full-Service Solutions',
      description: 'From strategy to execution, we handle all aspects of your digital presence.',
      icon: '🛠️',
    },
    {
      title: 'Transparent Communication',
      description: 'Regular updates, clear reporting, and open communication throughout the project.',
      icon: '💬',
    },
  ]

  const toggleFaq = (id: number) => {
    setOpenFaq(openFaq === id ? null : id)
  }

  return (
    <div className="relative">
      {/* About Us Section */}
      <section className="relative bg-white py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-black mb-4">
              About <span className="text-yellow-500">Us</span>
            </h1>
            <div className="w-24 h-1 bg-yellow-500 mx-auto rounded-full" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-black">Who We Are</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Mark8 Production is a leading digital agency specializing in creating compelling visual
                stories that drive results. We combine creativity, strategy, and technology to help
                brands connect with their audiences and achieve their business goals.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                With a team of passionate creatives, strategists, and technologists, we&apos;ve helped
                numerous brands establish a strong digital presence and grow their business through
                innovative marketing solutions.
              </p>
              <div className="grid grid-cols-3 gap-6 pt-6">
                {[
                  { number: '500+', label: 'Projects' },
                  { number: '200+', label: 'Clients' },
                  { number: '10+', label: 'Years' },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-3xl font-bold text-yellow-500">{stat.number}</div>
                    <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative h-[500px] bg-gradient-to-br from-yellow-100 to-orange-100 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-9xl">🎬</div>
                </div>
                <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-500 rounded-full blur-3xl opacity-30" />
                <div className="absolute bottom-10 right-10 w-40 h-40 bg-orange-500 rounded-full blur-3xl opacity-30" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="relative bg-gray-50 py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mb-6">
                <FiTarget className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-3xl font-bold text-black mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To empower businesses with innovative digital solutions that drive growth, engagement,
                and success. We strive to create meaningful connections between brands and their
                audiences through creative storytelling and strategic marketing.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mb-6">
                <FiEye className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-3xl font-bold text-black mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be the most trusted digital partner for brands worldwide, recognized for our
                creativity, innovation, and commitment to delivering exceptional results that
                transform businesses and create lasting impact.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="relative bg-white py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Why Choose <span className="text-yellow-500">Us</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              What sets us apart in the digital landscape
            </p>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mt-6 rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-gray-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border-2 border-transparent hover:border-yellow-500"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-black mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <OurTeam />

      {/* FAQ Section */}
      <section className="relative bg-white py-20 overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Frequently Asked <span className="text-yellow-500">Questions</span>
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about working with us
            </p>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mt-6 rounded-full" />
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl overflow-hidden border-2 border-gray-200"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-100 transition-colors"
                >
                  <span className="text-lg font-semibold text-black pr-4">{faq.question}</span>
                  {openFaq === faq.id ? (
                    <FiChevronUp className="w-6 h-6 text-yellow-500 flex-shrink-0" />
                  ) : (
                    <FiChevronDown className="w-6 h-6 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                {openFaq === faq.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 py-4 text-gray-600 leading-relaxed border-t border-gray-200">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <Cta />
    </div>
  )
}

export default AboutUs