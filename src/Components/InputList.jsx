/* eslint-disable react/prop-types */
import React from 'react';
import InputCard from './InputCard';
export default function InputList({ allInputs }) {
  return (
    <div className='flex'>
      <InputCard allInputs={allInputs} />
    </div>
  );
}
