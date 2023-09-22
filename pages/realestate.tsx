import type {NextPage} from 'next'
import {PortfolioBanner} from "../components/PortfolioBanner";
import {ProjectChallangesNew} from "../components/ProjectChallanges";
import {AboutPortfolio} from "../components/aboutPortfolio";
import {Director} from "../components/director";
import {OurProcess} from "../components/ourProcess";
import {Results} from "../components/results";
import PortData from "../data/portfolio.json";
import React from "react";
import serviceData from "../data/portfolio.json";

import {Footer} from "../components/footer";
import data from '../data/aboutPortfolio.json';
import seoData from "../data/seoData.json";
import Head from "next/head";
import {NewPortofilioJourney} from "../components/PortofilioJourney";
import {PortfolioOurProcess} from "../components/PortfolioOurProcess";
import FixedButton from "../components/FixedButton";
import Float from "../components/Float";
import CaseStudy from "../components/Case Study";

const RealEstate: NextPage = () => {
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
            <Float/>
            <AboutPortfolio
                title={data.title}
                images={data.images}
                subtitle={data.subtitle}
                client={data.client}
                industry={data.industry}
                services={data.services}
                businessType={data.businessType}
            />
            <Director
                image={serviceData.Director.image}
                mobileImage={serviceData.Director.mobileImage}
                name={serviceData.Director.name}
                company={serviceData.Director.company}
                icon={serviceData.Director.icon}
                address={serviceData.Director.address}
                message={serviceData.Director.message}
                post={serviceData.Director.post}
            />
            <NewPortofilioJourney
                List1={serviceData.NewJourney.Data1}
                List2={serviceData.NewJourney.Data2}
                heading={serviceData.NewJourney.heading}
                subtitle2={serviceData.NewJourney.subtitle2}
                title1={serviceData.NewJourney.title1}
                title2={serviceData.NewJourney.title2}
            />
            <PortfolioOurProcess
                List={serviceData.OurProcessNew.Data1}
                heading={serviceData.OurProcessNew.heading}
            />
            <OurProcess/>
            <ProjectChallangesNew
                list={PortData.resultNew.list}
                heading={PortData.resultNew.heading}

            />            <Results
                List={serviceData.ResultNew.Data}
                heading={serviceData.ResultNew.heading}
                subtitle={serviceData.ResultNew.subtitle}
            />
            <div className="pb-[80px]">
                <CaseStudy/>

            </div>
            <FixedButton/>
            <Footer/>

        </>
    )
}

export default RealEstate
