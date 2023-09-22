import type {NextPage} from 'next';
import {Banner} from '../components/Banner';
import data from '../data/homepage.json';
import Head from "next/head";
import {OurBrands} from '../components/ourBrands';
import React from 'react';
import {Footer} from '../components/footer';
import Team from '../components/Expert team';
import Service from '../components/Service';
import CaseStudy from '../components/Case Study';
import Testimonials from '../components/Testimonials';
import DemoForm from '../components/Demo Form';
import seoData from "../data/seoData.json";
import FixedButton from "../components/FixedButton";
import Float from "../components/Float";
import HomeProductOverview from "../components/HomeProductOverview";

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>{seoData.Homepage.title}</title>
                <meta name="description" content={seoData.Homepage.description}/>
                <meta name="keywords" content={seoData.Homepage.keywords}/>
                <meta name="title" content={seoData.Homepage.metaTitle}/>

            </Head>
            <div>
                <Banner
                    image={data.bannerData.backgroundImage}
                    title={data.bannerData.title}
                    subtitle={data.bannerData.subtitle}
                    button={data.bannerData.buttonName}
                />
                <Float/>
                <div>
                    <OurBrands/>
                </div>
                <HomeProductOverview/>
                <div
                    style={{background: '#F9FBFF'}}
                    className="bg-cover bg-center bg-no-repeat relative  block"
                >

                    <Team/>
                </div>
                <div
                    style={{background: '#F9FBFF'}}
                    className="bg-cover pt-[35px]  md:pt-[70px] bg-center bg-no-repeat relative  block"
                >
                    <Service/>
                </div>
                <div
                    style={{background: '#F9FBFF'}}
                    className="bg-cover bg-center -z-0 bg-no-repeat relative  block"
                >
                    <CaseStudy/>
                </div>
                <div
                    style={{background: '#F9FBFF'}}
                    className="bg-cover bg-center -z-0 bg-no-repeat relative  block"
                >
                    <Testimonials/>
                </div>
                <div
                    style={{background: '#F9FBFF'}}
                    className="bg-cover bg-center pt-[40px] -z-0 bg-no-repeat relative  block"
                >
                    <DemoForm/>
                </div>
                <FixedButton/>
              <Footer/>
            </div>
        </>
    );
};
export default Home;
