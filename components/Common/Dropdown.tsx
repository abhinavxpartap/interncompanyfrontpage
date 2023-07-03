import React, {FC} from "react";
import {Img} from "../../utils/Img";
import Link from "next/link";
import {useRouter} from "next/router";

interface DropdownInterface {
    title: string;
    items: any;
    open: boolean;
    setOpen: () => any;
    isSticky: boolean;
    href: any;
}

export const Dropdown: FC<DropdownInterface> = (props) => {
    const {title, items, open, setOpen, isSticky, href} = props;
    const router = useRouter();
    const arrow = !["/", "/home", "/partner", "/faq", "/contact", "/ourStory", "/term"].includes(
        router.pathname
    )
        ? "/images/arrow.svg"
        : !isSticky
            ? "/images/arrow-down.svg"
            : "/images/arrow.svg";
    const color = !["/", "/home", "/partner", "/faq", "/contact", "/ourStory", "/term"].includes(
        router.pathname
    )
        ? "text-[white]"
        : isSticky
            ? "text-[white]"
            : "text-white";
    const arrowBlack = !["/", "/home", "/partner", "/faq", "/contact", "/ourStory"].includes(router.pathname)
    || !isSticky
        ? "/images/arrow.svg"
        : "/images/arrow.svg";
    const colorBlack = !["/", "/home", "/partner", "/faq", "/contact", "/ourStory"].includes(
        router.pathname
    )
        ? "text-[#000000]"
        : isSticky
            ? "text-[#000000]"
            : "text-black";
    const handleRedirect = () => {
        if (items && ((items.data && items.data.length == 0) || !items.data)) {
            router.push(items.href);
        }
    };
    return <>
        <div className="dropdown-button hidden lg:block">
            <div onClick={handleRedirect}
                className={`${color} xxl:text-[17px] sm:text-[16px] text-[12px] md:leading-[27px] sm:leading-[17px] leading-[14px] tracking-[-0.24px] flex cursor-pointer`}
            >
                <span className="text-[16px] font-medium  " > {title}</span>
                {items && items.data && items.data.length > 0 && <Img src={arrow} alt="Arrow Down"
                     className={`w-[8px] sm:ml-[7px] transition ${open ? 'rotate-[180deg]' : 'rotate[0]'} dropdown-icon`}/>}
            </div>
            {items && items.data && items.data.length > 0 &&  <div
                className={`${open ? 'block' : 'hidden'} bg-white absolute top-[35px] lg:top-[25px] left-[-155px] sm:left-[0] min-w-[300px] lg:min-w-[394px] rounded-[15px] xxl:px-[35] md:px-[20px] px-[2px] xxl:py-[36px] md:py-[22px] py-[8px] dropdown-container z-[99999]`}
            >
                <div
                    className="text-[13px] leading-[25px] tracking-[0.8px] text-[#101D2C] mb-[14px] uppercase font-montserrat"
                >
                    {items.title}
                </div>
                {items && items.data && items.data.length > 0 && <div
                    className="flex flex-col gap-[4px]"
                >
                    {
                        items.data.map((item: any, index: number) => {
                            return <div key={index}
                                        className="flex gap-[14px] items-center hover:bg-[#D8D8D837] transition-all rounded-[6px] px-[15px]  py-[4px]">
                                {
                                    item.icon && <Img
                                        src={item.icon}
                                        alt={item.label}
                                        className="w-[20px] h-[20px]"
                                    />
                                }
                                <Link href={item.href}>
                                    <div
                                        className="text-[#101D2C] xxl:text-[20px] text-[16px] xxl:leading-[44px] leading-[32px] tracking-[-0.18px]">
                                        {item.label}
                                    </div>
                                </Link>
                            </div>
                        })
                    }
                </div>}
            </div>}
        </div>
        <div className="dropdown-button relative w-auto h-auto lg:hidden">
            <div className="flex flex-row" onClick={setOpen}>
                <div
                    className={`${colorBlack}  text-[17px] gap-[6px] flex justify-start items-start w-full md:leading-[27px] sm:leading-[17px] leading-[14px] tracking-[-0.24px] cursor-pointer`}
                >
                    <span className="mb-[10px] text-[16px] font-medium">{title}</span>
                </div>

                <div className="w-[20px] h-[20px] flex items-center justify-center cursor-pointer">
                    {items && items.data && items.data.length > 0 && <Img src={arrowBlack} alt="Arrow Down"
                         className={`w-[12px] mt-[5px] justify-end items-end sm:ml-[7px] transition ${open ? 'rotate-[180deg]' : 'rotate[0]'} dropdown-icon`}/>}
                </div>
            </div>
            {items && items.title && <div
                className={`${open ? 'block' : 'hidden'} bg-white relative w-full lg:my-[10px] rounded-[15px] xxl:px-[50] lg:px-[30px] px-[12px] xxl:py-[44px] lg:py-[30px] dropdown-container z-[99999]`}
            >
                 <div
                    className="text-[13px] leading-[25px] font-medium tracking-[0.8px] text-[#101D2C] mb-[14px] uppercase font-montserrat"
                >
                    {items.title}
                </div>
                {items && items.data && items.data.length > 0 && <div
                    className="flex flex-col gap-[12px]"
                >
                    {
                        items.data.map((item: any, index: number) => {
                            return <div key={index} className="flex gap-[14px] items-center">
                                {
                                    item.icon && <Img
                                        src={item.icon}
                                        alt={item.label}
                                        className="w-[20px] h-[20px]"
                                    />
                                }
                                <Link href={item.href}>
                                    <div
                                        className="text-[#101D2C] xxl:text-[20px] text-[16px] xxl:leading-[44px] leading-[32px] tracking-[-0.18px]">
                                        {item.label}
                                    </div>
                                </Link>
                            </div>
                        })
                    }
                </div>}
            </div>}
        </div>
    </>
}