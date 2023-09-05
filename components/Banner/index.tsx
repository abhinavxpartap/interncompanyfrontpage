import React, { useState } from 'react';
import { Header } from '../Common/Header';
import { Dialog, DialogContent } from '@mui/material';
import Popupform from '../popupform';
import { Button } from '@mui/material';

import {BannerDataInterface} from "../../types";
export const Banner:React.FC<BannerDataInterface> = (props) => {
  const { title, subtitle, image } = props;

  const [open, setOpen] = useState(false);
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
      <div className="max-w-[1377.5px] mx-[auto] flex flex-col items-center justify-center md:pt-[227px] pt-[117px] pb-[71px] md:px-0 px-[10px]">
        <h1 className="md:text-[80px] text-[36px] text-[#FFFFFF] font-bold leading-[50px] md:leading-[90px] md:tracking-[-2.4px] max-w-[900px] text-center md:pb-[25px] pb-[18px]">
          {title}
        </h1>
        <div className=" max-w-[1106px] font-medium text-[#FFFFFF]  md:text-[23px] text-[16px] leading-[160%] tracking-[-0.68px] text-center pb-[30px] ">
          {subtitle}
        </div>
        <div>

          <Button
              onClick={handleOpen}
              className="ButtonTransition overflow-hidden text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] font-semibold "
              sx={{
                '&.MuiButtonBase-root': {
                  backgroundColor: '#FFFFFF',
                  color: 'black',
                  textTransform: 'capitalize',
                  padding: '8px 24px 8px 24px',
                  border: '1px solid #FFFFFF',
                  borderRadius: '30px',
                  '&:hover': {
                    border: '1px solid #FFFFFF',
                    backgroundColor: 'transparent',
                    color: 'white',
                  },
                },
              }}
          >
            Request Demo          </Button>
        </div>
        <Dialog open={open} onClose={handleClose}>
          <DialogContent>
            <Popupform onClose={handleClose} />
          </DialogContent>
        </Dialog>
        <div className="mt-[20px]">
          <hr className="inline-block w-[22px] mb-[4px]" />
          <span className="text-[16px] text-[white]"> Web, IOS & Android </span>
        </div>
      </div>
    </div>
  );
};
