import type {NextPage} from 'next'
import {Button} from "@mui/material";

const Project: NextPage = () => {
    return (
        <div>
            <div
                className="w-full  bg-cover bg-center shadow-2xl bg-no-repeat  pb-[30px] pt-[15px]  sm:pl-[50px]  h-full gap-[20px]  mx-auto flex  flex-col  ">
<div className="w-[100%] flex flex-col items-center  justify-center">
                <div className="md:text-[40px] text-[25px] flex-col  flex justify-center text-start w-[100%] font-semibold">

                    Our Project Challanges
                    <div className="flex md:flex-row sm:ml-[80px] sm:gap-[60px] flex-col ">
                        <div className="flex flex-row">
                            <div className="text-[70px] font-semibold items-start justify-start leading-[55px]">1</div>
                            <div className="flex flex-col ml-[5px]">
                                <div className="text-[18px] font-medium">

                                    Design
                                </div>
                                <div className="max-w-[450px] text-[#757B8A] text-[15px]">
                                    With large data sets in the form of multiple food menus and extensive user base in
                                    various countries, achieving quick screen transition was a challenge. Our team with its
                                    immaculate planning and use of the right tools ensured a much quicker Pizza Hut delivery
                                    app screen transition
                                </div>
                            </div>

                        </div>


                        <div className="flex flex-row">
                            <div className="text-[70px] font-semibold items-start justify-start leading-[55px]">2</div>
                            <div className="flex  flex-col ml-[5px]">
                                <div className="text-[18px] font-medium">
                                    Operational Chanlges
                                </div>
                                <div className="max-w-[480px]  text-[#757B8A] text-[15px]">
                                    At the starting of the project, there were different operational issues due to product
                                    management. Our team keenly studied all the issues across the layers and the legacy
                                    system, and resolved the challenge by taking appropriate actions at the right
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

</div>
            </div>
        </div>
    )
}

export default Project;
