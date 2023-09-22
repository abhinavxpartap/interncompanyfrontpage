import React from 'react';
import {Img} from '../utils/Img';
import CompanyImage from '../data/common/OurBrands.json';
import {BrandData} from '../types';

export const OurBrands: React.FC = () => {

    const content = (
        <>
            <div
                className="max-w-[1377.5px] mx-auto flex flex-col items-center justify-between py-[50px]  md:py-[80px] ">
                <div className="mb-[20px]">
                    <h1 className="capitalize w-[100%] flex flex-col items-center md:flex-row gap-[4px] font-medium text-[#151448] text-[24px]">
                        We are trusted by{' '}
                        <span className="flex flex-row gap-[4px]">
              <span className="relative text-[#8184EB]">
                brands
                <Img
                    src="/Line2.svg"
                    className="w-[78px] mt-[-5px]"
                    alt={'Line'}
                />
              </span>{' '}
                            you believe in...
            </span>
                    </h1>
                </div>
                <div className="carousel-container">
                    <div className="carousel-track">
                        {CompanyImage.map((item: BrandData, index) => (
                            <div
                                key={index}
                                className="carousel-item"
                            >
                                <Img
                                    src={item.src}
                                    className="w-[100%] h-[100%] px-[15px] py-[10px]  flex items-center"
                                    alt={item.alt}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );

    return <div>{content}</div>;
};
