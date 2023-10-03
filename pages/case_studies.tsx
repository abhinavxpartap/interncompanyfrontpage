import type { NextPage } from 'next'
import {PortfolioBanner2} from "../components/portfolio2";
import React from "react";
import {Footer} from "../components/footer";
import FixedButton from "../components/FixedButton";
import Float from "../components/Float";
import Chat from "../components/Chat";




const Case_studies: NextPage = () => {
    return (
        <div >

                <PortfolioBanner2 />
            <FixedButton />
<Float/>
            {/*<Chat/>*/}

            <Footer/>










        </div>
    )
}

export default Case_studies
