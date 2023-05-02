import FAQ from './components/FAQ';
import FlowShort from './components/FlowShort';
import Footer from './components/Footer';
import HeadSection from './components/HeadSection';
import ProductCarsel from './components/ProductCarsel';
import SellNotice from './components/SellNotice';
import Testemonial from './components/Testemonial';
import VehicleTypes from './components/VehicleTypes';
import WhyUs from './components/WhyUs';

export default function Home() {
  return (
    <>
      <HeadSection />
      <hr className="mx-auto w-1/2 bg-black" />
      <SellNotice />
      <FlowShort />
      <hr className="mx-auto w-1/2 bg-black" />
      <VehicleTypes />
      <hr className="mx-auto w-1/2 bg-black" />
      <ProductCarsel />
      <hr className="mx-auto w-1/2 bg-black" />
      <WhyUs />
      <hr className="mx-auto w-1/2 bg-black" />
      <Testemonial />
      <hr className="mx-auto w-1/2 bg-black" />
      <FAQ />
      <hr className="mx-auto w-1/2 bg-black" />
      <Footer />
    </>
  );
}
