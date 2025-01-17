import React, {useContext, useEffect, useState} from 'react';
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
import {LoaderContext} from "../context/LoaderContext";

export const FreeQuotation = () => {
  const { setIsLoading } = useContext(LoaderContext);
  const labelNames = ['Software Development', 'Web Design'];
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [checked, setChecked] = useState<boolean[]>(new Array(labelNames.length).fill(false));
  const [id , setId] = useState('');


  useEffect(() => {
    fetch("/api/ContactUS/GET")
        .then((response) => response.json())
        .then((data) => {
          setId(data._id);
        })
        .catch((error) => {
          console.error("Error fetching banner data:", error);
        });
  }, []);


  const handleToggle = (index:number) => () => {
    const newChecked = [...checked];
    newChecked[index] = !newChecked[index];
    setChecked(newChecked);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const interestedInArray = labelNames
        .filter((label, index) => checked[index])
        .map((label) => ({ title: label }));
    setIsLoading(true);
    const response = await fetch('/api/ContactUS/POST', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(
          {
            _id: id, // Replace with the actual document ID
            ContactData: [
              {
                "First Name": firstName,
                "Last Name": lastName,
                "Email": email,
                "Message": message,
                "Interested In": interestedInArray,
              },
            ],
          }),
    });

    if (response.ok) {
      console.log('Update successful');
      setIsLoading(false);
    } else {
      console.error('Update failed');
      setIsLoading(false);
    }
  };

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
              <p className="text-[#747C85] text-[18px] md:text-[18px] font-medium">
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
              <form onSubmit={handleSubmit}>
              <div className="w-[100%] flex flex-row justify-between">
                <div className="w-[48%]">
                  <div className="text-[#515458] text-[10px] md:text-[12px] text-start font-medium">
                    First name
                  </div>
                  <FormControl sx={{ width: '100%' }}>
                    <OutlinedInput
                      placeholder="enter first name"
                      style={{ borderRadius: '8px' }}
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
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
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
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
                      type="submit"
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
              </form>
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
