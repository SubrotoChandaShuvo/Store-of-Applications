import { Outlet } from 'react-router';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar'

const RootLayout = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <Navbar/>
            <div className='max-w-screen-2xl mx-auto w-full flex-1'>
                <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export default RootLayout;