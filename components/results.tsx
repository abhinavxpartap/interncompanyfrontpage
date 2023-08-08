import React from 'react';
import { Button } from '@mui/material';

export const Results: React.FC<any> = (props) => {
  const { data } = props;

  const content = (
    <div className="max-w-[1377.5px] relative  mx-auto">
      <div className="flex py-[50px] md:px-[50px] px-[20px]  md:gap-[370px] md:flex-row flex-col">
        <div className="text-[37px] font-semibold">The Results</div>
        <div className="flex md:flex-row  md:gap-[60px]">
          <div>
            <h1 className="text-[37px]  font-semibold text-[#3E98FF]">50K+</h1>
            <p className="text-[16px] font-medium t">Downloads</p>
          </div>
          <div>
            <h1 className="text-[37px] ml-[25px] font-semibold text-[#3E98FF]">
              30%
            </h1>
            <p className="text-[16px] max-w-[120px] leading-[18px]  text-center font-medium t">
              Conversion Rate Increased
            </p>
          </div>
          <div>
            <h1 className="text-[37px] ml-[5px] font-semibold text-[#3E98FF]">
              7 secs
            </h1>
            <p className="text-[16px] max-w-[120px] leading-[18px]  text-center font-medium t">
              Scree Transition Time Increased{' '}
            </p>
          </div>
        </div>
      </div>
      <div className="flex  justify-center pb-[50px] items-center ">
        <Button
          className="text-[16px] font-semibold "
          sx={{
            '&.MuiButtonBase-root': {
              backgroundColor: '#177DF0',
              color: 'white',
              textTransform: 'capitalize',
              padding: '8px 20px 8px 20px',
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
