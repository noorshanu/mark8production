/* eslint-disable @next/next/no-img-element */
"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const IntroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const problems = [
    { text: "Reach kam hai", img: "/reach.png" },
    { text: "Followers sirf number lag rahe hain", img: "/follow.png" },
    { text: "Content hai, par wow factor missing hai", img: "/content.png" },
  ];

  const sliderImages = [
    { src: "/part1.png", alt: "Team Part 1" },
    { src: "/part2.png", alt: "Team Part 2" },
  ];

  // Auto-play slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [sliderImages.length]);

  return (
    <section className="relative bg-[#fdd820] py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-4"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-black mb-2 leading-tight font-bangers">
            Sach batao...{" "}
            <motion.span
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
              className="inline-block"
            >
              🤔
            </motion.span>
          </h2>
        </motion.div>

        {/* Subheading */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-4"
        >
          <p className="text-base sm:text-xl font-medium text-black font-tiktok-sans">
            Aap yahan isliye ho kyunki
          </p>
        </motion.div>

        {/* Problems List */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="relative"
            >
              <div className="bg-white shadow-2xl text-white rounded-2xl p-6  border border-black relative overflow-hidden">
                {/* Animated Background */}
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.1, 0.2, 0.1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 bg-yellow-500 rounded-full blur-3xl"
                />

                <div className="relative z-10 flex items-center gap-4 flex-col ">
                  <div className="text-5xl">
                    <motion.img
                      src={problem.img}
                      alt={problem.text}
                      className="w-full h-full cursor-pointer"
                      whileHover={{
                        scale: 1.2,
                        rotate: 15,
                        y: -10,
                        filter: "brightness(1.2)",
                      }}
                      transition={{
                        duration: 0.3,
                        ease: "easeOut",
                      }}
                    />
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

        {/* Relax Message */}

        {/* Team Message */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className=" p-8 md:p-12  relative overflow-hidden"
        >
          <div className="relative z-10">
            <div className="flex sm:flex-row flex-col items-center justify-between  w-full">
              <div className="relative sm:w-1/2 w-full max-w-md h-[400px] rounded-2xl overflow-hidden shadow-2xl ">
                <AnimatePresence mode="wait">
                  {sliderImages.map((image, index) => {
                    if (index !== currentSlide) return null;

                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{
                          duration: 0.7,
                          ease: "easeInOut",
                        }}
                        className="absolute inset-0"
                      >
                        <motion.img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-full object-cover"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.3 }}
                        />
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                      </motion.div>
                    );
                  })}
                </AnimatePresence>

                {/* Slide Indicators */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
                  {sliderImages.map((_, index) => (
                    <motion.button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`h-2 rounded-full transition-all ${
                        index === currentSlide
                          ? "w-8 bg-white"
                          : "w-2 bg-white/50 hover:bg-white/75"
                      }`}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>

                {/* Navigation Arrows */}
                <motion.button
                  onClick={() =>
                    setCurrentSlide(
                      (prev) =>
                        (prev - 1 + sliderImages.length) % sliderImages.length
                    )
                  }
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-black shadow-lg hover:bg-white transition-colors z-10"
                  whileHover={{ scale: 1.1, x: -5 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="Previous slide"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </motion.button>

                <motion.button
                  onClick={() =>
                    setCurrentSlide((prev) => (prev + 1) % sliderImages.length)
                  }
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-black shadow-lg hover:bg-white transition-colors z-10"
                  whileHover={{ scale: 1.1, x: 5 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="Next slide"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </motion.button>
              </div>
              <div className="sm:w-1/2 w-full">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="text-center mb-4"
                >
                  <div className="inline-block bg-white text-black rounded-full px-8 py-4 shadow-2xl">
                    <motion.p
                      animate={{
                        scale: [1, 1.05, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="text-2xl md:text-3xl font-bold flex items-center gap-3 text-black"
                    >
                      Relax. You’re in the right place.{" "}
                      <motion.span
                        animate={{ rotate: [0, 20, -20, 0] }}
                        transition={{ duration: 1, repeat: Infinity }}
                      >
                        😌
                      </motion.span>
                    </motion.p>
                  </div>
                </motion.div>
                <div>
                  <h3 className="text-base md:text-xl font-regular text-black  mb-6 leading-tight">
                    Our experienced and slightly crazy creative team doesn’t
                    just design content—we build marketing that performs. From
                    brand strategy and digital marketing to content creation,
                    video production, and social media growth, we help
                    businesses stop the scroll, capture attention, and turn
                    views into revenue. No boring ideas. No empty promises. Just
                    high-impact marketing, executed properly and delivered on
                    time.
                  </h3>
                  <a
                    href="/about"
                    className="text-black font-bold text-center border border-black px-4 py-2 rounded-full"
                  >
                    Lets Connect
                  </a>
                </div>
              </div>
            </div>
            <p className="text-xl md:text-2xl text-black font-bold text-center mt-6">
              Aapke business ko banati hai{" "}
              <motion.span
                animate={{
                  color: ["#000000", "#ff6b6b", "#4ecdc4", "#fdd820"],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="inline-block"
              >
                scroll-stopping
              </motion.span>
              ,{" "}
              <motion.span
                animate={{
                  color: ["#fdd820", "#ff6b6b", "#4ecdc4", "#fdd820"],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: 0.5,
                }}
                className="inline-block"
              >
                eye-catching
              </motion.span>{" "}
              aur{" "}
              <motion.span
                animate={{
                  color: ["#fdd820", "#ff6b6b", "#4ecdc4", "#fdd820"],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: 1,
                }}
                className="inline-block"
              >
                money-making
              </motion.span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default IntroSection;
