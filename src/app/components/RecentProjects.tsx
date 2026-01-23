'use client'
import { useEffect, useRef, useState } from 'react'
import { initScrollAnimations } from '@/utils/initScrollAnimations'
import ReelsSection from './ReelsSection'
import PromotionalVideosSection from './PromotionalVideosSection'
import WebGraphicsSection from './WebGraphicsSection'

const RecentProjects = () => {
  useEffect(() => {
    // Initialize scroll animations
    const cleanup = initScrollAnimations()
    return cleanup
  }, [])

  const headerRef = useRef<HTMLDivElement>(null)
  const [headerVisible, setHeaderVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeaderVisible(true)
          observer.disconnect() // Disconnect after first intersection
        }
      },
      { threshold: 0.1 }
    )
    if (headerRef.current) {
      observer.observe(headerRef.current)
    }
    return () => observer.disconnect()
  }, [])

  return (
    <section className="relative bg-gray-100 py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          ref={headerRef as React.RefObject<HTMLDivElement>}
          className={`text-center mb-16 ${headerVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-2">
            Glimpse of our <span className="relative inline-block">
              <span className="text-yellow-500">Projects</span>
              <span className={`absolute bottom-0 left-0 h-1 bg-yellow-500 transition-all duration-800 ${headerVisible ? 'w-full' : 'w-0'}`} style={{ transitionDelay: '0.3s' }} />
            </span>
          </h2>
        </div>

        {/* Reels Section */}
        <ReelsSection />

        {/* Promotional Videos Section */}
        <PromotionalVideosSection />

        {/* Web & Graphics Section */}
        <WebGraphicsSection />
      </div>
    </section>
  )
}

export default RecentProjects