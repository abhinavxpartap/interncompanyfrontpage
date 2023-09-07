import { Button } from '@mui/material';
import { Img } from '../../utils/Img';
import React from 'react';
import Slider from 'react-slick';
import pageData from "../../data/expertTeam.json";

const settings = {
  autoplay: true,
  autoplaySpeed: 3000,
  dots: true,
  infinite: true,
  arrows: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};
const Team = () => {
  return (
    <div className="pt-[120px] px-[15px] md:px-[45px] 2xl:px-[40px]   py-[40px] max-w-[1477.5px] mx-auto">
      <div className="w-[100%] h-full flex flex-col lg:flex-row lg:gap-[60px] xl:gap-[80px] items-start">
        <div className="w-[90vw] lg:w-[48vw]">
          <Slider {...settings}>
            {pageData.header.map((image, index: number) => {
              return (
                <div key={index} className="w-[100%]  relative rounded-[10px]">
                  <Img src={image.src} className="w-[100%]" alt={image.alt} />
                  <div
                    className="flex flex-row w-auto max-w-[226px] gap-[10px] bg-[white] rounded-[8px] absolute bottom-[20px] right-[4px] justify-center items-center"
                    style={{
                      padding: '8px 15px 8px 15px',
                      border: '0.5px solid #A1A1A1',
                      boxShadow:
                        '17.14285659790039px 34.28571319580078px 68.57142639160156px 0px rgba(45, 51, 81, 0.12)',
                    }}
                  >
                    <div className="w-[38px]">
                      <Img
                        src={image.icon}
                        className="w-[100%]"
                        alt={'Icon'}
                      />
                    </div>
                    <div>
                      <h1 className="text-[#5B5B5B] font-medium">
                        {image.icontitle},
                      </h1>
                      <p className="text-[#7699FF] text-[16px] font-medium mt-[-3px]">
                        {image.iconsubtitle}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>

        <div className="pt-[50px] md:justify-start md:items-start items-center justify-center flex flex-col  lg:pt-[0px] h-[100%] w-[90vw] lg:w-[40vw]">
          <span
            className="rounded-full uppercase items-center flex justify-center   max-w-[150px] px-[20px] py-[5px] bg-[#A1B4F7] text-[white] xxl:leading-[22.99px]
                tracking-[-0.25px] font-semibold sm:leading-[20.57px] leading-[14px] xxl:w-[238px] md:w-[200px] w-[160px]
                text-[12px]"
          >
            {pageData.bannerData.tagButtonName}
          </span>
          <div className="text-[#151448] text-[24px] md:text-start text-center md:text-[40px]   font-bold leading-[125%] mt-[13px]">
            {pageData.bannerData.title}
          </div>
          <div className="text-[#747C85] pr-[20px] xl:pr-[40px] md:text-start text-center   text-[18px] md:text-[22px] lg:text-[18px] mt-[13px] font-medium  leading-[170%]">
            {pageData.bannerData.subtitle}
          </div>
          <div className="mt-[25px]">
            <Button
              className="ButtonTransition overflow-hidden text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] font-semibold "
              sx={{
                '&.MuiButtonBase-root': {
                  backgroundColor: '#177DF0',
                  color: 'white',
                  textTransform: 'capitalize',
                  padding: '8px 24px 8px 24px',
                  border: '1px solid #5CA9FF',
                  borderRadius: '30px',
                  '&:hover': {
                    border: '1px solid #5CA9FF',
                    backgroundColor: 'transparent',
                    color: '#177DF0',
                  },
                },
              }}
            >
              {pageData.bannerData.buttonName}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Team;
