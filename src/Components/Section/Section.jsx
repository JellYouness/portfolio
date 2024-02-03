import React from 'react';
import Slide from '../Animations/SlideUp';

const Section = ({ component }) => {
    console.log(component);
    return <Slide>{component}</Slide>;
};

export default Section;
