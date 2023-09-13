import React from 'react';
import {Button} from "@mui/material";

export const ProjectChallangesNew = () => {

    const content = (
        <div className="max-w-[1377.5px] relative  mx-auto">
            <div className="w-[100%] md:px-[60px] px-[10px] flex flex-col items-center justify-center">
                <h1 className="text-center text-[45px] font-semibold text-[#151448] mb-[30px] mt-[60px]">The Results</h1>
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-[80px]">
                    <div className="flex flex-row gap-[20px]">
                        <div className="text-[#6E73FF] text-[50px] font-semibold mt-[-10px]">50%</div>
                        <div className="flex flex-col gap-[25px]">
                            <h1 className="text-[#444444] text-[30px] font-semibold">Faster Property Searches</h1>
                            <p className="text-[#444444] text-[18px] leading-auto font-normal">With our optimized web
                                development, property searches became nearly twice as fast, greatly improving user
                                satisfaction.</p>
                        </div>
                    </div>
                    <div className="flex flex-row gap-[20px]">
                        <div className="text-[#6E73FF] text-[50px] font-semibold mt-[-10px]">30%</div>
                        <div className="flex flex-col gap-[25px]">
                            <h1 className="text-[#444444] text-[30px] font-semibold">Increase in Sales</h1>
                            <p className="text-[#444444] text-[18px] leading-auto font-normal">The AI-driven property recommendations led to a significant boost in property inquiries and sales, translating into a 30% increase in revenue.</p>
                        </div>
                    </div>
                </div>
                <div className="max-w-[484px] mt-[60px]">
                    <h1 className="mb-[25px] text-[#444444] text-[30px] font-semibold text-center">
                        Enhanced Data-Driven Insights
                    </h1>
                    <p className="mb-[25px] text-center text-[#444444] text-[18px] leading-auto font-normal">Dream Homes
                        Realty now had access to data analytics that empowered them to make informed decisions,
                        resulting in more strategic business moves.</p>
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
                        Work with us{' '}
                    </Button>
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
