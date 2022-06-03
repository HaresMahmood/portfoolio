import Footer from './footer';
import Header from './header';

const Layout = ({ children }) => {
    return (
        <div className="flex min-h-screen flex-col bg-gray-100">
            <Header />
            <div className="flex flex-1 py-8">{children}</div>
            <Footer />
        </div>
    );
};

export default Layout;
