import React, {useState, useEffect} from 'react';
import {Header} from '../Common/Header';
import {Button} from '@mui/material';
import {BannerDataInterface} from '../../types';
import {Abhiheader} from '../Common/Abhiheader';

export const Banner: React.FC<BannerDataInterface> = (props) => {
    const {title, subtitle, image, button,fix} = props;

    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentTitle, setCurrentTitle] = useState(title[0]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % title.length);
        }, 3500);

        return () => {
            clearInterval(interval);
        };
    }, [title]);
    useEffect(() => {
        setCurrentTitle(title[currentIndex]);
    }, [currentIndex, title]);


    return (
        <div
            style={{backgroundImage: `url(${image})`}}
            className="bg-cover bg-center bg-no-repeat md:pb-[50px] relative mx-[auto]"
        >
            <Header/>
            <div
                className="max-w-[1377.5px] mx-[auto] flex flex-col items-center justify-center md:pt-[175px] pt-[117px] pb-[71px] md:px-0 px-[10px]">
                <div
                    className="md:text-[70px]   text-[32px] text-[#FFFFFF] font-bold leading-[40px] md:leading-[90px] md:tracking-[-2.4px] max-w-[1300px] text-center md:pb-[5px] pb-[18px] fade-in"
                >
                    {fix}

                </div>

                <div
                    className="md:text-[40px]   text-[32px] text-[#FFFFFF] font-normal leading-[40px] md:leading-[60px] md:tracking-[-2.4px] max-w-[1200px] text-center md:pb-[25px] pb-[18px] fade-in"
                >
                    {currentTitle}

                </div>
                <div
                    className=" max-w-[906px]  fade-in   font-normal text-[#FFFFFF] md:text-[20px] text-[16px] leading-[160%] tracking-[-0.68px] text-center pb-[30px]">
                    {subtitle}
                </div>
                <div>
                    <Button
                        className="ButtonTransition overflow-hidden  "
                        sx={{
                            '&.MuiButtonBase-root': {
                                backgroundColor: '#8184EB',
                                color: 'white',
                                overflow: 'hidden',
                                fontSize: {
                                    xs: '10px',
                                    sm: '12px',
                                    md: '14px',
                                    lg: '16px',
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
                            {button}                    </a>

                    </Button>
                </div>

                <div className="mt-[20px] text-center">
                    <hr className="inline-block text-center w-[22px] mb-[4px]"/>
                    <span className="text-[16px] text-center text-[white]"> Web, iOS, and Android Solutions for Your Unique Performance </span>
                </div>
            </div>
        </div>
    );
};
