import React from 'react';
import { Container, Typography, Grid, Paper, LinearProgress, Button, Stack, Chip, Box } from '@mui/material';
import { config, ColoredTheme } from '../../config';
import { GitHub, Language } from '@mui/icons-material';
import projects from './projectsList';
import SlideLeft from '../Animations/SlideLeft';
import { useSelector } from 'react-redux';
import eng from '../../Data/eng';
import fr from '../../Data/fr';

const Projects = () => {
    const { value } = useSelector((state) => state.lang);
    const data = value === 'en' ? eng : fr;
    return (
        <Box
            component="section"
            id="Projects"
            sx={{
                backgroundColor: 'rgba(248,249,250)',
                color: config.TextColor,
                // minHeight: '93.5vh',
                overflow: 'hidden',
                padding: '6.5vh 0 15vh 0'
            }}
        >
            <Container>
                <Stack justifyContent="start" alignItems="center" sx={{ marginBottom: '2rem' }}>
                    <Typography variant="subtitle1" sx={{ backgroundColor: config.PrimaryColor, paddingX: '10px', fontWeight: '500' }}>
                        {data.ProjectsTitle}
                    </Typography>
                    <Typography variant="h4" sx={{ fontWeight: '500' }}>
                        {data.ProjectsSubTitle}
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
                                        height: 500,
                                        backgroundColor: '#F1F1F1',
                                        borderRadius: '10px'
                                    }}
                                >
                                    <Stack direction="column" height="100%" justifyContent="space-around" spacing={1}>
                                        <img
                                            loading="lazy"
                                            src={project.image}
                                            style={{ border: '1px solid black', borderRadius: '10px' }}
                                            width="100%"
                                            height="198"
                                        />
                                        <Typography variant="h5" sx={{ fontWeight: 'bold' }} mt={1}>
                                            {project.title}
                                        </Typography>
                                        {/* <Typography variant="subtitle1">subtitle</Typography> */}
                                        <Typography variant="body1" sx={{ height: 100 }}>
                                            {project.body}
                                        </Typography>
                                        <Stack direction="row" spacing={2.5} alignItems="center" flexWrap="wrap" mt={3}>
                                            {project.chips.map((chip, index) => (
                                                <Box key={index} component="img" src={chip.img} width="30px" />
                                            ))}
                                        </Stack>

                                        <Grid container width="100%" justifyContent="space-between" sx={{ marginTop: 2 }}>
                                            <Grid item xs={12} md={5.9} alignItems="stretch">
                                                <Button variant="outlined" fullWidth target="_blank" href={project.github}>
                                                    <GitHub sx={{ marginRight: 0.5 }} />
                                                    Github
                                                </Button>
                                            </Grid>
                                            <Grid item xs={12} md={5.9} sx={{ marginLeft: 0 }}>
                                                <Button variant="outlined" fullWidth target="_blank" href={project.preview}>
                                                    <Language sx={{ marginRight: 0.5 }} />
                                                    Preview
                                                </Button>
                                            </Grid>
                                        </Grid>
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
