import React from 'react';
import { Img } from '../utils/Img';
import {TeamData} from "../types";
import Team from "../data/team.json"

export const Meetour = () => {

  const content = (
      <div className="max-w-[1477.5px]   mx-auto">
        <div className="flex md:flex-row justify-between w-auto flex-col">
          <div className="md:px-[50px]">
            <div className="text-[40px] md:text-start text-center font-bold">
                {Team.bannerData.title}
            </div>
            <div className="text-[18px] md:text-start text-center font-normal text-[#4B5A69] max-w-[495px]">
                {Team.bannerData.subtitle}
            </div>
          </div>
          <div>
            <Img src="/outTeam.svg" alt="" className="md:w-auto w-[20px]" />
          </div>
        </div>
        <div className="flex justify-center items-center w-[100%]">
          <div className="grid lg:grid-cols-4  sm:grid-cols-3 grid-cols-2 gap-[40px]   mx-auto">
            {Team.header.map((item:TeamData, index:number) => (
                <div
                    key={index}
                    className="bg-white shad5 rounded-[10px] mt-[45px] md:w-[265px] w-[170px] justify-center items-center md:p-[20px] md:h-[300px] h-[200px]"
                >
                  <div>
                    <Img
                        src={item.imageSrc}
                        alt={item.name}
                        className="md:w-auto w-[160px] h-[190px] rounded-[12px] md:ml-0 ml-[4px]"
                    />
                  </div>
                  <div className="text-center text-[18px] mt-[15px] font-semibold">
                    {item.name}
                  </div>
                  <div className="text-center text-[14px] mt-[5px] text-[#999999] font-normal">
                    {item.role}
                  </div>
                </div>
            ))}
          </div>
        </div>
      </div>
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
