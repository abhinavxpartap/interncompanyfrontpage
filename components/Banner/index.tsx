import React, { useState,useEffect } from 'react';
import { Header } from '../Common/Header';
// import { Dialog, DialogContent } from '@mui/material';
// import Popupform from '../../components/popupform';
import { Button } from '@mui/material';
import { BannerDataInterface } from '../../types';

export const Banner: React.FC<BannerDataInterface> = (props) => {
    const { title, subtitle, image, button } = props;

    const [open, setOpen] = useState(false);

    useEffect(() => {
        const popupTimeout = setTimeout(() => {
            setOpen(true);
        }, 8000);

        return () => {
            clearTimeout(popupTimeout);
        };
    }, []);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div
            style={{ backgroundImage: `url(${image})` }}
            className="bg-cover bg-center bg-no-repeat md:pb-[50px] relative mx-[auto]"
        >
            <Header />
            <div className="max-w-[1377.5px] mx-[auto] flex flex-col items-center justify-center md:pt-[175px] pt-[117px] pb-[71px] md:px-0 px-[10px]">
                <h1
                    className="md:text-[80px] text-[32px] text-[#FFFFFF] font-bold leading-[40px] md:leading-[90px] md:tracking-[-2.4px] max-w-[1300px] text-center md:pb-[25px] pb-[18px] fade-in"
                >
                    {title}
                </h1>

                <div className=" max-w-[1106px]  fade-in   font-medium text-[#FFFFFF] md:text-[20px] text-[16px] leading-[160%] tracking-[-0.68px] text-center pb-[30px]">
                    {subtitle}
                </div>
                <div>
                        <Button
                            className="ButtonTransition overflow-hidden text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] font-semibold "
                            sx={{
                                '&.MuiButtonBase-root': {
                                    backgroundColor: '#8184EB',
                                    color: 'white',
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
                            {button}                    </a>

                </Button>






                </div>
                {/*<Dialog open={open} onClose={handleClose}>*/}
                {/*    <DialogContent>*/}
                {/*        <Popupform onClose={handleClose} />*/}
                {/*    </DialogContent>*/}
                {/*</Dialog>*/}
                <div className="mt-[20px] text-center">
                    <hr className="inline-block text-center w-[22px] mb-[4px]" />
                    <span className="text-[16px] text-center text-[white]"> Web, iOS, and Android Solutions for Your Unique Performance </span>
                </div>
            </div>
        </div>
    );
};
