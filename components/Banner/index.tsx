import React from "react";
import { Button } from "../../utils/Button";
import { Img } from "../../utils/Img";
import Slider from "react-slick";
import { Header } from "../Common/Header";
import { useRouter } from "next/router";

export const Banner = (props: any) => {
    const { title, subtitle, image, button, ourClients, awesomeNumbers } = props;
    const router = useRouter();
    const settings = { 
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
    };

    return (
        <div
            style={{ backgroundImage: `url(${image})` }}
            className="bg-cover bg-center bg-no-repeat relative mx-[auto]"
        >
            <Header/>
            <div
                className="max-w-[1377.5px] mx-[auto] flex flex-col items-center justify-center md:pt-[320px] pt-[117px] pb-[71px] md:px-0 px-[20px]">
                <h1 className="text-[80px] text-[#FFFFFF] font-bold leading-[90px] md:leading-[90px] md:tracking-[-2.4px] max-w-[900px] text-center md:pb-[25px] pb-[18px]">
                    {title}
                </h1>
                <div
                    className="text-xl max-w-[1026px] font-medium text-[#FFFFFF] max-w-[1100px] xl:text-[23px] text-[16px] leading-[160%] tracking-[-0.68px] text-center pb-[30px] max-w-[667px]">
                    {subtitle}
                </div>
                <div>
                    <Button
                        label={button.title}
                        type="button"
                        onClick={() => router.push("/getStarted")}
                        className="xxl:text-[19px] bg-white xxl:leading-[22.99px] tracking-[-0.25px] font-semibold sm:text-[17px] text-[14px] sm:leading-[20.57px] leading-[14px] xxl:w-[238px] md:w-[200px] w-[160px] xxl:h-[63px] md:h-[48px] h-[42px]"
                    />
                </div>
                <div className="mt-[20px]">
                    <hr className="inline-block w-[22px] mb-[4px]" /><span className="text-[16px] text-[white]"> Web, IOS & Android </span>
                </div>
            </div>
        </div>
    );
};
