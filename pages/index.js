import Head from 'next/head';

import Header from '../components/header';
import Image from '../components/image';

const Home = () => {
  return (
    <div className="bg-gray-100 flex flex-col min-h-screen">
      <Head>
        <title>Orientation Hackathon</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="flex flex-col items-center justify-center w-full flex-1 text-center"></main>
      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <Image alt="Vercel Logo" className="h-4 ml-2" src="/vercel.svg" />
        </a>
      </footer>
    </div>
  );
};

export default Home;
