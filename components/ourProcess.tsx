import React from 'react';
import { Img } from '../utils/Img';
import imagePort from'../data/portfolio.json'
export const OurProcess = () => {

  const content = (
    <div className="max-w-[1377.5px] py-[100px] relative  mx-auto">
      <div className=" pt-[40px] grid md:grid-cols-4 mb-[50px] grid-cols-2 gap-y-[60px]  md:flex-row flex-col">
        {imagePort.imagePort.map((src, index) => (
          <div key={index}>
            <Img src={src} alt="w" className="w-auto h-auto" />
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div
      style={{ background: '#F9FBFF' }}
      className="bg-cover bg-center bg-no-repeat relative block"
    >
      {content}
    </div>
  );
};
