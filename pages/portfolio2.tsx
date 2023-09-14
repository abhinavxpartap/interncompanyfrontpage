import type { NextPage } from 'next'
import {PortfolioBanner2} from "../components/portfolio2";





import React from "react";
import {Footer} from "../components/footer";
import FixedButton from "../components/FixedButton";




const Portfolio2: NextPage = () => {
    return (
        <div >

                <PortfolioBanner2 />
            <FixedButton />

            <Footer/>










        </div>
    )
}

export default Portfolio2
