import React from "react";
import { Img } from "../utils/Img";

export const Blog: React.FC<any> = (props) => {
    const { image } = props;



    const content = (
        <div className="max-w-[1377.5px] relative  mx-auto">
            <div className="text-[37px] font-semibold pt-[50px] pl-[50px]">
                More Case Studies
            </div>

            <div className="flex md:flex-row flex-col ">
                <div>

                </div>
                <div>

                </div>
            </div>

        </div>
    );

    return (
        <div style={{ background: "#F9FBFF" }} className="bg-cover bg-center bg-no-repeat relative block">
            {content}
        </div>
    );
};
