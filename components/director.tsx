import React from "react";
import {Button} from "@mui/material";
import {Img} from "../utils/Img";


export const Director: React.FC<any> = (props) => {
    const {image, mobileImage,name, post,company,address,message,icon } = props;

    const content = <>
        <div
            className="max-w-[1377.5px] mx-auto flex flex-col justify-center md:pt-[150px] xl:pt-[130px] xl:pb-[114px] pt-[117px] md:pb-[200px]  sm:px-[70px]  xl:px-[40px] 2xl:px-[20px] px-[16px]"
        >

         <div className="flex md:flex-row ml-[80px] md:gap-[90px]    text-center flex-col">
             <div>
                 <div className="rounded-full ml-[44px]">
                     <Img src={icon} alt="w" className="w-[140px] rouded-full"/>

                 </div>
                 <div className="text-[20px] font-bold text-white">
                     {name}
                 </div>
                 <div className="text-[17px] mt-[10px] font-bold text-white">{post}</div>
                 <div className="text-[17px] font-bold text-white">{company}</div>
                 <div className="text-[17px] font-bold text-white">{address}</div>


             </div>
             <div className="flex flex-col">
                 <div className="max-w-[720px] leading-[30px]  text-white text-[18px] font-medium">
                     <span className="text-[25px]">"</span>{message}<span className="text-[25px]">"</span>

                 </div>
                 <div className="mt-[20px]">
                     <Button
                         className="text-[14px] font-semibold "
                         sx={{
                             '&.MuiButtonBase-root': {
                                 backgroundColor: '#FFFFFF',
                                 color: '#EF1C26',
                                 textTransform: 'capitalize',
                                 padding: '8px 24px 8px 24px',
                                 border: '1px solid #FFFFFF',
                                 borderRadius:"30px",
                                 '&:hover': {
                                     border: '1px solid #FFFFFF',
                                     backgroundColor: 'transparent',
                                     color: '#FFFFFF',
                                 },
                             },
                         }}
                     >
                         Schedule Consultation                     </Button>
                 </div>
             </div>

<div>rf</div>

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
