import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
  return (
    <footer className="w-full h-20 flex justify-center items-center px-6 bg-[#ededed]">
      <div className="w-full lg:w-[80vw] xl:w-[65vw] flex justify-between items-center">
        <p className='text-base text-green-900'>Made with love</p>
        <div className='flex gap-2'>
          <Link
            href={'https://www.instagram.com'}
            target='_blank'
          >
            <FontAwesomeIcon icon={faInstagram} className='text-xl lg:text-2xl text-green-900' />
          </Link>
          <Link
            href={'https://www.facebook.com'}
            target='_blank'
          >
            <FontAwesomeIcon icon={faFacebook} className='text-xl lg:text-2xl text-green-900' />
          </Link>
        </div>
      </div>
    </footer>
  )
}
