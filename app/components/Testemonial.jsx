import React from 'react';
import TestmonialCard from './example/TestmonialCard';

const Testemonial = () => {
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
          <div className="grid gap-6 md:grid-cols-2">
            <TestmonialCard
              person="の20代男性"
              locatoin="埼玉県上尾市"
              reason="事故をしたため"
              message="Dealing with broken car in Japan is too expensive, I decied to sell my broken car, i found carlifto auto trading and i sild my car with a peace of mind and very good price"
              gender="male"
            />
            <TestmonialCard
              person="の50代女性"
              locatoin="千葉県千葉市"
              reason="事故をしたため"
              message="carlifto auto trading i found more experiance staff and good services"
              gender="female"
            />
            <TestmonialCard
              person="の50代女性"
              locatoin="鹿児島県鹿児島市"
              reason="乗り換えを予定しているため"
              message="thank you carlifto team for your price and service"
              gender="female"
            />
            <TestmonialCard
              person="の40代男性"
              locatoin="福岡県田川市"
              reason="乗り換えを予定しているため"
              message="i can say that i found carlifto auto trading very good among my experiance with other auto trading "
              gender="female"
            />
            <TestmonialCard
              person="の40代男性"
              locatoin="東京都江戸川区"
              reason="事故をしたため"
              message="thank you very much for your kind response and easy to understand explnation i highly recomend it to any who is thinking about disposing of thier car"
              gender="male"
            />
            <TestmonialCard
              person="の40代男性"
              locatoin="高知県高知市"
              reason="事故をしたため"
              message="i decided to scrap my and as a result of having it assessed at various places this one was the most expensive purchase and also the response was very good they take car of every thing"
              gender="male"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Testemonial;
