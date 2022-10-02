import React from 'react';

import Feature from '../Feature/Feature';

const PriceOption = ({option}) => {
    const {features} = option;
    return (
        <div className='bg-indigo-300 rounded-md p-6'>
            <div>
                <h1 className=''>
                <span className='text-6xl font-bold text-white'>{option.price}</span>
                <span className='text-2xl text-gray-200'>$/month</span>
            </h1>
            <p className='text-2xl font-semibold'>{option.name}</p>
            </div>
            {
                features.map((feature,idx) => <Feature feature={feature}
                key={idx}></Feature>)
            }
            <button className='bg-green-600 w-full py-2 rounded-lg text-white mt-10'>Buy Now</button>
        </div>
    );
};

export default PriceOption;