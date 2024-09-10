import React ,{useEffect, useState} from 'react'
import {Img} from '../../utils/Img';
import {Dropdown} from './Dropdown';
import data from '../../data/config.json';
import {useRouter} from 'next/router';
import headerData from '../../data/common/layout.json';
import {Button} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Abhi } from './Abhi';





export const Abhiheader = () => {
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
      '/case_studies',
      ].includes(router.pathname) &&
      !router.pathname.startsWith('/blogs/') ? data.logo_icon : isSticky ? data.logo_icon : data.logo_icon;
   
      const handleScroll = () => {
        if (window.pageYOffset > 0) {
          setIsSticky(true);
        } else {
          setIsSticky(false);
        }
      };

  return (
    <div
    className={` max-w-[1440px] mx-[auto] z-[9] w-full fixed top-0 left-0 right-0 header ${
      isSticky ? 'bg-white' : ''
      }`}
    >
        <Abhi/>
        <div className='xl:px-[100px] lg:px-[75px] md:px-[55px] sm:px-[30px] px-[16px]'>
        <div className="flex flex-row h-[90px] justify-between max-w-[1440px] items-center">
            <div onClick={() => router.push('/')} className="cursor-pointer">
              <Img
                src={logo || ''}
                alt="Header Logo"
                className="max-w-[219.005px] rounded xl:h-[42px] lg:h-[35px] md:h-[27px] h-[25px]"
              />
            </div>
            <div className="flex-1 hidden lg:flex justify-center items-center">
              <div className="flex relative xl:gap-[40px] gap-[29px]">
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
                  title="Industries"
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
                    title="Blog"
                    items={headerData.header[5]}
                    open={openSupport}
                    isSticky={isSticky}
                    setOpen={toggleSupport}
                    href={undefined}
                />
              </div>
            </div>
            <div className="lg:hidden flex flex-1 ml-[10px] justify-end">
              <button
                type="button"
                className="inline-flex p-3 rounded-full text-[#808080] hover:text-[#808080] bg-primary"
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
            <div className="hidden lg:inline-flex items-start  max-w-[192px] max-h-[48px]">
              <button
                  className="px-[37px] py-[14px] max-w-[144px] max-h-[48px] bg-[#CE023D] text-white rounded-[30px] inline-flex items-center hover:bg-transparent hover:border-[1px] border-solid border-[#CE023D] hover:text-[#CE023D] overflow-hidden"
                  onClick={handleOpen}
              >
                 Talk to us
             </button>
             <button
                  className="p-[12.48px] max-w-[48px] max-h-[48px] bg-[#CE023D] text-white rounded-[30px] inline-flex items-center hover:border-[1px] border-solid border-[#CE023D] hover:bg-transparent hover:text-[#CE023D] overflow-hidden"
                  onClick={handleOpen}
              >
                <ArrowForwardIcon className="-rotate-45 max-w-[23px] max-h-[23px]" />
             </button>
            </div>
        </div>
        </div>
        {/* toggle value  */}
        <div
          className={`lg:hidden absolute top-[100%] ${
            isSticky
              ? 'left-0 right-0'
              : 'md:left-[55px] px-[10px] sm:left-[30px] left-[16px] md:right-[55px] sm:right-[30px] right-[16px]'
          }`}
        >
          <div
            className={`${isOpen ? 'block' : 'hidden'} overflow-y-auto`}
            style={{ maxHeight: 'calc(100vh - 96px)' }}
          >
            <div
              className={`flex flex-col rounded-[10px] bg-[#ac9898] w-[100%] h-[100%] p-[20px]  gap-[20px] relative ${
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
                  title="Industries"
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
                    title="Blog"
                    items={headerData.header[5]}
                    open={openSupport}
                    isSticky={isSticky}
                    setOpen={toggleSupport}
                    href={undefined}
                />
              <div className="text-center inline-flex items-center justify-center">
              <button
                  className="px-[37px] py-[14px] max-w-[144px] max-h-[48px] bg-[#CE023D] text-white rounded-[30px] inline-flex items-center hover:bg-transparent hover:border-[1px] border-solid border-[#CE023D] hover:text-[#CE023D] overflow-hidden"
                  onClick={handleOpen}
              >
                 Talk to us
             </button>
             <button
                  className="p-[12.48px] ml-[3px] max-w-[48px] max-h-[48px] bg-[#CE023D] text-white rounded-[30px] inline-flex items-center hover:border-[1px] border-solid border-[#CE023D] hover:bg-transparent hover:text-[#CE023D] overflow-hidden"
                  onClick={handleOpen}
              >
                <ArrowForwardIcon className="-rotate-45 max-w-[23px] max-h-[23px]" />
             </button>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}
