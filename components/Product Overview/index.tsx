import React from 'react';
import 'react-multi-carousel/lib/styles.css';
import {Img} from '../../utils/Img';
import {ReasonInterface} from "../../types";


const ProductOverview: React.FC<ReasonInterface> = (props) => {
    const {backgroundImage, title, leftImage, reasonData, productCount, productText,WebCount, WebText, SoftwareCount, SoftwareText} = props;
    return (
        <div>
            <div className="bg-no-repeat  max-w-[1250px] mx-auto md:rounded-3xl bg-cover md:px-[75px] md:pt-[90px] md:pb-0 pt-[50px] pb-[20px] "
                 style={{backgroundImage: `url(${backgroundImage})`}}>
                <div className="max-w-[1077.5px]  mx-auto">
                    <div
                        className="flex flex-col  md:justify-start md:items-start justify-center items-center w-[100%] md:text-start text-center">

                        <div className="md:mb-[30px] items-center justify-between  flex md:flex-row flex-col">
                            <div className="max-w-[406px] inline-block  mx-auto">
                                <Img src={leftImage} alt="none" className="w-auto h-auto  pb-[30px] -z-[100]  "/>
                            </div>
                            <div className="max-w-[633px] mt-[-50px] z-[100] lg:ml-[100px] inline-block text-[white]  md:text-[20px] text-[16px] font-normal leading-[35px]">
                                <div>
                                    <div className="text-[35px] z-[100] leading-[50px] font-bold mb-[15px]">
                                        {title}
                                    </div>
                                    <div className="flex flex-wrap gap-[20px] my-[20px]">
                                        {reasonData.map((item,index) => (
                                            <div key={index}>
                                                <div className="flex flex-row gap-[10px] text-[18px] font-medium">
                                                    <span><Img src="/iconNew.png" className="w-[25px]" alt={"Icon"}/></span> {item.title}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="flex  md:w-[100%] w-[90%] mx-auto  flex-row  justify-between">
                                        <div>
                                            <div
                                                className="max-w-[306px] inline-block text-[white] md:text-[50px] text-[30px] leading-[86px] tracking-[-2.4px] font-bold ">
                                                {productCount}+
                                            </div>
                                            <div className="md:text-[18px]  text-[12px] text-[white]  md:font-medium font-normal   leading-[28px]">
                                                {productText}
                                            </div>
                                        </div>
                                        <div>
                                            <div
                                                className="max-w-[336px] inline-block text-[white] md:text-[50px] text-[30px] leading-[86px] tracking-[-2.4px] font-bold ">
                                                {WebCount}
                                            </div>
                                            <div className="md:text-[18px]  text-[12px] text-[white]  md:font-medium font-normal   leading-[28px]">
                                                {WebText}
                                            </div>
                                        </div>
                                        <div>
                                            <div className="max-w-[336px] inline-block text-[white] md:text-[50px] text-[30px] leading-[86px] tracking-[-2.4px] font-bold ">
                                                {SoftwareCount}
                                            </div>
                                            <div className="md:text-[18px]  text-[12px] text-[white] md:font-medium font-normal leading-[28px]">
                                                {SoftwareText}
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
