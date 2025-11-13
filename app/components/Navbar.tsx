'use client';

import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation';
import { MENU_LIST } from '../constant';
import Button from './Button';
import clsx from 'clsx';
import { useState } from 'react';

const Logo = () => {
  const router = useRouter();

  const handleLogoClick = () => router.push('/');

  return (
    <div
      onClick={handleLogoClick}
      className="flex items-center gap-2 cursor-pointer"
    >
      <Image src="/images/burger.png" alt="Recipe Finder Logo" width={45} height={45} />
      <p className="text-lg xl:text-xl font-bold text-green-900">Recipe Finder</p>
    </div>
  );
};

interface MenuProps {
  isSideBar?: boolean;
  onClose?: () => void; // callback to close sidebar
}

const Menu = ({
  isSideBar = false,
  onClose
}: MenuProps) => {
  const pathname = usePathname();

  return (
    <ul
      className={
        clsx(
          'text-md font-semibold text-green-800',
          {
            'flex flex-col items-start gap-5': isSideBar,
            'hidden md:flex items-center gap-8': !isSideBar
          }
        )
      }
    >
      {MENU_LIST?.map(({ url, name }: any, index: number) => {
        const href = url === 'home' ? '/' : `/${url}`;
        const isActive = pathname === href;

        return (
          <li
            key={index}
            className={
              clsx({
                'underline decoration-amber-500 decoration-2 underline-offset-4': isActive,
                'hover:text-green-700 transition-colors': true,
              })
            }
          >
            <Link
              href={href}
              onClick={() => {
                if (isSideBar && onClose) onClose();
              }}
            >{name}</Link>
          </li>
        );
      })}
    </ul>
  );
};

interface Sidebar {
  isOpen: boolean,
  handleSidebar: () => void
}

const Sidebar = ({
  isOpen,
  handleSidebar
}: Sidebar) => {
  return (
    <>
      <div
        className={`fixed inset-0 backdrop-blur-xs bg-opacity-50 transition-opacity duration-500 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      ></div>
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-500 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4">
          <div className='flex justify-end pb-5'>
            <Button
              ariaLabel="Toggle menu"
              customClass='flex md:hidden !p-2 !bg-gray-300 rounded'
              onClick={handleSidebar}
            >
              <FontAwesomeIcon icon={faXmark} className="text-green-900 text-2xl" />
            </Button>
          </div>
          <Menu
            isSideBar={true}
            onClose={handleSidebar}
          />
        </div>
      </div>
    </>
  );
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleSidebar = () => setIsOpen(!isOpen);

  return (
    <header className="w-full h-20 border-2 border-gray-200 shadow-md flex justify-center items-center px-6 py-2 fixed bg-[#ededed] z-50">
      <div className="w-full lg:w-[80vw] flex justify-between items-center">
        <Logo />
        <Menu />
        <div className='relative'>
          <Button
            ariaLabel="Browse Recipes"
            label="Browse Recipes"
            customClass="hidden md:flex"
          />
          <Button
            ariaLabel="Toggle menu"
            customClass='flex md:hidden !p-2 !bg-gray-300 rounded'
            onClick={handleSidebar}
          >
            <FontAwesomeIcon icon={faBars} className="text-green-900 text-2xl" />
          </Button>
          <Sidebar
            isOpen={isOpen}
            handleSidebar={handleSidebar}
          />
        </div>
      </div>
    </header>
  )
}
