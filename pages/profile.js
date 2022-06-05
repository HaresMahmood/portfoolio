import { useCallback, useEffect } from 'react';

import Head from 'next/head';
import Layout from '../components/layout';
import ProfileForm from '../features/profile/profile-form';
import ProfileHero from '../features/profile/profile-hero';
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
                <title>{session.user.name} | Portfoolio</title>
            </Head>
            <main className="flex h-full w-full flex-1 flex-col items-stretch justify-center gap-16 px-14 py-8">
                <ProfileHero />
                <ProfileForm />
            </main>
        </Layout>
    );
};

export default Profile;
