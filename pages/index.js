import Button from '../components/button';
import Head from 'next/head';
import Image from '../components/image';
import Layout from '../components/layout';
import Link from 'next/link';
import { getSession } from 'next-auth/react';

const HomePage = () => {
    return (
        <Layout>
            <Head>
                <title>Portfoolio</title>
            </Head>
            <main className="flex h-full w-full flex-col items-center justify-center gap-8 self-center px-14 py-8 md:flex-row md:px-32">
                <div className="flex w-full flex-col items-start gap-6">
                    <h1 className="text-4xl font-bold">
                        As <span className="text-indigo-500">easy</span> as 1,
                        2, 3...
                        <br />
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
                    <Link href="/signin">
                        <Button className="dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700">
                            Get Started
                        </Button>
                    </Link>
                </div>
                <Image
                    alt=""
                    className="h-72 w-full"
                    priority
                    src="/undraw_online_cv_re_gn0a.svg"
                />
            </main>
        </Layout>
    );
};

export default HomePage;

export const getServerSideProps = async context => {
    const session = await getSession(context);

    if (session) {
        return {
            props: { session },
            redirect: {
                destination: '/profile',
                permanent: false
            }
        };
    }

    return { props: { session } };
};
