import React, { useState,useEffect }  from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {Img} from '../../utils/Img';
import Photo from '../../public/Assurance.svg';
import { Swiper, SwiperSlide,useSwiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';


const data = [
         {
          img: Photo,
          about: 'They thoroughly analyze our industry and target audience, allowing them to develop customized campaigns that effectively reach and engage our customers. Their creative ideas and cutting-edge techniques have helped us stay ahead of the competition.',
          ceo: 'Sahil Sharma',
          company: 'CEO of Alumel Tech',
         },
         {
          img: Photo,
          about: 'They thoroughly analyze our industry and target audience, allowing them to develop customized campaigns that effectively reach and engage our customers. Their creative ideas and cutting-edge techniques have helped us stay ahead of the competition.',
          ceo: 'Sahil Sharma',
          company: 'CEO of Alumel Tech',
        },
        {
          img: Photo,
          about: 'They thoroughly analyze our industry and target audience, allowing them to develop customized campaigns that effectively reach and engage our customers. Their creative ideas and cutting-edge techniques have helped us stay ahead of the competition.',
          ceo: 'Sahil Sharma',
          company: 'CEO of Alumel Tech',
        },
        {
          img: Photo,
          about: 'They thoroughly analyze our industry and target audience, allowing them to develop customized campaigns that effectively reach and engage our customers. Their creative ideas and cutting-edge techniques have helped us stay ahead of the competition.',
          ceo: 'Sahil Sharma',
          company: 'CEO of Alumel Tech',
        },
        {
          img: Photo,
          about: 'They thoroughly analyze our industry and target audience, allowing them to develop customized campaigns that effectively reach and engage our customers. Their creative ideas and cutting-edge techniques have helped us stay ahead of the competition.',
          ceo: 'Sahil Sharma',
          company: 'CEO of Alumel Tech',
        },   
];


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



const Testimonial = () => {
  const swiper = useSwiper();
  const [ currentIndex , setCurrentIndex] = useState(0)
  const [swiperReady, setSwiperReady] = useState(false);
  

  useEffect(() => {
    if (swiper) {
      setSwiperReady(true);
      swiper.on('slideChange', () => {
        setCurrentIndex(swiper.realIndex);
      });
    }
  }, [swiper]);


  const handleNext = () => {
    if (swiperReady  && currentIndex < data.length - 1) {
      swiper.slideNext();
    }
    if(currentIndex < data.length - 1){
        setCurrentIndex((curr) => curr + 1);
    }
  };

  const handlePrev = () => {
    if (swiperReady && currentIndex > 0) {
      swiper.slidePrev();
    }
    if(currentIndex > 0){
     setCurrentIndex((perv) => perv - 1);
    }
   };
  return (
    <div className="max-w-[1440px] py-[40px] lg:px-[70px] px-[30px] bg-[#FCFCFC] pb-[40px] mx-auto ">
    <div className="relative">
       <Swiper
       navigation={{
        nextEl: '.custom-next',
        prevEl: '.custom-prev',
        }}
       modules={[Navigation]}
       className="mySwiper">
       {data.map((item, index) => (
        <SwiperSlide key={index} className="flex flex-col max-w-[1300px] sm:justify-start justify-center items-start h-[244px] mx-auto">
            <p className="text-[#010205] w-full leading-[1.5] font-medium lg:text-[28px] md:text-[25px] sm:text-[23px] text-[19px] sm:text-start  text-center font-Montserrat">"{item.about}"</p>
            <div className="pt-[72px] ">
                <div className="flex gap-[24px] sm:justify-start justify-center">
                <Img src={item.img} alt=""  className='rounded-[50px] md:w-[70px] md:h-[70px] w-[60px] h-[60px]'/>
                <div className="flex flex-col lg:justify-start justify-center">
                    <h1 className="text-[20px] font-bold">{item.ceo}</h1>
                    <h4 className="text-[#888] text-[16px] font-medium leading-normal">{item.company}</h4>
                    </div>
                </div>
                </div>
      </SwiperSlide>
      ))} 
       <div className=" gap-4 sm:flex hidden justify-between items-center md:w-[300px] w-[150px] absolute md:bottom-[1%] lg:bottom-[3%] bottom-[0%] md:right-[0%] right-[15%] z-50 ">
       <div className="custom-prev" onClick={handlePrev}>
        <button
          className="bg-white text-[#222] border-[1px] border-solid border-[#222] md:py-[16px] md:px-[32px] py-[10px] px-[20px] rounded-[70px]"   
        >
          <ArrowBackIcon />
        </button>
        </div>
        <p className="text-center font-semibold font-sans">
           <span className='text-[#010205]] underline underline-offset-3'>0{currentIndex + 1}</span>/<span className='text-[#4d4d4d]'>0{data.length}</span>
        </p>
        <div className="custom-next" onClick={handleNext}>
        <button
          className="bg-[#222] text-[white] border-[1px] border-solid  md:py-[16px] md:px-[32px] py-[10px] px-[20px] rounded-[70px]"
          >
          <ArrowForwardIcon />
        </button>
        </div>
      </div>
      </Swiper>
    </div>
    </div>
  );
};
export default Testimonial;
          
