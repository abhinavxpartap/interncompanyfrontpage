import React from "react";
import {Img} from "../utils/Img";
import {Button} from "@mui/material";


export const IndustriesTechnology: React.FC<any> = (props) => {
    const {title, subtitle, data} = props;

    const content = <>
        <div
            className="max-w-[1377.5px] mx-auto flex flex-col items-center justify-center md:pt-[120px]  pt-[30px] pb-[30px] md:pb-[120px]"
        >
            <div className="w-[85%] mb-[80px]">
                <h1 className="text-[#151448] text-center text-[40px] font-bold">{title}</h1>
                <p className="text-[#4B5A69] text-center text-[18px] pt-[20px] font-normal px-[90px]">{subtitle}</p>
            </div>
            <div className="flex items-center w-[100%] justify-center ">
                <div  className="flex w-[70%] justify-center gap-[30px] items-center flex-col">
                    {data.map((item:any,index:number) => (
                    <div key={index} className="flex flex-row items-start justify-center gap-[30px]">
                        <Img src={item.icon} className="w-[35px]" alt={"Icon"}/>
                        <div className="flex flex-col gap-[10px] mt-[-5px] w-[90%]">
                            <h1 className="text-[#151448] text-[30px] font-semibold">{item.title}</h1>
                            <p className="text-[#4B5A69] text-[18px] font-normal">{item.subtitle}</p>
                        </div>
                    </div>
                    ))}
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

