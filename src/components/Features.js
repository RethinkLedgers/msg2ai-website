import { Bot, MessageCircle, Zap, Shield, BarChart3, Globe } from 'lucide-react'

const features = [
  {
    icon: Bot,
    title: '24/7 AI Support',
    description: 'Never miss a guest inquiry with intelligent AI that provides instant responses around the clock.',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: MessageCircle,
    title: 'Multi-Platform Integration',
    description: 'Works seamlessly with SMS, WhatsApp, and other messaging platforms your guests already use.',
    color: 'from-purple-400 to-pink-400'
  },
  {
    icon: Zap,
    title: 'Instant Automation',
    description: 'Automate guest check-ins, room service requests, and common inquiries instantly.',
    color: 'from-purple-600 to-pink-600'
  },
  {
    icon: Shield,
    title: 'Secure & Reliable',
    description: 'Enterprise-grade security ensures guest data protection and reliable service delivery.',
    color: 'from-purple-300 to-pink-300'
  },
  {
    icon: BarChart3,
    title: 'Guest Insights',
    description: 'Track guest satisfaction, response times, and communication patterns with detailed analytics.',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: Globe,
    title: 'Global Communication',
    description: 'Support international guests with multilingual AI that speaks their language naturally.',
    color: 'from-purple-400 to-pink-400'
  }
]

export default function Features() {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose AI Ambassador?</h2>
          <p className="text-xl text-gray-400">Smart features that boost guest satisfaction and save time</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="relative group">
              <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl blur-xl`}></div>
              <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-700/30 hover:border-purple-600/50 transition-all duration-300">
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${feature.color} mb-4`}>
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
}