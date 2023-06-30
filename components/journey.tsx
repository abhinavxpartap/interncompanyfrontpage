import React from "react";
import {Img} from "../utils/Img";


export const Journey: React.FC<any> = (props) => {
    const {title, subtitle, data} = props;

    const content = <>
        <div
            className="max-w-[1377.5px] px-[40px] py-[70px] mx-auto "
        >
            <div className="text-[40px] font-semibold">
                Zuca’s Development Journey with Pizza Hut:
            </div>
            <div className="text-[18px] leading-[30px]  text-[#757B8A] font-medium">
                <p className="my-[15px] ">
                    Following a Product Discovery workshop, we invested most of our promised time in product research &
                    wire-framing to lay out the structure & architecture of how Pizza Hut had perceived their new app to
                    look like. Our development team put extensive effort on UI designing that could improve the user's
                    journey across the Pizza Hut app for an easy, speedy and glitch-free food ordering and delivery
                    experience.
                </p>
                <p >

                    The pizza hut delivery service app we created assists our client in achieving long-term success
                    along with having regular updates to investigate performance and consistency, resulting in
                    increasing application traffic. Furthermore, our team integrated unique features to automate food
                    ordering & delivery right at the customer's doorstep eliminating unexpected delays.

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
