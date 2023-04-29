import FlowShort from './components/FlowShort';
import HeadSection from './components/HeadSection';
import ProductCarsel from './components/ProductCarsel';

import SellNotice from './components/SellNotice';
import VehicleTypes from './components/VehicleTypes';

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
      <div className="block">
        <h1>carLifto 合同会社</h1>
      </div>
    </>
  );
}
