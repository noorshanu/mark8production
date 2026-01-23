'use client'
import { useState, useEffect, useCallback, useRef } from 'react'

interface UseSliderOptions {
  itemsPerSlide: number
  itemsPerSlideMobile?: number
  itemsPerSlideTablet?: number
  totalItems: number
  autoPlay?: boolean
  autoPlayInterval?: number
  infinite?: boolean
}

export function useSlider({
  itemsPerSlide,
  itemsPerSlideMobile = 1,
  itemsPerSlideTablet = 2,
  totalItems,
  autoPlay = true,
  autoPlayInterval = 5000,
  infinite = true,
}: UseSliderOptions) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPlaying, setIsPlaying] = useState(autoPlay)
  const [currentItemsPerSlide, setCurrentItemsPerSlide] = useState(itemsPerSlide)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  
  // Handle responsive items per slide
  useEffect(() => {
    const updateItemsPerSlide = () => {
      if (typeof window === 'undefined') return
      
      if (window.innerWidth < 640) {
        setCurrentItemsPerSlide(itemsPerSlideMobile)
      } else if (window.innerWidth < 1024) {
        setCurrentItemsPerSlide(itemsPerSlideTablet)
      } else {
        setCurrentItemsPerSlide(itemsPerSlide)
      }
    }
    
    updateItemsPerSlide()
    window.addEventListener('resize', updateItemsPerSlide)
    return () => window.removeEventListener('resize', updateItemsPerSlide)
  }, [itemsPerSlide, itemsPerSlideMobile, itemsPerSlideTablet])
  
  const totalSlides = Math.ceil(totalItems / currentItemsPerSlide)

  const goToSlide = useCallback((slideIndex: number) => {
    if (infinite) {
      setCurrentSlide(slideIndex)
    } else {
      setCurrentSlide(Math.max(0, Math.min(slideIndex, totalSlides - 1)))
    }
  }, [infinite, totalSlides])

  const nextSlide = useCallback(() => {
    if (infinite) {
      setCurrentSlide((prev) => (prev + 1) % totalSlides)
    } else {
      setCurrentSlide((prev) => Math.min(prev + 1, totalSlides - 1))
    }
  }, [infinite, totalSlides])

  const prevSlide = useCallback(() => {
    if (infinite) {
      setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
    } else {
      setCurrentSlide((prev) => Math.max(prev - 1, 0))
    }
  }, [infinite, totalSlides])

  useEffect(() => {
    if (isPlaying && autoPlay) {
      intervalRef.current = setInterval(() => {
        nextSlide()
      }, autoPlayInterval)
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isPlaying, autoPlay, autoPlayInterval, nextSlide])

  const pause = useCallback(() => setIsPlaying(false), [])
  const play = useCallback(() => setIsPlaying(true), [])

  return {
    currentSlide,
    totalSlides,
    currentItemsPerSlide,
    goToSlide,
    nextSlide,
    prevSlide,
    isPlaying,
    pause,
    play,
  }
}
