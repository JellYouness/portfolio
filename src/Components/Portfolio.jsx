import React from 'react';
import Header from './Header/Header';
import Home from './Home/Home';
import Services from './Services/Services';
import About from './About/About';
import Resume from './Resume/Experiences';
import Projects from './Projects/Projects';
import { Box } from '@mui/material';
import background from './../assets/images/background.jpg';
import { ColoredTheme, config } from '../config';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles';

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
                <Home />
                <About />
                <Services />
                <Resume />
                <Projects />
                <Contact />
                <Footer />
            </Box>
        </ThemeProvider>
    );
};

export default Portfolio;
