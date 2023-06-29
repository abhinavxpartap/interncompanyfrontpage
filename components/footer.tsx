import React from "react";
import { Button } from "@mui/material";
import { Img } from "../utils/Img";



export const Footer: React.FC<any> = (props) => {
    const { image, mobileImage, title, subtitle } = props;

    const content = (
        <div className="max-w-[1477.5px]  mx-auto">




        </div>
    );

    return (
        <>
            <div style={{ background: "#F9FBFF" }} className="bg-cover bg-center bg-no-repeat relative md:block hidden">
                {content}
            </div>
        </>
    );
};
