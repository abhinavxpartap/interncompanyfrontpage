    import React from "react";
    import {Button} from "@mui/material";
    import {Img} from "../utils/Img";


    export const ServiceBanner: React.FC<any> = (props) => {
            const {image, mobileImage,title, subtitle,buttonName } = props;

        const content = <>
            <div
                className="max-w-[1377.5px] mx-auto flex flex-col justify-center md:pt-[220px] xl:pt-[233px] xl:pb-[233px] pt-[117px] md:pb-[200px]  sm:px-[70px]  xl:px-[40px] 2xl:px-[20px] px-[16px]"
            >

                <h1 className="text-white font-bold text-[50px] leading-[65px] w-[600px]">
                    {title}
                </h1>
                <p
                    className="font-medium pt-[15px] text-[18px] text-white w-[550px]">
                    {subtitle}
                </p>
                <div className="flex pt-[20px] justify-center items-center md:justify-start">
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
                        {buttonName}
                    </Button>
                </div>
            </div>
        </>
        return (
            <>
                <div
                    style={{backgroundImage: `url(${image})`}}
                    className="bg-cover bg-center bg-no-repeat relative  md:block hidden"
                >
                    {content}
                </div>
                <div
                    style={{backgroundImage: `url(${mobileImage})`}}
                    className="bg-cover bg-center bg-no-repeat relative md:pb-[248px] md:hidden block"
                >
                    {content}
                </div>
            </>
        );
    };
