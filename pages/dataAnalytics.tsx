import React from "react";
import Head from "next/head";
import seoData from "../data/seoData.json";
import dataAnalytics from "../data/services/dataAnalytics.json";
import serviceAssurance from "../data/serviceAssurance.json"
import pageData from "../data/productOverview.json"
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

const DataAnalytics: React.FC = () => {
    return (<>
            <Head>
                <title>{seoData.service.title}</title>
                <meta name="description" content={seoData.service.description}/>
                <meta name="keywords" content={seoData.service.keywords}/>
                <meta name="title" content={seoData.service.metaTitle}/>
            </Head>
            <div className="main">
                <ServiceBanner
                    image={dataAnalytics.Banner.backgroundImage}
                    title={dataAnalytics.Banner.title}
                    subtitle={dataAnalytics.Banner.subtitle}
                    buttonName={dataAnalytics.Banner.buttonName}
                    buttonLink={dataAnalytics.Banner.buttonLink}
                />
                <Float/>

                <div className="md:mb-[80px] mb-[30px]">
                    <CaseStudy/>

                </div>

                <div style={{background: "#F9FBFF"}}>
                    <ServiceAbout
                        title={dataAnalytics.About.title}
                        subtitle={dataAnalytics.About.subtitle}
                        paragraph={dataAnalytics.About.paragraph}
                        image={dataAnalytics.About.image}
                        data={dataAnalytics.About.data}
                    />

                    <Service/>

                    <div className="md:pt-[70px] pb-[30px] pt-[30px]">
                        <ProductOverview
                         SoftwareCount={pageData.Data.softwareDevelopedCount}
                         SoftwareText={pageData.Data.softwareText}
                         WebCount={pageData.Data.webDesignCount}
                         WebText={pageData.Data.webText}
                         backgroundImage={pageData.Data.backgroundImage}
                         leftImage={pageData.Data.leftImage}
                         productCount={pageData.Data.productCount}
                         productText={pageData.Data.productText}
                         reasonData={pageData.Data.ReasonData}
                         title={pageData.Data.title}
                        />

                    </div>

                    <ServicesDevelopment
                        title={dataAnalytics.bannerData.title}
                        subtitle={dataAnalytics.bannerData.subtitle}
                        leftData={dataAnalytics.headerLeft}
                        centerContent={dataAnalytics.bannerData.centerContent}
                        rightData={dataAnalytics.headerRight}
                        buttonName={dataAnalytics.bannerData.buttonName}
                        buttonLink={dataAnalytics.bannerData.buttonLink}
                    />
                    <div className="mt-[-20px]">
                        <PortfolioOurProcess
                            List={dataAnalytics.OurProcessNew.Data1}
                            heading={dataAnalytics.OurProcessNew.heading}
                        />
                    </div>

                    <div className="md:pt-[70px] pt-[30px] pb-[30px]">
                        <ServicesFaq
                            title={dataAnalytics.FaqBanner.title}
                            subtitle={dataAnalytics.FaqBanner.subtitle}
                            buttonName={dataAnalytics.FaqBanner.buttonName}
                            buttonLink={dataAnalytics.FaqBanner.buttonLink}
                            tabData={dataAnalytics.header}
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
export default DataAnalytics;
