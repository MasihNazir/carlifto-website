import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { IoMdArrowDropright } from 'react-icons/io';

const FlowShort = () => {
  return (
    <>
      <hr className="mx-auto w-1/2 bg-black" />
      <section className="my-12 w-full">
        <div className="mx-auto max-w-8xl px-4 2xl:px-16" id="wrapper">
          <h2 className="mb-6 text-center text-4xl font-bold text-slate-900 sm:text-5xl">
            廃車買取の流れ
          </h2>
          <p>
            廃車買取カーネクストでは、お客様に手間なくご利用いただけるよう、4つのステップで廃車買取を行っております。また、お申し込みからお車の引取、廃車手続きまで、廃車にかかる費用をお客様にご負担していただくことはございません。
          </p>

          <div className=" mx-auto my-12 grid list-none grid-cols-2 items-center gap-8 md:grid-cols-4">
            <div className="gb-white relative flex flex-col items-center overflow-hidden rounded-3xl shadow-md ">
              <p className=" text-bold absolute left-0 top-7 rounded-r-md bg-gradient-to-r from-red-400 to-red-700 p-3 text-white">
                Step 1
              </p>
              <Image
                className="mb-6 w-full"
                src="/flowImages/call.jpg"
                width="300"
                height="100"
                alt="card text"
              />
              <div className=" p-4">
                <p className="text-md text-center font-bold">無料査定</p>
                <p>お問い合わせフォームまたはお電話にて無料査定。</p>
              </div>
            </div>
            <div className="gb-white relative flex flex-col items-center overflow-hidden rounded-3xl shadow-md ">
              <p className=" text-bold absolute left-0 top-7 rounded-r-md bg-gradient-to-r from-red-400 to-red-700 p-3 text-white">
                Step 2
              </p>
              <Image
                className="mb-6 w-full"
                src="/flowImages/step-2.jpg"
                width="300"
                height="100"
                alt="card text"
              />
              <div className=" p-4">
                <p className="text-md text-center font-bold">お車の引取</p>
                <p>お客様のご指定の場所までお車の引取にお伺い。</p>
              </div>
            </div>
            <div className="gb-white relative flex flex-col items-center overflow-hidden rounded-3xl shadow-md ">
              <p className=" text-bold absolute left-0 top-7 rounded-r-md bg-gradient-to-r from-red-400 to-red-700 p-3 text-white">
                Step 3
              </p>
              <Image
                className="mb-6 w-full"
                src="/flowImages/step-3.jpg"
                width="300"
                height="100"
                alt="card text"
              />
              <div className=" p-4">
                <p className="text-md text-center font-bold">手続き代行</p>
                <p>お客様から必要書類をお預かりし、廃車手続きを代行。</p>
              </div>
            </div>
            <div className="gb-white relative flex flex-col items-center overflow-hidden rounded-3xl shadow-md ">
              <p className=" text-bold absolute left-0 top-7 rounded-r-md bg-gradient-to-r from-red-400 to-red-700 p-3 text-white">
                Step 4
              </p>
              <Image
                className="mb-6 w-full"
                src="/flowImages/step-4.jpg"
                width="300"
                height="100"
                alt="card text"
              />
              <div className=" p-4">
                <p className="text-md text-center font-bold">お振込み</p>
                <p>引取完了後、原則1週間から2週間程度で買取代金をお振込み。</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center align-middle">
          <Link
            className="text-bold transition-colors:background-color text-md justify-center border border-solid  border-red-700 from-red-400 to-red-700 px-8 py-2 duration-300 ease-in-out hover:bg-gradient-to-r hover:text-white md:px-48 "
            href="/services/flow"
          >
            <IoMdArrowDropright className="inline" size={25} /> 詳しくはこちら
          </Link>
        </div>
      </section>
    </>
  );
};

export default FlowShort;
