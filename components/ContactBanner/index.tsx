import {Box, FormControl, Grid, InputLabel, MenuItem, Select, TextField} from '@mui/material';
import type {NextPage} from 'next'
import React from 'react';
import  { SelectChangeEvent } from '@mui/material/Select';


const ContactBanner: NextPage = () => {
    const [age, setAge] = React.useState('');
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
                    <div className="text-[22px] w-[500px] h-[650px] z-[30] flex flex-col font-semibold">
                        Build the Next Big Thing
                        <Grid container className="mt-[10px] " spacing={2}>
                            <Grid item xs={12} md={6} className="">
                                <label
                                    htmlFor="firstname"
                                    className="text-[#5A7184]  font-medium text-[16px] inline-block"
                                >
                                    First Name
                                </label>
                                <TextField
                                    fullWidth
                                    id="firstname"
                                    color="primary"
                                    variant="outlined"
                                    placeholder="First Name"
                                    value={params.name}
                                    style={{ height: '35px', borderRadius: '10px' }}

                                    onChange={(e) => setParam('first_name', e.target.value)}
                                />

                            </Grid>
                            <Grid item xs={12} md={6} className=" ">
                                <label
                                    htmlFor="number"
                                    className="text-[#5A7184] font-medium text-[16px]  inline-block"
                                >
                                    Phone Number
                                </label>
                                <TextField
                                    fullWidth
                                    id="number"
                                    color="primary"
                                    variant="outlined"
                                    placeholder="Phone Number "
                                    value={params.number}
                                    style={{ height: '35px', borderRadius: '10px' }}

                                    onChange={(e) => setParam('number', e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12} md={12} className=" ">
                                <label
                                    htmlFor="email"
                                    className="text-[#5A7184] font-medium text-[16px]  inline-block"
                                >
                                    Email Address
                                </label>
                                <TextField
                                    fullWidth
                                    id="email"
                                    color="primary"
                                    style={{ height: '35px', borderRadius: '10px' }}

                                    variant="outlined"
                                    placeholder="Email Address"
                                    value={params.email}
                                    onChange={(e) => setParam('email', e.target.value)}
                                />
                            </Grid>
                            <Grid item md={12} xs={12}>
                                <Box  >
                                    <label
                                        htmlFor="Location"
                                        className="text-[#515151]  font-medium text-[17px]  inline-block"
                                    >
                                        <span className=""> Job Type</span>
                                    </label>
                                    <FormControl   fullWidth>
                                        <InputLabel   id="demo-simple-select-label"></InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={age}


                                            className="select-input"
                                            onChange={handleChange}
                                        >
                                            <MenuItem value={10}>Onsite</MenuItem>
                                            <MenuItem value={20}>Hybrid</MenuItem>
                                            <MenuItem value={30}>Remote</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Box>

                            </Grid>
                            <Grid item xs={12} className="">
                                <label
                                    htmlFor="message"
                                    className="text-[#5A7184] font-medium text-[16px] pb-3 inline-block"
                                >Message
                                </label>
                                <TextField
                                    fullWidth
                                    placeholder="Type your message..."
                                    multiline
                                    rows={4}
                                    style={{ height: '35px', borderRadius: '10px' }}

                                    id="message"
                                    color="primary"
                                    variant="outlined"
                                    value={params.message}
                                    onChange={(e) => setParam('message', e.target.value)}
                                />
                            </Grid>


                        </Grid>

                    </div>


                </div>

            </div>
        </div>
    )
}

export default ContactBanner;
