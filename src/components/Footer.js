import Link from 'next/link'
import { Mail, Phone, X as XIcon, Linkedin, Facebook, Instagram, Youtube } from 'lucide-react'
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
              <Link href="https://x.com/msg2ai" className="text-gray-400 hover:text-purple-400 transition-colors">
                <XIcon className="h-6 w-6" />
              </Link>
              <Link href="https://linkedin.com/company/msg2ai" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Linkedin className="h-6 w-6" />
              </Link>
              <Link href="https://www.facebook.com/profile.php?id=61565193947221" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="https://instagram.com/msg2ai" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Instagram className="h-6 w-6" />
              </Link>
              <Link href="https://www.youtube.com/@AI-Ambassador-xyz" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Youtube className="h-6 w-6" />
              </Link>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              <li><Link href="/#features" className="text-gray-400 hover:text-white transition-colors">Features</Link></li>
              <li><Link href="/#pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/partners" className="text-gray-400 hover:text-white transition-colors">Partners</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</Link></li>
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
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}