import React from 'react';
import { Button } from '../../utils/Button';
import 'react-multi-carousel/lib/styles.css';
import pageData from "../../data/productOverview.json";
const ProductOverview:React.FC = () => {
  return (
    <div className="mt-[80px] ">
      <div className="bg-no-repeat bg-cover md:px-[134px] pt-[75px] pb-[40px]"
      style={{ backgroundImage: `url(${pageData.Data.backgroundImage})` }}
      >
        <div className="max-w-[1377.5px]  mx-auto">
          <div className="flex flex-col  md:justify-start md:items-start justify-center items-center w-[100%] md:text-start text-center">

            <div className="md:mb-[30px]   lg:gap-[40px] flex md:flex-row flex-col">
              <div className="max-w-[306px] inline-block text-[white] md:text-[60px] text-[30px] leading-[64px] tracking-[-1.8px] font-bold md:mt-[30px] mt-[15px] mx-auto">
                {pageData.Data.title}
              </div>
              <div className="max-w-[704px] inline-block text-[white] md:mt-[62px] md:text-[22px] text-[16px] font-medium leading-[35px]">
                {pageData.Data.subtitle}
              </div>
            </div>
            <div className="flex lg:pr-[125px] w-[100%] md:px-0 px-[10px] flex-row pb-[50px] justify-between">
              <div>
                <div className="max-w-[336px] inline-block text-[white] md:text-[60px] text-[30px] leading-[86px] tracking-[-2.4px] font-bold mt-[30px]">
                  {pageData.Data.productCount}+
                </div>
                <div className="md:text-[18px]  text-[12px] text-[white] font-medium leading-[28px]">
                  PRODUCTS
                </div>
              </div>
              <div>
                <div className="max-w-[336px] inline-block text-[white] md:text-[60px] text-[30px] leading-[86px] tracking-[-2.4px] font-bold mt-[30px]">
                  {pageData.Data.softwareDevelopedCount}
                </div>
                <div className="md:text-[18px]  text-[12px] text-[white] font-medium leading-[28px]">
                  SOFTWARES DEVELOPED
                </div>
              </div>
              <div>
                <div className="max-w-[336px] inline-block text-[white] md:text-[60px] text-[30px] leading-[86px] tracking-[-2.4px] font-bold mt-[30px]">
                  {pageData.Data.webDesignCount}
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
