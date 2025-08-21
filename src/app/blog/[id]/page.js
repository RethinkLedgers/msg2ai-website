'use client';
import { blogPosts } from '@/data/blogPosts';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';

export default async function BlogPostPage({ params }) {
  const { id } = await params;
  const post = blogPosts.find(p => p.id === id);
  
  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Back to Blog */}
        <div className="mb-8">
          <Link 
            href="/blog"
            className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors duration-200"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </Link>
        </div>

        {/* Article Header */}
        <article className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-purple-700/30 p-8 mb-8">
          <div className="mb-6">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-600/20 text-purple-300 border border-purple-600/30">
              {post.category}
            </span>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            {post.title}
          </h1>
          
          <p className="text-xl text-gray-300 mb-6">
            {post.excerpt}
          </p>
          
          <div className="flex items-center text-sm text-gray-500">
            <Calendar className="h-4 w-4 mr-2" />
            {post.date}
            <span className="mx-3">•</span>
            <Clock className="h-4 w-4 mr-2" />
            5 min read
          </div>
        </article>

        {/* Article Content */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-purple-700/30 p-8">
          <div 
            className="prose prose-invert prose-purple max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>

        {/* Related Posts */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6 text-white">Related Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogPosts
              .filter(p => p.id !== post.id)
              .slice(0, 2)
              .map((relatedPost) => (
                <Link 
                  key={relatedPost.id}
                  href={`/blog/${relatedPost.id}`}
                  className="block bg-gray-800/50 backdrop-blur-sm rounded-xl border border-purple-700/30 p-6 hover:border-purple-600/50 transition-all duration-300"
                >
                  <h3 className="text-lg font-semibold mb-2 text-white hover:text-purple-300 transition-colors duration-200">
                    {relatedPost.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-3">
                    {relatedPost.excerpt}
                  </p>
                  <div className="flex items-center text-xs text-gray-500">
                    <Calendar className="h-3 w-3 mr-1" />
                    {relatedPost.date}
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
} 