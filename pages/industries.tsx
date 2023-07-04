import React from "react";
import Head from "next/head";
import seoData from "../data/seoData.json";
import Blogs from "../data/blogData.json"
import industryData from "../data/industries.json";
import {ServiceBanner} from "../components/serviceBanner";
import {IndustriesAbout} from "../components/industriesAbout";
import {IndustriesCompliances} from "../components/industriesCompliances";
import {IndustriesTechnology} from "../components/industriesTechnology";
import {ServiceTech} from "../components/servicesTech";
import {IndustriesEstimation} from "../components/industriesEstimation";
import {IndustriesFaq} from "../components/industriesFaq";
import {FreeQuotation} from "../components/freeQuotation";
import Data from "../data/blogData.json";
import {BlogCards} from "../components/BlogCard";
import {Button} from "@mui/material";
import {Img} from "../utils/Img";
import serviceData from "../data/service.json";
import CaseStudy from "../components/Case Study";
import {Footer} from "../components/footer";

const IndustriesPage: React.FC = () => {
    return (<>
            <Head>
                <title>{seoData.industries.title}</title>
                <meta name="description" content={seoData.industries.description}/>
                <meta name="keywords" content={seoData.industries.keywords}/>
                <meta name="title" content={seoData.industries.metaTitle}/>
            </Head>
            <div className="main">
                <ServiceBanner
                    image={industryData.Banner.image}
                    mobileImage={industryData.Banner.mobileImage}
                    title={industryData.Banner.title}
                    subtitle={industryData.Banner.subtitle}
                    button={industryData.Banner.button}
                />
                <div style={{background:"#F9FBFF"}} >
                <IndustriesAbout
                title={industryData.About.title}
                image={industryData.About.image}
                button={industryData.About.button}
                fintechData={industryData.About.fintechData}
                satisfactionData={industryData.About.satisfactionData}
                />
                    <IndustriesCompliances
                    image={industryData.Compliances.image}
                    title={industryData.Compliances.title}
                    subtitle={industryData.Compliances.subtitle}
                    data={industryData.Compliances.data}
                    />
                    <CaseStudy/>
                    <IndustriesTechnology
                    title={industryData.Technology.title}
                    subtitle={industryData.Technology.subtitle}
                    data={industryData.Technology.data}
                    />
                    <ServiceTech
                        data={industryData.Tech.data}
                        title={industryData.Tech.title}
                        subtitle={industryData.Tech.subtitle}
                        Paragraph={industryData.Tech.Paragraph}
                        button={industryData.Tech.button}
                    />
                    <IndustriesEstimation
                    image={industryData.Estimation.image}
                    title={industryData.Estimation.title}
                    subtitle={industryData.Estimation.subtitle}
                    data={industryData.Estimation.data}
                    button={industryData.Estimation.button}
                    />
                    <IndustriesFaq
                    tabsData={industryData.Faq.tadData}
                    title={industryData.Faq.title}
                    spantitle={industryData.Faq.spantitle}
                    />
                    <div className="max-w-[1377.5px] mx-auto">
                        <div className=" w-[100%] flex flex-col px-[20px] md:px-[40px] mb-[30px]">
                            <h1 className="text-[#151448] text-center mb-[25px]  text-[30px] md:text-[60px] font-semibold">Resources & Articles </h1>
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
                            </div>
                        </div>
                    </div>
                    <FreeQuotation/>
                    <Footer/>
                </div>
            </div>
        </>
    );
};
export default IndustriesPage;
