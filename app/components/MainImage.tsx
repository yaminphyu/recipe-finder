import React from 'react'
import MainDiv from './MainDiv'
import Image from 'next/image'

export default function MainImage() {
  return (
    <MainDiv>
      <div className="relative border-6 md:border-8 xl:border-10 border-white bg-white rounded-3xl overflow-hidden">
        <Image
          src="/images/cooking-3.jpg"
          alt="Recipe Finder Logo"
          width={1100}
          height={1100}
          className="object-cover rounded-2xl"
        />
      </div>
    </MainDiv>
  )
}
