// pages/register.tsx
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Register: NextPage = () => {
  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen flex flex-col">
      <Head>
        <title>Register - Nucleus Academy</title>
      </Head>
      <Header />
      <main className="flex-grow flex items-center justify-center">
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-md w-full">
          <h1 className="text-3xl font-bold mb-6 text-center text-blue-400">Create an Account</h1>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                Full Name:
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                className="form-input mt-1 block w-full border-gray-600 rounded-md bg-gray-700 text-gray-100 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                Email address:
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                className="form-input mt-1 block w-full border-gray-600 rounded-md bg-gray-700 text-gray-100 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500"
                placeholder="johndoe@example.com"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300">
                Password:
              </label>
              <input
                type="password"
                name="password"
                id="password"
                required
                className="form-input mt-1 block w-full border-gray-600 rounded-md bg-gray-700 text-gray-100 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500"
                placeholder="••••••••"
              />
            </div>

            <div>
              <label htmlFor="userType" className="block text-sm font-medium text-gray-300">
                I am a:
              </label>
              <select
                id="userType"
                name="userType"
                required
                className="form-select mt-1 block w-full border-gray-600 rounded-md bg-gray-700 text-gray-100 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="student">Student</option>
                <option value="businessBasic">Business Basic</option>
                <option value="businessPremium">Business Premium</option>
              </select>
            </div>

            <div>
              <span className="block text-sm font-medium text-gray-300 mb-2">Select a package:</span>
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
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
              >
                Register
              </button>
            </div>
          </form>

          <p className="mt-6 text-center text-sm text-gray-400">
            Already have an account?{' '}
            <Link href="/login" className="text-blue-400 hover:text-blue-300">
              Sign in here
            </Link>
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Register;
