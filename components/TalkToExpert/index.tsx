import type { NextPage } from 'next'
import {Button} from "@mui/material";

const TalkTo: NextPage = () => {
    return (
        <div >
            <div
                className="w-full pb-[120px]  pt-[50px]  relative md:max-w-[1441px] sm:pl-[80px]  h-full gap-[20px] pr-[40px] mx-auto flex  flex-col  ">

                <div className="">
                    <div className="text-white text-[50px] font-bold max-w-[620px] leading-[60px]" >
                        Enable Unmatched Digital Transformation Seamlessly
                    </div>

                </div>
                <div className="flex    ">
                    <Button
                        className="text-[16px] font-semibold "
                        sx={{
                            '&.MuiButtonBase-root': {
                                backgroundColor: '#177DF0',
                                color: 'white',
                                textTransform: 'capitalize',
                                padding: '10px 22px 10px 22px',
                                border: '1px solid #177DF0',
                                borderRadius:"30px",
                                '&:hover': {
                                    border: '1px solid #5CA9FF',
                                    backgroundColor: 'transparent',
                                    color: '#177DF0',
                                },
                            },
                        }}
                    >
                        Talk to Our Experts                        </Button>
                </div>

            </div>
        </div>
    )
}

export default TalkTo;
