import React from 'react';
import Data from '../data/portfolio.json'
export const OurProcess2= () => {


  const content = (
    <div className="max-w-[1377.5px] pt-[15px] pb-[40px] relative mx-auto">
      <div className="p-[8px] md:block hidden  mt-[25px] linec bg-[#FF6666]"></div>
      <div className="flex md:flex-row flex-col  gap-[90px]">
        <div className="px-[40px] md:text-start text-center mt-[5px] text-[35px] font-bold ">
          Our Process
        </div>
        {Data.processSteps.map((step) => (
          <div
            className="flex md:justify-normal justify-center items-center flex-row"
            key={step.number}
          >
            <div className="text-[50px] font-semibold text-[#EF1C26] relative top-[-50px]">
              {step.number}
            </div>
            <div className="flex mt-[10px] flex-col">
              <div className="text-[18px] font-medium">{step.title}</div>
              <div className="text-[15px] font-normal text-[#5A7184]">
                {step.subSteps.map((subStep, index) => (
                  <div key={index}>{subStep}</div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div
      style={{ background: '#FFFFFF' }}
      className="bg-cover bg-center bg-no-repeat relative block"
    >
      {content}
    </div>
  );
};
