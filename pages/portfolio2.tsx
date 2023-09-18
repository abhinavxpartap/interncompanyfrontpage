import type { NextPage } from 'next'
import {PortfolioBanner2} from "../components/portfolio2";





import React from "react";
import {Footer} from "../components/footer";
import FixedButton from "../components/FixedButton";
import Float from "../components/Float";




const Portfolio2: NextPage = () => {
    return (
        <div >

                <PortfolioBanner2 />
            <FixedButton />
<Float/>
            <Footer/>










        </div>
    )
}

export default Portfolio2
