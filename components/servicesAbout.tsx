import React from 'react';
import {Img} from '../utils/Img';
import {ServiceAboutInterface, ServiceAboutnewInterface} from "../types";

export const ServiceAbout: React.FC<ServiceAboutInterface> = (props) => {
    const {title, subtitle, paragraph, image} = props;

    const content = (
        <>
            <div
                className="max-w-[1377.5px] 2xl:max-w-[1650px] mx-auto flex flex-col  md:flex-row items-center justify-between pt-[80px] pb-[80px]">
                <div className=" w-[100%] md:w-[40vw] pb-[30px] sm:pb-[50px] md:pb-0">
                    <Img src={image} className="w-[100%]" alt={'AboutImage'}/>
                </div>
                <div
                    className="w-[90%] mx-auto md:mx-0 md:w-[50vw] md:pr-[12px] flex flex-col gap-[10px] sm:gap-[14px] md:gap-[10px] lg:gap-[12px] xl:gap-[14px] ">
                    <h1 className="text-[#151448] font-bold text-[20px] sm:text-[35px] md:text-[23px] lg:text-[30px] xl:text-[35px]">
                        {title}
                    </h1>
                    <p className="text-[#444444] font-medium text-[12px] leading-[17px] sm:leading-normal sm:text-[17px] md:text-[11px] lg:text-[14px] xl:text-[17px]">
                        {subtitle}
                    </p>
                    <p className="text-[#757B8A] font-normal text-[12px] leading-[20px] sm:text-[15px] sm:leading-[30px] md:text-[10px] md:leading-[18px] lg:text-[13px] lg:leading-[30px] xl:text-[15px] xl:leading-[30px] ">
                        {paragraph}
                    </p>
                    {/*{data.map((item, index) => (*/}
                    {/*    <p*/}
                    {/*        key={index}*/}
                    {/*        className="text-[#757B8A] font-normal text-[12px] leading-[20px] sm:text-[15px] sm:leading-[30px] md:text-[10px] md:leading-[18px] lg:text-[13px] lg:leading-[30px] xl:text-[15px] xl:leading-[30px]"*/}
                    {/*    >*/}
                    {/*        {item.title}*/}
                    {/*    </p>*/}
                    {/*))}*/}
                </div>
            </div>
        </>
    );
    return (
        <>
            <div
                style={{background: '#F9FBFF'}}
                className="bg-cover bg-center bg-no-repeat relative  block"
            >
                {content}
            </div>
        </>
    );
};
