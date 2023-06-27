import React from "react";
import Head from "next/head";

import seoData from "../data/seoData.json";
import serviceData from "../data/service.json";
import {ServiceBanner} from "../components/serviceBanner";
const ServicePage: React.FC = () => {
    return (<>
            <Head>
                <title>{seoData.service.title}</title>
                <meta name="description" content={seoData.service.description}/>
                <meta name="keywords" content={seoData.service.keywords}/>
                <meta name="title" content={seoData.service.metaTitle}/>
            </Head>
            <div className="main">
                <ServiceBanner
                image={serviceData.Banner.image}
                mobileImage={serviceData.Banner.mobileImage}
                />
            </div>
        </>
    );
};
export default ServicePage;
