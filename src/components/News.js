import { Calendar, Clock, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { blogPosts } from '@/data/blogPosts'

const newsArticles = blogPosts.slice(0, 6).map((post, index) => ({
  id: index + 1,
  title: post.title,
  excerpt: post.excerpt,
  date: post.date,
  category: post.category,
  readTime: "5 min read",
  image: post.images[0],
  link: `/blog/${post.id}`
}))

export default function News() {
  return (
    <section id="news" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-purple-900/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Latest News & Updates</h2>
          <p className="text-xl text-gray-400">Stay informed about AI Ambassador developments and industry insights</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsArticles.map((article) => (
            <article key={article.id} className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-purple-700/30 hover:border-purple-600/50 transition-all duration-300 overflow-hidden group">
              {/* Article Image */}
              <div className="aspect-video bg-gradient-to-br from-purple-600/20 to-pink-600/20 relative overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/40 to-pink-500/40 opacity-30"></div>
              </div>

              <div className="p-6">
                {/* Article Meta */}
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-600/20 text-purple-300 border border-purple-600/30">
                    {article.category}
                  </span>
                  <div className="flex items-center text-xs text-gray-500">
                    <Clock className="h-3 w-3 mr-1" />
                    {article.readTime}
                  </div>
                </div>

                {/* Article Title */}
                <h3 className="text-xl font-semibold mb-3 group-hover:text-purple-300 transition-colors duration-200">
                  {article.title}
                </h3>

                {/* Article Excerpt */}
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {article.excerpt}
                </p>

                {/* Article Footer */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-xs text-gray-500">
                    <Calendar className="h-3 w-3 mr-1" />
                    {new Date(article.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'short', 
                      day: 'numeric' 
                    })}
                  </div>
                  <Link 
                    href={article.link}
                    className="inline-flex items-center text-purple-400 hover:text-purple-300 text-sm font-medium transition-colors duration-200"
                  >
                    Read More
                    <ArrowRight className="h-3 w-3 ml-1" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All News CTA */}
        <div className="text-center mt-16">
          <Link 
            href="/blog"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-full font-semibold transition-all duration-200 transform hover:scale-105 text-white"
          >
            <span className="font-bold">
              View All Blog Posts
            </span>
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}