import React, {useState} from "react";
import {Img} from "../utils/Img";
import {Button, Grid, IconButton, Typography} from "@mui/material";

export const IndustriesFaq: React.FC<any> = (props) => {
    const {tabsData,title,spantitle} = props;
    const [openTabs, setOpenTabs] = useState([1]);

    const handleTabToggle = (tabId:number) => {
        if (openTabs.includes(tabId)) {
            setOpenTabs(openTabs.filter((id) => id !== tabId));
        } else {
            setOpenTabs([...openTabs, tabId]);
        }
    }

    const content = <>
        <div
            className="max-w-[1377.5px] flex items-center justify-between md:pt-[120px]  pt-[30px] pb-[30px] md:pb-[120px]"
        >
            <div className="w-[100%] px-[60px] flex flex-col text-start items-center justify-center ">
                <h1 className="text-[#151448] text-[40px] pb-[40px] font-bold">{title} <span className="text-[#2C98F0]">{spantitle}</span></h1>
                <div className="w-[922px] flex flex-col gap-[20px] ">
                    {tabsData.map((tab:any) => (
                        <Grid
                            key={tab.id}
                            className="px-[20px]  rounded-[8px]"
                            style={{border:'1.38px solid #DDDDDD'}}
                        >
                            <Grid container alignItems="center">
                                <Typography
                                    variant="h4"
                                    item
                                    xs
                                    onClick={() => handleTabToggle(tab.id)}
                                    component={Grid}
                                    className={`text-[18px] font-medium leading-[26px] tracking-[0.5px] p-3 ${
                                        openTabs.includes(tab.id) ? 'text-[#177DF0]' : 'text-[#333333]'
                                    }`}
                                >
                                    {tab.title}
                                </Typography>
                                <Grid className="p-3">
                                    <IconButton
                                        onClick={() => handleTabToggle(tab.id)}
                                    >
                                        {!openTabs.includes(tab.id) ? (<Img src="/drop.svg" className="w-[100%]" alt="icon" />) : (<Img src="/drop1.svg" className="w-[100%]" alt="icon" />)}
                                    </IconButton>
                                </Grid>
                            </Grid>
                            {openTabs.includes(tab.id) && (
                                <>
                                <Typography
                                    variant="subtitle1"
                                    className="text-[16px] font-normal leading-[22px] tracking-[0.5px] pl-3  pb-[20px] text-[#4B5A69]"
                                >
                                    {tab.content}
                                </Typography>
                                    <div className="flex flex-col pb-[20px]">
                                    {tab.data.map((item:any,index:number) => (
                                    <ul key={index} className="list-disc pl-7 pb-[8px] text-[#4B5A69] text-[16px] font-normal leading-[22px] tracking-[0.5px]">
                                        <li>{item.title}</li>
                                    </ul>
                                    ))}
                                    </div>
                                </>
                            )}
                        </Grid>
                    ))}
                </div>
            </div>
        </div>
    </>
    return (
        <>
            <div>
                {content}
            </div>
        </>
    );
};

