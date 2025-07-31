import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Building, Target, Award, Users } from 'lucide-react'

export const metadata = {
  title: 'About Us - AI Ambassador Platform',
  description: 'Learn about AI Ambassador, smart AI solutions for hotels, vacation rentals, and events that automate guest messaging and boost satisfaction.',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-900/10 to-gray-900">
      <Navbar />
      
      <div className="pt-24">
        <section className="px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  About msg2ai
                </span>
              </h1>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Smart AI solutions that automate guest messaging for hotels, vacation rentals, and events—boosting satisfaction and saving time with 24/7 support.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
              {[
                { icon: Building, title: 'Hotels', desc: 'AI-powered guest services and concierge automation' },
                { icon: Target, title: 'Vacation Rentals', desc: 'Streamlined check-in and property management' },
                { icon: Users, title: 'Events', desc: 'Real-time attendee management and networking' }
              ].map((vertical, idx) => (
                <div key={idx} className="text-center">
                  <div className="inline-flex p-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 mb-4">
                    <vertical.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{vertical.title}</h3>
                  <p className="text-gray-400">{vertical.desc}</p>
                </div>
              ))}
            </div>

            <div className="prose prose-invert prose-lg max-w-4xl mx-auto mb-20">
              <h2 className="text-3xl font-bold mb-6">What is msg2ai?</h2>
              <p className="text-gray-300 mb-6">
                msg2ai provides AI Ambassador, an intelligent messaging platform that automates guest communication for hotels, vacation rentals, and events. Our AI provides 24/7 support, instant responses, and personalized assistance to enhance guest satisfaction while reducing operational workload.
              </p>
              
              <h2 className="text-3xl font-bold mb-6 mt-12">Key Benefits</h2>
              <ul className="space-y-4 text-gray-300">
                <li><strong className="text-purple-400">24/7 Availability:</strong> Never miss a guest inquiry with round-the-clock AI support</li>
                <li><strong className="text-purple-400">Instant Responses:</strong> Provide immediate answers to common questions and requests</li>
                <li><strong className="text-purple-400">Multilingual Support:</strong> Communicate with international guests in their preferred language</li>
                <li><strong className="text-purple-400">Seamless Integration:</strong> Works with existing systems and messaging platforms</li>
                <li><strong className="text-purple-400">Analytics & Insights:</strong> Track guest satisfaction and communication patterns</li>
              </ul>

              <h2 className="text-3xl font-bold mb-6 mt-12">Industry Solutions</h2>
              <p className="text-gray-300 mb-6">
                Our AI Ambassador platform is specifically designed for the hospitality and events industry, with specialized features for hotels, vacation rentals, events, and partner integrations. Each vertical includes industry-specific templates, workflows, and integrations.
              </p>
            </div>
          </div>
        </section>
        
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900/20 to-pink-900/20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Guest Experience?</h2>
            <p className="text-xl text-gray-400 mb-8">
              Discover how AI Ambassador can automate your guest messaging and boost satisfaction with intelligent, 24/7 AI support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://www.ai-ambassador.xyz" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 px-8 py-3 rounded-full font-semibold transition-all duration-200 transform hover:scale-105 text-white">
                <span className="font-bold"><span className="text-white">Get Started with </span><span className="text-teal-100">AI</span><span className="text-slate-100"> Ambassador</span></span>
              </a>
              <a href="#contact" className="border border-purple-500 hover:border-purple-400 px-8 py-3 rounded-full font-semibold transition-all duration-200 hover:bg-purple-900/30">
                Contact Us
              </a>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  )
}