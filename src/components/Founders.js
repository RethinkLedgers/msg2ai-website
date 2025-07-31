import { Users, Linkedin, Twitter } from 'lucide-react'

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
}