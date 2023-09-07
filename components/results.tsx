import React from 'react';
import { Button } from '@mui/material';
import resultData from '../data/portfolio.json'

export const Results = () => {


  const content = (
      <div className="max-w-[1377.5px] relative mx-auto">
        <div className="flex py-[50px] md:px-[50px] px-[20px] md:gap-[370px] md:flex-row flex-col">
          <div className="text-[37px] font-semibold">The Results</div>
          <div className="flex md:flex-row  md:gap-[60px]">
            {resultData.result.map((item, index) => (
                <div key={index}>
                  <h1 className="text-[37px] font-semibold text-[#8184EB]">
                    {item.value}
                  </h1>
                  <p className="text-[16px] font-medium">{item.description}</p>
                </div>
            ))}
          </div>
        </div>
        <div className="flex  justify-center pb-[50px] items-center ">
          <Button
              className="text-[16px] font-semibold "
              sx={{
                '&.MuiButtonBase-root': {
                  backgroundColor: '#8184EB',
                  color: 'white',
                  textTransform: 'capitalize',
                  padding: '8px 20px 8px 20px',
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
            Work with us{' '}
          </Button>
        </div>
      </div>
  );

  return (
      <div
          style={{ background: '#F9FBFF' }}
          className="bg-cover bg-center bg-no-repeat relative block"
      >
        {content}
      </div>
  );
};
