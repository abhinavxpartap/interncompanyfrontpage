import React from 'react';
import {JourneyInterface} from "../types";

export const Journey: React.FC<JourneyInterface> = (props) => {
  const { title, subtitle1, subtitle2 } = props;

  const content = (
    <>
      <div className="max-w-[1377.5px] px-[40px] py-[70px] mx-auto ">
        <div className="md:text-[40px] text-[25px] font-semibold">{title} </div>
        <div className="md:text-[18px] text-[14px] leading-[30px]  text-[#757B8A] font-medium">
          <p className="my-[15px] ">{subtitle1}</p>
          <p>{subtitle2}</p>
        </div>
      </div>
    </>
  );
  return (
    <>
      <div
        style={{ background: '#F9FBFF' }}
        className="bg-cover bg-center bg-no-repeat relative  block"
      >
        {content}
      </div>
    </>
  );
};
