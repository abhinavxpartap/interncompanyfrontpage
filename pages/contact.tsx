import type { NextPage } from 'next'
import ContactBanner from "../components/ContactBanner";
import { Footer } from '../components/footer';
import TalkTo from "../components/TalkToExpert";

const Home: NextPage = () => {
    return (
        <div >
            <div
                className="bg-cover OurStoryBanner bg-center bg-no-repeat relative"
            >
                <ContactBanner/>


            </div>
            <div
                className="bg-cover TalkTo bg-center bg-no-repeat  relative"
            >
                <TalkTo/>
            </div>
            <Footer/>
        </div>
    )
}

export default Home
