import React from 'react';
import { Img } from '../utils/Img';
import {PizzaHutInfo} from "../types";

export const AboutPortfolio: React.FC<PizzaHutInfo> = (props) => {
  const { title, subtitle, content, industry, businessType, services, images } =
    props;

  const imageElements = images.map((imageUrl: string, index: number) => (
    <div key={index}>
      <Img src={imageUrl} alt={`Image ${index}`} className="w-[340px]" />
    </div>
  ));

  const contentElement = (
    <div className="max-w-[1377.5px] relative top-[-25px] mx-auto">
      <div className="w-[92%]  px-[20px] pt-[10px] pb-[20px] mx-auto flex flex-col bg-white rounded-[15px] boxshad">
        <div className="flex md:flex-row md:gap-[80px] flex-col">
          <div className="max-w-[650px]">
            <h1 className="text-[30px] font-semibold">{title}</h1>
            <p className="text-[15px] mt-[8px] text-[#757B8A] font-normal">
              {subtitle}
            </p>
            <p className="text-[15px] mt-[8px] leading-[25px] text-[#757B8A] font-normal">
              {content}
            </p>
          </div>
          <div className="mt-[50px]">
            <div className="flex md:gap-[120px] flex-row">
              <div>
                <h1 className="text-[16px] font-medium text-[#757B8A]">
                  Industry
                </h1>
                <p className="text-[14px] mt-[7px] font-normal text-[#8184EB]">
                  {industry}
                </p>
              </div>
              <div className="md:ml-0 ml-[40px]">
                <h1 className="text-[16px] font-medium text-[#757B8A]">
                  Business Type
                </h1>
                <p className="text-[14px] mt-[7px] font-normal ">
                  {businessType}
                </p>
              </div>
            </div>
            <div className="text-[16px] mt-[15px] font-medium text-[#757B8A]">
              Services
            </div>
            <div className="text-[16px] mt-[7px] font-normal ">{services}</div>
          </div>
        </div>
      </div>
      <div className="md:flex grid grid-cols-2 mt-[40px] justify-between md:flex-row ">
        {imageElements}
      </div>
    </div>
  );

  return (
    <div
      style={{ background: '#F9FBFF' }}
      className="bg-cover bg-center bg-no-repeat relative block"
    >
      {contentElement}
    </div>
  );
};
