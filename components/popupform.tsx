import React, { useState } from 'react';
import { Box, Typography, FormControl, IconButton,OutlinedInput, Grid, FormControlLabel, Checkbox, Button } from "@mui/material"
import { Img } from "../utils/Img";

const Popupform = ({ onClose }) => {
    const [checked, setChecked] = useState([false, false]);
    const handleToggle = (index:any) => () => {
        const newChecked = [...checked];
        newChecked[index] = !newChecked[index];
        setChecked(newChecked);
      };
    
      const labelNames = ['Software Development', 'Web Design'];
    
      const handleClose = () => {
        setChecked([false, false]); // Reset checkbox state
        onClose();
      };

  return (
    <div className="bg-white relative flex justify-center items-center">
        <div className="relative justify-center items-center mx-auto max-w-[460px] bg-white rounded-[10px] p-[30px]">
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
                        <Grid container className="mt-[7px] w-[120%]">
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
        <div className="absolute top-[0px] right-[0px]">
            <IconButton
                onClick={handleClose}
            >
                <Img src="/close.png" alt="closeIcon" className="w-[20px]"  />
            </IconButton>
        </div>


    </div>
  )
}

export default Popupform;

