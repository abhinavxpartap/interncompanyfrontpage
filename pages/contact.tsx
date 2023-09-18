import type { NextPage } from 'next';
import { ContactBanner } from '../components/ContactBanner';
import { Footer } from '../components/footer';
import { TalkTo } from '../components/TalkToExpert';
import ContactData from '../data/contact.json';
import React from 'react';
import { OurBrands } from '../components/ourBrands';
import SuccesStory from '../components/SuccesStory';
import FixedButton from "../components/FixedButton";
import Float from "../components/Float";

const Home: NextPage = () => {
  return (
    <div>
      <div className='bg-cover OurStoryBanner bg-center bg-no-repeat relative'>
        <ContactBanner
          title={ContactData.Banner.title}
          subtitle={ContactData.Banner.subtitle}
          image={ContactData.Banner.image}
        />
      </div>
      <div
          style={{ background: '#F9FBFF' }}

          className="py-[35px]">
<Float/>
        <OurBrands />
      </div>
      <div
        style={{ background: '#F9FBFF' }}
        className='bg-cover bg-center pb-[120px] -z-0 bg-no-repeat relative  block'
      >
        <SuccesStory />
      </div>
      <div className='bg-cover TalkTo bg-center bg-no-repeat  relative'>
        <TalkTo title={ContactData.TalkTo.title}
                image={ContactData.TalkTo.image}
        />
      </div>
        <FixedButton />

        <Footer />
    </div>
  );
};

export default Home;
