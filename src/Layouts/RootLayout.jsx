import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';

export const responsive = "w-11/12 lg:w-9/12 mx-auto"
const RootLayout = () => {

    return (
      <div>
        <Header></Header>
        <div className='min-h-[calc(100vh-360px)]'>
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
      </div>
    );
};

export default RootLayout;