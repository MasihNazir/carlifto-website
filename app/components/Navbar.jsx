'use client';
import Link from 'next/link';
import { RiCustomerService2Line } from 'react-icons/ri';
import { AiOutlineMenu, AiOutlineClose, AiOutlineHome } from 'react-icons/ai';
import { BiPurchaseTag } from 'react-icons/bi';

import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

// navigation Menue items function
const CustomLink = ({ href, title, className = '' }) => {
  const pathName = usePathname();
  return (
    <Link
      href={href}
      className={`${className} 
      } group relative ml-10 text-sm hover:text-red-500`}
    >
      <li>{title}</li>
      <span
        className={`ease absolute -bottom-7 left-0 inline-block h-1 rounded-full 
        bg-red-500 transition-[width] duration-300 group-hover:w-full
        ${pathName === href ? 'w-full' : 'w-0'}
        `}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const hadleNav = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav className="fixed h-20 w-full bg-white bg-opacity-20 shadow-xl backdrop-blur-lg ">
        <div className="flex h-full items-center justify-between px-4 2xl:px-16">
          <Link href="/">
            <Image src="logo.svg" width={200} height={60} alt="Carlifto Logo" />
          </Link>
          <div className="hidden text-gray-500  md:flex">
            <ul className="hidden sm:flex">
              <CustomLink href="/" title="ホーム" />
              <CustomLink href="/services" title="の廃車買取" />
              <CustomLink href="/services/flow" title="廃車買取の流れ" />
              <CustomLink href="/haishazirei" title="廃車買取事例" />
              <CustomLink href="/process" title=" 廃車手続きに必要な書類" />
              <CustomLink href="/assasment" title=" 無料査定" />
            </ul>
          </div>
          <div onClick={hadleNav} className="cursor-pointer pl-24 md:hidden">
            {menuOpen == true ? (
              <AiOutlineClose size={25} />
            ) : (
              <AiOutlineMenu size={25} />
            )}
          </div>
        </div>
        <div
          className={
            menuOpen
              ? 'fixed left-1/2 top-20  h-screen  w-[65%] -translate-x-1/2 rounded bg-white bg-opacity-50 p-10 backdrop-blur-lg duration-500 ease-in md:hidden '
              : 'fixed -left-[100%] top-20 p-10 duration-500 ease-out'
          }
        >
          <ul className="text-lg">
            <Link href="/" className="ml-10 text-lg">
              <li
                onClick={() => setMenuOpen(false)}
                className="align-center flex"
              >
                <AiOutlineHome className="inline" size={25} />
                <span className="pl-2">ホーム</span>
              </li>
            </Link>
            <Link href="/services" className="ml-10  uppercase hover:border-b">
              <li onClick={() => setMenuOpen(false)} className="">
                <BiPurchaseTag className="inline" size={25} />
                <span className="pl-2">の廃車買取 </span>
              </li>
            </Link>
            <Link
              href="/services/flow"
              className="ml-10  uppercase hover:border-b"
            >
              <li onClick={() => setMenuOpen(false)} className="">
                <span className="pl-2"> 廃車買取の流れ </span>
              </li>
            </Link>
            <Link
              href="/haishazirei"
              className="ml-10  uppercase hover:border-b"
            >
              <li onClick={() => setMenuOpen(false)} className="">
                <span className="pl-2">廃車買取事例</span>
              </li>
            </Link>
            <Link href="/process" className="ml-10  uppercase hover:border-b">
              <li onClick={() => setMenuOpen(false)} className="">
                <span className="pl-2">廃車手続きに必要な書類</span>
              </li>
            </Link>
            <Link href="/assasment" className="ml-10  uppercase hover:border-b">
              <li onClick={() => setMenuOpen(false)} className="">
                <span className="pl-2"> 無料査定</span>
              </li>
            </Link>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
