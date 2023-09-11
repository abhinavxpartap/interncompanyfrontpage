import React, {useState} from 'react';
import {Button} from '../../utils/Button';
import * as MUIMaterial from '@mui/material';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import caseStudies from "../../data/common/CaseStudy.json";
import {useRouter} from 'next/router';
import {CaseStudyInterface} from "../../types";
import {Img} from '../../utils/Img';

const CaseStudy = () => {
    const router = useRouter();
    const [currentSlide, setCurrentSlide] = useState(0);
    const handleSlideBack = () => {
        if (currentSlide > 0) {
            setCurrentSlide(currentSlide - 1);
            console.log('Back button clicked. New currentSlide:', currentSlide - 1);
        }
    };

    const handleSlideForward = () => {
        if (currentSlide < caseStudies.caseStudies.length - 1) {
            setCurrentSlide(currentSlide + 1);
            console.log('Forward button clicked. New currentSlide:', currentSlide + 1);
        }
    };

    return (
        <div>
            <div
                className="w-[90%]  relative md:px-[100px] pt-[64px] pb-[38px] md:max-w-[1377.5px] overflow-hidden mx-auto">
                <div className="flex  flex-row">
                    <div>
                        <Button
                            label={'AMAZING ANALYSIS'}
                            type="button"
                            className="max-w-[150px] px-[10px] py-[4px] bg-[#A1B4F7] text-[white] xxl:leading-[22.99px] tracking-[-0.25px] font-semibold sm:leading-[20.57px] leading-[14px] xxl:w-[238px] md:w-[200px] w-[160px] text-[12px] hover:text-[#A1B4F7]"
                        />
                        <div
                            className="text-[#151448] md:text-[40px] text-[30px] font-bold leading-[125%] mt-[13px] max-w-[451px]">Case
                            Studies
                        </div>
                        <div
                            className="text-[#747C85] text-[16px] mt-[13px] font-medium max-w-[502px] leading-[30px]">Fusce
                            placerat pretium mauris, vel sollicitudin elit lacinia vitae. Quisque sit amet nisi erat.
                        </div>
                    </div>
                    <div
                        className="flex flex-row  justify-between w-[80px] h-[30px] md:w-[105px]  md:h-[50px] mt-[43px] ms-auto cursor-pointer">
                        <button onClick={handleSlideBack}>
                            <Img src="/images/logo/arrowback.png" className="w-[45px]" alt="arrow"/>
                        </button>
                        <button onClick={handleSlideForward}>
                            <Img src="/images/logo/arrowforword.png" className="w-[45px]" alt="arrow"/>
                        </button>
                    </div>
                </div>
                <div
                    className="text-[#E8EDFF] -z-[1] lg:text-[250px] text-[130px] w-[470px] lg:w-[1440px] lg:left-[370px] left-[2px] absolute font-medium leading-[70%] -tracking-[20px] bottom-[3px]">
                    case studY
                </div>
            </div>
            <div
                className="w-full h-full overflow-x-scroll scrollbar scroll whitespace-nowrap scroll-smooth flex flex-row max-w-[1377.5px] mx-auto">
                {caseStudies.caseStudies.map((caseStudy: CaseStudyInterface, index: number) => (
                    <div
                        key={index}
                        className={`max-w-[320px] md:max-w-[711px] md:h-[366px] bg-white  rounded-[20px] boxshad flex flex-row justify-between p-[10px] md:px-[23px] md:py-[20px] m-4 ${
                            index === currentSlide ? 'active-slide' : '' 
                        }`}
                    >
                        <div className="md:w-[280px] md:h-[326px] inline-block rounded-[15px]">
                            <img src={caseStudy.imgUrl} className="w-[100%] h-[100%] bg-cover" alt={caseStudy.imgUrl}/>
                        </div>
                        <div className='flex flex-col w-[350px] whitespace-break-spaces ml-[15px] md:ml-[30px]'>
                            <div
                                className="text-[#151448] text-[14px] leading-[20px] md:text-[20px] font-bold md:leading-[37.4px]">{caseStudy.heading}</div>
                            <div
                                className="text-[#8184EB] text-[14px] leading-[20px] md:text-[20px] font-bold md:leading-[37.4px] mt-[10px]">{caseStudy.org}</div>
                            <div
                                className="text-[#747C85] text-[12px] leading-[18px] md:text-[16px] mt-[5px] font-medium md:leading-[26px]">{caseStudy.description}</div>
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
                                    }}

                                    onClick={() => {
                                        router.push(`${caseStudy.href}`);
                                    }}

                                >
                                    Learn more
                                    <span className="ml-[8px]">
                    <ArrowOutwardIcon className="w-[12px] h-[12px] my-[auto]"/>
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
