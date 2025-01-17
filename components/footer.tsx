import React, {useState} from 'react';
import {Button} from '@mui/material';
import {Img} from '../utils/Img';
import data from '../data/footer.json';

type Service = {
    title: string;
    id: number;
    link: string;

};

type AboutItem = {
    title: string;
    id: number;
    link: string;

};
type IndustryItem = {
    title: string;
    id: number;
    link: string;

};
// type PortfolioItem = {
//   title: string;
//   id: number;
//   link: string;
//
// };


// type HelpItem = {
//   title: string;
//   id: number;
//   link: string;
// };

type SocialIcon = {
    icon: string;
    alt: string;
    id: number;
    link: string;

};

type FooterData = {
    services: Service[];
    // portfolio:PortfolioItem[];
    industry: IndustryItem[];
    about: AboutItem[];
    // help: HelpItem[];
    social: SocialIcon[];
};

export const Footer: React.FC = () => {
    const {services, about, social, industry} = data as FooterData;
    const [open, setOpen] = useState(false);

    const renderServices = () => {
        return services.map((service: Service) => (
            <div key={service.id} className="text-[16px] font-normal">
                <a href={service.link}>{service.title}</a>
            </div>
        ));
    };

    const renderAbout = () => {
        return about.map((item: AboutItem) => (
            <div key={item.id} className="text-[16px] font-normal">
                <a href={item.link}>{item.title}</a>
            </div>
        ));
    };
    const renderIndustry = () => {
        return industry.map((item: IndustryItem) => (
            <div key={item.id} className="text-[16px] font-normal">
                <a href={item.link}>{item.title}</a>
            </div>
        ));
    };

    const renderSocialIcons = () => {
        return social.map((icon: SocialIcon) => (
            <a key={icon.id} target="_blank" rel="noopener noreferrer" href={icon.link}>
                <button key={icon.id}>
                    <Img src={icon.icon} alt={icon.alt}  className="w-auto social-icon:hover social-icon "/>
                </button>
            </a>
        ));
    };
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const content = (
        <div className="max-w-[1477.5px] z-[-10] px-[50px] border-b-2 pb-[30px] pt-[50px]  mx-auto">
            <div className=" md:flex  md:justify-between grid grid-cols-1  gap-[20px] xl:gap-[40px] pb-[25px]    ">
                <div>
                    <Img src="/images/logo/logodarknew.png" alt="logo" className="w-[220px] "/>
                    <p className="max-w-[350px] text-[16px] mt-[12px] font-normal">
                        Full stack mobile (iOS, Android) and web app design and development
                        agency
                    </p>
                    <div className="flex pt-[20px] md:block  justify-center items-center md:justify-start">

                        <Button

                            className=" ButtonTransition   overflow-hidden   "
                            sx={{
                                '&.MuiButtonBase-root': {
                                    backgroundColor: '#8184EB',
                                    color: 'white',
                                    fontSize: '16px',
                                    fontWeight: 'bold',
                                    minWidth: '200px',

                                    textTransform: 'capitalize',
                                    padding: '9px 20px 9px 20px',
                                    border: '1px solid #8184EB',
                                    borderRadius: '30px',
                                    '&:hover': {
                                        border: '1px solid #8184EB',
                                        backgroundColor: 'transparent',
                                        color: '#8184EB',
                                    },
                                    '@media (max-width: 768px)': {
                                        display: 'none',
                                    },
                                },
                            }}
                        >
                            <a href="https://calendly.com/sahillshrm" target="_blank" rel="noopener noreferrer">Show Me
                                How </a>
                        </Button>

                    </div>

                    <div className="mt-[20px] ">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d38104.93913818031!2d76.6655969601468!3d30.709932228006494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fef07cb70c8b3%3A0xee15426001ff750c!2sVeer%20ji%20Tower!5e0!3m2!1sen!2sin!4v1695115381886!5m2!1sen!2sin"
                            width="auto" height="200" style={{
                            border: 0,
                            borderRadius: "15px"
                        }} loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
                <div>
                    <div className="flex flex-col gap-y-[13px] group">
                        <div
                            className="text-[18px] font-bold group-hover:text-[#6E73FF] transition-colors duration-300">Technologies
                            Your business loves:
                        </div>

                        {renderAbout()}
                    </div>

                </div>

                <div className=" flex flex-col group gap-y-[13px]">
                    <div
                        className="text-[18px]  group-hover:text-[#6E73FF] transition-colors duration-300 font-bold">Services
                        to hit your goals
                    </div>
                    {renderServices()}
                </div>
                <div className=" flex flex-col  gap-y-[13px]">
                    <div className=" flex flex-col  group gap-y-[13px]">
                        <div
                            className="text-[18px] group-hover:text-[#6E73FF] transition-colors duration-300 font-bold">
                            Discover
                            Resources for You
                        </div>
                            {renderIndustry()}


                    </div>
                    <div className="text-[18px]  mt-[50px] font-bold">Follow Us</div>
                    <div className="flex md:gap-[20px]     gap-[7px] flex-row">
                        {renderSocialIcons()}
                    </div>

                </div>


            </div>
            <div
                className="flex border-t-2 pt-[10px] social-icon:hover social-icon text-[14px] font-normal text-[#2A2C33] justify-center items-center">
                © 2021 All Rights Reserved
            </div>
        </div>
    );

    return (
        <>
            <div
                style={{background: '#F9FBFF'}}
                className="bg-cover bg-center bg-no-repeat relative "
            >
                {content}
            </div>
        </>
    );
};
