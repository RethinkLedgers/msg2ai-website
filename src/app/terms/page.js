'use client'
import Link from 'next/link'
import { Mail, MapPin, ArrowLeft } from 'lucide-react'
import Footer from '../../components/Footer'

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <div className="bg-gray-800/50 border-b border-purple-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link href="/" className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-4xl font-bold text-white mb-2">Terms of Service</h1>
          <p className="text-gray-400">Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-invert prose-purple max-w-none">
          
          {/* Introduction */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Introduction</h2>
            <p className="text-gray-300 mb-6">
              Welcome to Msg2ai! These Terms of Service govern your use of our website located at{' '}
              <a href="https://www.msg2ai.xyz" className="text-purple-400 hover:text-purple-300 transition-colors">
                https://www.msg2ai.xyz
              </a>{' '}
              and our text messaging services. By accessing our website or using our services, you agree to be bound by these terms. 
              If you disagree with any part of the terms, you may not access the service.
            </p>
          </section>

          {/* Eligibility */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Eligibility</h2>
            <p className="text-gray-300">
              You must be at least 18 years old to use our services. By agreeing to these Terms, you represent and warrant 
              that you are at least 18 years of age.
            </p>
          </section>

          {/* Website Use */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Website Use</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-purple-400 mb-4">a. License to Use Website</h3>
                <p className="text-gray-300">
                  We grant you a limited, non-exclusive, revocable license to use our website for your personal, 
                  non-commercial use in accordance with these Terms.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-purple-400 mb-4">b. Prohibited Activities</h3>
                <p className="text-gray-300">
                  You are not permitted to use the website for any unlawful purpose, to solicit others to perform 
                  or participate in any unlawful acts, or to violate any international, federal, provincial, or 
                  state regulations, rules, laws, or local ordinances.
                </p>
              </div>
            </div>
          </section>

          {/* Text Messaging Service */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Text Messaging Service</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-purple-400 mb-4">a. Opt-In</h3>
                <p className="text-gray-300">
                  You must opt-in to our text messaging service by providing your consent to receive text messages 
                  for marketing or informational purposes.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-purple-400 mb-4">b. Fees</h3>
                <p className="text-gray-300">
                  Standard text messaging and data rates may apply to each text message sent or received as detailed 
                  in your mobile phone service rate plan.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-purple-400 mb-4">c. Opt-Out</h3>
                <p className="text-gray-300">
                  You may opt out of receiving text messages from us at any time by following the instructions 
                  provided in the text messages.
                </p>
              </div>
            </div>
          </section>

          {/* Prohibited Content for Text Messaging Services */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Prohibited Content for Text Messaging Services</h2>
            <p className="text-gray-300 mb-6">
              The following categories of messages are strictly prohibited for SMS/MMS in the US/Canada through our services:
            </p>
            
            <ul className="text-gray-300 space-y-3">
              <li><strong className="text-purple-400">High-risk Financial Services:</strong> Including payday loans, cryptocurrency, and third-party loans.</li>
              <li><strong className="text-purple-400">Third-party Lead Generation and Marketing:</strong> No sharing or selling of consumer information is allowed.</li>
              <li><strong className="text-purple-400">Debt Collection or Forgiveness:</strong> Only direct consents allow messaging for debt collection.</li>
              <li><strong className="text-purple-400">"Get Rich Quick" Schemes:</strong> MLM and deceptive work-from-home programs are restricted.</li>
              <li><strong className="text-purple-400">Illegal Substances/Articles:</strong> Includes cannabis, CBD, and paraphernalia products.</li>
              <li><strong className="text-purple-400">Prescription Drugs:</strong> Promotions or sales via SMS/MMS are forbidden.</li>
              <li><strong className="text-purple-400">Gambling:</strong> General gambling content is prohibited except under special circumstances.</li>
              <li><strong className="text-purple-400">S.H.A.F.T. Categories:</strong> Includes restrictions on messaging related to sex, hate, alcohol, firearms, tobacco, and vaping products.</li>
            </ul>
          </section>

          {/* Intellectual Property Rights */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Intellectual Property Rights</h2>
            <p className="text-gray-300">
              The content on our website, including text, graphics, images, and other material are the intellectual 
              property of Rethink Ledgers or our licensors and are protected by copyright and other intellectual property laws.
            </p>
          </section>

          {/* User Contributions */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">User Contributions</h2>
            <p className="text-gray-300">
              Users may post content as long as it is not obscene, illegal, defamatory, threatening, infringing 
              of intellectual property rights, invasive of privacy, or otherwise injurious or objectionable.
            </p>
          </section>

          {/* Termination */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Termination</h2>
            <p className="text-gray-300">
              We may terminate or suspend access to our services immediately, without prior notice or liability, 
              for any reason whatsoever, including, without limitation, if you breach the Terms.
            </p>
          </section>

          {/* Disclaimer of Warranties; Limitation of Liability */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Disclaimer of Warranties; Limitation of Liability</h2>
            <p className="text-gray-300">
              We do not guarantee the accuracy, completeness, or usefulness of any information on the site and 
              neither endorse nor are responsible for the accuracy and reliability of any opinion, advice, or 
              statement made. Under no circumstances will we be liable for any loss or damage caused by your 
              reliance on information obtained through the site.
            </p>
          </section>

          {/* Governing Law */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Governing Law</h2>
            <p className="text-gray-300">
              These Terms shall be governed by and construed in accordance with the laws of North Carolina, 
              without regard to its conflict of law provisions.
            </p>
          </section>

          {/* Changes to Terms */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Changes to Terms</h2>
            <p className="text-gray-300">
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. 
              By continuing to access or use our services after those revisions become effective, you agree 
              to be bound by the revised terms.
            </p>
          </section>

          {/* Contact Us */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Contact Us</h2>
            <p className="text-gray-300 mb-6">
              If you have any questions about these Terms, please contact us at{' '}
              <a href="mailto:info@msg2ai.xyz" className="text-purple-400 hover:text-purple-300 transition-colors">
                info@msg2ai.xyz
              </a>{' '}
              or Rethink Ledgers, 7332 Summerlin Pl, Charlotte NC 28226.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                <MapPin className="h-5 w-5 text-purple-400 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-400">Address</p>
                  <p className="text-white">7332 Summerlin Pl, Charlotte NC 28226</p>
                </div>
              </div>
            </div>
          </section>

        </div>
      </div>
      
      {/* Footer */}
      <Footer />
    </div>
  )
}
