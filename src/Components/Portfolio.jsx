import React from 'react';
import Header from './Header/Header';
import Home from './Home/Home';
import Services from './Services/Services';
import About from './About/About';
import Resume from './Resume/Resume';
import Projects from './Projects/Projects';
import { Box } from '@mui/material';
import background from './../assets/images/background.jpg';
import { ColoredTheme } from '../config';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

const Portfolio = () => {
    const style = {
        background: ColoredTheme
            ? {}
            : {
                  backgroundImage: `url(${background})`,
                  backgroundAttachment: 'fixed',
                  backgroundSize: 'cover'
              }
    };

    return (
        <Box component="section" sx={style.background}>
            <Header />
            <Home id="Home" />
            <About id="About" />
            <Services id="Services" />
            <Resume id="Resume" />
            <Projects id="Projects" />
            <Contact id="Contact" />
            <Footer id="Footer" />
        </Box>
    );
};

export default Portfolio;
