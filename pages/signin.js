import { getProviders, signIn } from 'next-auth/react';
import Head from 'next/head';
import Image from '../components/image';
import Layout from '../components/layout';

const SignIn = ({ providers }) => {
    return (
        <Layout>
            <Head>
                <title>Sign In</title>
            </Head>
            <div className="flex w-full flex-col items-center justify-center p-5">
                <div className="flex flex-col items-center gap-7 text-center">
                    <Image
                        alt=""
                        className="h-80 w-full p-5"
                        src="/undraw_sign_in_re_o58h.svg"
                    />

                    <div className="flex flex-col gap-1">
                        <h1 className="text-4xl font-bold">Sign in</h1>
                        <p>
                            Connect one of the following accounts to generate
                            your portfolio.
                        </p>
                    </div>

                    <div className="flex w-full justify-center gap-3 border-t-2 pt-7">
                        <>
                            {Object.values(providers).map(provider => (
                                <div key={provider.name}>
                                    <button
                                        className="rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                                        onClick={() =>
                                            signIn(provider.id, {
                                                callbackUrl: `${window.location.origin}/profile`
                                            })
                                        }
                                    >
                                        {provider.name}
                                    </button>
                                </div>
                            ))}
                        </>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default SignIn;

export const getServerSideProps = async () => {
    return { props: { providers: await getProviders() } };
};
