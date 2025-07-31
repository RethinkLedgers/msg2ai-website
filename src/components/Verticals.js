import { Building2, Calendar, Home, Users } from 'lucide-react'
import Link from 'next/link'
import AIAmbassadorLogo from './AIAmbassadorLogo'

const verticals = [
  {
    icon: Building2,
    title: 'Hotels',
    description: 'Enhance guest experience with 24/7 AI-powered concierge services, room service automation, and multilingual support.',
    link: 'https://www.ai-ambassador.xyz/hotels',
    color: 'from-purple-500 to-pink-500',
    features: ['Guest Services', 'Concierge Automation', 'Multilingual Support', '24/7 Availability']
  },
  {
    icon: Home,
    title: 'Vacation Rentals',
    description: 'Streamline guest communication, automate check-in processes, and provide instant local recommendations.',
    link: 'https://www.ai-ambassador.xyz/vacation-rentals',
    color: 'from-purple-400 to-pink-400',
    features: ['Check-in Automation', 'Local Recommendations', 'Property Management', 'Guest Communication']
  },
  {
    icon: Calendar,
    title: 'Events',
    description: 'Manage attendee inquiries, provide real-time updates, and facilitate networking at conferences and events.',
    link: 'https://www.ai-ambassador.xyz/events',
    color: 'from-purple-600 to-pink-600',
    features: ['Attendee Management', 'Real-time Updates', 'Networking Facilitation', 'Event Information']
  },
  {
    icon: Users,
    title: 'Partner Assistants',
    description: 'Custom AI solutions tailored for business partners and specialized industry requirements.',
    link: 'https://www.ai-ambassador.xyz/partner-assistants',
    color: 'from-purple-300 to-pink-300',
    features: ['Custom Solutions', 'Industry Specialization', 'Partner Integration', 'Tailored AI']
  }
]

export default function Verticals() {
  return (
    <section id="verticals" className="py-20 px-4 sm:px-6 lg:px-8 bg-purple-900/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">AI Ambassador Solutions</h2>
          <p className="text-xl text-gray-400">Specialized AI solutions for every industry vertical</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {verticals.map((vertical, index) => (
            <div key={index} className="relative group">
              <div className={`absolute inset-0 bg-gradient-to-r ${vertical.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`}></div>
              <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-700/30 hover:border-purple-600/50 transition-all duration-300 h-full">
                <div className="flex items-start space-x-4 mb-6">
                  <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${vertical.color}`}>
                    <vertical.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold mb-2">{vertical.title}</h3>
                    <p className="text-gray-400 mb-4">{vertical.description}</p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-purple-400 mb-3 uppercase tracking-wide">Key Features</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {vertical.features.map((feature, i) => (
                      <div key={i} className="text-sm text-gray-300 flex items-center">
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                <Link 
                  href={vertical.link}
                  className="inline-flex items-center px-6 py-3 rounded-full font-semibold transition-all duration-200 transform hover:scale-105 bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="font-bold">
                    <span className="text-white">Explore </span>
                    <span className="text-teal-100">AI</span>
                    <span className="text-slate-100"> Ambassador</span>
                    <span className="text-white"> {vertical.title}</span>
                  </span>
                  <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/30">
            <div className="mb-4">
              <AIAmbassadorLogo size="text-3xl" className="justify-center" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Ready to Get Started?</h3>
            <p className="text-gray-400 mb-6">
              Choose your industry vertical and discover how AI Ambassador can transform your guest experience.
            </p>
            <Link 
              href="https://www.ai-ambassador.xyz"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 rounded-full font-semibold transition-all duration-200 transform hover:scale-105 text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="font-bold">
                <span className="text-white">Visit </span>
                <span className="text-teal-100">AI</span>
                <span className="text-slate-100"> Ambassador</span>
              </span>
              <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}