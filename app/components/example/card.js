import Image from 'next/image';
import React from 'react';

function card({ name, price, year, cc, km, date, src }) {
  return (
    <>
      <div className="gb-white mx-3 my-3 overflow-hidden rounded-3xl shadow-md ">
        <Image
          className=" w-full"
          src={src}
          width="200"
          height="100"
          alt="card text"
        />
        <div className="p-4 text-center">
          <h2 className="md:text-l text-sm font-bold">{name}</h2>
          <p className=" font-bold text-red-700">
            買取金額<span className="md:text-2xl"> {price}</span> 円
          </p>
          <table class=" w-full table-auto border-collapse rounded-md border-slate-300">
            <tbody>
              <tr>
                <td className="border-collapse border border-slate-300 bg-slate-700 text-white">
                  年式
                </td>
                <td className=" border-collapse border border-slate-300">
                  {year}
                </td>
              </tr>
              <tr>
                <td className=" border-collapse border border-slate-300 bg-slate-700 text-white">
                  排気量
                </td>
                <td className=" border-collapse border border-slate-300 ">
                  {cc}cc
                </td>
              </tr>
              <tr>
                <td className=" border-collapse border border-slate-300 bg-slate-700 text-white">
                  走行距離
                </td>
                <td className=" border-collapse border border-slate-300">
                  {km}km
                </td>
              </tr>
              <tr>
                <td className=" border-collapse border border-slate-300 bg-slate-700 text-white">
                  成約日
                </td>
                <td className=" border-collapse border border-slate-300">
                  {date}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default card;
