import React, { useEffect, useState } from "react";
import { Button } from "../../utils/Button";
import { Img } from "../../utils/Img";
import { useRouter } from "next/router";
import data from "../../data/config.json";
import headerData from "../../data/common/layout.json";
import Link from "next/link";

export const Header: React.FC<any> = () => {
  const router = useRouter();
  const [isSticky, setIsSticky] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const logo = !["/", "/home", "/partner", "/faq", "/contact"].includes(
    router.pathname
  )
    ? data.logo_dark
    : isSticky
    ? data.logo_dark
    : data.logo_light;
  const arrow = !["/", "/home", "/partner", "/faq", "/contact"].includes(
    router.pathname
  )
    ? "/images/arrow.svg"
    : !isSticky
    ? "/images/arrow.svg"
    : "/images/arrow-down.svg";
  const color = !["/", "/home", "/partner", "/faq", "/contact"].includes(
    router.pathname
  )
    ? "text-[white]"
    : isSticky
    ? "text-[white]"
    : "text-white";

  const handleScroll = () => {
    if (window.pageYOffset > 56) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };
  return (
    <div
      className={`md:pt-[30px]  pt-[16px] md:px-[65px] sm:px-[30px] px-[16px] w-full fixed top-0 left-0 right-0 header ${
        isSticky ? "header-sticky" : ""
      }`}
    >
        <div className="max-w-[1377.5px] mx-auto">
            <div className="flex items-center ml-[-18px]">
                <div onClick={() => router.push("/")} className="cursor-pointer">
                    <Img src={logo || ""} alt="Header Logo"
                         className="xxl:w-[130px] xl:w-[130px] sm:w-[291.6px] w-[150px] xl:h-[41px] sm:h-[37.67px] h-[20px]"/>
                </div>
                <div className="flex-1">
                    <div className="flex relative justify-center">
                      {
                        headerData.header.map((item: any, index: any)=>(
                          <div key={index} className="dropdown-button">
                            <div
                                className={`${color} xxl:text-[17px] mr-3.5 sm:text-[16px] text-[12px] md:leading-[27px] sm:leading-[17px] leading-[14px] tracking-[-0.24px] flex cursor-pointer`}
                                onClick={() => setOpen(!open)}
                            >
                                <span>{item.title}</span>
                                {item.heading && <Img src={arrow} alt="Arrow Down"
                                     className={`w-[8px] sm:ml-[7px] transition ${open ? 'rotate-[180deg]' : 'rotate[0]'} dropdown-icon`}/>}
                            </div>
                            { item.heading && <div
                                className={`${open ? 'block' : 'hidden'} bg-white absolute top-[35px] lg:top-[25px] left-[-110px] sm:left-[0] min-w-[300px] lg:min-w-[394px] rounded-[15px] xxl:px-[50] md:px-[30px] px-[12px] xxl:py-[44px] md:py-[30px] py-[12px] dropdown-container z-[99999]`}
                            >
                                <div
                                    className="text-[13px] leading-[25px] tracking-[0.8px] text-[#101D2C] mb-[14px] uppercase font-montserrat"
                                >
                                    {item.heading}
                                </div>
                                <div
                                    className="flex flex-col gap-[12px]"
                                >
                                    {
                                        item.data.map((heading: any, index: number) => {
                                            return <div key={index} className="flex gap-[14px] items-center">
                                                <Img
                                                  src={heading.icon}
                                                  alt={heading.label}
                                                  className="w-[20px] h-[20px]"
                                                />
                                                <Link href={heading.href?heading.href:""}>
                                                    <div
                                                      className="text-[#101D2C] xxl:text-[20px] text-[16px] xxl:leading-[44px] leading-[32px] tracking-[-0.18px]">
                                                      {heading.label}
                                                    </div>
                                                </Link>
                                            </div>
                                        })
                                    }
                                </div>
                            </div>}
                        </div>
                        ))
                      }
                    </div>
                </div>
                <div>
                    <Button
                        label="Book a Demo"
                        type="button"
                        color="primary"
                        className="xxl:text-[19px] text-white xxl:leading-[22.99px] font-semibold md:text-[15px] sm:text-[9px] text-[12px] sm:leading-[20.57px] leading-[14px] tracking-[-0.22px] md:w-[145px] w-[80px] xl:h-[44px] md:h-[38px] h-[35px]"
                        onClick={() => router.push("/getStarted")}
                    />
                </div>
            </div>
        </div>
    </div>
  );
};
