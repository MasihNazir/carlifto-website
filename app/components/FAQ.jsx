import React from 'react';
import FaqCard from './example/FaqCard';
import Link from 'next/link';
import { IoMdArrowDropright } from 'react-icons/io';

const FAQ = () => {
  return (
    <>
      <section className="my-12 w-full">
        <div className="mx-auto  max-w-8xl  px-4  2xl:px-16">
          <h2 className="mb-6 text-center text-4xl font-bold text-slate-900 sm:text-5xl">
            廃車買取カーネクストをご利用いただいたお客様の声
          </h2>
          <p className="mb-7 text-center">
            廃車買取カーネクストでは、廃車が初めてのお客様や買取をご希望のお客様、引取をお急ぎのお客様など、様々なご状況のお客様から廃車のご依頼をいただいております。こちらでは、廃車買取カーネクストをご利用いただいたお客様の声をご紹介いたします。
          </p>

          <div className="">
            <FaqCard
              q="他店で費用がかかると言われた車でも無料で廃車できますか？"
              a="カーネクストではお車の引取から廃車手続きまで、廃車にかかる費用をお客様に負担していただくことはございません。事故車や不動車など、レッカー車が必要なお車も無料で引き取らせていただくため、安心してご利用いただけます。"
            />
            <FaqCard
              q="車の引取が可能な地域はどこですか？"
              a="カーネクストでは、日本全国（一部離島を除く）のお車の引取に対応しております。レッカー車が必要なお車の場合も全国対応しておりますので、お気軽にカーネクストまでお問い合わせください。"
            />
            <FaqCard
              q="廃車手続きに必要な書類は何ですか？"
              a="廃車手続きに必要な書類は、お客様のご状況によって異なります。詳しくは、廃車の必要書類をご参照ください。カーネクストでは、お客様のご状況をお伺いした上で必要な書類をご案内させていただきます。ご不明な点などございましたら、お気軽にご相談ください。"
            />
            <FaqCard
              q="他店で費用がかかると言われた車でも無料で廃車できますか？"
              a="カーネクストではお車の引取から廃車手続きまで、廃車にかかる費用をお客様に負担していただくことはございません。事故車や不動車など、レッカー車が必要なお車も無料で引き取らせていただくため、安心してご利用いただけます。"
            />
          </div>
        </div>
        <div className=" m-4 flex justify-center align-middle">
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

export default FAQ;
