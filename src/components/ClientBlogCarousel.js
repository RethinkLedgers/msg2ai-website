'use client'
import dynamic from 'next/dynamic'

// Dynamically import the BlogCarousel with no SSR to avoid hydration issues
const BlogCarousel = dynamic(() => import('./BlogCarousel'), {
  ssr: false,
  loading: () => (
    <div className="post-carousel" aria-label="Vacation Rental Concierge Experience">
      <div className="pc-track">
        <div className="pc-slide">
          <div className="animate-pulse bg-gray-700 rounded-lg h-64"></div>
          <div className="animate-pulse bg-gray-600 rounded h-4 mt-2"></div>
        </div>
      </div>
    </div>
  )
})

export default function ClientBlogCarousel() {
  return <BlogCarousel />
}

