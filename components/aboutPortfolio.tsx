import React from 'react';
import {Img} from '../utils/Img';
import {PizzaHutInfo} from "../types";

interface images {
    src:string
}
export const AboutPortfolio: React.FC<PizzaHutInfo> = (props) => {
    const {title, subtitle, industry, client, businessType, services, images} =
        props;

    const imageElements = images && images.length > 0 && images.map((imageUrl:images, index: number) => (
        <div key={index}>
            <Img src={imageUrl.src} alt={`Image ${index}`} className="w-auto h-auto"/>
        </div>
    ));


    const contentElement = (
        <div className="max-w-[1377.5px] relative top-[-25px] mx-auto">
            <div
                className="w-[94%]  px-[20px] pt-[10px] pb-[20px] mx-auto flex flex-col bg-white rounded-[15px] boxshad">
                <div className="text-[30px] text-[#05227D] font-semibold">{title}</div>

                <div className="flex md:flex-row md:gap-[80px] flex-col">
                    <div className="max-w-[650px]">
                        <p className="text-[15px] mt-[20px] text-[#757B8A] font-normal">
                            {subtitle}
                        </p>

                    </div>
                    <div className="mt-[20px]">
                        <div className="grid md:gap-[60px] gap-[30px] grid-cols-2 ">
                            <div>
                                <h1 className="text-[16px] font-medium text-[#757B8A]">
                                    Industry
                                </h1>
                                <p className="text-[14px] mt-[7px] font-normal text-[#8184EB]">
                                    {industry}
                                </p>
                            </div>
                            <div className="">
                                <h1 className="text-[16px] font-medium text-[#757B8A]">
                                    Business Type
                                </h1>
                                <p className="text-[14px] mt-[7px] font-normal ">
                                    {client}
                                </p>
                            </div>
                        </div>
                        <div className="grid md:gap-[60px] gap-[30px] grid-cols-2 ">
                            <div className="mt-[7px] ">
                                <h1 className="text-[16px] mt-[7px] font-medium text-[#757B8A]">
                                    Business Type
                                </h1>
                                <p className="text-[14px] mt-[7px] font-normal ">
                                    {businessType}
                                </p>
                            </div>
                            <div className="">
                                <div className="text-[16px] mt-[15px] font-medium text-[#757B8A]">
                                    Services
                                </div>
                                <div className="text-[14px] max-w-[200px] mt-[7px] font-normal ">{services}</div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className=" pt-[40px] grid md:grid-cols-4 mb-[50px] grid-cols-2 md:gap-[60px] gap-3  mx-auto w-[94%]  md:flex-row flex-col">

            {imageElements}
            </div>
        </div>
    );

    return (
        <div
            style={{background: '#F9FBFF'}}
            className="bg-cover bg-center bg-no-repeat relative block"
        >
            {contentElement}
        </div>
    );
};
