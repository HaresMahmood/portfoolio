import React from 'react';
import Image from '../../../components/image';
import { useSession } from 'next-auth/react';

const ProfileHero = () => {
    const { data: session } = useSession();

    return (
        <div className="flex w-full flex-row items-center gap-8">
            <Image
                className="h-32 aspect-square"
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
    );
};

export default ProfileHero;
