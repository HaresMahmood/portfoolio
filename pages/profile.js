import Head from 'next/head';
import Header from '../components/header';
import Image from '../components/image';

const Profile = () => {
    return (
        <div className="bg-gray-100 flex flex-col items-center justify-center">
            <Head>
              <title> Orientation Hackathon </title>
              <link rel="icon" href="/favicon.ico" />
              <link rel="preconnect" href="https://fonts.googleapis.com" />
              <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
              <link href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
            </Head>

            <Header/>

            <main className="flex flex-col items-start gap-32 w-full h-full px-14 py-8">
                <div className="flex flex-row gap-8 w-full">
                    <div class="bg-gray-900 h-full aspect-square rounded-full"></div>
                    <div className="flex flex-col items-start gap-4 w-full">
                        <h1 className="text-4xl font-bold"> <span className="text-indigo-500">John Doe</span> <br/> <span className="text">Software Engineer</span> </h1>
                        <p className="text-gray-500"> john.doe@email.com </p>
                    </div>
                </div>

                <div className="flex flex-col items-start gap-8 w-full md:flex-row md:gap-48">
                    <form className="flex flex-col items-start gap-3 w-full" action="/send-data-here" method="post">
                        <h2 className="text-2xl font-semibold"> General </h2>
                        <div className="flex flex-row items-center justify-between w-full">
                            <label className="font-medium text-gray-900" for="name"> Full name </label>
                            <input className="appearance-none border-2 border-gray-500 text-gray-500 font-medium rounded-full bg-transparent w-2/3 px-4 py-2 focus:text-gray-900" type="text" id="name" name="name" />
                        </div>
                        <div className="flex flex-row items-center justify-between w-full">
                            <label className="font-medium text-gray-900 w-28" for="title"> Job title </label>
                            <input className="appearance-none border-2 border-gray-500 text-gray-500 font-medium rounded-full bg-transparent w-2/3 px-4 py-2 focus:text-gray-900" type="text" id="title" name="title" />
                        </div>
                        <div className="flex flex-row items-center justify-between w-full">
                            <label className="font-medium text-gray-900 w-28" for="about"> About </label>
                            <textarea className="appearance-none border-2 border-gray-500 text-gray-500 font-medium rounded-3xl bg-transparent w-2/3 px-4 py-2 focus:text-gray-900" rows={3} id="about" name="about" />
                        </div>
                    </form>

                    <form className="flex flex-col items-start gap-3 w-full" action="/send-data-here" method="post">
                        <h2 className="text-2xl font-semibold"> General </h2>
                        <div className="flex flex-row items-center justify-between w-full">
                            <label className="font-medium text-gray-900" for="name"> Full name </label>
                            <input className="appearance-none border-2 border-gray-500 text-gray-500 font-medium rounded-full bg-transparent w-2/3 px-4 py-2 focus:text-gray-900" type="text" id="name" name="name" />
                        </div>
                        <div className="flex flex-row items-center justify-between w-full">
                            <label className="font-medium text-gray-900 w-28" for="title"> Job title </label>
                            <input className="appearance-none border-2 border-gray-500 text-gray-500 font-medium rounded-full bg-transparent w-2/3 px-4 py-2 focus:text-gray-900" type="text" id="title" name="title" />
                        </div>
                        <div className="flex flex-row items-center justify-between w-full">
                            <label className="font-medium text-gray-900 w-28" for="about"> About </label>
                            <textarea className="appearance-none border-2 border-gray-500 text-gray-500 font-medium rounded-3xl bg-transparent w-2/3 px-4 py-2 focus:text-gray-900" rows={3} id="about" name="about" />
                        </div>
                    </form>
                </div>
            </main>

            <footer className="flex items-center justify-center w-full p-4 border-t">
                <a
                    className="flex items-center justify-center"
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    Powered by{' '}
                    <Image alt="Vercel Logo" className="h-4 ml-2" src="/vercel.svg" />
                </a>
            </footer>
        </div>
    );
};

export default Profile;
