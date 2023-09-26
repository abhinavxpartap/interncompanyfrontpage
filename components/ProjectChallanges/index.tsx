import React from 'react';
import {Button} from "@mui/material";




interface Result {
    heading:string,
    list:Data[],
}
interface Data{
    percentage?:number,
    title:string,
    content:string
}
export const ProjectChallangesNew:React.FC<Result> = (props) => {
    const {heading,list}=props;

    const content = (
        <div className="max-w-[1377.5px] relative  mx-auto">
            <div className="w-[100%] md:px-[60px] px-[10px] flex flex-col items-center justify-center">
                <h1 className="text-center text-[45px] font-semibold text-[#151448] mb-[30px] mt-[60px]">{heading}</h1>
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-[80px]">
                    <div className="flex flex-row gap-[20px]">
                        <div className="text-[#6E73FF] text-[50px] font-semibold mt-[-10px]">{list[0].percentage}%</div>
                        <div className="flex flex-col gap-[10px]">
                            <h1 className="text-[#444444] text-[30px] font-semibold">{list[0].title}</h1>
                            <p className="text-[#444444] text-[18px] leading-auto font-normal">{list[0].content}</p>
                        </div>
                    </div>
                    <div className="flex flex-row gap-[20px]">
                        <div className="text-[#6E73FF] text-[50px] font-semibold mt-[-10px]">{list[1].percentage}%</div>
                        <div className="flex flex-col gap-[10px]">
                            <h1 className="text-[#444444] text-[30px] font-semibold">{list[1].title}</h1>
                            <p className="text-[#444444] text-[18px] leading-auto font-normal">{list[1].content}</p>
                        </div>
                    </div>
                </div>
                <div className="max-w-[484px] mt-[60px]">
                    <h1 className="mb-[10px] text-[#444444] text-[30px] font-semibold text-center">
                        {list[2].title}                    </h1>
                    <p className="mb-[25px] text-center text-[#444444] text-[18px] leading-auto font-normal">{list[2].content}</p>
                </div>
                <div className="flex mt-[30px] justify-center pb-[50px] items-center ">
                    <Button
                        className="text-[16px] font-semibold "
                        sx={{
                            '&.MuiButtonBase-root': {
                                backgroundColor: '#8184EB',
                                color: 'white',
                                textTransform: 'capitalize',
                                padding: '8px 20px 8px 20px',
                                border: '1px solid #8184EB',
                                borderRadius: '30px',
                                '&:hover': {
                                    border: '1px solid #8184EB',
                                    backgroundColor: 'transparent',
                                    color: '#8184EB',
                                },
                            },
                        }}
                    >
                        <a href="https://calendly.com/sahillshrm" target="_blank" rel="noopener noreferrer">
                        Work With Us                   </a>                    </Button>
                </div>
            </div>
        </div>
    );

    return (
        <div
            style={{background: '#F9FBFF'}}
            className="bg-cover bg-center bg-no-repeat relative block"
        >
            {content}
        </div>
    );
};
