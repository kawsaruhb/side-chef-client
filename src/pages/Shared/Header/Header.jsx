import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../provider/AuthProvider';

const Header = () => {

    const { user,logout } = useContext(AuthContext);

    const handleLogout = () =>{
        logout()
        .then()
        .catch(error => console.log(error))
    }

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
                    {
                        user && <div className="w-12 me-2">
                            <img className='rounded-full' src="https://i.pravatar.cc/350" />
                        </div>
                    }

                    {user ?
                        <button onClick={handleLogout} className="btn btn-active bg-white text-black font-bold px-6 py-0 rounded-full">Sign Out</button> :
                        <Link to='/login'>
                            <button className="btn btn-active bg-white text-black font-bold px-6 py-0 rounded-full">Sign In</button>
                        </Link>
                    }
                    { !user ?
                        <Link to='/register'><button className="btn btn-active rounded-full font-bold mx-6 px-6 py-0">Sign Up</button></Link> : <h6></h6>
                    }
                </div>
            </div>

            {/* --------------------------- Banner --------------------------------- */}


        </div>
    );
};

export default Header;