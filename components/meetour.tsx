import React from "react";
import { Button } from "@mui/material";
import { Img } from "../utils/Img";

const teamMembers = [
    {
        name: "Mehmedi Ahmad",
        role: "CEO & Founder",
        imageSrc: "/man.svg",
    },
    {
        name: "Mehmedi Ahmad",
        role: "CEO & Founder",
        imageSrc: "/man.svg",
    }, {
        name: "Mehmedi Ahmad",
        role: "CEO & Founder",
        imageSrc: "/man.svg",
    }, {
        name: "Mehmedi Ahmad",
        role: "CEO & Founder",
        imageSrc: "/man.svg",
    }, {
        name: "Mehmedi Ahmad",
        role: "CEO & Founder",
        imageSrc: "/man.svg",
    }, {
        name: "Mehmedi Ahmad",
        role: "CEO & Founder",
        imageSrc: "/man.svg",
    }, {
        name: "Mehmedi Ahmad",
        role: "CEO & Founder",
        imageSrc: "/man.svg",
    }, {
        name: "Mehmedi Ahmad",
        role: "CEO & Founder",
        imageSrc: "/man.svg",
    },
];

export const Meetour: React.FC<any> = (props) => {
    const { image, mobileImage, title, subtitle } = props;

    const content = (
        <div className="max-w-[1477.5px] pb-[100px]  mx-auto">
            <div className="flex md:flex-row justify-between w-auto flex-col">
                <div className="px-[50px]">
                    <div className="text-[40px] font-bold">Meet Our Team</div>
                    <div className="text-[18px] font-normal text-[#4B5A69] max-w-[495px]">
                        Meet an exceptional team of technology advisors, growth facilitators, and subject matter experts with proven experience
                    </div>
                </div>
                <div>
                    <Img src="/outTeam.svg" alt="" className="w-auto" />
                </div>
            </div>
            <div className="grid lg:grid-cols-4 ml-[50px] md:grid-cols-3 grid-cols-2 justify-between">
                {teamMembers.map((member, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-[10px] mt-[45px] w-[265px] justify-center items-center p-[20px] h-[300px]"
                    >
                        <div>
                            <Img src={member.imageSrc} alt="" className="w-auto" />
                        </div>
                        <div className="text-center text-[18px] mt-[15px] font-semibold">
                            {member.name}
                        </div>
                        <div className="text-center text-[14px] mt-[5px] text-[#999999] font-normal">
                            {member.role}
                        </div>
                    </div>
                ))}
            </div>
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
