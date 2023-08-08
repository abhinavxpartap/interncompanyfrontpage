import type { NextPage } from 'next';
import { Banner } from '../components/Banner';
import data from '../data/homepage.json';
import ourClientData from '../data/common/clients.json';
import awesomeNumberData from '../data/common/awesomeNumbers.json';
import { OurBrands } from '../components/ourBrands';
import ProductOverview from '../components/Product Overview';
import React from 'react';
import { Footer } from '../components/footer';
import Team from "../components/Expert team";
import Service from "../components/Service";
import CaseStudy from "../components/Case Study";
import Testimonials from "../components/Testimonials";
import DemoForm from "../components/Demo Form";

const Home: NextPage = () => {
  return (
    <div>
      <Banner
        image={data.bannerData.image}
        title={data.bannerData.title}
        subtitle={data.bannerData.subtitle}
        button={data.bannerData.button}
        ourClients={ourClientData}
        awesomeNumbers={awesomeNumberData}
      />
      <div>
        <OurBrands />
      </div>
        <ProductOverview />
        <div
            style={{background: "#F9FBFF"}}
            className="bg-cover bg-center bg-no-repeat relative  block"
        >        <Team />
        </div>
        <div
            style={{background: "#F9FBFF"}}
            className="bg-cover bg-center bg-no-repeat relative  block">
            <Service />

        </div>
        <div
            style={{background: "#F9FBFF"}}
            className="bg-cover bg-center -z-0 bg-no-repeat relative  block">
            <CaseStudy />
        </div>
        <div
            style={{background: "#F9FBFF"}}
            className="bg-cover bg-center -z-0 bg-no-repeat relative  block">
            <Testimonials />
        </div>
        <div
            style={{background: "#F9FBFF"}}
            className="bg-cover bg-center -z-0 bg-no-repeat relative  block">
            <DemoForm />

        </div>
        <Footer />
    </div>
  );
};
export default Home;
