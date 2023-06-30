import type { NextPage } from 'next'
import {Button} from "@mui/material";
import React from "react";

export const TalkTo: React.FC<any> = (props) => {
    const {title} = props;   
    return (
        <div >
            <div
                className="w-full pb-[120px]  pt-[50px]  relative md:max-w-[1441px] sm:pl-[80px]  h-full gap-[20px]  mx-auto flex  flex-col  ">

                <div className="md:text-start text-center">
                    <div className="text-white md:text-[50px] text-[30px] font-bold max-w-[620px] md:leading-[60px]" >
                        {title}                    </div>

                </div>
                <div className="flex md:justify-normal justify-center    ">
                    <Button
                        className="text-[16px] font-semibold "
                        sx={{
                            '&.MuiButtonBase-root': {
                                backgroundColor: '#177DF0',
                                color: 'white',
                                textTransform: 'capitalize',
                                padding: '10px 22px 10px 22px',
                                border: '1px solid #177DF0',
                                borderRadius:"30px",
                                '&:hover': {
                                    border: '1px solid #5CA9FF',
                                    backgroundColor: 'transparent',
                                    color: '#177DF0',
                                },
                            },
                        }}
                    >
                        Talk to Our Experts                        </Button>
                </div>

            </div>
        </div>
    )
}

