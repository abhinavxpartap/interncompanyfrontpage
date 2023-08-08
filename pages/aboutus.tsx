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
import QuiltedImageList from '../components/images';
import { FreeQuotation } from '../components/freeQuotation';
import Testimonials from '../components/Testimonials';
import CaseStudy from '../components/Case Study';

const Home: NextPage = () => {
  return (
    <div>
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
        subtitle2={aboutUs.WhatWe.subtitle2}
      />
      <QuiltedImageList />

      <OurValue items={aboutUs.values} />
      <Meetour />
      <div
        style={{ background: '#F9FBFF' }}
        className="bg-cover bg-center -z-0 bg-no-repeat relative  block"
      >
        <Testimonials />
      </div>
      <div
        style={{ background: '#F9FBFF' }}
        className="bg-cover bg-center pb-[100px] -z-0 bg-no-repeat relative  block"
      >
        <CaseStudy />
      </div>
      <Letswork
        image={aboutUs.Lets.image}
        mobileImage={aboutUs.Lets.mobileImage}
        title={aboutUs.Lets.title}
        subtitle={aboutUs.Lets.subtitle}
      />
      <FreeQuotation />

      <Footer />
    </div>
  );
};

export default Home;
