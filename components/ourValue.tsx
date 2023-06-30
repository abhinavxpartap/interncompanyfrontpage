import React from "react";
import {Button} from "@mui/material";
import {Img} from "../utils/Img";


export const OurValue: React.FC<any> = (props) => {
    const {image, mobileImage, title, subtitle} = props;

    const content = <>
        <div
            className="max-w-[1377.5px] p-[100px] mx-auto   "
        >
            <div>
                <div className="flex gap-[12px]  flex-row">
                    <div className="text-[28px] font-bold text-[#CFD3D7]">
                        01
                    </div>
                    <div>
                        <div className="text-[26px] font-bold ">

                            Customer Focus
                        </div>
                        <div className="text-[18px] mt-[8px] font-normal text-[#77808B] max-w-[460px] ">
                            We are focused on providing excellent customer service and a great user experience.
                        </div>
                    </div>
                </div>
                <div className="flex mt-[70px] flex-row">
                    <div>
                        <Img src="/ourvalue1.svg" alt="m" className="w-auto"/>
                    </div>
                    <div className="ml-[90px]">
                        <div className="flex gap-[12px]  flex-row">
                            <div className="text-[28px] font-bold text-[#CFD3D7]">
                                02
                            </div>
                            <div>
                                <div className="text-[26px] font-bold ">

                                    Ensure impactful innovations                                </div>
                                <div className="text-[18px] mt-[8px] font-normal text-[#77808B] max-w-[460px] ">
                                    An unwavering commitment to drive maximum customer satisfaction, infused with integrity and passion.                                </div>
                            </div>
                        </div>
                        <div className="flex gap-[12px] mt-[80px]  flex-row">
                            <div className="text-[28px] font-bold text-[#CFD3D7]">
                                03
                            </div>
                            <div>
                                <div className="text-[26px] font-bold ">

                                    Focus on self-development                                </div>
                                <div className="text-[18px] mt-[8px] font-normal text-[#77808B] max-w-[460px] ">
                                    Training and mentorship programs, interactive sessions and community meetups to drive personal growth.                                </div>
                            </div>
                        </div>

                    </div>



                </div>
                <div className="flex gap-[12px] mt-[80px]  flex-row">
                    <div className="text-[28px] font-bold text-[#CFD3D7]">
                        04
                    </div>
                    <div>
                        <div className="text-[26px] font-bold ">

                            Integrate work-life balance                        </div>
                        <div className="text-[18px] mt-[8px] font-normal text-[#77808B] max-w-[460px] ">
                            Latest infrastructure and flexible working hours along with many other privileges that inculcate healthy lifestyle choices.                        </div>
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
