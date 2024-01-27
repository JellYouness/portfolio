import React from 'react';
import { Container, Typography, Grid, Paper, LinearProgress, Button, Stack, Box } from '@mui/material';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { config, ColoredTheme } from '../../config';
import istech from '../../assets/images/istech.png';
import pcc from '../../assets/images/pcc.png';

const Resume = () => {
    const Experience = [
        {
            icon: istech,
            height: '35%',
            margin: true,
            date: 'Avril 2023 - Juillet 2023',
            title: 'Web Developer @IS-TECH',
            subtitle: 'Casablanca, MA',
            body: [
                "Conception et développement d'applications web interactives",
                'Utilisation de ReactJS et Laravel comme technologies principales ',
                'Création de composants réutilisables',
                'Intégration avec des API externes'
            ]
        },
        {
            icon: pcc,
            height: '100%',
            margin: false,
            date: 'Juillet 2022 - Septembre 2022',
            title: 'Web Developer @Palmeraie Country Club',
            subtitle: 'Casablanca - Bouskoura, MA',
            body: [
                "Conception et mise en œuvre réussies d'une application web dynamique dédiée à la gestion des membres et des abonnements.",
                "Utilisation d'un ensemble technologique comprenant HTML, CSS, JavaScript, PHP et MySQL pour créer une expérience utilisateur fluide.",
                "Contribution à la direction créative et à la conception centrée sur l'utilisateur de l'application."
            ]
        }
    ];
    return (
        <Box
            component="section"
            sx={{
                // backgroundColor: 'rgba(248,249,250)',
                color: config.TextColor,
                overflow: 'hidden'
            }}
        >
            <Container>
                <Stack justifyContent="start" alignItems="center" sx={{ marginBottom: '2rem' }}>
                    <Typography variant="subtitle1" sx={{ backgroundColor: config.PrimaryColor, paddingX: '10px', fontWeight: '500' }}>
                        What i have done so far
                    </Typography>
                    <Typography variant="h4" sx={{ fontWeight: '500' }}>
                        Work Experience
                    </Typography>
                </Stack>
                <VerticalTimeline lineColor={config.PrimaryColor}>
                    {Experience.map((experience, index) => (
                        <VerticalTimelineElement
                            key={index}
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: config.White, color: '#000', border: '1px solid black   ' }}
                            contentArrowStyle={{ borderRight: '1px solid  black' }}
                            date={experience.date}
                            iconStyle={{ background: config.White, color: '#fff' }}
                            icon={
                                <img
                                    style={{
                                        height: experience.height,
                                        display: 'block',
                                        margin: experience.margin ? '1rem 0 0 3px' : '0'
                                    }}
                                    src={experience.icon}
                                />
                            }
                        >
                            <Typography variant="h6">{experience.title}</Typography>
                            <Typography variant="subtitle1">{experience.subtitle}</Typography>
                            <Typography variant="body1">
                                {experience.body.map((item, index) => (
                                    <ul key={index}>
                                        <li>{item}</li>
                                    </ul>
                                ))}
                            </Typography>
                        </VerticalTimelineElement>
                    ))}
                </VerticalTimeline>
            </Container>
        </Box>
    );
};

export default Resume;
