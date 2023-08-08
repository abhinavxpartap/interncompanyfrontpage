import React from 'react';
import { Button } from '@mui/material';
import { Img } from '../utils/Img';

const teamMembers = [
  {
    name: 'Mehmedi Ahmad',
    role: 'CEO & Founder',
    imageSrc: '/man.svg',
  },
  {
    name: 'Mehmedi Ahmad',
    role: 'CEO & Founder',
    imageSrc: '/man.svg',
  },
  {
    name: 'Mehmedi Ahmad',
    role: 'CEO & Founder',
    imageSrc: '/man.svg',
  },
  {
    name: 'Mehmedi Ahmad',
    role: 'CEO & Founder',
    imageSrc: '/man.svg',
  },
  {
    name: 'Mehmedi Ahmad',
    role: 'CEO & Founder',
    imageSrc: '/man.svg',
  },
  {
    name: 'Mehmedi Ahmad',
    role: 'CEO & Founder',
    imageSrc: '/man.svg',
  },
  {
    name: 'Mehmedi Ahmad',
    role: 'CEO & Founder',
    imageSrc: '/man.svg',
  },
  {
    name: 'Mehmedi Ahmad',
    role: 'CEO & Founder',
    imageSrc: '/man.svg',
  },
];

export const Meetour: React.FC<any> = (props) => {
  const { image, mobileImage, title, subtitle } = props;

  const content = (
    <div className="max-w-[1477.5px] pb-[100px]  mx-auto">
      <div className="flex md:flex-row justify-between w-auto flex-col">
        <div className="md:px-[50px]">
          <div className="text-[40px] md:text-start text-center font-bold">
            Meet Our Team
          </div>
          <div className="text-[18px] md:text-start text-center font-normal text-[#4B5A69] max-w-[495px]">
            Meet an exceptional team of technology advisors, growth
            facilitators, and subject matter experts with proven experience
          </div>
        </div>
        <div>
          <Img src="/outTeam.svg" alt="" className="md:w-auto w-[20px]" />
        </div>
      </div>
      <div className="flex justify-center items-center w-[100%]">
        <div className="grid lg:grid-cols-4  sm:grid-cols-3 grid-cols-2 gap-[40px]   mx-auto">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white shad5 rounded-[10px] mt-[45px] md:w-[265px] w-[170px] justify-center items-center md:p-[20px] md:h-[300px] h-[200px]"
            >
              <div>
                <Img
                  src={member.imageSrc}
                  alt=""
                  className="md:w-auto w-[160px] md:ml-0 ml-[4px]"
                />
              </div>
              <div className="text-center text-[18px] mt-[15px] font-semibold">
                {member.name}
              </div>
              <div className="text-center text-[14px] mt-[5px] text-[#999999] font-normal">
                {member.role}
              </div>
            </div>
          ))}
        </div>
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
