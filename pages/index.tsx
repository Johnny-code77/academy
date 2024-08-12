import styles from '../styles/globals.module.css';
import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Home: NextPage = () => {
  const topCourses = [
    {
      id: 1,
      title: "Introduction to Web Development",
      description: "Learn the basics of web development, including HTML, CSS, and JavaScript.",
      duration: "6 months",
      instructor: "Raymond Shao",
      rating: 5.1,
    },
    {
      id: 2,
      title: "Advanced React",
      description: "Deep dive into advanced React concepts and state management with Redux.",
      duration: "6 months",
      instructor: "Raymond Shao",
      rating: 4.7,
    },
    {
      id: 3,
      title: "Digital Marketing",
      description: "Understand the fundamentals of digital marketing and how to create effective strategies.",
      duration: "6 months",
      instructor: "Raymond Shao",
      rating: 3.7,
    },
    {
      id: 4,
      title: "Data Science with Python",
      description: "Learn data analysis, visualization, and machine learning with Python.",
      duration: "6 months",
      instructor: "Raymond Shao",
      rating: 4.8,
    },
    {
      id: 5,
      title: "Mobile App Development",
      description: "Build mobile applications using React Native and Flutter.",
      duration: "6 months",
      instructor: "Raymond Shao",
      rating: 4.6,
    },
    {
      id: 6,
      title: "Cybersecurity Fundamentals",
      description: "Understand the basics of cybersecurity and protect your digital assets.",
      duration: "6 months",
      instructor: "Raymond Shao",
      rating: 4.5,
    },
    {
      id: 7,
      title: "Machine Learning with TensorFlow",
      description: "Dive into machine learning and AI with TensorFlow and Keras.",
      duration: "6 months",
      instructor: "Raymond Shao",
      rating: 4.9,
    },
    {
      id: 8,
      title: "Cloud Computing with AWS",
      description: "Master cloud computing concepts and services using AWS.",
      duration: "6 months",
      instructor: "Raymond Shao",
      rating: 4.8,
    },
  ];

  const packages = [
    {
      id: 1,
      name: "Online Presence",
      description: "Enhance your online presence with our basic package",
      features: [
        "Your online business analysis",
        "Website performance audit",
        "Social media effectiveness review",
        "Content strategy assessment",
        "Online reputation management",
        "SEO and SEM analysis",
      ],
      // price: "LSL 299 per month", // Commented out price
    },
    {
      id: 2,
      name: "Business Basic",
      description: "Get started with essential business tools",
      features: [
        "How React works under the hood",
        "Transition to Next.js",
        "API design and development",
        "Database design",
        "UX/UI principles",
        "Learn Figma",
        "Become part of the programming wars",
        "Data structures and algorithms",
        "Progressive web apps (PWAs)",
      ],
      // price: "LSL 499 per month", // Commented out price
    },
    {
      id: 3,
      name: "Business Premium",
      description: "A comprehensive package with advanced features",
      features: [
        "Become part of the programming wars",
        "Data structures and algorithms",
        "Progressive web apps (PWAs)",
        "Web security best practices",
        "DevOps for developers",
        "Free wifi",
        "08:00am to 04:00pm access to our CBD office",
        "Webinar Sessions",
        "Free consultation",
      ],
      // price: "LSL 799 per month", // Commented out price
    },
  ];

  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen">
      <Head>
        <title>Home - Nucleus Academy</title>
        <meta name="description" content="Welcome to Nucleus Academy" />
      </Head>
      <Header />
      <main className="container mx-auto p-4">
        {/* Header Section */}
        <section className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 animate__animated animate__fadeIn animate__delay-1s">
            Welcome to Nucleus Academy
          </h1>
          <p className="text-lg mb-8 text-gray-300 animate__animated animate__fadeIn animate__delay-2s">
            Build Your Career With US <br/> We are not just IT & Software Engineering; <br/>
            we are craftsmen. Our intention to aesthetics is simple<br/>
            yet stings like bee.
          </p>
        </section>

        {/* Top Courses Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-blue-400 animate__animated animate__fadeIn animate__delay-3s">Top Courses</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {topCourses.map(course => (
              <div
                key={course.id}
                className="bg-gray-800 p-6 rounded-lg shadow-2xl transform hover:-translate-y-2 hover:shadow-lg transition duration-300 animate__animated animate__fadeIn"
              >
                <h3 className="text-xl font-semibold mb-2 text-white">{course.title}</h3>
                <p className="text-gray-400 mb-2">{course.description}</p>
                <p className="text-gray-500 mb-2">Duration: {course.duration}</p>
                <p className="text-gray-500 mb-4">Instructor: {course.instructor}</p>
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <FontAwesomeIcon
                      key={i}
                      icon={faStar}
                      className={i < Math.floor(course.rating) ? "text-yellow-400" : "text-gray-600"}
                    />
                  ))}
                  <span className="ml-2 text-gray-400">({course.rating})</span>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/courses" className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300 animate__animated animate__fadeIn animate__delay-4s">
              View All Courses
            </Link>
          </div>
        </section>

        {/* Packages Section */}
        <section>
          <h2 className="text-3xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 animate__animated animate__fadeIn animate__delay-5s">Our Packages</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map(pkg => (
              <div
                key={pkg.id}
                className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transform hover:-translate-y-2 transition duration-300 animate__animated animate__fadeIn"
              >
                <h3 className="text-xl font-semibold mb-2 text-white">{pkg.name}</h3>
                <p className="text-gray-400 mb-2">{pkg.description}</p>
                <ul className="list-disc list-inside text-gray-500 mb-4">
                  {pkg.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                {/* Commented out price */}
                {/* <p className="text-gray-300 font-bold mb-4">{pkg.price}</p> */}
                <div className="text-center">
                  <Link href="/register" className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300 animate__animated animate__fadeIn animate__delay-6s">
                    Register Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="text-center mt-12 animate__animated animate__fadeIn animate__delay-7s">
          <h4 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            Thank You <br /> For Being Part Of Our <br /> Community
          </h4>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
