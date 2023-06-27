import type { NextPage } from 'next'
import { Banner } from '../components/Banner'
import data from '../data/homepage.json';
import ourClientData from '../data/common/clients.json';
import awesomeNumberData from '../data/common/awesomeNumbers.json';
import { Services } from '../components/Services';
import services from '../data/common/services.json';

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
      <Services
        title={data.serviceData.title}
        subtitle={data.serviceData.subtitle}
        description={data.serviceData.description}
        data={services}
      />
    </div>
  )
}

export default Home
