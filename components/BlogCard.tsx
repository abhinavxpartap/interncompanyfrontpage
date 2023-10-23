import React from 'react';
import Link from 'next/link';
import {Skeleton} from '@mui/material';
import {Img} from '../utils/Img';

interface CardBlog {
  img: string;
  title: string;
  description: string;
  url: string;
}

export const BlogCards: React.FC<CardBlog> = ({
  img,
  title,
  description,
  url,
}) => {
  return (
    <div
      className={`rounded-[20px] bg-white overflow-hidden flex flex-col`}
      style={{
        boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25);',
      }}
    >
      <div className="relative">
        {!img ? (
          <Skeleton variant="rectangular" className="p-[12px]" height={200} />
        ) : (
          <div>
            <Link href={`/blogs/${url}`}>
              <Img
                src={img || ''}
                alt="Avatar"
                className="w-full h-[200px] object-cover"
              />
            </Link>
          </div>
        )}
      </div>
      <div className="flex-1 flex flex-col items-stretch py-[10px] px-[16px] h-auto  mt-[5px]">
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
          <p className="text-[14px] font-normal ellipsis-text text-[#464646] mt-[6px] ">
            {description}
          </p>
        )}
      </div>
      <div className="flex flex-end justify-end  pb-[12px]  px-[18px]">
        <Link
          href={`/blogs/${url}`}
          className="text-[#8184EB]  md:text-[15px] text-[12px] leading-[29px] font-medium"
        >
          {`Read more >>`}
        </Link>
      </div>
    </div>
  );
};
