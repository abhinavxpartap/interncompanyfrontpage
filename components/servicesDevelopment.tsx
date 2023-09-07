import React from 'react';
import { Img } from '../utils/Img';
import { Button } from '@mui/material';
import { useRouter } from 'next/router';
import { DevelopmentDataInterface} from "../types";

export const ServicesDevelopment: React.FC<DevelopmentDataInterface> = (props) => {
  const { title, subtitle, leftData, rightData, centerContent,buttonName,buttonLink} = props;
  const router = useRouter();

  const content = (
    <>
      <div className="max-w-[1377.5px] mx-auto flex items-center justify-between md:pt-[80px]  pt-[30px] pb-[30px] md:pb-[80px]">
        <div className="w-[100%] flex flex-col text-center items-center justify-center ">
          <h1 className="text-[#151448] font-bold text-[19px] leading-[25px] sm:text-[20px] sm:leading-[30px] md:text-[30px] md:leading-[40px] w-[300px] sm:w-[350px] md:w-[500px] ">
            {title}
          </h1>
          <p className="text-[#333333] font-normal w-[90%] text-[13px] sm:text-[12px] md:text-[14px] pt-[10px] ">
            {subtitle}
          </p>
          <div
            className=" w-[85%] md:w-[90%] flex flex-col  md:flex-row mt-[40px] bg-white  rounded-[10px]"
            style={{
              boxShadow:
                'rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px',
            }}
          >
            <div className="w-[100%]  md:w-[18vw] pl-[20px] md:pl-[30px] py-[25px] lg:py-[40px] xl:py-[50px] flex flex-col gap-[15px] lg:gap-[18px] xl:gap-[25px] justify-start bg-[#D8EEFF] rounded-t-[10px]  md:rounded-l-[10px] ">
              {leftData.map((item , index: number) => (
                <div className="flex flex-row  gap-[10px] items-center" key={index}>
                  <Img
                    src={item.image}
                    className="w-[25px] lg:w-[25px] xl:w-[30px]"
                    alt={item.title}
                  />
                  <h1 className="lg:text-[16px]  xl:text-[18px] font-normal text-[4B5A69] cursor-pointer active:text-[#177DF0] hover:text-[#177DF0]">
                    {item.title}
                  </h1>
                </div>
              ))}
            </div>
            <div className="w-[100%] md:w-[55vw] flex justify-start text-start px-[20px] text-[16px] leading-[30px] text-[#757B8A] lg:text-[13px] lg:leading-[26px] xl:text-[14px] font-normal xl:leading-[32px] py-[30px] xl:py-[60px] lg:py-[50px] ">
              {centerContent}
            </div>
            <div className="w-[100%] md:w-[18vw] pl-[20px] md:pl-[30px] py-[25px] lg:py-[40px] xl:py-[50px] flex flex-col gap-[15px] lg:gap-[18px] xl:gap-[25px] justify-start bg-[#D8EEFF] rounded-b-[10px] md:rounded-r-[10px] ">
              {rightData.map((item, index: number) => (
                  <div className="flex flex-row gap-[10px] items-center" key={index}>
                    <Img
                        src={item.image}
                        className="w-[25px] lg:w-[25px] xl:w-[30px]"
                        alt={item.title}
                    />
                    <h1 className="lg:text-[16px] xl:text-[18px] font-normal text-[4B5A69] cursor-pointer active:text-[#177DF0] hover:text-[#177DF0]">
                      {item.title}
                    </h1>
                  </div>
              ))}
            </div>

          </div>
          <div className="flex justify-center items-ceter pt-[30px]">
            <Button
              onClick={() => router.push(buttonLink)}
              className="ButtonTransition overflow-hidden text-[14px] md:text-[16px] font-semibold "
              sx={{
                '&.MuiButtonBase-root': {
                  backgroundColor: '#8184EB',
                  color: 'white',
                  textTransform: 'capitalize',
                  padding: '8px 24px 8px 24px',
                  border: '1px solid #8184EB',
                  borderRadius: '30px',
                  '&:hover': {
                    border: '1px solid #8184EB',
                    backgroundColor: 'transparent',
                    color: '#8184EB',
                  },
                },
              }}
            >
              {buttonName}
            </Button>
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
