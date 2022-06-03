import Head from 'next/head';
import Header from '../components/header';
import Image from '../components/image';

const Home = () => {
    return (
        <div className="bg-gray-100 flex flex-col items-center justify-center h-screen max-h-scren">
            <Head>
              <title> Orientation Hackathon </title>
              <link rel="icon" href="/favicon.ico" />
              <link rel="preconnect" href="https://fonts.googleapis.com" />
              <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
              <link href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
            </Head>

            <Header/>

            <main className="flex flex-col items-center justify-between w-full h-full px-14 py-8 md:flex-row md:gap-28">
                <div className="flex flex-col items-start gap-6 w-full">
                    <h1 className="text-4xl font-bold"> Create your own <span className="text-indigo-500">portfolio</span> <br className="hidden md:block"/> <span className="md:capitalize">o</span>n the fly </h1>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. d sed adipiscing volutpat tincidunt amet vulputate porta est. </p>
                    <button
                    className="text-gray-900 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium text-sm px-4 py-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                    type="button"
                    >
                    Get Started
                    </button>
                </div>

                <div class="bg-gray-900 w-full h-80 rounded-full"></div>
            </main>

            <footer className="flex items-center justify-center w-full p-4 border-t">
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
