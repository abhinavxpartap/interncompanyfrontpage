import React from "react";
import { Button } from "@mui/material";
import { Img } from "../utils/Img";
import data from "../data/footer.json";

type Service = {
    title: string;
    id: number;
};

type AboutItem = {
    title: string;
    id: number;
};

type HelpItem = {
    title: string;
    id: number;
    link:string;
};

type SocialIcon = {
    icon: string;
    alt: string;
    id: number;
};

type FooterData = {
    services: Service[];
    about: AboutItem[];
    help: HelpItem[];
    social: SocialIcon[];
};

export const Footer: React.FC<any> = (props) => {
    const { image, mobileImage, title, subtitle } = props;
    const { services, about, help, social } = data as FooterData;

    const renderServices = () => {
        return services.map((service: Service) => (
            <div key={service.id} className="text-[16px] font-normal">
                <a href="#">{service.title}</a>
            </div>
        ));
    };

    const renderAbout = () => {
        return about.map((item: AboutItem) => (
            <div key={item.id} className="text-[16px] font-normal">
                <a href="#">{item.title}</a>
            </div>
        ));
    };

    const renderHelp = () => {
        return help.map((item: HelpItem) => (
            <div key={item.id} className="text-[16px] font-normal">
                <a href={item.link}>{item.title}</a>
            </div>
        ));
    };

    const renderSocialIcons = () => {
        return social.map((icon: SocialIcon) => (
            <button key={icon.id}>
                <Img src={icon.icon} alt={icon.alt} className="w-auto" />
            </button>
        ));
    };

    const content = (
        <div className="max-w-[1477.5px] px-[50px] border-b-2 pb-[30px] pt-[50px]  mx-auto">
            <div className="md:flex  grid grid-cols-2 gap-[40px] pb-[25px]   md:flex-row w-full justify-between">
                <div>
                    <Img src="/image 5.png" alt="logo" className="w-auto" />
                    <p className="max-w-[350px] text-[16px] mt-[12px] font-normal">
                        Full stack mobile (iOS, Android) and web app design and development agency
                    </p>
                    <div className="flex pt-[20px] md:block hidden justify-center items-center md:justify-start">
                        <Button
                            className="text-[16px] ButtonTransition overflow-hidden min-w-[200px] font-semibold "
                            sx={{
                                "&.MuiButtonBase-root": {
                                    backgroundColor: "#177DF0",
                                    color: "white",
                                    textTransform: "capitalize",
                                    padding: "9px 20px 9px 20px",
                                    border: "1px solid #177DF0",
                                    borderRadius: "30px",
                                    "&:hover": {
                                        border: "1px solid #5CA9FF",
                                        backgroundColor: "transparent",
                                        color: "#177DF0",
                                    },
                                },
                            }}
                        >
                            <a href="#">Book Consultation</a>
                        </Button>
                    </div>
                </div>
                <div className=" flex flex-col gap-y-[13px]">
                    <div className="text-[18px] font-bold">Services</div>
                    {renderServices()}
                </div>
                <div className=" flex flex-col gap-y-[13px]">
                    <div className="text-[18px] font-bold">About</div>
                    {renderAbout()}
                </div>
                <div className=" flex flex-col gap-y-[13px]">
                    <div className="text-[18px] font-bold">Help</div>
                    {renderHelp()}
                </div>
                <div className=" flex flex-col gap-y-[13px]">
                    <div className="text-[18px] font-bold">Follow Us</div>
                    <div className="flex md:gap-[20px] gap-[7px] flex-row">{renderSocialIcons()}</div>
                </div>
                <div className="flex pt-[31px] md:hidden block  justify-center items-center md:justify-start">
                    <Button
                        className="text-[12px] ButtonTransition overflow-hidden min-w-[160px] font-semibold "
                        sx={{
                            "&.MuiButtonBase-root": {
                                backgroundColor: "#177DF0",
                                color: "white",
                                textTransform: "capitalize",
                                padding: "6px 16px 6px 16px",
                                border: "1px solid #177DF0",
                                borderRadius: "30px",
                                "&:hover": {
                                    border: "1px solid #5CA9FF",
                                    backgroundColor: "transparent",
                                    color: "#177DF0",
                                },
                            },
                        }}
                    >
                        <a href="#">Book Consultation</a>
                    </Button>
                </div>
            </div>
            <div className="flex border-t-2 pt-[10px]  text-[14px] font-normal text-[#2A2C33] justify-center items-center">
                © 2021 Timey All Rights Reserved
            </div>
        </div>
    );

    return (
        <>
            <div style={{ background: "#F9FBFF" }} className="bg-cover bg-center bg-no-repeat relative ">
                {content}
            </div>
        </>
    );
};
