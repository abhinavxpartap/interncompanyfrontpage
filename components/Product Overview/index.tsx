import React from 'react'
import { Button } from "../../utils/Button";

const caseStudies = [
  {
    heading:"Clinical Trial Management Software 1",
    org:"Medable",
    description:"Since we started working with Medable in late 2017, they have continued to report stratospheric growth, increasing their presence with the world’s leading healthcare institutions and reaching more than 750,000 patients.",
  },
  {
    heading:"Clinical Trial Management Software 2",
    org:"Medable",
    description:"Since we started working with Medable in late 2017, they have continued to report stratospheric growth, increasing their presence with the world’s leading healthcare institutions and reaching more than 750,000 patients.",
  },
  {
    heading:"Clinical Trial Management Software 3",
    org:"Medable",
    description:"Since we started working with Medable in late 2017, they have continued to report stratospheric growth, increasing their presence with the world’s leading healthcare institutions and reaching more than 750,000 patients.",
  }
]

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
      <div className="px-[100px] flex flex-col items-center py-[40px] mt-[80px] text-center ">
        {/* <div className="text-[#E4F0FF] text-[250px] absolute left-[-205px] font-medium leading-[70%] tracking-[-20px] w-[754px] text-right ">
          service
        </div> */}
        <Button
            label={"WHAT WE DO?"}
            type="button"
            // onClick={() => router.push("/getStarted")}
            className="max-w-[150px] px-[10px] py-[4px] bg-[#A1B4F7] text-[white] xxl:leading-[22.99px] tracking-[-0.25px] font-semibold sm:leading-[20.57px] leading-[14px] xxl:w-[238px] md:w-[200px] w-[160px] text-[12px] hover:text-[#A1B4F7]"
        />
        <div className="text-[#151448] text-[40px] font-bold leading-[125%] mt-[13px] w-[481px]">Zuca provides all kinds of services you need</div>
        <div className="text-[#747C85] text-[18px] mt-[13px] font-medium w-[612px] leading-[170%]">Fusce placerat pretium mauris, vel sollicitudin elit lacinia vitae. Quisque sit amet nisi erat.</div>
        <div className='w-[100%] flex flex-row justify-between'>
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
      <div className="mt-[80px">
        <Button
          label={"AMAZING ANALYSIS"}
          type="button"
          // onClick={() => router.push("/getStarted")}
          className="max-w-[150px] px-[10px] py-[4px] bg-[#A1B4F7] text-[white] xxl:leading-[22.99px] tracking-[-0.25px] font-semibold sm:leading-[20.57px] leading-[14px] xxl:w-[238px] md:w-[200px] w-[160px] text-[12px] hover:text-[#A1B4F7]"
        />
        <div className="text-[#151448] text-[40px] font-bold leading-[125%] mt-[13px] w-[481px]">Case Studies</div>
        <div className="text-[#747C85] text-[16px] mt-[13px] font-medium w-[612px] leading-[30px]">Fusce placerat pretium mauris, vel sollicitudin elit lacinia vitae. Quisque sit amet nisi erat.</div>
      </div>
        <div className='w-[100%]' >
          <div className="w-[711px] rounded-[20px] px-[23px] py-[20px] flex flex-row">
            <div className="w-[280px] h-[326px] rounded-[15px] ">
              <img src="" alt="" />
            </div>
            <div className="text-[#151448] text-[40px] font-bold leading-[125%] mt-[13px] w-[481px]">Clinical Trial Management Software</div>
            <div className="text-[#177DF0] text-[40px] font-bold leading-[125%] mt-[13px] w-[481px]">Medable</div>
            <div className="text-[#747C85] text-[16px] mt-[13px] font-medium w-[612px] leading-[30px]">Since we started working with Medable in late 2017, they have continued to report stratospheric growth, increasing their presence with the world’s leading healthcare institutions and reaching more than 750,000 patients.</div>
          </div>
        </div>
    </div>
  )
}

export default ProductOverview;