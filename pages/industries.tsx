import React from "react";
import Head from "next/head";
import seoData from "../data/seoData.json";
import serviceData from "../data/service.json";
import {ServiceBanner} from "../components/serviceBanner";

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
                    image={serviceData.Banner.image}
                    mobileImage={serviceData.Banner.mobileImage}
                    title={serviceData.Banner.title}
                    subtitle={serviceData.Banner.subtitle}
                />
                <div style={{background:"#F9FBFF"}} >

                </div>
            </div>
        </>
    );
};
export default IndustriesPage;
