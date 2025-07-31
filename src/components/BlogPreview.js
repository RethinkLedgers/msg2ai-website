import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { blogPosts } from '@/data/blogPosts'

export default function BlogPreview() {
  const recentPosts = blogPosts.slice(0, 3)

  return (
    <section id="blog" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Latest News & Insights</h2>
          <p className="text-xl text-gray-400">Stay updated with AI Ambassador innovations</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {recentPosts.map((post, index) => (
            <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-purple-700/30 hover:border-purple-600/50 transition-all duration-300 cursor-pointer group">
              <div className="flex items-center mb-4">
                <span className="text-sm text-purple-400 bg-purple-900/30 px-3 py-1 rounded-full">
                  {post.category}
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-purple-400 transition-colors">
                {post.title}
              </h3>
              <p className="text-gray-500 text-sm mb-4">{post.date}</p>
              <Link href={`/blog/${post.id}`} className="text-purple-400 hover:text-purple-300 flex items-center text-sm">
                Read more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/blog" className="inline-flex items-center text-purple-400 hover:text-purple-300 font-medium">
            View all articles <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}