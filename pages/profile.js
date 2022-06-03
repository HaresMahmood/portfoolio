import Head from 'next/head';
import Header from '../components/header';
import Image from '../components/image';

const Profile = () => {
    return (
        <div className="flex flex-col items-center justify-center bg-gray-100">
            <Head>
                <title> Orientation Hackathon </title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossorigin
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@200;300;400;500;600;700;800;900&display=swap"
                    rel="stylesheet"
                />
            </Head>

            <Header />

            <main className="flex h-full w-full flex-col items-start gap-16 px-14 py-8">
                <div className="flex w-full flex-row gap-8">
                    {/* <div class="bg-gray-900 h-full aspect-square rounded-full"></div> */}
                    <div className="flex w-full flex-col items-start gap-4">
                        <h1 className="text-4xl font-bold">
                            {' '}
                            <span className="text-indigo-500">
                                John Doe
                            </span>{' '}
                            <br />{' '}
                            <span className="text">Software Engineer</span>{' '}
                        </h1>
                        <p className="text-gray-500"> john.doe@email.com </p>
                    </div>
                </div>

                <form
                    className="flex w-full flex-col items-start gap-8"
                    action="/send-data-here"
                    method="post"
                >
                    <div className="flex w-full flex-row flex-wrap items-start gap-x-40 gap-y-8">
                        <div className="flex w-full flex-grow basis-80 flex-col items-start gap-3">
                            <h2 className="text-2xl font-semibold">
                                {' '}
                                General{' '}
                            </h2>
                            <div className="flex w-full flex-row items-center justify-between">
                                <label
                                    className="font-medium text-gray-900"
                                    for="name"
                                >
                                    {' '}
                                    Full name{' '}
                                </label>
                                <input
                                    className="w-2/3 appearance-none rounded-full border-2 border-gray-500 bg-transparent px-4 py-2 font-medium text-gray-500 focus:text-gray-900"
                                    type="text"
                                    id="name"
                                    name="name"
                                />{' '}
                            </div>
                            <div className="flex w-full flex-row items-center justify-between">
                                <label
                                    className="w-28 font-medium text-gray-900"
                                    for="title"
                                >
                                    {' '}
                                    Job title{' '}
                                </label>
                                <input
                                    className="w-2/3 appearance-none rounded-full border-2 border-gray-500 bg-transparent px-4 py-2 font-medium text-gray-500 focus:text-gray-900"
                                    type="text"
                                    id="title"
                                    name="title"
                                />
                            </div>
                            <div className="flex w-full flex-row items-center justify-between">
                                <label
                                    className="w-28 font-medium text-gray-900"
                                    for="about"
                                >
                                    {' '}
                                    About{' '}
                                </label>
                                <textarea
                                    className="w-2/3 appearance-none rounded-3xl border-2 border-gray-500 bg-transparent px-4 py-2 font-medium text-gray-500 focus:text-gray-900"
                                    rows={3}
                                    id="about"
                                    name="about"
                                />
                            </div>
                        </div>
                        <div className="flex w-full min-w-min flex-grow basis-80 flex-col items-start gap-3">
                            <h2 className="text-2xl font-semibold">
                                {' '}
                                General{' '}
                            </h2>
                            <div className="flex w-full flex-row items-center justify-between">
                                <label
                                    className="font-medium text-gray-900"
                                    for="name"
                                >
                                    {' '}
                                    Full name{' '}
                                </label>
                                <input
                                    className="w-2/3 appearance-none rounded-full border-2 border-gray-500 bg-transparent px-4 py-2 font-medium text-gray-500 focus:text-gray-900"
                                    type="text"
                                    id="name"
                                    name="name"
                                />{' '}
                            </div>
                            <div className="flex w-full flex-row items-center justify-between">
                                <label
                                    className="w-28 font-medium text-gray-900"
                                    for="title"
                                >
                                    {' '}
                                    Job title{' '}
                                </label>
                                <input
                                    className="w-2/3 appearance-none rounded-full border-2 border-gray-500 bg-transparent px-4 py-2 font-medium text-gray-500 focus:text-gray-900"
                                    type="text"
                                    id="title"
                                    name="title"
                                />
                            </div>
                            <div className="flex w-full flex-row items-center justify-between">
                                <label
                                    className="w-28 font-medium text-gray-900"
                                    for="about"
                                >
                                    {' '}
                                    About{' '}
                                </label>
                                <textarea
                                    className="w-2/3 appearance-none rounded-3xl border-2 border-gray-500 bg-transparent px-4 py-2 font-medium text-gray-500 focus:text-gray-900"
                                    rows={3}
                                    id="about"
                                    name="about"
                                />
                            </div>
                        </div>
                    </div>
                </form>
            </main>

            <footer className="flex w-full items-center justify-center border-t p-4">
                <a
                    className="flex items-center justify-center"
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
        </div>
    );
};

export default Profile;
