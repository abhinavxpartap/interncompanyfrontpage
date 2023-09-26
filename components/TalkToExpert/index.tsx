import { Button } from '@mui/material';
import React from 'react';
import {TalkInterface} from "../../types";

export const TalkTo: React.FC<TalkInterface> = (props) => {
  const { title ,image} = props;
  return (
    <div
        style={{
          backgroundImage: `url(${image})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize:'cover'
        }}
    >
      <div className="w-full pb-[120px]  pt-[50px]  relative md:max-w-[1441px] sm:pl-[80px]  h-full gap-[20px]  mx-auto flex  flex-col  ">
        <div className="md:text-start text-center">
          <div className="text-white md:text-[50px] text-[30px] font-bold max-w-[620px] md:leading-[60px]">
            {title}{' '}
          </div>
        </div>
        <div className="flex md:justify-normal justify-center    ">
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
            <a href="https://calendly.com/sahillshrm/30min" target="_blank" rel="noopener noreferrer">
       Show Me How        </a>          </Button>
        </div>
      </div>
    </div>
  );
};
