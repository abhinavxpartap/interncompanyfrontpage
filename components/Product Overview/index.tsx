import React, {useState} from 'react'
import { Button } from "../../utils/Button";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel';
import { FreeQuotation } from '../freeQuotation';

const images = [
  {
    comment:"“ We worked with a web dev company to build our first website, which was abysmal. With the website that topflight Apps built, we only hear rave reviews”",
    imageUrl:"/images/user.png",
    companyLogo:"/images/allegro.svg",
    username:"— Yacob Sudarmaji",
    designation:"Product Manager, allegro"
  },
  {
    comment:"“ We worked with a web dev company to build our first website, which was abysmal. With the website that topflight Apps built, we only hear rave reviews”",
    imageUrl:"/images/user.png",
    companyLogo:"/images/allegro.svg",
    username:"— Yacob Sudarmaji",
    designation:"Product Manager, allegro"
  },
  {
    comment:"“ We worked with a web dev company to build our first website, which was abysmal. With the website that topflight Apps built, we only hear rave reviews”",
    imageUrl:"/images/user.png",
    companyLogo:"/images/allegro.svg",
    username:"— Yacob Sudarmaji",
    designation:"Product Manager, allegro"
  }
];


const caseStudies = [
  {
    heading:"Clinical Trial Management Software",
    imgUrl:"/images/unsplash_05gac-Qn0k4.png",
    org:"Medable",
    description:"Since we started working with Medable in late 2017, they have continued to report stratospheric growth, increasing their presence with the world’s leading healthcare institutions and reaching more than 750,000 patients.",
  },
  {
    heading:"Clinical Trial Management Software",
    imgUrl:"/images/unsplash_05gac-Qn0k4.png",
    org:"Medable",
    description:"Since we started working with Medable in late 2017, they have continued to report stratospheric growth, increasing their presence with the world’s leading healthcare institutions and reaching more than 750,000 patients.",
  },
  {
    heading:"Clinical Trial Management Software",
    imgUrl:"/images/unsplash_05gac-Qn0k4.png",
    org:"Medable",
    description:"Since we started working with Medable in late 2017, they have continued to report stratospheric growth, increasing their presence with the world’s leading healthcare institutions and reaching more than 750,000 patients.",
  }
]

const ButtonGroup = ({ next, previous, goToSlide, ...rest }: any) => {
  const { carouselState: { currentSlide } } = rest;
  return (
      <div className="carousel-button-group mb-4  gap-4 flex justify-between 
      items-center w-full absolute bottom-[50%]">
        <button className='bg-white text-[#177DF0] w-[50px] h-[50px] shadow-[0_4px_4px_0_rgb(0,0,0,0.7)] rounded-[50px]' onClick={() => 
        previous()}> <ArrowBackIcon /></button>
        <button className="bg-white text-[#177DF0] w-[50px] h-[50px] shadow-[0_4px_4px_0_rgb(0,0,0,0.7)] rounded-[50px]" onClick={() => next()}><ArrowForwardIcon  /></button>
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

const ProductOverview = () => {
  return (
    <div className="mt-[80px]">
      <div className="h-[544px] bg-[url('/images/bg-blue2.png')] px-[144px] py-[75px]">
        <div>
          <Button
              label={"PRODUCT OVERVIEW"}
              type="button"
              // onClick={() => router.push("/getStarted")}
              className="max-w-[150px] px-[10px] py-[4px] bg-[#A1B4F7] text-[white] xxl:leading-[22.99px] tracking-[-0.25px] font-semibold sm:leading-[20.57px] leading-[14px] xxl:w-[238px] md:w-[200px] w-[160px] text-[12px]"
          />
        </div>
        <div className="my-[30px] flex flex-row">
          <div className='max-w-[336px] inline-block text-[white] text-[60px] leading-[64px] tracking-[-1.8px] font-bold mt-[30px]'>
            Build Exclusively
          </div>
          <div className="max-w-[742px] inline-block text-[white] mt-[62px] text-[22px] font-medium leading-[35px]">
            Appinventiv dream, architect, design and develop. But more than that, we are a team of passionate people driven by one relentless pursuit- to craft innovative solutions and deliver unparalleled results.
          </div>
        </div>
        <div className='flex flex-row justify-between'>
          <div>
            <div className='max-w-[336px] inline-block text-[white] text-[60px] leading-[86px] tracking-[-2.4px] font-bold mt-[30px]'>
              250+
            </div>
            <div className='text-[18px] text-[white] font-medium leading-[28px]'>
              PRODUCTS
            </div>
          </div>
          <div>
            <div className='max-w-[336px] inline-block text-[white] text-[60px] leading-[86px] tracking-[-2.4px] font-bold mt-[30px]'>
              65
            </div>
            <div className='text-[18px] text-[white] font-medium leading-[28px]'>
              SOFTWARE'S DEVELOPED
            </div>
          </div>
          <div>
            <div className='max-w-[336px] inline-block text-[white] text-[60px] leading-[86px] tracking-[-2.4px] font-bold mt-[30px]'>
              215
            </div>
            <div className='text-[18px] text-[white] font-medium leading-[28px]'>
              WEB DESIGNS
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[120px] flex flex-row px-[110px] py-[40px]">
        <div className="w-[627px]">
          <img src="/images/unsplash_Of_m3hMsoAA.png" alt="unsplash" />
        </div>
        <div className="inline-block ml-[83px]">
          <Button
              label={"EXPERT TEAM"}
              type="button"
              // onClick={() => router.push("/getStarted")}
              className="max-w-[150px] px-[10px] py-[4px] bg-[#A1B4F7] text-[white] xxl:leading-[22.99px] tracking-[-0.25px] font-semibold sm:leading-[20.57px] leading-[14px] xxl:w-[238px] md:w-[200px] w-[160px] text-[12px]"
          />
          <div className="text-[#151448] text-[40px] font-bold leading-[125%] mt-[13px] w-[555px]">Fastest growing digital product agency in APAC</div>
          <div className="text-[#747C85] text-[18px] mt-[13px] font-medium w-[542px] leading-[170%]">Work with hand-picked tech talent having experience of working with companies, from around the world and time-zones.</div>
          <div className="mt-[13px]">
            <Button
              label="Schedule a Demo"
              type="button"
              color="secondary"
              className="text-[white] bg-[#0092FF] font-semibold text-[16px] leading-[24px] px-[22px] py-[12px] hover:text-[#0092FF]"
              // onClick={() => router.push("/getStarted")}
            />
          </div>
        </div>
      </div>
      <div className="px-[100px] relative flex flex-col items-center py-[40px] mt-[80px] text-center ">
        <div className="text-[#E4F0FF] -z-[1] text-[250px] absolute left-[-205px] font-medium leading-[70%] tracking-[-20px] w-[754px] text-right bottom-[450px]">
          service
        </div>
        <Button
            label={"WHAT WE DO?"}
            type="button"
            // onClick={() => router.push("/getStarted")}
            className="max-w-[150px] px-[10px] py-[4px] bg-[#A1B4F7] text-[white] xxl:leading-[22.99px] tracking-[-0.25px] font-semibold sm:leading-[20.57px] leading-[14px] xxl:w-[238px] md:w-[200px] w-[160px] text-[12px] hover:text-[#A1B4F7]"
        />
        <div className="text-[#151448] text-[40px] font-bold leading-[125%] mt-[13px] w-[481px]">Zuca provides all kinds of services you need</div>
        <div className="text-[#747C85] text-[18px] mt-[13px] font-medium w-[612px] leading-[170%]">Fusce placerat pretium mauris, vel sollicitudin elit lacinia vitae. Quisque sit amet nisi erat.</div>
        <div className='w-[100%] mt-[60px] flex flex-row justify-between'>
          <div className="p-[30px] w-[366px] flex flex-col rounded-[10px] shadow-[0_4px_20px_0_rgba(0,0,0,0.7)]">
            <img src={"/images/wifi-blue.svg"} alt="options" height="60px" width="60px" />
            <div className="text-[20px] font-semibold text-left leading-[26px] text-[#042552] mt-[15px]">Strategy & Research</div>
            <div className="text-[16px] font-semibold text-left leading-[26px] text-[#042552] mt-[15px]">Fully layered dolor sit amet, consectetur adipisicing elit. Facere, nobis, id expedita dolores officiis laboriosam.</div>
          </div>
          <div className="p-[30px] w-[366px] flex flex-col rounded-[10px] shadow-[0_4px_20px_0_rgba(0,0,0,0.7)]">
            <img src={"/images/wifi-green.svg"} alt="options" height="60px" width="60px" />
            <div className="text-[20px] font-semibold text-left leading-[26px] text-[#042552] mt-[15px]">Software Development</div>
            <div className="text-[16px] font-semibold text-left leading-[26px] text-[#042552] mt-[15px]">Fully layered dolor sit amet, consectetur adipisicing elit. Facere, nobis, id expedita dolores officiis laboriosam.</div>
          </div>
          <div className="p-[30px] w-[366px] flex flex-col rounded-[10px] shadow-[0_4px_20px_0_rgba(0,0,0,0.7)]">
            <img src={"/images/wifi-orange.svg"} alt="options" height="60px" width="60px" />
            <div className="text-[20px] font-semibold text-left leading-[26px] text-[#042552] mt-[15px]">Web Design</div>
            <div className="text-[16px] font-semibold text-left leading-[26px] text-[#042552] mt-[15px]">Fully layered dolor sit amet, consectetur adipisicing elit. Facere, nobis, id expedita dolores officiis laboriosam.</div>
          </div>
        </div>
      </div>
      <div className="mt-[80px] px-[100px] py-[64px]">
        <div className="flex flex-row">
          <div>
            <Button
              label={"AMAZING ANALYSIS"}
              type="button"
              // onClick={() => router.push("/getStarted")}
              className="max-w-[150px] px-[10px] py-[4px] bg-[#A1B4F7] text-[white] xxl:leading-[22.99px] tracking-[-0.25px] font-semibold sm:leading-[20.57px] leading-[14px] xxl:w-[238px] md:w-[200px] w-[160px] text-[12px] hover:text-[#A1B4F7]"
            />
            <div className="text-[#151448] text-[40px] font-bold leading-[125%] mt-[13px] w-[481px]">Case Studies</div>
            <div className="text-[#747C85] text-[16px] mt-[13px] font-medium w-[612px] leading-[30px]">Fusce placerat pretium mauris, vel sollicitudin elit lacinia vitae. Quisque sit amet nisi erat.</div>
          </div>
          <div className="flex flex-row justify-between w-[120px] h-[50px] mt-[43px] ms-auto cursor-pointer">
            <div className="bg-[#177DF0] text-[#fff] rounded-[5px] "><ArrowBackIcon sx={{height:"50px",width:"50px"}} /></div>
            <div className="bg-[#177DF0] text-[#fff] rounded-[5px] "><ArrowForwardIcon sx={{height:"50px",width:"50px"}} /></div>
          </div>
        </div>
        <div>

        </div>
      </div>
        <div className='w-full h-full overflow-x-scroll scrollbar scroll whitespace-nowrap scroll-smooth flex flex-row' >
          { caseStudies.map((caseStudy: any, index: any)=>(
              <div key={index} className="w-[711px] h-[366px] inline-block rounded-[20px] border-[2px] flex flex-row justify-between px-[23px] py-[20px] m-4">
                <div className="w-[280px] h-[326px] inline-block rounded-[15px]">
                  <img src={caseStudy.imgUrl} alt={caseStudy.imgUrl} />
                </div>
                <div className='flex flex-col w-[350px] whitespace-break-spaces ml-[30px]'>
                  <div className="text-[#151448] text-[20px] font-bold leading-[37.4px]">{caseStudy.heading}</div>
                  <div className="text-[#177DF0] text-[20px] font-bold leading-[37.4px] mt-[10px]">{caseStudy.org}</div>
                  <div className="text-[#747C85] text-[16px] mt-[5px] font-medium leading-[26px]">{caseStudy.description}</div>
                  <div>
                    <button
                        type="button"
                        // onClick={() => router.push("/getStarted")}
                        className="bg-white border-[#5A7184] border-[1px] py-[2px] px-[10px] rounded-[20px] text-[#5A7184] text-[12px] font-bold leading-[150%] max-w-[115px] h-[35px] mt-[38px]"
                    >Learn more <ArrowOutwardIcon /> </button>
                </div>
                </div>
              </div>
          )) }
        </div>
        <div className="px-[100px] relative flex flex-col items-center py-[40px] mt-[80px] text-center ">
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
                <div key={index} className="w-[752px] h-[283px] my-[30px] flex flex-col mx-[auto] rounded-[10px] shadow-[0_4px_25px_0_rgba(0,0,0,0.5)] border-[black] px-[55px] py-[50px]">
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
      <div className=" bg-[#151448] px-[70px] py-[103px] mt-[150px] relative">
      <div className="absolute right-[40px] bottom-[-70px]">
          <FreeQuotation />
        </div>
        <div className="text-[#FDFDFD] text-[50px] font-bold leading-[125%] mt-[13px] max-w-[691px]">Estimations & planning for
business decisions</div>
        <div className="text-[22px] font-medium text-left leading-[26px] text-[#FDFDFD] mt-[20px]">Book your call now</div>
                
      </div>
    </div>
  )
}

export default ProductOverview;