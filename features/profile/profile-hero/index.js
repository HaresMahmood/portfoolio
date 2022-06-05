import React from 'react';
import { useSession } from 'next-auth/react';

const ProfileHero = () => {
    const { data: session } = useSession();

    return (
        <div className="flex w-full flex-row items-center gap-8">
            <div className="h-32 aspect-square rounded-full bg-gray-900">  </div>
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
    );
};

export default ProfileHero;
