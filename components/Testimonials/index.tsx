import React from 'react'
import { Button } from '../../utils/Button'
import Carousel from 'react-multi-carousel'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const ButtonGroup = ({ next, previous, goToSlide, ...rest }: any) => {
    const { carouselState: { currentSlide } } = rest;
    return (
      <div className="carousel-button-group mb-4  gap-4 flex justify-between 
        items-center w-full absolute bottom-[50%]">
        <button className='bg-white text-[#177DF0] w-[50px] h-[50px] shadow-[0_4px_4px_0_rgb(0,0,0,0.7)] rounded-[50px]' onClick={() =>
          previous()}> <ArrowBackIcon /></button>
        <button className="bg-white text-[#177DF0] w-[50px] h-[50px] shadow-[0_4px_4px_0_rgb(0,0,0,0.7)] rounded-[50px]" onClick={() => next()}><ArrowForwardIcon /></button>
      </div>
  
    );
  };

const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
};

const images = [
    {
      comment: "“ We worked with a web dev company to build our first website, which was abysmal. With the website that topflight Apps built, we only hear rave reviews”",
      imageUrl: "/images/user.png",
      companyLogo: "/images/allegro.svg",
      username: "— Yacob Sudarmaji",
      designation: "Product Manager, allegro"
    },
    {
      comment: "“ We worked with a web dev company to build our first website, which was abysmal. With the website that topflight Apps built, we only hear rave reviews”",
      imageUrl: "/images/user.png",
      companyLogo: "/images/allegro.svg",
      username: "— Yacob Sudarmaji",
      designation: "Product Manager, allegro"
    },
    {
      comment: "“ We worked with a web dev company to build our first website, which was abysmal. With the website that topflight Apps built, we only hear rave reviews”",
      imageUrl: "/images/user.png",
      companyLogo: "/images/allegro.svg",
      username: "— Yacob Sudarmaji",
      designation: "Product Manager, allegro"
    }
];

const Testimonials = () => {
  return (
    <div className="px-[100px] relative flex flex-col items-center py-[40px] mt-[80px] text-center max-w-[1377.5px] mx-auto">
        <div className="text-[#E4F0FF] -z-[1] text-[250px] absolute left-[-550px] font-medium leading-[70%] tracking-[-20px] w-[754px] bottom-[405px] text-right ">
          Testimonials
        </div>
        <Button
          label={"TESTIMONIALS"}
          type="button"
          // onClick={() => router.push("/getStarted")}
          className="max-w-[150px] px-[10px] py-[4px] bg-[#A1B4F7] text-[white] xxl:leading-[22.99px] tracking-[-0.25px] font-semibold sm:leading-[20.57px] leading-[14px] xxl:w-[238px] md:w-[200px] w-[160px] text-[12px] hover:text-[#A1B4F7]"
        />
        <div className="text-[#151448] text-[40px] font-bold leading-[53%] mt-[15px] max-w-[553px] tracking-[-1px]">What our clients say about us</div>
        <div className="w-[85%] my-[30px] relative flex flex-col-reverse text-center">
          <Carousel responsive={responsive} arrows={false} renderButtonGroupOutside={true} customButtonGroup={<ButtonGroup />}>
            {images.map((data: any, index: any) => (
              <div key={index} className="w-[752px] h-[283px] my-[30px] flex flex-col mx-[auto] rounded-[10px] shadow-[0_2px_5px_0_rgba(0,0,0,0.5)] border-[black] px-[55px] py-[50px]">
                <div className="text-[#042552] text-[18px] mt-[13px] font-normal w-[642px] leading-[26px]">{data.comment}</div>
                <div className="flex flex-row mt-[50px] align-center justify-between">
                  <div className="flex flex-row">
                    <img
                      className="w-[55px] h-[55px]"
                      src={data.imageUrl}
                      alt={`Image ${index}`}
                    />
                    <div className="flex flex-col ml-[18px] mt-[4px] text-start">
                      <div className="text-[16px] font-medium leading-[120%] text-[#151448]" >{data.username}</div>
                      <div className="mt-[5px] text-[14px] font-normal leading-[24px] text-[#757B8A]">{data.designation}</div>
                    </div>
                  </div>
                  <div >
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
  )
}

export default Testimonials