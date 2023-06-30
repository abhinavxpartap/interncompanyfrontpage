import React from "react";


export const IndustriesCompliances: React.FC<any> = (props) => {
    const {image, title, subtitle, data} = props

    const content = <>
        <div
            className="max-w-[1377.5px] mx-auto flex items-center justify-between md:pt-[60px]  pt-[30px] pb-[30px] md:pb-[60px]"
        >
            <div className="w-[100%] px-[20px] md:px-[40px] flex flex-col text-start items-start justify-start ">
                <div className=" w-[100%] md:w-[80%]">
                <h1 className="text-white font-bold text-[18px] md:text-[32px]">{title}</h1>
                <p className="text-white font-normal pt-[10px] md:pt-[20px] text-[12px] md:text-[16px]">{subtitle}</p>
                    <div className="w-[300px] mt-[20px] grid grid-cols-3 gap-[10px]">
                        {data.map((item:any,index:number) =>(
                        <div key={index}>
                            <p className="font-medium text-[14px] md:text-[18px] text-white">{item.id}. {item.title}</p>
                        </div>
                        ))}
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

