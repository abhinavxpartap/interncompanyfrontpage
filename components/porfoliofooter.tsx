import React from 'react';
import {useRouter} from 'next/router';
import {Header} from './Common/Header';
import {PortFolioFooterInterface} from "../types";
import {Img} from "../utils/Img";

export const Porfoliofooter: React.FC<PortFolioFooterInterface> = (props) => {
    const {image, title, link, address, linkedIn, contact, email, subtitle} = props;

    const router = useRouter();
    const displayLink = link.replace(/^https:\/\//, '');

    const content = (
        <>
            <Header/>
            <div
                className="max-w-[1377.5px] mx-auto md:pt-[100px]  pt-[50px] pb-[40px] xl:pt-[100px] ] 2xl:pt-[150px] ">
                <div className="flex  justify-center items-center  flex-col">
                    <div>

                        <div
                            className="md:text-[50px] text-[30px] font-bold text-white flex  text-center  max-w-[800px]">
                            {title}
                        </div>
                        <div
                            className="md:text-[24px] text-[20px] font-normal mt-[20px] text-white flex  text-center  max-w-[800px]">
                            {subtitle}
                        </div>
                        <div className="flex justify-center items-center">
                            <a
                                href={email}
                                className="text-decoration-none"
                            >
                                <button
                                    className="bg-[#FFA41C] md:min-w-[90px] min-w-[70px] mt-[20px] text-[#000000] text-[18px] px-[12px] font-bold py-[8px] rounded-[20px] hover:bg-[#FFA41C]  border-1 focus:outline-none focus:ring hover:text-white hover:border-white transition-all duration-200"
                                >
                                    Discuss My Project
                                </button>
                            </a>

                        </div>
                        <div
                            className="flex mt-[15px] md:mt-[30px] justify-center text-[24px] font-bold text-white items-center">
                            <a
                                href={link}
                                className="text-decoration-none"
                            >
                                <button> www.alumeltech.com
                                </button>
                            </a>

                        </div>

                    </div>



                </div>
            </div>
        </>
    );
    return (
        <>
            <div
                style={{backgroundImage: `url(${image})`}}
                className="bg-cover bg-center bg-no-repeat relative  block"
            >
                {content}
            </div>
        </>
    );
};
