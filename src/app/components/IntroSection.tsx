'use client'
import { motion } from 'framer-motion'

const IntroSection = () => {
  const problems = [
    { text: 'Reach kam hai', emoji: '📉' },
    { text: 'Followers sirf number lag rahe hain', emoji: '👻' },
    { text: 'Content hai, par wow factor missing hai', emoji: '😴' },
  ]

  return (
    <section className="relative bg-[#fdd820] py-20 overflow-hidden">
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
            Sach batao... <motion.span
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
              whileHover={{ scale: 1.05, rotate: [0, -5, 5, 0] }}
              className="relative"
            >
              <div className="bg-black text-white rounded-2xl p-6 shadow-2xl border-4 border-black relative overflow-hidden">
                {/* Animated Background */}
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.1, 0.2, 0.1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="absolute inset-0 bg-yellow-500 rounded-full blur-3xl"
                />
                
                <div className="relative z-10 flex items-center gap-4">
                  <motion.div
                    animate={{
                      rotate: [0, 360],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    className="text-5xl"
                  >
                    {problem.emoji}
                  </motion.div>
                  <div className="flex-1">
                    <div className="text-2xl mb-2">❌</div>
                    <p className="text-lg font-bold">{problem.text}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Relax Message */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-block bg-black text-white rounded-full px-8 py-4 shadow-2xl">
            <motion.p
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="text-2xl md:text-3xl font-bold flex items-center gap-3"
            >
              Relax. Aap sahi jagah aa gaye ho.{' '}
              <motion.span
                animate={{ rotate: [0, 20, -20, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                😌
              </motion.span>
            </motion.p>
          </div>
        </motion.div>

        {/* Team Message */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-black rounded-3xl p-8 md:p-12 shadow-2xl border-4 border-black relative overflow-hidden"
        >
          {/* Animated Background Elements */}
          <motion.div
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="absolute top-0 right-0 w-64 h-64 bg-yellow-500 rounded-full blur-3xl opacity-20"
          />
          <motion.div
            animate={{
              x: [0, -80, 0],
              y: [0, -40, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="absolute bottom-0 left-0 w-72 h-72 bg-orange-500 rounded-full blur-3xl opacity-20"
          />

          <div className="relative z-10">
            <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
              <motion.span
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="text-6xl"
              >
                🧠
              </motion.span>
              <motion.span
                animate={{
                  scale: [1, 1.3, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="text-6xl"
              >
                💰
              </motion.span>
            </div>
            
            <h3 className="text-3xl md:text-5xl font-bold text-white text-center mb-4 leading-tight">
              Humari experienced & thodi crazy creative team
            </h3>
            <p className="text-xl md:text-2xl text-yellow-500 font-bold text-center">
              aapke business ko banati hai{' '}
              <motion.span
                animate={{
                  color: ['#fdd820', '#ff6b6b', '#4ecdc4', '#fdd820'],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="inline-block"
              >
                scroll-stopping
              </motion.span>
              ,{' '}
              <motion.span
                animate={{
                  color: ['#fdd820', '#ff6b6b', '#4ecdc4', '#fdd820'],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: 0.5,
                }}
                className="inline-block"
              >
                eye-catching
              </motion.span>
              {' '}aur{' '}
              <motion.span
                animate={{
                  color: ['#fdd820', '#ff6b6b', '#4ecdc4', '#fdd820'],
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
  )
}

export default IntroSection