import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ContactCard = () => {
  return (
    <div className="relative mt-12  rounded-md bg-gradient-to-tr from-red-200 to-red-700 shadow-md md:mx-28 lg:mx-40 xl:mx-72">
      <Image
        className=" absolute "
        src="/callcenter.png"
        alt="Carlifto Callcenter"
        height="200"
        width="200"
      />
      <div className=" text flex flex-col justify-center gap-8 pb-[3rem] pl-44 pt-[3rem] align-middle text-white md:flex-row">
        <div>
          <p>お電話での査定依頼はこちら</p>
          <p className="text-3xl font-bold">0120-997-746</p>
          <p>通話無料 営業時間 8:00 ~ 22:00</p>
        </div>
        <div>
          <p className="mb-8">WEBでの査定依頼はこちら</p>
          <Link
            href="#"
            className=" rounded-full  border border-solid border-white bg-amber-400 px-6 py-3 text-black shadow-lg hover:-translate-y-2 hover:transform"
          >
            今すぐ確認する
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
