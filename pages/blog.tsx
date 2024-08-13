import React from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Blog = () => {
  const posts = [
    {
      title: "Nucleus Codiac!",
      desc: "Previously on codiac, dozens of developers transformed their skills and kickstarted new careers. Now we're back - bigger and better! With a  success rate, our graduates did not just learn, they thrived. This time we're offering new courses, interactive sessions and flexible learning tailored just for you.Don't miss out - secure your spot today and be the next wave of tech innovators.",
      img: "./codiac.jpg",
      authorLogo: "/nu.png",
      authorName: "Tebello",
      date: "Aug 14 2024",
      href: "#"
    },
  ];

  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen">
      <Header />
      <section className="mt-12 mx-auto px-4 max-w-screen-xl md:px-8">
        <div className="text-center">
          <h1 className="text-3xl text-gray-800 font-semibold">
            Blog
          </h1>
          <p className="mt-3 text-gray-500">
            Blogs that are loved by the community. Updated every hour.
          </p>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <article
              className="max-w-md mx-auto mt-4 shadow-lg border rounded-md duration-300 hover:shadow-sm"
              key={index}
            >
              <Link href={post.href}>
                <img
                  src={post.img}
                  loading="lazy"
                  alt={post.title}
                  className="w-full h-48 rounded-t-md"
                />
                <div className="flex items-center mt-2 pt-3 ml-4 mr-2">
                  <div className="flex-none w-10 h-10 rounded-full">
                    <img
                      src={post.authorLogo}
                      className="w-full h-full rounded-full"
                      alt={post.authorName}
                    />
                  </div>
                  <div className="ml-3">
                    <span className="block text-gray-900">{post.authorName}</span>
                    <span className="block text-gray-400 text-sm">{post.date}</span>
                  </div>
                </div>
                <div className="pt-3 ml-4 mr-2 mb-3">
                  <h3 className="text-xl text-gray-900">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 text-sm mt-1">{post.desc}</p>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Blog;
