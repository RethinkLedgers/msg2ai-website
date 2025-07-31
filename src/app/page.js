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