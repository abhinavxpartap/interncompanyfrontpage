import React, { useState } from 'react';
import { Img } from '../utils/Img';
import {  Grid, IconButton, Typography } from '@mui/material';
import {FaqInterFace} from "../types";

export const IndustriesFaq: React.FC<FaqInterFace> = (props) => {
  const { tabData, title, spantitle } = props;/* eslint-disable */
  const [openTabs, setOpenTabs] = useState([1]);

  const handleTabToggle = (tabId: number) => {
    if (openTabs.includes(tabId)) {
      setOpenTabs(openTabs.filter((id) => id !== tabId));
    } else {
      setOpenTabs([...openTabs, tabId]);
    }
  };

  const content = (
    <>
      <div className="max-w-[1377.5px] mx-auto flex items-center justify-between md:pt-[70px]  pt-[80px] pb-[80px] md:pb-[40px]">
        <div className="w-[100%] px-[20px] md:px-[60px] flex flex-col text-start items-center justify-center ">
          <h1 className="text-[#151448] text-[25px] md:text-[40px] pb-[20px] md:pb-[40px] font-bold">
            {title} <span className="text-[#8184EB]">{spantitle}</span>
          </h1>
          <div className="w-[100%] md:px-0 lg:w-[922px] flex flex-col gap-[20px] ">
            {tabData.map((tab: any) => (
              <Grid
                key={tab.id}
                className="px-[10px] md:px-[20px]  rounded-[8px]"
                style={{ border: '1.38px solid #DDDDDD' }}
              >
                <Grid container alignItems="center">
                  <Typography
                    variant="h4"
                    item
                    xs
                    onClick={() => handleTabToggle(tab.id)}
                    component={Grid}
                    sx={{
                      fontSize: "16px", // text-[16px]
                      '@media (min-width: 768px)': {
                        fontSize: "18px", // md:text-[18px]
                        lineHeight: "26px", // md:leading-[26px]
                      },
                      fontWeight: "medium", // font-medium
                      lineHeight: "22px", // leading-[22px]
                      letterSpacing: "0.5px", // tracking-[0.5px]
                      padding: "3px", // p-3
                      color: openTabs.includes(tab.id) ? "#8184EB" : "#333333", // Conditional text color
                    }}


                  >
                    {tab.title}
                  </Typography>
                  <Grid sx={{
                    padding: "4px", // p-1
                    '@media (min-width: 768px)': {
                      padding: "12px", // md:p-3
                    },
                  }}>
                    <IconButton onClick={() => handleTabToggle(tab.id)}>
                      {!openTabs.includes(tab.id) ? (
                        <Img
                          src="/drop.svg"
                          className="w-[80%] md:w-[100%]"
                          alt="icon"
                        />
                      ) : (
                        <Img
                          src="/drop1.svg"
                          className="w-[80%] md:w-[100%]"
                          alt="icon"
                        />
                      )}
                    </IconButton>
                  </Grid>
                </Grid>
                {openTabs.includes(tab.id) && (
                  <>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        fontSize: "13px", // text-[13px]
                        lineHeight: "20px", // leading-[20px]
                        '@media (min-width: 768px)': {
                          fontSize: "16px", // md:text-[16px]
                          lineHeight: "22px", // md:leading-[22px]
                          paddingBottom: "20px", // mb:pb-[20px]

                        },
                        fontWeight: "normal", // font-normal
                        letterSpacing: "0.5px", // tracking-[0.5px]
                        paddingLeft: "3px", // pl-3
                        paddingBottom: "10px", // pb-[10px]
                        color: "#4B5A69", // text-[#4B5A69]
                      }}
                    >
                      {tab.content}
                    </Typography>
                    <div className="flex flex-col pb-[10px] md:pb-[20px]">
                      {tab.data.map((item: any, index: number) => (
                        <ul
                          key={index}
                          className="list-disc pl-7 pb-[8px] text-[#4B5A69] text-[13px] leading-[20px] md:text-[16px] font-normal md:leading-[22px] tracking-[0.5px]"
                        >
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
  );
  return (
    <>
      <div>{content}</div>
    </>
  );
};
