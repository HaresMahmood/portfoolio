import { signIn, signOut, useSession } from 'next-auth/react';
import Image from '../image';
import React from 'react';

const Header = () => {
    const { data: session } = useSession();

    const onSignInClick = e => {
        e.preventDefault();
        signIn();
    };

    const onSignOutClick = e => {
        e.preventDefault();
        signOut();
    };

    const renderRightSideComponent = () => {
        if (!session) {
            return (
                <div className="flex items-center space-x-6">
                    <button
                        className="text-gray-600 hover:text-gray-800"
                        type="button"
                        href="/api/auth/signin"
                        onClick={onSignInClick}
                    >
                        Sign in
                    </button>
                    <button
                        className="text-gray-900 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium text-sm px-4 py-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                        type="button"
                        onClick={onSignInClick}
                    >
                        Get Started
                    </button>
                </div>
            );
        }
        
        if (session?.user) {
          return (
                <div className="flex items-center space-x-3">
                    <div className="bg-gray-800 rounded-full ring-2 ring-offset-2 ring-offset-white ring-gray-800">
                        <Image
                            className="h-8 w-8"
                            src={session.user.image}
                            alt=""
                            style={{ borderRadius: '100%' }}
                        />
                    </div>
                    <p> Hi, <span className="font-semibold">{session.user.name}</span> </p>
                    <a
                        className="text-gray-600 hover:text-gray-800 text-xs"
                        href="/api/auth/signout"
                        onClick={onSignOutClick}
                    >
                        Sign out
                    </a>
                </div>
           );
        }
    };

    return (
        <nav className="flex flex-row justify-between w-full bg-white px-8 py-5">
            <div className="flex items-center space-x-3">
                <Image
                    className="h-7"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                    alt="Workflow"
                />
                <h3 className="font-semibold text-lg"> O<span className="hidden sm:inline">rientation </span>H<span className="hidden sm:inline">ackathon</span> </h3>
            </div>
            
            {renderRightSideComponent()}
        </nav>
    );
};

export default Header;
