import React from 'react';
import { Img } from '../utils/Img';
import { Button } from '@mui/material';
import { useRouter } from 'next/router';
import {Estimation} from "../types";

export const IndustriesEstimation: React.FC<Estimation> = (props) => {
  const { image, title, subtitle, data, buttonName,buttonHref } = props;
  const router = useRouter();

  const content = (
    <>
      <div className="max-w-[1377.5px] mx-auto flex items-center justify-between md:pt-[60px]  mt-[40px] pt-[30px] pb-[30px] md:pb-[0px]">
        <div className="w-[100%]  px-[20px] md:px-[60px] flex flex-col text-start items-start justify-start ">
          <div className="w-[100%] md:w-[625px] mb-[35px]">
            <h1 className="text-white font-bold md:leading-[52px] leading-[38px] text-[31px] md:text-[42px]">
              {title}
            </h1>
            <p className="text-white font-normal pt-[10px] md:pt-[20px] text-[15px] md:text-[20px]">
              {subtitle}
            </p>
            <div className="mt-[20px]  flex flex-col gap-[10px] md:gap-[15px]">
              {data.map((item, index: number) => (
                <div
                  key={index}
                  className="flex flex-row gap-[12px] md:gap-[20px] items-center"
                >
                  <Img
                    src="/bullet.svg"
                    className=" w-[10px] md:w-[10px]"
                    alt={'BulletIcon'}
                  />
                  <p className=" text-[14px] md:text-[16px] text-white font-normal">
                    {item.content}
                  </p>
                </div>
              ))}
              <div>
                <Button
                  onClick={() => router.push(buttonHref)}
                  className="ButtonTransition overflow-hidden text-[14px] md:text-[16px] mt-[15px] md:mt-[20px] font-semibold "
                  sx={{
                    '&.MuiButtonBase-root': {
                      backgroundColor: 'transparent',
                      color: 'white',
                      textTransform: 'capitalize',
                      padding: '8px 24px 8px 24px',
                      border: '1px solid white',
                      borderRadius: '10px',
                      '&:hover': {
                        border: '1px solid white',
                        backgroundColor: 'transparent',
                        color: 'white',
                      },
                    },
                  }}
                >
                  {buttonName}
                </Button>
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
        style={{ backgroundImage: `url(${image})` }}
        className="bg-cover bg-center bg-no-repeat relative  block"
      >
        {content}
      </div>
    </>
  );
};
