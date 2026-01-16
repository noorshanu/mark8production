"use client";
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image';

const Problemslist = () => {
    const problems = [
        { text: "Reach kam hai", img: "/reach.png" },
        { text: "Followers sirf number lag rahe hain", img: "/follow.png" },
        { text: "Content hai, par wow factor missing hai", img: "/content.png" },
      ];
    
    const [visibleItems, setVisibleItems] = useState<boolean[]>([])
    const itemRefs = useRef<(HTMLDivElement | null)[]>([])

    useEffect(() => {
        const observers: IntersectionObserver[] = []
        
        itemRefs.current.forEach((ref, index) => {
            if (!ref) return
            
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setVisibleItems((prev) => {
                            const newState = [...prev]
                            newState[index] = true
                            return newState
                        })
                        observer.disconnect()
                    }
                },
                {
                    threshold: 0.2,
                    rootMargin: '-50px 0px',
                }
            )
            
            observer.observe(ref)
            observers.push(observer)
        })
        
        return () => {
            observers.forEach((observer) => observer.disconnect())
        }
    }, [])

  return (
    <div className="grid md:grid-cols-3 gap-6 mb-12">
    {problems.map((problem, index) => (
      <div
        key={index}
        ref={(el) => {
            itemRefs.current[index] = el
        }}
        className={`relative ${visibleItems[index] ? 'animate-slide-in-left' : 'opacity-0'}`}
        style={{
            animationDelay: `${index * 0.1}s`,
        }}
      >
        <div className="bg-white/10 shadow-2xl text-white rounded-2xl p-6 border border-yellow-500 relative overflow-hidden backdrop-blur-3xl group hover:border-yellow-400 transition-all duration-300">
          {/* Animated Background - CSS Animation */}
          <div className="absolute inset-0 bg-yellow-500 rounded-full blur-3xl animate-pulse-glow" />

          <div className="relative z-10 flex items-center gap-4 flex-col">
            <div className="relative w-full h-32">
              <div className="relative w-full h-full transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-2">
                <Image
                  src={problem.img}
                  alt={problem.text}
                  fill
                  className="object-contain cursor-pointer"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="flex-1">
              <p className="text-base font-semibold text-black group-hover:text-yellow-600 transition-colors duration-300">
                {problem.text}
              </p>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
  )
}

export default Problemslist