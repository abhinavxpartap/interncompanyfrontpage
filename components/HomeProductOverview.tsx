import React from 'react';
import 'react-multi-carousel/lib/styles.css';
import pageData from "../data/productOverview.json";
import {Img} from '../utils/Img';
const ProductOverview: React.FC = () => {
    return (
        <div>
            <div className="bg-no-repeat  max-w-[1250px] mx-auto md:rounded-3xl bg-cover md:px-[75px] md:pt-[90px] md:pb-0 pt-[50px] pb-[20px] "
                 style={{backgroundImage: `url(${pageData.Data.backgroundImage})`}}>
                <div className="max-w-[1077.5px]  mx-auto">
                    <div
                        className="flex flex-col  md:justify-start md:items-start justify-center items-center w-[100%] md:text-start text-center">
                        <div className="md:mb-[30px]   justify-between  flex md:flex-row flex-col">
                            <div className="max-w-[406px] inline-block  mx-auto">
                                <Img src="/service/joker.svg" alt="none" className="w-auto h-auto  pb-[30px] -z-[100]  "/>
                            </div>
                            <div className="max-w-[633px] mt-[-50px] z-[100] lg:ml-[100px] inline-block text-[white]  md:text-[20px] text-[16px] font-normal leading-[35px]">
                                <div>
                                    <div className="text-[35px] z-[100] leading-[50px] font-bold mb-[15px]">
                                        Need more reasons to work with Alumel tech?
                                    </div>
                                    <div>
                                        <div className="text-[18px] font-medium">
                                            {pageData.Data.Q1}
                                        </div>
                                        <div className="text-[16px]  border-b pb-[7px] font-thin leading-[30px]">
                                            {pageData.Data.A1}
                                        </div>
                                    </div>
                                    <div className="mt-[20px]">
                                        <div className="text-[18px] font-medium">
                                            {pageData.Data.Q2}
                                        </div>
                                        <div className="text-[16px] border-b pb-[7px]  font-thin leading-[30px]">
                                            {pageData.Data.A2}
                                        </div>
                                    </div>
                                    <div className="mt-[20px]">
                                        <div className="text-[18px] font-medium">
                                            Can you solve my tech Challenges?
                                        </div>
                                        <div className="text-[16px] font-thin leading-[30px]">
                                            Absolutely! Partner with us to conquer your most complex tech hurdles and achieve AI & Data Driven Solutions.
                                        </div>
                                    </div>
                                    <div className="flex  md:w-[100%] w-[90%] mx-auto  flex-row  justify-between">
                                        <div>
                                            <div
                                                className="max-w-[306px] inline-block text-[white] md:text-[50px] text-[30px] leading-[86px] tracking-[-2.4px] font-bold ">
                                                {pageData.Data.productCount}+
                                            </div>
                                            <div className="md:text-[18px]  text-[12px] text-[white]  md:font-medium font-normal   leading-[28px]">
                                                {pageData.Data.productText}
                                            </div>
                                        </div>
                                        <div>
                                            <div
                                                className="max-w-[336px] inline-block text-[white] md:text-[50px] text-[30px] leading-[86px] tracking-[-2.4px] font-bold ">
                                                {pageData.Data.webDesignCount}
                                            </div>
                                            <div className="md:text-[18px]  text-[12px] text-[white]  md:font-medium font-normal   leading-[28px]">
                                                {pageData.Data.webText}
                                            </div>
                                        </div>
                                        <div>
                                            <div className="max-w-[336px] inline-block text-[white] md:text-[50px] text-[30px] leading-[86px] tracking-[-2.4px] font-bold ">
                                                {pageData.Data.softwareDevelopedCount}
                                            </div>
                                            <div className="md:text-[18px]  text-[12px] text-[white] md:font-medium font-normal leading-[28px]">
                                                {pageData.Data.softwareText}
                                            </div>
                                        </div>
                                    </div>
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