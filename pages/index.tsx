import type { NextPage } from 'next'
import { Banner } from '../components/Banner'
import data from '../data/homepage.json';
import ourClientData from '../data/common/clients.json';
import awesomeNumberData from '../data/common/awesomeNumbers.json';
import { Services } from '../components/Services';
import services from '../data/common/services.json';
import { OurBrands } from '../components/ourBrands';
import ProductOverview from '../components/Product Overview';
import React from "react";
import {Footer} from "../components/footer";


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
      {/* <Services
        title={data.serviceData.title}
        subtitle={data.serviceData.subtitle}
        description={data.serviceData.description}
        data={services}
      /> */}
        <Footer/>
    </div>
  )
}

export default Home
