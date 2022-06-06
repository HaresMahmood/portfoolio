import Button from '../../../components/button';
import Image from '../../../components/image';
import { useUserProfile } from '../../../hooks/use-user-profile';

const ProfileHero = () => {
    const { user, profile } = useUserProfile();

    return (
        <div className="flex w-full flex-row flex-wrap items-center justify-between gap-10">
            <div className="flex flex-grow flex-row items-center gap-8">
                <Image
                    className="hidden aspect-square h-32 sm:inline"
                    src={user.image}
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
                    <p className="text-gray-500">{user.email}</p>
                </div>
            </div>

            <div className="flex w-fit gap-3">
                <Button
                    className="dark:bg-indigo-500 dark:text-white dark:hover:bg-indigo-400 dark:focus:ring-gray-700"
                    type="submit"
                    form="form"
                >
                    Save Changes
                </Button>
                <Button
                    className="dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                    type="button"
                >
                    View Portfolio
                </Button>
            </div>
        </div>
    );
};

export default ProfileHero;
