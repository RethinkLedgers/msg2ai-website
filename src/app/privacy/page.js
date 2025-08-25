'use client'
import Link from 'next/link'
import { Mail, Phone, MapPin, ArrowLeft } from 'lucide-react'
import Footer from '../../components/Footer'

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <div className="bg-gray-800/50 border-b border-purple-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link href="/" className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-4xl font-bold text-white mb-2">Privacy Policy</h1>
          <p className="text-gray-400">Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-invert prose-purple max-w-none">
          
          {/* Contact Information */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Contact Information</h2>
            <p className="text-gray-300 mb-6">For any privacy-specific concerns, reach out to us at:</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center space-x-3 p-4 bg-gray-800/50 rounded-lg border border-purple-800/30">
                <Mail className="h-5 w-5 text-purple-400 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <a href="mailto:info@msg2ai.xyz" className="text-white hover:text-purple-400 transition-colors">
                    info@msg2ai.xyz
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 p-4 bg-gray-800/50 rounded-lg border border-purple-800/30">
                <Phone className="h-5 w-5 text-purple-400 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-400">Phone</p>
                  <a href="tel:+17047372724" className="text-white hover:text-purple-400 transition-colors">
                    704-737-2724
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 p-4 bg-gray-800/50 rounded-lg border border-purple-800/30">
                <MapPin className="h-5 w-5 text-purple-400 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-400">Address</p>
                  <p className="text-white">7332 Summerlin Pl, Charlotte NC 28226</p>
                </div>
              </div>
            </div>
          </section>

          {/* Collection of Personal Information */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Collection of Personal Information</h2>
            
            <h3 className="text-xl font-semibold text-purple-400 mb-4">What We Collect:</h3>
            <ul className="text-gray-300 mb-6 space-y-2">
              <li>• Contact details such as names, email addresses, and phone numbers.</li>
              <li>• Automatically collected data like IP addresses and browser types.</li>
              <li>• User-generated content and comments.</li>
              <li>• Registration and account settings information.</li>
            </ul>

            <h3 className="text-xl font-semibold text-purple-400 mb-4">Why We Collect This Information:</h3>
            <ul className="text-gray-300 mb-6 space-y-2">
              <li>• To improve our website and enhance user experience.</li>
              <li>• To facilitate user interaction and manage accounts.</li>
              <li>• To provide support and respond to inquiries.</li>
              <li>• To maintain the security and integrity of our website.</li>
            </ul>
          </section>

          {/* Usage of Personal Information */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Usage of Personal Information</h2>
            <p className="text-gray-300 mb-4">Your data is used to:</p>
            <ul className="text-gray-300 space-y-2">
              <li>• Communicate with you and manage your account.</li>
              <li>• Provide spam protection and enhance site security.</li>
              <li>• Analyze website usage to improve our services.</li>
              <li>• Support interaction with embedded content from other sites.</li>
            </ul>
          </section>

          {/* Data Sharing and International Transfer */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Data Sharing and International Transfer</h2>
            <ul className="text-gray-300 space-y-2">
              <li>• We do not sell, share, or transfer your data to third parties.</li>
              <li>• No international transfer of data occurs. All personal data is processed within our operational jurisdiction.</li>
            </ul>
          </section>

          {/* Your Rights Over Your Data */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Your Rights Over Your Data</h2>
            <p className="text-gray-300 mb-4">You have rights to:</p>
            <ul className="text-gray-300 mb-6 space-y-2">
              <li>• Access and obtain a copy of your data on request.</li>
              <li>• Request correction or deletion of your data.</li>
              <li>• Object to processing or request restriction of processing.</li>
              <li>• Withdraw consent at any time where relevant.</li>
            </ul>
            <p className="text-gray-300">
              <strong>Exercising Your Rights:</strong> Contact us using the provided details to address any of the rights listed above.
            </p>
          </section>

          {/* Text Messaging */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Text Messaging</h2>
            <p className="text-gray-300 mb-4">If you opt into text messages:</p>
            <ul className="text-gray-300 space-y-2">
              <li>• We collect your phone number for sending alerts or promotional messages.</li>
              <li>• You may unsubscribe at any time via the instructions in each message.</li>
            </ul>
          </section>

          {/* Cookies and Site Monitoring */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Cookies and Site Monitoring</h2>
            <p className="text-gray-300">
              We use cookies to improve your experience, remember your settings, and support site security features. 
              Our Cookie Policy provides more detailed information.
            </p>
          </section>

          {/* Data Retention */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Data Retention</h2>
            <p className="text-gray-300">
              We retain personal data only as long as necessary to fulfill the purposes outlined here, 
              adhering to legal requirements.
            </p>
          </section>

          {/* Policy Updates */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Policy Updates</h2>
            <p className="text-gray-300">
              Our Privacy Policy may change over time. We will post updates on this page and encourage 
              you to review it periodically.
            </p>
          </section>

          {/* Embedded Content */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Embedded Content</h2>
            <p className="text-gray-300">
              Content on this site may include embedded elements (videos, images, articles) that behave 
              as if you have visited the originating site. These sites may collect data and use cookies.
            </p>
          </section>

          {/* Automated Spam Detection */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Automated Spam Detection</h2>
            <p className="text-gray-300">
              Visitor comments may be checked through an automated spam detection service.
            </p>
                     </section>

         </div>
       </div>
       
       {/* Footer */}
       <Footer />
     </div>
   )
 }
