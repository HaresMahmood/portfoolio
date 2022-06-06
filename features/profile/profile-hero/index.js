import Button from '../../../components/button';
import Image from '../../../components/image';
import Link from 'next/link';
import { useUserProfile } from '../../../hooks/use-user-profile';

const ProfileHero = () => {
    const { profile } = useUserProfile();

    return (
        <div className="flex w-full flex-row flex-wrap items-center justify-between gap-10">
            <div className="flex flex-grow flex-row items-center gap-8">
                <Image
                    className="hidden aspect-square h-32 sm:inline"
                    src={profile.image}
                    alt=""
                    priority
                    style={{ borderRadius: '100%' }}
                />
                <div className="flex w-full flex-col items-start gap-4">
                    <h1 className="text-4xl font-bold">
                        <span className="text-indigo-500">{profile.name}</span>
                        <br />
                        <span className="text">{profile.title}</span>
                    </h1>
                    <p className="text-gray-500">{profile.email}</p>
                </div>
            </div>

            <div className="flex w-fit gap-3">
                <Button
                    className="bg-indigo-500 ring-gray-800 text-white hover:bg-indigo-400"
                    type="submit"
                    form="form"
                >
                    Save Changes
                </Button>
                <Link href={`/${profile.id}`} passHref>
                    <a target="_blank">
                        <Button
                            className="bg-gray-800 text-white border-gray-600"
                            type="button"
                        >
                            View Portfolio
                        </Button>
                    </a>
                </Link>
            </div>
        </div>
    );
};

export default ProfileHero;
