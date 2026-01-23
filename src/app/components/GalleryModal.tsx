'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi'

interface GalleryModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  images: string[]
}

const GalleryModal = ({ isOpen, onClose, title, images }: GalleryModalProps) => {
  const [currentPage, setCurrentPage] = useState(1)
  const imagesPerPage = 5
  const totalPages = Math.ceil(images.length / imagesPerPage)

  // Reset to first page when modal opens
  useEffect(() => {
    if (isOpen) {
      setCurrentPage(1)
    }
  }, [isOpen])

  // Handle keyboard navigation
  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      } else if (e.key === 'ArrowLeft' && currentPage > 1) {
        setCurrentPage(prev => prev - 1)
      } else if (e.key === 'ArrowRight' && currentPage < totalPages) {
        setCurrentPage(prev => prev + 1)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, currentPage, totalPages, onClose])

  if (!isOpen) return null

  const startIndex = (currentPage - 1) * imagesPerPage
  const endIndex = startIndex + imagesPerPage
  const currentImages = images.slice(startIndex, endIndex)

  const goToPage = (page: number) => {
    setCurrentPage(page)
    // Scroll to top of gallery
    const galleryElement = document.getElementById('gallery-content')
    if (galleryElement) {
      galleryElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-2xl shadow-2xl max-w-5xl w-full mx-4 max-h-[80vh] overflow-hidden flex flex-col animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-2 border-b border-gray-200">
          <h2 className="text-lg sm:text-xl font-bold text-gray-900">{title}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Close gallery"
          >
            <FiX className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        {/* Gallery Content */}
        <div id="gallery-content" className="flex-1 overflow-y-auto p-2">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {currentImages.map((image, index) => (
              <div
                key={`${image}-${startIndex + index}`}
                className="group relative aspect-[4/3] overflow-hidden rounded-lg bg-gray-100 cursor-pointer hover:shadow-xl transition-shadow"
              >
                <Image
                  src={image}
                  alt={`${title} - Image ${startIndex + index + 1}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300 w-[250px] h-[250px]"

                />
              </div>
            ))}
          </div>
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="border-t border-gray-200 p-2 bg-gray-50">
            <div className="flex items-center justify-between">
              {/* Previous Button */}
              <button
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <FiChevronLeft className="w-5 h-5" />
                <span className="hidden sm:inline">Previous</span>
              </button>

              {/* Page Numbers */}
              <div className="flex items-center gap-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                  // Show first page, last page, current page, and pages around current
                  if (
                    page === 1 ||
                    page === totalPages ||
                    (page >= currentPage - 1 && page <= currentPage + 1)
                  ) {
                    return (
                      <button
                        key={page}
                        onClick={() => goToPage(page)}
                        className={`px-4 py-2 rounded-lg transition-colors ${
                          currentPage === page
                            ? 'bg-yellow-500 text-white font-semibold'
                            : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        {page}
                      </button>
                    )
                  } else if (page === currentPage - 2 || page === currentPage + 2) {
                    return <span key={page} className="px-2 text-gray-400">...</span>
                  }
                  return null
                })}
              </div>

              {/* Next Button */}
              <button
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <span className="hidden sm:inline">Next</span>
                <FiChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Page Info */}
            <div className="text-center mt-4 text-sm text-gray-600">
              Showing {startIndex + 1}-{Math.min(endIndex, images.length)} of {images.length} images
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default GalleryModal
