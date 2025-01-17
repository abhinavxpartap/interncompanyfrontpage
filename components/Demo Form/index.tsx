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
import { LoaderContext } from "../../context/LoaderContext";

const DemoForm = () => {
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
            _id: id,
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
  const styles = {
    root: {
      color: "#515458",
      fontSize: "12px",
      "@media (min-width: 768px)": {
        fontSize: "12px",
      },
      textAlign: "start",
      fontWeight: "600",
    },
  };


  return (
    <div className="bg-[url('/images/logo/productover.png')] bg-cover md:px-[70px] md:pt-[103px]  md:pb-[206px] pb-[150px] pt-[190px] relative">
      <div className="max-w-[1377.5px] relative mx-auto flex md:flex-row flex-col justify-between ">
        <div>
          <div className="text-[#FDFDFD] md:text-[50px] text-[35px] md:text-start text-center font-bold leading-[125%] mt-[13px] xl:w-[75%] md:w-[45%]">
            Estimations & planning for business decisions
          </div>
          <div className="text-[22px] font-medium md:text-start text-center  leading-[26px] text-[#FDFDFD] mt-[20px]">
            Book your call now
          </div>
        </div>
        <div className="md:absolute relative justify-center items-center mx-auto  md:right-0 md:top-[-170px] top-[70px] max-w-[460px] bg-white rounded-[10px] p-[20px]">
          <form onSubmit={handleSubmit}>
          <Box className="w-[100%] flex flex-row justify-between">
            <Box className="w-[48%]">
              <Typography sx={styles.root}>
                First name
              </Typography>
              <FormControl sx={{ width: '100%' }}>
                <OutlinedInput
                  placeholder="enter first name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  style={{ borderRadius: '8px' }}
                  inputProps={{ style: { fontSize: '12px' } }}
                />
              </FormControl>
            </Box>
            <Box className="w-[48%]">
              <Typography sx={styles.root}>
                Last name
              </Typography>
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
          </Box>
          <Box className="mt-[20px] w-[100%]">
            <Typography sx={styles.root}>
              Email
            </Typography>
            <FormControl sx={{ width: '100%' }}>
              <OutlinedInput
                placeholder="enter email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ borderRadius: '8px' }}
                inputProps={{ style: { fontSize: '12px' } }}
              />
            </FormControl>
          </Box>
          <Box className="mt-[20px]">
            <Typography sx={styles.root}>
              Your Message
            </Typography>
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
          </Box>
          <Box className="mt-[20px] flex flex-col ">
            <Typography sx={styles.root}>
              What are you more interested in:
            </Typography>
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
                        className="text-[9px] md:text-[14px] font-normal "
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
                sx={{
                  '&.MuiButtonBase-root': {
                    backgroundColor: '#8184EB',
                    color: 'white',
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
                type="submit"
              >
                Show Me How
              </Button>
            </div>
          </Box>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DemoForm;
