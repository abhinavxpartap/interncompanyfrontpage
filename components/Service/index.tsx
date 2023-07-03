import React from 'react'
import {Button} from '../../utils/Button'
import { Img } from '../../utils/Img'

const services = [
    {
        icon: "/images/wifi-blue.svg",
        title: "Strategy & Research",
        description: "layered dolor sit amet, consectetur adipisicing elit. Facere, nobis, id expedita dolores officiis laboriosam."
    },
    {
        icon: "/images/wifi-green.svg",
        title: "Software Development",
        description: "layered dolor sit amet, consectetur adipisicing elit. Facere, nobis, id expedita dolores officiis laboriosam."
    },
    {
        icon: "/images/wifi-orange.svg",
        title: "Web Design",
        description: "layered dolor sit amet, consectetur adipisicing elit. Facere, nobis, id expedita dolores officiis laboriosam."
    }
]

const Service = () => {
  return (
    <div className="md:px-[100px] relative flex flex-col items-center py-[40px] pt-[80px] text-center max-w-[1377.5px] overflow-hidden h-auto mx-auto">
        <div className="text-[#E4F0FF] -z-[1] text-[200px] xl:text-[250px] lg:text-[200px] md:text-[180px] sm:text-[150px] absolute right-[67%] font-medium leading-[70%] tracking-[-20px] w-[754px] text-right top-[3%]">
          service
        </div>
            <Button
                label={"WHAT WE DO?"}
                type="button"
                // onClick={() => router.push("/getStarted")}
                className="max-w-[150px] px-[10px] py-[4px] bg-[#A1B4F7] text-[white] xxl:leading-[22.99px] tracking-[-0.25px] font-semibold sm:leading-[20.57px] leading-[14px] xxl:w-[238px] md:w-[200px] w-[160px] text-[12px] hover:text-[#A1B4F7]"
            />
            <div className="text-[#151448] md:text-[40px] text-[24px]  font-bold leading-[125%] mt-[13px] max-w-[481px]">Zuca provides all
                kinds of services you need
            </div>
            <div className="text-[#747C85] text-[18px] mt-[13px] font-medium max-w-[612px] leading-[170%]">Fusce placerat
                pretium mauris, vel sollicitudin elit lacinia vitae. Quisque sit amet nisi erat.
            </div>
            <div className='pt-[60px] gap-[20px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-start '>
                {
                    services.map((service: any, index: any)=>{
                        return (<div key={index} className="bg-[#ffffff] w-[275px] lg:w-[230px] xl:w-[275px] px-[20px] py-[20px] rounded-[10px]" style={{boxShadow: 'rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px'}}>
                        <Img src={service.icon} className="w-[45px]" alt={"Icon"}/>
                        <h1 className="text-[20px] lg:text-[15px] xl:text-[20px] pt-[15px] font-semibold text-[#042552]">{service.title}</h1>
                        <p className=" pr-[10px] pt-[5px] text-[#757B8A] text-[16px] lg:text-[12px] xl:text-[16px] font-normal">{service.description}</p>
                    </div>
                        );
                    })
                }
            </div>
        </div>
    )
}

export default Service;