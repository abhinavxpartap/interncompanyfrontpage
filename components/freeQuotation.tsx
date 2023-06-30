
import React,{useState} from "react";
import {Box,Typography,FormControl,OutlinedInput,Grid,FormControlLabel,Checkbox,Button} from "@mui/material"

export const FreeQuotation: React.FC<any> = () => {
    const [checked, setChecked] = useState([false, false]);
    const handleToggle = (index:number) => () => {
        const newChecked = [...checked];
        newChecked[index] = !newChecked[index];
        setChecked(newChecked);
    };
    const labelNames = ['Software Development', 'Web Design'];
    const content = <>
        <div
            className="max-w-[1377.5px] mx-auto flex items-center justify-between md:pt-[120px]  pt-[30px] pb-[30px] md:pb-[120px]"
        >
            <div className="w-[100%] px-[20px] flex flex-row text-start items-center justify-center ">
                <div className="w-[100%] justify-center items-center flex flex-col">
                    <div className="w-[85vw] md:w-[380px] flex flex-col justify-center items-center text-center pb-[30px] md:mb-[50px]">
                        <h1 className="text-[#0092FF] text-[9px] md:text-[12px] font-medium">
                            FREE QUOTATION
                        </h1>
                        <h1 className="text-[#151448] text-[25px] md:text-[35px] font-semibold">
                            Get a Free Quotation
                        </h1>
                        <p className="text-[#444444] text-[15px] md:text-[19px] font-medium">
                            Don't Worry Your Data and Business Ideas Are Safe With Us.
                        </p>
                    </div>
                    <div className=" w-[85vw] md:w-[480px] rounded-[10px] py-[30px] px-[20px] bg-[white]" style={{boxShadow: 'rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px'}} >
                        <Box className="w-[100%] flex flex-row justify-between">
                            <Box className="w-[48%]">
                                <Typography className="text-[#515458] text-[10px] md:text-[12px] text-start font-medium">First name</Typography>
                                <FormControl sx={{ width: '100%' }}>
                                    <OutlinedInput
                                        placeholder="enter first name"
                                        style={{borderRadius:"8px"}}
                                        inputProps={{ style: {fontSize:"12px",} }}
                                    />
                                </FormControl>
                            </Box>
                            <Box className="w-[48%]">
                                <Typography className="text-[#515458] text-[10px] md:text-[12px] text-start font-medium">Last name</Typography>
                                <FormControl sx={{ width: '100%'}}>
                                    <OutlinedInput
                                        placeholder="enter last name"
                                        style={{borderRadius:"8px"}}
                                        inputProps={{ style: {fontSize:"12px",} }}
                                    />
                                </FormControl>
                            </Box>
                        </Box>
                        <Box className="mt-[20px] w-[100%]">
                            <Typography className="text-[#515458] text-[10px] md:text-[12px] text-start font-medium">Email</Typography>
                            <FormControl sx={{ width: '100%' }}>
                                <OutlinedInput
                                    placeholder="enter email address"
                                    style={{borderRadius:"8px"}}
                                    inputProps={{ style: {fontSize:"12px",} }}
                                />
                            </FormControl>
                        </Box>
                        <Box className="mt-[20px]">
                            <Typography className="text-[#515458] text-[10px] md:text-[12px] text-start font-medium">Your Message</Typography>
                        <FormControl
                            sx={{width: '100%'}}
                        >
                            <OutlinedInput
                                placeholder="enter your Message"
                                style={{width:"100%",height: '70px',borderRadius:"8px", justifyContent:"start",alignContent:"start",alignItems:"start", padding:"0px" }}
                                inputProps={{ style: {justifyContent:"start",fontSize:"12px", alignItems:"start",paddingTop: '10px',paddingBottom:'0px' } }}
                            />
                        </FormControl>
                        </Box>
                        <Box className="mt-[20px] flex flex-col ">
                            <Typography className="text-[#2C3238] text-[12px] md:text-[16px] font-medium">What are you more interested in:</Typography>
                            <Grid container xs={12} className="mt-[7px] w-[100%]">
                                {checked.map((_, index) => (
                                    <Grid item xs={6}  key={index}>
                                        <FormControlLabel
                                            key={index}
                                            control={
                                                <Checkbox
                                                    size="small"
                                                    checked={checked[index]}
                                                    onChange={handleToggle(index)}
                                                />
                                            }
                                            label={
                                                <Typography
                                                    sx={{
                                                        color: checked[index] ? '#000000' : '#828282',
                                                    }}
                                                    className="text-[9px] md:text-[14px] font-normal ">{labelNames[index]}</Typography>
                                            }
                                        />
                                    </Grid>
                                ))}
                            </Grid>
                            <div className="mt-[20px]">
                                <Button
                                    className="ButtonTransition overflow-hidden text-[12px] md:text-[14px] font-semibold "
                                    sx={{
                                        '&.MuiButtonBase-root': {
                                            backgroundColor: '#177DF0',
                                            color: 'white',
                                            textTransform: 'capitalize',
                                            padding: '8px 24px 8px 24px',
                                            border: '1px solid #5CA9FF',
                                            borderRadius:"30px",
                                            '&:hover': {
                                                border: '1px solid #5CA9FF',
                                                backgroundColor: 'transparent',
                                                color: '#177DF0',
                                            },
                                        },
                                    }}
                                >
                                    Book my Demo
                                </Button>
                            </div>
                        </Box>
                    </div>
                </div>
            </div>
        </div>
    </>
    return (
        <>
            <div>
                {content}
            </div>
        </>
    );
};

