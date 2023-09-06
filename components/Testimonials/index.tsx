import React from 'react';
import { Button } from '../../utils/Button';
import Carousel from 'react-multi-carousel';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Data from "../../data/common/testimonial.json"
import {TestimonialInterface} from "../../types";
const ButtonGroup = ({ next, previous, goToSlide, ...rest }: any) => {
  const {
    carouselState: { currentSlide },
  } = rest;
  return (
    <div
      className="carousel-button-group mb-4  gap-4 flex justify-between
        items-center w-full absolute bottom-[50%]"
    >
      <button
        className="bg-white text-[#177DF0] w-[50px] h-[50px] boxshad rounded-[50px]"
        onClick={() => previous()}
      >
        {' '}
        <ArrowBackIcon />
      </button>
      <button
        className="bg-white text-[#177DF0] w-[50px] h-[50px] boxshad rounded-[50px]"
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
    <div className="md:px-[100px] pb-[100px] relative flex flex-col items-center py-[40px] pt-[160px] text-center max-w-[1377.5px] overflow-hidden mx-auto">
      <div className="text-[#E4F0FF] -z-[1] text-[250px] absolute right-[85%] font-medium leading-[70%] tracking-[-20px] w-[754px] top-[12.5%] text-right ">
        Testimonials
      </div>
      <Button
        label={'TESTIMONIALS'}
        type="button"
        // onClick={() => router.push("/getStarted")}
        className="max-w-[150px] md:px-[10px] py-[4px] bg-[#A1B4F7] text-[white] xxl:leading-[22.99px] tracking-[-0.25px] font-semibold sm:leading-[20.57px] leading-[14px] xxl:w-[238px] md:w-[200px] w-[160px] text-[12px] hover:text-[#A1B4F7]"
      />
      <div className="text-[#151448] md:text-[40px] text-[20px] font-bold leading-[53%] mt-[15px] max-w-[553px] tracking-[-1px]">
        What our clients say about us
      </div>
      <div className="w-[85%] my-[30px] relative flex flex-col-reverse text-center">
        <Carousel
          responsive={responsive}
          arrows={false}
          renderButtonGroupOutside={true}
          customButtonGroup={<ButtonGroup />}
        >
          {Data.map((data: TestimonialInterface, index: number) => (
            <div
              key={index}
              className="w-[70%] h-auto my-[30px] bg-white flex flex-col mx-[auto] rounded-[10px] boxshad border-[black] xl:px-[55px] px-[10px]  overflow-hidden md:py-[50px] py-[20px]"
            >
              <div className="text-[#042552] md:text-[18px] text-[14px] mt-[13px] font-normal max-w-[642px] md:leading-[26px]">
                {data.comment}
              </div>
              <div className="flex md:flex-row flex-col mt-[50px] align-center justify-between ">
                <div className="flex md:flex-row md:justify-normal md:text-start text-center justify-center items-center flex-col">
                  <img
                    className="w-[55px] h-[55px]"
                    src={data.imageUrl}
                    alt={`Image ${index}`}
                  />
                  <div className="flex flex-col md:ml-[18px] mt-[4px] text-start">
                    <div className="text-[16px] font-medium leading-[120%] text-[#151448]">
                      {data.username}
                    </div>
                    <div className="mt-[5px] text-[14px] font-normal leading-[24px] text-[#757B8A]">
                      {data.designation}
                    </div>
                  </div>
                </div>
                <div className="flex justify-center items-center">
                  <img
                    className="mt-[5px]"
                    src={data.companyLogo}
                    alt={`Image ${index}`}
                  />
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
