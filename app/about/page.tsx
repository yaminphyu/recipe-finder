'use client';

import React from 'react'
import MainDiv from '../components/MainDiv'
import Image from 'next/image'
import comingSoon from '../../public/json/coming-soon.json'
import Lottie from 'lottie-react'
import Link from 'next/link';

export default function About() {
  return (
    <main className="flex flex-col items-center w-full h-full px-3 pb-10 pt-30 lg:py-36">
      <MainDiv>
        <div className='w-full flex flex-col justify-center items-center gap-8'>
          <Lottie
            animationData={comingSoon}
            loop={true}
            className="w-full lg:w-2/3 h-auto"
          />
          <Link href="/" className='text-blue-500 underline mt-4 inline-block text-base lg:text-xl'>Go back to Home</Link>
        </div>
      </MainDiv>
    </main>
  )
}
