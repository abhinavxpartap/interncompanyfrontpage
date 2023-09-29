import React, {useContext, useEffect, useState} from 'react';
import {Img} from '../utils/Img';
import {Button} from '@mui/material';
import {useRouter} from 'next/router';
import {

    PortfolioIndustryInterface
} from "../types";
import {LoaderContext} from "../context/LoaderContext";

export const PortfolioIndustry: React.FC<PortfolioIndustryInterface> = (props) => {
    const {title, subtitle, data,} = props;


    const content = (
        <>
            <div className="max-w-[1377.5px] py-[50px] mx-auto flex items-center justify-between   ">
                <div className="w-[100%] mx-auto flex flex-col text-center items-center justify-center ">
                    <h1 className="text-[#333333] font-bold text-[24px] md:text-[50px]">
                        {title}</h1>
                    <p className="text-[#645C5C] max-w-[950px] font-normal text-[14px] md:text-[18px] pt-[10px] ">
                        {subtitle}</p>
                    <div className="w-[100%] flex items-center justify-center">
                        <div
                            className="w-[90%] pt-[60px]  justify-between gap-[50px]  grid grid-cols-1 md:grid-cols-3 text-start ">

                            {data.slice(0, 6).map((item, index) => (
                                <div key={index} className="flex flex-row">
                                    <div>
                                        <Img src={item.image} alt="industry" className="w-auto mt-[7px]"/>
                                    </div>
                                    <div className="flex ml-[10px] flex-col">
                                        <div className="text-[22px] font-semibold">{item.title}</div>
                                        <div className="ml-[20px]">
                                            <ul className="text-[#645C5C]" style={{listStyleType: 'disc'}}>
                                                {item.features.map((feature, featureIndex) => (
                                                    <li key={featureIndex}>{feature}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ))}


                        </div>

                    </div>

                    <div
                        className="md:w-[62%] w-[90%] pt-[90px]  justify-between   grid grid-cols-1 md:grid-cols-2 text-start ">

                        {data.slice(6, 8).map((item, index) => (
                            <div key={index} className="flex mt-[40px] flex-row">
                                <div>
                                    <Img src={item.image} alt="industry" className="w-auto mt-[7px]"/>
                                </div>
                                <div className="flex ml-[10px] flex-col">
                                    <div className="text-[22px] font-semibold">{item.title}</div>
                                    <div className="ml-[20px]">
                                        <ul className="text-[#645C5C]" style={{listStyleType: 'disc'}}>
                                            {item.features.map((feature, featureIndex) => (
                                                <li key={featureIndex}>{feature}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex md:flex-row flex-col">

                        <div className="md:w-[75%]  w-[90%] justify-between   flex flex-col text-start ">

                            {data.slice(8, 10).map((item, index) => (
                                <div key={index} className="flex mt-[70px] flex-row">
                                    <div>
                                        <Img src={item.image} alt="industry" className="w-auto mt-[7px]"/>
                                    </div>
                                    <div className="flex ml-[10px] flex-col">
                                        <div className="text-[22px] font-semibold">{item.title}</div>
                                        <div className="ml-[20px]">
                                            <ul className="text-[#645C5C]" style={{listStyleType: 'disc'}}>
                                                {item.features.map((feature, featureIndex) => (
                                                    <li key={featureIndex}>{feature}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="mt-[30px] ">
                            <Img src="/portfoliotech/indusgroup.svg" alt="" className="w-auto"/>

                        </div>

                    </div>


                </div>


            </div>
        </>
    );
    return (
        <>
            <div>{content}</div>
        </>
    );
};
