import type { NextPage } from 'next'

const ContactBanner: NextPage = () => {
    return (
        <div >
            <div
                className="w-full h-[700px] relative md:max-w-[1441px] sm:pl-[80px]  h-full gap-[80px] mx-auto flex md:flex-row flex-col  ">

                <div className="mt-[210px]">
                    <div className="text-white text-[55px] font-bold max-w-[550px] leading-[60px]" >
                        Kickstart Your Digital Journey Today

                    </div>
                    <div className="text-white text-[20px] max-w-[450px] mt-[20px] font-medium">
                        Get all your questions answered by our business development team.
                    </div>

                </div>

<div className="bg-white absolute  right-0   rounded-[15px] px-[30px] py-[12px]">
<div className="text-[18px] w-[530px] h-[500px] z-[30] flex  font-semibold">
    Build the Next Big Thing

</div>

</div>

            </div>
        </div>
    )
}

export default ContactBanner;
