import React from "react";
import {Button} from "@mui/material";
import {Img} from "../utils/Img";


export const WhatWeAre: React.FC<any> = (props) => {
    const {image, title, subtitle} = props;

    const content = <>
        <div
            className="max-w-[1441.5px] pb-[150px] px-[100px] mx-auto   "
        >
            <div>
                <div>
                    <Img src="/aboutus.svg" alt="aboutus" className="w-[600px] -z-0 relative top-[150px] left-[-100px]   top-[80px]"/>
                </div>
                <div>
                    <Img src="/Line2.svg" alt="aboutus" className="w-auto -z-0 relative top-[70px] left-[0px]   top-[80px]"/>
                </div>
                <div className="flex md:flex-row justify-between w-full flex-col">
                    <div className="text-[50px] z-0 font-bold">
                        Who We Are?
                    </div>

                    <div className="bg-white rounded-[12px]    p-[15px] border-2">
                        <div className="text-[18px] font-normal text-[#333] max-w-[550px]">We are believers of change! A
                            change driven by technology and innovation. We help businesses and
                            individuals in adapting as well as adopting digital transformation. Our aim is to change
                            people’s lives and improve businesses with our progressive and innovative technology
                            solutions
                        </div>


                    </div>

                </div>
                <div>
                    <Img src="/Line2.svg" alt="aboutus" className="w-auto -z-0 relative top-[105px] left-[10px]   top-[80px]"/>
                </div>
                <div className="flex md:flex-row justify-between mt-[35px] w-full flex-col">
                    <div className="text-[50px] font-bold">
                        What We Do Best?
                    </div>
                    <div className="bg-white rounded-[12px]    p-[15px] border-2">
                        <div className="text-[18px] font-normal text-[#333] max-w-[550px]">We start by listening to the
                            issues, requirements, challenges and objectives. The process continues with an effort to
                            understand the business, market sector and competitors to develop information which is
                            combined with our technical knowledge, expertise and research in order to provide the best
                            solution at the lowest cost.
                        </div>


                    </div>

                </div>


            </div>


        </div>
    </>
    return (
        <>
            <div
                style={{background: "#F9FBFF"}}
                className="bg-cover bg-center bg-no-repeat relative  md:block hidden"
            >
                {content}
            </div>

        </>
    );
};
