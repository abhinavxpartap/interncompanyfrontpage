import React, { useState } from 'react';
import {
  Box,
  Typography,
  FormControl,
  OutlinedInput,
  Grid,
  FormControlLabel,
  Checkbox,
  Button,
} from '@mui/material';
import { useRouter } from 'next/router';

export const FreeQuotation = () => {
  const [checked, setChecked] = useState([false, false]);
  const handleToggle = (index: number) => () => {
    const newChecked = [...checked];
    newChecked[index] = !newChecked[index];
    setChecked(newChecked);
  };
  const router = useRouter();
  const labelNames = ['Software Development', 'Web Design'];
  const content = (
    <>
      <div className="max-w-[1377.5px] mx-auto flex items-center justify-between md:pt-[10px]  pt-[30px] pb-[30px] md:pb-[100px]">
        <div className="w-[100%] px-[20px] flex flex-row text-start items-center justify-center ">
          <div className="w-[100%] justify-center items-center flex flex-col">
            <div className="w-[85vw] md:w-[380px] flex flex-col justify-center items-center text-center pb-[30px] md:mb-[20px]">
              <h1 className="text-[#8184EB] text-[10px] md:text-[12px] font-medium">
                FREE QUOTATION
              </h1>
              <h1 className="text-[#151448] text-[30px] pb-[5px] md:pb-0 md:text-[35px] font-semibold">
                Get a Free Quotation
              </h1>
              <p className="text-[#444444] text-[18px] md:text-[19px] font-medium">
                Do not Worry Your Data and Business Ideas Are Safe With Us.
              </p>
            </div>
            <div
              className=" w-[85vw] md:w-[480px] rounded-[10px] py-[30px] px-[20px] bg-[white]"
              style={{
                boxShadow:
                  'rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px',
              }}
            >
              <div className="w-[100%] flex flex-row justify-between">
                <div className="w-[48%]">
                  <div className="text-[#515458] text-[10px] md:text-[12px] text-start font-medium">
                    First name
                  </div>
                  <FormControl sx={{ width: '100%' }}>
                    <OutlinedInput
                      placeholder="enter first name"
                      style={{ borderRadius: '8px' }}
                      inputProps={{ style: { fontSize: '12px' } }}
                    />
                  </FormControl>
                </div>
                <Box className="w-[48%]">
                  <div className="text-[#515458] text-[10px] md:text-[12px] text-start font-medium">
                    Last name
                  </div>
                  <FormControl sx={{ width: '100%' }}>
                    <OutlinedInput
                      placeholder="enter last name"
                      style={{ borderRadius: '8px' }}
                      inputProps={{ style: { fontSize: '12px' } }}
                    />
                  </FormControl>
                </Box>
              </div>
              <div className="mt-[20px] w-[100%]">
                <div className="text-[#515458] text-[10px] md:text-[12px] text-start font-medium">
                  Email
                </div>
                <FormControl sx={{ width: '100%' }}>
                  <OutlinedInput
                    placeholder="enter email address"
                    style={{ borderRadius: '8px' }}
                    inputProps={{ style: { fontSize: '12px' } }}
                  />
                </FormControl>
              </div>
              <div className="mt-[20px]">
                <div className="text-[#515458] text-[10px] md:text-[12px] text-start font-medium">
                  Your Message
                </div>
                <FormControl sx={{ width: '100%' }}>
                  <OutlinedInput
                    placeholder="enter your Message"
                    style={{
                      width: '100%',
                      height: '70px',
                      borderRadius: '8px',
                      justifyContent: 'start',
                      alignContent: 'start',
                      alignItems: 'start',
                      padding: '0px',
                    }}
                    inputProps={{
                      style: {
                        justifyContent: 'start',
                        fontSize: '12px',
                        alignItems: 'start',
                        paddingTop: '10px',
                        paddingBottom: '0px',
                      },
                    }}
                  />
                </FormControl>
              </div>
              <div className="mt-[20px] flex flex-col ">
                <div className="text-[#2C3238] text-[14px] md:text-[16px] font-medium">
                  What are you more interested in:
                </div>
                <Grid container xs={12} className="mt-[7px] w-[100%]">
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
                            className="text-[12px] md:text-[14px] font-normal "
                          >
                            {labelNames[index]}
                          </Typography>
                        }
                      />
                    </Grid>
                  ))}
                </Grid>
                <div className="mt-[20px]">
                  <Button
                    onClick={() => router.push('/')}
                    className="ButtonTransition  "
                    sx={{
                      '&.MuiButtonBase-root': {
                        backgroundColor: '#8184EB',
                        color: 'white',
                        overflow: 'hidden',
                        fontSize: {
                          xs: '12px',
                          md: '14px',
                        },
                        fontWeight: 'bold',
                        textTransform: 'capitalize',
                        padding: '8px 24px 8px 24px',
                        border: '1px solid #8184EB',
                        borderRadius: '30px',
                        '&:hover': {
                          border: '1px solid #8184EB',
                          backgroundColor: 'transparent',
                          color: '#8184EB',
                        },
                      },
                    }}
                  >
Show Me How</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
  return (
    <>
      <div>{content}</div>
    </>
  );
};
