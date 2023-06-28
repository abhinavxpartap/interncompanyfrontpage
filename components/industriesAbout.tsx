import React from "react";
import {Img} from "../utils/Img";
import {Button} from "@mui/material";


export const IndustriesAbout: React.FC<any> = (props) => {
    const {title, image, buttonName, fintechData, satisfactionData} = props;

    const content = <>
        <div
            className="max-w-[1377.5px] flex flex-col items-center justify-between md:pt-[120px]  pt-[30px] pb-[30px] md:pb-[120px]"
        >
            <div className="w-[100%] px-[40px] flex flex-row text-start items-end justify-between ">
                <div className="w-[60vw] flex flex-col">
                    <h1 className="text-[#151448] text-[40px] font-bold ">{title}</h1>
                    <div className="flex justify-end">
                    <div className="flex flex-col w-[600px] gap-[20px] pt-[30px]">
                        {fintechData.map((item:any,index:number) => (
                        <div>
                            <h1 className="text-[#333333] font-semibold text-[21px] mb-[8px]">{item.title}</h1>
                            <p className="text-[#676767] pr-[80px] text-[15px] font-medium" >{item.subtitle}</p>
                        </div>
                        ))}
                    </div>
                    </div>
                </div>
                <div className="w-[35vw] flex justify-center h-[100%] items-center">
                    <Img src={image} className="w-[90%] h-[100%] rounded-[10px]" alt={"AssuranceImage"}/>
                </div>
            </div>
            <div className="flex w-[900px] flex-row gap-[100px] mt-[80px] justify-between grid grid-cols-3">
                {satisfactionData.map((item:any,index:number) => (
                <div>
                    <h1 className="text-[#3E98FF] text-[80px] font-bold">{item.number}+ </h1>
                    <p className="text-[#333333] text-[18px] font-medium">{item.subtitle}</p>
                </div>
                ))}
                <div>
                    <Button
                        className="text-[16px] mt-[-60px] font-semibold "
                        sx={{
                            '&.MuiButtonBase-root': {
                                backgroundColor: '#177DF0',
                                color: 'white',
                                textTransform: 'capitalize',
                                padding: '8px 24px 8px 24px',
                                border: '1px solid #5CA9FF',
                                borderRadius:"30px",
                                '&:hover': {
                                    border: '1px solid #5CA9FF',
                                    backgroundColor: 'transparent',
                                    color: '#177DF0',
                                },
                            },
                        }}
                    >
                        {buttonName}

                    </Button>
                </div>
            </div>
        </div>
    </>
    return (
        <>
            <div>
                {content}
            </div>
        </>
    );
};

