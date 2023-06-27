import type { NextPage } from 'next'
import PortfolioBanner from "../components/PortfolioBanner";
import ProjectChallanges from "../components/ProjectChallanges";

const Portfolio: NextPage = () => {
    return (
        <div >
            <div
                className="bg-cover portfolioBanner bg-center bg-no-repeat relative"
            >
                <PortfolioBanner/>



            </div>
            <ProjectChallanges/>


        </div>
    )
}

export default Portfolio
