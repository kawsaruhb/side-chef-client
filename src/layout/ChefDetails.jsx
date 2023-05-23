import React from 'react';
import Footer from '../pages/Shared/Footer/Footer';
import Header from '../pages/Shared/Header/Header';
import ChefInfo from '../pages/ChefInfo/ChefInfo/ChefInfo';
import { useLoaderData } from 'react-router-dom';

const ChefDetails = () => {
    const data = useLoaderData();
    
    return (
        <div>
            <Header></Header>
            <ChefInfo data={data}></ChefInfo>
            <Footer></Footer>
        </div>
    );
};

export default ChefDetails;