import React from 'react';
import { Button } from '../../utils/Button';
import 'react-multi-carousel/lib/styles.css';

const ProductOverview = () => {
  return (
    <div className="mt-[80px] ">
      <div className="bg-[url('/images/bg-blue2.png')] bg-no-repeat bg-cover md:px-[134px] py-[75px]">
        <div className="max-w-[1377.5px]  mx-auto">
          <div className="flex flex-col  md:justify-start md:items-start justify-center items-center w-[100%] md:text-start text-center">
            <Button
              label={'PRODUCT OVERVIEW'}
              type="button"
              // onClick={() => router.push("/getStarted")}
              className="max-w-[150px] px-[10px] py-[4px] bg-[#A1B4F7] text-[white] xxl:leading-[22.99px] tracking-[-0.25px] font-semibold sm:leading-[20.57px] leading-[14px] xxl:w-[238px] md:w-[200px] w-[160px] text-[12px]"
            />
            <div className="md:my-[30px]  lg:gap-[40px] flex md:flex-row flex-col">
              <div className="max-w-[336px] inline-block text-[white] md:text-[60px] text-[30px] leading-[64px] tracking-[-1.8px] font-bold md:mt-[30px] mt-[15px] mx-auto">
                Build Exclusively
              </div>
              <div className="max-w-[704px] inline-block text-[white] md:mt-[62px] md:text-[22px] text-[16px] font-medium leading-[35px]">
                Appinventiv dream, architect, design and develop. But more than
                that, we are a team of passionate people driven by one
                relentless pursuit- to craft innovative solutions and deliver
                unparalleled results.
              </div>
            </div>
            <div className="flex lg:pr-[125px] w-[100%] md:px-0 px-[10px] flex-row pb-[50px] justify-between">
              <div>
                <div className="max-w-[336px] inline-block text-[white] md:text-[60px] text-[30px] leading-[86px] tracking-[-2.4px] font-bold mt-[30px]">
                  250+
                </div>
                <div className="md:text-[18px]  text-[12px] text-[white] font-medium leading-[28px]">
                  PRODUCTS
                </div>
              </div>
              <div>
                <div className="max-w-[336px] inline-block text-[white] md:text-[60px] text-[30px] leading-[86px] tracking-[-2.4px] font-bold mt-[30px]">
                  65
                </div>
                <div className="md:text-[18px]  text-[12px] text-[white] font-medium leading-[28px]">
                  SOFTWARES DEVELOPED
                </div>
              </div>
              <div>
                <div className="max-w-[336px] inline-block text-[white] md:text-[60px] text-[30px] leading-[86px] tracking-[-2.4px] font-bold mt-[30px]">
                  215
                </div>
                <div className="md:text-[18px]  text-[12px] text-[white] font-medium leading-[28px]">
                  WEB DESIGNS
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductOverview;
