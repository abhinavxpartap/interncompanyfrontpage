    import React from "react";
    import {Button} from "@mui/material";
    import {Img} from "../utils/Img";
    import { useRouter } from 'next/router';


    export const ServiceBanner: React.FC<any> = (props) => {
            const {image, mobileImage,title,button,subtitle} = props;
        const router = useRouter();

        const content = <>
            <div
                className="max-w-[1377.5px] mx-auto flex flex-col justify-center md:pt-[220px] xl:pt-[233px] xl:pb-[233px] pt-[117px] pb-[117px] md:pb-[200px]  sm:px-[70px]  xl:px-[40px] 2xl:px-[20px] px-[16px]"
            >

                <h1 className="text-white font-bold  mx-auto md:mx-0 text-[23px] text-center md:text-start w-[80%] sm:text-[30px] sm:leading-[40px] md:w-[450px] md:text-[35px] md:leading-[45px] lg:text-[50px] lg:leading-[65px] lg:w-[600px]">
                    {title}
                </h1>
                <p
                    className="font-medium pt-[5px] md:pt-[15px] mx-auto md:mx-0 w-[80%] text-center md:text-start md:w-[450px] text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] text-white lg:w-[550px]">
                    {subtitle}
                </p>
                <div className="flex pt-[10px] md:pt-[20px] justify-center items-center md:justify-start">
                    <Button
                        onClick={()=> router.push(button.href)}
                        className="ButtonTransition overflow-hidden text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] font-semibold "
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
                        {button.name}
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
