import React from 'react';
import Link from 'next/link';
import { Skeleton } from '@mui/material';
import { Img } from '../utils/Img';

interface CardBlog {
    img: string;
    title: string;
    description: string;
    className?: string;
    url: string;
    Date:string;
    categories:string;
}

export const BlogCards: React.FC<CardBlog> = ({
    img,
    title,
    description,
    className,
    url,
    Date,
    categories,}) => {
    return (
        <div
            className={`rounded-[20px] bg-white overflow-hidden flex flex-col ${className}`}
            style={{
                boxShadow: '0px 20px 50px rgba(18, 17, 39, 0.08)',
            }}
        >
            <div className="relative">
                {!img ? (
                    <Skeleton variant="rectangular" className="p-[12px]" height={200} />
                ) : (
                    <div>
                        <Link href={`/blog/${url}`}>
                            <Img
                                src={img || ''}
                                alt="Avatar"
                                className="w-full h-[250px] object-cover"
                            />
                        </Link>
                    </div>
                )}
                <div
                    className="absolute top-[21px] left-[31px] hidden rounded-[20px] px-[10px] xxl:text-[16px] md:text-[14px] leading-[28px] text-[white] font-medium"
                    style={{ background: 'rgba(237, 232, 254, 0.2)' }}
                >
                    Article
                </div>
            </div>
            <div className="flex-1 flex flex-col items-stretch py-[10px] px-[16px] h-auto  mt-[5px]">
                {!categories? (
                    <Skeleton
                        variant="rectangular"
                        className="p-[12px] mb-[10px]"
                        height={10}
                    />
                ) : (
                    <p className=" mb-[10px] uppercase text-[#177DF0] mt-[-5px] text-[14px] font-semibold">
                        {categories}
                    </p>
                )}
                {!title ? (
                    <Skeleton
                        variant="rectangular"
                        className="p-[12px] mb-[10px]"
                        height={50}
                    />
                ) : (
                    <h3 className="text-[#1A1A1A] text-[20px] font-medium">
                        {title}
                    </h3>
                )}
                {!description ? (
                    <Skeleton variant="rectangular" className="p-[12px]" height={80} />
                ) : (
                    <p className="text-[14px] font-normal text-[#464646] mt-[5px] ">
                        {description}
                    </p>
                )}
            </div>
            <div className="flex flex-row justify-between mt-[-8px] p-[18px]">
                <div>
                    {!Date? (
                        <Skeleton
                            variant="rectangular"
                            className="p-[12px] mb-[10px]"
                            height={10}
                        />
                    ) : (
                        <p className="text-[#464646] font-normal text-[14px]">
                            {Date}
                        </p>
                    )}
                </div>
                <div>
                <Link
                    href={`/blog/${url}`}
                    className="text-[#382E53]  md:text-[14px] text-[12px] leading-[29px] font-medium"
                >
                    {`Read more >>`}
                </Link>
                </div>
            </div>
        </div>
    );
};
