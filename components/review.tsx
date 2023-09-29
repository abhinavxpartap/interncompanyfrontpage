import React from 'react';

import {ChallengesInterface, ReviewInterfaces,} from "../types";
import {Img} from "../utils/Img";

export const Review: React.FC<ReviewInterfaces> = (props) => {
    const {title, data,} = props;


    const content = (
        <>
            <div className="max-w-[1377.5px] py-[50px] mx-auto flex items-center justify-between   ">
                <div className="w-[100%] mx-auto flex flex-col text-center items-center justify-center ">
                    <h1 className="text-[#333333] font-bold text-[24px] md:text-[50px]">
                        {title}</h1>
                    <div className="w-[100%] flex items-center justify-center">
                        <div
                            className="w-[95%] pt-[60px] gap-[20px]  justify-center items-center grid grid-cols-1  md:grid-cols-3 text-start ">
                    {data.map((item, index) => (
                        <div key={index} className="bg-[#F3F3FF] justify-center max-w-[420px] min-h-[280px] p-[30px] rounded-2xl">
                            <div className="flex flex-col">
                                <div className="text-[18px] text-[#555555] font-normal text-start">
                                    {item.message}
                                </div>
                                <div className="flex mt-[30px] flex-row">
                                    <div>
                                        <Img src={item.image} alt="nn" className="w-auto" />
                                    </div>
                                    <div className="flex text-start ml-[20px] flex-col">
                                        <div className="text-[#151448] text-[14px] font-medium">
                                            — {item.name}
                                        </div>
                                        <div className="text-[#757B8A] text-[14px] font-normal">
                                            {item.company}{item.type && <span className="text-[16px] text-[#555555] font-semibold">({item.type})</span>}
                                        </div>
                                    </div>
                                </div>
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
