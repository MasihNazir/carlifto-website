'use client';
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Card from '../components/example/card';
import Link from 'next/link';
import { IoMdArrowDropright } from 'react-icons/io';

const ProductCarsel = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 2,
    },
  };
  return (
    <section className="my-12 w-full">
      <div className="mx-auto max-w-8xl px-4 2xl:px-16">
        <h2 className="mb-6 text-center text-4xl font-bold text-slate-900 sm:text-5xl">
          廃車買取実績
        </h2>
        <p className="mb-7 text-center">
          廃車買取カーネクストで買い取らせていただいたお車の詳細情報を掲載しております。
        </p>
        <Carousel
          responsive={responsive}
          ssr
          showDots={false}
          slidesToSlide={1}
          infinite
          autoPlay={true}
          containerClass="container-with-dots"
          itemClass="image-item"
          deviceType={''}
          autoPlaySpeed={1000}
        >
          <Card
            name="プジョー 308 ﾌﾟﾚﾐｱﾑ"
            price="150,000"
            year="2011"
            cc="1,600"
            km="20,000"
            date="2023-03-13"
            src="/exampleV/3.jpg"
          />
          <Card
            name="Mercedes Benz"
            price="550,000"
            year="2016"
            cc="1500"
            km="46,000"
            date="2023-02-18"
            src="/exampleV/6.jpg"
          />
          <Card
            name="トヨタ ヴィッツ ベースグレード"
            price="120,000"
            year="2009"
            cc="1300"
            km="76,000"
            date="2023-04-01"
            src="/exampleV/01.jpg"
          />
          <Card
            name="BMW 230i"
            price="130,000"
            year="2004"
            cc="2200"
            km="115,000"
            date="2021-10-21"
            src="/exampleV/4.jpg"
          />
          <Card
            name="Mercedes Benz c200"
            price="2,000,000"
            year="2018"
            cc="1500"
            km="25,000"
            date="2023-04-21"
            src="/exampleV/5.jpg"
          />
          <Card
            name="dyna truck"
            price="350,000"
            year="2006"
            cc="3,000"
            km="250,000"
            date="2023-01-12"
            src="/exampleV/7.jpg"
          />
        </Carousel>
      </div>
      <div className="my-12 flex justify-center align-middle">
        <Link
          className="text-bold transition-colors:background-color text-md justify-center border border-solid  border-red-700 from-red-400 to-red-700 px-8 py-2 duration-300 ease-in-out hover:bg-gradient-to-r hover:text-white md:px-48 "
          href="/services/flow"
        >
          <IoMdArrowDropright className="inline" size={25} /> 詳しくはこちら
        </Link>
      </div>
    </section>
  );
};

export default ProductCarsel;
