import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Home - Nucleus Academy</title>
        <meta name="description" content="Welcome to Nucleus Academy" />
      </Head>
      <Header />
      <main className="container mx-auto p-4">
        <h1 className="text-4xl font-bold mb-8">Welcome to Nucleus Academy</h1>
        {/* Other content or components */}
      </main>
      <Footer />
    </div>
  );
};

export default Home;
