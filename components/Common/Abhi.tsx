import React from 'react'
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import EmailIcon from '@mui/icons-material/Email';
import data from '../../data/config.json';
import {Img} from '../../utils/Img';


export const Abhi = () => {
  return (
    <div className='max-w-[1440px] mx-auto sm:block hidden bg-white z-[9]  w-full'>
        <div className='flex justify-between items-center h-[43px] xl:px-[100px] lg:px-[75px] sm:px-[30px] px-[16px] mx-auto'>
        <div className='xl:w-[806px] lg:w-[650px] w-[570px] inline-flex justify-between'>
             <div className=' inline-flex items-center gap-[3px]'>
                <PhoneIphoneIcon className='lg:w-[15px] w-[13px] lg:h-[18.53px] h-[15px]'/>
                <p className='font-medium font-sans lg:text-[12.5px] text-[10px]'>Phone:<a href="tel:+91-8245-255-407 | +91-9753-956-958">+91-8245-255-407 | +91-9753-956-958</a></p>
             </div>
             <div className=' inline-flex items-center gap-[4px]'>
                <EmailIcon className='lg:w-[15px] w-[13px] lg:h-[18.53px] h-[15px]'/>
                <p className='font-medium font-sans lg:text-[12.5px] text-[10px]'>Mail:<a href="mailto: admin@encountertravel.com">admin@encountertravel.com</a></p>
             </div>
             <div className=' inline-flex items-center gap-[4px]'>
                <Img src={data.cam} alt='cam' className='lg:w-[15px] w-[13px] lg:h-[18.53px] h-[15px]'/>
                <p className='font-medium font-sans lg:text-[12.5px] text-[10px]'><a href="/">Book a meeting</a></p>
             </div> 
        </div>
        <div className='flex justify-between w-[92px]'>
           <Img src={data.link} alt='' className='lg:w-[19px] lg:h-[19px] w-[15px] h-[15px]'/>
           <Img src={data.insta} alt='' className='lg:w-[19px] lg:h-[19px] w-[15px] h-[15px]'/>
           <Img src={data.twit} alt='' className='lg:w-[19px] lg:h-[19px] w-[15px] h-[15px]' />
        </div>
       </div>
        <div className='border-t-[1px] border-t-solid border-t-[#a09f9f] bg-white w-full'/>
        
    </div>
  )
}
