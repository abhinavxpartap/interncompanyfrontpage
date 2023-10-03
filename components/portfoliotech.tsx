import React, {useContext, useEffect, useState} from 'react';
import {Img} from '../utils/Img';
import {Button} from '@mui/material';
import {useRouter} from 'next/router';
import {PortFolioInterfaces, TechHeader, TechSectionInterface} from "../types";
import {LoaderContext} from "../context/LoaderContext";

export const Portfoliotech: React.FC<PortFolioInterfaces> = (props) => {
    const {title,subtitle,image}=props;


    const content = (
        <>
            <div className="max-w-[1377.5px] mx-auto flex items-center justify-between   ">
                <div className="w-[100%] mx-auto flex flex-col text-center items-center justify-center ">
                    <h1 className="text-[#151448] font-bold text-[24px] md:text-[50px]">
                        {title} </h1>
                    <p className="text-[#747C85] max-w-[700px] font-medium text-[14px] md:text-[18px] pt-[10px] ">
                        {subtitle}</p>
                    <div className="w-[100%] flex items-center justify-center">
                        <div
                            className="w-[90%] pt-[60px]  justify-between gap-[50px]  grid grid-cols-3 md:grid-cols-6 text-start ">
                            {image.map((item:string, index: number) => (
                                <div
                                    key={index}
                                    className="w-[70px] mx-auto flex items-center jusitfy-center"
                                >
                                    <Img
                                        src={item}
                                        className="w-[100%] felx items-center justify-center"
                                        alt="none"
                                    />
                                </div>
                            ))}
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
