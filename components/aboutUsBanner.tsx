import React, {useEffect, useState} from 'react';
import { Header } from './Common/Header';
import {AboutUsBannerInterface} from "../types";

export const AboutUsBanner: React.FC<AboutUsBannerInterface> = (props) => {
  const { image, title, subtitle,fix } = props;
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentTitle, setCurrentTitle] = useState(title[0]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % title.length);
        }, 2000);

        return () => {
            clearInterval(interval);
        };
    }, [title]);
    useEffect(() => {
        setCurrentTitle(title[currentIndex]);
    }, [currentIndex, title]);



    const content = (
    <>
      <div className="max-w-[1377.5px] mx-auto flex flex-col justify-center items-center md:pt-[200px] xl:pt-[233px] xl:pb-[233px] pt-[157px] md:pb-[200px] pb-[200px]  sm:px-[70px]  xl:px-[40px] 2xl:px-[20px] px-[16px]">
        <Header />
          <div className=" font-bold   fade-in md:text-[55px] text-[30px] text-[white] justify-center text-center max-w-[1020px] md:leading-[65px]">
              {fix}
          </div>
        <div className=" font-bold fade-in  fade-in-title md:text-[55px] text-[30px] text-[white] justify-center text-center max-w-[1020px] md:leading-[65px]">
          {currentTitle}
        </div>
        <p className="font-medium pt-[15px] text-[18px] justify-center text-center text-[white]  max-w-[550px]">
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
          style={{ backgroundImage: `url(${image})` }}
        className="bg-cover bg-center bg-no-repeat relative md:pb-[248px] md:hidden block"
      >
        {content}
      </div>
    </>
  );
};





