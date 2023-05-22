import React from 'react';
import Header from '../pages/Shared/Header/Header';
import Footer from '../pages/Shared/Footer/Footer';
import { Outlet } from 'react-router-dom';
import AllChefs from '../pages/AllChefs/AllChefs';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <AllChefs></AllChefs>
            <Footer></Footer>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;