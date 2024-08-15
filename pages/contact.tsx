// pages/contact.tsx
import React from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-900 text-gray-100 py-8">
        <div className="container mx-auto p-8 bg-gray-800 shadow-lg rounded-lg">
          <h1 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-8">
            Contact Us
          </h1>
          <p className="text-lg text-gray-300 text-center mb-8">
            Have questions? We're here to help! Get in touch with us using the form below.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h2 className="text-2xl font-semibold text-blue-400 mb-4">Contact Information</h2>
              <p className="text-gray-400 mb-2">
                <strong>Email:</strong> nucleusdevs@gmail.com
              </p>
              <p className="text-gray-400 mb-2">
                <strong>Phone:</strong> +266 59749725
              </p>
              <p className="text-gray-400 mb-2">
                <strong>Address:</strong> CBN, Maseru 101
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-blue-400 mb-4">Our Location</h2>
              <p className="text-gray-400 mb-4">
                Nucleus Academy is located in the heart of Knowledge City, offering a serene and conducive environment for learning and innovation. We're easily accessible by public transport and have ample parking space.
              </p>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3479.047278154819!2d27.475941274836796!3d-29.31028879762065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e8dcbd19be8ed79%3A0x3851512b787bf687!2sNucleus!5e0!3m2!1sen!2sls!4v1723480695529!5m2!1sen!2sls"
                width="100%"
                height="200"
                className="rounded-lg"
                allowFullScreen={false}
                loading="lazy"
                title="Nucleus Academy Location"
              ></iframe>
            </div>
          </div>

          <form className="max-w-lg mx-auto bg-gray-700 p-6 rounded-lg shadow-lg">
            <div className="mb-4">
              <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-100 bg-gray-800 border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                id="name"
                type="text"
                placeholder="Your name"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-100 bg-gray-800 border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                id="email"
                type="email"
                placeholder="Your email"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-100 bg-gray-800 border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                id="message"
                rows={5}
                placeholder="Your message"
              ></textarea>
            </div>

            <div className="flex items-center justify-center">
              <button
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                type="button"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
