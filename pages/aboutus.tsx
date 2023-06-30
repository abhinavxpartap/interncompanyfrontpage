import type { NextPage } from 'next'
import {AboutUsBanner} from "../components/aboutUsBanner";
import {OurValue} from "../components/ourValue";
import {WhatWeAre} from "../components/whatWeAre";
import {Meetour} from "../components/meetour";
import {Letswork} from "../components/letswork";
import {Footer} from "../components/footer";
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
            <WhatWeAre
                title1={aboutUs.WhatWe.title1}
                subtitle1={aboutUs.WhatWe.subtitle2}
                title2={aboutUs.WhatWe.title2}
                subtitle2={aboutUs.WhatWe.subtitle2}/>
            <QuiltedImageList/>


            <OurValue
                items={aboutUs.values}
               />
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
