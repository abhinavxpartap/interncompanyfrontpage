import React from "react";
import {Img} from "../utils/Img";


export const ServiceProcess: React.FC<any> = (props) => {
    const {title, subtitle, data} = props;

    const content = <>
        <div
            className="max-w-[1377.5px] mx-auto flex items-center justify-between md:pt-[80px]  pt-[30px] pb-[30px] md:pb-[80px]"
        >
            <div className="w-[100%] mx-auto flex flex-col text-center items-center justify-center ">
                 <h1 className="text-[#333333] font-bold text-[16px] sm:text-[20px] md:text-[25px] lg:text-[30px]">{title}</h1>
                <p className="text-[#333333] font-medium w-[300px]  text-[10px] sm:text-[12px] md:text-[12px] lg:text-[14px] sm:w-[400px] md:w-[450px] pt-[10px] ">{subtitle}</p>
                <div  className=" pt-[60px] gap-[20px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-start ">
                    {data.map((item:any,index:any) => (
                    <div key={index} className="bg-[#ffffff] w-[275px] lg:w-[230px] xl:w-[275px] px-[20px] py-[20px] rounded-[10px]" style={{boxShadow: 'rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px'}}>
                        <Img src={item.image} className="w-[45px]" alt={"Icon"}/>
                        <h1 className="text-[20px] lg:text-[15px] xl:text-[20px] pt-[15px] font-semibold text-[#042552]">{item.title}</h1>
                        <p className=" pr-[10px] pt-[5px] text-[#757B8A] text-[16px] lg:text-[12px] xl:text-[16px] font-normal">{item.subtitle}</p>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    </>
    return (
        <>
            <div
                style={{background:"#F9FBFF"}}
                className="bg-cover bg-center bg-no-repeat relative  block"
            >
                {content}
            </div>
        </>
    );
};
