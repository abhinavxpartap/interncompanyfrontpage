import React from 'react';
import {Button} from '../../utils/Button';
import {Img} from '../../utils/Img';
import services from "../../data/HomePageService.json"

interface Interface {
    title:string,
    subtitle:string
}

const Service:React.FC<Interface> = (props) => {
    const {title, subtitle} = props;
    return (
        <div className="md:px-[30px] features-area relative flex flex-col items-center py-[40px] md:pt-[20px] text-center max-w-[1377.5px] overflow-hidden h-auto mx-auto">
            <Button
                label={services.bannerData.tagButtonName}
                type="button"
                className="max-w-[150px] uppercase px-[10px] py-[4px]   bg-[#A1B4F7] text-[white] xxl:leading-[22.99px] tracking-[-0.25px] font-semibold sm:leading-[20.57px] leading-[14px] xxl:w-[238px] md:w-[200px] w-[160px] text-[12px] hover:text-[#A1B4F7]"
            />
            <div
                className="text-[#151448] md:text-[40px] text-[24px]  font-bold leading-[125%] mt-[13px] max-w-[641px]">
                {title}
            </div>
            <div className="text-[#747C85] text-[18px] mt-[13px] font-medium max-w-[742px] leading-[170%]">
                {subtitle}
            </div>
            <div className="pt-[60px] md:px-0 px-[20px] gap-[35px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-start ">
                {services.header.map((service, index: number) => {
                    return (
                        <div
                            key={index}
                            className="bg-[#ffffff]  px-[20px] pt-[20px] rounded-[12px] social-icon:hover social-icon "
                            style={{
                                boxShadow:
                                    'rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px',
                            }}
                        >
                            <div className="flex justify-start items-center">
                                <Img src={service.image.src} className=" w-[45px]" alt={service.image.alt}/>
                            </div>

                            <h1 className="text-[20px]   lg:text-[15px]   xl:text-[21px] pt-[15px] font-semibold text-[#333333]">
                                {service.title}
                            </h1>

                            <p className="  pt-[5px]  pb-[17px]  text-[#757B8A] text-[16px] lg:text-[12px] xl:text-[14px] font-normal">
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
