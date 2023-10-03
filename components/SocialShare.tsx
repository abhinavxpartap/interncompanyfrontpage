import React from "react";
import {Img} from "../utils/Img";

interface SocialShareInterface {
    url: string;
}

export const SocialShare: React.FC<SocialShareInterface> = ({ url }) => {
    const social = [
        "/images/social/linkedIn.svg",
        "/images/social/twitter.svg",
        "/images/social/whatsapp.svg",
        "/images/social/line.svg",
    ];
    return <div className="flex gap-[12px]">
        {
            social.map((item, index) =>
                <a
                    key={index}
                    className="w-[42px] h-[42px] flex items-center justify-center bg-white rounded-full border-[#E9ECF2] cursor-pointer"
                >
                    <Img
                        src={item}
                        alt="Social Share Icon"
                        className={"w-[16px] h-[16px]"}
                    />
                </a>
            )
        }
    </div>
}