import React from 'react';
import { Container, Typography, Grid, Paper, LinearProgress, Button, Stack, Chip, Box } from '@mui/material';
import { config, ColoredTheme } from '../../config';

import projects from './projectsList';
import SlideLeft from '../Animations/SlideLeft';

const Projects = () => {
    return (
        <Box
            component="section"
            id="Projects"
            sx={{
                backgroundColor: 'rgba(248,249,250)',
                color: config.TextColor,
                minHeight: '93.5vh',
                overflow: 'hidden',
                paddingY: '6.5vh'
            }}
        >
            <Container>
                <Stack justifyContent="start" alignItems="center" sx={{ marginBottom: '2rem' }}>
                    <Typography variant="subtitle1" sx={{ backgroundColor: config.PrimaryColor, paddingX: '10px', fontWeight: '500' }}>
                        My Work
                    </Typography>
                    <Typography variant="h4" sx={{ fontWeight: '500' }}>
                        Projects
                    </Typography>
                </Stack>
                <SlideLeft>
                    <Grid
                        container
                        justifyContent="center"
                        spacing={{
                            xs: 6,
                            md: 4
                        }}
                    >
                        {projects.map((project, index) => (
                            <Grid item key={index} xs={12} md={6} lg={4}>
                                <Paper
                                    sx={{
                                        margin: '0 auto',
                                        padding: '1rem 1rem',
                                        width: {
                                            xs: 300,
                                            md: 330
                                        },
                                        backgroundColor: '#F1F1F1',
                                        borderRadius: '10px'
                                    }}
                                >
                                    <img src={project.image} style={{ border: '1px solid black', borderRadius: '10px' }} width="100%" />
                                    <Typography variant="h5" sx={{ fontWeight: 'bold' }} mt={1}>
                                        {project.title}
                                    </Typography>
                                    {/* <Typography variant="subtitle1">subtitle</Typography> */}
                                    <Typography variant="body1">{project.body}</Typography>
                                    <Stack direction="row" justifyContent="space-between" flexWrap="wrap" mt={3}>
                                        {project.chips.map((chip, index) => {
                                            <Chip
                                                key={index}
                                                label={chip.label}
                                                sx={{ bgcolor: chip.bg, color: chip.color }}
                                                variant="outlined"
                                            />;
                                        })}
                                    </Stack>
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                </SlideLeft>
            </Container>
        </Box>
    );
};

export default Projects;
