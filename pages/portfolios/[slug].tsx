import React, { useEffect, useState} from "react";
import Head from "next/head";
import {Footer} from "../../components/footer";
import FixedButton from "../../components/FixedButton";
import CaseStudy from "../../components/Case Study";
import {PortfolioOurProcess} from "../../components/PortfolioOurProcess";
import Float from "../../components/Float"
import {useRouter} from "next/router";
import {GetServerSideProps} from "next";
import {PortfolioBanner} from "../../components/PortfolioBanner";
import {AboutPortfolio} from "../../components/aboutPortfolio";
import {Director} from "../../components/director";
import {NewPortofilioJourney} from "../../components/PortofilioJourney";
import {OurProcess} from "../../components/ourProcess";
import {ProjectChallangesNew} from "../../components/ProjectChallanges";
import {Results} from "../../components/results";

interface PortFolioPageInterface {
    page: any
    seo: any
}
const PortFolioPage: React.FC<PortFolioPageInterface> = (props) => {
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

                <div
                    className="bg-cover  bg-center bg-no-repeat relative"
                >
                    <PortfolioBanner
                        title={page.Banner?.title}
                        image={page.Banner?.image}/>
                </div>
                <Float/>
                <AboutPortfolio
                    title={page.processInfo?.title}
                    images={page.processInfo?.images}
                    subtitle={page.processInfo?.subtitle}
                    client={page.processInfo?.client}
                    industry={page.processInfo?.industry}
                    services={page.processInfo?.services}
                    businessType={page.processInfo?.businessType}
                />
                <Director
                    image={page.Director?.image}
                    mobileImage={page.Director?.mobileImage}
                    name={page.Director?.name}
                    company={page.Director?.company}
                    icon={page.Director?.icon}
                    address={page.Director?.address}
                    message={page.Director?.message}
                    post={page.Director?.post}
                />
                <NewPortofilioJourney
                    List1={page.NewJourney?.data1}
                    List2={page.NewJourney?.Data2}
                    heading={page.NewJourney?.heading}
                    subtitle2={page.NewJourney?.subtitle2}
                    title1={page.NewJourney?.title1}
                    title2={page.NewJourney?.title2}
                />
                <PortfolioOurProcess
                    List={page.OurProcessNew?.data1}
                    heading={page.OurProcessNew?.heading}
                />
                <OurProcess
                    image={page.imagePort}
                />
                <ProjectChallangesNew
                    list={page.resultNew?.list}
                    heading={page.resultNew?.heading}

                />
                <Results
                    List={page.ResultNew?.Data}
                    heading={page.ResultNew?.heading}
                    subtitle={page.ResultNew?.subtitle}
                />
                <div className="pb-[80px]">
                    <CaseStudy/>
                </div>
                <FixedButton/>
                <Footer/>
            </div>
        </>
    );
};
export default PortFolioPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
    const slug: any = context.query.slug;
    const timestamp = Date.now();
    let data: any;
    let seo: any;

    // Fetch data from your API endpoint
    const response = await fetch(`http://localhost:3000/api/portfolios/GET/portfolios`, {
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