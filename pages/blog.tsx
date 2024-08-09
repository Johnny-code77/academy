import React from 'react';
import Link from 'next/link'; // Import Link component
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
    <>
      <Header />
      <div className="min-h-screen bg-gray-100 py-8">
        <div className="container mx-auto p-8 bg-white shadow-lg rounded-lg">
          <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">Nucleus Academy Blog</h1>
          <p className="text-lg text-gray-700 text-center mb-8">
            Welcome to the Nucleus Academy blog! Here, you'll find the latest insights, tips, and trends in technology, digital marketing, and more.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map(post => (
              <div key={post.id} className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold text-blue-600 mb-2">{post.title}</h2>
                <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                <p className="text-gray-700 mb-4">{post.excerpt}</p>
                <Link href={`/blog/${post.slug}`} className="text-blue-500 hover:underline">
                  Read More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Blog;
