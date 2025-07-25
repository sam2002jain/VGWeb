"use client";
import React, { useState, useEffect } from 'react';
import Header from '../header';
import Footer from '../footer';
import { BlogPost } from '../types/blog';
import BlogModal from '../components/BlogModal';

// Temporary mock data - replace with actual API call
const mockPosts: BlogPost[] = [
  {
    id: '1',
    title: 'जैन धर्म का महत्व',
    excerpt: 'जैन धर्म की मूल शिक्षाओं का विस्तृत विवरण...',
    content: 'Full content here...',
    author: 'आचार्य श्री',
    date: '2024-02-20',
    imageUrl: '/blog-1.jpg',
    category: 'धर्म'
  },
  // Add more mock posts...
];

export default function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>(mockPosts);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  // TODO: Replace with actual API call
  useEffect(() => {
    // Fetch posts from backend
  }, []);

  return (
    <div className="min-h-screen bg-amber-50">
      <Header />
      
      {/* Hero Section */}
      <div className="relative bg-orange-500 py-20">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative z-10 container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-white mb-4">
            ज्ञानतीर्थ ब्लॉग
          </h1>
          <div className="w-24 h-1 bg-white mx-auto"></div>
        </div>
      </div>

      {/* Blog Grid Section */}
      <div className="container mx-auto px-4 py-16">
        {/* Category Filter */}
        <div className="flex justify-center mb-12 space-x-4">
          <button 
            className={`px-6 py-2 rounded-full ${
              selectedCategory === 'all' 
                ? 'bg-orange-500 text-white' 
                : 'bg-white text-gray-700 hover:bg-orange-100'
            } transition-colors duration-300`}
            onClick={() => setSelectedCategory('all')}
          >
            All
          </button>
          {/* Add more category filters as needed */}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article 
              key={post.id} 
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105 duration-300"
            >
              <div className="relative h-48">
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-2">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{post.author}</span>
                  <span>{new Date(post.date).toLocaleDateString('hi-IN')}</span>
                </div>
                <button 
                  onClick={() => setSelectedPost(post)}
                  className="mt-4 w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600 transition-colors duration-300"
                >
                  Read More
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Blog Modal */}
        {selectedPost && (
          <BlogModal
            post={selectedPost}
            onClose={() => setSelectedPost(null)}
          />
        )}
      </div>

      <Footer />
    </div>
  );
}
