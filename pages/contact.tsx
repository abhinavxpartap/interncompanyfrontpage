import type { NextPage } from 'next'
import {ContactBanner} from "../components/ContactBanner";
import { Footer } from '../components/footer';
import {TalkTo} from "../components/TalkToExpert";
import ContactData from "../data/contact.json";
import React from "react";
import {OurBrands} from "../components/ourBrands";



const Home: NextPage = () => {
    return (
        <div >
            <div
                className="bg-cover OurStoryBanner bg-center bg-no-repeat relative"
            >
                <ContactBanner
                    title={ContactData.Banner.title}
                    subtitle={ContactData.Banner.subtitle}/>


            </div>
            <div className="py-[100px]">            <OurBrands/>
            </div>
            <div
                className="bg-cover TalkTo bg-center bg-no-repeat  relative"
            >
                <TalkTo
                    title={ContactData.TalkTo.title}
                />
            </div>
            <Footer/>
        </div>
    )
}

export default Home
