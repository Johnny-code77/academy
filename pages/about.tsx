import styles from '../styles/globals.module.css';
import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons';

const About: NextPage = () => {
  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen">
      <Head>
        <title>About Us - Nucleus Academy</title>
        <meta name="description" content="Learn more about the team behind Nucleus Academy" />
      </Head>
      <Header />
      <main className="container mx-auto p-4">
        <section className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            About Nucleus Academy
          </h1>
          <p className="text-lg mb-8 text-gray-300">
            At Nucleus Academy, we are dedicated to providing top-notch education and training to empower individuals and businesses. Learn more about our mission, vision, and the exceptional team that makes it all happen.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-blue-400">Academy Details</h2>
          <p className="text-gray-400 mb-4">
            <strong>History:</strong> Nucleus Academy was founded with the goal of bridging the gap between aspiring professionals and industry leaders. Our academy offers a range of courses designed to equip students with practical skills and knowledge.
          </p>
          <p className="text-gray-400 mb-4">
            <strong>Mission:</strong> Our mission is to provide high-quality education that transforms careers and drives innovation. We are committed to fostering a learning environment that encourages growth and excellence.
          </p>
          <p className="text-gray-400 mb-4">
            <strong>Values:</strong> Integrity, Excellence, Innovation, and Collaboration are at the core of everything we do. We believe in delivering value and supporting our students' success.
          </p>
          <p className="text-gray-400 mb-4">
            <strong>Our Approach:</strong> We combine hands-on experience with expert guidance to ensure that our students are well-prepared for their careers. Our courses are crafted to meet the evolving needs of the industry.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-blue-400">Our Staff</h2>
        </section>
        
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {[
            { name: "Raymond Shao", role: "CEO", img: "./raymond.jpg", twitter: "#", linkedin: "#", facebook: "#" },
            { name: "Kamohelo Khosana", role: "Chef Operator", img: "./kamohelo.jpg", twitter: "#", linkedin: "#", facebook: "#" },
            { name: "Tankiso Fuma", role: "Senior Software Engineer", img: "./tankiso_fuma.jpg", twitter: "#", linkedin: "#", facebook: "#" },
            { name: "Molapo Matoloane", role: "Junior Software Engineer", img: "./molapo.jpg", twitter: "#", linkedin: "#", facebook: "#" },
            { name: "Tlotliso Makae", role: "Intern", img: "./tlotliso.jpg", twitter: "#", linkedin: "#", facebook: "#" },
          ].map((staff, index) => (
            <div key={index} className="relative bg-gray-800 p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:bg-gray-700">
              <img
                src={staff.img}
                alt={staff.name}
                className="w-32 h-32 mx-auto rounded-full object-cover object-center border-4 border-blue-500 shadow-lg"
              />
              <h2 className="text-xl font-semibold text-blue-400 mt-4">{staff.name}</h2>
              <p className="text-gray-400">{staff.role}</p>
              <div className="flex justify-center space-x-4 mt-4">
                <a href={staff.twitter} className="text-blue-500 hover:text-blue-400" aria-label={`${staff.name}'s Twitter`}>
                  <FontAwesomeIcon icon={faTwitter} size="lg" />
                </a>
                <a href={staff.linkedin} className="text-blue-700 hover:text-blue-600" aria-label={`${staff.name}'s LinkedIn`}>
                  <FontAwesomeIcon icon={faLinkedin} size="lg" />
                </a>
                <a href={staff.facebook} className="text-blue-600 hover:text-blue-500" aria-label={`${staff.name}'s Facebook`}>
                  <FontAwesomeIcon icon={faFacebook} size="lg" />
                </a>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 rounded-lg transition-opacity duration-300 hover:opacity-10"></div>
            </div>
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
