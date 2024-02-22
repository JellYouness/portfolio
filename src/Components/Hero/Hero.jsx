import { Box, Button, Stack, Typography } from '@mui/material';
import React from 'react';
import { config, ColoredTheme } from '../../config';
import image from '../../assets/images/portfolio.png';
import cv from '../../assets/cv/Youness Jellouli.pdf';
import { ArrowDownward, Launch } from '@mui/icons-material';
import { TypeAnimation } from 'react-type-animation';
import ZoomIn from '../Animations/ZoomIn';
import { useSelector } from 'react-redux';
import eng from '../../Data/eng';
import fr from '../../Data/fr';

const Hero = () => {
    const { value } = useSelector((state) => state.lang);
    const data = value === 'en' ? eng : fr;
    return (
        <Box component="section" id="Hero">
            <Stack
                justifyContent="space-between"
                pt="20lvh" //{{ xs: '15vh', sm: '20vh', md: '20vh' }}
                sx={{
                    backgroundColor: ColoredTheme ? config.PrimaryColor : 'unset',
                    color: config.TextColor,
                    minHeight: '80lvh', // minHeight: { xs: '78vh', sm: '80vh' },
                    overflow: 'hidden',
                    '*::selection': {
                        backgroundColor: config.White
                    }
                }}
            >
                <Stack
                    direction={{
                        xs: 'column-reverse',
                        md: 'row'
                    }}
                    spacing={{ xs: 4 }}
                    justifyContent="space-around"
                    alignItems="center"
                    flexWrap="wrap"
                >
                    <Box>
                        <Typography variant="h5">{data.Hi}</Typography>
                        <Typography mt={1} sx={{ fontWeight: '500' }} variant="h2">
                            JELLOULI Youness
                        </Typography>
                        <Typography
                            variant="h5"
                            mt={1}
                            sx={{
                                width: { xs: '300px', md: '400px', lg: '500px' },
                                paddingLeft: '10px',
                                borderLeft: '1px solid black'
                            }}
                        >
                            {data.QuickDesc}
                        </Typography>
                        {/* <TypeAnimation
                        sequence={["I'm a Developer", 1000, "I'm a Writer", 1000, "I'm a Designer", 1000]}
                        speed={50}
                        repeat={Infinity}
                        style={{ fontSize: '2em' }}
                    /> */}
                        <Box>
                            <Typography
                                variant="h5"
                                component="a"
                                href="#Contact"
                                sx={{
                                    border: '1px solid black',
                                    paddingX: { xs: '20px', md: '30px', lg: '40px' },
                                    paddingY: '10px',
                                    display: 'inline-block',
                                    marginTop: '30px',
                                    textDecoration: 'none',
                                    color: config.White,
                                    backgroundColor: config.ButtonColor
                                }}
                            >
                                {data.ContactMe}
                            </Typography>
                            <Typography
                                ml={3}
                                variant="h5"
                                component="a"
                                href={cv}
                                target="_blank"
                                sx={{
                                    border: '1px solid black',
                                    paddingX: { xs: '20px', md: '30px', lg: '40px' },
                                    paddingY: '10px',
                                    display: 'inline-block',
                                    marginTop: '30px',
                                    textDecoration: 'none',
                                    color: config.ButtonColor,
                                    backgroundColor: 'none'
                                }}
                            >
                                {data.CV}
                                <Launch sx={{ paddingLeft: '5px' }} />
                            </Typography>
                        </Box>
                    </Box>
                    <Box
                        component="img"
                        loading="lazy"
                        sx={{
                            boxShadow: '0 1rem 3rem rgba(0,0,0,.35)',
                            border: '5px solid white',
                            borderRadius: '100%',
                            width: {
                                xs: '250px',
                                sm: '200px',
                                md: '300px',
                                lg: '500px'
                            },
                            height: 'auto'
                        }}
                        src={image}
                    />
                </Stack>
                <ArrowDownward sx={{ marginX: 'auto', marginBottom: '10px' }} />
            </Stack>
        </Box>
    );
};

export default Hero;
