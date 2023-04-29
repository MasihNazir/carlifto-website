import React from 'react';

function SellNotice() {
  return (
    <section className="min-w-sm my-12  mb-8 block w-full bg-white">
      <div className="mx-auto  max-w-8xl align-middle shadow-md">
        <div className=" mx-4 h-[50px] rounded bg-red-500 bg-bg-img bg-contain bg-right bg-no-repeat px-4 2xl:px-16">
          <h1 className="pt-2 text-2xl text-white">
            Important Notice Regarding Scrapped Vehicles
          </h1>
        </div>
        <div className="mx-4 px-4 py-4 2xl:px-16">
          <p className="text-lg ">
            <span className="font-bold text-red-600">11 months worth </span>
            <span className="text-lg font-bold">
              of automobile tax will be refunded
            </span>{' '}
            if the vehicle is scrapped in April . If you pick up your car by
            April 20th (Thursday ) , you will be able to complete the scrapping
            procedure in April, so if you are thinking about scrapping, please
            apply as soon as possible.
          </p>
        </div>
      </div>
    </section>
  );
}

export default SellNotice;
