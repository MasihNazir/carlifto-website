import React from 'react';
import ContactCard from './ContactCard';

const WhyUs = () => {
  return (
    <section className="w-full bg-slate-100 py-12">
      <div className="mx-auto max-w-8xl px-4 2xl:px-16" id="wrapper">
        <h2 className="mb-6 text-center text-4xl font-bold text-slate-900 sm:text-5xl">
          廃車買取カーネクストが選ばれる理由
        </h2>
        <p className="mb-7 text-center">
          廃車買取カーネクストが選ばれる3つの理由をご紹介いたします。
        </p>

        <div className="relative mb-8 bg-white px-8 shadow-[5px_5px_0px_0px_#b91c1c] ">
          <p className=" text-bold absolute left-0 top-2 rounded-r-md bg-gradient-to-r from-red-400 to-red-700 p-3 text-white">
            選ばれる理由{' '}
            <span className="text-2xl font-bold text-slate-700">1</span>
          </p>
          <div className=" pb-3 pt-20">
            <h2 className="pb-3 text-xl font-bold text-red-700">
              どんな車も原則0円以上買取！
            </h2>
            <p>
              カーネクストでは、中古車として販売できない車でもパーツや鉄資源としてリサイクルできる販路を持っているため、年式が古い車や走行距離が長い車、事故車、不動車、水没車など、どんな状態の車も0円以上で買い取ることができます。
            </p>
          </div>
        </div>

        <div className="relative mb-8 bg-white px-8 shadow-[5px_5px_0px_0px_#b91c1c] ">
          <p className=" text-bold absolute left-0 top-2 rounded-r-md bg-gradient-to-r from-red-400 to-red-700 p-3 text-white">
            選ばれる理由{' '}
            <span className="text-2xl font-bold text-slate-700">2</span>
          </p>
          <div className=" pb-3 pt-20">
            <h2 className="pb-3 text-xl font-bold text-red-700">
              どんな車も原則0円以上買取！
            </h2>
            <p>
              カーネクストでは、中古車として販売できない車でもパーツや鉄資源としてリサイクルできる販路を持っているため、年式が古い車や走行距離が長い車、事故車、不動車、水没車など、どんな状態の車も0円以上で買い取ることができます。
            </p>
          </div>
        </div>

        <div className="relative mb-8  bg-white px-8 shadow-[5px_5px_0px_0px_#b91c1c] ">
          <p className=" text-bold absolute left-0 top-2 rounded-r-md bg-gradient-to-r from-red-400 to-red-700 p-3 text-white">
            選ばれる理由{' '}
            <span className="text-2xl font-bold text-slate-700">3</span>
          </p>
          <div className=" pb-3 pt-20">
            <h2 className="pb-3 text-xl font-bold text-red-700">
              どんな車も原則0円以上買取！
            </h2>
            <p>
              カーネクストでは、中古車として販売できない車でもパーツや鉄資源としてリサイクルできる販路を持っているため、年式が古い車や走行距離が長い車、事故車、不動車、水没車など、どんな状態の車も0円以上で買い取ることができます。
            </p>
          </div>
        </div>
        <ContactCard />
      </div>
    </section>
  );
};

export default WhyUs;
