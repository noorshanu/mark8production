'use client'
import Marquee from 'react-fast-marquee'
import { FiPlay, FiExternalLink, FiCode, FiImage } from 'react-icons/fi'
import { useEffect, useState, useRef } from 'react'
import { initScrollAnimations } from '@/utils/initScrollAnimations'

type ReelProject = {
  id: number
  title: string
  category: string
  thumbnail: string
  videoSrc: string
}

const RecentProjects = () => {
  const fallbackVideoProjects: ReelProject[] = []

  const [videoProjects, setVideoProjects] = useState<ReelProject[]>(
    fallbackVideoProjects
  )
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Initialize scroll animations
    const cleanup = initScrollAnimations()
    return cleanup
  }, [])

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

  // Duplicate for seamless loop
  const duplicatedVideoProjects = [...videoProjects, ...videoProjects]

  const laptopVideoProjects = [
    {
      id: 1,
      title: 'Promotional Video 1',
      category: 'Promotional Videos',
      thumbnail: 'bg-gradient-to-br from-gray-800 to-gray-900',
      videoId: 'Vk1Vybnmsiw',
      videoUrl: 'https://youtu.be/Vk1Vybnmsiw',
    },
    {
      id: 2,
      title: 'Promotional Video 2',
      category: 'Promotional Videos',
      thumbnail: 'bg-gradient-to-br from-orange-600 to-red-600',
      videoId: '14NwFbG9dT4',
      videoUrl: 'https://youtu.be/14NwFbG9dT4',
    },
    {
      id: 3,
      title: 'Promotional Video 3',
      category: 'Promotional Videos',
      thumbnail: 'bg-gradient-to-br from-purple-600 to-pink-600',
      videoId: 'tqZQ8hL8HdE',
      videoUrl: 'https://youtu.be/tqZQ8hL8HdE',
    },
    {
      id: 4,
      title: 'Promotional Video 4',
      category: 'Promotional Videos',
      thumbnail: 'bg-gradient-to-br from-blue-600 to-cyan-600',
      videoId: '2COemg8SbCo',
      videoUrl: 'https://youtu.be/2COemg8SbCo',
    },
    {
      id: 5,
      title: 'Promotional Video 5',
      category: 'Promotional Videos',
      thumbnail: 'bg-gradient-to-br from-green-600 to-emerald-600',
      videoId: '1Unar6f66ko',
      videoUrl: 'https://youtu.be/1Unar6f66ko',
    },
  ]

  // Duplicate for seamless loop
  const duplicatedLaptopProjects = [...laptopVideoProjects, ...laptopVideoProjects]

  const webGraphicsProjects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'Web Development',
      description: 'Modern e-commerce solution with seamless user experience',
      gradient: 'from-yellow-400 to-orange-500',
    },
    {
      id: 2,
      title: 'Brand Identity Design',
      category: 'Graphic Design',
      description: 'Complete branding package with logo and visual assets',
      gradient: 'from-orange-500 to-red-500',
    },
    {
      id: 3,
      title: 'Corporate Website',
      category: 'Web Development',
      description: 'Professional website with responsive design',
      gradient: 'from-yellow-500 to-yellow-600',
    },
    {
      id: 4,
      title: 'Marketing Collaterals',
      category: 'Graphic Design',
      description: 'Posters, banners, and promotional materials',
      gradient: 'from-orange-400 to-yellow-500',
    },
    {
      id: 5,
      title: 'Mobile App Design',
      category: 'Web Development',
      description: 'User-friendly mobile application interface',
      gradient: 'from-yellow-400 to-red-400',
    },
    {
      id: 6,
      title: 'Logo Design',
      category: 'Graphic Design',
      description: 'Creative and memorable brand logos',
      gradient: 'from-orange-600 to-yellow-400',
    },
  ]

  // Duplicate for seamless loop
  const duplicatedWebProjects = [...webGraphicsProjects, ...webGraphicsProjects]

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
    <section className="relative bg-black py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          ref={headerRef as React.RefObject<HTMLDivElement>}
          className={`text-center mb-16 ${headerVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
            Glimpse of our <span className="relative inline-block">
              <span className="text-yellow-500">Projects</span>
              <span className={`absolute bottom-0 left-0 h-1 bg-yellow-500 transition-all duration-800 ${headerVisible ? 'w-full' : 'w-0'}`} style={{ transitionDelay: '0.3s' }} />
            </span>
          </h2>
        </div>

        {/* Video Projects Section */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3 animate-on-scroll">
            <FiPlay className="text-yellow-500" />
          Reels Projects
          </h3>

          <div className="relative">
            {/* Gradient Fade on Left */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-20 pointer-events-none" />
            
            {/* Gradient Fade on Right */}
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-20 pointer-events-none" />

            {isLoading ? (
              <div className="py-4 text-center text-gray-400">
                Loading reels...
              </div>
            ) : videoProjects.length === 0 ? (
              <div className="py-4 text-center text-gray-400">
                No reels found. Please check your Cloudinary configuration.
              </div>
            ) : (
              <Marquee
                speed={40}
                gradient={false}
                pauseOnHover={true}
                className="py-4"
              >
                {duplicatedVideoProjects.map((project, index) => (
                <div
                  key={`${project.id}-${index}`}
                  className="mx-4 group cursor-pointer hover-lift"
                >
                  {/* Mobile Frame */}
                  <div className="relative bg-gray-900 rounded-[2.5rem] p-3 shadow-2xl w-[280px]">
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
                              <pattern id={`video-pattern-${project.id}-${index}`} x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                                <circle cx="10" cy="10" r="1" fill="white" />
                              </pattern>
                              <rect width="100%" height="100%" fill={`url(#video-pattern-${project.id}-${index})`} />
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
                          <a href="/contact" className="text-sm opacity-90 bg-black rounded-full px-4 py-2">Conatct Us</a>
                        </div>
                      </div>
                    </div>

                    {/* Project Title Below */}
                    {/* <div className="mt-4 text-center">
                      <h4 className="text-white font-semibold text-sm group-hover:text-yellow-500 transition-colors">
                        {project.title}
                      </h4>
                    </div> */}
                  </div>
                </div>
              ))}
              </Marquee>
            )}
          </div>
        </div>

        {/* Laptop Video Projects Section */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3 animate-on-scroll">
            <FiPlay className="text-yellow-500" />
         Promotional Videos
          </h3>

          <div className="relative">
            {/* Gradient Fade on Left */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-20 pointer-events-none" />
            
            {/* Gradient Fade on Right */}
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-20 pointer-events-none" />

            <Marquee
              speed={35}
              gradient={false}
              pauseOnHover={true}
              className="py-4"
            >
              {duplicatedLaptopProjects.map((project, index) => (
                <div
                  key={`laptop-${project.id}-${index}`}
                  className="mx-4 group cursor-pointer hover-lift"
                >
                  {/* Laptop Frame */}
                  <div className="relative bg-gray-800 rounded-lg shadow-2xl w-[600px]">
                    {/* Laptop Top (Screen) */}
                    <div className="relative">
                      {/* Screen Bezel */}
                      <div className="bg-gray-900 rounded-t-lg p-2">
                        {/* Camera Notch */}
                        <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-16 h-1.5 bg-black rounded-full z-10" />
                        
                        {/* Screen */}
                        <div className="relative bg-black rounded overflow-hidden aspect-video">
                          {/* YouTube Video (Autoplay) */}
                          {project.videoId ? (
                            <iframe
                              src={`https://www.youtube-nocookie.com/embed/${project.videoId}?autoplay=1&mute=1&loop=1&playlist=${project.videoId}&controls=0&rel=0&modestbranding=1&playsinline=1&iv_load_policy=3&enablejsapi=0`}
                              title={project.title}
                              allow="autoplay; encrypted-media; picture-in-picture"
                              allowFullScreen
                              className="absolute inset-0 w-full h-full"
                              loading="lazy"
                            />
                          ) : (
                            <div className={`absolute inset-0 ${project.thumbnail}`}>
                              {/* Pattern Overlay */}
                              <div className="absolute inset-0 opacity-20">
                                <svg width="100%" height="100%">
                                  <pattern id={`laptop-pattern-${project.id}-${index}`} x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
                                    <circle cx="15" cy="15" r="1.5" fill="white" />
                                  </pattern>
                                  <rect width="100%" height="100%" fill={`url(#laptop-pattern-${project.id}-${index})`} />
                                </svg>
                              </div>
                            </div>
                          )}
                          
                          {/* Gradient Overlay for better visibility */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                          
                          {/* Category Badge */}
                          {/* <div className="absolute top-4 left-4 z-10">
                            <span className="px-3 py-1 bg-black/70 backdrop-blur-sm text-white text-xs font-semibold rounded-full">
                              {project.category}
                            </span>
                          </div> */}

                          {/* Hover Overlay */}
                          <div className="absolute inset-0 bg-yellow-500/30 backdrop-blur-sm flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="text-white text-center px-4">
                              <a href="/contact" className="text-sm opacity-90 bg-black rounded-full px-4 py-2">conatct us</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Laptop Bottom (Keyboard Base) */}
                    <div className="bg-gray-800 rounded-b-lg h-3 relative">
                      {/* Hinge */}
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gray-700 rounded-full" />
                    </div>

                    {/* Project Title Below */}
                    {/* <div className="mt-4 text-center">
                      <h4 className="text-white font-semibold text-sm group-hover:text-yellow-500 transition-colors">
                        {project.title}
                      </h4>
                    </div> */}
                  </div>
                </div>
              ))}
            </Marquee>
          </div>
        </div>

        {/* Web & Graphics Projects Section */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3 animate-on-scroll">
            <FiCode className="text-yellow-500" />
            Web & Graphics
          </h3>

          <div className="relative">
            {/* Gradient Fade on Left */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-20 pointer-events-none" />
            
            {/* Gradient Fade on Right */}
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-20 pointer-events-none" />

            <Marquee
              speed={40}
              direction="right"
              gradient={false}
              pauseOnHover={true}
              className="py-4"
            >
              {duplicatedWebProjects.map((project, index) => (
                <div
                  key={`web-${project.id}-${index}`}
                  className="mx-4 group cursor-pointer hover-lift"
                >
                  <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-2xl border-2 border-gray-800 hover:border-yellow-500 transition-all duration-300 h-full flex flex-col w-[350px]">
                    {/* Image/Thumbnail Area */}
                    <div className="relative h-48 overflow-hidden">
                      <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`}>
                        {/* Pattern */}
                        <div className="absolute inset-0 opacity-20">
                          <svg width="100%" height="100%">
                            <pattern id={`web-pattern-${project.id}-${index}`} x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                              <rect x="0" y="0" width="40" height="40" fill="none" stroke="white" strokeWidth="1" />
                            </pattern>
                            <rect width="100%" height="100%" fill={`url(#web-pattern-${project.id}-${index})`} />
                          </svg>
                        </div>
                        
                        {/* Icon */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          {project.category === 'Web Development' ? (
                            <FiCode className="w-16 h-16 text-white/30" />
                          ) : (
                            <FiImage className="w-16 h-16 text-white/30" />
                          )}
                        </div>
                      </div>

                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-black/50 backdrop-blur-sm text-white text-xs font-semibold rounded-full flex items-center gap-2">
                          {project.category === 'Web Development' ? (
                            <FiCode className="w-3 h-3" />
                          ) : (
                            <FiImage className="w-3 h-3" />
                          )}
                          {project.category}
                        </span>
                      </div>

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <FiExternalLink className="w-6 h-6 text-black" />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex-1 flex flex-col">
                      <h4 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-500 transition-colors">
                        {project.title}
                      </h4>
                      <p className="text-gray-400 text-sm flex-1">
                        {project.description}
                      </p>
                      
                      {/* Bottom Accent */}
                      <div className={`h-1 bg-gradient-to-r ${project.gradient} mt-4 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300`} />
                    </div>
                  </div>
                </div>
              ))}
            </Marquee>
          </div>
        </div>
      </div>

      {/* Background Decorative Elements - Removed for performance */}

    </section>
  )
}

export default RecentProjects