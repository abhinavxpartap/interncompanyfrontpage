import type { NextPage } from 'next';
import { AboutUsBanner } from '../components/aboutUsBanner';
import { OurValue } from '../components/ourValue';
import { WhatWeAre } from '../components/whatWeAre';
import { Meetour } from '../components/meetour';
import { Letswork } from '../components/letswork';
import 'react-multi-carousel/lib/styles.css';
import { Footer } from '../components/footer';
import React from 'react';
import aboutUs from '../data/aboutUs.json';
import values from "../data/aboutOurValue.json"
import QuiltedImageList from '../components/images';
import { FreeQuotation } from '../components/freeQuotation';
import Testimonials from '../components/Testimonials';
import seoData from "../data/seoData.json";
import Head from "next/head";
import SuccesStory from "../components/SuccesStory";
import FixedButton from "../components/FixedButton";
import Float from "../components/Float";
import CaseStudy from "../components/Case Study";
import Chat from "../components/Chat";
const Home: NextPage = () => {
  return (
      <>
          <Head>
              <title>{seoData.AboutUs.title}</title>
              <meta name="description" content={seoData.AboutUs.description}/>
              <meta name="keywords" content={seoData.AboutUs.keywords}/>
              <meta name="title" content={seoData.AboutUs.metaTitle}/>
          </Head>
          <div>
              <AboutUsBanner
                 image={aboutUs.Banner.backgroundImage}
                 title={aboutUs.Banner.title}
                 subtitle={aboutUs.Banner.subtitle}
             />
            <WhatWeAre
              title1={aboutUs.WhatWe.title1}
              subtitle1={aboutUs.WhatWe.subtitle1}
              title2={aboutUs.WhatWe.title2}
              subtitle2={aboutUs.WhatWe.subtitle2}
             />
              <Float/>
               <QuiltedImageList />
               <OurValue items={values} />
               <Meetour/>
      <div
        style={{ background: '#F9FBFF' }}
        className="bg-cover bg-center -z-0 bg-no-repeat relative  block"
      >
        <Testimonials/>
      </div>
      <div
        style={{ background: '#F9FBFF' }}
        className="bg-cover bg-center pb-[100px] -z-0 bg-no-repeat relative  block"
      >
        <CaseStudy />
      </div>
      <Letswork
        image={aboutUs.Lets.backgroundImage}
        title={aboutUs.Lets.title}
        subtitle={aboutUs.Lets.subtitle}
        buttonName={aboutUs.Lets.buttonName}
      />
              <div className="mt-[60px]">
                  <FreeQuotation />

              </div>
              <Chat/>

              <FixedButton />

      <Footer />
    </div>
      </>
  );
};

export default Home;
