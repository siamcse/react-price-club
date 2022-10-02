import React from 'react';
import PriceOption from '../PriceOption/PriceOption';

const PricingOptions = () => {
    const pricingOptions = [
        {id:1, name:'free',price:0, features:[
            'free feature',
            'good feature',
            'qualitiful feature',
            'heavy feature',
            'metal feature',
            'premium feature',
            'enjoyable feature'
        ]},
        {id:2, name:'medium',price:9.99, features:[
            'medium feature',
            'good feature',
            'qualitiful feature',
            'heavy feature',
            'metal feature',
            'premium feature',
            'enjoyable feature'
        ]},
        {id:3, name:'premium',price:14.99, features:[
            'premium feature',
            'good feature',
            'qualitiful feature',
            'heavy feature',
            'metal feature',
            'premium feature',
            'enjoyable feature'
        ]}
    ]
    return (
        <div>
            <h1 className='text-5xl font-bold bg-indigo-300 p-12 rounded-lg text-white'>Big Deal With Pricing Options</h1>
            <div className='grid md:grid-cols-3 gap-6 mt-12 mx-6'>
                {
                    pricingOptions.map(option => <PriceOption
                    key={option.id}
                    option={option}></PriceOption>)
                }
            </div>
        </div>
    );
};

export default PricingOptions;