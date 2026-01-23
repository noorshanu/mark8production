'use client'
import { useState } from 'react'
import { FiCode, FiImage, FiExternalLink } from 'react-icons/fi'
import Image from 'next/image'
import Slider from '@/components/Slider'
import GalleryModal from './GalleryModal'

const WebGraphicsSection = () => {
  const [selectedGallery, setSelectedGallery] = useState<{
    title: string
    images: string[]
  } | null>(null)

  const webGraphicsProjects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'Web Development',
      description: 'Modern e-commerce solution with seamless user experience',
      gradient: 'from-yellow-400 to-orange-500',
      image: '/websitedev.jpg',
      gallery: [
        '/ecom/img1.png',
        '/ecom/img2.png',
        '/ecom/img3.png',
        '/ecom/img1.png',
        '/ecom/img2.png',
        '/ecom/img3.png',
        '/ecom/img1.png',
        '/ecom/img2.png',
        '/ecom/img3.png',
        '/ecom/img1.png',
      ],
    },
    {
      id: 2,
      title: 'Figma Design',
      category: 'Graphic & Logo Design',
      description: 'Complete branding package with logo and visual assets',
      gradient: 'from-orange-500 to-red-500',
      image: '/Services/graphicdesigner.jpg',
      gallery: [
        '/Services/graphicdesigner.jpg',
        '/websitedev.jpg',
        '/Services/webdesign.jpg',
        '/Services/graphicdesigner.jpg',
        '/websitedev.jpg',
        '/Services/webdesign.jpg',
        '/Services/graphicdesigner.jpg',
        '/websitedev.jpg',
        '/Services/webdesign.jpg',
        '/Services/graphicdesigner.jpg',
      ],
    },
    {
      id: 3,
      title: 'Landing Page',
      category: 'Web Development',
      description: 'Professional website with responsive design',
      gradient: 'from-yellow-500 to-yellow-600',
      image: '/Services/webdesign.jpg',
      gallery: [
        '/Corporatewebsite/img1.png',
        '/Corporatewebsite/img2.png',
        '/Corporatewebsite/img3.png',
        '/Corporatewebsite/img4.png',
        '/Corporatewebsite/img1.png',
        '/Corporatewebsite/img2.png',
        '/Corporatewebsite/img3.png',
        '/Corporatewebsite/img4.png',
        '/Corporatewebsite/img1.png',
        '/Corporatewebsite/img2.png',
      ],
    },
    {
      id: 4,
      title: 'SEO Optimization',
      category: 'Graphic Design',
      description: 'Posters, banners, and promotional materials',
      gradient: 'from-orange-400 to-yellow-500',
      image: '/Services/graphicdesigner.jpg',
      gallery: [
        '/Services/graphicdesigner.jpg',
        '/websitedev.jpg',
        '/Services/webdesign.jpg',
        '/Services/graphicdesigner.jpg',
        '/websitedev.jpg',
        '/Services/webdesign.jpg',
        '/Services/graphicdesigner.jpg',
        '/websitedev.jpg',
        '/Services/webdesign.jpg',
        '/Services/graphicdesigner.jpg',
      ],
    },
    {
      id: 5,
      title: 'Mobile App Design',
      category: 'Web Development',
      description: 'User-friendly mobile application interface',
      gradient: 'from-yellow-400 to-red-400',
      image: '/websitedev.jpg',
      gallery: [
        '/mobileapp/img1.png',
        '/mobileapp/img2.png',
        '/mobileapp/img3.png',
        '/mobileapp/img4.png',
        '/mobileapp/img1.png',
        '/mobileapp/img2.png',
        '/mobileapp/img3.png',
        '/mobileapp/img4.png',
        '/mobileapp/img1.png',
        '/mobileapp/img2.png',
      ],
    },
    {
      id: 6,
      title: 'Logo Design',
      category: 'Graphic Design',
      description: 'Creative and memorable brand logos',
      gradient: 'from-orange-600 to-yellow-400',
      image: '/Services/graphicdesigner.jpg',
      gallery: [
        '/Services/graphicdesigner.jpg',
        '/websitedev.jpg',
        '/Services/webdesign.jpg',
        '/Services/graphicdesigner.jpg',
        '/websitedev.jpg',
        '/Services/webdesign.jpg',
        '/Services/graphicdesigner.jpg',
        '/websitedev.jpg',
        '/Services/webdesign.jpg',
        '/Services/graphicdesigner.jpg',
      ],
    },
  ]

  const handleCardClick = (project: typeof webGraphicsProjects[0]) => {
    if (project.gallery && project.gallery.length > 0) {
      setSelectedGallery({
        title: project.title,
        images: project.gallery,
      })
    }
  }

  return (
    <div>
      <h3 className="text-2xl font-bold text-black mb-8 flex items-center gap-3 animate-on-scroll">
        <FiCode className="text-yellow-500" />
        Web & Graphics
      </h3>

      <div className="relative">
        <Slider
          items={webGraphicsProjects.map((project) => (
            <div
              key={project.id}
              className="group cursor-pointer hover-lift h-full"
              onClick={() => handleCardClick(project)}
            >
              <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-2xl border-2 border-gray-800 hover:border-yellow-500 transition-all duration-300 h-full flex flex-col w-full max-w-[350px] mx-auto">
                {/* Image/Thumbnail Area */}
                <div className="relative h-48 overflow-hidden">
                  {project.image ? (
                    <>
                      <Image 
                        src={project.image} 
                        alt={project.title} 
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        onError={(e) => {
                          // Fallback to gradient if image fails to load
                          const target = e.target as HTMLImageElement
                          target.style.display = 'none'
                        }}
                      />
                      {/* Gradient Overlay for better text readability */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-30`} />
                    </>
                  ) : (
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`}>
                      {/* Pattern */}
                      <div className="absolute inset-0 opacity-20">
                        <svg width="100%" height="100%">
                          <pattern id={`web-pattern-${project.id}`} x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                            <rect x="0" y="0" width="40" height="40" fill="none" stroke="white" strokeWidth="1" />
                          </pattern>
                          <rect width="100%" height="100%" fill={`url(#web-pattern-${project.id})`} />
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
                  )}

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
          itemsPerSlide={4}
          itemsPerSlideMobile={1}
          itemsPerSlideTablet={2}
          autoPlay={true}
          autoPlayInterval={5000}
          infinite={true}
          className="py-4"
        />
      </div>

      {/* Gallery Modal */}
      {selectedGallery && (
        <GalleryModal
          isOpen={!!selectedGallery}
          onClose={() => setSelectedGallery(null)}
          title={selectedGallery.title}
          images={selectedGallery.images}
        />
      )}
    </div>
  )
}

export default WebGraphicsSection
