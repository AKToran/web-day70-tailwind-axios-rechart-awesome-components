import { CircleCheckBig } from 'lucide-react';
import React from 'react';

const PricingData = ({pricing}) => {
  const {price, name, description, features} = pricing;
  return (
    <div className='border-2 border-orange-400  font-bold rounded-2xl p-6 bg-amber-200 shadow-xl'>
      <div className='space-y-2 text-center'>
        <h1 className='text-4xl'>{name}</h1>
        <h2 className='text-2xl pb-2'>{price}</h2>
      </div>

      <div className='bg-yellow-300  rounded-2xl p-4'>
        <p className='text-lg'>{description}</p>
        <div className="p-2">
          {
            features.map((feature, index) => 
            <div key={index} className='grid grid-cols-[30px_1fr] py-2'> <CircleCheckBig className= ' text-amber-950'></CircleCheckBig> <p>{feature}</p> </div>)
          }
        </div>
      </div>
      <div className='text-center pt-4'>
        <button className='btn w-full bg-green-800 rounded-2xl text-xl py-6 text-white'>Subscribe</button>
      </div>
    </div>
  );
};

export default PricingData;