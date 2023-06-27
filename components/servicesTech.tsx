import React from "react";
import {Img} from "../utils/Img";
import {Button} from "@mui/material";


export const ServiceTech: React.FC<any> = (props) => {
    const {title, subtitle, data} = props;

    const content = <>
        <div
            className="max-w-[1377.5px] flex items-center justify-between md:pt-[100px]  pt-[30px] pb-[30px] md:pb-[100px]"
        >
            <div className="w-[100%] mx-auto flex flex-col text-center items-center justify-center ">
                <h1 className="text-[#333333] font-bold text-[30px]">{title}</h1>
                <p className="text-[#333333] font-medium text-[14px] pt-[10px] ">{subtitle}</p>
                <div className="w-[100%] flex items-center justify-center">
                <div  className=" w-[90%] pt-[60px]   flex flex-row justify-between gap-[50px]  grid grid-cols-6 text-start ">
                    {data.map((item:any,index:any) => (
                        <div key={index} className="w-[70px] mx-auto flex items-center jusitfy-center" >
                            <Img src={item.image} className="w-[100%] felx items-center justify-center" alt={"Icon"}/>
                        </div>
                    ))}
                </div>
                </div>
                <p className="text-[#333333] font-medium text-[14px] mt-[60px] ">
                    Looking for an exact cost and time frame estimate for custom web development services?
                </p>
                <div className="mt-[20px]">
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
                        Get a Quote
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
