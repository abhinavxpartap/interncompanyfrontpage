import React, { useState } from 'react';
import { Img } from '../utils/Img';
import { styled } from '@mui/material/styles';
import {
  Stepper,

  Step,
  StepLabel,
  Button,
  Grid,
  IconButton,
  Typography,
  StepIconProps,
  StepConnector,
} from '@mui/material';
import { useRouter } from 'next/router';

const QontoStepIconRoot = styled('div')<{ ownerState: { active?: boolean } }>(
  ({ theme, ownerState }) => ({
    display: 'flex',
    width: 20,
    height: 20,
    borderRadius: '50%',
    alignItems: 'start',
    border: 'none',
    backgroundColor: 'transparent',
    ...(ownerState.active && {
      width: 24,
      height: 24,
      border: 'none',
      zIndex: 2,
      overflow: 'hidden',
      alignItems: 'start',
      backgroundImage: `url(/badge.svg)`,
    }),
    '& .QontoStepIcon-completedIcon': {
      color: '#784af4',
      zIndex: 1,
      fontSize: 18,
      backgroundColor: '',
    },
    '& .QontoStepIcon-circle': {
      width: 20,
      height: 20,
      borderRadius: '50%',
      display: 'flex',
      border: '1.5px solid rgba(196, 196, 196, 1)',
    },
    '& .QontoStepIcon-active': {
      width: 20,
      height: 20,
      borderRadius: '50%',
      backgroundColor: 'rgba(23, 125, 240, 1)',
    },
  })
);

function QontoStepIcon(props: StepIconProps) {
  const { active, completed, className } = props;

  return (
    <QontoStepIconRoot ownerState={{ active }} className={className}>
      {completed ? (
        <div className="QontoStepIcon-active" />
      ) : (
        <div className="QontoStepIcon-circle" />
      )}
    </QontoStepIconRoot>
  );
}

const StyledStepConnector = styled(StepConnector)(({ theme }) => ({
  marginLeft: '15px', // Adjust the position of the line
  '& .MuiStepConnector-line': {
    borderLeftWidth: '2px', // Set the width of the line
    borderLeftStyle: 'solid',
    borderColor: theme.palette.grey[500], // Set the color of the line
  },
}));

export const ServicesFaq: React.FC<any> = (props) => {
  const { title, subtitle, button, tabsData } = props;
  const router = useRouter();
  const [activeTab, setActiveTab] = useState(2);

  const handleTabToggle = (tabId: any) => {
    setActiveTab(tabId === activeTab ? null : tabId);
  };

  const content = (
    <>
      <div className="max-w-[1377.5px] mx-auto flex items-center justify-between pt-[80px]  pb-[80px]">
        <div className="w-[100%] px-[40px]  flex flex-col lg:flex-row justify-between text-start  items-center">
          <div className="w-[85vw] lg:w-[40vw] flex flex-col mb-[40px] lg:mb-0">
            <h1 className="font-bold text-[32px] w-full md:w-[400px] leading-[37px] md:text-[40px] md:leading-[48px] text-[#151448]">
              {title}
            </h1>
            <p className="text-[#333333] mt-[20px] pr-[20px] w-full md:w-[400px] text-[15px] md:text-[16px] font-medium">
              {subtitle}
            </p>
            <Button
              onClick={() => router.push(button.href)}
              className="ButtonTransition overflow-hidden text-[13px] w-[230px] md:w-[290px] md:text-[16px] mt-[20px] font-semibold "
              sx={{
                '&.MuiButtonBase-root': {
                  backgroundColor: '#177DF0',
                  color: 'white',
                  textTransform: 'capitalize',
                  padding: '8px 24px 8px 24px',
                  border: '1px solid #5CA9FF',
                  borderRadius: '30px',
                  '&:hover': {
                    border: '1px solid #5CA9FF',
                    backgroundColor: 'transparent',
                    color: '#177DF0',
                  },
                },
              }}
            >
              {button.name}
            </Button>
          </div>
          <div className="flex flex-row w-[85vw] lg:w-[55vw]">
            <Stepper activeStep={activeTab - 1} orientation="vertical">
              {tabsData.map((tab: any, index: number) => (
                <Step key={tab.id}>
                  <StepLabel
                    StepIconComponent={QontoStepIcon}
                    style={{ justifyContent: 'start' }}
                  >
                    <Grid
                      key={tab.id}
                      className="px-[20px] ml-[20px] lg:ml-[40px] rounded-[8px] bg-[white]"
                      style={{
                        boxShadow:
                          'rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px',
                      }}
                    >
                      <Grid container className="w-[100%]" alignItems="center">
                        <Typography
                          variant="h4"
                          item
                          xs
                          onClick={() => handleTabToggle(tab.id)}
                          component={Grid}
                          className={`text-[13px]  leading-[18px] md:text-[15px] font-medium md:leading-[26px] tracking-[0.5px] p-3 ${
                            activeTab === tab.id
                              ? 'text-[#177DF0]'
                              : 'text-[#000000]'
                          }`}
                        >
                          <span>{tab.id}.</span> {tab.title}
                        </Typography>
                        <Grid className="p-1 md:p-3">
                          <IconButton onClick={() => handleTabToggle(tab.id)}>
                            {activeTab !== tab.id ? (
                              <Img
                                src="/downIcon.svg"
                                className="w-[70%] md:w-[100%]"
                                alt="icon"
                              />
                            ) : (
                              <Img
                                src="/activedropdown.svg"
                                className="w-[70%] md:w-[100%]"
                                alt="icon"
                              />
                            )}
                          </IconButton>
                        </Grid>
                      </Grid>
                      {activeTab === tab.id && (
                        <Typography
                          variant="subtitle1"
                          className="text-[12px] leading-[18px] md:text-[14px] font-normal md:leading-[22px] tracking-[0.5px] pl-3 pb-[20px] text-[#757B8A]"
                        >
                          {tab.content}
                        </Typography>
                      )}
                    </Grid>
                  </StepLabel>
                </Step>
              ))}
            </Stepper>
            <div className="gap-[15px] flex flex-col"></div>
          </div>
        </div>
      </div>
    </>
  );
  return (
    <>
      <div
        style={{ background: '#F9FBFF' }}
        className="bg-cover bg-center bg-no-repeat relative  block"
      >
        {content}
      </div>
    </>
  );
};
