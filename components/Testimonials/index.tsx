import React from 'react';
import { Button } from '../../utils/Button';
import Carousel from 'react-multi-carousel';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Data from "../../data/common/testimonial.json"
import { Img } from '../../utils/Img';

import {TestimonialInterface} from "../../types";
const ButtonGroup = ({ next, previous, goToSlide, ...rest }: any) => {
  const {
    carouselState: { currentSlide },
  } = rest;
  return (
    <div
      className="carousel-button-group    gap-4 flex justify-between
        items-center w-full absolute bottom-[50%]"
    >
      <button
        className="bg-white text-[#177DF0] md:block hidden w-[50px] h-[50px] boxshad rounded-[50px]"
        onClick={() => previous()}
      >
        {' '}
        <ArrowBackIcon />
      </button>
      <button
        className="bg-white text-[#177DF0]  md:block hidden w-[50px] h-[50px] boxshad rounded-[50px]"
        onClick={() => next()}
      >
        <ArrowForwardIcon />
      </button>
    </div>
  );
};

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};


const Testimonials = () => {
  return (
    <div className="md:px-[100px] px-0 pb-[20px] relative flex flex-col items-center py-[40px] pt-[100px] text-center max-w-[1377.5px] overflow-hidden mx-auto">
      <div className="text-[#E8EDFF]  -z-[30] lg:text-[250px] text-[140px] absolute  font-medium leading-[70%] tracking-[-20px] lg:w-[754px] w-[450px] top-[12.5%] text-start ">
        Testimonials
      </div>
      <Button
        label={Data.bannerData.tagButtonName}
        type="button"
        className="uppercase max-w-[150px] md:px-[10px] py-[4px] bg-[#A1B4F7] text-[white] xxl:leading-[22.99px] tracking-[-0.25px] font-semibold sm:leading-[20.57px] leading-[14px] xxl:w-[238px] md:w-[200px] w-[160px] text-[12px] hover:text-[#A1B4F7]"
      />
        <div>
            <Img src="/images/logo/quote.png" className="w-[50px]  relative md:left-[-355px] left-[-150px]  -z-[10]" alt="arrow"/>

        </div>
      <div className="text-[#151448]  md:text-[40px] text-[20px] font-bold md:leading-[50px] leading-[30px] mt-[-25px] max-w-[803px] tracking-[-1px]">
        {Data.bannerData.title}

      </div>
      <div>
        <Img src="/images/logo/line.png" className="lg:w-[159px] w-[90px] relative sm:left-[167px] left-[90px] " alt="arrow"/>
      </div>
      <div className="w-[85%] my-[30px] relative flex flex-col-reverse text-center">
        <Carousel
          responsive={responsive}
          arrows={false}
          renderButtonGroupOutside={true}
          customButtonGroup={<ButtonGroup />}
        >
          {Data.header.map((data, index: number) => (
            <div
              key={index}
              className="md:w-[70%] w-[90%] h-auto my-[30px] bg-white flex flex-col mx-[auto] rounded-[10px] boxshad border-[black] md:pb-[45px] xl:px-[35px] px-[10px]  overflow-hidden md:pt-[30px] py-[20px]"
            >
              <div className="text-[#042552] md:text-[18px] text-[14px] mt-[13px] font-normal max-w-[642px] md:leading-[26px]">
                &quot; {data.comment} &quot;

              </div>
              <div className="flex md:flex-row flex-col mt-[50px]  justify-center ">
                <div className="flex md:flex-row md:justify-normal md:text-start text-center justify-center items-center flex-col">
                  <img
                    className="w-[55px] h-[55px] rounded-full"
                    src={data.imageUrl}
                    alt={`Image ${index}`}
                  />
                  <div className="flex flex-col md:ml-[18px] mt-[4px] text-start">
                    <div className="text-[16px] font-medium leading-[120%] text-[#151448]">
                      — {data.username}
                    </div>
                    <div className="mt-[5px] text-[14px] font-normal leading-[24px] text-[#757B8A]">
                      {data.designation}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonials;
