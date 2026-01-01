/* eslint-disable @next/next/no-img-element */
'use client'

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaTelegram,
  FaInstagram,
  FaYoutube,
  FaFacebook,
} from "react-icons/fa6";

const Cta = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative bg-[#fdd820] py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-4xl font-bold text-black mb-4 leading-tight">
            Agar aap bhi chahte ho ki log aapke brand ko ignore nahi, admire karein.
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-4">
              We are here to help you with your brand&apos;s growth.
            </p>
            <motion.button 
              className="bg-yellow-500 text-black px-6 py-3 rounded-md font-semibold relative overflow-hidden"
              whileHover={{ scale: 1.05, backgroundColor: "#fbbf24" }}
              whileTap={{ scale: 0.95 }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <AnimatePresence mode="wait">
                {!isHovered ? (
                  <motion.span
                    key="get-started"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="inline-block"
                  >
                    Get Started
                  </motion.span>
                ) : (
                  <motion.span
                    key="free-hai"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="inline-block"
                  >
                    Free Hai Don&apos;t worry
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
            <div className="flex items-center gap-4">
              <a href="#">
                <FaTelegram className="text-black text-2xl" />
              </a>
              <a href="#">
                <FaInstagram className="text-black text-2xl" />
              </a>

              <a href="#">
                <FaYoutube className="text-black text-2xl" />
              </a>
              <a href="#">
                <FaFacebook className="text-black text-2xl" />
              </a>
            </div>
          </div>
          <div>
            <img src="/cta.png" alt="cta" className=" mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
