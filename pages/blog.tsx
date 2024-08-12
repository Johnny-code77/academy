import React from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "The Future of Digital Marketing",
      excerpt: "Explore the latest trends in digital marketing and how they are shaping the future.",
      date: "August 1, 2024",
      slug: "future-of-digital-marketing"
    },
    {
      id: 2,
      title: "Top 10 Programming Languages to Learn in 2024",
      excerpt: "A comprehensive guide to the most in-demand programming languages for the upcoming year.",
      date: "July 25, 2024",
      slug: "top-10-programming-languages-2024"
    },
    {
      id: 3,
      title: "How to Build a Successful Online Presence",
      excerpt: "Learn the key strategies for building and maintaining a strong online presence.",
      date: "July 20, 2024",
      slug: "successful-online-presence"
    }
  ];

  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen">
      <Header />
      <div className="container mx-auto p-4 pt-20">
        <h1 className="animate-pulse text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
          Nucleus Academy Blog
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {posts.map(post => (
            <div
              key={post.id}
              className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transform hover:-translate-y-2 transition duration-300"
            >
              <h2 className="text-2xl font-semibold mb-2 text-white">{post.title}</h2>
              <p className="text-gray-400 text-sm mb-4">{post.date}</p>
              <p className="text-gray-300 mb-4">{post.excerpt}</p>
              <div className="text-center">
                <Link href={`/blog/${post.slug}`} className="text-blue-400 hover:text-blue-500 transition duration-300">
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
