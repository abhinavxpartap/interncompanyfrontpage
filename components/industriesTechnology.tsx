import React from 'react';
import { Img } from '../utils/Img';
import {WebApplicationDevelopmentProcess} from "../types";

export const IndustriesTechnology: React.FC<WebApplicationDevelopmentProcess> = (props) => {
  const { title, subtitle, data } = props;

  const content = (
    <>
      <div className="max-w-[1377.5px] mx-auto flex flex-col items-center justify-center md:pt-[70px]  pt-[60px] md:pb-[0px] pb-[80px] ">
        <div className="w-[100%] md:w-[85%] mb-[40px] md:mb-[80px]">
          <h1 className="text-[#151448] px-[20px] md:px-0 text-center text-[25px] leading-[30px] md:text-[30px] md:leading-[40px] lg:leading-[42px] lg:text-[40px] font-bold">
            {title}
          </h1>
          <p className="text-[#4B5A69] text-center text-[13px] md:text-[14px] lg:text-[18px] pt-[10px] md:pt-[20px] font-normal px-[20px] md:px-[40px] lg:px-[90px]">
            {subtitle}
          </p>
        </div>
        <div className="flex items-center w-[100%] justify-center ">
          <div className="flex w-[100%] px-[20px] md:px-0 md:w-[70%] justify-center gap-[30px] items-center flex-col">
            {data.map((item, index: number) => (
              <div
                key={index}
                className="flex flex-row items-start justify-center gap-[20px] md:gap-[30px]"
              >
                <Img
                  src={item.image}
                  className=" w-[28px] md:w-[35px]"
                  alt={'Icon'}
                />
                <div className="flex flex-col gap-[10px] mt-[-5px] w-[90%]">
                  <h1 className="text-[#151448] text-[21px] md:text-[30px] font-semibold">
                    {item.title}
                  </h1>
                  <p className="text-[#4B5A69] text-[14px] md:text-[18px] font-normal">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
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
