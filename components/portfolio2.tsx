import React from "react";
import {Button} from "@mui/material";
import {Img} from "../utils/Img";
import { Header } from "./Common/Header";


export const PortfolioBanner2: React.FC<any> = (props) => {
    const {image, mobileImage, title, subtitle} = props;

    const content = <>
        <div
            className="max-w-[1377.5px] mx-auto flex flex-col pt-[80px]  justify-center items-center"
        >
            <Header/>
            <div className=" ">
                <Img src="/portline.svg" alt="n"
                     className="lg:w-[320px] w-[280px] top-[125px] relative lg:top-[167px]      "/>

            </div>
            <div className=" ">
                <Img src="/portlogo.svg" alt="n"
                     className="w-auto relative lg:top-[40px] left-[150px] top-[20px]  lg:left-[190px]     "/>

            </div>
            <div className=" ">
                <Img src="/portdot.svg" alt="n" id="moving-item-5"
                     className="w-auto relative  md:block hidden moving-item     "/>

            </div>
            <div className=" ">
                <Img src="/portdot.svg" alt="n" id="moving-item-1"
                     className="w-auto relative  moving-item md:block hidden      "/>

            </div>
            <div className=" ">
                <Img src="/portdot.svg" alt="n" id="moving-item-3"
                     className="w-auto relative  md:block hidden moving-item      "/>

            </div>
            <div className=" ">
                <Img src="/greendot.svg" alt="n" id="moving-item-4"
                     className="w-auto relative  md:block hidden  moving-item     "/>

            </div>
            <div className=" ">
                <Img src="/greendot.svg" alt="n" id="moving-item-2"
                     className="w-auto relative   md:block hidden moving-item      "/>

            </div>

            <div>
                <div
                    className="md:text-[50px] text-[35px] max-w-[510px] md:text-start text-center relative  eleading-[63px] z-1 font-bold">Crafted
                    With Love.
                    Built
                    With Passion
                </div>

            </div>
            <div
                className="md:text-[18px] text-[15px] max-w-[570px]  md:text-start text-center md:ml-[60px] md:pb-[20px] mt-[12px]  font-medium">
                Zuca offers transformative technology and software solutions to startups, global brands & Fortune 500
                companies. Some of our major clients include IKEA, Domino's, Adidas, KPMG, BCG & Pizza Hut.
            </div>


        </div>
        <div className="max-w-[1440.5px] mx-auto">
            <div className="flex flex-col md:flex-row mt-[50px] md:mt-[110px]">
                <div className="w-full md:w-[450px] lg:w-[680px] xl:w-[800px] px-0">
                    <Img src="/portfolio1.svg" alt="n" className="w-[100%]"/>

                </div>
                <div className="flex flex-col px-[20px] md:px-0">
                    <div
                        className="relative w-[40vw] md:w-[150px] lg:w-[300px] xl:w-[340px] top-[-100px] left-[55%] lg:top-[40px] xl:top-[60px] md:top-[30px]  md:left-[-60px] lg:left-[-120px] xl:left-[-160px]">
                        <Img src="/phoneportfolio.svg" alt="n" className="w-[100%] "/>

                    </div>
                    <div
                        className="bg-white relative top-[-100px]  md:top-[20px] lg:top-[30px] xl:top-[80px] md:left-[-20px] lg:left-[-30px]  rounded-[15px] px-[25px] pt-[16px]  pb-[25px] md:w-[300px] lg:w-[380px] xl:w-[480px] boxshad">
                        <h1 className="text-[25px] md:text-[20px] lg:text-[25px] xl:text-[30px] font-semibold">
                            Pizza App
                        </h1>
                        <h1 className="text-[16px] md:text-[12px] xl:text-[16px] mt-[5px] font-medium">
                            Engaging users through a robust and visually appealing food delivery mobile app
                        </h1>
                        <p className="text-[14px] md:text-[10px] xl:text-[14px] pb-[10px] mt-[5px] font-normal text-[#757B8A]">
                            A research-led brainstorming, enhanced UI/UX & customized development approach transformed
                            the Pizza Hut app into a more efficient & smarter food delivery management system.
                        </p>
                        <button><a className="text-[16px] md:text-[12px] xl:text-[16px]  font-medium text-[#177DF0]">
                            View Case Study
                        </a></button>


                    </div>

                </div>
            </div>
            <div className="flex md:flex-row mt-[0px] md:mt-[110px] justify-end  flex-col-reverse">

                <div className="flex px-[20px] md:px-0 flex-col">
                    <div
                        className="relative w-[40vw] md:w-[250px] lg:w-[400px] xl:w-[600px] top-[-50px] left-[55%] md:top-[10px] md:left-[130px] xl:top-[30px]   lg:top-[20px]  lg:left-[100px] xl:left-[170px] ">
                        <Img src="/lid.svg" alt="n" className="[100%] "/>

                    </div>
                    <div
                        className="bg-white relative top-[-30px] md:top-[20px] lg:top-[70px]  md:left-[40px] lg:left-[80px] xl:top-[70px] xl:left-[170px]  rounded-[15px] px-[25px] pt-[16px]  pb-[25px] md:w-[300px] lg:w-[380px] xl:w-[480px] boxshad">
                        <h1 className="text-[25px] md:text-[20px] lg:text-[25px] xl:text-[30px] font-semibold">
                            Pizza App
                        </h1>
                        <h1 className="text-[16px] md:text-[12px] xl:text-[16px] mt-[5px] font-medium">
                            Engaging users through a robust and visually appealing food delivery mobile app
                        </h1>
                        <p className="text-[14px] md:text-[10px] xl:text-[14px] pb-[10px] mt-[5px] font-normal text-[#757B8A]">
                            A research-led brainstorming, enhanced UI/UX & customized development approach transformed
                            the Pizza Hut app into a more efficient & smarter food delivery management system.
                        </p>
                        <button><a className="text-[16px] md:text-[12px] xl:text-[16px]  font-medium text-[#177DF0]">
                            View Case Study
                        </a></button>


                    </div>

                </div>
                <div className="w-full md:w-[450px] lg:w-[680px] xl:w-[800px] px-0">
                    <Img src="/plane.svg" alt="n" className="w-[100%]"/>

                </div>

            </div>
            <div className="flex flex-col md:flex-row mt-[50px] md:mt-[110px]">
                <div className="w-full md:w-[450px] lg:w-[680px] xl:w-[800px] px-0">
                    <Img src="/portfolio1.svg" alt="n" className="w-[100%]"/>

                </div>
                <div className="flex flex-col px-[20px] md:px-0">
                    <div
                        className="relative w-[40vw] md:w-[150px] lg:w-[300px] xl:w-[340px] top-[-100px] left-[55%] lg:top-[40px] xl:top-[60px] md:top-[30px]  md:left-[-60px] lg:left-[-120px] xl:left-[-160px]">
                        <Img src="/phoneportfolio.svg" alt="n" className="w-[100%] "/>

                    </div>
                    <div
                        className="bg-white relative top-[-100px]  md:top-[20px] lg:top-[30px] xl:top-[80px] md:left-[-20px] lg:left-[-30px]  rounded-[15px] px-[25px] pt-[16px]  pb-[25px] md:w-[300px] lg:w-[380px] xl:w-[480px] boxshad">
                        <h1 className="text-[25px] md:text-[20px] lg:text-[25px] xl:text-[30px] font-semibold">
                            Pizza App
                        </h1>
                        <h1 className="text-[16px] md:text-[12px] xl:text-[16px] mt-[5px] font-medium">
                            Engaging users through a robust and visually appealing food delivery mobile app
                        </h1>
                        <p className="text-[14px] md:text-[10px] xl:text-[14px] pb-[10px] mt-[5px] font-normal text-[#757B8A]">
                            A research-led brainstorming, enhanced UI/UX & customized development approach transformed
                            the Pizza Hut app into a more efficient & smarter food delivery management system.
                        </p>
                        <button><a className="text-[16px] md:text-[12px] xl:text-[16px]  font-medium text-[#177DF0]">
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
                className="bg-cover bg-center bg-no-repeat pb-[50px] relative  "
            >
                {content}
            </div>

        </>
    );
};
