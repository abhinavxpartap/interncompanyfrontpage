import React from 'react';

import {
    ChallengesInterface,

} from "../types";
import {Img} from "../utils/Img";

export const Challenges: React.FC<ChallengesInterface> = (props) => {
    const {title, subtitle, data,} = props;


    const content = (
        <>
            <div className="max-w-[1377.5px] pt-[50px] mx-auto flex items-center justify-between   ">
                <div className="w-[100%] mx-auto flex flex-col text-center items-center justify-center ">
                    <h1 className="text-[#333333] font-bold text-[24px] md:text-[50px]">
                        {title}</h1>
                    <p className="text-[#645C5C] max-w-[950px] font-normal text-[14px] md:text-[18px] pt-[10px] ">{subtitle}</p>


                    <div className="w-[100%] flex items-center justify-center">
                        <div
                            className="w-[90%] pt-[60px]  md:justify-between gap-[50px]  md:grid flex flex-col justify-center items-center  md:grid-cols-2 text-start ">
                            {data.slice(0, 6).map((item, index) => (

                                <div className="flex flex-row">

                                    <div className="text-[24px] font-bold text-[#CFD3D7]">
                                        {item.number}
                                    </div>
                                    <div className="flex ml-[12px] mt-[3px] flex-col">
                                        <div className="text-[22px] font-medium ">
                                            {item.title}                                    </div>
                                        <div className="text-[16px] max-w-[400px] font-normal ">
                                            {item.features}
                                        </div>

                                    </div>


                                </div>
                            ))}
                        </div>


                    </div>
                    <div className="w-[90%] mx-auto flex md:flex-row flex-col items-center justify-center">
                        <div
                            className="w-[100%] mx-auto pt-[60px] justify-center items-center  text-start ">
                            {data.slice(6, 9).map((item, index) => (

                                <div className="flex mb-[50px] flex-row">

                                    <div className="text-[24px] font-bold text-[#CFD3D7]">
                                        {item.number}
                                    </div>
                                    <div className="flex ml-[12px] mt-[3px] flex-col">
                                        <div className="text-[22px] font-medium ">
                                            {item.title}                                    </div>
                                        <div className="text-[16px] max-w-[400px] font-normal ">
                                            {item.features}
                                        </div>

                                    </div>


                                </div>
                            ))}
                        </div>
                        <div>
                            <Img src="/portfoliotech/challenges.svg" alt="none" className="w-auto lg:mr-[550px] md:mr-[200px] 2xl:mr-[750px]"/>
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
