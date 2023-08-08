import React from 'react';
import { Img } from '../utils/Img';
import { Button } from '@mui/material';
import { useRouter } from 'next/router';

export const ServiceTech: React.FC<any> = (props) => {
  const { title, subtitle, data, button } = props;
  const router = useRouter();

  const content = (
    <>
      <div className="max-w-[1377.5px] mx-auto flex items-center justify-between md:pt-[100px]  pt-[80px] pb-[80px] md:pb-[100px]">
        <div className="w-[100%] mx-auto flex flex-col text-center items-center justify-center ">
          <h1 className="text-[#333333] font-bold text-[24px] md:text-[30px]">
            {title}
          </h1>
          <p className="text-[#333333] w-[90%] font-medium text-[14px] md:text-[14px] pt-[10px] ">
            {subtitle}
          </p>
          <div className="w-[100%] flex items-center justify-center">
            <div className="w-[90%] pt-[60px]  justify-between gap-[50px]  grid grid-cols-3 md:grid-cols-6 text-start ">
              {data.map((item: any, index: any) => (
                <div
                  key={index}
                  className="w-[70px] mx-auto flex items-center jusitfy-center"
                >
                  <Img
                    src={item.image}
                    className="w-[100%] felx items-center justify-center"
                    alt={'Icon'}
                  />
                </div>
              ))}
            </div>
          </div>
          <p className="text-[#333333] font-medium text-[14px] md:text-[14px] mt-[60px] ">
            Looking for an exact cost and time frame estimate for custom web
            development services?
          </p>
          <div className="mt-[20px]">
            <Button
              onClick={() => router.push(button.href)}
              className="ButtonTransition overflow-hidden text-[14px] md:text-[16px] font-semibold "
              sx={{
                '&.MuiButtonBase-root': {
                  backgroundColor: '#177DF0',
                  color: 'white',
                  textTransform: 'capitalize',
                  padding: '8px 24px 8px 24px',
                  border: '1px solid #5CA9FF',
                  borderRadius: '30px',
                  '&:hover': {
                    border: '1px solid #5CA9FF',
                    backgroundColor: 'transparent',
                    color: '#177DF0',
                  },
                },
              }}
            >
              {button.name}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
  return (
    <>
      <div>{content}</div>
    </>
  );
};
