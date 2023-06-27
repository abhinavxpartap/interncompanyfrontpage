import React from "react";
import { BannerInterface } from "../../types";
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
            className="bg-cover bg-center bg-no-repeat relative md:pb-[248px] "
        >
            <Header/>
            <div
                className="md:max-w-[848px] mx-auto flex flex-col items-center justify-center md:pt-[320px] pt-[117px] pb-[71px] md:px-0 px-[20px]">
                <h1 className="font-semibold text-[#FFFFFF] xxl:text-[53px] xl:text-[53px] sm:text-[30px] text-[25px] xl:leading-[53px] md:leading-[56px] leading-[40px] md:tracking-[-1.55px] text-center md:pb-[25px] pb-[18px]">
                    {title}
                </h1>
                <div
                    className="font-normal text-[#FFFFFF] xl:text-[23px] text-[16px] xl:leading-[36px] leading-[28px] tracking-[-0.68px] text-center pb-[30px] max-w-[667px]">
                    {subtitle}
                </div>
                <div>
                    <Button
                        label={button.title}
                        type="button"
                        onClick={() => router.push("/getStarted")}
                        className="xxl:text-[19px] xxl:leading-[22.99px] tracking-[-0.25px] font-semibold sm:text-[17px] text-[14px] sm:leading-[20.57px] leading-[14px] xxl:w-[238px] md:w-[200px] w-[160px] xxl:h-[63px] md:h-[48px] h-[42px]"
                    />
                </div>
            </div>
            <div
                className="flex md:flex-row flex-col md:gap-[67px] gap-[56px] pb-[121px] md:max-w-[865px] max-w-[498.83px] sm:p-[0] px-[40px] mx-auto">
                <div className="flex-1 w-full md:max-w-[50%]">
                    <div className="flex flex-col">
                        <h2 className="font-semibold text-[#FFFFFF] text-[17px] leading-[27px] tracking-[-0.24px] pb-[24px] md:text-left text-center">
                            Clients that Trust Us
                        </h2>
                        <div className="flex">
                            <Slider {...settings}>
                                {ourClients?.map((row: any, index: any) => {
                                    return (
                                        <div key={index}>
                                            <Img
                                                src={row.image || ""}
                                                alt="client"
                                                className="w-auto h-[35px] pr-[20px]"
                                            />
                                        </div>
                                    );
                                })}
                            </Slider>
                        </div>
                    </div>
                </div>
                <div className="flex-1 w-full md:max-w-[50%]">
                    <div className="flex flex-col">
                        <h2 className="font-semibold text-[#FFFFFF] text-[17px] leading-[27px] tracking-[-0.24px] pb-[24px] md:text-left text-center">
                            Our Awesome Numbers
                        </h2>
                        <div className="flex awesome-number">
                            <Slider {...settings}>
                                {awesomeNumbers?.map((awesomeNumber: any, index: any) => {
                                    return (
                                        <div key={index}>
                                            <h3 className="font-bold sm:text-[29px] text-[24px] leading-[27px] tracking-[-0.88px] text-primaryAccent">
                                                {awesomeNumber.number}
                                            </h3>
                                            <div
                                                className="font-semibold sm:text-[16px] text-[13px] leading-[22px] tracking-[-0.32px] text-primaryAccent">
                                                {awesomeNumber.title}
                                            </div>
                                        </div>
                                    );
                                })}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
