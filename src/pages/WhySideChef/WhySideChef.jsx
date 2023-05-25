import React from 'react';

const WhySideChef = () => {
    return (
        <div className='mt-12 mb-20'>
            <h6 className='text-center text-black text-2xl font-bold mb-8'>Why Try SideChef?</h6>

            <div className='flex justify-center gap-16'>
                <div>
                    <img className='w-12 ms-20 mb-4' src="https://i.ibb.co/hC4Xwn0/schedule-1.png" alt="" />
                    <h6 className='text-black text-xl font-bold'>Free Meal Planning Tool</h6>
                </div>
                <div>
                    <img className='w-12 ms-20 mb-4' src="https://i.ibb.co/db7tyjq/restaurant-signal.png" alt="" />
                    <h6 className='text-black text-xl font-bold'>Favorite Recipes Saved</h6>
                </div>
                <div>
                    <img className='w-12 ms-20 mb-4' src="https://i.ibb.co/N7tv1dv/calendar.png" alt="" />
                    <h6 className='text-black text-xl font-bold'>Recipe for Every Occasion</h6>
                </div>
                <div>
                    <img className='w-12 ms-20 mb-4' src="https://i.ibb.co/VTJ2dqr/writing-2.png" alt="" />
                    <h6 className='text-black text-xl font-bold'>Take Notes Your Recipes</h6>
                </div>
            </div>
            
        </div>
    );
};

export default WhySideChef;