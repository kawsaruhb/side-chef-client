import React from 'react';
import { Link } from 'react-router-dom';
import banner from '../../../assets/banner.jpg'

const Header = () => {
    return (
        // ------------------------------ Navbar ----------------------------------- // 
        <div>
            <div className="container mx-auto navbar bg-base-100 flex justify-between">
                <div>
                    <a className="btn btn-ghost normal-case text-black text-3xl font-bold">SideChef</a>
                    <Link to='/' className='mx-2 p-3 font-bold text-black'>Home</Link>
                    <Link className='mx-2 p-3 font-bold text-black'>Recipes</Link>
                    <Link className='mx-2 p-3 font-bold text-black'>Blog</Link>
                    <Link className='mx-2 p-3 font-bold text-black'>Explore More</Link>
                </div>
                <div>
                    <button className="btn btn-active rounded-full font-bold mx-6 px-6 py-0">Sign Up</button>
                    <button className="btn btn-active bg-white text-black font-bold px-6 py-0 rounded-full">Sign In</button>
                </div>
            </div>

            {/* --------------------------- Banner --------------------------------- */}

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

export default Header;