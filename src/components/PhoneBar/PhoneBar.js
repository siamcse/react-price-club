import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Bar, BarChart, XAxis, YAxis } from 'recharts';

const PhoneBar = () => {
    const [phones, setPhones] = useState([]);
    useEffect(()=>{
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(data => {
            const phonesLoaded = data.data.data;
            const phondeData = phonesLoaded.map(phone =>{
                const parts = phone.slug.split('-');
                const price = parseInt(parts[1]);
                const singlePhone = {
                    name: phone.phone_name,
                    price: price,
                }
                return singlePhone;
            });
            setPhones(phondeData);
        })
    },[])
    console.log(phones);
    return (
        <div>
            <BarChart width={500} height={300} data={phones}>
                <Bar dataKey="price" stroke="#8884d2" />
                <XAxis dataKey='name'></XAxis>
                <YAxis dataKey='price'></YAxis>
            </BarChart>
        </div>
    );
};

export default PhoneBar;