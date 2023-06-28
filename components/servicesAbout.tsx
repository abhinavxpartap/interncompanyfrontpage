import React from "react";
import {Button} from "@mui/material";
import {Img} from "../utils/Img";


export const ServiceAbout: React.FC<any> = (props) => {
    const {title,subtitle,paragraph,image } = props;

    const content = <>
        <div
            className="max-w-[1377.5px] mx-auto flex flex-row items-center justify-between md:pt-[80px]  pt-[30px] pb-[30px] md:pb-[80px]"
        >
            <div className="w-[40vw]">
                <Img src={image} className="w-[100%]" alt={"AboutImage"}/>
            </div>
            <div className="w-[50vw] pr-[12px] flex flex-col gap-[14px] ">
                <h1 className="text-[#151448] font-bold text-[35px]">{title}</h1>
                <p className="text-[#444444] font-medium text-[17px]">{subtitle}</p>
                <p className="text-[#757B8A] font-normal text-[15px] leading-[30px] ">{paragraph}</p>
            </div>
        </div>
    </>
    return (
        <>
            <div
                style={{background:"#F9FBFF"}}
                className="bg-cover bg-center bg-no-repeat relative  block"
            >
                {content}
            </div>
        </>
    );
};
