import React from 'react';
import { Img } from '../utils/Img';
import { Button } from '@mui/material';
import { useRouter } from 'next/router';
import {Assurance} from "../types";

export const ServicesAssurance: React.FC<Assurance> = (props) => {
  const { image, data,sideImage,title, buttonName,buttonLink } = props;
  const router = useRouter();

  const content = (
    <>
      <div className="max-w-[1377.5px] mx-auto flex items-center justify-between md:pt-[120px]  pt-[80px] pb-[80px] md:pb-[120px]">
        <div className="w-[100%] px-[20px] flex flex-col-reverse md:flex-row text-start items-center justify-center ">
          <div className="w-[85vw] md:w-[50vw] flex flex-col">
            <h1 className="text-[white] text-[23px] md:text-[25px] lg:text-[32px] xl:text-[40px] font-bold ">
              {title}
            </h1>
            <div className="flex flex-col gap-[18px] md:gap-[15px] lg:gap-[20px] pt-[30px] items-start">
              {data.map((item, index: number) => (
                <div
                  key={index}
                  className="flex flex-row items-start gap-[10px] "
                >
                  <Img
                    src={item.icon}
                    className="w-[32px] lg:w-[40px]"
                    alt={'Icon'}
                  />
                  <span className="flex flex-col">
                    <h1 className="text-[16px] md:text-[15px] xl:text-[18px] text-[white] font-semibold">
                      {item.title}
                    </h1>
                    <p className="text-[14px] md:text-[12px] lg:text-[14px] pt-[5px] w-[90%] text-[white] font-normal">
                      {item.subtitle}
                    </p>
                  </span>
                </div>
              ))}
            </div>
            <div className="pt-[20px] lg:pt-[30px]  pl-[40px]">
              <Button
                onClick={() => router.push(buttonLink)}
                className="ButtonTransition overflow-hidden text-[12px]  lg:text-[16px] font-semibold "
                sx={{
                  '&.MuiButtonBase-root': {
                    backgroundColor: '#8184EB',
                    color: 'white',
                    textTransform: 'capitalize',
                    padding: '8px 24px 8px 24px',
                    border: '1px solid #8184EB;',
                    borderRadius: '30px',
                    '&:hover': {
                      border: '1px solid #8184EB',
                      backgroundColor: 'transparent',
                      color: '#8184EB;',
                    },
                  },
                }}
              >
                {buttonName}
              </Button>
            </div>
          </div>
          <div className="w-[100vw] md:w-[50vw] flex justify-center items-center">
            <Img
              src={sideImage}
              className="w-[90%] h-[100%] rounded-[10px]"
              alt={'AssuranceImage'}
            />
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
