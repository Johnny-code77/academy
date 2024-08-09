import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

const pricingData = [
  {
    title: 'Online Presence',
    prices: {
      student: '$99',
      businessBasic: '$199',
      businessPremium: '$299',
    },
  },
  {
    title: 'Under the Hood',
    prices: {
      student: '$149',
      businessBasic: '$249',
      businessPremium: '$349',
    },
  },
  {
    title: 'Full Stack Mentorship',
    prices: {
      student: '$199',
      businessBasic: '$299',
      businessPremium: '$399',
    },
  },
];

const PricesPage: NextPage = () => {
  return (
    <div className="bg-gray-100 h-screen overflow-y-scroll">
      <Head>
        <title>Prices - Nucleus Academy</title>
        <meta name="description" content="Pricing for services at Nucleus Academy" />
      </Head>
      <Header />
      <main className="container mx-auto p-4 pt-20">
        <h1 className="text-4xl font-bold mb-8 text-center">Our Prices</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {pricingData.map((service) => (
            <div key={service.title} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
              <h2 className="text-2xl font-semibold mb-4">{service.title}</h2>
              <ul className="list-none mb-0">
                <li className="flex justify-between mb-2">
                  <span className="text-gray-600">Student:</span>
                  <span className="text-lg font-bold">{service.prices.student}</span>
                </li>
                <li className="flex justify-between mb-2">
                  <span className="text-gray-600">Business Basic:</span>
                  <span className="text-lg font-bold">{service.prices.businessBasic}</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600">Business Premium:</span>
                  <span className="text-lg font-bold">{service.prices.businessPremium}</span>
                </li>
              </ul>
              <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full mt-4">
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PricesPage;