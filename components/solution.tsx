import React, {useContext, useEffect, useState} from 'react';
import {Img} from '../utils/Img';
import {Button} from '@mui/material';
import {useRouter} from 'next/router';
import {PortFolioInterfaces, SolutionInterfaces, TechHeader, TechSectionInterface} from "../types";
import {LoaderContext} from "../context/LoaderContext";

export const Solution: React.FC<SolutionInterfaces> = (props) => {
    const {title, subtitle, data} = props;


    const content = (
        <>
            <div className="max-w-[1377.5px] py-[50px] mx-auto flex items-center justify-between   ">
                <div className="w-[100%] mx-auto flex flex-col text-center items-center justify-center ">
                    <h1 className="text-[#333333] font-bold text-[24px] md:text-[50px]">
                        {title} </h1>
                    <p className="text-[#645C5C] max-w-[950px] font-normal text-[14px] md:text-[18px] pt-[10px] ">
                        {subtitle}</p>
                    <div className="w-[100%] flex items-center justify-center">
                        <div
                            className="w-[90%] pt-[60px]  justify-between gap-[50px]  grid grid-cols-1 md:grid-cols-3 text-start ">


                            {data.map((item, index) => (
                                <div className="flex justify-center items-center flex-row" key={index}>
                                    <div>
                                        <Img src={item.image} alt="none" className="w-auto" />
                                    </div>
                                    <div className="text-[21px]  text-start ml-[10px] text-[#645C5C]  max-w-[200px] font-medium">
                                        {item.title}
                                    </div>
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
