import React from 'react';
import Image from '../../../components/image';
import { useSession } from 'next-auth/react';

const ProfileHero = () => {
    const { data: session } = useSession();

    return (
        <div className="flex flex-row flex-wrap items-center justify-between w-full gap-10"> 
            <div className="flex flex-row items-center flex-grow gap-8">
                <Image
                    className="h-32 aspect-square hidden sm:inline"
                    src={session.user.image}
                    alt=""
                    style={{ borderRadius: '100%' }}
                />
                <div className="flex w-full flex-col items-start gap-4">
                    <h1 className="text-4xl font-bold">
                        <span className="text-indigo-500">
                            {session?.user?.name}
                        </span>
                        <br />
                        <span className="text">Software Engineer</span>
                    </h1>
                    <p className="text-gray-500">{session.user.email}</p>
                </div>
            </div>

            <div className="flex gap-3 w-fit">
                <button
                    className="rounded-full border border-gray-300 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:bg-indigo-500 dark:text-white dark:hover:bg-indigo-400 dark:focus:ring-gray-700"
                    type="submit"
                    form="form"
                >
                    Save Changes
                </button>
                <button
                    className="rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                    type="button"
                >
                    View Portfolio
                </button>
            </div>
        </div>
    );
};

export default ProfileHero;
