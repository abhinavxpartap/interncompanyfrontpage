import React, {useState} from 'react';
import {Button, Dialog, DialogContent} from '@mui/material';
import {LetsInterface} from "../types";
import Popupform from "./popupform";

export const Letswork: React.FC<LetsInterface> = (props) => {
  const { image, buttonName , title, subtitle } = props;

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
  const content = (
    <>
      <div className="w-full pb-[90px]  pt-[100px]  relative md:max-w-[1441px] lg:pl-[80px]  h-full gap-[20px] md:pr-[40px] mx-auto flex  flex-col  ">
        <div>
          <h1 className="md:text-[40px] text-[35px] md:text-start text-center font-bold text-white">
            {' '}
            {title}
          </h1>
          <p className="md:text-[22px] text-[20px] md:text-start text-center mt-[15px] font-medium md:max-w-[500px] text-white">
            {subtitle}
          </p>
        </div>

        <div className="flex pt-[20px] justify-center items-center md:justify-start">
          <Button
              onClick={handleOpen}
            className="text-[16px]  ButtonTransition overflow-hidden font-semibold "
            sx={{
              '&.MuiButtonBase-root': {
                backgroundColor: '#177DF0',
                color: 'white',
                textTransform: 'capitalize',
                padding: '9px 20px 9px 20px',
                border: '1px solid #177DF0',
                borderRadius: '30px',
                '&:hover': {
                  border: '1px solid #5CA9FF',
                  backgroundColor: 'transparent',
                  color: '#177DF0',
                },
              },
            }}
          >
              {buttonName}
          </Button>
        </div>
          <Dialog open={open} onClose={handleClose}>
              <DialogContent>
                  <Popupform onClose={handleClose} />
              </DialogContent>
          </Dialog>
      </div>
    </>
  );
  return (
    <>
      <div
        style={{ backgroundImage: `url(${image})` }}
        className="bg-cover bg-center bg-no-repeat relative block"
      >
        {content}
      </div>
    </>
  );
};
