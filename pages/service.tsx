import React from "react";
import Head from "next/head";

import seoData from "../data/seoData.json";
import serviceData from "../data/service.json";
import {ServiceBanner} from "../components/serviceBanner";
import {ServiceAbout} from "../components/servicesAbout";
import {ServiceProcess} from "../components/serviceProcess";
import {ServicesDevelopment} from "../components/servicesDevelopment";
import {ServicesFaq} from "../components/serviceFaq";
import {ServicesAssurance} from "../components/serviceAssurance";
import {ServiceTech} from "../components/servicesTech";
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
                title={serviceData.Banner.title}
                subtitle={serviceData.Banner.subtitle}
                />
                <div style={{background:"#F9FBFF"}} >
                <ServiceAbout
                title={serviceData.About.title}
                subtitle={serviceData.About.subtitle}
                paragraph={serviceData.About.paragraph}
                image={serviceData.About.image}
                />
                <ServiceProcess
                title={serviceData.Process.title}
                subtitle={serviceData.Process.subtitle}
                data={serviceData.Process.data}
                />
                <ServicesDevelopment
                title={serviceData.Development.title}
                subtitle={serviceData.Development.subtitle}
                LeftData={serviceData.Development.leftData}
                CenterContent={serviceData.Development.centerContent}
                RightData={serviceData.Development.rightData}
                ButtonName={serviceData.Development.buttonName}
                />
                <ServicesFaq
                    title={serviceData.Faq.title}
                    subtitle={serviceData.Faq.subtitle}
                    buttonName={serviceData.Faq.buttonName}
                    tabsData={serviceData.Faq.tadData}
                />
                    <ServicesAssurance
                    image={serviceData.Assurance.image}
                    data={serviceData.Assurance.data}
                    buttonName={serviceData.Assurance.buttonName}
                    />
                    <ServiceTech
                    data={serviceData.Tech.data}
                    title={serviceData.Tech.title}
                    subtitle={serviceData.Tech.subtitle}
                    />
                </div>
            </div>
        </>
    );
};
export default ServicePage;
