import React from 'react'
import MainDiv from './MainDiv'
import Image from 'next/image'

export default function BuiltRealLife() {
  return (
    <MainDiv customClass='flex-col lg:!flex-row !justify-between'>
      <div className='w-full lg:w-[45%] h-full'>
        <h1 className='mb-5 lg:mb-7 text-4xl xl:text-5xl font-semibold text-green-900'>Built for real life</h1>
        <p className='my-5 lg:my-7 text-base lg:text-lg font-medium text-green-900 leading-6'>Cooking shouldn't be complicated.These recipes come in under 30 minutes of active time, fit busy schedule, and taste good enougho repeat.</p>
        <p className='mt-5 lg:mt-7 text-base lg:text-lg font-medium text-green-900 leading-6'>Whether you're new to the kitchen or just need fresh ideas, we've got you covered.</p>
      </div>
      <Image
        src="/images/cooking-4.jpeg"
        alt='cooking'
        width={800}
        height={400}
        className='object-cover rounded-lg'
      />
    </MainDiv>
  )
}
