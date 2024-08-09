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
    <div>
      <Head>
        <title>Prices - Nucleus Academy</title>
        <meta name="description" content="Pricing for services at Nucleus Academy" />
      </Head>
      <Header />
      <main className="container mx-auto p-4">
        <h1 className="text-4xl font-bold mb-8">Our Prices</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {pricingData.map((service) => (
            <div key={service.title} className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-4">{service.title}</h2>
              <ul>
                <li className="mb-2">
                  <strong>Student:</strong> {service.prices.student}
                </li>
                <li className="mb-2">
                  <strong>Business Basic:</strong> {service.prices.businessBasic}
                </li>
                <li>
                  <strong>Business Premium:</strong> {service.prices.businessPremium}
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

export default PricesPage;
