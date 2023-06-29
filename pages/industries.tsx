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
import {Blog} from "../components/Blog";
import {FreeQuotation} from "../components/freeQuotation";

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
                    buttonName={industryData.Banner.buttonName}
                />
                <div style={{background:"#F9FBFF"}} >
                <IndustriesAbout
                title={industryData.About.title}
                image={industryData.About.image}
                buttonName={industryData.About.buttonName}
                fintechData={industryData.About.fintechData}
                satisfactionData={industryData.About.satisfactionData}
                />
                    <IndustriesCompliances
                    image={industryData.Compliances.image}
                    title={industryData.Compliances.title}
                    subtitle={industryData.Compliances.subtitle}
                    data={industryData.Compliances.data}
                    />
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
                        buttonName={industryData.Tech.buttonName}
                    />
                    <IndustriesEstimation
                    image={industryData.Estimation.image}
                    title={industryData.Estimation.title}
                    subtitle={industryData.Estimation.subtitle}
                    data={industryData.Estimation.data}
                    buttonName={industryData.Estimation.buttonName}
                    />
                    <IndustriesFaq
                    tabsData={industryData.Faq.tadData}
                    title={industryData.Faq.title}
                    spantitle={industryData.Faq.spantitle}
                    />
                    <Blog
                        title={industryData.Blog.title}
                        BlogData={Blogs.BlogData}
                    />

                    <FreeQuotation/>
                </div>
            </div>
        </>
    );
};
export default IndustriesPage;
