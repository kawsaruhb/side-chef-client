import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        // ------------------------------ Navbar ----------------------------------- // 
        <div>
            <div className="container mx-auto navbar bg-base-100 flex justify-between">
                <div>
                    <Link to='/' className="btn btn-ghost normal-case text-black text-3xl font-bold">SideChef</Link>
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

            
        </div>
    );
};

export default Header;