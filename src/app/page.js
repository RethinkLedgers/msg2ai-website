import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Verticals from '@/components/Verticals'
import Features from '@/components/Features'
import Testimonials from '@/components/Testimonials'
import News from '@/components/News'
import ScheduleDemo from '@/components/ScheduleDemo'
import Pricing from '@/components/Pricing'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-900/10 to-gray-900">
      <Navbar />
      <Hero />
      <Verticals />
      <Features />
      
      {/* AI Hospitality Showcase */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: 'url(/images/homepage_hero_blog_en_ai_in_hospitality_hero.png)'
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/60 via-transparent to-pink-900/60"></div>
        <div className="max-w-6xl mx-auto relative text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Trusted by Leading Hospitality Brands
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            From boutique hotels to major hospitality chains, AI Ambassador is transforming guest experiences across the industry with intelligent automation and personalized service.
          </p>
          <div className="flex justify-center">
            <a 
              href="#testimonials"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-200 transform hover:scale-105"
            >
              See Success Stories
            </a>
          </div>
        </div>
      </section>
      
      <Testimonials />
      <News />
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <ScheduleDemo />
        </div>
      </section>
      <Pricing />
      <Footer />
    </div>
  )
}