import React from 'react';
import { Img } from '../utils/Img';

export const OurProcess: React.FC<any> = (props) => {
  const { image } = props;

  const images = [
    '/m1.svg',
    '/m2.svg',
    '/m3.svg',
    '/m4.svg',
    '/m4.svg',
    '/m4.svg',
    '/m4.svg',
    '/m1.svg',
  ];

  const content = (
    <div className="max-w-[1377.5px] relative  mx-auto">
      <div className="flex pt-[40px] grid md:grid-cols-4 grid-cols-2 justify-between md:flex-row flex-col">
        {images.map((src, index) => (
          <div key={index}>
            <Img src={src} alt="w" className="w-[340px]" />
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
