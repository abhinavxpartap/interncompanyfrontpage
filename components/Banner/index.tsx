import React, { useState } from 'react';
import { Button } from '../../utils/Button';
import { Header } from '../Common/Header';
import { Dialog, DialogContent } from '@mui/material';
import Popupform from '../popupform';
import {BannerDataInterface} from "../../types";
export const Banner:React.FC<BannerDataInterface> = (props) => {
  const { title, subtitle, image, button } = props;

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
      <div className="max-w-[1377.5px] mx-[auto] flex flex-col items-center justify-center md:pt-[270px] pt-[117px] pb-[71px] md:px-0 px-[10px]">
        <h1 className="md:text-[80px] text-[40px] text-[#FFFFFF] font-bold leading-[50px] md:leading-[90px] md:tracking-[-2.4px] max-w-[900px] text-center md:pb-[25px] pb-[18px]">
          {title}
        </h1>
        <div className=" max-w-[1106px] font-medium text-[#FFFFFF]  md:text-[23px] text-[16px] leading-[160%] tracking-[-0.68px] text-center pb-[30px] ">
          {subtitle}
        </div>
        <div>
          <Button
            label={button.title}
            type="button"
            onClick={handleOpen}
            className="xxl:text-[19px] bg-white xxl:leading-[22.99px] tracking-[-0.25px] font-semibold sm:text-[17px] text-[14px] sm:leading-[20.57px] leading-[14px] xxl:w-[238px] md:w-[200px] w-[160px] xxl:h-[63px] md:h-[48px] h-[42px]"
          />
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
