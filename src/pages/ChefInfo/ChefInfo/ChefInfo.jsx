import React, { useEffect, useState } from 'react';
import { FaThumbsUp } from 'react-icons/fa';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ChefInfo = ({ data }) => {

    const { _id, name, chef_img, bio, experience, nOf_recipes, likes, recipe1, recipe2, recipe3 } = data;

    const [isDisabled, setIsDisabled] = useState(false);

    const handleClick = () => {
        toast('Your favorite recipe added!');
        setIsDisabled(true);
    };

    return (

        // ---------------------------------------- Info Banner ------------------------------------ //

        <div className='container mx-auto px-4'>
            <div className="card card-side shadow-xl p-8 mt-6 bg-pink-50">
                <img className='w-2/5 rounded-lg' src={chef_img} alt="Movie" />
                <div className="card-body">
                    <h5 className='text-black text-2xl font-bold'>Tasty easy recipes</h5>
                    <h2 className="card-title text-black text-4xl font-bold">{name}</h2>
                    <h6 className='text-black text-lg'>{bio}</h6>
                    <h6 className='text-black text-lg'><span className='font-semibold'>Experience: </span>{experience}</h6>
                    <h6 className='text-black text-lg'><span className='font-semibold'>My Recipes: </span>{nOf_recipes}</h6>
                    <p className='flex gap-2 text-black text-lg mt-1'> <FaThumbsUp className='mt-1 mx-1 text-blue-500' /> {likes}</p>
                </div>
            </div>

            {/*------------------------------------------ recipes -----------------------------------------*/}

            

        </div>
    );
};

export default ChefInfo;