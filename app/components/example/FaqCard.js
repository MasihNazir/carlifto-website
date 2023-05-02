import React from 'react';

const FaqCard = ({ q = 'question', a = 'ansure' }) => {
  return (
    <div className=" m-4 shadow-[5px_5px_0px_0px_#b91c1c]">
      <div className=" flex items-center bg-slate-100 p-4   font-bold">
        <p className=" pr-4 text-2xl font-bold  text-green-600">Q</p>
        <p>{q}</p>
      </div>
      <div className="flex items-center p-4">
        <p className=" pr-4 text-2xl font-bold  text-red-700">A</p>
        <p>{a}</p>
      </div>
    </div>
  );
};

export default FaqCard;
