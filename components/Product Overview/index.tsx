import React from 'react';
import 'react-multi-carousel/lib/styles.css';
import pageData from "../../data/productOverview.json";
import {Img} from '../../utils/Img';

const ProductOverview: React.FC = () => {
    return (
        <div className="mt-[80px] ">
            <div className="bg-no-repeat bg-cover md:px-[75px] pt-[55px] pb-[20px]"
                 style={{backgroundImage: `url(${pageData.Data.backgroundImage})`}}
            >
                <div className="max-w-[1377.5px]  mx-auto">
                    <div
                        className="flex flex-col  md:justify-start md:items-start justify-center items-center w-[100%] md:text-start text-center">

                        <div className="md:mb-[30px]   justify-between  flex md:flex-row flex-col">
                            <div
                                className="max-w-[406px] inline-block text-[white] md:text-[50px] text-[30px] leading-[64px] tracking-[-1.8px] font-bold md:mt-[30px] mt-[15px] mx-auto">
                                {pageData.Data.title}
                                <span>
                                <Img src="images/logo/emoji.svg" alt="none" className="w-[25px] h-auto relative left-[405px] top-[-42px]"/>
                                </span>


                            </div>
                            <div
                                className="max-w-[804px] ml-[100px] inline-block text-[white] md:mt-[42px] md:text-[20px] text-[16px] font-normal leading-[35px]">

                                <div>

                                    <div>
                                        <span className="text-[26px] font-semibold">How Can I Trust Alumel tech? </span> You
                                        will be only working with industry experts with years of experience and deep
                                        tech knowledge to your projects.

                                    </div>
                                    <div className="mt-[20px]">
                                        <span className="text-[26px] font-semibold">Are your solutions tailored to my needs?</span> Yes, every solution we create is customized to meet your specific needs and goals.

                                    </div>
                                    <div className="mt-[20px]">
                                        <span className="text-[26px] font-semibold"> Can you solve my tech Challenges?  </span> Absolutely! Partner with us to conquer your most complex tech hurdles and achieve AI & Data Driven Solutions.

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="flex lg:pr-[125px] w-[100%] md:px-0 px-[10px] flex-row pb-[50px] justify-between">
                            <div>
                                <div
                                    className="max-w-[336px] inline-block text-[white] md:text-[60px] text-[30px] leading-[86px] tracking-[-2.4px] font-bold mt-[30px]">
                                    {pageData.Data.productCount}+
                                </div>
                                <div className="md:text-[18px]  text-[12px] text-[white] font-medium leading-[28px]">
                                    PRODUCTS
                                </div>
                            </div>
                            <div>
                                <div
                                    className="max-w-[336px] inline-block text-[white] md:text-[60px] text-[30px] leading-[86px] tracking-[-2.4px] font-bold mt-[30px]">
                                    {pageData.Data.softwareDevelopedCount}
                                </div>
                                <div className="md:text-[18px]  text-[12px] text-[white] font-medium leading-[28px]">
                                    SOFTWARES DEVELOPED
                                </div>
                            </div>
                            <div>
                                <div
                                    className="max-w-[336px] inline-block text-[white] md:text-[60px] text-[30px] leading-[86px] tracking-[-2.4px] font-bold mt-[30px]">
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
