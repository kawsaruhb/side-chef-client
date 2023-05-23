import React from 'react';
import { FaThumbsUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ChefsCard = ({ chefs }) => {
    const { _id, name, chef_img, experience, nOf_recipes, likes } = chefs;

    return (
        <div>
            <div className="card w-96 p-4 glass bg-red-100">
                <figure><img className='w-full h-80 rounded-lg' src={chef_img} alt="car!" /></figure>
                <div className="mt-2">
                    <h2 className="card-title text-black font-bold text-2xl">{name}</h2>
                    <p className='text-lg text-black mt-1'>Experience: {experience}</p>
                    <p className='text-lg text-black mt-1'>Recipes: {nOf_recipes}</p>
                    <p className='flex gap-2 text-black text-lg mt-1'> <FaThumbsUp className='mt-1 mx-1 text-blue-500' /> {likes}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/chef-detail/${_id}`}><button className="btn btn-primary bg-[#A53d02] border-none w-50">Recipes</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChefsCard;