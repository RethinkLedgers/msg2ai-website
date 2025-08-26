import { Check } from 'lucide-react'

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
                <button className={`w-full py-3 rounded-full font-semibold transition-all duration-200 transform hover:scale-105 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white'
                    : 'border border-purple-600 hover:border-purple-500 hover:bg-purple-900/30'
                }`}>
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