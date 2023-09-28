import React from 'react';

interface NewJourney {
    title1: string,
    title2: string,
    subtitle2: string,
    heading: string,
    List1: ListData[],
    List2: ListData[],
}

interface ListData {
    id: number,
    title: string,
    content: string,
}

export const NewPortofilioJourney: React.FC<NewJourney> = (props) => {
    const {
        title1,
        title2,
        subtitle2,
        heading,
        List1,
        List2,
    } = props;

    const content = (
        <div className="max-w-[1377.5px] relative  mx-auto">
            <div className="py-[50px] px-[60px]">
                <h1 className="text-[#151448] text-[40px] font-semibold">{heading}</h1>
                <h2 className="text-[#6E73FF] text-[25px] font-semibold mt-[30px]">{title1}</h2>
                {List1 && List1.length>0 && (List1.map((item, index) => (
                    <p key={index} className="text-[#757B8A] lg:leading-[22px] xl:leading-[25px] font-normal mt-[10px]">
                        <span className="mr-[6px] text-[#757B8A] font-semibold">{item.id}.</span>
                        <span className="mr-[6px] text-[#151448] font-semibold">{item.title}:</span>
                        <span className="mr-[6px] text-[#151448]">                    {item.content}
</span>
                    </p>
                )))}
                <h1 className="text-[#6E73FF] text-[25px] font-semibold mt-[30px]">{title2}</h1>
                <p className="text-[#151448] mt-[10px] lg:mb-[30px] text-[18px] lg:leading-[32px]  font-normal">{subtitle2}</p>
                {List2 && List2.length>0 && (List2.map((item, index) => (
                    <p key={index} className="text-[#757B8A] lg:leading-[26px] xl:leading-[30px] font-normal mt-[10px]">
                        <span className="mr-[6px] text-[#757B8A] font-semibold">{item.id}.</span>
                        <span className="mr-[6px] text-[#151448] font-semibold">{item.title}:</span>
                        <span className="mr-[6px] text-[#111C3A]">                    {item.content}
</span></p>
                )))}
            </div>
        </div>
    );

    return (
        <div
            style={{background: '#F9FBFF'}}
            className="bg-cover bg-center bg-no-repeat relative block"
        >
            {content}
        </div>
    );
};
