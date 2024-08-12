import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { NextPage } from 'next';
import Head from 'next/head';

const LoginPage: NextPage = () => {
  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen flex flex-col justify-between">
      <Head>
        <title>Login - Nucleus Academy</title>
        <meta name="description" content="Login to Nucleus Academy" />
      </Head>
      <Header />
      <main className="flex-grow flex items-center justify-center">
        <div className="bg-gray-800 p-8 rounded-lg shadow-2xl w-full max-w-md">
          <h1 className="text-4xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            Login
          </h1>
          <form className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-gray-400 mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full border border-gray-600 rounded-md p-3 bg-gray-700 text-gray-200 placeholder-gray-500 focus:outline-none focus:border-blue-500"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-gray-400 mb-2">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full border border-gray-600 rounded-md p-3 bg-gray-700 text-gray-200 placeholder-gray-500 focus:outline-none focus:border-blue-500"
                placeholder="Enter your password"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-md hover:bg-blue-700 transition duration-300 font-semibold"
            >
              Login
            </button>
          </form>
          <div className="text-center mt-6">
            <button className="bg-gray-700 text-white px-4 py-3 rounded-md flex items-center justify-center w-full hover:bg-gray-600 transition duration-300">
              <FontAwesomeIcon icon={faGoogle} className="mr-2" />
              Login with Google
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LoginPage;
