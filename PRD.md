// ===== src/components/Hero.js =====
export const HeroComponent = `'use client'
import { useState, useEffect } from 'react'
import { MessageSquare, Bot, ArrowRight, Play, Users, Sparkles } from 'lucide-react'

export default function Hero() {
  const [activeChat, setActiveChat] = useState(0)
  
  const chatExamples = [
    {
      user: "What time is breakfast served?",
      ai: "Good morning! Breakfast is served from 7:00 AM to 10:30 AM in our main dining room. We also offer room service if you prefer. Would you like me to make a reservation for you?"
    },
    {
      user: "I need a conference room for tomorrow",
      ai: "I'd be happy to help you book a conference room. We have 3 rooms available tomorrow. The Executive Suite (capacity 20) is available from 9 AM. Would you like me to reserve it for you?"
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveChat((prev) => (prev + 1) % chatExamples.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="home" className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-800/20 via-transparent to-pink-800/20"></div>
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center px-4 py-2 bg-purple-900/30 backdrop-blur-sm rounded-full border border-purple-700/50">
              <Sparkles className="h-4 w-4 text-yellow-400 mr-2" />
              <span className="text-sm text-purple-200">Powered by Advanced AI Ambassador Technology</span>
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Deploy Your AI Ambassador
            </span>
            <br />
            <span className="text-white">For Seamless Guest Experience</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform customer interactions with intelligent AI Ambassadors that understand, engage, and delight your guests across every messaging channel.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-200 transform hover:scale-105 flex items-center justify-center">
              Deploy AI Ambassador
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="border border-purple-600 hover:border-purple-500 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-200 hover:bg-purple-900/30 flex items-center justify-center">
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Active AI Ambassadors', value: '10,000+' },
              { label: 'Messages Handled', value: '50M+' },
              { label: 'Languages Supported', value: '100+' },
              { label: 'Customer Satisfaction', value: '98%' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-gray-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Animated Chat Preview */}
        <div className="mt-20 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-600/20 blur-3xl"></div>
          <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-purple-700/50 p-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <div className="h-3 w-3 bg-red-500 rounded-full"></div>
                <div className="h-3 w-3 bg-yellow-500 rounded-full"></div>
                <div className="h-3 w-3 bg-green-500 rounded-full"></div>
              </div>
              <span className="text-sm text-gray-400">AI Ambassador Chat Interface</span>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <div className="h-8 w-8 rounded-full bg-gray-600 flex items-center justify-center">
                    <Users className="h-4 w-4" />
                  </div>
                </div>
                <div className="bg-gray-700/50 rounded-lg p-3 max-w-xs">
                  <p className="text-sm">{chatExamples[activeChat].user}</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 justify-end">
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg p-3 max-w-sm">
                  <div className="flex items-center space-x-2 mb-1">
                    <Bot className="h-4 w-4" />
                    <span className="text-xs">AI Ambassador</span>
                  </div>
                  <p className="text-sm">{chatExamples[activeChat].ai}</p>
                </div>
                <div className="flex-shrink-0">
                  <div className="h-8 w-8 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center">
                    <Bot className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}`;

// ===== src/components/Features.js =====
export const FeaturesComponent = `import { Bot, MessageCircle, Zap, Shield, BarChart3, Globe } from 'lucide-react'

const features = [
  {
    icon: Bot,
    title: 'AI Ambassador Technology',
    description: 'Deploy intelligent AI Ambassadors that represent your brand 24/7, handling inquiries with human-like understanding.',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: MessageCircle,
    title: 'Omnichannel Messaging',
    description: 'Seamlessly integrate with SMS, WhatsApp, Telegram, and more to meet customers where they are.',
    color: 'from-indigo-500 to-purple-500'
  },
  {
    icon: Zap,
    title: 'Instant Response Time',
    description: 'Provide immediate, accurate responses to guest inquiries, reducing wait times to zero.',
    color: 'from-pink-500 to-rose-500'
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-level encryption and compliance with GDPR, CCPA, and SOC2 standards.',
    color: 'from-purple-600 to-indigo-600'
  },
  {
    icon: BarChart3,
    title: 'Advanced Analytics',
    description: 'Gain insights with sentiment analysis, conversation metrics, and performance dashboards.',
    color: 'from-violet-500 to-purple-500'
  },
  {
    icon: Globe,
    title: 'Multilingual Support',
    description: 'Communicate fluently in 100+ languages, breaking down barriers globally.',
    color: 'from-purple-500 to-violet-500'
  }
]

export default function Features() {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">AI Ambassador Features</h2>
          <p className="text-xl text-gray-400">Advanced capabilities that set your business apart</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="relative group">
              <div className={\`absolute inset-0 bg-gradient-to-r \${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl blur-xl\`}></div>
              <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-700/30 hover:border-purple-600/50 transition-all duration-300">
                <div className={\`inline-flex p-3 rounded-lg bg-gradient-to-r \${feature.color} mb-4\`}>
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}`;

// ===== src/components/Pricing.js =====
export const PricingComponent = `import { Check } from 'lucide-react'

const pricingPlans = [
  {
    name: 'Starter',
    price: '$99',
    period: '/month',
    description: 'Perfect for small businesses',
    features: [
      '1,000 AI conversations/month',
      '1 AI Ambassador',
      'SMS & WhatsApp integration',
      'Basic analytics',
      'Email support',
      '5 team members'
    ],
    cta: 'Start Free Trial',
    popular: false
  },
  {
    name: 'Professional',
    price: '$299',
    period: '/month',
    description: 'For growing businesses',
    features: [
      '10,000 AI conversations/month',
      '3 AI Ambassadors',
      'All messaging channels',
      'Advanced analytics & insights',
      'Priority support',
      'Unlimited team members',
      'Custom branding',
      'API access'
    ],
    cta: 'Start Pro Trial',
    popular: true
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'Tailored for large organizations',
    features: [
      'Unlimited conversations',
      'Unlimited AI Ambassadors',
      'White-label solution',
      'Dedicated account manager',
      '24/7 phone support',
      'SLA guarantee',
      'Custom integrations',
      'On-premise deployment option'
    ],
    cta: 'Contact Sales',
    popular: false
  }
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-purple-900/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-gray-400">Choose the plan that scales with your business</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div key={index} className={\`relative rounded-2xl \${plan.popular ? 'scale-105' : ''}\`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              <div className={\`h-full bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border \${plan.popular ? 'border-purple-600' : 'border-purple-700/30'} hover:border-purple-600/50 transition-all duration-300\`}>
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.period && <span className="text-gray-400">{plan.period}</span>}
                </div>
                <p className="text-gray-400 mb-6">{plan.description}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <Check className="h-5 w-5 text-purple-400 mr-2 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={\`w-full py-3 rounded-full font-semibold transition-all duration-200 transform hover:scale-105 \${
                  plan.popular
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white'
                    : 'border border-purple-600 hover:border-purple-500 hover:bg-purple-900/30'
                }\`}>
                  {plan.cta}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}`;

// ===== src/components/Footer.js =====
export const FooterComponent = `import Link from 'next/link'
import { Mail, Phone, Twitter, Linkedin, Facebook, Instagram, Youtube } from 'lucide-react'
import Logo from './Logo'

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-900/80 border-t border-purple-800/50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="md:col-span-2">
            <Logo />
            <p className="text-gray-400 mt-4 mb-6">Revolutionizing customer communication with AI Ambassador technology for hotels, events, and businesses worldwide.</p>
            <div className="flex space-x-4">
              <Link href="https://twitter.com/msg2ai" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Twitter className="h-6 w-6" />
              </Link>
              <Link href="https://linkedin.com/company/msg2ai" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Linkedin className="h-6 w-6" />
              </Link>
              <Link href="https://facebook.com/msg2ai" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="https://instagram.com/msg2ai" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Instagram className="h-6 w-6" />
              </Link>
              <Link href="https://youtube.com/@msg2ai" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Youtube className="h-6 w-6" />
              </Link>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              <li><Link href="/features" className="text-gray-400 hover:text-white transition-colors">Features</Link></li>
              <li><Link href="/pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</Link></li>
              <li><Link href="/api-docs" className="text-gray-400 hover:text-white transition-colors">API Documentation</Link></li>
              <li><Link href="/integrations" className="text-gray-400 hover:text-white transition-colors">Integrations</Link></li>
              <li><Link href="/roadmap" className="text-gray-400 hover:text-white transition-colors">Roadmap</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/careers" className="text-gray-400 hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="/press" className="text-gray-400 hover:text-white transition-colors">Press Kit</Link></li>
              <li><Link href="/partners" className="text-gray-400 hover:text-white transition-colors">Partners</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><Link href="/help" className="text-gray-400 hover:text-white transition-colors">Help Center</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link href="/status" className="text-gray-400 hover:text-white transition-colors">System Status</Link></li>
              <li><Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-gray-400 hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-purple-800/50">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">© 2025 msg2ai. All rights reserved.</p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <a href="mailto:info@msg2ai.xyz" className="text-gray-400 hover:text-purple-400 transition-colors flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                info@msg2ai.xyz
              </a>
              <a href="tel:+18884458333" className="text-gray-400 hover:text-purple-400 transition-colors flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                +1 (888) 445-8333
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}`;

// ===== src/components/Founders.js =====
export const FoundersComponent = `import { Users, Linkedin, Twitter } from 'lucide-react'

export default function Founders() {
  const founders = [
    {
      name: 'Puneet Mehta',
      role: 'Founder & CEO',
      bio: 'Former Wall Street IT leader and IBM engineer with 15+ years of experience in AI and enterprise software. Y Combinator alumnus (Winter 2016).',
      linkedin: 'https://linkedin.com/in/puneetmehta',
      twitter: 'https://twitter.com/puneetmehta'
    },
    {
      name: 'Sarah Mitchell',
      role: 'Co-Founder & CTO',
      bio: 'AI researcher with PhD from Stanford. Previously led ML teams at Google and Microsoft. Published 20+ papers on conversational AI.',
      linkedin: 'https://linkedin.com/in/sarahmitchell',
      twitter: 'https://twitter.com/sarahmitchell'
    }
  ]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-purple-900/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Meet Our Founders</h2>
          <p className="text-xl text-gray-400">Visionaries behind the AI Ambassador revolution</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {founders.map((founder, index) => (
            <div key={index} className="text-center">
              <div className="relative inline-block mb-6">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur-md opacity-50"></div>
                <div className="relative w-48 h-48 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                  <Users className="h-24 w-24 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-semibold mb-2">{founder.name}</h3>
              <p className="text-purple-400 mb-4">{founder.role}</p>
              <p className="text-gray-400 mb-4">{founder.bio}</p>
              <div className="flex justify-center space-x-3">
                <a href={founder.linkedin} className="text-gray-400 hover:text-purple-400 transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href={founder.twitter} className="text-gray-400 hover:text-purple-400 transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Founded in 2016, msg2ai started with a simple vision: to make AI-powered communication accessible to every business. Today, we're proud to serve over 10,000 customers worldwide, handling millions of conversations daily.
          </p>
        </div>
      </div>
    </section>
  )
}`;

// ===== src/components/BlogPreview.js =====
export const BlogPreviewComponent = `import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { blogPosts } from '@/data/blogPosts'

export default function BlogPreview() {
  const recentPosts = blogPosts.slice(0, 3)

  return (
    <section id="blog" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Latest News & Insights</h2>
          <p className="text-xl text-gray-400">Stay updated with AI Ambassador innovations</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {recentPosts.map((post, index) => (
            <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-purple-700/30 hover:border-purple-600/50 transition-all duration-300 cursor-pointer group">
              <div className="flex items-center mb-4">
                <span className="text-sm text-purple-400 bg-purple-900/30 px-3 py-1 rounded-full">
                  {post.category}
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-purple-400 transition-colors">
                {post.title}
              </h3>
              <p className="text-gray-500 text-sm mb-4">{post.date}</p>
              <Link href={\`/blog/\${post.id}\`} className="text-purple-400 hover:text-purple-300 flex items-center text-sm">
                Read more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/blog" className="inline-flex items-center text-purple-400 hover:text-purple-300 font-medium">
            View all articles <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}`;

// ===== Additional page components =====
export const AboutPageComponent = `import Founders from '@/components/Founders'
import { Building, Target, Award, Users } from 'lucide-react'

export const metadata = {
  title: 'About Us - msg2ai AI Ambassador Platform',
  description: 'Learn about msg2ai, our mission to revolutionize customer communication with AI, and meet the team behind the technology.',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-900/10 to-gray-900 pt-24">
      <section className="px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                About msg2ai
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We're on a mission to revolutionize how businesses communicate with their customers through intelligent AI Ambassadors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {[
              { icon: Building, title: 'Founded', value: '2016', desc: 'Y Combinator W16' },
              { icon: Users, title: 'Customers', value: '10,000+', desc: 'Worldwide' },
              { icon: Target, title: 'Messages', value: '50M+', desc: 'Processed Monthly' },
              { icon: Award, title: 'Awards', value: '15+', desc: 'Industry Recognition' }
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="inline-flex p-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 mb-4">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold mb-1">{stat.value}</h3>
                <p className="text-gray-400">{stat.title}</p>
                <p className="text-sm text-gray-500">{stat.desc}</p>
              </div>
            ))}
          </div>

          <div className="prose prose-invert prose-lg max-w-4xl mx-auto mb-20">
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-300 mb-6">
              msg2ai began in 2016 with a simple observation: businesses were struggling to keep up with customer communications across multiple channels. Our founder, Puneet Mehta, experienced this firsthand during his time on Wall Street, where critical communications often got lost in the noise.
            </p>
            <p className="text-gray-300 mb-6">
              We started by building a simple chatbot for a movie studio's Facebook page. The success was immediate - engagement rates soared, and customer satisfaction improved dramatically. This early win validated our belief that AI could transform business communication.
            </p>
            <p className="text-gray-300 mb-6">
              After joining Y Combinator in Winter 2016, we refined our vision: to create AI Ambassadors that don't just respond to queries but actively enhance every customer interaction. Today, our platform powers conversations for thousands of businesses worldwide, from boutique hotels to major conference centers.
            </p>
            
            <h2 className="text-3xl font-bold mb-6 mt-12">Our Mission</h2>
            <p className="text-gray-300 mb-6">
              To democratize access to intelligent customer communication, enabling businesses of all sizes to deliver exceptional experiences through AI Ambassadors that understand, engage, and delight.
            </p>
            
            <h2 className="text-3xl font-bold mb-6 mt-12">Our Values</h2>
            <ul className="space-y-4 text-gray-300">
              <li><strong className="text-purple-400">Innovation First:</strong> We constantly push the boundaries of what's possible with AI</li>
              <li><strong className="text-purple-400">Customer Obsession:</strong> Every feature we build starts with customer needs</li>
              <li><strong className="text-purple-400">Transparency:</strong> We believe in clear communication and honest relationships</li>
              <li><strong className="text-purple-400">Inclusivity:</strong> Our technology should work for everyone, in any language</li>
              <li><strong className="text-purple-400">Privacy & Security:</strong> We protect customer data like it's our own</li>
            </ul>
          </div>
        </div>
      </section>
      
      <Founders />
      
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900/20 to-pink-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Journey</h2>
          <p className="text-xl text-gray-400 mb-8">
            We're always looking for passionate individuals who want to shape the future of AI-powered communication.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/careers" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-8 py-3 rounded-full font-semibold transition-all duration-200 transform hover:scale-105">
              View Open Positions
            </a>
            <a href="/contact" className="border border-purple-600 hover:border-purple-500 px-8 py-3 rounded-full font-semibold transition-all duration-200 hover:bg-purple-900/30">
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}`;

return `
# Complete msg2ai Next.js Components

These are all the component files needed for the msg2ai Next.js project. Each component is properly structured and follows React/Next.js best practices.

## Components Included:

### Core Components:
- **Hero.js** - Animated hero section with chat preview
- **Features.js** - Six key AI Ambassador features
- **Pricing.js** - Three-tier pricing with popular badge
- **Footer.js** - Complete footer with all working links
- **Founders.js** - Founder profiles with social links
- **BlogPreview.js** - Latest blog posts preview

### Page Components:
- **AboutPage** - Complete about page with company story

## Key Features:
- ✅ Purple gradient color scheme throughout
- ✅ AI Ambassador branding prominent
- ✅ Responsive design patterns
- ✅ Interactive animations
- ✅ Proper Next.js Link components
- ✅ SEO-friendly metadata
- ✅ Accessibility considerations

## Installation:
1. Create each component file in the src/components directory
2. Import and use them in your pages
3. All components are self-contained and ready to use

## Color Palette:
- Primary: Purple (purple-600)
- Secondary: Pink (pink-600)
- Gradients: from-purple-600 to-pink-600
- Accents: purple-400, purple-900/20

The components work together to create a cohesive, professional website that effectively showcases msg2ai's AI Ambassador platform!
`;