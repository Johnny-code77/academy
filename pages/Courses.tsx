import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { BackgroundGradient } from '@/components/ui/background-gredient';
import Image from 'next/image';

const coursesData = [
  {
    title: 'Introduction to Web Development',
    description: 'Learn the basics of web development with HTML, CSS, and JavaScript',
    duration: '6 months',
    price: 'LSL 299',
    image: '/web.jpg',
    rating: 4,
  },
  {
    title: 'React Fundamentals',
    description: 'Build dynamic user interfaces with React',
    duration: '6 months',
    price: 'LSL 499',
    image: '/react-js.png',
    rating: 5,
  },
  {
    title: 'Full Stack Development with Node.js',
    description: 'Learn to build scalable and efficient full-stack applications with Node.js',
    duration: '6 months',
    price: 'LSL 999',
    image: '/node.png',
    rating: 4,
  },
  {
    title: 'Data Science with Python',
    description: 'Learn to work with data using Python and popular libraries like Pandas and NumPy',
    duration: '6 months',
    price: 'LSL 699',
    image: '/python.jpg',
    rating: 5,
  },
  {
    title: 'Machine Learning with TensorFlow',
    description: 'Dive into the world of machine learning using TensorFlow and Keras',
    duration: '6 months',
    price: 'LSL 899',
    image: '/ML.jpg',
    rating: 4,
  },
  {
    title: 'Cybersecurity Fundamentals',
    description: 'Understand the essentials of cybersecurity and how to protect systems and networks',
    duration: '6 months',
    price: 'LSL 799',
    image: '/cyber.jpg',
    rating: 4,
  },
  {
    title: 'DevOps with Docker and Kubernetes',
    description: 'Learn how to automate deployments and manage applications with Docker and Kubernetes',
    duration: '6 months',
    price: 'LSL 1099',
    image: '/dev.jpg',
    rating: 5,
  },
  {
    title: 'Mobile App Development with React Native',
    description: 'Create cross-platform mobile apps using React Native',
    duration: '6 months',
    price: 'LSL 899',
    image: '/native.png',
    rating: 4,
  },
  {
    title: 'Advanced JavaScript Techniques',
    description: 'Master advanced JavaScript concepts and techniques for modern web development',
    duration: '6 months',
    price: 'LSL 599',
    image: '/web.jpg',
    rating: 4,
  },
  {
    title: 'UI/UX Design Principles',
    description: 'Learn the fundamentals of user interface and user experience design',
    duration: '6 months',
    price: 'LSL 499',
    image: '/ui.png',
    rating: 3,
  },
  {
    title: 'Blockchain Development',
    description: 'Explore the world of blockchain technology and develop decentralized applications',
    duration: '6 months',
    price: 'LSL 999',
    image: '/blockchain.jpg',
    rating: 5,
  },
  {
    title: 'Cloud Computing with AWS',
    description: 'Gain expertise in cloud computing and AWS services',
    duration: '6 months',
    price: 'LSL 1099',
    image: '/aws.jpg',
    rating: 5,
  },
];

const CoursesPage: NextPage = () => {
  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen">
      <Head>
        <title>Courses - Nucleus Academy</title>
        <meta name="description" content="Courses offered at Nucleus Academy" />
      </Head>
      <Header />
      <main className="container mx-auto p-8">
        <h1 className="animate-pulse text-4xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
          Our Courses
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {coursesData.map((course) => (
            <BackgroundGradient
              key={course.title}
              className="flex flex-col justify-between rounded-[22px] p-4 sm:p-6 bg-black text-white h-full"
            >
              <div className="flex-1">
                <Image
                  src={course.image}
                  alt={course.title}
                  height={200}
                  width={200}
                  className="object-contain w-full h-40 mx-auto mb-4"
                />
                <h2 className="text-2xl font-semibold text-blue-400 text-center">
                  {course.title}
                </h2>
                <p className="text-gray-300 mt-2 text-center">{course.description}</p>
                <ul className="text-gray-300 mt-4 text-center">
                  <li className="mb-2">
                    <strong>Duration:</strong> {course.duration}
                  </li>
                  <li>
                    <strong>Price:</strong> {course.price}
                  </li>
                </ul>
              </div>
              <div className="mt-4">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FontAwesomeIcon
                      key={i}
                      icon={faStar}
                      className={`text-yellow-400 ${i < course.rating ? 'opacity-100' : 'opacity-50'}`}
                      size="lg"
                    />
                  ))}
                </div>
                <Link href="/register" className="block w-full py-2 bg-blue-500 text-white text-center rounded-lg hover:bg-blue-600 transition duration-300">
                  Register
                </Link>
              </div>
            </BackgroundGradient>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CoursesPage;
