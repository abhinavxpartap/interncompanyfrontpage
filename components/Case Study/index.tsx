/* eslint-disable react/jsx-no-comment-textnodes */
import React, {useContext, useEffect, useRef, useState} from 'react';
import {Button} from '../../utils/Button';
import * as MUIMaterial from '@mui/material';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import {useRouter} from 'next/router';
import {caseStudyInterface,caseStudiesHeader} from "../../types";
import {Img} from '../../utils/Img';
import {LoaderContext} from "../../context/LoaderContext";

const CaseStudy = () => {
    const router = useRouter();
    const scrollContainerRef = useRef<HTMLDivElement | null>(null);
    const [scrollPosition, setScrollPosition] = useState<number>(0);
    const { setIsLoading } = useContext(LoaderContext);
    const [caseStudies, setPageData] = useState<caseStudyInterface>({
        bannerData:{
            title: '',
            subtitle: '',
            tagButton: '',
        },
        caseStudies:[]
    })


    useEffect(() => {
        setIsLoading(true);
        fetch("/api/common/GET/caseStudies")
            .then((response) => response.json())
            .then((data) => {
                setPageData(data);
                setIsLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching banner data:", error);
            });
    }, []);

    const handleScrollLeft = () => {
        const scrollContainer = scrollContainerRef.current;
        if (scrollContainer) {
            scrollContainer.scrollLeft -= 800;
            setScrollPosition(scrollContainer.scrollLeft);
        }
    };

    const handleScrollRight = () => {
        const scrollContainer = scrollContainerRef.current;
        if (scrollContainer) {
            scrollContainer.scrollLeft += 800;
            setScrollPosition(scrollContainer.scrollLeft);
        }
    };

    return (
        <div>
            <div
                className="w-[90%]  relative md:px-[100px] pt-[64px] pb-[38px] md:max-w-[1377.5px] overflow-hidden mx-auto">
                <div className="flex  flex-row">
                    <div>
                        <Button
                            label={caseStudies.bannerData.tagButton}
                            type="button"
                            className="max-w-[150px] px-[10px] py-[4px] bg-[#A1B4F7] text-[white] xxl:leading-[22.99px] tracking-[-0.25px] font-semibold sm:leading-[20.57px] leading-[14px] xxl:w-[238px] md:w-[200px] w-[160px] text-[12px] hover:text-[#A1B4F7]"
                        />
                        <div
                            className="text-[#151448] md:text-[40px] text-[30px] font-bold leading-[125%] mt-[13px] max-w-[551px]">
                            {caseStudies.bannerData.title}
                        </div>
                        <div
                            className="text-[#747C85] text-[16px] mt-[13px] font-medium max-w-[542px] leading-[30px]">
                            {caseStudies.bannerData.subtitle}
                        </div>
                    </div>
                    <div
                        className="flex flex-row gap-[20px]    justify-between w-[80px] h-[30px] md:w-[105px]  md:h-[50px] mt-[43px] ms-auto cursor-pointer">
                        <button onClick={handleScrollLeft}>
                            <Img src="/images/logo/arrowback.png" className="w-[45px] md:block hidden" alt="arrow"/>
                        </button>
                        <button onClick={handleScrollRight}>
                            <Img src="/images/logo/arrowforword.png" className="w-[45px] md:block hidden " alt="arrow"/>
                        </button>
                    </div>

                </div>
            </div>
            <div
                className="w-full  h-full scroll-container overflow-x-scroll scrollbar scroll whitespace-nowrap scroll-smooth flex flex-row max-w-[1377.5px] mx-auto"
                ref={scrollContainerRef}
            >
                {caseStudies.caseStudies.map((caseStudy:caseStudiesHeader, index: number) => (
                    <div

                        onClick={() => {
                            router.push(`${caseStudy.href}`);
                        }}

                        key={index}
                        className="max-w-[320px] md:max-w-[711px] md:h-[366px] bg-white  rounded-[20px] boxshad flex flex-row justify-between p-[10px] md:px-[23px] md:py-[20px] m-4 "

                    >
                        <div className="md:w-[280px] md:h-[326px] inline-block rounded-[15px]">
                            <img src={caseStudy.imgUrl} className="w-[100%] h-[100%] bg-cover" alt={caseStudy.org}/>
                        </div>
                        <div className='flex flex-col w-[350px] whitespace-break-spaces ml-[15px] md:ml-[30px]'>
                            <div
                                className="text-[#151448] text-[14px] leading-[20px] md:text-[20px] font-bold md:leading-[29.4px]">{caseStudy.heading}</div>
                            <div
                                className="text-[#8184EB] text-[14px] leading-[20px] md:text-[20px] font-bold md:leading-[37.4px] mt-[10px]">{caseStudy.org}</div>
                            <div
                                className="text-[#747C85] text-[12px] leading-[18px] md:text-[13px] mt-[5px] font-medium md:leading-[26px]">{caseStudy.description}</div>
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
                                            marginTop: "38px",
                                        },
                                        textTransform: "capitalize",
                                        fontWeight: "bold",
                                        lineHeight: "150%",
                                        transition: "background-color 0.3s, color 0.3s", // Add transition for smooth effect
                                        '&:hover': {
                                            backgroundColor: "#6E73FF",
                                            color: "#fff",
                                        },
                                    }}
                                    onClick={() => {
                                        router.push(`${caseStudy.href}`);
                                    }}
                                >
                                    Learn more
                                    <span className="ml-[8px]">
        <ArrowOutwardIcon sx={{
            width: "12px",
            height: "12px",
            marginY: "auto",
        }}/>
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
