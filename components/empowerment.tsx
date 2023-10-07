import React from 'react';
import {EmpowermentInterfaces} from "../types";
import {Img} from "../utils/Img";

export const Empowerment: React.FC<EmpowermentInterfaces> = (props) => {
    const {title, subtitle1, subtitle2, image, year, business, yearTitle, businesspeople} = props;

    const content = (
        <>
            <div
                className="max-w-[1377.5px]  flex justify-center items-center  py-[50px] lg:pl-[60px] lg:py-[100px] mx-auto ">
                <div className="flex md:flex-row   flex-col">
                    <div className="flex flex-col">
                        <div className="md:text-[40px]  text-[#151448] text-[25px] max-w-[500px] font-bold ">
                            {title}
                        </div>
                        <div className="text-[18px] md:text-start text-center mt-[15px] font-normal text-[#747C85] max-w-[550px]">
                            {subtitle1}
                        </div>
                        <div className="text-[18px] mt-[15px] md:text-start text-center font-normal text-[#747C85] max-w-[550px]">
                            {subtitle2}
                        </div>
                        <div className="flex md:flex-row  mt-[50px] flex-col">
                            <div className="flex items-center flex-row">
                                <div className="text-[65px] font-bold text-[#6E73FF]">
                                    {year}
                                </div>
                                <div className="text-[20px] ml-[10px] md:max-w-[230px] max-w-[350px] font-medium  text-[#4F4F4F]">
                                    {yearTitle}
                                </div>
                            </div>

                            <div className="flex  items-center flex-row">
                                <div className="text-[65px] font-bold text-[#6E73FF]">
                                    {business}
                                </div>
                                <div className="text-[20px] ml-[10px] max-w-[290px]  font-medium  text-[#4F4F4F]">
                                    {businesspeople}
                                </div>
                            </div>


                        </div>

                    </div>


                    <div className="lg:ml-[100px] md:ml-[40px] mt-[30px] md:mt-0">
                        <Img src="/portfolio/empower.svg" alt="image" className="w-auto"/>

                    </div>
                </div>
            </div>
        </>
    );
    return (
        <>
            <div
                style={{ background: '#FFFFFF' }}
                className="bg-cover bg-center bg-no-repeat relative  block"
            >
                {content}
            </div>
        </>
    );
};
