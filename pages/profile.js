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
                <title>{session?.user?.name} | Orientation Hackathon</title> 
            </Head>
            <main className="flex h-full w-full flex-1 flex-col items-stretch justify-center gap-16 px-14 py-8">
                <div className="flex w-full flex-row gap-8">
                    {/* <div class="bg-gray-900 h-full aspect-square rounded-full"></div> */}
                    <div className="flex w-full flex-col items-start gap-4">
                        <h1 className="text-4xl font-bold">
                            <span className="text-indigo-500">
                                {session?.user?.name} 
                            </span>
                            <br />
                            <span className="text">Software Engineer</span>
                        </h1>
                        <p className="text-gray-500">{session?.user?.email}</p>
                    </div>
                </div>

                <form
                    className="flex w-full flex-row flex-wrap items-start gap-x-40 gap-y-12"
                    action="/send-data-here"
                    method="post"
                >
                    <div className="flex flex-grow basis-5/12 flex-col items-start gap-3">
                        <h2 className="text-2xl font-semibold"> General </h2>
                        <div className="flex w-full flex-row items-center justify-between">
                            <label
                                className="font-medium text-gray-900"
                                htmlFor="name"
                            >
                                Full name
                            </label>
                            <input
                                className="w-2/3 appearance-none rounded-full border-2 border-gray-500 bg-transparent px-4 py-2 font-medium text-gray-500 focus:text-gray-900"
                                type="text"
                                id="name"
                                name="name"
                            />
                        </div>
                        <div className="flex w-full flex-row items-center justify-between">
                            <label
                                className="w-28 font-medium text-gray-900"
                                htmlFor="title"
                            >
                                Job title
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
                                About
                            </label>
                            <textarea
                                className="w-2/3 appearance-none rounded-3xl border-2 border-gray-500 bg-transparent px-4 py-2 font-medium text-gray-500 focus:text-gray-900"
                                rows={3}
                                id="about"
                                name="about"
                            />
                        </div>
                    </div>
                    <div className="flex flex-grow basis-5/12 flex-col items-start gap-3">
                        <h2 className="text-2xl font-semibold"> Contact </h2>

                        <div className="flex w-full flex-row items-center justify-between">
                            <label
                                className="w-28 font-medium text-gray-900"
                                htmlFor="phone"
                            >
                                Phone
                            </label>
                            <input
                                className="w-2/3 appearance-none rounded-full border-2 border-gray-500 bg-transparent px-4 py-2 font-medium text-gray-500 focus:text-gray-900"
                                type="text"
                                id="phone"
                                name="phone"
                            />
                        </div>
                        <h3 className="text-lg font-semibold"> Location </h3>
                        <div className="flex w-full flex-row items-center justify-between">
                            <label
                                className="font-medium text-gray-900"
                                htmlFor="country"
                            >
                                Country
                            </label>
                            <input
                                className="w-2/3 appearance-none rounded-full border-2 border-gray-500 bg-transparent px-4 py-2 font-medium text-gray-500 focus:text-gray-900"
                                type="text"
                                id="country"
                                name="country"
                            />
                        </div>
                        <div className="flex w-full flex-row items-center justify-between">
                            <label
                                className="w-28 font-medium text-gray-900"
                                htmlFor="city"
                            >
                                City
                            </label>
                            <input
                                className="w-2/3 appearance-none rounded-full border-2 border-gray-500 bg-transparent px-4 py-2 font-medium text-gray-500 focus:text-gray-900"
                                type="text"
                                id="city"
                                name="city"
                            />
                        </div>
                        <h3 className="text-lg font-semibold"> Socials </h3>
                        <div className="flex w-full flex-row items-center justify-between">
                            <label
                                className="w-28 font-medium text-gray-900"
                                htmlFor="linkedin"
                            >
                                LinkedIn
                            </label>
                            <input
                                className="w-2/3 appearance-none rounded-full border-2 border-gray-500 bg-transparent px-4 py-2 font-medium text-gray-500 focus:text-gray-900"
                                type="text"
                                id="linkedin"
                                name="linkedin"
                            />
                        </div>
                        <div className="flex w-full flex-row items-center justify-between">
                            <label
                                className="w-28 font-medium text-gray-900"
                                htmlFor="twitter"
                            >
                                Twitter
                            </label>
                            <input
                                className="w-2/3 appearance-none rounded-full border-2 border-gray-500 bg-transparent px-4 py-2 font-medium text-gray-500 focus:text-gray-900"
                                type="text"
                                id="twitter"
                                name="twitter"
                            />
                        </div>
                        <div className="flex w-full flex-row items-center justify-between">
                            <label
                                className="w-28 font-medium text-gray-900"
                                htmlFor="fb"
                            >
                                Facebook
                            </label>
                            <input
                                className="w-2/3 appearance-none rounded-full border-2 border-gray-500 bg-transparent px-4 py-2 font-medium text-gray-500 focus:text-gray-900"
                                type="text"
                                id="fb"
                                name="fb"
                            />
                        </div>
                    </div>
                    <div className="flex flex-grow basis-5/12 flex-col items-start gap-3">
                        <h2 className="text-2xl font-semibold"> Education </h2>
                        <div className="flex w-full flex-row items-center justify-between">
                            <label
                                className="font-medium text-gray-900"
                                htmlFor="school"
                            >
                                School
                            </label>
                            <input
                                className="w-2/3 appearance-none rounded-full border-2 border-gray-500 bg-transparent px-4 py-2 font-medium text-gray-500 focus:text-gray-900"
                                type="text"
                                id="school"
                                name="school"
                            />
                        </div>
                        <div className="flex w-full flex-row items-center justify-between">
                            <label
                                className="w-28 font-medium text-gray-900"
                                htmlFor="course"
                            >
                                Course
                            </label>
                            <input
                                className="w-2/3 appearance-none rounded-full border-2 border-gray-500 bg-transparent px-4 py-2 font-medium text-gray-500 focus:text-gray-900"
                                type="text"
                                id="course"
                                name="course"
                            />
                        </div>
                        <div className="flex w-full flex-row flex-wrap items-center justify-between">
                            <label
                                className="w-28 font-medium text-gray-900"
                                htmlFor="from"
                            >
                                Period
                            </label>
                            <div className="flex w-2/3 flex-row flex-wrap items-center gap-3">
                                <div className="flex items-center gap-5 flex-grow basis-5/12">
                                    <p className="w-12"> From </p>
                                    <input
                                        className="w-full appearance-none rounded-full border-2 border-gray-500 bg-transparent px-4 py-2 font-medium text-gray-500 focus:text-gray-900"
                                        type="month"
                                        id="from"
                                        name="from"
                                    />
                                </div>
                                <div className="flex items-center gap-5 flex-grow basis-5/12">
                                    <p  className="w-12"> To </p>
                                    <input
                                        className="w-full appearance-none rounded-full border-2 border-gray-500 bg-transparent px-4 py-2 font-medium text-gray-500 focus:text-gray-900"
                                        type="month"
                                        id="to"
                                        name="to"
                                    />
                                </div>
                            </div>
                        </div>
                        <button
                            className="font-semibold text-gray-600 hover:text-gray-800"
                            type="button"
                        >
                            + Add Education
                        </button>
                    </div>
                    <div className="flex flex-grow basis-5/12 flex-col items-start gap-3">
                        <h2 className="text-2xl font-semibold">
                            Work Experience
                        </h2>
                        <div className="flex w-full flex-row items-center justify-between">
                            <label
                                className="font-medium text-gray-900"
                                htmlFor="company"
                            >
                                Company
                            </label>
                            <input
                                className="w-2/3 appearance-none rounded-full border-2 border-gray-500 bg-transparent px-4 py-2 font-medium text-gray-500 focus:text-gray-900"
                                type="text"
                                id="company"
                                name="company"
                            />
                        </div>
                        <div className="flex w-full flex-row items-center justify-between">
                            <label
                                className="w-28 font-medium text-gray-900"
                                htmlFor="Location"
                            >
                                Location
                            </label>
                            <input
                                className="w-2/3 appearance-none rounded-full border-2 border-gray-500 bg-transparent px-4 py-2 font-medium text-gray-500 focus:text-gray-900"
                                type="text"
                                id="course"
                                name="course"
                            />
                        </div>
                        <div className="flex w-full flex-row items-center justify-between">
                            <label
                                className="w-28 font-medium text-gray-900"
                                htmlFor="from"
                            >
                                Period
                            </label>
                            <div className="flex w-2/3 flex-row flex-wrap items-center gap-3">
                                <div className="flex items-center gap-5 flex-grow basis-5/12">
                                    <p className="w-12"> From </p>
                                    <input
                                        className="w-full appearance-none rounded-full border-2 border-gray-500 bg-transparent px-4 py-2 font-medium text-gray-500 focus:text-gray-900"
                                        type="month"
                                        id="from"
                                        name="from"
                                    />
                                </div>
                                <div className="flex items-center gap-5 flex-grow basis-5/12">
                                    <p  className="w-12"> To </p>
                                    <input
                                        className="w-full appearance-none rounded-full border-2 border-gray-500 bg-transparent px-4 py-2 font-medium text-gray-500 focus:text-gray-900"
                                        type="month"
                                        id="to"
                                        name="to"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex w-full flex-row items-center justify-between">
                            <label
                                className="w-28 font-medium text-gray-900"
                                htmlFor="description"
                            >
                                Description
                            </label>
                            <textarea
                                className="w-2/3 appearance-none rounded-3xl border-2 border-gray-500 bg-transparent px-4 py-2 font-medium text-gray-500 focus:text-gray-900"
                                rows={3}
                                id="description"
                                name="description"
                            />
                        </div>
                        <button
                            className="font-semibold text-gray-600 hover:text-gray-800"
                            type="button"
                        >
                            + Add Work Experience
                        </button>
                    </div>
                    <div className="flex flex-grow basis-5/12 flex-col items-start gap-3">
                        <h2 className="text-2xl font-semibold"> Projects </h2>
                        <div className="flex w-full flex-row items-center justify-between">
                            <label
                                className="font-medium text-gray-900"
                                htmlFor="project"
                            >
                                Name
                            </label>
                            <input
                                className="w-2/3 appearance-none rounded-full border-2 border-gray-500 bg-transparent px-4 py-2 font-medium text-gray-500 focus:text-gray-900"
                                type="text"
                                id="project"
                                name="project"
                            />
                        </div>
                        <div className="flex w-full flex-row items-center justify-between">
                            <label
                                className="font-medium text-gray-900"
                                htmlFor="repo"
                            >
                                Repository
                            </label>
                            <input
                                className="w-2/3 appearance-none rounded-full border-2 border-gray-500 bg-transparent px-4 py-2 font-medium text-gray-500 focus:text-gray-900"
                                type="text"
                                id="repo"
                                name="repo"
                            />
                        </div>
                        <div className="flex w-full flex-row items-center justify-between">
                            <label
                                className="w-28 font-medium text-gray-900"
                                htmlFor="description"
                            >
                                Description
                            </label>
                            <textarea
                                className="w-2/3 appearance-none rounded-3xl border-2 border-gray-500 bg-transparent px-4 py-2 font-medium text-gray-500 focus:text-gray-900"
                                rows={3}
                                id="description"
                                name="description"
                            />
                        </div>
                        <button
                            className="font-semibold text-gray-600 hover:text-gray-800"
                            type="button"
                        >
                            + Add Project
                        </button>
                    </div>
                </form>
            </main>
        </Layout>
    );
};

export default Profile;
