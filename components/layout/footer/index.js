import Image from '../../image';
import React from 'react';

const Footer = () => {
    return (
        <footer className="flex w-full items-center justify-center border-t p-4">
            <a
                className="flex items-center justify-center text-sm"
                href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
            >
                Powered by{' '}
                <Image
                    alt="Vercel Logo"
                    className="ml-2 h-4"
                    src="/vercel.svg"
                />
            </a>
        </footer>
    );
};

export default Footer;
