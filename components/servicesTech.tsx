import React, {useContext, useEffect, useState} from 'react';
import { Img } from '../utils/Img';
import { Button } from '@mui/material';
import { useRouter } from 'next/router';
import { TechHeader, TechSectionInterface} from "../types";
import {LoaderContext} from "../context/LoaderContext";

export const ServiceTech: React.FC = () => {
  const router = useRouter();
  const { setIsLoading } = useContext(LoaderContext);

  const [TechData, setTechData] = useState<TechSectionInterface>({
    bannerData:{
      title: '',
      subtitle1: '',
      subtitle2: '',
      buttonName:'',
      buttonLink:'',
    },
    header:[],
  });

  useEffect(() => {
    setIsLoading(true);
    fetch("/api/common/GET/OurTech")
        .then((response) => response.json())
        .then((data) => {
          setTechData(data);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching banner data:", error);
        });
  }, []);

  const content = (
    <>
      <div className="max-w-[1377.5px] mx-auto flex items-center justify-between   ">
        <div className="w-[100%] mx-auto flex flex-col text-center items-center justify-center ">
          <h1 className="text-[#333333] font-bold text-[24px] md:text-[30px]">
            {TechData.bannerData.title}
          </h1>
          <p className="text-[#747C85] w-[90%] font-medium text-[14px] md:text-[18px] pt-[10px] ">
            {TechData.bannerData.subtitle1}
          </p>
          <div className="w-[100%] flex items-center justify-center">
            <div className="w-[90%] pt-[60px]  justify-between gap-[50px]  grid grid-cols-3 md:grid-cols-6 text-start ">
              {TechData.header.map((item:TechHeader, index: number) => (
                <div
                  key={index}
                  className="w-[70px] mx-auto flex items-center jusitfy-center"
                >
                  <Img
                    src={item.image}
                    className="w-[100%] felx items-center justify-center"
                    alt={item.alt}
                  />
                </div>
              ))}
            </div>
          </div>
          <p className="text-[#747C85] font-medium text-[14px] md:text-[18px] mt-[60px] ">
            {TechData.bannerData.subtitle2}
          </p>
          <div className="mt-[20px]">
            <Button
              onClick={() => router.push(TechData.bannerData.buttonLink)}
              className="ButtonTransition  "
              sx={{
                '&.MuiButtonBase-root': {
                  backgroundColor: '#8184EB',
                  color: 'white',
                  overflow: 'hidden',
                  fontSize: {
                    xs: '14px',
                    md: '16px',

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
              {TechData.bannerData.buttonName}
            </Button>
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
