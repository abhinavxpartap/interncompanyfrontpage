import type { NextPage } from 'next'
import {AboutUsBanner} from "../components/aboutUsBanner";
import {OurValue} from "../components/ourValue";
import {Meetour} from "../components/meetour";


import TalkTo from "../components/TalkToExpert";
import React from "react";
import aboutUs from "../data/aboutUs.json";


const Home: NextPage = () => {
    return (
        <div >

                <AboutUsBanner

                        image={aboutUs.Banner.image}
                        mobileImage={aboutUs.Banner.mobileImage}
                        title={aboutUs.Banner.title}
                        subtitle={aboutUs.Banner.subtitle}
                    />
            <OurValue/>
            <Meetour/>




        </div>
    )
}

export default Home
