import { AppBar, Box, Stack } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Navigation from './Navigation';
import { config, ColoredTheme } from '../../config';
import image from '../../assets/images/Logo.png';

const Header = () => {
    const [navColor, setNavColor] = useState('unset');
    const ChangeNavColor = () => {
        window.scrollY > 50 ? setNavColor('#000') : setNavColor('unset');
    };

    useEffect(() => {
        ChangeNavColor();
        window.addEventListener('scroll', ChangeNavColor);
    });

    return (
        <AppBar
            sx={{
                color: config.TextColor,
                boxShadow: '0px -70px 90px black',
                backgroundColor: ColoredTheme ? config.White : navColor
            }}
        >
            <Stack
                justifyContent="space-around"
                alignItems="center"
                direction="row"
                sx={{ height: config.HeaderHeight, paddingX: '100px' }}
            >
                <Box>
                    <img src={image} style={{ height: '50px' }} />
                </Box>
                <Navigation />
            </Stack>
        </AppBar>
    );
};

export default Header;
