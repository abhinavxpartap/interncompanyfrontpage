import React from 'react';
import { Img } from "../utils/Img";

interface ResultInterface {
    heading:string,
    subtitle:string,
    List:Data[]
}
interface Data {
    title:string
}
export const Results: React.FC<ResultInterface> = ( props ) => {

    const {heading, subtitle, List} = props;

  const content = (
      <div className="max-w-[1377.5px] relative mx-auto">
        <div className="flex flex-col items-center justify-center w-[100%] py-[10px] px-[10px] md:px-[60px]">
            <h1 className="text-[#151448] text-[45px] font-semibold">{heading}</h1>
            <p className="text-[#3D4852] text-[18px] max-w-[800px] text-center font-medium">{subtitle}</p>
            <ul className=" text-[#151448] text-[20px] font-medium list-none mt-[40px]">
                {List && List.length>0 && (List.map((item,index) => (
                <li key={index} className="mb-[20px] pl-[22px] relative">
                    <Img src="/newbullet.svg" className="w-[8px] absolute left-0 top-[12px]" alt={"Icon"}/>
                    {item.title}
                </li>
                )))}
            </ul>
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
