import type {NextPage} from 'next'
import React from "react";
import {Footer} from "../components/footer";
import FixedButton from "../components/FixedButton";

import {PortFolios} from "../components/porfoliosbanner";
import portfolio from "../data/portfoliosnew.json";
import Head from "next/head";
import seoData from "../data/seoData.json";
import {Empowerment} from "../components/empowerment";
import {ServiceTech} from "../components/servicesTech";
import {Portfoliotech} from "../components/portfoliotech";
import {Solution} from "../components/solution";
import {Projects} from "../components/Projects";

import {PortfolioIndustry} from "../components/portfolioindustry";
import {Challenges} from "../components/challenges";
import {Review} from "../components/review";
import {Porfoliofooter} from "../components/porfoliofooter";


const Portfolio: NextPage = () => {
    return (
        <div>
            <Head>
                <title>{seoData.industries.title}</title>
                <meta name="description" content={seoData.industries.description}/>
                <meta name="keywords" content={seoData.industries.keywords}/>
                <meta name="title" content={seoData.industries.metaTitle}/>
            </Head>
            <PortFolios
                image={portfolio.bannerData.image}
                icon={portfolio.bannerData.icon}
                title={portfolio.bannerData.title}/>
            <Empowerment
                title={portfolio.Empowerment.title}
                subtitle1={portfolio.Empowerment.subtitle1}
                subtitle2={portfolio.Empowerment.subtitle2}
                image={portfolio.Empowerment.image}
                yearTitle={portfolio.Empowerment.yearTitle}
                business={portfolio.Empowerment.business}
                businesspeople={portfolio.Empowerment.businesspeople}
                year={portfolio.Empowerment.year}

            />
            <Portfoliotech

                title={portfolio.portfoliotech.title}
                subtitle={portfolio.portfoliotech.subtitle}
                image={portfolio.portfoliotech.image}
            />
            <Solution
                title={portfolio.Solution.title}
                subtitle={portfolio.Solution.subtitle}
                data={portfolio.Solution.data}
            />
            <PortfolioIndustry
                title={portfolio.portfolioindustry.title}
                subtitle={portfolio.portfolioindustry.subtitle}
                data={portfolio.portfolioindustry.data}/>

            <Challenges
                title={portfolio.challenges.title}
                subtitle={portfolio.challenges.subtitle}
                data={portfolio.challenges.data}/>
            <Review
                title={portfolio.Review.title}
                data={portfolio.Review.data}
            />

            <Projects
                title={portfolio.project.title}
                data={portfolio.project.data}/>
            <Porfoliofooter
                title={portfolio.footer.title}
                subtitle={portfolio.footer.subtitle}
                link={portfolio.footer.link}
                image={portfolio.footer.image}
                linkedIn={portfolio.footer.linkedIn}
                address={portfolio.footer.address}
                contact={portfolio.footer.contact}
                email={portfolio.footer.email}


            />
            <Footer/>




        </div>
    )
}

export default Portfolio
