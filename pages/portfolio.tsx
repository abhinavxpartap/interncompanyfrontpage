import type { NextPage } from 'next'
import PortfolioBanner from "../components/PortfolioBanner";
import ProjectChallanges from "../components/ProjectChallanges";
import {AboutPortfolio} from "../components/aboutPortfolio";
import {Director} from "../components/director";
import {Journey} from "../components/journey";

import React from "react";
import serviceData from "../data/portfolio.json";




const Portfolio: NextPage = () => {
    return (
        <div >
            <div
                className="bg-cover portfolioBanner bg-center bg-no-repeat relative"
            >
                <PortfolioBanner/>



            </div>
            <AboutPortfolio/>
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
            <Journey/>
            <ProjectChallanges/>


        </div>
    )
}

export default Portfolio
