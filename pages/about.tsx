import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const About = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-100 py-8">
        <div className="container mx-auto p-8 bg-white shadow-lg rounded-lg">
          <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">About Nucleus Academy</h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            At Nucleus Academy, we believe in empowering individuals with the skills and knowledge they need to excel in the digital world. Our mission is to provide high-quality, accessible education that caters to both beginners and seasoned professionals looking to enhance their expertise.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Established in 2024, Nucleus Academy has quickly become a leading provider of online courses in technology, digital marketing, and software development. Our courses are designed by industry experts who are passionate about teaching and committed to your success.
          </p>
          <h2 className="text-2xl font-semibold text-blue-600 mt-8 mb-4">Our Mission</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Our mission is to democratize education by providing world-class courses that are affordable, flexible, and accessible to everyone, regardless of their location or background. We aim to bridge the skills gap in the technology sector by delivering practical, hands-on training that leads to real-world success.
          </p>
          <h2 className="text-2xl font-semibold text-blue-600 mt-8 mb-4">What We Offer</h2>
          <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed mb-4">
            <li>Comprehensive online courses in programming, web development, digital marketing, and more.</li>
            <li>Mentorship from industry professionals to guide you through your learning journey.</li>
            <li>Flexible learning schedules to accommodate your lifestyle.</li>
            <li>Access to a vibrant community of learners and professionals.</li>
          </ul>
          <h2 className="text-2xl font-semibold text-blue-600 mt-8 mb-4">Our Vision</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            We envision a world where quality education is accessible to everyone. We strive to be at the forefront of educational innovation, continually updating our content and teaching methods to meet the evolving needs of the industry and our learners.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
