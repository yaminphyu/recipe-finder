'use clinet'

import React from 'react'
import MainDiv from './MainDiv'
import Button from './Button'

export default function ReadyToCook() {
  return (
    <MainDiv customClass='mt-12 lg:mt-22'>
      <div className='w-full p-4 flex flex-col justify-center items-center rounded-lg bg-[#e5f4e3]'>
        <h1 className='text-4xl text-green-900 font-semibold text-center mb-2 lg:mt-10'>Ready to cook smarter?</h1>
        <p className='text-lg text-green-900 font-medium text-center my-2'>Hit the button, pick a recipe, and get dinner on the table--fast.</p>
        <Button
          ariaLabel="Browse Recipes"
          label="Browse Recipes"
          customClass='!w-42 text-center !mt-2 lg:!mb-10'
        />
      </div>
    </MainDiv>
  )
}
