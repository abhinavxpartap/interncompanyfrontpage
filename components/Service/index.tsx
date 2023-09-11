import React from 'react';
import {Button} from '../../utils/Button';
import {Img} from '../../utils/Img';
import services from "../../data/HomePageService.json"

const Service = () => {

    return (
        <div
            className="md:px-[100px] features-area relative flex flex-col items-center py-[40px] pt-[80px] text-center max-w-[1377.5px] overflow-hidden h-auto mx-auto">
            <Button
                label={'WHAT WE DO?'}
                type="button"
                className="max-w-[150px] px-[10px] py-[4px]   bg-[#A1B4F7] text-[white] xxl:leading-[22.99px] tracking-[-0.25px] font-semibold sm:leading-[20.57px] leading-[14px] xxl:w-[238px] md:w-[200px] w-[160px] text-[12px] hover:text-[#A1B4F7]"
            />
            <div
                className="text-[#151448] md:text-[40px] text-[24px]  font-bold leading-[125%] mt-[13px] max-w-[541px]">
                {services.bannerData.title}
            </div>
            <div className="text-[#747C85] text-[18px] mt-[13px] font-medium max-w-[612px] leading-[170%]">
                {services.bannerData.subtitle}
            </div>
            <div className="pt-[60px] gap-[35px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-start ">
                {services.header.map((service, index: number) => {
                    return (
                        <div
                            key={index}
                            className="bg-[#ffffff]  social-icon:hover social-icon  px-[20px] pt-[20px] rounded-[12px]"
                            style={{
                                boxShadow:
                                    'rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px',
                            }}
                        >
                            <div className="flex justify-center items-center">
                                <Img src={service.image.src} className=" relative top-[-50px] w-[45px]" alt={service.image.alt}/>
                            </div>
                            <h1 className="text-[20px] relative top-[-50px]  lg:text-[15px] text-center xl:text-[20px] pt-[15px] font-semibold text-[#042552]">
                                {service.title}
                            </h1>
                            <p className="  text-center relative top-[-50px] text-[16px] lg:text-[18px]  font-semibold text-[#042552]">
                                {service.subtitle}
                            </p>
                            <p className=" pr-[10px] pt-[5px] relative top-[-50px] text-center text-[#757B8A] text-[16px] lg:text-[12px] xl:text-[16px] font-normal">
                                {service.description}
                            </p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Service;
