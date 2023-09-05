import React from 'react';
import { Button, FormControl, OutlinedInput } from '@mui/material';

export const GetStories = () => {
  const content = (
    <>
      <div className="max-w-[1377.5px] mx-auto flex items-center justify-between md:pt-[60px]  pt-[30px] pb-[30px] md:pb-[60px]">
        <div className="w-[100%] px-[20px] md:px-[40px] flex flex-col text-start items-start justify-start ">
          <div className=" w-[90vw] md:w-[400px] flex flex-col  gap-[20px]">
            <h1 className="text-white leading-[35px] md:leading-[45px] text-[30px] md:text-[40px] font-bold">
              Get stories in your inbox twice a month.
            </h1>
            <FormControl sx={{ width: '100%' }}>
              <OutlinedInput
                placeholder="enter email address"
                style={{ borderRadius: '8px' }}
                inputProps={{
                  style: {
                    fontSize: '12px',
                    background: 'white',
                    borderRadius: '8px',
                  },
                }}
              />
            </FormControl>
            <Button
              className="ButtonTransition overflow-hidden text-[14px] w-[130px] font-semibold "
              sx={{
                '&.MuiButtonBase-root': {
                  backgroundColor: '#177DF0',
                  color: 'white',
                  textTransform: 'capitalize',
                  padding: '8px 24px 8px 24px',
                  border: '1px solid #5CA9FF',
                  borderRadius: '30px',
                },
              }}
            >
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </>
  );
  return (
    <>
      <div
        style={{ backgroundImage: `url(/story.jpg)` }}
        className="bg-cover bg-center bg-no-repeat relative  block"
      >
        {content}
      </div>
    </>
  );
};
