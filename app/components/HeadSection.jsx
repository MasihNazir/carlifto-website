import Image from 'next/image';
import React from 'react';
import { AiFillLock } from 'react-icons/ai';
import { IoMdCall } from 'react-icons/io';

const HeadSection = () => {
  return (
    <section className="min-w-sm mt-12 block w-full bg-white">
      {/* grid container */}
      <div className="mx-auto grid max-w-8xl content-center items-center px-4 py-[4rem] md:grid-cols-7 2xl:px-16">
        {/* grid first item  */}
        <div className="justify-self-center md:col-span-4 md:pt-0">
          {/* <h1 className="mb-12 text-2xl font-bold tracking-tight md:text-3xl xl:text-6xl">
              we aim to purchase your car smoothly & <br />
              <span className="text-red-600">for the highest price</span>
            </h1> */}

          <Image
            src="/heroImage.png"
            width="600"
            height="600"
            alt="Hero image"
          />

          <div className="pl-4 md:pl-[4rem]">
            <p className="animate-bounce text-3xl font-black ">
              <span>
                <IoMdCall className="inline " />
              </span>
              070-4497-1928
            </p>
          </div>
        </div>
        <div className="justify-center md:col-span-3">
          <div className=" relative mt-10">
            {/* form start */}
            <p className="absolute -top-[3rem] right-0 mx-auto my-3 w-min rotate-12 whitespace-nowrap rounded-full border bg-gradient-to-r from-red-400 to-red-700 p-5 text-center text-xl text-white">
              Easy Free Assasment
            </p>
            <div className="rounded-lg bg-white px-6 py-12 shadow-lg md:px-12">
              <form>
                <p className=" text-lg">Vehicle information</p>
                <div className="grid md:grid-cols-2 md:gap-6">
                  <div className="mb-6">
                    <input
                      type="text"
                      className="form-control m-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:border-red-600 focus:bg-white focus:text-gray-700 focus:outline-none"
                      placeholder="Vehicle Make"
                    />
                  </div>
                  <div className="mb-6">
                    <input
                      type="text"
                      className="form-control m-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:border-red-600 focus:bg-white focus:text-gray-700 focus:outline-none"
                      placeholder="Vehicle Model"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 md:gap-6">
                  <div className="mb-6">
                    <input
                      type="number"
                      className="form-control m-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:border-red-600 focus:bg-white focus:text-gray-700 focus:outline-none"
                      placeholder="year"
                    />
                  </div>
                  <div className="mb-6">
                    <input
                      type="text"
                      className="form-control m-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:border-red-600 focus:bg-white focus:text-gray-700 focus:outline-none"
                      placeholder="Milage"
                    />
                  </div>
                </div>
                <p className=" text-lg">Customor information</p>
                <input
                  type="text"
                  className="form-control m-0 mb-6 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:border-red-600 focus:bg-white focus:text-gray-700 focus:outline-none"
                  placeholder="Name"
                />
                <input
                  type="tel"
                  className="form-control m-0 mb-6 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:border-red-600 focus:bg-white focus:text-gray-700 focus:outline-none"
                  placeholder="Telephone Number "
                />
                <input
                  type="text"
                  className="form-control m-0 mb-6 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:border-red-600 focus:bg-white focus:text-gray-700 focus:outline-none"
                  placeholder="Perfecture"
                />
                <button
                  type="button"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                  className="mb-6 inline-block w-full rounded bg-gray-600 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg"
                >
                  SubMit
                </button>
              </form>

              <div>
                <p className="text-xs font-bold">
                  <span>
                    <AiFillLock
                      className="inline-block text-red-600"
                      size={16}
                    />
                    SSL暗号化通信
                  </span>
                </p>
                <p className="text-xs">
                  当サイトではプライバシー保護のため、「SSL暗号化通信」を実現しています。お客様の情報が一般に公開されることは一切ございませんので、ご安心ください。
                </p>
              </div>
            </div>

            {/* form end */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeadSection;
