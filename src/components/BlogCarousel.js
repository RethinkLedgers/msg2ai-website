'use client'
import { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function BlogCarousel() {
  const trackRef = useRef(null)

  const nextSlide = () => {
    if (trackRef.current) {
      const slideWidth = trackRef.current.querySelector('.pc-slide')?.offsetWidth || 0
      const gap = 16
      trackRef.current.scrollBy({ left: slideWidth + gap, behavior: 'smooth' })
    }
  }

  const prevSlide = () => {
    if (trackRef.current) {
      const slideWidth = trackRef.current.querySelector('.pc-slide')?.offsetWidth || 0
      const gap = 16
      trackRef.current.scrollBy({ left: -(slideWidth + gap), behavior: 'smooth' })
    }
  }

  return (
    <div className="post-carousel" aria-label="Vacation Rental Concierge Experience">
      <div className="pc-track" ref={trackRef}>
        <figure className="pc-slide">
          <img loading="lazy" src="/images/blog/WhatsApp-and-RCS-Templates-for-AI-Ambassador/For-Carousel/hotel-welcome-message.png" alt="WhatsApp concierge screen 1" />
          <figcaption>Welcome card</figcaption>
        </figure>

        <figure className="pc-slide">
          <img loading="lazy" src="/images/blog/WhatsApp-and-RCS-Templates-for-AI-Ambassador/For-Carousel/hotel-info.png" alt="WhatsApp concierge screen 2" />
          <figcaption>Property details</figcaption>
        </figure>

        <figure className="pc-slide">
          <img loading="lazy" src="/images/blog/WhatsApp-and-RCS-Templates-for-AI-Ambassador/For-Carousel/room-service-and-food.png" alt="WhatsApp concierge screen 3" />
          <figcaption>Room service</figcaption>
        </figure>

        <figure className="pc-slide">
          <img loading="lazy" src="/images/blog/WhatsApp-and-RCS-Templates-for-AI-Ambassador/For-Carousel/amenities.png" alt="WhatsApp concierge screen 4" />
          <figcaption>Hotel amenities</figcaption>
        </figure>

        <figure className="pc-slide">
          <img loading="lazy" src="/images/blog/WhatsApp-and-RCS-Templates-for-AI-Ambassador/For-Carousel/kids-menu.png" alt="WhatsApp concierge screen 5" />
          <figcaption>Kids menu</figcaption>
        </figure>
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
