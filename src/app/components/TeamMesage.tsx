import React ,{useEffect, useState}from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'


const TeamMesage = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const sliderImages = [
        { src: "/part1.png", alt: "Team Part 1" },
        { src: "/part2.png", alt: "Team Part 2" },
      ];
    
      // Auto-play slider - optimized
      useEffect(() => {
        const interval = setInterval(() => {
          setCurrentSlide((prev: number) => (prev + 1) % sliderImages.length);
        }, 4000); // Change slide every 4 seconds for smoother transition
    
        return () => clearInterval(interval);
      }, [sliderImages.length]);
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Team Message */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px", amount: 0.3 }}
          transition={{ duration: 0.3, delay: 0.2, ease: "easeOut" }}
          className=" p-8 md:p-12  relative overflow-hidden"
        >
          <div className="relative z-10">
            <div className="flex sm:flex-row flex-col items-center justify-between  w-full">
              <div className="relative sm:w-1/2 w-full max-w-md h-[400px] rounded-2xl overflow-hidden border-2 border-yellow-500  shadow-2xl ">
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
                          duration: 0.25,
                          ease: [0.4, 0, 0.2, 1],
                        }}
                        className="absolute inset-0"
                        style={{ willChange: 'transform, opacity' }}
                      >
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 50vw"
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
                      (prev: number) =>
                        (prev - 1 + sliderImages.length) % sliderImages.length as number
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
                    setCurrentSlide((prev: number) => (prev + 1) % sliderImages.length as number)
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
                  viewport={{ once: true, margin: "-50px", amount: 0.2 }}
                  transition={{ duration: 0.3, delay: 0.1, ease: "easeOut" }}
                  className="text-start mb-4"
                >
                  <div className="inline-block ">
                    <motion.p
                      animate={{
                        scale: [1, 1.05, 1],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="text-2xl md:text-3xl font-bold flex items-start gap-3 text-black"
                    >
                      Relax. You&apos;re in the right place.{" "}
                      <motion.span
                        animate={{ rotate: [0, 20, -20, 0] }}
                        transition={{ duration: 0.8, repeat: Infinity }}
                      >
                        😌
                      </motion.span>
                    </motion.p>
                  </div>
                </motion.div>
                <div>
                  <h3 className="text-base md:text-xl font-regular text-black  mb-6 leading-relaxed">
                    Our experienced and slightly crazy creative team doesn’t
                    just design content we build marketing that performs. From
                    brand strategy and digital marketing to content creation,
                    video production, and social media growth, we help
                    businesses stop the scroll, capture attention, and turn
                    views into revenue. No boring ideas. No empty promises. Just
                    high-impact marketing, executed properly and delivered on
                    time.
                  </h3>
                  <a
                    href="/about"
                    className="text-black font-bold text-center border border-yellow-500 px-4 py-2 rounded-full"
                  >
                    Lets Connect
                  </a>
                </div>
              </div>
            </div>
            {/* <p className="text-xl md:text-2xl text-black font-bold text-center mt-6">
              Aapke business ko banati hai{" "}
            <motion.span
              animate={{
                color: ["#000000", "#ff6b6b", "#4ecdc4", "#fdd820"],
              }}
              transition={{
                duration: 1.5,
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
                duration: 1.5,
                repeat: Infinity,
                delay: 0.3,
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
                duration: 1.5,
                repeat: Infinity,
                delay: 0.6,
              }}
              className="inline-block"
            >
              money-making
            </motion.span>
            </p> */}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TeamMesage