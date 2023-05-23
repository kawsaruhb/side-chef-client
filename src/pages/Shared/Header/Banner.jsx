import React from 'react';
import banner from '../../../assets/banner.jpg'

const Banner = () => {
    return (
        <div>
            <div className="relative">
                <img src={banner} alt="" />
                <div className="absolute bottom-20 px-20 ">
                    <p className='text-white w-40 rounded mb-4 text-sm font-semibold text-center bg-[#A53d02]'>WEEKLY INSPIRATION</p>
                    <h1 className="text-[#A53d02] font-bold text-5xl"> Fire Up the Grill: Unleash <br /> Your Inner BBQ Chef </h1>
                    <p className="text-white w-60 rounded-full mt-8 p-3 font-semibold text-center bg-[#A53d02]">Best BBQ Recipes</p>
                    <p className="text-white w-72 rounded-full mt-4 p-3 font-semibold text-center bg-[#A53d02]">Most Popular Recipes</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;