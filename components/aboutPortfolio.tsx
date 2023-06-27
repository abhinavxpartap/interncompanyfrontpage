import React from "react";
import {Img} from "../utils/Img";


export const AboutPortfolio: React.FC<any> = (props) => {
    const {title, subtitle, data} = props;

    const content = <>
        <div
            className="max-w-[1377.5px] relative top-[-25px] mx-auto "
        >
            <div className="w-[92%] px-[20px] pt-[10px] pb-[20px] mx-auto flex flex-col   bg-white rounded-[15px] border-2 ">
                <div className="flex md:flex-row md:gap-[80px] flex-col">
                    <div className="max-w-[650px]">
                        <h1 className="text-[30px] font-semibold">
                            About
                        </h1>
                        <p className="text-[15px] mt-[8px] text-[#757B8A] font-normal">
                            One of the most renowned fast-food restaurants globally, Pizza Hut operates under the
                            billion-dollar Americana Group in the UAE.
                        </p>
                        <p className="text-[15px] mt-[8px] leading-[25px] text-[#757B8A] font-normal">
                            As part of our Americana Group project to build 18 mobile apps for 5 of its brands in a
                            single year, we launched 2 Pizza Hut food delivery apps in 4 countries across the MENA
                            region – UAE, Egypt, Bahrain, and KSA. The apps for all locations feature excellent UI/UX
                            that allows users to navigate and order food in a few clicks effortlessly.
                        </p>
                    </div>
                    <div className="mt-[50px]">
                        <div className="flex md:gap-[120px] flex-row">
                            <div>
                                <h1 className="text-[16px] font-medium text-[#757B8A]">
                                Industry
                            </h1>
                                <p className="text-[14px] mt-[7px] font-normal text-[#177DF0]">
                                    Restaurant
                                </p></div>
                            <div>
                                <h1 className="text-[16px] font-medium text-[#757B8A]">
                                    Business Type </h1>
                                <p className="text-[14px]  mt-[7px] font-normal ">
                                    Enterprise
                                </p>
                            </div>
                        </div>
                        <div className="text-[16px] mt-[15px] font-medium text-[#757B8A]">
                            Services
                        </div>
                        <div className="text-[16px]  mt-[7px] font-normal ">
                            Design, Development, Support & Maintenance
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex mt-[40px] justify-between md:flex-row flex-col">
                <div>
                    <Img src="/m1.svg" alt="w" className="w-[340px]"/>

                </div> <div>
                <Img src="/m2.svg" alt="w" className="w-[340px]"/>

            </div> <div>
                <Img src="/m3.svg" alt="w" className="w-[340px]"/>

            </div> <div>
                <Img src="/m4.svg" alt="w" className="w-[340px]"/>

            </div>


            </div>
        </div>

    </>
    return (
        <>
            <div
                style={{background: "#F9FBFF"}}
                className="bg-cover bg-center bg-no-repeat relative  block"
            >
                {content}
            </div>
        </>
    );
};
