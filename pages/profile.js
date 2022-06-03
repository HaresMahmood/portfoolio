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
      <div className="flex w-full flex-row gap-8">
        <div className="flex w-full flex-col items-start gap-6">
          <div className="aspect-square h-full rounded-full bg-gray-900"></div>
          <div className="flex w-full flex-col items-start gap-4">
            <h1 className="text-4xl font-bold">
              <span className="text-indigo-500">{session?.user?.name}</span>
              <br />
              <span className="text">Software Engineer</span>
            </h1>
            <p className="text-gray-500">{session?.user?.email}</p>
          </div>
        </div>
        <div className="flex w-full flex-col items-start gap-8 md:flex-row md:gap-48">
          <form
            className="flex w-full flex-col items-start gap-3"
            action="/send-data-here"
            method="post"
          >
            <h2 className="text-2xl font-semibold">General</h2>
            <div className="flex w-full flex-row items-center justify-between">
              <label className="font-medium text-gray-900" htmlFor="name">
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
              <label className="w-28 font-medium text-gray-900" htmlFor="title">
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
              <label className="w-28 font-medium text-gray-900" htmlFor="about">
                About
              </label>
              <textarea
                className="w-2/3 appearance-none rounded-3xl border-2 border-gray-500 bg-transparent px-4 py-2 font-medium text-gray-500 focus:text-gray-900"
                rows={3}
                id="about"
                name="about"
              />
            </div>
          </form>
          <form
            className="flex w-full flex-col items-start gap-3"
            action="/send-data-here"
            method="post"
          >
            <h2 className="text-2xl font-semibold"> General </h2>
            <div className="flex w-full flex-row items-center justify-between">
              <label className="font-medium text-gray-900" htmlFor="name">
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
              <label className="w-28 font-medium text-gray-900" htmlFor="title">
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
              <label className="w-28 font-medium text-gray-900" htmlFor="about">
                About
              </label>
              <textarea
                className="w-2/3 appearance-none rounded-3xl border-2 border-gray-500 bg-transparent px-4 py-2 font-medium text-gray-500 focus:text-gray-900"
                rows={3}
                id="about"
                name="about"
              />
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
