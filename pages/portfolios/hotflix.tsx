import type {NextPage} from 'next'
import {PortfolioBanner} from "../../components/PortfolioBanner";
import {ProjectChallangesNew} from "../../components/ProjectChallanges";
import {AboutPortfolio} from "../../components/aboutPortfolio";
import {Director} from "../../components/director";
import {OurProcess} from "../../components/ourProcess";
import {Results} from "../../components/results";
import React from "react";
import Hotflix from "../../data/portfolio/hotflix.json";
import {Footer} from "../../components/footer";
import data from '../../data/hotflixportfolio.json';
import seoData from "../../data/seoData.json";
import Head from "next/head";
import {NewPortofilioJourney} from "../../components/PortofilioJourney";
import {PortfolioOurProcess} from "../../components/PortfolioOurProcess";
import FixedButton from "../../components/FixedButton";
import Float from "../../components/Float";
import CaseStudy from "../../components/Case Study";
import Chat from "../../components/Chat";

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
                    title={Hotflix.Banner.title}
                    image={Hotflix.Banner.image}/>
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
                image={Hotflix.Director.image}
                mobileImage={Hotflix.Director.mobileImage}
                name={Hotflix.Director.name}
                company={Hotflix.Director.company}
                icon={Hotflix.Director.icon}
                address={Hotflix.Director.address}
                message={Hotflix.Director.message}
                post={Hotflix.Director.post}
            />
            <NewPortofilioJourney
                List1={Hotflix.NewJourney.Data1}
                List2={Hotflix.NewJourney.Data2}
                heading={Hotflix.NewJourney.heading}
                subtitle2={Hotflix.NewJourney.subtitle2}
                title1={Hotflix.NewJourney.title1}
                title2={Hotflix.NewJourney.title2}
            />
            <PortfolioOurProcess
                List={Hotflix.OurProcessNew.Data1}
                heading={Hotflix.OurProcessNew.heading}
            />
            <OurProcess
                image={Hotflix.imagePort}
            />
            <ProjectChallangesNew
            list={Hotflix.resultNew.list}
            heading={Hotflix.resultNew.heading}

        /> <Results
            List={Hotflix.ResultNew.Data}
            heading={Hotflix.ResultNew.heading}
            subtitle={Hotflix.ResultNew.subtitle}
        />
            <div className="pb-[80px]">
                <CaseStudy/>

            </div>
            {/*<Chat/>*/}

            <FixedButton/>
            <Footer/>

        </>
    )
}

export default RealEstate
