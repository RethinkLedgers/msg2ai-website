import { Check } from 'lucide-react'

const pricingPlans = [
  {
    name: 'Starter',
    originalPrice: '$39.99/Month',
    price: '$9.99',
    period: '/Month',
    discount: '-75% off',
    features: [
      '250 text messages',
      'Email Support',
      'Broadcast messages',
      'Chat History',
      'Support via AI Agent'
    ],
    cta: 'Start Free Trial',
    popular: false
  },
  {
    name: 'Professional',
    originalPrice: '$99.99/Month',
    price: '$24.99',
    period: '/Month',
    discount: '-75% off',
    features: [
      'Includes Starter Plan benefits',
      '1000 text messages',
      'Sentiment Analysis',
      'Enhanced Notifications',
      'Enhanced Web Scraping',
      'Custom Onboarding'
    ],
    cta: 'Start Free Trial',
    popular: true
  },
  {
    name: 'Expert',
    price: 'Call Now',
    discount: '-75% off',
    features: [
      'Includes Professional Plan benefits',
      '5000 text messages',
      'Onboarding Assistance',
      'Custom pricing for multiple properties or conference events'
    ],
    cta: 'Start Free Trial',
    popular: false
  }
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-purple-900/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-gray-400 mb-4">Choose the plan that scales with your business</p>
          <div className="flex justify-center">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
              Most Popular
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div key={index} className={`relative rounded-2xl ${plan.popular ? 'scale-105' : ''}`}>
              <div className={`h-full bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border ${plan.popular ? 'border-purple-600' : 'border-purple-700/30'} hover:border-purple-600/50 transition-all duration-300`}>
                <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">{plan.name}</h3>
                
                {plan.originalPrice && (
                  <div className="mb-2">
                    <span className="text-gray-400 line-through">{plan.originalPrice}</span>
                    <span className="ml-2 bg-gray-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                      {plan.discount}
                    </span>
                  </div>
                )}
                
                {!plan.originalPrice && plan.discount && (
                  <div className="mb-2">
                    <span className="bg-gray-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                      {plan.discount}
                    </span>
                  </div>
                )}
                
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  {plan.period && <span className="text-gray-400">{plan.period}</span>}
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <Check className="h-5 w-5 text-purple-400 mr-2 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className="w-full py-3 rounded-full font-semibold transition-all duration-200 transform hover:scale-105 bg-white text-black hover:bg-gray-100">
                  {plan.cta}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}