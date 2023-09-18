import React from "react";
import Head from "next/head";
import seoData from "../data/seoData.json";
import MobileApp from "../data/services/mobileApp.json";
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
import CaseStudy from "../components/Case Study";
import Service from "../components/Service";
import ProductOverview from "../components/Product Overview";
import {PortfolioOurProcess} from "../components/PortfolioOurProcess";
import serviceData from "../data/portfolio.json";

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
                    image={MobileApp.Banner.backgroundImage}
                    title={MobileApp.Banner.title}
                    subtitle={MobileApp.Banner.subtitle}
                    buttonName={MobileApp.Banner.buttonName}
                    buttonLink={MobileApp.Banner.buttonLink}
                />
                <div className="md:mb-[80px] mb-[30px]">
                    <CaseStudy/>

                </div>

                <div style={{background: "#F9FBFF"}}>
                    <ServiceAbout
                        title={MobileApp.About.title}
                        subtitle={MobileApp.About.subtitle}
                        paragraph={MobileApp.About.paragraph}
                        image={MobileApp.About.image}
                    />
                    <Service/>
                    <ProductOverview/>

                    <ServiceProcess
                        title={ProcessData.bannerData.title}
                        subtitle={ProcessData.bannerData.subtitle}
                        data={ProcessData.header}
                    />
                    <ServicesDevelopment
                        title={MobileApp.bannerData.title}
                        subtitle={MobileApp.bannerData.subtitle}
                        leftData={MobileApp.headerLeft}
                        centerContent={MobileApp.bannerData.centerContent}
                        rightData={MobileApp.headerRight}
                        buttonName={MobileApp.bannerData.buttonName}
                        buttonLink={MobileApp.bannerData.buttonLink}
                    />
                    <PortfolioOurProcess
                        List={MobileApp.OurProcessNew.Data1}
                        heading={MobileApp.OurProcessNew.heading}
                    />
                    <ServicesFaq
                        title={MobileApp.FaqBanner.title}
                        subtitle={MobileApp.FaqBanner.subtitle}
                        buttonName={MobileApp.FaqBanner.buttonName}
                        buttonLink={MobileApp.FaqBanner.buttonLink}
                        tabData={MobileApp.header}
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
                    <FixedButton/>

                    <Footer/>
                </div>
            </div>
        </>
    );
};
export default ServicePage;
