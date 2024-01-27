import React from 'react';
import { Container, Typography, Grid, Paper, Box, Stack, Tooltip } from '@mui/material';
import { ThemeProvider, createMuiTheme, createTheme } from '@mui/material/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import bootstrap from '../../assets/Techs/bootstrap.svg';
import css from '../../assets/Techs/css.svg';
import figma from '../../assets/Techs/figma.svg';
import github from '../../assets/Techs/github.svg';
import html from '../../assets/Techs/html.svg';
import js from '../../assets/Techs/js.svg';
import laravel from '../../assets/Techs/laravel.svg';
import mysql from '../../assets/Techs/mysql.svg';
import php from '../../assets/Techs/php.svg';
import tailwind from '../../assets/Techs/tailwind.svg';
import vscode from '../../assets/Techs/vscode.svg';
import react from '../../assets/Techs/react.svg';
import mui from '../../assets/Techs/mui.svg';
import { config, ColoredTheme } from '../../config';

const ServicesSection = () => {
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

    const services = [
        {
            icon: react,
            title: 'React Js'
        },
        {
            icon: mui,
            title: 'Material UI'
        },
        {
            icon: tailwind,
            title: `TailWind Css`
        },
        {
            icon: laravel,
            title: 'Laravel'
        },
        {
            icon: php,
            title: 'PHP'
        },
        {
            icon: mysql,
            title: 'MySQL'
        },
        {
            icon: js,
            title: 'Javascript'
        },
        {
            icon: html,
            title: 'HTML 5'
        },
        {
            icon: css,
            title: 'CSS 3'
        },
        {
            icon: bootstrap,
            title: 'Bootstrap'
        },
        {
            icon: github,
            title: 'Github'
        },
        {
            icon: figma,
            title: 'Figma'
        },
        {
            icon: vscode,
            title: 'VS Code'
        }
    ];

    return (
        <ThemeProvider theme={theme}>
            <Box
                component="section"
                sx={{
                    // backgroundColor: 'rgba(248,249,250)',
                    color: config.TextColor,
                    height: '93.5vh',
                    overflow: 'hidden'
                }}
            >
                <Container>
                    <Stack justifyContent="start" alignItems="center">
                        <Typography variant="subtitle1" sx={{ backgroundColor: config.PrimaryColor, paddingX: '10px', fontWeight: '500' }}>
                            What i do?
                        </Typography>
                        <Typography variant="h4" sx={{ fontWeight: '500' }}>
                            My Technologies Stack
                        </Typography>
                    </Stack>
                    <Stack useFlexGap flexWrap="wrap" direction="row" justifyContent="center" alignItems="center" spacing={10} mt="8rem">
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
                </Container>
            </Box>
        </ThemeProvider>
    );
};

export default ServicesSection;
