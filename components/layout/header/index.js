import Button from '../../button';
import Image from '../../image';
import Link from 'next/link';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useUserProfile } from '../../../hooks/use-user-profile';

const Header = () => {
    const router = useRouter();
    const { user, isUnauthenticated, profile, isLoading } = useUserProfile();

    const onSignOutClick = e => {
        e.preventDefault();
        signOut({ callbackUrl: `${window.location.origin}` });
    };

    const renderRightSideComponent = () => {
        if (router.asPath === '/signin') {
            return null;
        }

        if (isUnauthenticated) {
            return (
                <div className="flex h-8 items-center space-x-6">
                    <Link href="/signin">
                        <button
                            className="text-sm text-gray-600 hover:text-gray-800"
                            type="button"
                            href="/signin"
                        >
                            Sign In
                        </button>
                    </Link>
                    <Link href="/signin">
                        <Button
                            className="dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                            type="button"
                        >
                            Get Started
                        </Button>
                    </Link>
                </div>
            );
        }

        if (isLoading) {
            return <p className="text-sm">Loading...</p>;
        }

        return (
            <div className="flex items-center space-x-3">
                <p className="hidden text-sm sm:inline">
                    <span className="font-semibold">{profile.name}</span>
                </p>
                <Link href="/api/auth/signout" passHref>
                    <a
                        className="text-xs text-gray-600 hover:text-gray-800"
                        onClick={onSignOutClick}
                    >
                        Sign Out
                    </a>
                </Link>
                <div className="h-7 rounded-full ring-2 ring-indigo-500 ring-offset-2">
                    <Image
                        className="aspect-square h-full"
                        src={user.image}
                        alt=""
                        style={{ borderRadius: '100%' }}
                    />
                </div>
            </div>
        );
    };

    return (
        <nav className="flex h-16 w-full flex-row justify-between bg-white px-8 py-5">
            <Link href="/">
                <a className="flex items-center space-x-3">
                    <Image
                        className="h-7"
                        src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                        alt="Workflow"
                        priority
                    />
                    <h3 className="text-lg font-semibold">Portfoolio</h3>
                </a>
            </Link>
            {renderRightSideComponent()}
        </nav>
    );
};

export default Header;
