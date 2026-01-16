"use client";
import { motion } from 'framer-motion';
import React from 'react'
import Image from 'next/image';
const Problemslist = () => {
    const problems = [
        { text: "Reach kam hai", img: "/reach.png" },
        { text: "Followers sirf number lag rahe hain", img: "/follow.png" },
        { text: "Content hai, par wow factor missing hai", img: "/content.png" },
      ];
  return (
    <div className="grid md:grid-cols-3 gap-6 mb-12">
    {problems.map((problem, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-50px", amount: 0.2 }}
        transition={{ duration: 0.3, delay: index * 0.05, ease: "easeOut" }}
        className="relative"
      >
        <div className="bg-white/10 shadow-2xl text-white rounded-2xl p-6  border border-yellow-500 relative overflow-hidden backdrop-blur-3xl">
          {/* Animated Background - Reduced for performance */}
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.08, 0.15, 0.08],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute inset-0 bg-yellow-500 rounded-full blur-3xl"
            style={{ willChange: 'transform, opacity' }}
          />

          <div className="relative z-10 flex items-center gap-4 flex-col ">
            <div className="relative w-full h-32">
              <motion.div
                whileHover={{
                  scale: 1.1,
                  y: -5,
                }}
                transition={{
                  duration: 0.2,
                  ease: "easeOut",
                }}
                style={{ willChange: 'transform' }}
                className="relative w-full h-full"
              >
                <Image
                  src={problem.img}
                  alt={problem.text}
                  fill
                  className="object-contain cursor-pointer"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </motion.div>
            </div>
            <div className="flex-1 ">
              <p className="text-base font-semibold text-black">
                {problem.text}
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    ))}
  </div>
  )
}

export default Problemslist