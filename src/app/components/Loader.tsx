'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'

const Loader = () => {
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let animationFrameId: number | null = null
    let timeout: NodeJS.Timeout | null = null
    let initTimeout: NodeJS.Timeout | null = null

    // Use setTimeout to avoid synchronous setState
    initTimeout = setTimeout(() => {
      // Faster, smoother loading - check if page is already loaded
      if (typeof window !== 'undefined' && document.readyState === 'complete') {
        setProgress(100)
        timeout = setTimeout(() => setLoading(false), 600)
        return
      }

      // Simulate loading progress - smoother with requestAnimationFrame
      let startTime: number | null = null
      const duration = 2000 // 2 seconds max
      const targetProgress = 100

      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime
        const elapsed = currentTime - startTime
        const progressValue = Math.min((elapsed / duration) * targetProgress, targetProgress)
        
        setProgress(Math.floor(progressValue))

        if (progressValue < targetProgress) {
          animationFrameId = requestAnimationFrame(animate)
        } else {
          timeout = setTimeout(() => setLoading(false), 200)
        }
      }

      animationFrameId = requestAnimationFrame(animate)

      // Fallback - always hide after max 2.5 seconds
      timeout = setTimeout(() => {
        setLoading(false)
      }, 2500)
    }, 0)

    return () => {
      if (initTimeout) clearTimeout(initTimeout)
      if (animationFrameId) cancelAnimationFrame(animationFrameId)
      if (timeout) clearTimeout(timeout)
    }
  }, [])

  const funnyMessages = [
    'Aapke brand ko polish kar rahe hain... ✨',
    'Creativity load ho rahi hai... 🎨',
    'Ideas generate kar rahe hain... 💡',
    'Content ban raha hai... 📱',
    'Almost there... 🚀',
  ]

  const [currentMessage, setCurrentMessage] = useState(0)

  useEffect(() => {
    const messageInterval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % funnyMessages.length)
    }, 1000)

    return () => clearInterval(messageInterval)
  }, [funnyMessages.length])

  if (!loading) return null

  return (
    <div className="loader-container fixed inset-0 z-[9999] bg-gradient-to-br from-yellow-400 via-yellow-500 to-orange-500 flex items-center justify-center">
      <style jsx>{`
        .loader-container {
          animation: fadeOut 0.3s ease-out forwards;
          animation-delay: 2.2s;
        }

        @keyframes fadeOut {
          from {
            opacity: 1;
          }
          to {
            opacity: 0;
            visibility: hidden;
          }
        }

        .logo-container {
          animation: logoEntrance 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        @keyframes logoEntrance {
          from {
            transform: scale(0) rotate(-180deg);
            opacity: 0;
          }
          to {
            transform: scale(1) rotate(0deg);
            opacity: 1;
          }
        }

        .logo-float {
          animation: logoFloat 2s ease-in-out infinite;
        }

        @keyframes logoFloat {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }

        .message-fade {
          animation: messageFade 0.4s ease-in-out;
        }

        @keyframes messageFade {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .progress-bar {
          width: 0%;
          animation: progressFill 2s ease-out forwards;
          transition: width 0.1s linear;
        }

        @keyframes progressFill {
          from {
            width: 0%;
          }
          to {
            width: var(--progress-width, 100%);
          }
        }

        .progress-shimmer {
          animation: shimmer 1.5s linear infinite;
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .loading-dot {
          animation: dotPulse 1s ease-in-out infinite;
        }

        .loading-dot:nth-child(1) {
          animation-delay: 0s;
        }

        .loading-dot:nth-child(2) {
          animation-delay: 0.2s;
        }

        .loading-dot:nth-child(3) {
          animation-delay: 0.4s;
        }

        @keyframes dotPulse {
          0%, 100% {
            transform: scale(1);
            opacity: 0.5;
          }
          50% {
            transform: scale(1.5);
            opacity: 1;
          }
        }

        .bg-float {
          animation: bgFloat 6s ease-in-out infinite;
        }

        .bg-float:nth-child(1) {
          animation-delay: 0s;
          left: 20%;
          top: 20%;
        }

        .bg-float:nth-child(2) {
          animation-delay: 0.5s;
          left: 40%;
          top: 40%;
        }

        .bg-float:nth-child(3) {
          animation-delay: 1s;
          left: 60%;
          top: 60%;
        }

        @keyframes bgFloat {
          0%, 100% {
            transform: translate(0, 0) scale(0);
            opacity: 0;
          }
          50% {
            transform: translate(50px, -40px) scale(1);
            opacity: 0.2;
          }
        }

        /* Optimize for low-end devices */
        * {
          will-change: auto;
        }

        .logo-float,
        .progress-bar,
        .progress-shimmer,
        .loading-dot,
        .bg-float {
          will-change: transform, opacity;
        }
      `}</style>

      <div className="text-center">
        {/* Logo with Animation */}
        <div className="logo-container mb-8">
          <div className="logo-float relative w-48 h-24 mx-auto">
            <Image
              src="/logo.png"
              alt="Mark8 Production Logo"
              width={192}
              height={96}
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Funny Message */}
        <div className="message-fade mb-8">
          <p className="text-2xl md:text-3xl font-bold text-black">
            {funnyMessages[currentMessage]}
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-80 md:w-96 mx-auto mb-4">
          <div className="bg-black/20 rounded-full h-4 overflow-hidden shadow-inner">
            <div
              className="progress-bar h-full bg-black rounded-full relative overflow-hidden"
              style={{ '--progress-width': `${progress}%` } as React.CSSProperties}
            >
              <div className="progress-shimmer absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
            </div>
          </div>
          <p className="text-black font-bold text-lg mt-2">
            {progress}%
          </p>
        </div>

        {/* Loading Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {[0, 1, 2].map((index) => (
            <div
              key={index}
              className="loading-dot w-3 h-3 bg-black rounded-full"
            />
          ))}
        </div>
      </div>

      {/* Background Animated Elements - Reduced for performance */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="bg-float absolute w-32 h-32 bg-white/20 rounded-full blur-2xl" />
        <div className="bg-float absolute w-32 h-32 bg-white/20 rounded-full blur-2xl" />
        <div className="bg-float absolute w-32 h-32 bg-white/20 rounded-full blur-2xl" />
      </div>
    </div>
  )
}

export default Loader
