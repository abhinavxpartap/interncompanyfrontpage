import React, { useEffect, useState } from 'react';
import { Img } from '../../utils/Img';
import { useRouter } from 'next/router';
import { Button } from '@mui/material';
import data from '../../data/config.json';
import headerData from '../../data/common/layout.json';
import { Dropdown } from './Dropdown';

export const Header= () => {
  const router = useRouter();
  const [isSticky, setIsSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [openExplore, setOpenExplore] = useState(false);
  const [openCompany, setOpenCompany] = useState(false);
  const [openResources, setOpenResources] = useState(false);
  const [openSupport, setOpenSupport] = useState(false);

  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const toggleExplore = () => {
    setOpenExplore(!openExplore);
    setOpenCompany(false);
    setOpenResources(false);
    setOpenSupport(false);
  };
  const toggleCompany = () => {
    setOpenCompany(!openCompany);
    setOpenExplore(false);
    setOpenResources(false);
    setOpenSupport(false);
  };
  const toggleResources = () => {
    setOpenResources(!openResources);
    setOpenExplore(false);
    setOpenCompany(false);
    setOpenSupport(false);
  };
  const toggleSupport = () => {
    setOpenSupport(!openSupport);
    setOpenExplore(false);
    setOpenCompany(false);
    setOpenResources(false);
  };
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
    setOpenExplore(false);
    setOpenCompany(false);
    setOpenResources(false);
    setOpenSupport(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const logo = ![
    '/partner',
    '/faq',
    '/blog',
    '/ourStory',
    '/term',
    '/portfolio',
    '/portfolios',
      '/case_studies'

  ].includes(router.pathname)
    ? data.logo_light
    : isSticky
    ? data.logo_light
    : data.logo_dark;

  const handleScroll = () => {
    if (window.pageYOffset > 56) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };
  return (
    <>
      <div
        className={`md:pt-[20px] mx-[auto] z-[9] pt-[16px] md:px-[55px] sm:px-[30px] px-[16px] w-full fixed top-0 left-0 right-0 header ${
          isSticky ? 'header-sticky' : ''
        }`}
      >
        <div className="max-w-[1377.5px] mx-auto">
          <div className="flex flex-row  lg:gap-[40px] xl:gap-[140px] 2xl:gap-[200px] items-center ml-[-18px]">
            <div onClick={() => router.push('/')} className="cursor-pointer">
              <Img
                src={logo || ''}
                alt="Header Logo"
                className="  max-w-[210px]  xl:h-[41px]  lg:h-[35px] md:h-[27px]"
              />
            </div>
            <div className="flex-1  hidden lg:flex">
              <div className="flex relative xxl:gap-[43px] md:gap-[30px]">
                <Dropdown
                  title="About"
                  items={headerData.header[0]}
                  open={openExplore}
                  isSticky={isSticky}
                  setOpen={toggleExplore}
                  href={undefined}
                />
                <Dropdown
                  title="Services"
                  items={headerData.header[1]}
                  open={openCompany}
                  isSticky={isSticky}
                  setOpen={toggleCompany}
                  href={undefined}
                />
                <Dropdown
                  title="Technologies"
                  items={headerData.header[2]}
                  open={openResources}
                  isSticky={isSticky}
                  setOpen={toggleResources}
                  href={undefined}
                />
                <Dropdown
                  title="Portfolios"
                  items={headerData.header[3]}
                  open={openSupport}
                  isSticky={isSticky}
                  setOpen={toggleSupport}
                  href={undefined}
                />
                <Dropdown
                  title="Case Studies"
                  items={headerData.header[4]}
                  open={openSupport}
                  isSticky={isSticky}
                  setOpen={toggleSupport}
                  href={undefined}
                />

              </div>
            </div>
            <div className="lg:hidden flex flex-1 justify-end">
              <button
                type="button"
                className="inline-flex p-3 rounded-full text-white hover:text-white bg-primary"
                aria-controls="mobile-menu"
                aria-expanded="false"
                onClick={toggleNavbar}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                <svg
                  className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="hidden lg:block">

              <Button
                  className="ButtonTransition overflow-hidden "
                  onClick={handleOpen}
                  sx={{
                    '&.MuiButtonBase-root': {
                      backgroundColor: '#8184EB',
                      color: 'white',
                      overflow: 'hidden',
                      fontSize: {
                        xs: '10px',
                        sm: '12px',
                        md: '13px',
                        lg: '13px',
                        xl:'16px',
                      },
                      fontWeight: 'bold',
                      textTransform: 'capitalize',
                      padding: '8px 24px 8px 24px',
                      border: '1px solid #8184EB',
                      borderRadius: '30px',
                      '&:hover': {
                        border: '1px solid #8184EB',
                        backgroundColor: 'transparent',
                        color: '#8184EB',
                      },
                    },
                  }}
              >
                <a href="https://calendly.com/sahillshrm" target="_blank" rel="noopener noreferrer">
           Transform My StartUp Now                  </a>              </Button>
            </div>
            {/*<Dialog open={open} onClose={handleClose}>*/}
            {/*  <DialogContent>*/}
            {/*    <Popupform onClose={handleClose} />*/}
            {/*  </DialogContent>*/}
            {/*</Dialog>*/}
          </div>
        </div>
        <div
          className={`lg:hidden absolute top-[100%] ${
            isSticky
              ? 'left-0 right-0'
              : 'md:left-[55px] sm:left-[30px] left-[16px] md:right-[55px] sm:right-[30px] right-[16px]'
          }`}
        >
          <div
            className={`${isOpen ? 'block' : 'hidden'} overflow-y-auto`}
            style={{ maxHeight: 'calc(100vh - 96px)' }}
          >
            <div
              className={`flex flex-col bg-[#3200FF] w-[100%] h-[100%] p-[20px]  gap-[20px] relative ${
                !isSticky
                  ? 'rounded'
                  : 'border-b md:px-[55px] sm:px-[30px] px-[16px]'
              }`}
            >
              <Dropdown
                title="About"
                items={headerData.header[0]}
                open={openExplore}
                isSticky={isSticky}
                setOpen={toggleExplore}
                href={undefined}
              />
              <Dropdown
                title="Services"
                items={headerData.header[1]}
                open={openCompany}
                isSticky={isSticky}
                setOpen={toggleCompany}
                href={undefined}
              />
              <Dropdown
                title="Technologies"
                items={headerData.header[2]}
                open={openResources}
                isSticky={isSticky}
                setOpen={toggleResources}
                href={undefined}
              />
              <Dropdown
                title="Portfolios"
                items={headerData.header[3]}
                open={openSupport}
                isSticky={isSticky}
                setOpen={toggleSupport}
                href={undefined}
              />
              <Dropdown
                title="Case Studies"
                items={headerData.header[4]}
                open={openSupport}
                isSticky={isSticky}
                setOpen={toggleSupport}
                href={undefined}
              />
              <div className="text-center">
                <Button
                    className="ButtonTransition overflow-hidden text-[10px] sm:text-[12px] md:text-[14px]  2xl:text-[16px] font-semibold "
                    onClick={handleOpen}
                    sx={{
                      '&.MuiButtonBase-root': {
                        backgroundColor: '#7F75FC',
                        color: 'white',
                        textTransform: 'capitalize',
                        padding: '8px 24px 8px 24px',
                        border: '1px solid #7F75FC',
                        borderRadius: '30px',
                        '&:hover': {
                          border: '1px solid #7F75FC',
                          backgroundColor: 'transparent',
                          color: '#7F75FC',
                        },
                      },
                    }}
                >
                  Transform My Startup Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
