import React, { useEffect, useState} from "react";
import Head from "next/head";
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
import {useRouter} from "next/router";
import {GetServerSideProps} from "next";

interface LandingPageInterface {
    page: any
    seo: any
}
const IndustryPage: React.FC<LandingPageInterface> = (props) => {
    const router = useRouter();
    const [page, setPage] = useState<any>({})

    useEffect(() => {
        setPage(props.page);
    }, [props.page]);
    return (<>
            <Head>
                <title>{props.seo?.page_title}</title>
                <meta name="description" content={props.seo?.meta_description}/>
                <meta name="keywords" content={props.seo?.meta_keywords}/>
                <meta name="title" content={props.seo?.meta_title}/>
            </Head>
            <div className="main">
                <ServiceBanner
                    image={page.BannerData?.backgroundImage}
                    title={page.BannerData?.title}
                    subtitle={page.BannerData?.subtitle}
                    buttonName={page.BannerData?.ButtonName}
                    buttonLink={page.BannerData?.ButtonHref}
                />
                <Float/>
                <div className="md:mb-[80px] mb-[30px]">
                    <CaseStudy/>
                </div>
                <div style={{background: "#F9FBFF"}}>
                    <ServiceAbout
                        title={page.AboutBanner?.title}
                        subtitle={page.AboutBanner?.subtitle}
                        paragraph={page.AboutBanner?.paragraph}
                        image={page.AboutBanner?.image}
                        data={page.AboutData}
                    />
                    <Service
                        title={page.EaseBanner?.title}
                        subtitle={page.EaseBanner?.subtitle}
                    />
                    <div className="md:pt-[70px] pb-[30px] pt-[30px]">
                        <ProductOverview
                            SoftwareCount={page.ReasonBanner?.softwareDevelopedCount}
                            SoftwareText={page.ReasonBanner?.softwareText}
                            WebCount={page.ReasonBanner?.webDesignCount}
                            WebText={page.ReasonBanner?.webText}
                            backgroundImage={page.ReasonBanner?.backgroundImage}
                            leftImage={page.ReasonBanner?.leftImage}
                            productCount={page.ReasonBanner?.productCount}
                            productText={page.ReasonBanner?.productText}
                            reasonData={page.ReasonData}
                            title={page.ReasonBanner?.title}
                        />
                    </div>
                    <ServicesDevelopment
                        title={page.DevelopmentBanner?.title}
                        subtitle={page.DevelopmentBanner?.subtitle}
                        leftData={page.DevelopmentHeaderLeft}
                        centerContent={page.DevelopmentBanner?.centerContent}
                        rightData={page.DevelopmentHeaderRight}
                        buttonName={page.DevelopmentBanner?.buttonName}
                        buttonLink={page.DevelopmentBanner?.buttonLink}
                    />
                    <div className="">
                        <PortfolioOurProcess
                            List={page.ProcessData}
                            heading={page.ProcessBanner?.title}
                        />
                    </div>
                    <div className="md:pt-[70px] pt-[30px] pb-[30px]">
                        <ServicesFaq
                            title={page.FaqBanner?.title}
                            subtitle={page.FaqBanner?.subtitle}
                            buttonName={page.FaqBanner?.buttonName}
                            buttonLink={page.FaqBanner?.buttonLink}
                            tabData={page.FaqData}
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
export default IndustryPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
    const slug: any = context.query.slug;
    const timestamp = Date.now();
    let data: any;
    let seo: any;

    // Fetch data from your API endpoint
    const response = await fetch(`http://localhost:3000/api/industry/GET/indsutries`, {
        method: "GET",
    });


    if (response.status === 200) {
        const jsonData = await response.json();
        seo = jsonData.filter((dd: any) => dd.name === slug)[0];
        data = jsonData.filter((dd: any) => dd.name === slug)[0].data;
    } else {
        console.error("Error fetching JSON data");
    }

    return {
        props: {
            page: data || null,
            seo: seo || null,
        },
    };
};