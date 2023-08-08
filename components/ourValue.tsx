import React from 'react';
import { Button } from '@mui/material';
import { Img } from '../utils/Img';
import { OurValues } from '../types';
export const OurValue: React.FC<OurValues> = (props) => {
  const { items } = props;
  const content = (
    <>
      <div className="max-w-[1377.5px] px-[5px]  py-[100px] md:p-[100px] mx-auto   ">
        <div>
          <div className="flex gap-[12px]  flex-row">
            <div className="text-[28px] font-bold text-[#CFD3D7]">
              {items[0].number}
            </div>
            <div>
              <div className="md:text-[26px] text-[20px] font-bold ">
                {items[0].title}
              </div>
              <div className="text-[18px] mt-[8px] font-normal text-[#77808B] max-w-[460px] ">
                {items[0].subtitle}
              </div>
            </div>
          </div>
          <div className="flex mt-[70px]  flex-row">
            <div>
              <Img
                src="/ourvalue1.svg"
                alt="m"
                className="w-auto md:block hidden"
              />
            </div>
            <div className="md:ml-[90px]">
              <div className="flex gap-[12px]  flex-row">
                <div className="text-[28px] font-bold text-[#CFD3D7]">
                  {items[1].number}
                </div>
                <div>
                  <div className="md:text-[26px] text-[20px] font-bold ">
                    {items[1].title}
                  </div>
                  <div className="text-[18px] mt-[8px] font-normal text-[#77808B] max-w-[460px] ">
                    {items[1].subtitle}
                  </div>
                </div>
              </div>
              <div className="flex gap-[12px] mt-[80px]  flex-row">
                <div className="text-[28px] font-bold text-[#CFD3D7]">
                  {items[2].number}
                </div>
                <div>
                  <div className="md:text-[26px] text-[20px] font-bold ">
                    {items[2].title}
                  </div>
                  <div className="text-[18px] mt-[8px] font-normal text-[#77808B] max-w-[460px] ">
                    {items[2].subtitle}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-[12px] mt-[80px]  flex-row">
            <div className="text-[28px] font-bold text-[#CFD3D7]">
              {items[3].number}
            </div>
            <div>
              <div className="md:text-[26px] text-[20px] font-bold ">
                {items[3].title}
              </div>
              <div className="text-[18px] mt-[8px] font-normal text-[#77808B] max-w-[460px] ">
                {items[3].subtitle}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
  return (
    <>
      <div
        style={{ background: '#F9FBFF' }}
        className="bg-cover bg-center bg-no-repeat relative  "
      >
        {content}
      </div>
    </>
  );
};
