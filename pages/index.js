import Head from 'next/head';
import Header from '../components/header';
import Image from '../components/image';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Head>
        <title> Orientation Hackathon </title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
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
