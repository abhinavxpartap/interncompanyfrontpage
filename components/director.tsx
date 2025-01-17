import React from 'react';
import {Button} from '@mui/material';
import {Img} from '../utils/Img';
import {DirectorInterface} from "../types";

export const Director: React.FC<DirectorInterface> = (props) => {
    const {image, mobileImage, name, post, company, address, message, icon} =
        props;

    const content = (
        <>
            <div
                className="max-w-[1377.5px] mx-auto flex flex-col justify-center md:pt-[150px] xl:pt-[130px] xl:pb-[114px] pt-[117px] md:pb-[200px]  sm:px-[70px]  xl:px-[40px] 2xl:px-[20px] px-[16px]">
                <div
                    className="flex md:flex-row md:ml-[80px] md:gap-[90px] md:justify-normal items-center justify-center   text-center flex-col">
                    <div>
                        <div className="  w-[140px] justify-center items-center mx-auto rounded-full ">
                            <Img src={icon} alt="w" className="w-auto rounded-full"/>
                        </div>
                        <div className="text-[20px] font-bold text-white">{name}</div>
                        <div className="text-[17px] mt-[10px] font-bold text-white">
                            {post}
                        </div>
                        <div className="text-[17px] font-bold text-white">{company}</div>
                        <div className="text-[17px] font-bold text-white">{address}</div>
                    </div>
                    <div className="flex flex-col">
                        <div
                            className="max-w-[750px]  leading-[30px]  text-white md:text-[18px] text-[15px] font-medium">
                            <div>
                                <Img src="/images/logo/q1.png" alt="none" className="w-[14px]"/>
                            </div>
                            <div>
                                {message}
                            </div>
                            <div className="flex justify-end items-end  relative top-[-28px] right-[18px] text-end">
                                <Img src="/images/logo/q2.png" alt="none"
                                     className="w-[15px] justify-end items-end text-end"/>
                            </div>

                        </div>
                        <div className="mt-[20px]">
                            <Button
                                className="text-[14px] font-semibold "
                                sx={{
                                    '&.MuiButtonBase-root': {
                                        backgroundColor: '#FFFFFF',
                                        color: '#6E73FF',
                                        textTransform: 'capitalize',
                                        padding: '8px 24px 8px 24px',
                                        border: '1px solid #FFFFFF',
                                        borderRadius: '30px',
                                        '&:hover': {
                                            border: '1px solid #FFFFFF',
                                            backgroundColor: 'transparent',
                                            color: '#FFFFFF',
                                        },
                                    },
                                }}
                            >
                                <a href="https://calendly.com/sahillshrm" target="_blank" rel="noopener noreferrer">
                         Show Me How                 </a>                            </Button>
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
                className="bg-cover bg-center bg-no-repeat relative   md:block hidden"
            >
                {content}
            </div>
            <div
                style={{backgroundImage: `url(${image})`}}
                className="bg-cover bg-center bg-no-repeat relative md:pb-[248px] pb-[100px] md:hidden block"
            >
                {content}
            </div>
        </>
    );
};
