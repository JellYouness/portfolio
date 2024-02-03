import React from 'react';
import { Container, Typography, Grid, Paper, LinearProgress, Button, Stack, Box } from '@mui/material';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { config, ColoredTheme } from '../../config';
import Experience from './experienceList';

const Resume = () => {
    return (
        <Box
            component="section"
            id="Resume"
            sx={{
                // backgroundColor: 'rgba(248,249,250)',
                color: config.TextColor,
                overflow: 'hidden',
                paddingY: '6.5vh'
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
