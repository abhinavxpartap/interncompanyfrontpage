import React, {useState} from 'react';
import {Img} from '../utils/Img';
import {styled} from '@mui/material/styles';
import {
    Stepper,
    Step,
    StepLabel,
    Button,
    Grid,
    IconButton,
    Typography,
    StepIconProps,
} from '@mui/material';
import {useRouter} from 'next/router';
import {Faq} from "../types";

const QontoStepIconRoot = styled('div')<{ ownerState: { active?: boolean } }>(
    ({ownerState}) => ({
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
            backgroundImage: `url(/images/logo/circledot.svg)`,
        }),
        '& .QontoStepIcon-completedIcon': {
            color: '#8184EB',
            zIndex: 1,
            fontSize: 18,
            backgroundColor: '',
        },
        '& .QontoStepIcon-circle': {
            width: 20,
            height: 20,
            borderRadius: '50%',
            display: 'flex',
            border: '1.5px solid #8184EB',
        },
        '& .QontoStepIcon-active': {
            width: 20,
            height: 20,
            borderRadius: '50%',
            backgroundColor: '#8184EB',
        },
    })
);

function QontoStepIcon(props: StepIconProps) {
    const {active, completed, className} = props;

    return (
        <QontoStepIconRoot ownerState={{active}} className={className}>
            {completed ? (
                <div className="QontoStepIcon-active"/>
            ) : (
                <div className="QontoStepIcon-circle"/>
            )}
        </QontoStepIconRoot>
    );
}


export const ServicesFaq: React.FC<Faq> = (props) => {
    const {title, subtitle, buttonName, buttonLink, tabData} = props;
    const router = useRouter();
    const [activeTab, setActiveTab] = useState(2);


    const handleTabToggle = (tabId: any) => {
        setActiveTab(tabId === activeTab ? null : tabId);
    };

    const content = (
        <>
            <div className="max-w-[1377.5px] mx-auto flex items-center justify-between pt-[30px] pb-[80px]">
                <div className="w-[100%] px-[40px]  flex flex-col lg:flex-row justify-between text-start  items-center">
                    <div className="w-[85vw] lg:w-[40vw] flex flex-col mb-[40px] lg:mb-0">
                        <h1 className="font-bold text-[32px] w-full md:w-[450px] leading-[37px] md:text-[40px] md:leading-[48px] text-[#151448]">
                            {title}
                        </h1>
                        <p className="text-[#333333] mt-[20px] pr-[20px] w-full md:w-[400px] text-[15px] md:text-[16px] leading-[30px] font-medium">
                            {subtitle}
                        </p>
                        <Button
                            onClick={() => router.push(buttonLink)}
                            className="ButtonTransition overflow-hidden text-[13px] w-[190px] md:text-[16px]  font-semibold "
                            sx={{
                                '&.MuiButtonBase-root': {
                                    backgroundColor: '#8184EB',
                                    color: 'white',
                                    marginTop: '20px',
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
                            {buttonName}
                        </Button>
                    </div>
                    <div className="flex flex-row w-[85vw] lg:w-[55vw]">
                        <div className="w-[100%]">

                            <Stepper activeStep={activeTab - 1} orientation="vertical">
                                {tabData.map((tab) => (
                                    <Step key={tab.id}>
                                        <StepLabel
                                            StepIconComponent={QontoStepIcon}
                                            style={{justifyContent: 'start'}}
                                        >
                                            <Grid
                                                key={tab.id}
                                                sx={{
                                                    paddingLeft: "20px",
                                                    marginLeft: "20px",
                                                    '@media (min-width: 1024px)': {
                                                        marginLeft: "40px",
                                                    },
                                                    borderRadius: "8px",
                                                    backgroundColor: "white",
                                                }}
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
                                                        sx={{
                                                            fontSize: "13px",
                                                            lineHeight: "18px",
                                                            '@media (min-width: 768px)': {
                                                                fontSize: "15px",
                                                                lineHeight: "26px",
                                                            },
                                                            fontWeight: "medium",
                                                            letterSpacing: "0.5px",
                                                            padding: "3px",
                                                            color: activeTab === tab.id ? "#8184EB" : "#000000",
                                                        }}

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
                                                        sx={{
                                                            fontSize: "12px",
                                                            lineHeight: "18px",
                                                            '@media (min-width: 768px)': {
                                                                fontSize: "14px",
                                                                lineHeight: "22px",
                                                            },
                                                            fontWeight: "normal",
                                                            letterSpacing: "0.5px",
                                                            paddingLeft: "3px",
                                                            paddingBottom: "20px",
                                                            color: "#757B8A",
                                                        }}
                                                    >
                                                        {tab.content}
                                                    </Typography>
                                                )}
                                            </Grid>
                                        </StepLabel>
                                    </Step>
                                ))}
                            </Stepper>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
    return (
        <>
            <div
                style={{background: '#F9FBFF'}}
                className="bg-cover bg-center bg-no-repeat relative  block"
            >
                {content}
            </div>
        </>
    );
};
