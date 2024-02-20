import React from 'react';
import Header from './Header/Header';

import { Box } from '@mui/material';
import background from './../assets/images/background.jpg';
import { ColoredTheme, config } from '../config';
import Footer from './Footer/Footer';
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles';
import { Outlet } from 'react-router-dom';

const Portfolio = () => {
    let theme = createTheme();
    theme = responsiveFontSizes(theme);

    const style = {
        background: ColoredTheme
            ? {}
            : {
                  backgroundImage: `url(${background})`,
                  backgroundAttachment: 'fixed',
                  backgroundSize: 'cover'
              },
        '*::selection': {
            backgroundColor: config.PrimaryColor
        }
    };

    return (
        <ThemeProvider theme={theme}>
            <Box component="section" sx={style}>
                <Header />
                <Outlet />
                <Footer />
            </Box>
        </ThemeProvider>
    );
};

export default Portfolio;
