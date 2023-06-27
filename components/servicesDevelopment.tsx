import React from "react";
import {Img} from "../utils/Img";
import {Button} from "@mui/material";


export const ServicesDevelopment: React.FC<any> = (props) => {
    const {title, subtitle, LeftData, RightData,CenterContent,ButtonName } = props;

    const content = <>
        <div
            className="max-w-[1377.5px] flex items-center justify-between md:pt-[80px]  pt-[30px] pb-[30px] md:pb-[80px]"
        >
            <div className="w-[100%] flex flex-col text-center items-center justify-center ">
                <h1 className="text-[#151448] font-bold text-[30px] leading-[40px] w-[500px] ">{title}</h1>
                <p className="text-[#333333] font-normal text-[14px] pt-[10px] ">{subtitle}</p>
                <div className="flex flex-row mt-[40px] bg-white  rounded-[10px]" style={{boxShadow: 'rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px'}}>
                    <div className="w-[18vw]  px-[20px] py-[50px] flex flex-col gap-[25px] justify-start bg-[#D8EEFF] rounded-l-[10px] ">
                        {LeftData.map((item:any,index:any) => (
                        <div className="flex flex-row gap-[10px] items-center" >
                            <Img src={item.image} className="w-[30px]" alt={item.title}/>
                            <h1 className="text-[18px] font-normal text-[4B5A69] cursor-pointer active:text-[#177DF0] hover:text-[#177DF0]">{item.title}</h1>
                        </div>
                        ))}
                    </div>
                    <div className="w-[55vw] flex justify-start text-start px-[20px] text-[#757B8A] text-[14px] font-normal leading-[32px] py-[50px] " >
                        {CenterContent}
                    </div>
                    <div className="w-[18vw]  px-[20px] py-[50px] flex flex-col gap-[25px] justify-start bg-[#D8EEFF] rounded-r-[10px] ">
                        {RightData.map((item:any,index:any) => (
                            <div className="flex flex-row gap-[10px] items-center" >
                                <Img src={item.image} className="w-[30px]" alt={item.title}/>
                                <h1 className="text-[18px] font-normal text-[4B5A69] cursor-pointer active:text-[#177DF0] hover:text-[#177DF0]">{item.title}</h1>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex justify-center items-ceter pt-[30px]">
                    <Button
                        className="text-[16px] font-semibold "
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
                        {ButtonName}

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
