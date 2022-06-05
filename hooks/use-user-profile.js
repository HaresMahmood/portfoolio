import fetcher from '../lib/fetcher';
import useSWR from 'swr';
import { useSession } from 'next-auth/react';

export const useUserProfile = () => {
    const { data: session, status } = useSession();

    const { data: profile, error } = useSWR(
        () => (session ? `/api/profiles/${session.user.id}` : null),
        fetcher
    );

    const isLoading = !error && (!session || !profile || status === 'loading');

    return {
        user: session?.user,
        profile: { ...profile, name: profile?.name || session?.user.name },
        isLoading,
        isError: error,
        isUnauthenticated: status === 'unauthenticated'
    };
};
