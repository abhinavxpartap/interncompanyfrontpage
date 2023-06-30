import type {NextPage} from 'next'
import {Button} from "@mui/material";
import React from "react";


export const PortfolioBanner: React.FC<any> = (props) => {
    const {title} = props;
    return (
        <div>
            <div
                className="w-full pt-[190px] pb-[185px]  relative md:max-w-[1441px] justify-center   h-full gap-[20px] mx-auto flex flex-col  ">
                <div className=" flex justify-center ">
                    <div className="text-white text-[38px] text-center  max-w-[690px] font-semibold  leading-[50px]">
                        {title}
                    </div>
                </div>
                <div className="flex  justify-center items-center ">
                    <Button
                        className="text-[16px] font-semibold "
                        sx={{
                            '&.MuiButtonBase-root': {
                                backgroundColor: '#177DF0',
                                color: 'white',
                                textTransform: 'capitalize',
                                padding: '10px 22px 10px 22px',
                                border: '1px solid #177DF0',
                                borderRadius: "30px",
                                '&:hover': {
                                    border: '1px solid #5CA9FF',
                                    backgroundColor: 'transparent',
                                    color: '#177DF0',
                                },
                            },
                        }}
                    >
                        Expand Your Bussiness </Button>
                </div>


            </div>
        </div>
    )
}

