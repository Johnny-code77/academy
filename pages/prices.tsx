import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';
import { BackgroundGradient } from '@/components/ui/background-gredient';

const pricingData = [
  {
    title: 'Online Presence',
    prices: {
      student: 'LSL 450',
      businessBasic: 'LSL 800',
      businessPremium: 'LSL 1,300',
    },
  },
  {
    title: 'Under the Hood',
    prices: {
      student: 'LSL 700',
      businessBasic: 'LSL 1,500',
      businessPremium: 'LSL 2,300',
    },
  },
  {
    title: 'Full Stack Mentorship',
    prices: {
      student: 'LSL 350',
      businessBasic: 'LSL 2,300',
      businessPremium: 'LSL 4,750',
    },
  },
];

const PricesPage: NextPage = () => {
  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen overflow-y-scroll">
      <Head>
        <title>Prices - Nucleus Academy</title>
        <meta name="description" content="Pricing for services at Nucleus Academy" />
      </Head>
      <Header />
      <main className="container mx-auto p-4 pt-20">
        <h1 className="animate-pulse text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
          Our Prices
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {pricingData.map((service) => (
            <BackgroundGradient
              key={service.title}
              className="flex flex-col justify-between rounded-[22px] p-6 bg-black text-white h-full"
            >
              <h2 className="text-2xl font-semibold mb-4 text-center text-blue-400">
                {service.title}
              </h2>
              <ul className="text-gray-300 text-center">
                <li className="flex justify-between mb-2">
                  <span className="text-gray-400">Student:</span>
                  <span className="text-lg font-bold">{service.prices.student}</span>
                </li>
                <li className="flex justify-between mb-2">
                  <span className="text-gray-400">Business Basic:</span>
                  <span className="text-lg font-bold">{service.prices.businessBasic}</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-400">Business Premium:</span>
                  <span className="text-lg font-bold">{service.prices.businessPremium}</span>
                </li>
              </ul>
              <div className="text-center mt-8">
                <Link href="/register" className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300">
                  Register Now
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

export default PricesPage;
