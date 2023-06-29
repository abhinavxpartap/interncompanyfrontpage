import type { NextPage } from 'next'
import {AboutUsBanner} from "../components/aboutUsBanner";
import {OurValue} from "../components/ourValue";
import {WhatWeAre} from "../components/whatWeAre";

import {Meetour} from "../components/meetour";
import {Letswork} from "../components/letswork";
import {Footer} from "../components/footer";




import TalkTo from "../components/TalkToExpert";
import React from "react";
import aboutUs from "../data/aboutUs.json";
import QuiltedImageList from '../components/images';


const Home: NextPage = () => {
    return (
        <div >

                <AboutUsBanner

                        image={aboutUs.Banner.image}
                        mobileImage={aboutUs.Banner.mobileImage}
                        title={aboutUs.Banner.title}
                        subtitle={aboutUs.Banner.subtitle}
                    />
            <WhatWeAre/>
            <QuiltedImageList/>


            <OurValue/>
            <Meetour/>
            <Letswork
                image={aboutUs.Lets.image}
                mobileImage={aboutUs.Lets.mobileImage}
                title={aboutUs.Lets.title}
                subtitle={aboutUs.Lets.subtitle}/>
<Footer/>



        </div>
    )
}

export default Home
