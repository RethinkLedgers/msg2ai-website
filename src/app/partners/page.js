'use client'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, ExternalLink, Handshake, Star, Users, Globe, Shield } from 'lucide-react'
import Footer from '../../components/Footer'

export default function Partners() {
  const partners = [
    {
      name: 'Hostaway',
      logo: '/images/Partners/Hostaway.png',
      description: 'Leading vacation rental management platform that helps property managers scale their operations with powerful automation tools.',
      features: ['Property Management', 'Channel Management', 'Automation Tools', 'Analytics Dashboard'],
      website: 'https://www.hostaway.com'
    },
    {
      name: 'Guesty',
      logo: '/images/Partners/Guesty.png',
      description: 'Comprehensive vacation rental management software designed to streamline operations and enhance guest experiences.',
      features: ['Unified Inbox', 'Channel Manager', 'Guest Communication', 'Revenue Management'],
      website: 'https://www.guesty.com'
    },
    {
      name: 'Airia',
      logo: '/images/Partners/airia-logo.png',
      description: 'Innovative property management solution that combines AI-powered automation with personalized guest services.',
      features: ['AI Automation', 'Guest Services', 'Property Management', 'Smart Analytics'],
      website: 'https://www.airia.com'
    },
    {
      name: 'Hospitable',
      logo: '/images/Partners/Hospitable.png',
      description: 'Professional vacation rental management platform focused on delivering exceptional guest experiences through automation.',
      features: ['Guest Communication', 'Task Automation', 'Team Management', 'Performance Analytics'],
      website: 'https://www.hospitable.com'
    }
  ]

  const benefits = [
    {
      icon: Handshake,
      title: 'Strategic Partnerships',
      description: 'We work closely with industry leaders to provide seamless integrations and enhanced functionality.'
    },
    {
      icon: Star,
      title: 'Premium Support',
      description: 'Access to dedicated support teams and priority assistance for all our partner integrations.'
    },
    {
      icon: Users,
      title: 'Community Access',
      description: 'Join our partner community to share best practices and stay updated on new features.'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Leverage our partners\' global networks to expand your business reach and capabilities.'
    },
    {
      icon: Shield,
      title: 'Trusted Security',
      description: 'All our partnerships maintain the highest security standards to protect your data and operations.'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <div className="bg-gray-800/50 border-b border-purple-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link href="/" className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-4xl font-bold text-white mb-2">Our Partners</h1>
          <p className="text-gray-400">Strategic partnerships that power exceptional guest experiences</p>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Partnering with Industry Leaders
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            We collaborate with the most trusted names in vacation rental management to deliver 
            seamless integrations and powerful automation solutions for your business.
          </p>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {partners.map((partner, index) => (
              <div key={index} className="bg-gray-800/50 rounded-xl border border-purple-800/30 p-8 hover:border-purple-600/50 transition-all duration-300">
                <div className="flex items-center justify-between mb-6">
                  <div className="relative w-32 h-16">
                    <Image
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <a
                    href={partner.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    <ExternalLink className="h-4 w-4 mr-1" />
                    Visit
                  </a>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">{partner.name}</h3>
                <p className="text-gray-300 mb-6">{partner.description}</p>
                
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-purple-400 uppercase tracking-wide mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {partner.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-gray-300 text-sm flex items-center">
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Why Partner with Us?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our partnerships are built on mutual success, innovation, and a shared vision 
              for transforming the hospitality industry.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-600/20 rounded-full mb-6">
                  <benefit.icon className="h-8 w-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Partner with Us?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join our network of industry leaders and discover how AI Ambassador can transform 
            your guest communication and operational efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors"
            >
              Get Started
            </Link>
            <a
              href="mailto:info@msg2ai.xyz"
              className="inline-flex items-center justify-center px-8 py-3 border border-purple-600 text-purple-400 hover:bg-purple-600/10 font-semibold rounded-lg transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <Footer />
    </div>
  )
}
