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
  Date: string;
  categories: string;
  AuthorName: String;
}

export const BlogCards: React.FC<CardBlog> = ({
  img,
  title,
  description,
  className,
  url,
  Date,
  AuthorName,
  categories,
}) => {
  return (
    <div
      className={`rounded-[20px] bg-white overflow-hidden flex flex-col ${className}`}
      style={{
        boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25);',
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
                className="w-full h-[200px] object-cover"
              />
            </Link>
          </div>
        )}
        <div
          className="absolute top-[11px] right-[11px]  rounded-[5px] px-[10px] xxl:text-[16px] md:text-[13px] leading-[28px] text-[white] font-medium"
          style={{
            background: '#31D7A9',
            boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
          }}
        >
          {!categories ? (
            <Skeleton
              variant="rectangular"
              className="p-[12px] mb-[10px]"
              height={10}
            />
          ) : (
            <p>{categories}</p>
          )}
        </div>
      </div>
      <div className="flex-1 flex flex-col items-stretch py-[10px] px-[16px] h-auto  mt-[5px]">
        {!Date ? (
          <Skeleton
            variant="rectangular"
            className="p-[12px] mb-[10px]"
            height={10}
          />
        ) : (
          <p className="capitalize text-[#757B8A] mt-[-2px] pb-[4px] text-[16px] font-normal">
            {AuthorName} {Date}
          </p>
        )}
        {!title ? (
          <Skeleton
            variant="rectangular"
            className="p-[12px] mb-[10px]"
            height={50}
          />
        ) : (
          <h3 className="text-[#444444] text-[16px] leading-[22px] font-medium">
            {title}
          </h3>
        )}
        {!description ? (
          <Skeleton variant="rectangular" className="p-[12px]" height={80} />
        ) : (
          <p className="text-[14px] font-normal text-[#464646] mt-[6px] ">
            {description}
          </p>
        )}
      </div>
      <div className="flex flex-end justify-end  pb-[12px]  px-[18px]">
        <Link
          href={`/blog/${url}`}
          className="text-[#177DF0]  md:text-[15px] text-[12px] leading-[29px] font-medium"
        >
          {`Read more >>`}
        </Link>
      </div>
    </div>
  );
};
