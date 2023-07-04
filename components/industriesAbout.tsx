import React from "react";
import {Img} from "../utils/Img";
import {Button} from "@mui/material";
import {useRouter} from "next/router";


export const IndustriesAbout: React.FC<any> = (props) => {
    const {title, image,fintechData,button, satisfactionData} = props;
    const router = useRouter();

    const content = <>
        <div
            className="max-w-[1377.5px] mx-auto flex flex-col items-start justify-between md:pt-[120px]  pt-[80px] pb-[80px] md:pb-[120px]"
        >
            <div className="w-[100%] px-0 md:px-[40px] flex flex-col lg:flex-row text-start items-end justify-between ">
                <div className="w-[100%] px-[30px] pb-0 md:pb-[40px] lg:pb-0 md:px-[40px] lg:px-0 lg:w-[60vw] flex flex-col">
                    <h1 className="text-[#151448] text-[23px] md:text-[30px] lg:text-[40px] font-bold ">{title}</h1>
                    <div className="flex justify-end">
                    <div className="flex flex-col w-[600px] gap-[20px] pt-[20px] pb-[40px] md:pb-0 md:pt-[30px]">
                        {fintechData.map((item:any,index:number) => (
                        <div>
                            <h1 className="text-[#333333] font-semibold text-[15px] md:text-[21px] mb-[8px]">{item.title}</h1>
                            <p className="text-[#676767] pr-[0px] md:pr-[80px] text-[14px] md:text-[15px] font-medium" >{item.subtitle}</p>
                        </div>
                        ))}
                    </div>
                    </div>
                </div>
                <div className="w-[100vw] lg:w-[35vw] flex justify-center h-[100%] items-center">
                    <Img src={image} className="md:w-[70%] lg:w-[90%] w-[90%] h-[100%] rounded-[10px]" alt={"AssuranceImage"}/>
                </div>
            </div>
            <div className="w-[60vw] mx-auto md:w-[95vw] lg:w-[900px] gap-[0px]  md:gap-[100px] mt-[40px] md:mt-[80px] justify-between grid  grid-cols-1 md:grid-cols-3">
                {satisfactionData.map((item:any,index:number) => (
                <div>
                    <h1 className="text-[#3E98FF] text-[80px] font-bold">{item.number}+ </h1>
                    <p className="text-[#333333] text-[18px] font-medium">{item.subtitle}</p>
                </div>
                ))}
            </div>
            <div className="w-[60vw] mx-auto md:w-[95vw] lg:w-[900px] md:mt-[70px] ">
                <Button
                    onClick={()=> router.push(button.href)}
                    className="ButtonTransition overflow-hidden text-[14px] md:text-[16px] mt-[30px] md:mt-[-60px] font-semibold "
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
                    {button.name}

                </Button>
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

