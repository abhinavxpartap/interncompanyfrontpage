import React from "react";
import Head from "next/head";
import seoData from "../data/seoData.json";
import industryData from "../data/industries.json";
import FaqData from "../data/common/industriesFAQ.json";
import industryAboutData from "../data/industriesAbout.json";
import industryDevelopment from "../data/indsutreisDevelopment.json";
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
import {Footer} from "../components/footer";
import SuccesStory from "../components/SuccesStory";
import FixedButton from "../components/FixedButton";
import Float from "../components/Float";
import Chat from "../components/Chat";

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
                    image={industryData.Banner.backgroundImage}
                    title={industryData.Banner.title}
                    subtitle={industryData.Banner.subtitle}
                    buttonName={industryData.Banner.buttonName}
                    buttonLink={industryData.Banner.buttonLink}
                />
                <div style={{background:"#F9FBFF"}} >
                <IndustriesAbout
                title={industryAboutData.bannerData.title}
                image={industryAboutData.bannerData.image}
                fintechData={industryAboutData.header}
                buttonName={industryAboutData.bannerData.buttonName}
                buttonLink={industryAboutData.bannerData.buttonLink}
                satisfactionData={industryAboutData.NumberData}
                />
                    <IndustriesCompliances
                    image={industryDevelopment.bannerData.image}
                    title={industryDevelopment.bannerData.title}
                    subtitle={industryDevelopment.bannerData.subtitle}
                    data={industryDevelopment.header}
                    />
                    <Float/>
                    <SuccesStory/>
                    <IndustriesTechnology
                    title={industryData.Technology.title}
                    subtitle={industryData.Technology.subtitle}
                    data={industryData.Technology.data}
                    />
                    <ServiceTech/>
                    <IndustriesEstimation
                    image={industryData.Estimation.image}
                    title={industryData.Estimation.title}
                    subtitle={industryData.Estimation.subtitle}
                    data={industryData.Estimation.data}
                    buttonName={industryData.Estimation.button.name}
                    buttonHref={industryData.Estimation.button.href}
                    />
                    <IndustriesFaq
                    tabData={FaqData.header}
                    title={industryData.Faq.title}
                    spantitle={industryData.Faq.spantitle}
                    />
                    <div className="max-w-[1377.5px] mx-auto">
                        <div className=" w-[100%] flex flex-col px-[20px] md:px-[40px] mb-[30px]">
                            <h1 className="text-[#151448] text-center mb-[25px]  text-[30px] md:text-[60px] font-semibold">Resources & Articles </h1>
                            <div className="w-[100%] mx-auto md:mx-0">
                                <div className="w-[100%] gap-[40px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                                    {Data.BlogData.slice(0, 3).map((item, index:number) => (
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
                    <FixedButton />
                    {/*<Chat/>*/}

                    <Footer/>
                </div>
            </div>
        </>
    );
};
export default IndustriesPage;
