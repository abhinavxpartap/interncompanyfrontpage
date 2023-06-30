import { Button } from "../../utils/Button";

const Team = () =>{
return (
    <div className="mt-[120px] flex flex-row px-[110px] py-[40px]">
        <div className="w-[627px]">
            <img src="/images/unsplash_Of_m3hMsoAA.png" alt="unsplash" />
        </div>
        <div className="inline-block ml-[83px]">
            <Button label={"EXPERT TEAM"} type="button" // onClick={()=> router.push("/getStarted")}
                className="max-w-[150px] px-[10px] py-[4px] bg-[#A1B4F7] text-[white] xxl:leading-[22.99px]
                tracking-[-0.25px] font-semibold sm:leading-[20.57px] leading-[14px] xxl:w-[238px] md:w-[200px] w-[160px]
                text-[12px]"
                />
                <div className="text-[#151448] text-[40px] font-bold leading-[125%] mt-[13px] w-[555px]">Fastest growing
                    digital product agency in APAC</div>
                <div className="text-[#747C85] text-[18px] mt-[13px] font-medium w-[542px] leading-[170%]">Work with
                    hand-picked tech talent having experience of working with companies, from around the world and
                    time-zones.</div>
                <div className="mt-[13px]">
                    <Button label="Schedule a Demo" type="button" color="secondary"
                        className="text-[white] bg-[#0092FF] font-semibold text-[16px] leading-[24px] px-[22px] py-[12px] hover:text-[#0092FF]"
                        // onClick={()=> router.push("/getStarted")}
                        />
                </div>
        </div>
    </div>
    );
}
export default Team;

