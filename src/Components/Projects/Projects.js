import React from 'react';
import { Container, Typography, Grid, Paper, LinearProgress, Button, Stack, Chip, Box } from '@mui/material';
import { config, ColoredTheme } from '../../config';
import image from '../../assets/images/image.png';

const Projects = () => {
    return (
        <Box
            component="section"
            sx={{
                // backgroundColor: 'rgba(248,249,250)',
                color: config.TextColor,
                height: '93.5vh',
                overflow: 'hidden',
                paddingTop: '6.5vh'
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
                <Grid container spacing={2}>
                    <Grid item xs={6} md={4}>
                        <Paper
                            sx={{
                                margin: '0 auto',
                                padding: '1rem 1rem',
                                width: 330,
                                backgroundColor: '#F1F1F1',
                                borderRadius: '10px'
                            }}
                        >
                            <img src={image} style={{ border: '1px solid black', borderRadius: '10px' }} width="100%" />
                            <Typography variant="h5" sx={{ fontWeight: 'bold' }} mt={1}>
                                title
                            </Typography>
                            {/* <Typography variant="subtitle1">subtitle</Typography> */}
                            <Typography variant="body1">
                                Developed a financial management web app for SOSIPO Association, automating processes, enhancing
                                transparency, and boosting efficiency. Achieved financial stability and member satisfaction.
                            </Typography>
                            <Stack direction="row" justifyContent="space-between" flexWrap="wrap" mt={3}>
                                <Chip label="React" color="primary" variant="outlined" />
                            </Stack>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Projects;
