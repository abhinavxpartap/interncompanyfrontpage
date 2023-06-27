import React from "react";
import {Button} from "@mui/material";
import {Img} from "../utils/Img";


export const ServiceBanner: React.FC<any> = (props) => {
        const {image, mobileImage } = props;

    const content = <>
        <div
            className="max-w-[1377.5px] ServiceHero mx-auto flex flex-col justify-center md:pt-[238px] pt-[117px] pb-[71px] sm:px-[70px]  xl:px-[40px] 2xl:px-[20px] px-[16px]"
        >

            <h1 className="text-center md:text-start font-semibold text-[#101D2C] xxl:text-[53px] xl:text-[53px] lg:text-[40px] md:text-[30px] sm:text-[30px] text-[17px] xxl:leading-[65px] xl:leading-[60px] lg:leading-[48px] md:leading-[45px] sm:leading-[38px] leading-[25px] md:tracking-[-1.55px] pb-[14px] mx-auto md:m-0">
                Discover the <br/>Top-Rated Company Specialising <br/>in ERP Development
            </h1>
            <div
                className="font-normal  text-center md:text-start text-[#101D2C] xxl:text-[23px] lg:text-[18px] md:text-[16px] sm:text-[15px] text-[10px] xxl:leading-[34px] xl:leading-[33px] lg:leading-[28px] md:leading-[30px] sm:leading-[23px] leading-[15px] tracking-[-0.68px] pb-[18px] md:pb-[40px] mx-auto md:m-0">
                We connect you with the right ERP software development <br/> firm in India from a vast pool of
                companies.
            </div>
            <div className="flex justify-center items-center md:justify-start">
                <Button>
                    Book a free consultation
                </Button>
            </div>
        </div>
    </>
    return (
        <>
            <div
                style={{backgroundImage: `url(${image})`}}
                className="bg-cover bg-center bg-no-repeat relative md:pb-[108px] md:block hidden"
            >
                {content}
            </div>
            <div
                style={{backgroundImage: `url(${mobileImage})`}}
                className="bg-[330px_auto] sm:bg-[500px_auto] bg-center bg-no-repeat relative md:pb-[248px] md:hidden block"
            >
                {content}
            </div>
        </>
    );
};
