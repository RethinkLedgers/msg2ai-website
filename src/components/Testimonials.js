import { Star, Quote, Building2, Calendar, Home, Users } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    title: "General Manager",
    company: "Boutique Charleston Hotel",
    industry: "Hotels",
    icon: Building2,
    rating: 5,
    quote: "AI Ambassador has transformed our guest experience completely. We're now able to provide 24/7 multilingual support that our international guests absolutely love. Guest satisfaction scores have increased by 35% since implementing AI Ambassador.",
    image: "/api/placeholder/80/80",
    metrics: "35% increase in guest satisfaction"
  },
  {
    id: 2,
    name: "Michael Chen",
    title: "Property Owner",
    company: "Mountain View Vacation Rentals",
    industry: "Vacation Rentals",
    icon: Home,
    rating: 5,
    quote: "The AI Assistant handles local recommendations and maintenance requests seamlessly. It's like having a dedicated concierge for each property. Our guests feel taken care of even when we're not physically present.",
    image: "/api/placeholder/80/80",
    metrics: "50% reduction in manual inquiries"
  },
  {
    id: 3,
    name: "David Rodriguez",
    title: "Event Director",
    company: "Venture135 Conference",
    industry: "Events",
    icon: Calendar,
    rating: 5,
    quote: "AI Ambassador's AI Assistant was a game-changer at our conference. Attendees could instantly access speaker information, schedules, and networking opportunities. The real-time feedback collection helped us optimize the event on the fly.",
    image: "/api/placeholder/80/80",
    metrics: "90% attendee engagement rate"
  },
  {
    id: 4,
    name: "Lisa Thompson",
    title: "Operations Manager",
    company: "Coastal Resort Group",
    industry: "Hotels",
    icon: Building2,
    rating: 5,
    quote: "The automation has been incredible. Room service requests, housekeeping schedules, and guest inquiries are all handled efficiently. Our staff can focus on providing personalized service instead of answering repetitive questions.",
    image: "/api/placeholder/80/80",
    metrics: "40% operational efficiency gain"
  },
  {
    id: 5,
    name: "James Park",
    title: "Conference Organizer",
    company: "Tech Innovation Summit",
    industry: "Events",
    icon: Calendar,
    rating: 5,
    quote: "The AI Assistant provided personalized recommendations for each attendee based on their interests. It was like having a personal networking coordinator for 500+ participants. Absolutely revolutionary for event management.",
    image: "/api/placeholder/80/80",
    metrics: "500+ participants served"
  },
  {
    id: 6,
    name: "Maria Gonzalez",
    title: "Vacation Rental Host",
    company: "Seaside Escapes",
    industry: "Vacation Rentals",
    icon: Home,
    rating: 5,
    quote: "Guests love the instant responses they get about local attractions, restaurants, and activities. The AI speaks multiple languages, which is perfect for our international visitors. It's like having a local expert available 24/7.",
    image: "/api/placeholder/80/80",
    metrics: "Multi-language support"
  },
  {
    id: 7,
    name: "Juan Garzon",
    title: "Founder & CEO",
    company: "Garzon Ventures",
    industry: "Events",
    icon: Calendar,
    rating: 5,
    quote: "The AI assistant at our conference was instrumental in providing attendees with real-time updates on the agenda, details on presenting companies, and sponsor information, greatly enhancing their overall experience and engagement.",
    image: "/images/Testimonials/juan-garzon.jpg",
    metrics: "Enhanced attendee engagement"
  }
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-purple-900/5 to-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">What Our Customers Are Saying</h2>
          <p className="text-xl text-gray-400">Real results from hotels, vacation rentals, and events using AI Ambassador</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-purple-700/30 hover:border-purple-600/50 transition-all duration-300 p-6 relative">
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-20">
                <Quote className="h-8 w-8 text-purple-400" />
              </div>

              {/* Industry Icon & Category */}
              <div className="flex items-center space-x-3 mb-4">
                <div className="inline-flex p-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500">
                  <testimonial.icon className="h-5 w-5 text-white" />
                </div>
                <span className="text-sm font-medium text-purple-400">{testimonial.industry}</span>
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-gray-300 mb-6 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>

              {/* Metrics */}
              {testimonial.metrics && (
                <div className="bg-purple-900/30 rounded-lg p-3 mb-4">
                  <div className="text-center">
                    <div className="text-lg font-bold text-purple-300">{testimonial.metrics}</div>
                    <div className="text-xs text-gray-400">Key Result</div>
                  </div>
                </div>
              )}

              {/* Author Info */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold text-sm">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.title}</div>
                  <div className="text-xs text-purple-400">{testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Statistics Section */}
        <div className="mt-20 bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-purple-700/30 p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Trusted by Industry Leaders</h3>
            <p className="text-gray-400">Join hundreds of businesses revolutionizing their guest experience</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Hotels & Resorts', value: '5' },
              { label: 'Vacation Rentals', value: '24' },
              { label: 'Events Powered', value: '15' },
              { label: 'Guest Satisfaction', value: '98%' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-300 mb-6">Ready to join these success stories?</p>
          <a 
            href="https://cal.com/msg2ai/30minutes"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-full font-semibold transition-all duration-200 transform hover:scale-105 text-white"
          >
            Schedule Your Demo
            <Users className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  )
}