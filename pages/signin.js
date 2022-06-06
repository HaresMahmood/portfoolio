import { BsGithub, BsGoogle } from 'react-icons/bs';
import { getProviders, getSession, signIn } from 'next-auth/react';

import Button from '../components/button';
import Head from 'next/head';
import Image from '../components/image';
import Layout from '../components/layout';

const providerMap = {
    GitHub: <BsGithub />,
    Google: <BsGoogle />
};

const SignInPage = ({ providers }) => (
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
                    priority
                />

                <div className="flex flex-col gap-1">
                    <h1 className="text-4xl font-bold">Sign In</h1>
                    <p>
                        Connect one of the following accounts to generate your
                        portfolio.
                    </p>
                </div>

                <div className="flex justify-center gap-3 border-t-2 pt-7">
                    <>
                        {Object.values(providers).map(provider => (
                            <Button
                                className="flex w-full flex-row items-center justify-center gap-2 bg-gray-800 text-white hover:bg-gray-700"
                                key={provider.name}
                                onClick={() =>
                                    signIn(provider.id, {
                                        callbackUrl: `${window.location.origin}/profile`
                                    })
                                }
                            >
                                {providerMap[provider.name]}
                                {provider.name}
                            </Button>
                        ))}
                    </>
                </div>
            </div>
        </div>
    </Layout>
);

export default SignInPage;

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

    return { props: { providers: await getProviders(), session } };
};
