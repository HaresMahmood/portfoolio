import Footer from './footer';
import Header from './header';

const Layout = ({ children }) => {
  return (
    <div className="flex h-screen max-h-screen flex-col items-center justify-center bg-gray-100">
      <Header />
      <main className="flex h-full w-full flex-col items-center justify-between px-14 py-8 md:flex-row md:gap-28">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
