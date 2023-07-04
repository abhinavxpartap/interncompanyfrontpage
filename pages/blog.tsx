import React,{useState} from "react";
import Head from "next/head";
import seoData from "../data/seoData.json";
import Data from "../data/blogData.json";
import {BlogCards} from "../components/BlogCard";
import {Img} from "../utils/Img";
import {Button} from "@mui/material";
import {GetStories} from "../components/getStories";
import {useRouter} from "next/router";
import {Header} from "../components/Common/Header";
import {Footer} from "../components/footer";

const BlogPage: React.FC = () => {
    const [isActive, setIsActive] = useState(0);

    const handleClick = (index:number) => {
        setIsActive(index);
    };
    const router = useRouter();
    return (<>
            <Head>
                <title>{seoData.Blog.title}</title>
                <meta name="description" content={seoData.Blog.description}/>
                <meta name="keywords" content={seoData.Blog.keywords}/>
                <meta name="title" content={seoData.Blog.metaTitle}/>
            </Head>
            <div className="main mx-auto" style={{background:"#F9FBFF"}}>
                <div className="bg-white">
                    <Header/>
                </div>
                <div className="w-[100%] max-w-[1377.5px] mx-auto flex flex-col px-0 md:px-[40px] items-center justify-center" style={{background:"#F9FBFF"}} >
                    <div className="w-[100%] flex flex-col lg:flex-row items-center py-[50px] md:py-[100px] gap-[40px]">
                        <div className="relative w-[90vw] rounded-[10px]  lg:w-[48vw]">
                            <Img src="/BlogImage.svg" className="w-[100%]" alt={"BlogImage"}/>
                            <div
                                className="absolute top-[11px] right-[11px]  rounded-[5px] px-[10px] xxl:text-[16px] md:text-[13px] leading-[28px] text-[white] font-medium"
                                style={{ background: '#31D7A9',boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px' }}
                            >
                                Healthcare & Fitness
                            </div>
                        </div>
                        <div className="w-[90vw] lg:w-[48vw] flex flex-col gap-[15px]">
                            <h1 className="text-[#151448] text-[22px] leading-[28px] md:leading-[45px] md:text-[35px] font-semibold">How much does it cost to build a HIPAA-Compliant platform for medical supplies delivery?</h1>
                            <p className="text-[#444444] text-[14px] md:text-[16px] font-normal">In the current era of global interconnectivity, where healthcare information is increasingly being shared through digital means, safeguarding patient privacy and upholding data security are . . . . .</p>
                            <p className="text-[#444444] text-[14px] md:text-[16px] font-normal">Author Name  20 Jun 2023</p>
                        </div>
                    </div>
                    <div> <h1 className="text-center text-[#151448] font-semibold text-[40px] md:text-[60px] capitalize pb-[20px] md:pb-[30px]">Latest Articles</h1> </div>

                    <div className="w-[100%] px-[20px] gap-[20px] md:px-0  flex flex-col lg:flex-row  justify-between">
                        <div className=" w-[90vw] md:w-[90vw] pb-[40px] lg:pb-0 lg:w-[30vw] flex flex-col">
                            <h1 className="text-[#444444] text-[24px] font-normal">Categories</h1>
                            <hr className="border-[1px] w-[97%] mt-[10px] border-[#818181]"/>
                            <div className="flex flex-wrap mt-[25px] gap-[15px]">
                                {Data.BlogData.map((item:any, index:number) => (
                                    <Button
                                        className={`md:text-[10px] lg:text-[13px] xl:text-[16px] ${isActive === index ? 'bg-[#177DF0]' : ''}`}
                                        key={index}
                                        sx={{
                                            color: isActive === index ? '#ffffff' : '#444',
                                            borderRadius: '10px',
                                            padding: '5px 12px',
                                            border: isActive === index ? '1px solid #177DF0' : '1px solid #5F5F5F',
                                            textTransform: 'capitalize',
                                            '&:hover': {
                                                color: '#ffffff',
                                                backgroundColor: '#177DF0',
                                                border: '1px solid #177DF0',
                                            },
                                        }}
                                        onClick={() => handleClick(index)}
                                    >
                                        {item.categories}
                                    </Button>
                                ))}

                            </div>
                        </div>
                        <div className="w-[90vw] lg:w-[60vw]   gap-[40px] grid grid-cols-1 md:grid-cols-2">
                             {Data.BlogData.slice(0, 6).map((item:any, index:number) => (
                                <BlogCards
                                key={index}
                                AuthorName={item.AuthorName}
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
                    <div className="max-w-[1377.5px] ">
                        <div className="w-[100%] flex flex-col px-[20px] md:px-[40px] py-[50px]">
                            <h1 className="text-[#151448] text-start mb-[25px] text-[38px] md:text-[60px] font-semibold">Popular Articles</h1>
                            <div className="w-[100%] mx-auto md:mx-0">
                                <div className="w-[100%] gap-[40px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                                    {Data.BlogData.slice(0, 3).map((item:any, index:number) => (
                                        <BlogCards
                                            key={index}
                                            AuthorName={item.AuthorName}
                                            img={item.image}
                                            title={item.title}
                                            description={item.description}
                                            url={item.URL}
                                            categories={item.categories}
                                            Date={item.Date}
                                        />
                                    ))}
                                </div>
                                <div className="flex justify-center items-center mt-[30px]">
                                    <Button
                                        onClick={()=> router.push("/")}
                                        className="text-[14px] md:text-[16px] capitalize font-semibold"
                                        sx={{
                                            backgroundColor:"transparent",
                                            border:"2px solid #0092FF",
                                            padding:"8px 30px",
                                            borderRadius:"30px",
                                            color:"#0092FF",
                                            position: 'relative',
                                            overflow: 'hidden',
                                            '&::before': {
                                                content: '""',
                                                position: 'absolute',
                                                top: 0,
                                                left: 0,
                                                width: '100%',
                                                height: '100%',
                                                zIndex: 0,
                                                opacity: 1,
                                                transform: 'translate(-105%, 0px)',
                                                backgroundColor: 'rgba(0, 146, 255, 0.1)',
                                                animation: 'btn-animate 1s infinite ease-in-out',
                                            },
                                            '&:hover::before': {
                                                display: 'none',
                                            },
                                            '@keyframes btn-animate': {
                                                '0%': {
                                                    transform: 'translate(-105%, 0px)',
                                                },
                                                '100%': {
                                                    transform: 'translate(0, 0)',
                                                },
                                            },
                                        }}
                                    >
                                        View All Articles
                                        <span className="ml-[10px]">
                                    <Img src="/rightArrow.svg" className="w-[80%]" alt={"Icon"}/>
                                </span>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
                <GetStories/>
                <Footer/>
            </div>
        </>
    );
};
export default BlogPage;
