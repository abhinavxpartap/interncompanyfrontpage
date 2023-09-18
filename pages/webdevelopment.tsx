import React from "react";
import Head from "next/head";
import seoData from "../data/seoData.json";
import WebApp from "../data/services/webDevelopment.json";
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
                    image={WebApp.Banner.backgroundImage}
                    title={WebApp.Banner.title}
                    subtitle={WebApp.Banner.subtitle}
                    buttonName={WebApp.Banner.buttonName}
                    buttonLink={WebApp.Banner.buttonLink}
                />
                <Float/>

                <div className="md:mb-[80px] mb-[30px]">
                    <CaseStudy/>

                </div>

                <div style={{background: "#F9FBFF"}}>
                    <ServiceAbout
                        title={WebApp.About.title}
                        subtitle={WebApp.About.subtitle}
                        paragraph={WebApp.About.paragraph}
                        image={WebApp.About.image}
                        data={WebApp.About.data}
                    />

                    <Service/>

                    <div className="md:pt-[70px] pb-[30px] pt-[30px]">
                        <Reasons
                            title={WebApp.reasons.title}
                            data={WebApp.reasons.data}/>
                    </div>

                    <ServicesDevelopment
                        title={WebApp.bannerData.title}
                        subtitle={WebApp.bannerData.subtitle}
                        leftData={WebApp.headerLeft}
                        centerContent={WebApp.bannerData.centerContent}
                        rightData={WebApp.headerRight}
                        buttonName={WebApp.bannerData.buttonName}
                        buttonLink={WebApp.bannerData.buttonLink}
                    />
                    <div className="">
                        <PortfolioOurProcess
                            List={WebApp.OurProcessNew.Data1}
                            heading={WebApp.OurProcessNew.heading}
                        />
                    </div>

                    <div className="md:pt-[70px] pt-[30px] pb-[30px]">
                        <ServicesFaq
                            title={WebApp.FaqBanner.title}
                            subtitle={WebApp.FaqBanner.subtitle}
                            buttonName={WebApp.FaqBanner.buttonName}
                            buttonLink={WebApp.FaqBanner.buttonLink}
                            tabData={WebApp.header}
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
