import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import { config, ColoredTheme } from '../../config';
import SlideLeft from '../Animations/SlideLeft';
import { useSelector } from 'react-redux';
import eng from '../../Data/eng';
import fr from '../../Data/fr';

const About = () => {
    const { value } = useSelector((state) => state.lang);
    const data = value === 'en' ? eng : fr;
    return (
        <Box
            component="section"
            id="About"
            sx={{
                // backgroundColor: 'rgba(248,249,250)',
                color: config.TextColor,
                // minHeight: '88vh',
                overflow: 'hidden',
                padding: '9vh 0 15vh'
            }}
        >
            <Stack justifyContent="start" alignItems="center">
                <Typography variant="subtitle1" sx={{ backgroundColor: config.PrimaryColor, paddingX: '10px', fontWeight: '500' }}>
                    {data.AboutTitle}
                </Typography>
                <Typography variant="h4" sx={{ fontWeight: '500' }}>
                    {data.AboutSubTitle}
                </Typography>
            </Stack>
            <SlideLeft>
                <Stack
                    direction={{
                        xs: 'column',
                        md: 'row'
                    }}
                    spacing={{ xs: 4 }}
                    justifyContent="space-evenly"
                    alignItems="center"
                    flexWrap="wrap"
                    sx={{ marginTop: { xs: '10%', md: '6%' } }}
                >
                    <Stack spacing={3} alignItems="center" sx={{ width: { xs: '80%', md: '53%' } }}>
                        <Typography variant="h4" sx={{ fontWeight: '400' }}>
                            {data.Hi}{' '}
                            <span style={{ fontWeight: '700', borderBottom: '4px solid #f5df4e', paddingBottom: '5px' }}>
                                JELLOULI Youness
                            </span>
                        </Typography>
                        <Typography variant="h5" sx={{ fontWeight: '400', textAlign: 'center' }}>
                            {data.AboutBody}
                        </Typography>
                    </Stack>
                    <Stack alignItems="center">
                        <Box sx={{}}>
                            <Typography
                                sx={{
                                    fontSize: { xs: '7rem', md: '9rem' },
                                    fontWeight: '600'
                                }}
                            >
                                2
                            </Typography>
                        </Box>
                        <Typography variant="h4">
                            {data.AboutYears}
                            <span style={{ fontWeight: '600' }}>Experience</span>
                        </Typography>
                    </Stack>
                </Stack>
            </SlideLeft>
        </Box>
    );
};

export default About;
