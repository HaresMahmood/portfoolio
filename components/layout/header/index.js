import { signOut, useSession } from 'next-auth/react';

import Image from '../../image';
import Link from 'next/link';

const Header = () => {
    const { data: session } = useSession();

    const onSignOutClick = e => {
        e.preventDefault();
        signOut({ callbackUrl: `${window.location.origin}` });
    };

    const renderRightSideComponent = () => {
        if (!session) {
            return (
                <div className="flex items-center space-x-6">
                    <Link href="/signin">
                        <button
                            className="text-gray-600 hover:text-gray-800"
                            type="button"
                            href="/signin"
                        >
                            Sign In
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

        if (session?.user) {
            return (
                <div className="flex items-center gap-3">
                    <p className="text-sm hidden sm:inline">
                        Hi,{' '}
                        <span className="font-semibold">
                            {session.user.name}
                        </span>
                    </p>
                    <Link href="/api/auth/signout" passHref>
                        <a
                            className="text-xs text-gray-600 hover:text-gray-800"
                            onClick={onSignOutClick}
                        >
                            Sign out
                        </a>
                    </Link>
                    <div className="h-full rounded-full ring-2 ring-indigo-500 ring-offset-2">
                        <Image
                            className="h-full aspect-square"
                            src={session.user.image}
                            alt=""
                            style={{ borderRadius: '100%' }}
                        />
                    </div>
                </div>
            );
        }
    };

    return (
        <nav className="flex w-full h-16 flex-row justify-between bg-white px-8 py-5">
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
