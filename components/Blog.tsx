import React from "react";
import {BlogCards} from "./BlogCard";


export const Blog: React.FC<any> = (props) => {
    const{BlogData,title} =props;


    const content = <>
        <div
            className="max-w-[1377.5px] mx-auto flex items-center justify-between md:pt-[120px]  pt-[30px] pb-[30px] md:pb-[120px]"
        >
            <div className="w-[100%] px-[60px] flex flex-col text-start items-center justify-center ">
                <h1 className="text-[#151448] text-center text-[40px] font-bold mb-[50px]">{title}</h1>
                <div className="grid grid-cols-3 gap-[30px]">
                    {BlogData.map((item:any,index:number) => (
                            <BlogCards
                                key={index}
                                img={item.image}
                                title={item.title}
                                description={item.description}
                                url={item.URL}
                                categories={item.categories}
                                Date={item.Date}
                            />
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

