import { Rating } from '@smastrom/react-rating';
import React from 'react';

const TrendingNow = () => {
    return (
        <div>
            <div className='ms-28 mt-10 mb-8'>
                <h2 className='text-2xl font-bold text-black mb-1'>Trending Now</h2>
                <h6>Most popular recipes everyone is loving right now.</h6>
            </div>

            <div className='flex justify-center gap-9 container mx-auto px-4 mt-4 mb-16'>

                <div className="card card-compact w-64 shadow-xl">

                    <figure><img src="https://i.ibb.co/6NYfktD/delicious-pizza-concept-wooden-table.jpg" alt="Shoes" /></figure>
                    <Rating className='ms-3 mt-2' style={{ maxWidth: 100 }} readOnly />
                    <div className="card-body">
                        <h2 className="card-title text-2xl font-bold text-black ">Mexican Pizza</h2>
                    </div>
                </div>

                <div className="card card-compact w-64 shadow-xl">

                    <figure><img src="https://i.ibb.co/ydfXh3X/sweet-potato-g136f77b75-1280.jpg" alt="Shoes" /></figure>
                    <Rating className='ms-3 mt-2' style={{ maxWidth: 100 }} readOnly />
                    <div className="card-body">
                        <h2 className="card-title text-2xl font-bold text-black ">Sweet Potato</h2>
                    </div>
                </div>

                <div className="card card-compact w-64 shadow-xl">

                    <figure><img src="https://i.ibb.co/98C8Zr0/mexican-tacos-with-beef-tomato-sauce-salsa.jpg" alt="Shoes" /></figure>
                    <Rating className='ms-3 mt-2' style={{ maxWidth: 100 }} readOnly />
                    <div className="card-body">
                        <h2 className="card-title text-2xl font-bold text-black ">Mexican Tacos</h2>
                    </div>
                </div>

                <div className="card card-compact w-64 shadow-xl">

                    <figure><img src="https://i.ibb.co/tZtQGt2/mexican-meal.jpg" alt="Shoes" /></figure>
                    <Rating className='ms-3 mt-2' style={{ maxWidth: 100 }} readOnly />
                    <div className="card-body">
                        <h2 className="card-title text-2xl font-bold text-black ">Skirt Steak Fajitas</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrendingNow;