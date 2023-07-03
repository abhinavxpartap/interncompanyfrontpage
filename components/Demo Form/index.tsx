import React, { useState } from 'react'
import { FreeQuotation } from '../freeQuotation'
import { Box, Typography, FormControl, OutlinedInput, Grid, FormControlLabel, Checkbox, Button } from "@mui/material"


const DemoForm = () => {
    const [checked, setChecked] = useState([false, false]);
    const handleToggle = (index: number) => () => {
        const newChecked = [...checked];
        newChecked[index] = !newChecked[index];
        setChecked(newChecked);
    };
    const labelNames = ['Software Development', 'Web Design'];
    return (
        <div className="bg-[url('/images/bg-form.png')] md:px-[70px] md:pt-[103px] pt-[40px] md:pb-[206px] pb-[150px] mt-[150px] relative">
            <div className="max-w-[1377.5px] relative mx-auto flex md:flex-row flex-col justify-between ">
                <div>
                    <div className="text-[#FDFDFD] md:text-[50px] text-[35px] md:text-start text-center font-bold leading-[125%] mt-[13px] max-w-[691px]">Estimations & planning for business decisions</div>
                    <div className="text-[22px] font-medium md:text-start text-center  leading-[26px] text-[#FDFDFD] mt-[20px]">Book your call now</div>
                </div>
                <div className="md:absolute relative right-0 md:top-[-170px] top-[70px] max-w-[460px] bg-white rounded-[10px] p-[20px]">
                    <Box className="w-[100%] flex flex-row justify-between">
                        <Box className="w-[48%]">
                            <Typography className="text-[#515458] text-[10px] md:text-[12px] text-start font-medium">First name</Typography>
                            <FormControl sx={{ width: '100%' }}>
                                <OutlinedInput
                                    placeholder="enter first name"
                                    style={{ borderRadius: "8px" }}
                                    inputProps={{ style: { fontSize: "12px", } }}
                                />
                            </FormControl>
                        </Box>
                        <Box className="w-[48%]">
                            <Typography className="text-[#515458] text-[10px] md:text-[12px] text-start font-medium">Last name</Typography>
                            <FormControl sx={{ width: '100%' }}>
                                <OutlinedInput
                                    placeholder="enter last name"
                                    style={{ borderRadius: "8px" }}
                                    inputProps={{ style: { fontSize: "12px", } }}
                                />
                            </FormControl>
                        </Box>
                    </Box>
                    <Box className="mt-[20px] w-[100%]">
                        <Typography className="text-[#515458] text-[10px] md:text-[12px] text-start font-medium">Email</Typography>
                        <FormControl sx={{ width: '100%' }}>
                            <OutlinedInput
                                placeholder="enter email address"
                                style={{ borderRadius: "8px" }}
                                inputProps={{ style: { fontSize: "12px", } }}
                            />
                        </FormControl>
                    </Box>
                    <Box className="mt-[20px]">
                        <Typography className="text-[#515458] text-[10px] md:text-[12px] text-start font-medium">Your Message</Typography>
                        <FormControl
                            sx={{ width: '100%' }}
                        >
                            <OutlinedInput
                                placeholder="enter your Message"
                                style={{ width: "100%", height: '70px', borderRadius: "8px", justifyContent: "start", alignContent: "start", alignItems: "start", padding: "0px" }}
                                inputProps={{ style: { justifyContent: "start", fontSize: "12px", alignItems: "start", paddingTop: '10px', paddingBottom: '0px' } }}
                            />
                        </FormControl>
                    </Box>
                    <Box className="mt-[20px] flex flex-col ">
                        <Typography className="text-[#2C3238] text-[12px] md:text-[16px] font-medium">What are you more interested in:</Typography>
                        <Grid container className="mt-[7px] w-[100%]">
                            {checked.map((_, index) => (
                                <Grid item xs={6} key={index}>
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
                                className="text-[12px] md:text-[14px] font-semibold "
                                sx={{
                                    '&.MuiButtonBase-root': {
                                        backgroundColor: '#177DF0',
                                        color: 'white',
                                        textTransform: 'capitalize',
                                        padding: '8px 24px 8px 24px',
                                        border: '1px solid #5CA9FF',
                                        borderRadius: "30px",
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
    )
}

export default DemoForm