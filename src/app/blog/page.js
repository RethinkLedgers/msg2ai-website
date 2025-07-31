'use client';
import { blogPosts } from '@/data/blogPosts';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            Blog
          </h1>
          <p className="text-xl text-gray-400">Latest insights and updates from the AI Ambassador world</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-purple-700/30 hover:border-purple-600/50 transition-all duration-300 overflow-hidden group">
              {/* Article Image */}
              <div className="aspect-video bg-gradient-to-br from-purple-600/20 to-pink-600/20 relative overflow-hidden">
                <img 
                  src={post.images[0]} 
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/40 to-pink-500/40 opacity-30"></div>
              </div>

              <div className="p-6">
                {/* Article Meta */}
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-600/20 text-purple-300 border border-purple-600/30">
                    {post.category}
                  </span>
                  <div className="flex items-center text-xs text-gray-500">
                    <Clock className="h-3 w-3 mr-1" />
                    5 min read
                  </div>
                </div>

                {/* Article Title */}
                <h3 className="text-xl font-semibold mb-3 group-hover:text-purple-300 transition-colors duration-200">
                  {post.title}
                </h3>

                {/* Article Excerpt */}
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {post.excerpt}
                </p>

                {/* Article Footer */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-xs text-gray-500">
                    <Calendar className="h-3 w-3 mr-1" />
                    {post.date}
                  </div>
                  <Link 
                    href={`/blog/${post.id}`}
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
      </div>
    </div>
  );
} 