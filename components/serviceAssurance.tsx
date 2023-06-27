import React from "react";
import {Img} from "../utils/Img";
import {Button} from "@mui/material";


export const ServicesAssurance: React.FC<any> = (props) => {
    const {image} = props;

    const content = <>
        <div
            className="max-w-[1377.5px] flex items-center justify-between md:pt-[80px]  pt-[30px] pb-[30px] md:pb-[80px]"
        >
            <div className="w-[100%] px-[20px] flex flex-row text-start items-center justify-center ">
                <div className="w-[50vw]">
                    <h1 className="text-[white] text-[40px] font-bold ">Zuca’s Assurance as a Web App Development Company</h1>
                    <div className="flex flex-row gap-[10px] pt-[25px] items-start">
                        <div className="flex flex-row">
                        <Img src="/Approach.svg" className="w-[40px]" alt={"Icon"}/>
                        <div>
                            <h1 className="text-[18px] text-[white] font-semibold">A Quality-First Approach</h1>
                            <p className="text-[14px] pt-[5px] w-[90%] text-[white] font-normal">Our team is capable of delivering immersive web experiences, magnifying digital transformation</p>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="w-[50vw] flex justify-center items-center">
                    <Img src="/AssuranceImage.svg" className="w-[90%] h-[100%] rounded-[10px]" alt={"AssuranceImage"}/>
                </div>
            </div>
        </div>
    </>
    return (
        <>
            <div
                style={{backgroundImage: `url(${image})`}}
                className="bg-cover bg-center h-[720px]  bg-no-repeat relative  block"
            >
                {content}
            </div>
        </>
    );
};

