import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Button } from '../../utils/Button';
import * as MUIMaterial from "@mui/material";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

const caseStudies = [
  {
    heading: "Clinical Trial Management Software",
    imgUrl: "/images/unsplash_05gac-Qn0k4.png",
    org: "Medable",
    description: "Since we started working with Medable in late 2017, they have continued to report stratospheric growth, increasing their presence with the world’s leading healthcare institutions and reaching more than 750,000 patients.",
  },
  {
    heading: "Clinical Trial Management Software",
    imgUrl: "/images/unsplash_05gac-Qn0k4.png",
    org: "Medable",
    description: "Since we started working with Medable in late 2017, they have continued to report stratospheric growth, increasing their presence with the world’s leading healthcare institutions and reaching more than 750,000 patients.",
  },
  {
    heading: "Clinical Trial Management Software",
    imgUrl: "/images/unsplash_05gac-Qn0k4.png",
    org: "Medable",
    description: "Since we started working with Medable in late 2017, they have continued to report stratospheric growth, increasing their presence with the world’s leading healthcare institutions and reaching more than 750,000 patients.",
  },
  {
    heading: "Clinical Trial Management Software",
    imgUrl: "/images/unsplash_05gac-Qn0k4.png",
    org: "Medable",
    description: "Since we started working with Medable in late 2017, they have continued to report stratospheric growth, increasing their presence with the world’s leading healthcare institutions and reaching more than 750,000 patients.",
  },
  {
    heading: "Clinical Trial Management Software",
    imgUrl: "/images/unsplash_05gac-Qn0k4.png",
    org: "Medable",
    description: "Since we started working with Medable in late 2017, they have continued to report stratospheric growth, increasing their presence with the world’s leading healthcare institutions and reaching more than 750,000 patients.",
  }
]

const CaseStudy = () => {
  return (
    <div>
      <div className="mt-[80px] relative px-[100px] pt-[64px] pb-[38px] max-w-[1377.5px] overflow-hidden mx-auto">
        <div className="flex  flex-row">
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
            <div className="bg-[#177DF0] text-[#fff] rounded-[5px] "><ArrowBackIcon sx={{ height: "50px", width: "50px" }} /></div>
            <div className="bg-[#177DF0] text-[#fff] rounded-[5px] "><ArrowForwardIcon sx={{ height: "50px", width: "50px" }} /></div>
          </div>
        </div>
        <div className="text-[#E4F0FF] -z-[1] text-[250px] max-w-[1440px] w-[1440px] left-[730px] absolute font-medium leading-[70%] -tracking-[20px] bottom-[3px]">
          case study
        </div>
      </div>
      <div className='w-full h-full overflow-x-scroll scrollbar scroll whitespace-nowrap scroll-smooth flex flex-row max-w-[1377.5px] mx-auto' >
        {caseStudies.map((caseStudy: any, index: any) => (
          <div key={index} className="max-w-[711px] h-[366px] inline-block rounded-[20px] shadow-[0_1px_5px_0_rgba(0,0,0,0.5)] flex flex-row justify-between px-[23px] py-[20px] m-4">
            <div className="w-[280px] h-[326px] inline-block rounded-[15px]">
              <img src={caseStudy.imgUrl} alt={caseStudy.imgUrl} />
            </div>
            <div className='flex flex-col w-[350px] whitespace-break-spaces ml-[30px]'>
              <div className="text-[#151448] text-[20px] font-bold leading-[37.4px]">{caseStudy.heading}</div>
              <div className="text-[#177DF0] text-[20px] font-bold leading-[37.4px] mt-[10px]">{caseStudy.org}</div>
              <div className="text-[#747C85] text-[16px] mt-[5px] font-medium leading-[26px]">{caseStudy.description}</div>
              <div>
                <MUIMaterial.Button
                  className="text-[12px] max-w-[115px] w-[115px] h-[35px] mt-[38px] capitalize font-bold leading-[150%]"
                  sx={{
                    backgroundColor: "transparent",
                    border: "1px solid #5A7184",
                    borderRadius: "20px",
                    color: "#5A7184",
                  }}
                >
                  Learn more
                  <span className="ml-[8px]">
                    <ArrowOutwardIcon className='w-[12px] h-[12px] my-[auto]' />
                  </span>
                </MUIMaterial.Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CaseStudy;