
import React from "react";
import {Img} from "../utils/Img";

const Image = [
    {
        image:"/Brand1.svg"
    },
    {
        image:"/Brand2.svg"
    },
    {
        image:"/Brand3.svg"
    },
    {
        image:"/Brand4.svg"
    },
    {
        image:"/Brand5.svg"
    },
    {
        image:"/Brand6.svg"
    },
    {
        image:"/Brand3.svg"
    },
    {
        image:"/Brand1.svg"
    }
]
export const OurBrands: React.FC<any> = () => {

    const content = <>
        <div
            className="max-w-[1377.5px] mx-auto flex flex-col items-center justify-between  pt-[30px] pb-[30px]"
        >
            <div className="mb-[30px]">
                <h1 className="capitalize w-[100%] flex flex-row gap-[4px] font-medium text-[#151448] text-[24px]">
                    We are trusted by <span className="relative text-[#3D6EFC]"> brands<Img src="/Line.svg" className="w-[78px] mt-[-5px]" alt={"Line"}/></span> you believe in...
                </h1>
            </div>

            <div className="w-full h-full overflow-x-scroll scrollbar scroll whitespace-nowrap scroll-smooth">
                {Image.map((item:any,index: any)=> (
                    <div key={index} className="w-[200px] bg-white h-[50px] inline-block m-4 cursor-pointer rounded-[10px] " style={{boxShadow: 'rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px'}} >
                    <Img src={item.image} className="w-[100%] h-[100%] p-[15px] flex items-center" alt={"Icon"}/>
                    </div>
                ))}
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

