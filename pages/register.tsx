import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Register: NextPage = () => {
  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen flex flex-col justify-between">
      <Head>
        <title>Register - Nucleus Academy</title>
        <meta name="description" content="Register for an account at Nucleus Academy" />
      </Head>
      <Header />
      <main className="flex-grow flex items-center justify-center">
        <section className="w-full max-w-md">
          <div className="bg-gray-800 p-8 rounded-lg shadow-2xl">
            <h1 className="text-4xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Create an Account
            </h1>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-400 mb-2">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full border border-gray-600 rounded-md p-3 bg-gray-700 text-gray-200 placeholder-gray-500 focus:outline-none focus:border-blue-500"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-400 mb-2">Email address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full border border-gray-600 rounded-md p-3 bg-gray-700 text-gray-200 placeholder-gray-500 focus:outline-none focus:border-blue-500"
                  placeholder="johndoe@example.com"
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-gray-400 mb-2">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  required
                  className="w-full border border-gray-600 rounded-md p-3 bg-gray-700 text-gray-200 placeholder-gray-500 focus:outline-none focus:border-blue-500"
                  placeholder="••••••••"
                />
              </div>
              <div>
                <label htmlFor="userType" className="block text-gray-400 mb-2">I am a</label>
                <select
                  id="userType"
                  name="userType"
                  required
                  className="w-full border border-gray-600 rounded-md p-3 bg-gray-700 text-gray-200 focus:outline-none focus:border-blue-500"
                >
                  <option value="student">Student</option>
                  <option value="businessBasic">Business Basic</option>
                  <option value="businessPremium">Business Premium</option>
                </select>
              </div>
              <div>
                <span className="block text-gray-400 mb-2">Select a package:</span>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="onlinePresence"
                      name="package"
                      value="Online Presence"
                      required
                      className="form-radio text-blue-500"
                    />
                    <label htmlFor="onlinePresence" className="ml-2 text-gray-300">Online Presence</label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="underTheHood"
                      name="package"
                      value="Under the Hood"
                      required
                      className="form-radio text-blue-500"
                    />
                    <label htmlFor="underTheHood" className="ml-2 text-gray-300">Under the Hood</label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="fullStackMentorship"
                      name="package"
                      value="Full Stack Mentorship"
                      required
                      className="form-radio text-blue-500"
                    />
                    <label htmlFor="fullStackMentorship" className="ml-2 text-gray-300">Full Stack Mentorship</label>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white px-4 py-3 rounded-md hover:bg-blue-700 transition duration-300 font-semibold"
                >
                  Register
                </button>
              </div>
            </form>
            <p className="mt-6 text-center text-sm text-gray-400">
              Already have an account?{' '}
              <Link href="/login" className="font-medium text-blue-500 hover:no-underline">
                Sign in here
              </Link>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Register;
