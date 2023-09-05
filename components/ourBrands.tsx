import React from 'react';
import { Img } from '../utils/Img';
import CompanyImage from "../data/common/OurBrands.json"


export const OurBrands: React.FC<any> = () => {
  const content = (
    <>
      <div className="max-w-[1377.5px] mx-auto flex flex-col items-center justify-between  pt-[30px] pb-[30px]">
        <div className="mb-[30px]">
          <h1 className="capitalize w-[100%] flex flex-col items-center md:flex-row gap-[4px] font-medium text-[#151448] text-[24px]">
            We are trusted by{' '}
            <span className="flex flex-row gap-[4px]">
              <span className="relative text-[#3D6EFC]">
                brands
                <Img
                  src="/Line2.svg"
                  className="w-[78px] mt-[-5px]"
                  alt={'Line'}
                />
              </span>{' '}
              you believe in...
            </span>
          </h1>
        </div>

        <div className="w-full h-full overflow-x-scroll scrollbar scroll whitespace-nowrap scroll-smooth">
          {CompanyImage.map((item: any, index) => (
            <div
              className="w-[120px]  md:w-[200px] bg-white h-[50px] inline-block m-4 cursor-pointer rounded-[10px] "
              style={{
                boxShadow:
                  'rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px',
              }}
            >
              <Img
                src={item.src}
                className="w-[100%] h-[100%] p-[16px] md:p-[15px] flex items-center"
                alt={item.alt}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
  return (
    <>
      <div>{content}</div>
    </>
  );
};
