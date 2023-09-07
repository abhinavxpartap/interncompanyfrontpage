import React from 'react';
import { Header } from './Common/Header';
import {AboutUsBannerInterface} from "../types";


export const AboutUsBanner: React.FC<AboutUsBannerInterface> = (props) => {
  const { image, mobileImage, title, subtitle } = props;

  const content = (
    <>
      <div className="max-w-[1377.5px] mx-auto flex flex-col justify-center items-center md:pt-[200px] xl:pt-[233px] 2xl:py-[295px] xl:pb-[233px] pt-[117px] md:pb-[200px] pb-[150px]  sm:px-[70px]  xl:px-[40px] 2xl:px-[20px] px-[16px]">
        <Header />
        <div className=" font-bold fade-in 2xl:text-[60px]  md:text-[55px] text-[30px] text-[white] justify-center text-center max-w-[750px] 2xl:max-w-[800px] md:leading-[65px]">
          {title}
        </div>
        <p className="font-medium pt-[15px] text-[18px] 2xl:text-[20px]  fad-in justify-center text-center text-[white] 2xl:max-w-[580px]  max-w-[500px]">
          {subtitle}
        </p>
      </div>
    </>
  );
  return (
    <>
      <div
        style={{ backgroundImage: `url(${image})` }}
        className="bg-cover bg-center bg-no-repeat relative  md:block hidden"
      >
        {content}
      </div>
      <div
        style={{ backgroundImage: `url(${mobileImage})` }}
        className="bg-cover bg-center bg-no-repeat relative md:pb-[248px] md:hidden block"
      >
        {content}
      </div>
    </>
  );
};
