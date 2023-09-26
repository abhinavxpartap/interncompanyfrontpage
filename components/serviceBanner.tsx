import React from 'react';
import { Button } from '@mui/material';
import { useRouter } from 'next/router';
import { Header } from './Common/Header';
import {ServiceBannerInterface} from "../types";

export const ServiceBanner: React.FC<ServiceBannerInterface> = (props) => {
  const { image, buttonName,buttonLink, title,  subtitle } = props;
  const router = useRouter();

  const content = (
    <>
      <Header />
      <div className="max-w-[1377.5px] mx-auto flex flex-col justify-center md:pt-[220px] xl:pt-[233px] 2xl:pb-[295px] xl:pb-[233px] pt-[117px] pb-[117px] md:pb-[200px]  sm:px-[70px]  xl:px-[40px] 2xl:px-[20px] px-[16px]">
        <h1 className="text-white font-bold fade-in mx-auto md:mx-0 text-[25px] text-center md:text-start w-[80%] sm:text-[30px] sm:leading-[40px]  md:text-[35px] md:leading-[45px] lg:text-[46px] lg:leading-[65px] max-w-[740px]">
          {title}
        </h1>
        <p className="font-medium pt-[5px] fade-in md:pt-[15px] mx-auto md:mx-0 w-[90%] text-center md:text-start md:w-[450px] text-[14px] sm:text-[14px] md:text-[16px] lg:text-[18px] text-white lg:w-[550px]">
          {subtitle}
        </p>
        <div className="flex pt-[15px] md:pt-[20px] justify-center items-center md:justify-start">
          <Button
            onClick={() => router.push(buttonLink)}
            className="ButtonTransition  "
            sx={{
              '&.MuiButtonBase-root': {
                backgroundColor: '#8184EB',
                color: 'white',
                  overflow: 'hidden',
                  fontSize: {
                      xs: '12px',
                      sm: '12px',
                      md: '14px',
                      lg: '16px',
                  },
                  fontWeight: 'bold',
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
              <a href="https://calendly.com/sahillshrm/30min" target="_blank" rel="noopener noreferrer">
                  {buttonName}
              </a>
          </Button>
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
