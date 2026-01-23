'use client'
import { useEffect, useState } from 'react'
import { FiPlay } from 'react-icons/fi'
import Slider from '@/components/Slider'

type ReelProject = {
  id: number
  title: string
  category: string
  thumbnail: string
  videoSrc: string
}

const ReelsSection = () => {
  const [videoProjects, setVideoProjects] = useState<ReelProject[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    let isMounted = true

    const loadReels = async () => {
      setIsLoading(true)
      try {
        console.log('Fetching reels from /api/reels...')
        const response = await fetch('/api/reels', { cache: 'no-store' })
        
        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}))
          console.error('Failed to fetch reels:', response.status, errorData)
          if (isMounted) {
            setIsLoading(false)
          }
          return
        }
        
        const data = (await response.json()) as ReelProject[]
        console.log('REELS DATA RECEIVED 👉', {
          count: data.length,
          data: data.map((r) => ({ id: r.id, title: r.title, videoSrc: r.videoSrc?.substring(0, 80) + '...' })),
        })
        
        if (isMounted) {
          if (Array.isArray(data) && data.length > 0) {
            setVideoProjects(data)
            console.log('✅ Reels loaded successfully:', data.length)
          } else {
            console.warn('⚠️ No reels found or empty array received')
            setVideoProjects([])
          }
          setIsLoading(false)
        }
      } catch (error) {
        console.error('❌ Error loading reels:', error)
        if (isMounted) {
          setIsLoading(false)
        }
      }
    }

    loadReels()

    return () => {
      isMounted = false
    }
  }, [])

  return (
    <div className="mb-20">
      <h3 className="text-2xl font-bold text-black mb-8 flex items-center gap-3 animate-on-scroll">
        <FiPlay className="text-yellow-500" />
        Reels Projects
      </h3>

      <div className="relative">
        {isLoading ? (
          <div className="py-4 text-center text-gray-400">
            Loading reels...
          </div>
        ) : videoProjects.length === 0 ? (
          <div className="py-4 text-center text-gray-400">
            No reels found. Please check your Cloudinary configuration.
          </div>
        ) : (
          <Slider
            items={videoProjects.map((project) => (
              <div key={project.id} className="group cursor-pointer hover-lift">
                {/* Mobile Frame */}
                <div className="relative bg-gray-900 rounded-[2.5rem] p-3 shadow-2xl w-full max-w-[280px] mx-auto sm:max-w-[240px] md:max-w-[260px] lg:max-w-[280px]">
                  {/* Phone Notch */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-10" />
                  
                  {/* Screen */}
                  <div className="relative bg-black rounded-4xl overflow-hidden aspect-9/16">
                    {/* Video Preview/Thumbnail */}
                    {project.videoSrc ? (
                      <video
                        src={project.videoSrc}
                        className="absolute inset-0 w-full h-full object-cover"
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="none"
                        onError={(e) => {
                          console.error('Video load error:', project.videoSrc, e)
                        }}
                      />
                    ) : (
                      <div className={`absolute inset-0 ${project.thumbnail}`}>
                        {/* Pattern Overlay */}
                        <div className="absolute inset-0 opacity-20">
                          <svg width="100%" height="100%">
                            <pattern id={`video-pattern-${project.id}`} x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                              <circle cx="10" cy="10" r="1" fill="white" />
                            </pattern>
                            <rect width="100%" height="100%" fill={`url(#video-pattern-${project.id})`} />
                          </svg>
                        </div>
                      </div>
                    )}
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4 z-10">
                      <span className="px-3 py-1 bg-black/70 backdrop-blur-sm text-white text-xs font-semibold rounded-full">
                        {project.category}
                      </span>
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-yellow-500/20 backdrop-blur-sm flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="text-white text-center px-4">
                        <a href="/contact" className="text-sm opacity-90 bg-black rounded-full px-4 py-2">Contact Us</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            itemsPerSlide={4}
            itemsPerSlideMobile={1}
            itemsPerSlideTablet={2}
            autoPlay={true}
            autoPlayInterval={5000}
            infinite={true}
            className="py-4"
          />
        )}
      </div>
    </div>
  )
}

export default ReelsSection
