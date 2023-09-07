import { Button } from '@mui/material';
import React from 'react';
import { Header } from '../Common/Header';
import {Port} from "../../types";

export const PortfolioBanner: React.FC<Port> = (props) => {
  const { title,image } = props;
  return (
    <div
        style={{
          backgroundImage: `url(${image})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize:'cover'
    }}
    >
      <div className="w-full pt-[190px] pb-[185px]  relative md:max-w-[1441px] justify-center   h-full gap-[20px] mx-auto flex flex-col  ">
        <Header />
        <div className=" flex justify-center ">
          <div className="text-white fade-in md:text-[38px] text-[28px] text-center  max-w-[690px] font-semibold  md:leading-[50px]">
            {title}
          </div>
        </div>
        <div className="flex  justify-center items-center ">
          <Button
            className="text-[16px] font-semibold "
            sx={{
              '&.MuiButtonBase-root': {
                backgroundColor: '#8184EB',
                color: 'white',
                textTransform: 'capitalize',
                padding: '10px 22px 10px 22px',
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
            Expand Your Bussiness
          </Button>
        </div>
      </div>
    </div>
  );
};
