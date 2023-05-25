import React from 'react';
import Header from '../pages/Shared/Header/Header';
import Footer from '../pages/Shared/Footer/Footer';
import NotFound from '../pages/NotFound/NotFound';

const NotFoundLayout = () => {
    return (
        <div>
            <Header></Header>
            <NotFound></NotFound>
            <Footer></Footer>
        </div>
    );
};

export default NotFoundLayout;