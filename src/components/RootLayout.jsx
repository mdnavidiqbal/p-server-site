import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../pages/shared/Footer/Footer';
import Navbar from '../pages/shared/Navbar/Navbar';

const RootLayout = () => {
    return (
        <div className=''>
            <Navbar></Navbar>
            <div className='min-h-screen'><Outlet></Outlet></div>
            <Footer/>
        </div>
    );
};

export default RootLayout;