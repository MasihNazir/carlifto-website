'use client';
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const CustomLink = ({ href, title, className = '' }) => {
  const pathName = usePathname();
  return (
    <Link
      href={href}
      className={`${className} 
        } group relative ml-6  text-sm hover:text-red-500`}
    >
      <li>{title}</li>
    </Link>
  );
};
const Footer = () => {
  return (
    <section className="w-full bg-red-300 pt-12 text-white">
      <div className="mx-auto  max-w-8xl  px-4  2xl:px-16">
        <div className="grid md:grid-cols-2">
          <div className="grid gap-4">
            <p className="text-6xl">How can we Help you. Get in touch</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
              minima culpa fugit possimus nemo itaque rerum numquam hic sequi
            </p>
            <Image
              src="/logo.png"
              alt="carlifto log"
              width="400"
              height="100"
            />
          </div>
          <div>
            <form>
              <p className="py-4 text-center text-lg">
                Contact for Further Questions
              </p>
              <input
                type="text"
                className="form-control m-0 mb-6 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:border-red-600 focus:bg-white focus:text-gray-700 focus:outline-none"
                placeholder="Name"
              />
              <input
                type="email"
                className="form-control m-0 mb-6 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:border-red-600 focus:bg-white focus:text-gray-700 focus:outline-none"
                placeholder="Email "
              />
              <textarea
                rows="3"
                type="text"
                className="form-control m-0 mb-6 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:border-red-600 focus:bg-white focus:text-gray-700 focus:outline-none"
                placeholder="Message"
              />
              <button
                type="button"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                className="mb-6 inline-block w-full rounded bg-gray-600 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg"
              >
                Send
              </button>
            </form>
          </div>
        </div>
        <hr class="border-gray-600" />
        <div className="my-4 flex  md:justify-center ">
          <ul className="flex flex-col justify-evenly md:flex-row">
            <CustomLink href="/" title="ホーム" />
            <CustomLink href="/services" title="の廃車買取" />
            <CustomLink href="/services/flow" title="廃車買取の流れ" />
            <CustomLink href="/haishazirei" title="廃車買取事例" />
            <CustomLink href="/process" title=" 廃車手続きに必要な書類" />
            <CustomLink href="/assasment" title=" 無料査定" />
          </ul>
        </div>
        <div>
          <hr class="border-gray-600" />
          <p class="w-full py-4 text-center text-gray-600">
            Copyright © 2023 CarLifto
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
