import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import ContactCard from './ContactCard';

const VehicleTypes = () => {
  return (
    <section className="my-12 w-full">
      <div className="mx-auto max-w-8xl px-4 2xl:px-16" id="wrapper">
        <h2 className="mb-6 text-center text-4xl font-bold text-slate-900 sm:text-5xl">
          故障車・事故車・車検切れ・古い車など
        </h2>
        <p className="mb-7 text-center text-3xl ">
          <span className=" underline decoration-red-700 underline-offset-8">
            原則0円以上で買取!
          </span>
        </p>
        <div className="grid grid-cols-3 gap-2 px-12 py-3 md:grid-cols-6">
          <div className="relative">
            <Image
              className=" rounded-md"
              src="/vehicleTypes/1.jpg"
              width="200"
              height="200"
              alt="vehicle"
            />
            <p className="absolute left-0 top-0 rounded-r-md bg-gradient-to-r from-red-400 to-red-700 p-1 text-xs text-white lg:text-base">
              Truck
            </p>
          </div>
          <div className="relative">
            <Image
              className=" rounded-md"
              src="/vehicleTypes/2.jpg"
              width="200"
              height="200"
              alt="vehicle"
            />
            <p className="absolute left-0 top-0 rounded-r-md bg-gradient-to-r from-red-400 to-red-700 p-1 text-xs text-white lg:text-base">
              Sub merged Car
            </p>
          </div>

          <div className="relative">
            <Image
              className=" rounded-md"
              src="/vehicleTypes/4.jpg"
              width="200"
              height="200"
              alt="vehicle"
            />
            <p className="absolute left-0 top-0 rounded-r-md bg-gradient-to-r from-red-400 to-red-700 p-1  text-xs text-white lg:text-base">
              Inspection Expired
            </p>
          </div>
          <div className="relative">
            <Image
              className=" rounded-md"
              src="/vehicleTypes/5.jpg"
              width="200"
              height="200"
              alt="vehicle"
            />
            <p className="absolute left-0 top-0 rounded-r-md bg-gradient-to-r from-red-400 to-red-700 p-1 text-xs text-white lg:text-base">
              immovable car
            </p>
          </div>
          <div className="relative">
            <Image
              className=" rounded-md"
              src="/vehicleTypes/6.jpg"
              width="200"
              height="200"
              alt="vehicle"
            />
            <p className="absolute left-0 top-0 rounded-r-md bg-gradient-to-r from-red-400 to-red-700 p-1 text-xs text-white lg:text-base">
              Accident Car
            </p>
          </div>
          <div className="relative">
            <Image
              className=" rounded-md"
              src="/vehicleTypes/7.jpg"
              width="200"
              height="200"
              alt="vehicle"
            />
            <p className="absolute left-0 top-0 rounded-r-md bg-gradient-to-r from-red-400 to-red-700 p-1 text-xs text-white lg:text-base">
              Old Car
            </p>
          </div>
        </div>
        <div className="px-12">
          <p>
            カーネクストでは、事故車や故障車、長年乗っていない車など、買取価格が無いと言われる車を0円以上で買取ります。
            キャリフトがレッカー・廃棄費用を全額負担しますので、お客様のご負担はありません。
            場合によっては走行距離10万キロ以上のお車や、10年以上経過したお車でも高値がつくことも!
            査定は無料ですので、お気軽にカーリフトにご相談ください。
          </p>
        </div>
        <ContactCard />
      </div>
    </section>
  );
};

export default VehicleTypes;
