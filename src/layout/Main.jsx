import React from 'react';
import Header from '../pages/Shared/Header/Header';
import Footer from '../pages/Shared/Footer/Footer';
import { Outlet } from 'react-router-dom';
import AllChefs from '../pages/AllChefs/AllChefs';
import Banner from '../pages/Shared/Header/Banner';
import TrendingNow from '../pages/TrendingNow/TrendingNow';
import WhySideChef from '../pages/WhySideChef/WhySideChef';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <TrendingNow></TrendingNow>
            <AllChefs></AllChefs>
            <WhySideChef></WhySideChef>
            <Footer></Footer>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;