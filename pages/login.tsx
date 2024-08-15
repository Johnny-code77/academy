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
        <section className="w-full max-w-md">
          <div className="bg-gray-800 p-8 rounded-lg shadow-2xl">
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
                  required
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
                  required
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-600 rounded bg-gray-700 focus:ring-3 focus:ring-blue-500"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="remember" className="text-gray-300">Remember me</label>
                  </div>
                </div>
                <a href="#" className="text-sm font-medium text-blue-500 hover:underline">Forgot password?</a>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-4 py-3 rounded-md hover:bg-blue-700 transition duration-300 font-semibold"
              >
                Login
              </button>
            </form>
            <p className="text-sm font-light text-gray-400 mt-6 text-center">
              Don’t have an account yet? <a href="/register" className="font-medium text-blue-500 hover:no-underline">Sign up</a>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default LoginPage;
