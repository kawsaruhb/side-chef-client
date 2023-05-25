import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ChefsCard from './ChefsCard';

const AllChefs = () => {
    const [allChefs, setAllChefs] = useState();
    useEffect(() => {
        fetch('http://localhost:5000/chefs')
            .then(res => res.json())
            .then(data => setAllChefs(data))
    }, [])

    return (
        <div>
            <h5 className='font-bold text-2xl text-center text-black mt-8 mb-3'>Meet Our Creators</h5>
            <p className='text-center text-lg text-black'>Meet our community of culinary experts, food bloggers to masterchefs from across the globe.</p>
            <div className='grid grid-cols-3 gap-4 justify-items-center ms-8 mt-2 p-8 container'>
                {
                    allChefs?.map(chefs => <ChefsCard
                        key={chefs._id}
                        chefs={chefs}
                    ></ChefsCard>)
                }
            </div>
        </div>
    );
};

export default AllChefs;