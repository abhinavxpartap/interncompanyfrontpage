import React from "react";
import Head from "next/head";
import seoData from "../data/seoData.json";
import Product from "../data/services/product.json";
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
                    image={Product.Banner.backgroundImage}
                    title={Product.Banner.title}
                    subtitle={Product.Banner.subtitle}
                    buttonName={Product.Banner.buttonName}
                    buttonLink={Product.Banner.buttonLink}
                />
                <Float/>

                <div className="md:mb-[80px] mb-[30px]">
                    <CaseStudy/>

                </div>

                <div style={{background: "#F9FBFF"}}>
                    <ServiceAbout
                        title={Product.About.title}
                        subtitle={Product.About.subtitle}
                        paragraph={Product.About.paragraph}
                        image={Product.About.image}
                        data={Product.About.data}
                    />

                    <Service/>

                    <div className="md:pt-[70px] pb-[30px] pt-[30px]">
                        <Reasons
                        title={Product.reasons.title}
                        data={Product.reasons.data}/>

                    </div>

                    <ServicesDevelopment
                        title={Product.bannerData.title}
                        subtitle={Product.bannerData.subtitle}
                        leftData={Product.headerLeft}
                        centerContent={Product.bannerData.centerContent}
                        rightData={Product.headerRight}
                        buttonName={Product.bannerData.buttonName}
                        buttonLink={Product.bannerData.buttonLink}
                    />
                    <div className="">
                        <PortfolioOurProcess
                            List={Product.OurProcessNew.Data1}
                            heading={Product.OurProcessNew.heading}
                        />
                    </div>

                    <div className="md:pt-[70px] pt-[30px] pb-[30px]">
                        <ServicesFaq
                            title={Product.FaqBanner.title}
                            subtitle={Product.FaqBanner.subtitle}
                            buttonName={Product.FaqBanner.buttonName}
                            buttonLink={Product.FaqBanner.buttonLink}
                            tabData={Product.header}
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
