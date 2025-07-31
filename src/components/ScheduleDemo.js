'use client'
import { useState } from 'react'
import { Calendar, Clock, CheckCircle, ArrowRight } from 'lucide-react'

export default function ScheduleDemo() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    vertical: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real implementation, this would connect to AI Ambassador's scheduling system
    console.log('Demo scheduled:', formData)
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  if (isSubmitted) {
    return (
      <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-purple-700/30 p-8 text-center">
        <CheckCircle className="h-16 w-16 text-green-400 mx-auto mb-4" />
        <h3 className="text-2xl font-bold mb-2">Demo Request Submitted!</h3>
        <p className="text-gray-400">
          Our AI Ambassador team will contact you within 24 hours to schedule your personalized demo.
        </p>
      </div>
    )
  }

  return (
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-purple-700/30 p-8">
      <div className="flex items-center space-x-3 mb-6">
        <div className="h-12 w-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center">
          <Calendar className="h-6 w-6 text-white" />
        </div>
        <div>
          <h3 className="text-2xl font-bold">
            <span className="text-white">Schedule a Demo with </span>
            <span className="text-teal-400">AI</span>
            <span className="text-slate-100"> Ambassador</span>
          </h3>
          <p className="text-gray-400">See how AI Ambassador can transform your business</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Name *</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400"
              placeholder="Your full name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Business Email *</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400"
              placeholder="you@company.com"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Company</label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400"
              placeholder="Your company name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Industry Vertical</label>
            <select
              name="vertical"
              value={formData.vertical}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white"
            >
              <option value="">Select your industry</option>
              <option value="hotels">Hotels</option>
              <option value="vacation-rentals">Vacation Rentals</option>
              <option value="events">Events & Conferences</option>
              <option value="partner-assistants">Partner Assistants</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            What would you like to see in the demo?
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={3}
            className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400"
            placeholder="Tell us about your specific use case or questions..."
          />
        </div>

        <div className="flex items-center justify-between pt-4">
          <div className="flex items-center space-x-2 text-sm text-gray-400">
            <Clock className="h-4 w-4" />
            <span>30-minute personalized demo</span>
          </div>
          <button
            type="submit"
            className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 px-8 py-3 rounded-full font-semibold transition-all duration-200 transform hover:scale-105 text-white flex items-center"
          >
            <span className="font-bold">
              <span className="text-white">Schedule Demo with </span>
              <span className="text-teal-100">AI</span>
              <span className="text-slate-100"> Ambassador</span>
            </span>
            <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        </div>
      </form>
    </div>
  )
}