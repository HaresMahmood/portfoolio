import { useCallback, useEffect } from 'react';

import Head from 'next/head';
import Layout from '../components/layout';
import ProfileForm from '../features/profile/profile-form';
import ProfileHero from '../features/profile/profile-hero';
import { useRouter } from 'next/router';
import { useUserProfile } from '../hooks/use-user-profile';

const ProfilePage = () => {
    const router = useRouter();
    const { profile, isUnauthenticated, isLoading } = useUserProfile();

    const redirect = useCallback(async () => {
        if (isUnauthenticated) {
            await router.push('/404');
        }
    }, [isUnauthenticated, router]);

    useEffect(() => {
        redirect();
    }, [redirect]);

    if (isLoading) {
        return (
            <Layout>
                <Head>
                    <title>Loading...</title>
                </Head>
                <main className="flex h-full w-full flex-1 flex-col items-stretch justify-center gap-16 px-14 py-8">
                    <p>Loading...</p>
                </main>
            </Layout>
        );
    }

    return (
        <Layout>
            <Head>
                <title>{profile.name} | Portfoolio</title>
            </Head>
            <main className="flex h-full w-full flex-1 flex-col items-stretch justify-center gap-16 px-14 py-8">
                <ProfileHero />
                <ProfileForm />
            </main>
        </Layout>
    );
};

export default ProfilePage;
