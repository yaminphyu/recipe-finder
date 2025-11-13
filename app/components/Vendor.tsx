import React from 'react'
import MainDiv from './MainDiv'
import Button from './Button'

export default function Vendor() {
  return (
    <MainDiv customClass='mb-4 md:mb-12 xl:mb-14 mt-24 lg:mt-32'>
      <h1 className="text-5xl md:text-6xl font-bold text-green-950">Healthy meals, zero fuss</h1>
      <div className="hidden xl:flex text-green-800 font-medium flex-col items-center text-lg">
        Discover eight quick, whole food recipes that you can cook tonight
        <span>__no processed junk, no guesswork.</span>
      </div>
      <div className="flex xl:hidden text-green-800 font-medium flex-col items-center text-base md:text-xl">
        Discover eight quick, whole food recipes that you can cook tonight __no processed junk, no guesswork.
      </div>
      <Button
        ariaLabel="Start Exploring"
        label="Start exploring"
        customClass="flex !bg-green-950 !border-green-950 hover:!bg-green-900 hover:!border-green-900 my-4 text-base xl:text-lg"
      />
    </MainDiv>
  )
}
