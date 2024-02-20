import React from 'react';
import Hero from './Hero/Hero';
import Services from './Services/Services';
import About from './About/About';
import Resume from './Resume/Experiences';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';

const Home = () => {
    return (
        <>
            <Hero />
            <About />
            <Services />
            <Resume />
            <Projects />
            <Contact />
        </>
    );
};

export default Home;
