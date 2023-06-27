import React,{useState} from "react";
import {Img} from "../utils/Img";
import {Button, Grid, IconButton, Typography} from '@mui/material';


export const ServicesFaq: React.FC<any> = (props) => {
    const {title,subtitle,buttonName,tabsData} = props;
    const [openTabs, setOpenTabs] = useState([2]);

    const handleTabToggle = (tabId:number) => {
        if (openTabs.includes(tabId)) {
            setOpenTabs(openTabs.filter((id) => id !== tabId));
        } else {
            setOpenTabs([...openTabs, tabId]);
        }
    }

    const content = <>
        <div
            className="max-w-[1377.5px] flex items-center justify-between md:pt-[80px]  pt-[30px] pb-[30px] md:pb-[80px]"
        >
            <div className="w-[100%] px-[40px] flex flex-row justify-between text-start  items-center">
                <div className="w-[30vw]">
                    <h1 className="font-bold text-[40px] leading-[48px] text-[#151448]">{title}</h1>
                    <p className="text-[#333333] mt-[20px] pr-[20px] text-[16px] font-medium">{subtitle}</p>
                    <Button
                        className="text-[16px] mt-[20px] font-semibold "
                        sx={{
                            '&.MuiButtonBase-root': {
                                backgroundColor: '#177DF0',
                                color: 'white',
                                textTransform: 'capitalize',
                                padding: '8px 24px 8px 24px',
                                border: '1px solid #5CA9FF',
                                borderRadius:"30px",
                                '&:hover': {
                                    border: '1px solid #5CA9FF',
                                    backgroundColor: 'transparent',
                                    color: '#177DF0',
                                },
                            },
                        }}
                    >
                        {buttonName}

                    </Button>
                </div>
                <div className="w-[55vw] flex flex-col gap-[20px] ">
                    {tabsData.map((tab:any) => (
                        <Grid
                            key={tab.id}
                            className="px-[20px]  rounded-[8px] bg-[white]"
                            style={{boxShadow: 'rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px'}}
                        >
                            <Grid container alignItems="center">
                                <Typography
                                    variant="h4"
                                    item
                                    xs
                                    onClick={() => handleTabToggle(tab.id)}
                                    component={Grid}
                                    className={`text-[15px] font-medium leading-[26px] tracking-[0.5px] p-3 ${
                                        openTabs.includes(tab.id) ? 'text-[#177DF0]' : 'text-[#000000]'
                                    }`}
                                >
                                  <span>{tab.id}.</span>  {tab.title}
                                </Typography>
                                <Grid className="p-3">
                                    <IconButton>
                                        {!openTabs.includes(tab.id) ? (<Img src="/downIcon.svg" className="w-[100%]" alt="icon" />) : (<Img src="/activedropdown.svg" className="w-[100%]" alt="icon" />)}
                                    </IconButton>
                                </Grid>
                            </Grid>
                            {openTabs.includes(tab.id) && (
                                <Typography
                                    variant="subtitle1"
                                    className="text-[14px] font-normal leading-[22px] tracking-[0.5px] pl-3  pb-[20px] text-[#757B8A]"
                                >
                                    {tab.content}
                                </Typography>
                            )}
                        </Grid>
                    ))}
                </div>
            </div>
        </div>
    </>
    return (
        <>
            <div
                style={{background:"#F9FBFF"}}
                className="bg-cover bg-center bg-no-repeat relative  block"
            >
                {content}
            </div>
        </>
    );
};
