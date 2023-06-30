import {
    Box, Button, Checkbox,
    FormControl, FormControlLabel,
    Grid,
    InputLabel,
    MenuItem,
    OutlinedInput,
    Select,
    TextField,
    Typography,
    InputAdornment,
} from '@mui/material';
import type {NextPage} from 'next'
import React, {useState} from 'react';
import  { SelectChangeEvent } from '@mui/material/Select';
import {Img} from "../../utils/Img";


const ContactBanner: NextPage = () => {

    const [age, setAge] = React.useState('');
    const [checked, setChecked] = useState([false, false]);
    const handleToggle = (index:number) => () => {
        const newChecked = [...checked];
        newChecked[index] = !newChecked[index];
        setChecked(newChecked);
    };
    const labelNames = ['Software Development', 'Web Design'];
    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value as string);
    };
    const [params, setParams] = React.useState<any>({
        name: '',
        email: '',
        number: '',
        message: '',
    });
    const setParam = (key: string, value: any) => {
        setParams((prev: any) => ({...prev, [key]: value}));
    };

    const Icon = () => {
        return (
            <Img src="/addIcon.svg" className="w-[100%]" alt={"Icon"}/>
        )
    }

    return (
        <div>
            <div
                className="w-full  relative md:max-w-[1371px] pt-[210px] pb-[270px] sm:pl-[80px]  h-full gap-[80px] mx-auto flex md:flex-row flex-col  ">

                <div className="">
                    <div className="text-white text-[55px] font-bold max-w-[550px] leading-[60px]">
                        Kickstart Your Digital Journey Today


                    </div>
                    <div className="text-white text-[20px] max-w-[450px] mt-[20px] font-medium">
                        Get all your questions answered by our business development team.
                    </div>

                </div>

                <div
                    className="bg-white border-2 absolute  right-0 top-[60px] mr-[55px]  rounded-[15px] px-[30px] py-[12px]">
                    <div className="text-[22px] w-[400px] h-[650px] z-[30] flex flex-col font-semibold">
                        Build the Next Big Thing
                        <div className="mt-[20px]">
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
                            <Box className="mt-[15px] w-[100%]">
                                <Typography className="text-[#515458] text-[10px] md:text-[12px] text-start font-medium">Email</Typography>
                                <FormControl sx={{ width: '100%' }}>
                                    <OutlinedInput
                                        placeholder="enter email address"
                                        style={{borderRadius:"8px",color:"#575757"}}
                                        inputProps={{ style: {fontSize:"12px"} }}
                                    />
                                </FormControl>
                            </Box>
                            <Box className="mt-[15px] w-[100%]">
                                <Typography className="text-[#515458] text-[10px] md:text-[12px] text-start font-medium">Select a budget range</Typography>
                                <FormControl sx={{minWidth: "100%" }}>
                                    <Select
                                        value={age}
                                        onChange={handleChange}
                                        displayEmpty
                                        style={{fontSize:"12px",color:"#545454" ,borderRadius:"8px"}}
                                        inputProps={{ 'aria-label': 'Without label'}}
                                    >
                                        <MenuItem value="">
                                            select
                                        </MenuItem>
                                        <MenuItem value="1000">$1000</MenuItem>
                                        <MenuItem value="2000">$100-$200</MenuItem>
                                        <MenuItem value="3000">$1000+</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                            <Box className="mt-[15px]">
                                <Typography className="text-[#515458] text-[10px] md:text-[12px] text-start font-medium">Project Description</Typography>
                                <FormControl
                                    sx={{width: '100%'}}
                                >
                                    <OutlinedInput
                                        placeholder="enter your Message"
                                        style={{width:"100%",height: '80px',borderRadius:"8px", justifyContent:"start",alignContent:"start",alignItems:"start", padding:"0px" }}
                                        inputProps={{ style: {justifyContent:"start",fontSize:"12px", alignItems:"start",paddingTop: '10px',paddingBottom:'0px' } }}
                                    />
                                </FormControl>
                            </Box>
                            <Box className="mt-[15px] w-[100%]">
                                <Typography className="text-[#515458] text-[10px] md:text-[12px] text-start font-medium">Attach File</Typography>
                                <FormControl sx={{ width: '100%' }}>
                                    <OutlinedInput
                                        placeholder="attach"
                                        style={{ borderRadius: "8px" }}
                                        inputProps={{ style: { fontSize: "12px" } }}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <Icon/>
                                            </InputAdornment>
                                        }
                                    />
                                </FormControl>
                            </Box>
                            <Box className="mt-[15px] flex flex-col ">
                                <Typography className="text-[#2C3238] text-[16px] font-medium">What are you more interested in:</Typography>
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
                                                        className="text-[14px] font-normal ">{labelNames[index]}</Typography>
                                                }
                                            />
                                        </Grid>
                                    ))}
                                </Grid>
                                <div className="mt-[20px]">
                                    <Button
                                        className="text-[14px] font-semibold "
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
        </div>
    )
}

export default ContactBanner;
