import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import { config, ColoredTheme } from '../../config';

const About = () => {
    return (
        <Box
            component="section"
            sx={{
                // backgroundColor: 'rgba(248,249,250)',
                color: config.TextColor,
                height: '93.5vh',
                overflow: 'hidden',
                paddingTop: '10.5vh'
            }}
        >
            <Stack justifyContent="start" alignItems="center">
                <Typography variant="subtitle1" sx={{ backgroundColor: config.PrimaryColor, paddingX: '10px', fontWeight: '500' }}>
                    About Me
                </Typography>
                <Typography variant="h4" sx={{ fontWeight: '500' }}>
                    Know Me More
                </Typography>
            </Stack>
            <Stack direction="row" justifyContent="space-evenly" alignItems="center" sx={{ marginTop: '5%' }}>
                <Stack spacing={3} sx={{ width: '53%' }}>
                    <Typography variant="h4" sx={{ fontWeight: '400' }}>
                        Hi, I'm{' '}
                        <span style={{ fontWeight: '700', borderBottom: '4px solid #f5df4e', paddingBottom: '5px' }}>JELLOULI Youness</span>
                    </Typography>
                    <Typography variant="h5" sx={{ fontWeight: '400' }}>
                        I'm an avid developer deeply passionate about web technology. I enjoy crafting simple, clean and slick websites that
                        provide real value to the end user. Delivering work within time and budget which meets client’s requirements is our
                        moto. With every keystroke, I'm dedicated to transforming concepts into dynamic web experiences, contributing to a
                        digital realm that's both intuitive and engaging.
                    </Typography>
                </Stack>
                <Stack alignItems="center">
                    <Box sx={{}}>
                        <Typography sx={{ fontSize: '9rem', fontWeight: '600' }}>2</Typography>
                    </Box>
                    <Typography variant="h4">
                        Years of <span style={{ fontWeight: '600' }}>Experience</span>
                    </Typography>
                </Stack>
            </Stack>
        </Box>
    );
};

export default About;
