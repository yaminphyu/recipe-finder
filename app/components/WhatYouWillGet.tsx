import React from 'react'
import MainDiv from './MainDiv'
import { WHAT_YOU_GET_LIST } from '../constant'
import Image from 'next/image'

export default function WhatYouWillGet() {
  return (
    <MainDiv customClass='my-6 md:my-12 xl:my-14'>
      <h1 className="text-4xl xl:text-5xl text-green-900 font-semibold">What you'll get</h1>
      <div className="flex flex-col lg:flex-row w-full xl:mt-7 gap-5 xl:gap-0">
        {
          WHAT_YOU_GET_LIST?.map((get, index) => {
            return (
              <div
                className="flex flex-col gap-2 xl:gap-4 py-4 px-2 w-full xl:w-1/3"
                key={index}
              >
                <Image
                  src={get['image']}
                  alt="Bento"
                  width={50}
                  height={70}
                  className="object-cover"
                />
                <h1 className="font-seibold text-2xl xl:text-3xl text-green-900">{get['title']}</h1>
                <span className="text-green-900 text-base xl:text-lg font-extralight">{get['subTitle']}</span>
              </div>
            )
          })
        }
      </div>
    </MainDiv>
  )
}
