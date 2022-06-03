import Head from 'next/head';
import Header from '../components/header';
import Image from '../components/image';

const Home = () => {
  return (
    <div className="max-h-scren flex h-screen flex-col items-center justify-center bg-gray-100">
      <Head>
        <title> Orientation Hackathon </title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <main className="flex h-full w-full flex-col items-center justify-between px-14 py-8 md:flex-row md:gap-28">
        <div className="flex w-full flex-col items-start gap-6">
          <h1 className="text-4xl font-bold">
            Create your own <span className="text-indigo-500">portfolio</span>
            <br className="hidden md:block" />
            <span className="md:capitalize">o</span>n the fly
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. d sed
            adipiscing volutpat tincidunt amet vulputate porta est.
          </p>
          <button
            className="rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
            type="button"
          >
            Get Started
          </button>
        </div>
        <div className="h-80 w-full rounded-full bg-gray-900"></div>
      </main>
      <footer className="flex w-full items-center justify-center border-t p-4">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <Image alt="Vercel Logo" className="ml-2 h-4" src="/vercel.svg" />
        </a>
      </footer>
    </div>
  );
};

export default Home;
