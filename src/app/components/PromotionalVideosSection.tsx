'use client'
import { FiPlay } from 'react-icons/fi'
import Slider from '@/components/Slider'

const PromotionalVideosSection = () => {
  const laptopVideoProjects = [
    {
      id: 1,
      title: 'Promotional Video 1',
      category: 'Promotional Videos',
      thumbnail: 'bg-gradient-to-br from-gray-800 to-gray-900',
      videoId: 'Vk1Vybnmsiw',
      videoUrl: 'https://www.youtube.com/watch?v=Vk1Vybnmsiw',
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

  return (
    <div className="mb-20">
      <h3 className="text-2xl font-bold text-black mb-8 flex items-center gap-3 animate-on-scroll">
        <FiPlay className="text-yellow-500" />
        Promotional Videos
      </h3>

      <div className="relative">
        <Slider
          items={laptopVideoProjects.map((project) => (
            <div key={project.id} className="group cursor-pointer hover-lift">
              {/* Laptop Frame */}
              <div className="relative bg-gray-800 rounded-lg shadow-2xl w-full max-w-[600px] mx-auto">
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
                              <pattern id={`laptop-pattern-${project.id}`} x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
                                <circle cx="15" cy="15" r="1.5" fill="white" />
                              </pattern>
                              <rect width="100%" height="100%" fill={`url(#laptop-pattern-${project.id})`} />
                            </svg>
                          </div>
                        </div>
                      )}
                      
                      {/* Gradient Overlay for better visibility */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-yellow-500/30 backdrop-blur-sm flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="text-white text-center px-4">
                          <a href="/contact" className="text-sm opacity-90 bg-black rounded-full px-4 py-2">Contact Us</a>
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
              </div>
            </div>
          ))}
          itemsPerSlide={3}
          itemsPerSlideMobile={1}
          itemsPerSlideTablet={2}
          autoPlay={true}
          autoPlayInterval={5000}
          infinite={true}
          className="py-4"
        />
      </div>
    </div>
  )
}

export default PromotionalVideosSection
