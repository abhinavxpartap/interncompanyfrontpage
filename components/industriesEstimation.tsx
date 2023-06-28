import React from "react";
import {Img} from "../utils/Img";
import {Button} from "@mui/material";

export const IndustriesEstimation: React.FC<any> = (props) => {
    const {image, title, subtitle, data, buttonName} = props;

    const content = <>
        <div
            className="max-w-[1377.5px] flex items-center justify-between md:pt-[60px]  pt-[30px] pb-[30px] md:pb-[60px]"
        >
            <div className="w-[100%] px-[60px] flex flex-col text-start items-start justify-start ">
                <div className="w-[625px]">
                    <h1 className="text-white font-bold leading-[52px] text-[42px]">{title}</h1>
                    <p className="text-white font-normal pt-[20px] text-[20px]">
                        {subtitle}
                    </p>
                    <div className="mt-[20px] flex flex-col gap-[15px]">
                        {data.map((item:any,index:number) => (
                        <div key={index} className="flex flex-row gap-[20px] items-center">
                            <Img src="/bullet.svg" className="w-[10px]" alt={"BulletIcon"}/>
                            <p className="text-[16px] text-white font-normal">
                                {item.content}
                            </p>
                        </div>
                        ))}
                        <div>
                            <Button
                                className="text-[16px] mt-[20px] font-semibold "
                                sx={{
                                    '&.MuiButtonBase-root': {
                                        backgroundColor: 'transparent',
                                        color: 'white',
                                        textTransform: 'capitalize',
                                        padding: '8px 24px 8px 24px',
                                        border: '1px solid white',
                                        borderRadius:"10px",
                                        '&:hover': {
                                            border: '1px solid white',
                                            backgroundColor: 'transparent',
                                            color: 'white',
                                        },
                                    },
                                }}
                            >
                                {buttonName}
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
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

