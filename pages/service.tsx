import React from "react";
import Head from "next/head";
import seoData from "../data/seoData.json";
import serviceData from "../data/service.json";
import developmentData from "../data/serviceDevelopment.json"
import ProcessData from "../data/ServiceProcess.json"
import serviceFaqData from "../data/serviceFaq.json"
import serviceAssurance from "../data/serviceAssurance.json"
import {ServiceBanner} from "../components/serviceBanner";
import {ServiceAbout} from "../components/servicesAbout";
import {ServiceProcess} from "../components/serviceProcess";
import {ServicesDevelopment} from "../components/servicesDevelopment";
import {ServicesFaq} from "../components/serviceFaq";
import {ServicesAssurance} from "../components/serviceAssurance";
import {ServiceTech} from "../components/servicesTech";
import {FreeQuotation} from "../components/freeQuotation";
import {OurBrands} from "../components/ourBrands";
import {Footer} from "../components/footer";
import FixedButton from "../components/FixedButton";
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
                image={serviceData.Banner.backgroundImage}
                title={serviceData.Banner.title}
                subtitle={serviceData.Banner.subtitle}
                buttonName={serviceData.Banner.buttonName}
                buttonLink={serviceData.Banner.buttonLink}
                 />
                <div style={{background:"#F9FBFF"}} >
                <ServiceAbout
                title={serviceData.About.title}
                subtitle={serviceData.About.subtitle}
                paragraph={serviceData.About.paragraph}
                image={serviceData.About.image}
                />
                <ServiceProcess
                title={ProcessData.bannerData.title}
                subtitle={ProcessData.bannerData.subtitle}
                data={ProcessData.header}
                />
                <ServicesDevelopment
                title={developmentData.bannerData.title}
                subtitle={developmentData.bannerData.subtitle}
                leftData={developmentData.headerLeft}
                centerContent={developmentData.bannerData.centerContent}
                rightData={developmentData.headerRight}
                buttonName={developmentData.bannerData.buttonName}
                buttonLink={developmentData.bannerData.buttonLink}
                />
                <ServicesFaq
                    title={serviceFaqData.bannerData.title}
                    subtitle={serviceFaqData.bannerData.subtitle}
                    buttonName={serviceFaqData.bannerData.buttonName}
                    buttonLink={serviceFaqData.bannerData.buttonLink}
                    tabData={serviceFaqData.header}
                />
                    <ServicesAssurance
                    image={serviceAssurance.bannerData.image}
                    title={serviceAssurance.bannerData.title}
                    buttonName={serviceAssurance.bannerData.buttonName}
                    buttonLink={serviceAssurance.bannerData.buttonLink}
                    data={serviceAssurance.header}
                    sideImage={serviceAssurance.bannerData.sideImage}
                    />
                    <ServiceTech/>
                    <OurBrands/>
                    <FreeQuotation/>
                    <FixedButton />

                    <Footer/>
                </div>
            </div>
        </>
    );
};
export default ServicePage;
