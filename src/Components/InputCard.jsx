/* eslint-disable react/prop-types */
import React from 'react';

export default function InputList(props) {
  const { allInputs } = props;
  //   console.log('allInputs', allInputs);
  return (
    <div className='flex flex-col gap-10 '>
      {allInputs?.map((item) => (
        <div className='flex flex-col text-5xl gap-5 border-2' key={item.id}>
          <div className='flex'>
            {' '}
            {item.label}: <input type={item.type === 'text' ? 'text' : 'number'}></input>
          </div>
        </div>
      ))}{' '}
    </div>
  );
}
