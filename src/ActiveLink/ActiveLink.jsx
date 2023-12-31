import React from 'react';
import { NavLink } from 'react-router-dom';

const ActiveLink = ({ to, children }) => {
    return (
        <NavLink
            to={to}
            className={({ isActive }) => isActive ?  "mx-2 p-3 font-bold text-[#A53d02]" : "mx-2 p-3 font-bold text-black"}          
        >
            {children}
            
        </NavLink>
    );
};

export default ActiveLink;