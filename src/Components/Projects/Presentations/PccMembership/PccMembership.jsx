import { Box, Container, List, ListItem, ListItemText, Paper, Typography, makeStyles } from '@mui/material';
import React from 'react';
import { config } from '../../../../config';
import gdm from '../../../../assets/images/gdm.png';
import { useSelector } from 'react-redux';
import { EN, FR } from './Data';

const PccMembership = () => {
    const { value } = useSelector((state) => state.lang);
    const translations = value === 'en' ? EN : FR;
    return (
        <Box sx={{ paddingTop: '13vh', bgcolor: 'rgba(248,249,250)' }}>
            <Container maxWidth="xl">
                <Paper elevation={3} style={{ padding: 20, marginBottom: 20 }}>
                    <Typography sx={{ fontWeight: '500', borderBottom: '8px solid #f5df4e', paddingBottom: '5px' }} variant="h3">
                        {translations.title}
                    </Typography>
                    <Box
                        component="img"
                        loading="lazy"
                        src={gdm}
                        mt={2}
                        width={{ xs: '100%', md: '80%' }}
                        sx={{ borderRadius: '15px', border: '1px solid black', marginBottom: 5, display: 'block', marginX: 'auto' }}
                    ></Box>

                    <Typography variant="h4" gutterBottom>
                        <span style={{ fontWeight: '500', borderBottom: '4px solid #f5df4e', paddingBottom: '5px', marginBottom: 20 }}>
                            {translations.introductionHeading}
                        </span>
                    </Typography>
                    <Typography sx={{ fontWeight: '400', fontSize: '18px' }}>{translations.introductionText}</Typography>
                    <List sx={{ marginBottom: 0 }}>
                        <ListItem>
                            <Typography>- Github Repository: </Typography>
                            <Typography
                                component="a"
                                target="_blank"
                                sx={{ textDecoration: 'none', marginLeft: 0.5 }}
                                href="https://github.com/JellYouness/Gestion-des-membres"
                            >
                                Code Source
                            </Typography>
                        </ListItem>
                    </List>

                    <Typography variant="h4" gutterBottom>
                        <span style={{ fontWeight: '500', borderBottom: '4px solid #f5df4e', paddingBottom: '5px', marginBottom: 20 }}>
                            Problematique
                        </span>
                    </Typography>
                    <Typography sx={{ fontWeight: '400', fontSize: '18px', marginBottom: 5 }}>{translations.issue}</Typography>

                    <Typography variant="h4" gutterBottom>
                        <span style={{ fontWeight: '500', borderBottom: '4px solid #f5df4e', paddingBottom: '5px', marginBottom: 20 }}>
                            Solution
                        </span>
                    </Typography>
                    <Typography sx={{ fontWeight: '400', fontSize: '18px' }}>{translations.solution}</Typography>

                    <List sx={{ listStyleType: 'disc' }}>
                        {translations.solutionList.map((pm, index) => (
                            <ListItem key={index}>
                                <ListItemText primary={`- ${pm}`} />
                            </ListItem>
                        ))}
                    </List>

                    <Typography variant="h4" gutterBottom>
                        <span style={{ fontWeight: '500', borderBottom: '4px solid #f5df4e', paddingBottom: '5px' }}>
                            {translations.keyFeaturesTitle}
                        </span>
                    </Typography>
                    <List>
                        <List>
                            <ListItem>
                                <span style={{ fontWeight: '600', fontSize: '16px' }}>- {translations.membersManagementTitle}</span>
                                <ListItemText primary={` ${translations.membersManagement}`} />
                            </ListItem>
                            <ListItem>
                                <span style={{ fontWeight: '600', fontSize: '16px' }}>- {translations.subscriptionsManagementTitle}</span>
                                <ListItemText primary={` ${translations.subscriptionsManagement}`} />
                            </ListItem>
                            <ListItem>
                                <span style={{ fontWeight: '600', fontSize: '16px' }}>- {translations.reportsAndAnalysisTitle}</span>
                                <ListItemText primary={` ${translations.reportsAndAnalysis}`} />
                            </ListItem>
                        </List>
                    </List>
                    <Typography variant="h4" gutterBottom>
                        <span style={{ fontWeight: '500', borderBottom: '4px solid #f5df4e', paddingBottom: '5px' }}>
                            {translations.benefitsTitle}
                        </span>
                    </Typography>
                    <List>
                        <List>
                            {translations.benefitsList.map((pm, index) => (
                                <ListItem key={index}>
                                    <ListItemText primary={`- ${pm}`} />
                                </ListItem>
                            ))}
                        </List>
                    </List>

                    <Typography variant="h4" gutterBottom>
                        <span style={{ fontWeight: '500', borderBottom: '4px solid #f5df4e', paddingBottom: '5px' }}>
                            {translations.technologiesUsedTitle}
                        </span>
                    </Typography>
                    <List>
                        <ListItem>
                            <span style={{ fontWeight: '600', fontSize: '16px' }}>- Front End</span>
                            <ListItemText primary={`: ${translations.technologiesUsedFrontend}`} />
                        </ListItem>
                        <ListItem>
                            <span style={{ fontWeight: '600', fontSize: '16px' }}>- Back End</span>
                            <ListItemText primary={`: ${translations.technologiesUsedBackend}`} />
                        </ListItem>
                        <ListItem>
                            <span style={{ fontWeight: '600', fontSize: '16px' }}>- Database</span>
                            <ListItemText primary={`: ${translations.technologiesUsedDatabase}`} />
                        </ListItem>
                        <ListItem>
                            <span style={{ fontWeight: '600', fontSize: '16px' }}>- Tools</span>
                            <ListItemText primary={`: ${translations.technologiesUsedDevelopmentTools}`} />
                        </ListItem>
                    </List>

                    <Typography variant="h4" gutterBottom>
                        <span style={{ fontWeight: '500', borderBottom: '4px solid #f5df4e', paddingBottom: '5px' }}>Overview</span>
                    </Typography>

                    {translations.imgs.map((img, index) => (
                        <Box key={index}>
                            <Typography variant="h6" gutterBottom sx={{ borderBottom: '1px solid black', display: 'inline' }}>
                                {img.name}
                            </Typography>
                            <Box
                                component="img"
                                src={img.src}
                                loading="lazy"
                                mt={2}
                                width={{ xs: '80%', md: '45%' }}
                                sx={{
                                    borderRadius: '15px',
                                    border: '1px solid black',
                                    marginBottom: 5,
                                    display: 'block',
                                    marginLeft: { xs: 3, md: 15 }
                                }}
                            ></Box>
                        </Box>
                    ))}

                    <Typography variant="h4" gutterBottom>
                        <span style={{ fontWeight: '500', borderBottom: '4px solid #f5df4e', paddingBottom: '5px' }}>
                            {translations.conclusionTitle}
                        </span>
                    </Typography>
                    <Typography>{translations.conclusionText}</Typography>
                </Paper>
            </Container>
        </Box>
    );
};

export default PccMembership;
