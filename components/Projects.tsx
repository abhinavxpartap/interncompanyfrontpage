import React from 'react';
import {Img} from '../utils/Img';
import {ProjectInterface} from "../types";
import {Button} from "@mui/material";

export const Projects: React.FC<ProjectInterface> = (props) => {
    const {title, data,} = props;


    const content = (
        <>
            <div className="max-w-[1377.5px] pb-[50px] mx-auto flex items-center justify-between   ">
                <div className="w-[100%] mx-auto flex flex-col text-center items-center justify-center ">
                    <h1 className="text-[#141548] font-bold pb-[40px]text-[24px] md:text-[50px]">
                        {title}
                    </h1>
                    {data.map((project, index) => (
                        <div
                            key={index}
                            className={`flex flex-col md:mt-[40px] mt-[40px] md:flex-row ${index === 1 ? 'md:flex-row-reverse' : ''}`}>
                            <div className="md:px-[30px] md:py-[0px] lg:p-[60px] p-[20px]">
                                <div className="text-[45px] md:text-start text-center  font-bold text-[#151448]">
                                    {project.title}
                                </div>
                                <div
                                    className="mt-[10px] max-w-[560px] text-[#1C1C1EB8] md:text-start text-center text-[20px] lg:text-[24px] font-normal lg:mt-[30px]">
                                    {project.subtitle}                            </div>
                                <div className="flex justify-start md:gap-[20px] gap-[10px] flex-row">
                                    {project.type.map((type, index) => (
                                        <div
                                            key={index}
                                            className="bg-[#E5E5EA] md:min-w-[90px] min-w-[70px] mt-[20px] text-[#444] text-[13px] font-medium py-[5px] rounded-[15px]"
                                        >
                                            {type}
                                        </div>
                                    ))}
                                </div>

                                <div
                                    className="max-w-[500px] mt-[20px] md:text-start text-[15px] lg:text-[18px] font-normal text-[#333333] text-center ">
                                    {project.description}
                                </div>
                                <div
                                    className="flex flex-col max-w-[550px] justify-between mt-[15px] lg:mt-[35px] md:flex-row">
                                    <div className="text-[18px] font-medium">
                                        Duration:<span
                                        className="font-normal text-[#1C1C1EB8]">  {project.duration} </span>
                                    </div>
                                    <div className="text-[18px] md:mt-0 mt-[5px] font-medium">
                                        Platform:<span
                                        className="font-normal text-[#1C1C1EB8]">{project.platform}</span>
                                    </div>

                                </div>
                                <div
                                    className="md:text-start text-[18px] md:mt-[30px] mt-[15px] font-medium text-center">
                                    Tech Stack
                                </div>
                                <div className="flex justify-start md:gap-[20px] gap-[10px] flex-row">
                                    {project.tech.map((tech, index) => (
                                        <div
                                            key={index}
                                            className="bg-[#8FB8F6] md:min-w-[60px] min-w-[50px] px-[7px] mt-[10px] text-[#FFFFFF] text-[13px] font-medium py-[5px] rounded-[15px]"
                                        >
                                            {tech}
                                        </div>
                                    ))}
                                </div>
                                <Button
                                    className="ButtonTransition overflow-hidden   "
                                    sx={{
                                        '&.MuiButtonBase-root': {
                                            backgroundColor: '#8184EB',
                                            color: 'white',
                                            overflow: 'hidden',
                                            display: 'flex',
                                            marginTop: '20px',
                                            justifyContent: 'start',
                                            alignItems: 'center',
                                            fontSize: {
                                                xs: '13px',


                                            },
                                            fontWeight: 'bold',
                                            textTransform: 'capitalize',
                                            padding: '8px 24px 8px 24px',
                                            border: '1px solid #8184EB',
                                            borderRadius: '30px',
                                            '&:hover': {
                                                border: '1px solid #8184EB',
                                                backgroundColor: 'transparent',
                                                color: '#8184EB',
                                            },
                                        },
                                    }}
                                >
                                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                                        Read more </a>

                                </Button>
                                {/*<div className="flex justify-start items-center">*/}
                                {/*    <a*/}
                                {/*        href={project.link}*/}
                                {/*        className="text-decoration-none"*/}
                                {/*    >*/}
                                {/*        <button*/}
                                {/*            className="bg-[#9F8CED] md:min-w-[90px] min-w-[70px] mt-[20px] text-[#FFFFFF] text-[13px] font-medium py-[5px] rounded-[15px] hover:bg-[newColor] focus:outline-none focus:ring focus:border-[borderColor] transition-all duration-200"*/}
                                {/*        >*/}
                                {/*            Read more*/}
                                {/*        </button>*/}
                                {/*    </a>*/}

                                {/*</div>*/}


                            </div>
                            <div>
                                <Img src={project.image} alt="none" className="w-auto"/>
                            </div>


                        </div>
                    ))}


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
