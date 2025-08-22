'use client'
import { useState, useEffect, useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function Carousel({ images, title }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const trackRef = useRef(null)

  const nextSlide = () => {
    if (trackRef.current) {
      const slideWidth = trackRef.current.querySelector('.pc-slide')?.offsetWidth || 0
      const gap = 16 // gap between slides
      trackRef.current.scrollBy({ left: slideWidth + gap, behavior: 'smooth' })
    }
  }

  const prevSlide = () => {
    if (trackRef.current) {
      const slideWidth = trackRef.current.querySelector('.pc-slide')?.offsetWidth || 0
      const gap = 16 // gap between slides
      trackRef.current.scrollBy({ left: -(slideWidth + gap), behavior: 'smooth' })
    }
  }

  return (
    <div className="post-carousel" aria-label={title || "Image Carousel"}>
      <div className="pc-track" ref={trackRef}>
        {images.map((image, index) => (
          <figure key={index} className="pc-slide">
            <img 
              loading="lazy" 
              src={image.src} 
              alt={image.alt} 
            />
            {image.caption && (
              <figcaption>{image.caption}</figcaption>
            )}
          </figure>
        ))}
      </div>

      <button className="pc-nav pc-prev" onClick={prevSlide} aria-label="Previous">
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button className="pc-nav pc-next" onClick={nextSlide} aria-label="Next">
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  )
}
