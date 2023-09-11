import React from 'react';

interface OurProcess {
    heading:string,
    List:Data[],
}
interface Data{
    id:number,
    title:string,
    content:string
}
export const PortfolioOurProcess: React.FC<OurProcess> = ( props) => {

    const {heading, List} = props;

    const content = (
        <div className="max-w-[1377.5px] relative  mx-auto">
            <h1 className="text-[#151448] text-[40px] font-semibold w-[100%] text-center pt-[40px]">{heading}</h1>
            <div className="mx-[60px] pt-[60px] gap-[60px] grid md:grid-cols-2 grid-cols-1 justify-between md:flex-row flex-col">
                {List.map((item,index) => (
               <div key={index} className="flex flex-row gap-[20px]">
                   <div className="text-[#CFD3D7] mt-[-30px] text-[90px] font-bold">{item.id}</div>
                   <div className="flex flex-col">
                       <h1 className="text-[#151448] text-[25px] leading-[40px] font-semibold">{item.title}:</h1>
                       <p className="text-[#757B8A] text-[18px] font-normal lg:leading-[30px] xl:leading-[40px]">{item.content}</p>
                   </div>
               </div>
                ))}
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
