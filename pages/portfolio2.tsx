import type { NextPage } from 'next'
import ProjectChallanges from "../components/ProjectChallanges";
import {PortfolioBanner2} from "../components/portfolio2";
import {Director} from "../components/director";
import {Journey} from "../components/journey";
import {OurProcess} from "../components/ourProcess";
import {Results} from "../components/results";




import React from "react";
import serviceData from "../data/portfolio.json";




const Portfolio2: NextPage = () => {
    return (
        <div >

                <PortfolioBanner2/>










        </div>
    )
}

export default Portfolio2
