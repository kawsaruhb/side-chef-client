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
                    <Link className='mx-6 p-4 font-bold text-black'>Recipes</Link>
                    <Link className='p-4 font-bold text-black'>Explore More</Link>
                </div>
                <div>
                    <button className="btn btn-active rounded-full font-bold mx-6 px-6 py-0">Sign Up</button>
                    <button className="btn btn-active bg-white text-black font-bold px-6 py-0 rounded-full">Sign In</button>
                </div>
            </div>

            {/* --------------------------- Banner --------------------------------- */}

            <div class="relative">
                <img src={banner} alt="" />
                <div class="absolute bottom-40 px-20 py-3">
                    <p className='text-white w-40 rounded mb-4 text-sm font-semibold text-center bg-[#A53d02]'>WEEKLY INSPIRATION</p>
                    <h1 class="text-[#A53d02] font-bold text-5xl"> Fire Up the Grill: Unleash <br /> Your Inner BBQ Chef </h1>
                    <p class="text-white w-64 rounded-full mt-8 p-3 font-semibold text-center bg-[#A53d02]">Best BBQ Recipes</p>
                </div>
            </div>
        </div>
    );
};

export default Header;