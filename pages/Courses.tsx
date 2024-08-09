import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

const coursesData = [
  {
    title: 'Introduction to Web Development',
    description: 'Learn the basics of web development with HTML, CSS, and JavaScript',
    duration: '4 weeks',
    price: '$299',
  },
  {
    title: 'React Fundamentals',
    description: 'Build dynamic user interfaces with React',
    duration: '6 weeks',
    price: '$499',
  },
  {
    title: 'Full Stack Development with Node.js',
    description: 'Learn to build scalable and efficient full-stack applications with Node.js',
    duration: '12 weeks',
    price: '$999',
  },
  {
    title: 'Data Science with Python',
    description: 'Learn to work with data using Python and popular libraries like Pandas and NumPy',
    duration: '8 weeks',
    price: '$699',
  },
];

const CoursesPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Courses - Nucleus Academy</title>
        <meta name="description" content="Courses offered at Nucleus Academy" />
      </Head>
      <Header />
      <main className="container mx-auto p-4">
        <h1 className="text-4xl font-bold mb-8">Our Courses</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {coursesData.map((course) => (
            <div key={course.title} className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-4">{course.title}</h2>
              <p className="mb-4">{course.description}</p>
              <ul>
                <li className="mb-2">
                  <strong>Duration:</strong> {course.duration}
                </li>
                <li>
                  <strong>Price:</strong> {course.price}
                </li>
              </ul>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CoursesPage;