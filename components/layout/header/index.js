import Image from '../../image';
import Link from 'next/link';
import { signOut } from 'next-auth/react';
import { useUserProfile } from '../../../hooks/use-user-profile';

const Header = () => {
    const { user, isUnauthenticated, profile, isLoading } = useUserProfile();

    const onSignOutClick = e => {
        e.preventDefault();
        signOut({ callbackUrl: `${window.location.origin}` });
    };

    const renderRightSideComponent = () => {
        if (isUnauthenticated) {
            return (
                <div className="flex h-8 items-center space-x-6">
                    <Link href="/signin">
                        <button
                            className="text-sm text-gray-600 hover:text-gray-800"
                            type="button"
                            href="/signin"
                        >
                            Sign in
                        </button>
                    </Link>
                    <Link href="/signin">
                        <button
                            className="rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                            type="button"
                        >
                            Get Started
                        </button>
                    </Link>
                </div>
            );
        }

        if (isLoading) {
            return (
                <div className="flex h-8 items-center">
                    <p className="text-sm">Loading...</p>
                </div>
            );
        }

        return (
            <div className="flex items-center space-x-3">
                <div className="rounded-full bg-indigo-500 ring-2 ring-indigo-500 ring-offset-2 ring-offset-white">
                    <Image
                        className="h-8 w-8"
                        src={user.image}
                        alt=""
                        style={{ borderRadius: '100%' }}
                    />
                </div>
                <p className="hidden sm:inline">
                    Hi, <span className="font-semibold">{profile.name}</span>
                </p>
                <Link href="/api/auth/signout" passHref>
                    <a
                        className="text-xs text-gray-600 hover:text-gray-800"
                        onClick={onSignOutClick}
                    >
                        Sign out
                    </a>
                </Link>
            </div>
        );
    };

    return (
        <nav className="flex w-full flex-row justify-between bg-white px-8 py-5">
            <div className="flex items-center space-x-3">
                <Image
                    className="h-7"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                    alt="Workflow"
                />
                <h3 className="text-lg font-semibold">Portfoolio</h3>
            </div>

            {renderRightSideComponent()}
        </nav>
    );
};

export default Header;
