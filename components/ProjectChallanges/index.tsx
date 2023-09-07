import type { NextPage } from 'next';
import challenges from '../../data/portfolio.json'

const Project: NextPage = () => {


  return (
      <div>
        <div className="w-full  bg-cover bg-center  max-w-[1440px] bg-no-repeat  pb-[30px] pt-[15px]  sm:pl-[50px]  h-full gap-[20px]  mx-auto flex  flex-col  ">
          <div className="w-[100%] flex flex-col items-center  justify-center">
            <div className="md:text-[40px] text-[25px] flex-col  flex justify-center text-start w-[100%] font-semibold">
              Our Project Challenges
              <div className="flex md:flex-row mt-[30px] sm:ml-[80px] sm:gap-[60px] flex-col ">
                {challenges.challenges.map((challenge) => (
                    <div className="flex flex-row" key={challenge.id}>
                      <div className="text-[70px] font-semibold items-start justify-start leading-[55px]">
                        {challenge.id}
                      </div>
                      <div className="flex flex-col ml-[5px]">
                        <div className="text-[18px] font-medium">
                          {challenge.title}
                        </div>
                        <div className="max-w-[450px] text-[#757B8A] text-[15px]">
                          {challenge.description}
                        </div>
                      </div>
                    </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Project;
