import Button from '../../button';
import Image from '../../image';
import Link from 'next/link';
import Spinner from '../../spinner';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useUserProfile } from '../../../hooks/use-user-profile';

const Header = () => {
    const router = useRouter();
    const { isUnauthenticated, profile, isLoading } = useUserProfile();

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
                <Link href="/signin">
                    <Button
                        className="bg-none text-gray-600 hover:text-gray-800 hover:bg-gray-100"
                        type="button"
                    >
                        Sign In
                    </Button>
                </Link>
            );
        }

        if (isLoading) {
            return <Spinner />;
        }

        return (
            <div className="flex items-center space-x-3">
                <p className="hidden text-sm sm:inline">
                    <span className="font-semibold">{profile.name}</span>
                </p>
                <Link href="/api/auth/signout" passHref>
                    <Button
                        className="text-xs bg-none outline-none ring-transparent text-gray-600 hover:text-gray-800 hover:bg-gray-100"
                        onClick={onSignOutClick}
                        type="button"
                    >
                        Sign Out
                    </Button>
                </Link>
                <div className="h-7 rounded-full ring-2 ring-indigo-500 ring-offset-2">
                    <Image
                        className="aspect-square h-full"
                        src={profile.image}
                        alt=""
                        style={{ borderRadius: '100%' }}
                    />
                </div>
            </div>
        );
    };

    return (
        <nav className="flex h-16 w-full flex-row justify-between items-center bg-white px-8 py-5">
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
