import { useUserProfile } from '../../../hooks/use-user-profile';

const ProfileHero = () => {
    const { user, profile } = useUserProfile();

    return (
        <div className="flex w-full flex-row gap-8">
            <div className="flex w-full flex-col items-start gap-4">
                <h1 className="text-4xl font-bold">
                    <span className="text-indigo-500">{profile.name}</span>
                    <br />
                    <span className="text">{profile.title}</span>
                </h1>
                <p className="text-gray-500">{user.email}</p>
            </div>
        </div>
    );
};

export default ProfileHero;
