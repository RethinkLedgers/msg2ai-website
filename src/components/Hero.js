'use client'
import { useState, useEffect, useRef } from 'react'
import { ArrowRight, Play, Sparkles, Building2, Calendar, Home } from 'lucide-react'

export default function Hero() {
  const [activeChat, setActiveChat] = useState(0)
  const [videosLoaded, setVideosLoaded] = useState(new Set())
  const [videoErrors, setVideoErrors] = useState(new Set())
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const videoRef = useRef(null)

  
  const industryVerticals = [
    {
      id: 1,
      icon: Building2,
      title: "Hotels",
      description: "24/7 guest services, concierge automation, and multilingual support for enhanced guest experience.",
      features: ["Guest Check-in/out", "Room Service", "Concierge Services", "Local Recommendations"],
      color: "from-purple-500 to-pink-500",
      videoSlug: "hotels",
      video: "/videos/overview videos/hotel.mp4",
      thumbnail: "/images/overview thumbnails/hotel.png"
    },
    {
      id: 2,
      icon: Home,
      title: "Vacation Rentals",
      description: "Streamlined guest communication, automated check-in processes, and instant local recommendations.",
      features: ["Property Access", "Local Guides", "Maintenance Requests", "Check-out Process"],
      color: "from-purple-400 to-pink-400",
      videoSlug: "vacation-rentals",
      video: "/videos/overview videos/vacation-rental.mp4",
      thumbnail: "/images/overview thumbnails/vacation-rental.png"

    },
    {
      id: 3,
      icon: Calendar,
      title: "Events & Conferences",
      description: "Manage attendee inquiries, provide real-time updates, and facilitate networking opportunities.",
      features: ["Event Information", "Networking", "Schedule Updates", "Venue Navigation"],
      color: "from-purple-600 to-pink-600",
      videoSlug: "events-conferences",
      video: "/videos/overview videos/event.mp4",
      thumbnail: "/images/overview thumbnails/event.png"
    }
  ]

  useEffect(() => {
    // Only rotate videos if no video is currently playing
    if (!isVideoPlaying) {
      const interval = setInterval(() => {
        setActiveChat((prev) => (prev + 1) % industryVerticals.length)
      }, 4000)
      return () => clearInterval(interval)
    }
  }, [isVideoPlaying])

  // Preload next video
  useEffect(() => {
    const nextIndex = (activeChat + 1) % industryVerticals.length
    const nextVideo = industryVerticals[nextIndex]
    const videoSrc = `/videos/demos/${nextVideo.videoSlug}-demo.mp4`
    
    if (!videosLoaded.has(nextVideo.id) && !videoErrors.has(nextVideo.id)) {
      const video = document.createElement('video')
      video.preload = 'metadata'
      video.src = videoSrc
      
      video.addEventListener('loadedmetadata', () => {
        setVideosLoaded(prev => new Set([...prev, nextVideo.id]))
      })
      
      video.addEventListener('error', () => {
        setVideoErrors(prev => new Set([...prev, nextVideo.id]))
      })
    }
  }, [activeChat, videosLoaded, videoErrors])

  const handleVideoError = (videoId) => {
    setVideoErrors(prev => new Set([...prev, videoId]))
  }

  const handleVideoSwitch = (newIndex) => {
    // Pause current video if playing
    if (videoRef.current && !videoRef.current.paused) {
      videoRef.current.pause()
    }
    // Reset playing state and switch video
    setIsVideoPlaying(false)
    setActiveChat(newIndex)
  }
  // Handle video switching
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0
      videoRef.current.load()
    }
  }, [activeChat])

  return (
    <section id="home" className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-800/20 via-transparent to-pink-800/20"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{
          backgroundImage: 'url(/images/homepage_hero_main.png)'
        }}
      ></div>
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center px-4 py-2 bg-purple-900/30 backdrop-blur-sm rounded-full border border-purple-700/50">
              <Sparkles className="h-4 w-4 text-yellow-400 mr-2" />
              <span className="text-sm text-purple-200">Powered by Advanced AI Ambassador Technology</span>
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Deploy Your AI Ambassador
            </span>
            <br />
            <span className="text-white">Smart AI for Hotels, Rentals & Events</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            AI Ambassador automates guest messaging for hotels, rentals, and events—boosting satisfaction and saving time with 24/7 smart AI support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://hello.msg2ai.xyz" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-200 transform hover:scale-105 flex items-center justify-center text-white"
            >
              <span className="font-bold">
                <span className="text-white">Get Started with </span>
                <span className="text-teal-100">AI</span>
                <span className="text-slate-100"> Ambassador</span>
              </span>
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a 
              href="#verticals"
              className="border border-purple-600 hover:border-purple-500 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-200 hover:bg-purple-900/30 flex items-center justify-center"
            >
              <Play className="mr-2 h-5 w-5" />
              Explore Solutions
            </a>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Industry Verticals', value: '4+' },
              { label: 'AI-Powered Support', value: '24/7' },
              { label: 'Languages Supported', value: '100+' },
              { label: 'Guest Satisfaction', value: 'Boosted' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-gray-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Industry Verticals with Videos */}
        <div className="mt-20 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-600/20 blur-3xl"></div>
          
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-4">See AI Ambassador in Action</h3>
              <p className="text-xl text-gray-400">Real demonstrations from our industry verticals</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Active Vertical Video */}
              <div className="relative">
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-purple-700/30 p-6">
                  <div className="rounded-xl overflow-hidden bg-gray-900 relative mb-4 max-w-md mx-auto" style={{ aspectRatio: '9/16' }}>
                    {!videoErrors.has(industryVerticals[activeChat].id) ? (
                      <video 
                        ref={videoRef}
                        key={`${industryVerticals[activeChat].id}-${activeChat}`}
                        className="w-full h-full object-contain relative z-10"
                        controls
                        playsInline
                        preload="metadata"
                        poster={industryVerticals[activeChat].thumbnail}
                        onError={() => handleVideoError(industryVerticals[activeChat].id)}
                        onLoadedMetadata={() => {
                          setVideosLoaded(prev => new Set([...prev, industryVerticals[activeChat].id]))
                        }}
                        onPlay={() => setIsVideoPlaying(true)}
                        onPause={() => setIsVideoPlaying(false)}
                        onEnded={() => setIsVideoPlaying(false)}
                      >
                        <source 
                          src={industryVerticals[activeChat].video} 
                          type="video/mp4" 
                        />
                        Your browser does not support the video tag.
                      </video>
                    ) : (
                      /* Fallback content when video fails to load */
                      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center">
                        <div className="text-center text-gray-400">
                          <Play className="h-16 w-16 mx-auto mb-4 opacity-60" />
                          <h4 className="text-lg font-semibold mb-2">{industryVerticals[activeChat].title} Demo</h4>
                          <p className="text-sm opacity-75">Video coming soon</p>
                          <p className="text-xs opacity-50 mt-2">AI Ambassador in action for {industryVerticals[activeChat].title.toLowerCase()}</p>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="text-center">
                    <h4 className="text-xl font-semibold mb-2">{industryVerticals[activeChat].title} Solution</h4>
                    <p className="text-sm text-gray-400">Watch how AI Ambassador transforms {industryVerticals[activeChat].title.toLowerCase()} operations</p>
                  </div>
                </div>
              </div>

              {/* Vertical Selection Cards */}
              <div className="space-y-6">
                {industryVerticals.map((vertical, index) => (
                  <div 
                    key={vertical.id} 
                    className={`bg-gray-800/40 backdrop-blur-sm rounded-2xl border transition-all duration-500 p-6 cursor-pointer ${
                      index === activeChat 
                        ? 'border-purple-500/50 bg-gray-800/60 scale-105' 
                        : 'border-purple-700/20 hover:border-purple-600/30'
                    }`}
                    onClick={() => handleVideoSwitch(index)}
                  >
                    <div className="flex items-center space-x-4 mb-4">
                      <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${vertical.color}`}>
                        <vertical.icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold">{vertical.title}</h4>
                        <div className={`h-1 w-8 rounded-full transition-colors mt-1 ${
                          index === activeChat ? 'bg-purple-400' : 'bg-gray-600'
                        }`}></div>
                      </div>
                    </div>
                    
                    <p className="text-gray-400 text-sm mb-3">{vertical.description}</p>
                    
                    <div className="grid grid-cols-2 gap-2">
                      {vertical.features.map((feature, i) => (
                        <div key={i} className="flex items-center text-xs text-gray-300">
                          <div className="w-1 h-1 bg-purple-400 rounded-full mr-2"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Video Navigation */}
            <div className="flex justify-center mt-8">
              <div className="flex space-x-2">
                {industryVerticals.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleVideoSwitch(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === activeChat
                        ? 'bg-gradient-to-r from-purple-400 to-pink-400'
                        : 'bg-gray-600 hover:bg-gray-500'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Call to Action for Videos */}
            <div className="text-center mt-12">
              <a 
                href="https://www.ai-ambassador.xyz/#media"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 rounded-full font-semibold transition-all duration-200 transform hover:scale-105 text-white"
              >
                <span className="font-bold">
                  <span className="text-white">View All Demos on </span>
                  <span className="text-teal-100">AI</span>
                  <span className="text-slate-100"> Ambassador</span>
                </span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}