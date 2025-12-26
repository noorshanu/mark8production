'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { FiInstagram, FiFacebook, FiLinkedin, FiTwitter, FiMail, FiPhone } from 'react-icons/fi'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Project', href: '/project' },
    { name: 'About Us', href: '/about-us' },
    { name: 'Contact Us', href: '/contact-us' },
  ]

  const socialLinks = [
    { icon: FiInstagram, href: '#', label: 'Instagram' },
    { icon: FiFacebook, href: '#', label: 'Facebook' },
    { icon: FiLinkedin, href: '#', label: 'LinkedIn' },
    { icon: FiTwitter, href: '#', label: 'Twitter' },
  ]

  return (
    <footer className="relative bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="relative flex items-center justify-center w-32 h-16">
                <Image src="/logo.png" alt="logo" width={128} height={64} className="object-contain" />
              </div>
            </Link>
            <p className="text-gray-400 text-sm">
              Creating visual stories that drive results. Your partner in digital excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-yellow-500">Quick Links</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-yellow-500 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-yellow-500">Services</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Social Media Marketing</li>
              <li>Video Production</li>
              <li>Web Development</li>
              <li>Graphic Design</li>
              <li>Influencer Marketing</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-yellow-500">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-gray-400">
                <FiMail className="w-4 h-4 text-yellow-500" />
                <span>info@mark8production.com</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <FiPhone className="w-4 h-4 text-yellow-500" />
                <span>+91 123 456 7890</span>
              </li>
            </ul>

            {/* Social Media */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-3 text-gray-300">Follow Us</h4>
              <div className="flex gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      whileHover={{ scale: 1.1, y: -3 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:bg-yellow-500 hover:text-black transition-colors"
                      aria-label={social.label}
                    >
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  )
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} Mark8 Production. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-400">
              <Link href="/privacy" className="hover:text-yellow-500 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-yellow-500 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
