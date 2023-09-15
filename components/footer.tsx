import React, {useState} from 'react';
import {Button} from '@mui/material';
import { Img } from '../utils/Img';
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
  industry:IndustryItem[];
  about: AboutItem[];
  // help: HelpItem[];
  social: SocialIcon[];
};

export const Footer: React.FC = () => {
  const { services, about, social,industry } = data as FooterData;
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
  // const renderPortfolio = () => {
  //   return portfolio.map((item: PortfolioItem) => (
  //       <div key={item.id} className="text-[16px] font-normal">
  //         <a href={item.link}>{item.title}</a>
  //       </div>
  //   ));
  // };

  // const renderHelp = () => {
  //   return help.map((item: HelpItem) => (
  //     <div key={item.id} className="text-[16px] font-normal">
  //       <a href={item.link}>{item.title}</a>
  //     </div>
  //   ));
  // };

  const renderSocialIcons = () => {
    return social.map((icon: SocialIcon) => (
        <a key={icon.id}  href={icon.link}>
      <button key={icon.id}>
        <Img src={icon.icon} alt={icon.alt} className="w-auto social-icon:hover social-icon " />
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
      <div className="md:flex  grid grid-cols-1 gap-[40px] pb-[25px]   md:flex-row w-full justify-between">
        <div>
          <Img src="/images/logo/logodarknew.png" alt="logo" className="w-[220px] " />
          <p className="max-w-[350px] text-[16px] mt-[12px] font-normal">
            Full stack mobile (iOS, Android) and web app design and development
            agency
          </p>
          <div className="flex pt-[20px] md:block  justify-center items-center md:justify-start">

            <Button

                className="text-[16px] ButtonTransition   overflow-hidden min-w-[200px] font-semibold "
              sx={{
                '&.MuiButtonBase-root': {
                  backgroundColor: '#8184EB',
                  color: 'white',

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
              <a href="https://calendly.com/sahillshrm" target="_blank" rel="noopener noreferrer">Show Me How </a>
            </Button>

          </div>

        </div>
        <div className="flex flex-col gap-y-[13px] group">
          <div className="text-[18px] font-bold group-hover:text-[#6E73FF] transition-colors duration-300">About</div>

          {renderAbout()}
        </div>
        <div className=" flex flex-col group gap-y-[13px]">
          <div className="text-[18px]  group-hover:text-[#6E73FF] transition-colors duration-300 font-bold">Services</div>
          {renderServices()}
        </div>
        <div className=" flex flex-col group gap-y-[13px]">
          <div className="text-[18px] group-hover:text-[#6E73FF] transition-colors duration-300 font-bold">Industries</div>
          {renderIndustry()}
        </div>
      {/*  <div className=" flex flex-col gap-y-[13px]">*/}
      {/*  <div className="text-[18px] font-bold">Portfolio</div>*/}
      {/*  {renderPortfolio()}*/}
      {/*</div>*/}
        {/*<div className=" flex flex-col gap-y-[13px]">*/}
        {/*  <div className="text-[18px] font-bold">Blog</div>*/}
        {/*  {renderHelp()}*/}
        {/*</div>*/}
        <div className=" flex flex-col gap-y-[13px]">
          <div className="text-[18px] font-bold">Follow Us</div>
          <div className="flex md:gap-[20px]    gap-[7px] flex-row">
            {renderSocialIcons()}
          </div>
        </div>
      </div>
      <div className="flex border-t-2 pt-[10px] social-icon:hover social-icon text-[14px] font-normal text-[#2A2C33] justify-center items-center">
        © 2021 All Rights Reserved
      </div>
    </div>
  );

  return (
    <>
      <div
        style={{ background: '#F9FBFF' }}
        className="bg-cover bg-center bg-no-repeat relative "
      >
        {content}
      </div>
    </>
  );
};
