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

            <div className='flex justify-between'>
                <div className="card w-80 shadow-xl mt-6 bg-red-50">
                    <figure className="px-8 pt-8">
                        <img src={recipe1.recipe_img} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body ">
                        <h2 className="card-title text-black text-2xl font-bold">{recipe1.recipe_name}</h2>
                        <h6 className='text-black text-'><span className='font-semibold'>Ingredients: </span>{recipe1.ingredients}</h6>
                        <h6 className='text-black text-'><span className='font-semibold'>Method: </span>{recipe1.method}</h6>

                        <div className='flex justify-between'>
                            <Rating style={{ maxWidth: 100 }} value={recipe1.rating.number} readOnly />
                            <button onClick={handleClick} disabled={isDisabled} className="btn bg-pink-500 btn-xs w-16 border-none ms-20">
                                Fav
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                            </button>
                            <ToastContainer></ToastContainer>
                        </div>
                    </div>
                </div>

                {/* --------------------------- 2 ---------------------------- */}

                <div className="card w-80 shadow-xl mt-6 bg-red-50">
                    <figure className="px-8 pt-8">
                        <img src={recipe2.recipe_img} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body ">
                        <h2 className="card-title text-black text-2xl font-bold">{recipe2.recipe_name}</h2>
                        <h6 className='text-black text-'><span className='font-semibold'>Ingredients: </span>{recipe2.ingredients}</h6>
                        <h6 className='text-black text-'><span className='font-semibold'>Method: </span>{recipe2.method}</h6>

                        <div className='flex justify-between'>
                            <Rating style={{ maxWidth: 100 }} value={recipe2.rating.number} readOnly />
                            <button onClick={handleClick} disabled={isDisabled} className="btn bg-pink-500 btn-xs w-16 border-none ms-20">
                                Fav
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                            </button>
                            <ToastContainer></ToastContainer>
                        </div>
                    </div>
                </div>

                {/* ------------------------- 3 ---------------------------- */}

                <div className="card w-80 shadow-xl mt-6 bg-red-50">
                    <figure className="px-8 pt-8">
                        <img src={recipe3.recipe_img} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body ">
                        <h2 className="card-title text-black text-2xl font-bold">{recipe3.recipe_name}</h2>
                        <h6 className='text-black text-'><span className='font-semibold'>Ingredients: </span>{recipe3.ingredients}</h6>
                        <h6 className='text-black text-'><span className='font-semibold'>Method: </span>{recipe3.method}</h6>

                        <div className='flex justify-between'>
                            <Rating style={{ maxWidth: 100 }} value={recipe3.rating.number} readOnly />
                            <button onClick={handleClick} disabled={isDisabled} className="btn bg-pink-500 btn-xs w-16 border-none ms-20">
                                Fav
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                            </button>
                            <ToastContainer></ToastContainer>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ChefInfo;