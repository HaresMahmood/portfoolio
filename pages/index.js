import Head from 'next/head';
import Layout from '../components/layout';

const Home = () => {
    return (
        <Layout>
            <Head>
                <title>Orientation Hackathon</title>
            </Head>
            <main className="flex h-full w-full flex-col items-center justify-between self-center px-14 py-8 md:flex-row md:gap-28">
                <div className="flex w-full flex-col items-start gap-6">
                    <h1 className="text-4xl font-bold">
                        Create your own{' '}
                        <span className="text-indigo-500">portfolio</span>{' '}
                        <br className="hidden md:block" />
                        <span className="md:capitalize">o</span>n the fly
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Mauris vehicula quis lacus eleifend lacinia. Aenean in
                        maximus augue.
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
        </Layout>
    );
};

export default Home;
