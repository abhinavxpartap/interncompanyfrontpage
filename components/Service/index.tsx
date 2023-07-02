import React from 'react'
import {Button} from '../../utils/Button'

const Service = () => {
    return (
        <div className="md:px-[100px] relative flex flex-col items-center py-[40px] mt-[80px] text-center ">
            <div
                className="text-[#E4F0FF] -z-[1] text-[250px] absolute left-[-205px] font-medium leading-[70%] tracking-[-20px] w-[754px] text-right bottom-[450px]">
                service
            </div>
            <Button
                label={"WHAT WE DO?"}
                type="button"
                // onClick={() => router.push("/getStarted")}
                className="max-w-[150px] px-[10px] py-[4px] bg-[#A1B4F7] text-[white] xxl:leading-[22.99px] tracking-[-0.25px] font-semibold sm:leading-[20.57px] leading-[14px] xxl:w-[238px] md:w-[200px] w-[160px] text-[12px] hover:text-[#A1B4F7]"
            />
            <div className="text-[#151448] text-[40px] font-bold leading-[125%] mt-[13px] w-[481px]">Zuca provides all
                kinds of services you need
            </div>
            <div className="text-[#747C85] text-[18px] mt-[13px] font-medium w-[612px] leading-[170%]">Fusce placerat
                pretium mauris, vel sollicitudin elit lacinia vitae. Quisque sit amet nisi erat.
            </div>
            <div className='w-[100%] mt-[60px] flex md:flex-row flex-col justify-between'>
                <div className="p-[30px] w-[366px] flex flex-col rounded-[10px] shadow-[0_4px_20px_0_rgba(0,0,0,0.7)]">
                    <img src={"/images/wifi-blue.svg"} alt="options" height="60px" width="60px"/>
                    <div
                        className="text-[20px] font-semibold text-left leading-[26px] text-[#042552] mt-[15px]">Strategy
                        & Research
                    </div>
                    <div className="text-[16px] font-semibold text-left leading-[26px] text-[#042552] mt-[15px]">Fully
                        layered dolor sit amet, consectetur adipisicing elit. Facere, nobis, id expedita dolores
                        officiis laboriosam.
                    </div>
                </div>
                <div className="p-[30px] w-[366px] flex flex-col rounded-[10px] shadow-[0_4px_20px_0_rgba(0,0,0,0.7)]">
                    <img src={"/images/wifi-green.svg"} alt="options" height="60px" width="60px"/>
                    <div
                        className="text-[20px] font-semibold text-left leading-[26px] text-[#042552] mt-[15px]">Software
                        Development
                    </div>
                    <div className="text-[16px] font-semibold text-left leading-[26px] text-[#042552] mt-[15px]">Fully
                        layered dolor sit amet, consectetur adipisicing elit. Facere, nobis, id expedita dolores
                        officiis laboriosam.
                    </div>
                </div>
                <div className="p-[30px] w-[366px] flex flex-col rounded-[10px] shadow-[0_4px_20px_0_rgba(0,0,0,0.7)]">
                    <img src={"/images/wifi-orange.svg"} alt="options" height="60px" width="60px"/>
                    <div className="text-[20px] font-semibold text-left leading-[26px] text-[#042552] mt-[15px]">Web
                        Design
                    </div>
                    <div className="text-[16px] font-semibold text-left leading-[26px] text-[#042552] mt-[15px]">Fully
                        layered dolor sit amet, consectetur adipisicing elit. Facere, nobis, id expedita dolores
                        officiis laboriosam.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Service;