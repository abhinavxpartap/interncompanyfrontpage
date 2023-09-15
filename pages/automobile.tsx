import type {NextPage} from 'next'
import {PortfolioBanner} from "../components/PortfolioBanner";
import {ProjectChallangesNew} from "../components/ProjectChallanges";
import {AboutPortfolio} from "../components/aboutPortfolio";
import {Director} from "../components/director";
import {OurProcess} from "../components/ourProcess";
import {Results} from "../components/results";
import PortData from "../data/portfolio/automobile.json";
import React from "react";
import {Footer} from "../components/footer";
import seoData from "../data/seoData.json";
import Head from "next/head";
import {NewPortofilioJourney} from "../components/PortofilioJourney";
import {PortfolioOurProcess} from "../components/PortfolioOurProcess";
import FixedButton from "../components/FixedButton";
import CaseStudy from "../components/Case Study";

const Portfolio: NextPage = () => {
    return (
        < >
            <Head>
                <title>{seoData.Portfolio.title}</title>
                <meta name="description" content={seoData.Portfolio.description}/>
                <meta name="keywords" content={seoData.Portfolio.keywords}/>
                <meta name="title" content={seoData.Portfolio.metaTitle}/>
            </Head>
            <div
                className="bg-cover  bg-center bg-no-repeat relative"
            >
                <PortfolioBanner
                    title={PortData.Banner.title}
                    image={PortData.Banner.image}/>
            </div>
            <AboutPortfolio
                title={PortData.processInfo.title}
                images={PortData.processInfo.images}
                subtitle={PortData.processInfo.subtitle}
                client={PortData.processInfo.client}
                industry={PortData.processInfo.industry}
                services={PortData.processInfo.services}
                businessType={PortData.processInfo.businessType}
            />
            <Director
                image={PortData.Director.image}
                mobileImage={PortData.Director.mobileImage}
                name={PortData.Director.name}
                company={PortData.Director.company}
                icon={PortData.Director.icon}
                address={PortData.Director.address}
                message={PortData.Director.message}
                post={PortData.Director.post}
            />
            <NewPortofilioJourney
                List1={PortData.NewJourney.Data1}
                List2={PortData.NewJourney.Data2}
                heading={PortData.NewJourney.heading}
                subtitle2={PortData.NewJourney.subtitle2}
                title1={PortData.NewJourney.title1}
                title2={PortData.NewJourney.title2}
            />
            <PortfolioOurProcess
                List={PortData.OurProcessNew.Data1}
                heading={PortData.OurProcessNew.heading}
            />
            <OurProcess/>
            <ProjectChallangesNew
                list={PortData.resultNew.list}
                heading={PortData.resultNew.heading}

            />
            <Results
                List={PortData.ResultNew.Data}
                heading={PortData.ResultNew.heading}
                subtitle={PortData.ResultNew.subtitle}
            />
            <CaseStudy/>
            <FixedButton/>
            <Footer/>

        </>
    )
}

export default Portfolio
