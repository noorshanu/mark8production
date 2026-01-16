'use client'
import { useEffect, useRef, useState } from 'react'

interface UseIntersectionObserverOptions extends IntersectionObserverInit {
  once?: boolean
}

export function useIntersectionObserver(options?: UseIntersectionObserverOptions) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true)
        // Optionally disconnect after first intersection
        if (options?.once !== false) {
          observer.disconnect()
        }
      } else if (options?.once === false) {
        setIsVisible(false)
      }
    }, {
      threshold: options?.threshold || 0.1,
      rootMargin: options?.rootMargin || '0px',
    })

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [options?.threshold, options?.rootMargin, options?.once])

  return { ref, isVisible }
}
