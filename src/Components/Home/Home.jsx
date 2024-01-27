import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import { config, ColoredTheme } from '../../config';
import image from '../../assets/images/portfolio.png';
import { Link } from 'react-router-dom';
import { ArrowDownward } from '@mui/icons-material';
import { TypeAnimation } from 'react-type-animation';

const Home = () => {
    return (
        <Stack
            justifyContent="space-between"
            sx={{
                backgroundColor: ColoredTheme ? config.PrimaryColor : 'unset',
                color: config.TextColor,
                height: '100vh',
                overflow: 'hidden'
            }}
        >
            <Box sx={{ marginBottom: '50px' }} />
            <Stack direction="row" justifyContent="space-around" alignItems="center" flexWrap="wrap">
                <Box>
                    <Typography variant="h5">Hi, My Name is</Typography>
                    <Typography sx={{ fontWeight: '500' }} variant="h2">
                        JELLOULI Youness
                    </Typography>
                    <Typography variant="h5" sx={{ width: '510px' }}>
                        and I'm a skilled web developer on a mission to turn innovative ideas into engaging online realities.
                    </Typography>
                    {/* <TypeAnimation
                        sequence={["I'm a Developer", 1000, "I'm a Writer", 1000, "I'm a Designer", 1000]}
                        speed={50}
                        repeat={Infinity}
                        style={{ fontSize: '2em' }}
                    /> */}
                    <Typography
                        variant="h5"
                        component={Link}
                        to="#CONTACT"
                        sx={{
                            border: '1px solid black',
                            paddingX: '40px',
                            paddingY: '10px',
                            display: 'inline-block',
                            marginTop: '50px',
                            textDecoration: 'none',
                            color: config.White,
                            backgroundColor: config.PrimaryColor
                        }}
                    >
                        Contact Me
                    </Typography>
                </Box>
                <Box sx={{ boxShadow: '0 1rem 3rem rgba(0,0,0,.35)', borderRadius: '100%' }}>
                    <img style={{ border: '10px solid white', borderRadius: '100%' }} src={image} />
                </Box>
            </Stack>
            <ArrowDownward sx={{ marginX: 'auto', marginBottom: '10px' }} />
        </Stack>
    );
};

export default Home;
