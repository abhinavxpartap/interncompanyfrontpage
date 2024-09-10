import React,{useEffect} from 'react'
import Button from '@mui/material/Button';
import {Img} from '../../utils/Img';
import data from '../../data/config.json';
import ASlider from "../../data/service/AbhinavSlider.json"
import AOS from "aos"
import "aos/dist/aos.css"


export const Slider = () => {
   useEffect(()=>{
    AOS.init({
       offset:200,
       duration:700,
       easing:"ease-in-sine",
       delay:100,
    })
   },[])

  return (
    <>
    <div className='max-w-[1440px] mx-auto flex md:flex-row flex-col lg:justify-end justify-center md:items-start items-center xl:pl-[79px]  md:pl-[45px] sm:pl-[40px] pl-[28px] pr-[23px] md:pt-[80px] lg:gap-[70px] pt-[35px] pb-[60px] relative'>
    <div className='md:sticky md:top-[140px] sm:w-[50%]'>
    <div data-aos='fade-up' className='flex xl:pb-0 pb-[20px] flex-col lg:gap-[40px] gap-[20px]'>
        <div className='flex flex-wrap sm:justify-start max-w-[569px] w-full xl:gap-[20px] gap-[15px] items-center'>
            <h4 className='font-Monstrerrat leading-[24px] pt-[5px] font-medium lg:text-[18px] text-[15px] text-[#1D528B]'>
                Our Work
            </h4> 
            <h3 className='xl:text-[60px] lg:text-[50px] md:text-[40px] text-[30px] text-center sm:text-start lg:font-bold font-semibold xl:leading-[76px] lg:leading-[66px] md:leading-[50px] leading-[40px] text-[#3C342E]'>
                Recent Project
            </h3>
       </div>
       <div className='inline-flex justify-start'>
        <Button variant="text" 
         sx={{
            '&.MuiButtonBase-root':{
               padding: 0
         }}}
       className='text-black max-w-[197px] h-[38px]' 
       endIcon={<Img src={data.button} alt='button' className='w-[38px] h-[38px]'/>}>
             Meet Our Teams
        </Button>
        </div>
    </div>
    </div>
    <div className='flex flex-col'>
    {ASlider.Abhslider.map((items, index:number) => (
    <div key={index} data-aos='fade-up' className='max-w-[519px] overflow-hidden relative'>
    <div  className='flex justify-between pb-[28px]'>
    <h6 className='text-[23.6px] font-sans pb-[10px] border-b-[1px] border-b-[#a09f9f] border-b-solid font-semibold text-[#333333]'>{items.title}</h6>
      <h6 className='text-[23.6px] font-sans pb-[10px] border-b-[1px] border-b-[#a09f9f] border-b-solid font-semibold text-[#333333]'>{items.subtitle}</h6>
       </div>
      <Img src={items.Pic} alt='' className='max-h-[348px]'/>        
      <p className='font-medium text-[18px] font-sans pt-[35px] pb-[70px] text-[#333333]'>Strategy, Research, Design, Development & QA</p>
    </div>
    ))}
    </div>
    </div>
    </>
  )
}


 