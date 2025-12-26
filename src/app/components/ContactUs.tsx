'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiMapPin, FiSend, FiInstagram, FiFacebook, FiLinkedin, FiTwitter, FiYoutube, FiMessageCircle, FiClock } from 'react-icons/fi'

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData)
      setSubmitStatus('success')
      setIsSubmitting(false)
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
        setSubmitStatus('idle')
      }, 3000)
    }, 1500)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
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
            Get in <span className="text-yellow-500">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can help bring your vision to life.
          </p>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mt-6 rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-black mb-6">Contact Information</h3>
              <p className="text-gray-600 mb-8">
                Fill out the form or reach out to us directly. We're here to help!
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FiMail className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h4 className="font-semibold text-black mb-1">Email</h4>
                  <p className="text-gray-600">info@mark8production.com</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FiPhone className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h4 className="font-semibold text-black mb-1">Phone</h4>
                  <p className="text-gray-600">+91 123 456 7890</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FiMapPin className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h4 className="font-semibold text-black mb-1">Address</h4>
                  <p className="text-gray-600">Your City, Your State, India</p>
                </div>
              </motion.div>
            </div>

            {/* Business Hours */}
            <div className="pt-6 border-t border-gray-200">
              <div className="flex items-start gap-4 p-4 rounded-lg">
                <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FiClock className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h4 className="font-semibold text-black mb-2">Business Hours</h4>
                  <p className="text-sm text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p className="text-sm text-gray-600">Saturday: 10:00 AM - 4:00 PM</p>
                  <p className="text-sm text-gray-600">Sunday: Closed</p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="pt-6">
              <h4 className="font-semibold text-black mb-4">Follow Us</h4>
              <div className="flex flex-wrap gap-3">
                {[
                  { icon: FiInstagram, label: 'Instagram', color: 'hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500' },
                  { icon: FiFacebook, label: 'Facebook', color: 'hover:bg-blue-600' },
                  { icon: FiLinkedin, label: 'LinkedIn', color: 'hover:bg-blue-700' },
                  { icon: FiTwitter, label: 'Twitter', color: 'hover:bg-sky-500' },
                  { icon: FiYoutube, label: 'YouTube', color: 'hover:bg-red-600' },
                ].map((social) => {
                  const Icon = social.icon
                  return (
                    <motion.a
                      key={social.label}
                      href="#"
                      whileHover={{ scale: 1.1, y: -5, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-12 h-12 bg-black rounded-lg flex items-center justify-center text-white ${social.color} transition-all shadow-lg`}
                      aria-label={social.label}
                      title={social.label}
                    >
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  )
                })}
              </div>
            </div>

            {/* Quick Contact */}
            <div className="pt-6">
              <h4 className="font-semibold text-black mb-4">Quick Contact</h4>
              <motion.a
                href="https://wa.me/911234567890"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, x: 5 }}
                className="flex items-center gap-3 p-4 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors shadow-lg"
              >
                <FiMessageCircle className="w-6 h-6" />
                <span className="font-semibold">Chat on WhatsApp</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-2xl border-2 border-gray-100">
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-black mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-yellow-500 focus:outline-none transition-all bg-white"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-black mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-yellow-500 focus:outline-none transition-all bg-white"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-black mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-yellow-500 focus:outline-none transition-all bg-white"
                      placeholder="+91 123 456 7890"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-black mb-2">
                      Subject <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-yellow-500 focus:outline-none transition-all bg-white"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="project">Project Discussion</option>
                      <option value="quote">Request a Quote</option>
                      <option value="support">Support</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-black mb-2">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-yellow-500 focus:outline-none transition-all resize-none bg-white"
                    placeholder="Tell us about your project, goals, and how we can help..."
                  />
                </div>

                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-green-100 border-2 border-green-500 rounded-lg text-green-700 font-semibold"
                  >
                    ✓ Message sent successfully! We&apos;ll get back to you soon.
                  </motion.div>
                )}

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  className={`w-full px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-bold text-lg rounded-lg flex items-center justify-center gap-2 transition-all shadow-lg ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:shadow-xl'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        className="w-5 h-5 border-2 border-black border-t-transparent rounded-full"
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <FiSend className="w-5 h-5" />
                    </>
                  )}
                </motion.button>
              </div>
            </form>
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
          className="absolute top-20 left-10 w-96 h-96 bg-yellow-200 rounded-full blur-3xl opacity-20"
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

export default ContactUs

