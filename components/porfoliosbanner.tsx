import React from 'react';
import {useRouter} from 'next/router';
import {Header} from './Common/Header';
import {PortFolioBannerInterface, ServiceBannerInterface} from "../types";
import {Img} from "../utils/Img";

export const PortFolios: React.FC<PortFolioBannerInterface> = (props) => {
    const {image, title, icon} = props;

    const router = useRouter();

    const content = (
        <>
            <Header/>
            <div
                className="max-w-[1377.5px] mx-auto md:pt-[150px] md:pb-[280px] pt-[100px] pb-[200px] xl:pt-[200px] xl:pb-[350px] 2xl:pt-[250px] 2xl:pb-[420px] ">
                <div className="flex justify-end  flex-col items-end">
                    <div className="md:text-[50px] text-[30px] font-bold text-black flex justify-end items-end text-start  max-w-[800px]">
                        {title}
                    </div>

                </div>
                <div className="flex justify-end  flex-col items-center">
                    <Img src={icon} alt="none"  className="w-auto"/>
                </div>



            </div>
        </>
    );
    return (
        <>
            <div
                style={{backgroundImage: `url(${image})`}}
                className="bg-cover bg-center bg-no-repeat relative  block"
            >
                {content}
            </div>
        </>
    );
};
