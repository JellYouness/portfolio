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
            pt={{ xs: '15vh', sm: '20vh', md: '20vh' }}
            sx={{
                backgroundColor: ColoredTheme ? config.PrimaryColor : 'unset',
                color: config.TextColor,
                minHeight: { xs: '78vh', sm: '80vh' },
                overflow: 'hidden'
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
                    <Typography variant="h5">Hi, I am</Typography>
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
                            paddingX: { xs: '20px', md: '30px', lg: '40px' },
                            paddingY: '10px',
                            display: 'inline-block',
                            marginTop: '30px',
                            textDecoration: 'none',
                            color: config.White,
                            backgroundColor: config.PrimaryColor
                        }}
                    >
                        Contact Me
                    </Typography>
                </Box>
                <Box
                    component="img"
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
    );
};

export default Home;
