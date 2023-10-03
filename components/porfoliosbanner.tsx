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
                className="max-w-[1377.5px] mx-auto md:pt-[150px] md:pb-[250px] pt-[100px] pb-[200px] xl:pt-[200px] xl:pb-[270px] 2xl:pt-[250px] 2xl:pb-[320px] ">
                <div className="flex md:justify-end justify-center items-center  flex-col md:items-end">
                    <div>

                        <div
                            className="md:text-[50px] text-[30px] font-bold  flex justify-end items-end md:text-start text-center text-[#151448]  max-w-[800px]">
                            {title}
                        </div>

                    </div>

                    <div className="flex mt-[80px]  md:mr-[250px]  lg:mr-[250px]    ">
                        <Img src={icon} alt="none" className="w-auto"/>
                    </div>

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
