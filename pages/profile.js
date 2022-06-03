import { useCallback, useEffect } from 'react';

import Head from 'next/head';
import Layout from '../components/layout';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';

const Profile = () => {
    const router = useRouter();
    const { data: session, status } = useSession();

    const redirect = useCallback(async () => {
        if (status === 'unauthenticated') {
            await router.push('/404');
        }
    }, [router, status]);

    useEffect(() => {
        redirect();
    }, [redirect]);

    if (status === 'loading' || status === 'unauthenticated') {
        return (
            <Layout>
                <Head>
                    <title>Loading...</title>
                </Head>
                <div className="flex w-full flex-row gap-8">
                    <p>Loading...</p>
                </div>
            </Layout>
        );
    }

    return (
        <Layout>
            <Head>
                <title>Orientation Hackathon</title>
            </Head>
            <main className="flex h-full w-full flex-1 flex-col items-stretch justify-center gap-16 px-14 py-8">
                <div className="flex w-full flex-row gap-8">
                    {/* <div class="bg-gray-900 h-full aspect-square rounded-full"></div> */}
                    <div className="flex w-full flex-col items-start gap-4">
                        <h1 className="text-4xl font-bold">
                            {' '}
                            <span className="text-indigo-500">
                                John Doe
                            </span>{' '}
                            <br />{' '}
                            <span className="text">Software Engineer</span>{' '}
                        </h1>
                        <p className="text-gray-500"> john.doe@email.com </p>
                    </div>
                </div>

                <form
                    className="flex w-full flex-col items-start gap-8"
                    action="/send-data-here"
                    method="post"
                >
                    <div className="flex w-full flex-row flex-wrap items-start gap-x-40 gap-y-8">
                        <div className="flex w-full flex-grow basis-80 flex-col items-start gap-3">
                            <h2 className="text-2xl font-semibold">
                                {' '}
                                General{' '}
                            </h2>
                            <div className="flex w-full flex-row items-center justify-between">
                                <label
                                    className="font-medium text-gray-900"
                                    htmlFor="name"
                                >
                                    {' '}
                                    Full name{' '}
                                </label>
                                <input
                                    className="w-2/3 appearance-none rounded-full border-2 border-gray-500 bg-transparent px-4 py-2 font-medium text-gray-500 focus:text-gray-900"
                                    type="text"
                                    id="name"
                                    name="name"
                                />{' '}
                            </div>
                            <div className="flex w-full flex-row items-center justify-between">
                                <label
                                    className="w-28 font-medium text-gray-900"
                                    htmlFor="title"
                                >
                                    {' '}
                                    Job title{' '}
                                </label>
                                <input
                                    className="w-2/3 appearance-none rounded-full border-2 border-gray-500 bg-transparent px-4 py-2 font-medium text-gray-500 focus:text-gray-900"
                                    type="text"
                                    id="title"
                                    name="title"
                                />
                            </div>
                            <div className="flex w-full flex-row items-center justify-between">
                                <label
                                    className="w-28 font-medium text-gray-900"
                                    htmlFor="about"
                                >
                                    {' '}
                                    About{' '}
                                </label>
                                <textarea
                                    className="w-2/3 appearance-none rounded-3xl border-2 border-gray-500 bg-transparent px-4 py-2 font-medium text-gray-500 focus:text-gray-900"
                                    rows={3}
                                    id="about"
                                    name="about"
                                />
                            </div>
                        </div>
                        <div className="flex w-full min-w-min flex-grow basis-80 flex-col items-start gap-3">
                            <h2 className="text-2xl font-semibold">
                                {' '}
                                General{' '}
                            </h2>
                            <div className="flex w-full flex-row items-center justify-between">
                                <label
                                    className="font-medium text-gray-900"
                                    htmlFor="name"
                                >
                                    {' '}
                                    Full name{' '}
                                </label>
                                <input
                                    className="w-2/3 appearance-none rounded-full border-2 border-gray-500 bg-transparent px-4 py-2 font-medium text-gray-500 focus:text-gray-900"
                                    type="text"
                                    id="name"
                                    name="name"
                                />{' '}
                            </div>
                            <div className="flex w-full flex-row items-center justify-between">
                                <label
                                    className="w-28 font-medium text-gray-900"
                                    htmlFor="title"
                                >
                                    {' '}
                                    Job title{' '}
                                </label>
                                <input
                                    className="w-2/3 appearance-none rounded-full border-2 border-gray-500 bg-transparent px-4 py-2 font-medium text-gray-500 focus:text-gray-900"
                                    type="text"
                                    id="title"
                                    name="title"
                                />
                            </div>
                            <div className="flex w-full flex-row items-center justify-between">
                                <label
                                    className="w-28 font-medium text-gray-900"
                                    htmlFor="about"
                                >
                                    {' '}
                                    About{' '}
                                </label>
                                <textarea
                                    className="w-2/3 appearance-none rounded-3xl border-2 border-gray-500 bg-transparent px-4 py-2 font-medium text-gray-500 focus:text-gray-900"
                                    rows={3}
                                    id="about"
                                    name="about"
                                />
                            </div>
                        </div>
                    </div>
                </form>
            </main>
        </Layout>
    );
};

export default Profile;
