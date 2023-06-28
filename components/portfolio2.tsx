import React from "react";
import {Button} from "@mui/material";
import {Img} from "../utils/Img";


export const PortfolioBanner2: React.FC<any> = (props) => {
    const {image, mobileImage, title, subtitle} = props;

    const content = <>
        <div
            className="max-w-[1377.5px] mx-auto flex flex-col  justify-center items-center"
        >
            <div>
                <div className="text-[50px] max-w-[510px] mt-[120px] leading-[63px] font-bold">Crafted With Love. Built
                    With Passion
                </div>
            </div>
            <div className="text-[18px] max-w-[570px] md:ml-[60px] pb-[120px] mt-[12px]  font-medium">
                Zuca offers transformative technology and software solutions to startups, global brands & Fortune 500
                companies. Some of our major clients include IKEA, Domino's, Adidas, KPMG, BCG & Pizza Hut.
            </div>


        </div>
        <div className="max-w-[1377.5px] mx-auto">
            <div className="flex md:flex-row  flex-col">
                <div>
                    <Img src="/portfolio1.svg" alt="n" className="w-auto"/>

                </div>
                <div className="flex  flex-col">
                    <div className="relative top-[60px]  left-[-160px]">
                        <Img src="/phoneportfolio.svg" alt="n" className="w-auto h-[397px]"/>

                    </div>
                    <div
                        className="bg-white relative top-[50px] left-[-30px]  rounded-[15px] px-[25px] pt-[16px]  pb-[25px] w-[480px] border-2">
                        <h1 className="text-[30px] font-semibold">
                            Pizza App
                        </h1>
                        <h1 className="text-[16px] mt-[5px] font-medium">
                            Engaging users through a robust and visually appealing food delivery mobile app
                        </h1>
                        <p className="text-[14px] pb-[10px] mt-[5px] font-normal text-[#757B8A]">
                            A research-led brainstorming, enhanced UI/UX & customized development approach transformed
                            the Pizza Hut app into a more efficient & smarter food delivery management system.
                        </p>
                        <button><a className="text-[16px]  font-medium text-[#177DF0]">
                            View Case Study
                        </a></button>


                    </div>

                </div>

            </div>
            <div className="flex md:flex-row mt-[110px] justify-end  flex-col">

                <div className="flex  flex-col">
                    <div className="relative top-[60px] left-[130px]">
                        <Img src="/lid.svg" alt="n" className="w-full "/>

                    </div>
                    <div
                        className="bg-white relative top-[80px] left-[110px]  rounded-[15px] px-[25px] pt-[16px]  pb-[25px] w-[480px] border-2">
                        <h1 className="text-[30px] font-semibold">
                            Pizza App
                        </h1>
                        <h1 className="text-[16px] mt-[5px] font-medium">
                            Engaging users through a robust and visually appealing food delivery mobile app
                        </h1>
                        <p className="text-[14px] pb-[10px] mt-[5px] font-normal text-[#757B8A]">
                            A research-led brainstorming, enhanced UI/UX & customized development approach transformed
                            the Pizza Hut app into a more efficient & smarter food delivery management system.
                        </p>
                        <button><a className="text-[16px]  font-medium text-[#177DF0]">
                            View Case Study
                        </a></button>


                    </div>

                </div>
                <div>
                    <Img src="/plane.svg" alt="n" className="w-full"/>

                </div>

            </div>
            <div className="flex md:flex-row mt-[110px]  flex-col">
                <div>
                    <Img src="/portfolio1.svg" alt="n" className="w-auto"/>

                </div>
                <div className="flex  flex-col">
                    <div className="relative top-[60px]  left-[-160px]">
                        <Img src="/phoneportfolio.svg" alt="n" className="w-auto h-[397px]"/>

                    </div>
                    <div
                        className="bg-white relative top-[50px] left-[-30px]  rounded-[15px] px-[25px] pt-[16px]  pb-[25px] w-[480px] border-2">
                        <h1 className="text-[30px] font-semibold">
                            Pizza App
                        </h1>
                        <h1 className="text-[16px] mt-[5px] font-medium">
                            Engaging users through a robust and visually appealing food delivery mobile app
                        </h1>
                        <p className="text-[14px] pb-[10px] mt-[5px] font-normal text-[#757B8A]">
                            A research-led brainstorming, enhanced UI/UX & customized development approach transformed
                            the Pizza Hut app into a more efficient & smarter food delivery management system.
                        </p>
                        <button><a className="text-[16px]  font-medium text-[#177DF0]">
                            View Case Study
                        </a></button>


                    </div>

                </div>
            </div>

        </div>
    </>
    return (
        <>
            <div
                style={{background: "#F9FBFF"}}
                className="bg-cover bg-center bg-no-repeat relative  "
            >
                {content}
            </div>

        </>
    );
};
