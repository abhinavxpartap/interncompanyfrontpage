import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {Img} from '../../utils/Img';
import data from '../../data/config.json';


export const AbhiForm = () => {
  return (
    <div className='max-w-[1440px] mx-auto lg:px-[120px] md:px-[80px] sm:px-[50px] px-[30px] pt-[80px] pb-[60px]'>
        <div className='flex flex-wrap sm:justify-start justify-center max-w-[899px] w-full gap-[20px] items-start'>
            <h4 className='font-Monstrerrat leading-[24px] xl:pt-[15px] pt-[10px] font-medium text-[18px] text-[#1D528B]'>
                Contact
            </h4>
            <div className='flex flex-col gap-[50px]'>
            <h3 className='xl:text-[60px] lg:text-[50px] sm:text-[40px] text-[30px] text-center sm:text-start lg:font-bold font-semibold xl:leading-[76px] lg:leading-[66px] md:leading-[50px] leading-[40px] text-[#3C342E]'>
                We'er looking forward to <br className='sm:block hidden'/>hearing from you!
            </h3>
            <div className='max-w-[714px] inline-flex flex-col gap-[32px]'>
            <TextField
            id="firstname"
            label="Full Name"
            placeholder='Enter Your Full Name'
            variant="standard"
            InputLabelProps={{
                className:"text-[20px] font-Montserrat mb-[10px]" 
              }}
            sx={{
                '& .MuiInputBase-input': {
                    height:"36px",
                    paddingBottom:"10px",
                    paddingtop:0,
                  },
            }}
            />
            <TextField
            id="contact"
            label="Contact No."
            placeholder='Enter Your Contact No.'
            variant="standard"
            InputLabelProps={{
                className:"text-[20px] font-Montserrat mb-[10px]" 
              }}
            sx={{
                '& .MuiInputBase-input': {
                    height:"36px",
                    paddingBottom:"10px",
                    paddingtop:0,
                  },
            }}
            />
            <TextField
            id="email"
            label="Email "
            placeholder='Enter Your Email'
            variant="standard"
            InputLabelProps={{
                className:"text-[20px] font-Montserrat mb-[10px]" 
              }}
            sx={{
                '& .MuiInputBase-input': {
                    height:"36px",
                    paddingBottom:"10px",
                    paddingtop:0,
                  },
            }}
            />
            <TextField
            id="outlined-multiline-flexible"
            label="Your Message"
            placeholder='Your Message'
            multiline
            rows={4}
            variant="standard"
             InputLabelProps={{
                className:"text-[20px] font-Montserrat mb-[10px]" 
              }}
            sx={{
                '& .MuiInputBase-input': {
                    height:"36px",
                    paddingBottom:"10px",
                    paddingtop:0,
                  },
            }}
            />
            </div>
            <div className='flex justify-end items-end'>
            <Button variant="text" 
            className='text-black' 
            sx={{
              '&.MuiButtonBase-root':{
                 padding: 0
           }}}
            endIcon={<Img src={data.button} alt='button' className='w-[38px] h-[38px]'/>}>
                Submit
            </Button>
            </div>
        </div>
        </div>
    </div>
  )
}
