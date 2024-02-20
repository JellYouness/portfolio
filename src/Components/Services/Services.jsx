import React from 'react';
import { Container, Typography, Box, Stack, Tooltip } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { config, ColoredTheme } from '../../config';
import services from './servicesList';
import SlideUp from '../Animations/SlideUp';
import { useSelector } from 'react-redux';
import eng from '../../Data/eng';
import fr from '../../Data/fr';

const ServicesSection = () => {
    const { value } = useSelector((state) => state.lang);
    const data = value === 'en' ? eng : fr;
    const theme = createTheme({
        components: {
            MuiTooltip: {
                styleOverrides: {
                    tooltip: {
                        fontSize: '0.8rem',
                        color: config.White,
                        backgroundColor: '#151030',
                        marginBottom: '0'
                    }
                }
            }
        }
    });

    return (
        <ThemeProvider theme={theme}>
            <Box
                component="section"
                id="Services"
                sx={{
                    backgroundColor: 'rgba(248,249,250)',
                    color: config.TextColor,
                    // minHeight: '88vh',
                    overflow: 'hidden',
                    padding: '6vh 0 15vh 0'
                }}
            >
                <Container>
                    <Stack justifyContent="start" alignItems="center">
                        <Typography variant="subtitle1" sx={{ backgroundColor: config.PrimaryColor, paddingX: '10px', fontWeight: '500' }}>
                            {data.ServicesTitle}
                        </Typography>
                        <Typography variant="h4" sx={{ fontWeight: '500' }}>
                            {data.ServicesSubTitle}
                        </Typography>
                    </Stack>
                    <SlideUp>
                        <Stack
                            useFlexGap
                            flexWrap="wrap"
                            direction="row"
                            justifyContent="center"
                            alignItems="center"
                            spacing={{
                                xs: 4,
                                md: 10
                            }}
                            mt="8rem"
                        >
                            {services.map((service, index) => (
                                <Tooltip key={index} title={service.title} placement="top">
                                    <Box
                                        sx={{
                                            padding: '0.45rem',
                                            border: '3px solid transparent',
                                            backgroundColor: 'rgba(230, 230, 230, 0.7)',
                                            transition: '0.6s',
                                            borderRadius: '20%',
                                            '&:hover': {
                                                border: '3px solid ' + config.PrimaryColor,
                                                borderRadius: '50%'
                                            }
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                '&:hover': {
                                                    transform: 'scale(0.85)',
                                                    transition: '0.6s'
                                                }
                                            }}
                                        >
                                            <img
                                                style={{
                                                    width: '4rem',
                                                    height: '4rem',
                                                    margin: '0 auto'
                                                }}
                                                src={service.icon}
                                            />
                                        </Box>
                                    </Box>
                                </Tooltip>
                            ))}
                        </Stack>
                    </SlideUp>
                </Container>
            </Box>
        </ThemeProvider>
    );
};

export default ServicesSection;
