import React from "react";
import {Img} from "../utils/Img";


export const Journey: React.FC<any> = (props) => {
    const {title, subtitle1,subtitle2 } = props;

    const content = <>
        <div
            className="max-w-[1377.5px] px-[40px] py-[70px] mx-auto "
        >
            <div className="text-[40px] font-semibold">
                {title}            </div>
            <div className="text-[18px] leading-[30px]  text-[#757B8A] font-medium">
                <p className="my-[15px] ">
                    {subtitle1}
                </p>
                <p >

                    {subtitle2}

                </p>
            </div>


        </div>

    </>
    return (
        <>
            <div
                style={{background: "#F9FBFF"}}
                className="bg-cover bg-center bg-no-repeat relative  block"
            >
                {content}
            </div>
        </>
    );
};
