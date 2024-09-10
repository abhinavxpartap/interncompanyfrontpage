import React, {useState, useEffect} from 'react';
import {Header} from '../Common/Header';
import {Button} from '@mui/material';
import {BannerDataInterface} from '../../types';
import {Abhiheader} from '../Common/Abhiheader';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Abhi } from '../Common/Abhi';


interface Comp{
    image:string;
}

export const AbhiBanner: React.FC<Comp> = ({image}) => {

    const data = [
        {
            "no":"100+",
            "title":"Projects Done"
        },
        {
            "no":"310+",
            "title":"Satisfied Clients"
        },
        {
            "no":"5+",
            "title":"Years Experience"
        }
    ]


    return (
        <div
            style={{backgroundImage: `url(${image})`}}
            className="bg-cover bg-center bg-no-repeat md:pb-[50px] relative mx-[auto]"
        >    
            <div>
            </div>
            <Abhiheader/>
            <div
                className="max-w-[1440px] mx-[auto] flex flex-col items-center justify-center md:pt-[175px] pt-[137px] pb-[71px] md:px-0 px-[20px]  gap-[30px]">
              <div className="lg:text-[80px]  md:text-[60px] sm:text-[50px] text-[40px] font-semibold leading-[120%] md:leading-[130%] md:tracking-[-2.4px] max-w-[900px] w-full text-center md:pb-[5px] pb-[18px] fade-in drop-shadow-xl animate-gradient text-transparent"
               style={{
                background:"linear-gradient(to right,#eb2b13,#ea382e,#ef5247,#e1113d,#be0542,#ad0a5d,#a40441,#7f043a)",
                backgroundClip:"text",
                }}
              >

                <h1 className='font-sans'
                >
                    <span className='italic font-medium' style={{fontFamily:"Plus jakarta Sans"}}>Build</span> your digital <span className='italic font-medium' style={{fontFamily:"Plus jakarta Sans"}}>Product</span><br className='sm:block hidden'/> business and more
                </h1>
                </div>
                <div className='mt-[30px] flex justify-between items-center w-full max-w-[374px]'>
                <button
                  className="md:px-[28px] px-[20px] py-[14px] md:text-[16px] text-[14px] md:w-[204px] w-[160px]  bg-[#CE023D] text-white rounded-[30px] inline-flex justify-between items-center hover:bg-transparent hover:border-[1px] border-solid border-[#CE023D] hover:text-[#CE023D] overflow-hidden">
                   Schedule a call <ArrowForwardIcon className='md:text-[24px] text-[20px]'/>
             </button>
                <h4 className='md:text-[16px] text-[14px] cursor-pointer font-sans text-black'>
                    View Case Study
                    <hr className='border-t-[1px] border-t-black border-t-solid'/>
                </h4>
                </div> 
                <div
                    className="justify-between md:flex hidden text-[14px] text-black font-normal max-w-[381px] md:w-full text-start fade-in items-start -rotate-90  absolute -left-[160px] text-sans"
                >
                 <p className='max-w-[48px] cursor-pointer inline-flex justify-between items-center'><ArrowForwardIcon className='text-[16px]'/>Call</p>
                  <p className='max-w-[133px] cursor-pointer inline-flex justify-between items-center'><ArrowForwardIcon className='text-[16px]'/>Book a meeting</p>
                 <p className='max-w-[90px] cursor-pointer inline-flex justify-between items-center'><ArrowForwardIcon className='text-[16px]'/>Send mail</p>
                </div>
                <div className="text-center max-w-[449px] w-full flex justify-between">
                {data.map((items,index:number)=>(
                    <div key={index} className='flex flex-col'>
                          <h6 className='font-sans text-[16px] font-bold text-[#E5665A]'>
                             {items.no}
                          </h6>
                          <h6 className='font-sans text-[12px] font-medium text-black'>
                             {items.title}
                          </h6>
                       </div>
                    ))}
                </div>
               
            </div>
            
        </div>
    );
};
