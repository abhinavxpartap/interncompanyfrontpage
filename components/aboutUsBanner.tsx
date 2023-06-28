import React from "react";
import {Button} from "@mui/material";
import {Img} from "../utils/Img";


export const AboutUsBanner: React.FC<any> = (props) => {
    const {image, mobileImage,title, subtitle } = props;

    const content = <>
        <div
            className="max-w-[1377.5px] mx-auto flex flex-col justify-center md:pt-[200px] xl:pt-[233px] xl:pb-[233px] pt-[117px] md:pb-[200px]  sm:px-[70px]  xl:px-[40px] 2xl:px-[20px] px-[16px]"
        >

            <h1 className=" font-bold text-[50px] leading-[65px] w-[600px]">
                {title}
            </h1>
            <p
                className="font-medium pt-[15px] text-[18px]  w-[550px]">
                {subtitle}
            </p>
           
        </div>
    </>
    return (
        <>
            <div
                style={{backgroundImage: `url(${image})`}}
                className="bg-cover bg-center bg-no-repeat relative  md:block hidden"
            >
                {content}
            </div>
            <div
                style={{backgroundImage: `url(${mobileImage})`}}
                className="bg-cover bg-center bg-no-repeat relative md:pb-[248px] md:hidden block"
            >
                {content}
            </div>
        </>
    );
};
