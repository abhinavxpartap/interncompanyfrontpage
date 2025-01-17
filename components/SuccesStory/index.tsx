import React from 'react';
import * as MUIMaterial from '@mui/material';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import SuccessStory from "../../data/common/SuccessStory.json";
import { useRouter } from 'next/router';
import {SuccessStoryInterface} from "../../types";
const CaseStudy = () => {
    const router = useRouter();
    return (
        <div>
            <div className="w-[90%]  relative md:px-[100px] pb-[38px] md:max-w-[1377.5px] overflow-hidden mx-auto">
                <div className="flex  flex-row">
                    <div>
                        <div className="text-[#151448] md:text-[40px] text-[30px] font-bold leading-[125%] mt-[13px] max-w-[451px]">{SuccessStory.bannerData.title}</div>
                        <div className="text[#4B5A69] text-[17px] mt-[13px] font-normal max-w-[552px] leading-[30px]">{SuccessStory.bannerData.subtitle}</div>
                    </div>

                </div>
                <div className="text-[#E8EDFF] -z-[1] text-[250px] max-w-[1440px] left-[500px] absolute font-medium leading-[70%] -tracking-[20px] bottom-[3px]">
Success                </div>
            </div>
            <div className="w-full h-full overflow-x-scroll scrollbar scroll whitespace-nowrap scroll-smooth flex flex-row max-w-[1377.5px] mx-auto">
                {SuccessStory.SuccessStory.map((SuccessStory:SuccessStoryInterface, index:number) => (
                    <div
                        key={index}
                        className=" max-w-[320px] md:max-w-[711px] md:h-[366px] bg-white  rounded-[20px] boxshad flex flex-row justify-between p-[10px] md:px-[23px] md:py-[20px] m-4"
                    >
                        <div className="md:w-[280px] md:h-[326px] inline-block rounded-[15px]">
                            <img src={SuccessStory.imgUrl} className="w-[100%] h-[100%] bg-cover" alt={SuccessStory.imgUrl} />
                        </div>
                        <div className='flex flex-col w-[350px] whitespace-break-spaces ml-[15px] md:ml-[30px]'>
                            <div className="text-[#151448] capitalize  text-[14px] leading-[20px] md:text-[20px] font-bold md:leading-[37.4px]">{SuccessStory.heading}</div>
                            <div className="text[#5A7184] text-[12px] leading-[18px] md:text-[16px] mt-[5px] font-normal md:leading-[26px]">{SuccessStory.description}</div>
                            <div className="text-[#151448] text-[14px] leading-[20px] mt-[30px] md:text-[20px] font-bold md:leading-[37.4px]">{SuccessStory.country}+</div>

                            <div className="text[#5A7184] text-[12px] leading-[18px] md:text-[16px]  font-normal md:leading-[26px]">{SuccessStory.subtitle}</div>
                            <div>
                                <MUIMaterial.Button
                                    sx={{
                                        backgroundColor: "transparent",
                                        border: "1px solid #5A7184",
                                        borderRadius: "20px",
                                        color: "#5A7184",
                                        fontSize: "12px",
                                        maxWidth: "115px",
                                        height: "35px",
                                        marginTop: "10px",
                                        '@media (min-width: 768px)': {
                                            marginTop: "18px",
                                        },
                                        textTransform: "capitalize",
                                        fontWeight: "bold",
                                        lineHeight: "150%",
                                    }}

                                    onClick={() => {
                                        router.push(`${SuccessStory.href}`);
                                    }}

                                >
                                    Learn more
                                    <span className="ml-[8px]">
                    <ArrowOutwardIcon sx={{
                        width:"12px",
                        height:"12px",
                        marginY:"auto",

                    }}
                    />
                  </span>
                                </MUIMaterial.Button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CaseStudy;
