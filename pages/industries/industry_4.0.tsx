import React from "react";
import Head from "next/head";
import seoData from "../../data/seoData.json";
import pageData from "../../data/industries/Industry4.0.json";
import {ServiceBanner} from "../../components/serviceBanner";
import {ServiceAbout} from "../../components/servicesAbout";
import {ServicesDevelopment} from "../../components/servicesDevelopment";
import {ServicesFaq} from "../../components/serviceFaq";
import {ServiceTech} from "../../components/servicesTech";
import {FreeQuotation} from "../../components/freeQuotation";
import {Footer} from "../../components/footer";
import FixedButton from "../../components/FixedButton";
import CaseStudy from "../../components/Case Study";
import Service from "../../components/Service";
import {PortfolioOurProcess} from "../../components/PortfolioOurProcess";
import Float from "../../components/Float"
import ProductOverview from "../../components/Product Overview";
import Chat from "../../components/Chat";

const Industrypage: React.FC = () => {
    return (<>
            <Head>
                <title>{seoData.industriesNew.title}</title>
                <meta name="description" content={seoData.industriesNew.description}/>
                <meta name="keywords" content={seoData.industriesNew.keywords}/>
                <meta name="title" content={seoData.industriesNew.metaTitle}/>
            </Head>
            <div className="main">
                <ServiceBanner
                    image={pageData.BannerData.backgroundImage}
                    title={pageData.BannerData.title}
                    subtitle={pageData.BannerData.subtitle}
                    buttonName={pageData.BannerData.ButtonName}
                    buttonLink={pageData.BannerData.ButtonHref}
                />
                <Float/>
                <div className="md:mb-[80px] mb-[30px]">
                    <CaseStudy/>
                </div>
                <div style={{background: "#F9FBFF"}}>
                    <ServiceAbout
                        title={pageData.AboutBanner.title}
                        subtitle={pageData.AboutBanner.subtitle}
                        paragraph={pageData.AboutBanner.paragraph}
                        image={pageData.AboutBanner.image}
                        data={pageData.AboutData}
                    />
                    <Service
                        title={pageData.EaseBanner.title}
                        subtitle={pageData.EaseBanner.subtitle}
                    />
                    <div className="md:pt-[70px] pb-[30px] pt-[30px]">
                        <ProductOverview
                            SoftwareCount={pageData.ReasonBanner.softwareDevelopedCount}
                            SoftwareText={pageData.ReasonBanner.softwareText}
                            WebCount={pageData.ReasonBanner.webDesignCount}
                            WebText={pageData.ReasonBanner.webText}
                            backgroundImage={pageData.ReasonBanner.backgroundImage}
                            leftImage={pageData.ReasonBanner.leftImage}
                            productCount={pageData.ReasonBanner.productCount}
                            productText={pageData.ReasonBanner.productText}
                            reasonData={pageData.ReasonData}
                            title={pageData.ReasonBanner.title}
                        />
                    </div>
                    <ServicesDevelopment
                        title={pageData.DevelopmentBanner.title}
                        subtitle={pageData.DevelopmentBanner.subtitle}
                        leftData={pageData.DevelopmentHeaderLeft}
                        centerContent={pageData.DevelopmentBanner.centerContent}
                        rightData={pageData.DevelopmentHeaderRight}
                        buttonName={pageData.DevelopmentBanner.buttonName}
                        buttonLink={pageData.DevelopmentBanner.buttonLink}
                    />
                    <div className="">
                        <PortfolioOurProcess
                            List={pageData.ProcessData}
                            heading={pageData.ProcessBanner.title}
                        />
                    </div>

                    <div className="md:pt-[70px] pt-[30px] pb-[30px]">
                        <ServicesFaq
                            title={pageData.FaqBanner.title}
                            subtitle={pageData.FaqBanner.subtitle}
                            buttonName={pageData.FaqBanner.buttonName}
                            buttonLink={pageData.FaqBanner.buttonLink}
                            tabData={pageData.FaqData}
                        />
                    </div>
                    <ServiceTech/>
                    <div className="pt-[50px]">
                        <FreeQuotation/>
                    </div>
                    <FixedButton/>
                    {/*<Chat/>*/}

                    <Footer/>
                </div>
            </div>
        </>
    );
};
export default Industrypage;
