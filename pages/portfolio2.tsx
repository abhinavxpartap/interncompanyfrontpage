import type { NextPage } from 'next'
import ProjectChallanges from "../components/ProjectChallanges";
import {PortfolioBanner2} from "../components/portfolio2";
import {Director} from "../components/director";
import {Journey} from "../components/journey";
import {OurProcess} from "../components/ourProcess";
import {Results} from "../components/results";




import React from "react";
import serviceData from "../data/portfolio.json";
import {Footer} from "../components/footer";




const Portfolio2: NextPage = () => {
    return (
        <div >

                <PortfolioBanner2/>
            <Footer/>










        </div>
    )
}

export default Portfolio2
