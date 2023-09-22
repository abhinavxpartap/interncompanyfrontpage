import React from "react";
import Head from "next/head";
import seoData from "../data/seoData.json";
import MobileApp from "../data/services/mobileApp.json";
import serviceAssurance from "../data/serviceAssurance.json"
import {ServiceBanner} from "../components/serviceBanner";
import {ServiceAbout} from "../components/servicesAbout";
import {ServicesDevelopment} from "../components/servicesDevelopment";
import {ServicesFaq} from "../components/serviceFaq";
import {ServicesAssurance} from "../components/serviceAssurance";
import {ServiceTech} from "../components/servicesTech";
import {FreeQuotation} from "../components/freeQuotation";
import {Footer} from "../components/footer";
import FixedButton from "../components/FixedButton";
import CaseStudy from "../components/Case Study";
import Service from "../components/Service";
import ProductOverview from "../components/Product Overview";
import {PortfolioOurProcess} from "../components/PortfolioOurProcess";
import Float from "../components/Float"
import Reasons from "../components/reasons";
import WebApp from "../data/services/webDevelopment.json";

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
                <Float/>

                <div className="md:mb-[80px] mb-[30px]">
                    <CaseStudy/>

                </div>

                <div style={{background: "#F9FBFF"}}>
                    <ServiceAbout
                        title={MobileApp.About.title}
                        subtitle={MobileApp.About.subtitle}
                        paragraph={MobileApp.About.paragraph}
                        image={MobileApp.About.image}
                        data={MobileApp.About.data}
                    />
                    <Service/>
                    <div className="md:pt-[70px] pb-[30px] pt-[30px]">
                        <Reasons
                            title={WebApp.reasons.title}
                            data={WebApp.reasons.data}/>
                    </div>

                    <ServicesDevelopment
                        title={MobileApp.bannerData.title}
                        subtitle={MobileApp.bannerData.subtitle}
                        leftData={MobileApp.headerLeft}
                        centerContent={MobileApp.bannerData.centerContent}
                        rightData={MobileApp.headerRight}
                        buttonName={MobileApp.bannerData.buttonName}
                        buttonLink={MobileApp.bannerData.buttonLink}
                    />
                    <div className="">
                        <PortfolioOurProcess
                            List={MobileApp.OurProcessNew.Data1}
                            heading={MobileApp.OurProcessNew.heading}
                        />
                    </div>

                    <div className="md:pt-[70px] pt-[30px] pb-[30px]">
                        <ServicesFaq
                            title={MobileApp.FaqBanner.title}
                            subtitle={MobileApp.FaqBanner.subtitle}
                            buttonName={MobileApp.FaqBanner.buttonName}
                            buttonLink={MobileApp.FaqBanner.buttonLink}
                            tabData={MobileApp.header}
                        />
                    </div>
                    <ServicesAssurance
                        image={serviceAssurance.bannerData.image}
                        title={serviceAssurance.bannerData.title}
                        buttonName={serviceAssurance.bannerData.buttonName}
                        buttonLink={serviceAssurance.bannerData.buttonLink}
                        data={serviceAssurance.header}
                        sideImage={serviceAssurance.bannerData.sideImage}
                    />
                    <ServiceTech/>
                    <div className="pt-[50px]">
                        <FreeQuotation/>

                    </div>
                    <FixedButton/>

                    <Footer/>
                </div>
            </div>
        </>
    );
};
export default ServicePage;
