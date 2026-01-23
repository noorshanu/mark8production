'use client'
import { useRef, useEffect } from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { useSlider } from '@/utils/useSlider'

interface SliderProps {
  items: React.ReactNode[]
  itemsPerSlide: number
  itemsPerSlideMobile?: number
  itemsPerSlideTablet?: number
  autoPlay?: boolean
  autoPlayInterval?: number
  infinite?: boolean
  className?: string
  showNavigation?: boolean
}

export default function Slider({
  items,
  itemsPerSlide,
  itemsPerSlideMobile = 1,
  itemsPerSlideTablet = 2,
  autoPlay = true,
  autoPlayInterval = 5000,
  infinite = true,
  className = '',
  showNavigation = true,
}: SliderProps) {
  const trackRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  
  const { currentSlide, currentItemsPerSlide, nextSlide, prevSlide, pause, play } = useSlider({
    itemsPerSlide,
    itemsPerSlideMobile,
    itemsPerSlideTablet,
    totalItems: items.length,
    autoPlay,
    autoPlayInterval,
    infinite,
  })

  // Handle touch/swipe for mobile
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
    pause()
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX
  }

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return
    
    const distance = touchStartX.current - touchEndX.current
    const minSwipeDistance = 50

    if (distance > minSwipeDistance) {
      nextSlide()
    } else if (distance < -minSwipeDistance) {
      prevSlide()
    }
    
    play()
  }

  useEffect(() => {
    if (trackRef.current) {
      const slideWidth = 100 / currentItemsPerSlide
      const translateX = -currentSlide * slideWidth
      trackRef.current.style.transform = `translateX(${translateX}%)`
    }
  }, [currentSlide, currentItemsPerSlide])

  // Pause on hover
  const handleMouseEnter = () => pause()
  const handleMouseLeave = () => play()

  if (items.length === 0) {
    return null
  }

  return (
    <div
      ref={containerRef}
      className={`slider-container ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div ref={trackRef} className="slider-track">
        {items.map((item, index) => (
          <div
            key={index}
            className="slider-item"
            style={{
              width: `${100 / currentItemsPerSlide}%`,
              flexShrink: 0,
            }}
          >
            <div className="px-2 sm:px-3 md:px-4">
              {item}
            </div>
          </div>
        ))}
      </div>

      {showNavigation && items.length > currentItemsPerSlide && (
        <div className="slider-nav-container">
          <button
            onClick={prevSlide}
            className="slider-nav-button prev"
            aria-label="Previous slide"
          >
            <FiChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="slider-nav-button next"
            aria-label="Next slide"
          >
            <FiChevronRight className="w-6 h-6" />
          </button>
        </div>
      )}
    </div>
  )
}
