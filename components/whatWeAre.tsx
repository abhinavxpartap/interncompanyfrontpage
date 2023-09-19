import React from 'react';
import { Img } from '../utils/Img';
import {WhatWeInterface, WhatWeNewInterface} from "../types";

export const WhatWeAre: React.FC<WhatWeNewInterface> = (props) => {
  const { title1, subtitle1, title2, subtitle2 } = props;

  const content = (
    <>
      <div className="max-w-[1441.5px] pb-[120px] md:px-[100px] mx-auto   ">
        <div>
          <div>
            <Img
              src="/aboutus.svg"
              alt="aboutus"
              className="md:w-[600px] w-[300px] -z-0 relative md:top-[165px] 2xl:left-0 md:left-[-45px] left-[0px]   top-[80px]"
            />
          </div>
          <div>
            <Img
              src="/Line2.svg"
              alt="aboutus"
              className="md:w-[120px] w-[95px] -z-0 relative  left-[0px]   md:top-[70px] top-[55px]"
            />
          </div>
          <div className="flex z-[20] md:flex-row justify-between w-full flex-col">
            <div className="md:text-[50px] z-[20] text-[40px]  font-bold">
              {title1}
            </div>

            <div className="bg-white rounded-[12px] z-[20]  md:mt-0 mt-[10px]   p-[15px] border-2">
              <div className="text-[18px] font-normal  text-[#333] max-w-[550px]">
                {subtitle1}
              </div>
            </div>
          </div>
          <div>
            <Img
              src="/Line2.svg"
              alt="aboutus"
              className="md:w-[120px] w-[90px] -z-0 relative  md:left-[10px] top-[90px]   md:top-[105px]"
            />
          </div>
          <div className="flex md:flex-row justify-between mt-[35px] w-full flex-col">
            <div className="md:text-[50px] z-[20] text-[40px] font-bold">
              {title2}
            </div>
            <div className="bg-white rounded-[12px] z-[20] md:mt-0 mt-[10px]    p-[15px] border-2">
              <div className="text-[18px] font-normal text-[#333] max-w-[550px]">
                {subtitle2}
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
        className="bg-cover bg-center bg-no-repeat relative "
      >
        {content}
      </div>
    </>
  );
};
