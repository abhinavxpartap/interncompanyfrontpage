import React from "react";
import Head from "next/head";
import seoData from "../../data/seoData.json";
import {ServiceBanner} from "../../components/serviceBanner";
import {IndustriesAbout} from "../../components/industriesAbout";
import {IndustriesCompliances} from "../../components/industriesCompliances";
import {IndustriesTechnology} from "../../components/industriesTechnology";
import {ServiceTech} from "../../components/servicesTech";
import {IndustriesEstimation} from "../../components/industriesEstimation";
import {IndustriesFaq} from "../../components/industriesFaq";
import {FreeQuotation} from "../../components/freeQuotation";
import Data from "../../data/blogData.json";
import {BlogCards} from "../../components/BlogCard";
import {Footer} from "../../components/footer";
import SuccesStory from "../../components/SuccesStory";
import FixedButton from "../../components/FixedButton";
import Float from "../../components/Float";
import pageData from "../../data/industry/Cloud Application Development.json";

const CloudApplicationPage: React.FC = () => {
    return (<>
            <Head>
                <title>{seoData.Cloud_Application_Development.title}</title>
                <meta name="description" content={seoData.Cloud_Application_Development.description}/>
                <meta name="keywords" content={seoData.Cloud_Application_Development.keywords}/>
                <meta name="title" content={seoData.Cloud_Application_Development.metaTitle}/>
            </Head>
            <div className="main">
                <ServiceBanner
                    image={pageData.BannerData.backgroundImage}
                    title={pageData.BannerData.title}
                    subtitle={pageData.BannerData.subtitle}
                    buttonName={pageData.BannerData.buttonName}
                    buttonLink={pageData.BannerData.buttonLink}
                />
                <div style={{background:"#F9FBFF"}} >
                    <IndustriesAbout
                        title={pageData.AboutBanner.title}
                        image={pageData.AboutBanner.image}
                        fintechData={pageData.AboutData}
                        buttonName={pageData.AboutBanner.buttonName}
                        buttonLink={pageData.AboutBanner.buttonLink}
                        satisfactionData={pageData.AboutNumberData}
                    />
                    <IndustriesCompliances
                        image={pageData.DevelopmentBanner.image}
                        title={pageData.DevelopmentBanner.title}
                        subtitle={pageData.DevelopmentBanner.subtitle}
                        data={pageData.DevelopmentData}
                    />
                    <Float/>
                    <SuccesStory/>
                    <IndustriesTechnology
                        title={pageData.TechnologyBanner.title}
                        subtitle={pageData.TechnologyBanner.subtitle}
                        data={pageData.TechnologyData}
                    />
                    <ServiceTech/>
                    <IndustriesEstimation
                        image={pageData.EstimationBanner.image}
                        title={pageData.EstimationBanner.title}
                        subtitle={pageData.EstimationBanner.subtitle}
                        data={pageData.EstimationData}
                        buttonName={pageData.EstimationBanner.buttonName}
                        buttonHref={pageData.EstimationBanner.buttonHref}
                    />
                    <IndustriesFaq
                        tabData={pageData.FaqData}
                        title={pageData.Faq.title}
                        spantitle={pageData.Faq.spantitle}
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

                    <Footer/>
                </div>
            </div>
        </>
    );
};
export default CloudApplicationPage;
