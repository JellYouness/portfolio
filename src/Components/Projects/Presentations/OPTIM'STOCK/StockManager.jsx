import { Box, Container, List, ListItem, ListItemText, Paper, Typography, makeStyles } from '@mui/material';
import React from 'react';
import { config } from '../../../../config';
import gds from '../../../../assets/images/gds.png';
import login from '../../../../assets/images/stock/login.png';
import dashboard from '../../../../assets/images/stock/dashboard.png';
import caisse from '../../../../assets/images/stock/Caisse.png';
import ticket from '../../../../assets/images/stock/ticket.png';
import liste from '../../../../assets/images/stock/Liste.png';
import insert from '../../../../assets/images/stock/Insert.png';
import { useSelector } from 'react-redux';
import EN from './EN';
import FR from './FR';

const StockManager = () => {
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
                        src={gds}
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
                    <List>
                        <ListItem>
                            <Typography>- Github Repository: </Typography>
                            <Typography
                                component="a"
                                target="_blank"
                                sx={{ textDecoration: 'none', marginLeft: 0.5 }}
                                href="https://github.com/JellYouness/Stock-Management`"
                            >
                                Code Source
                            </Typography>
                        </ListItem>
                        <ListItem>
                            <Typography>- Preview: </Typography>
                            <Typography
                                component="a"
                                target="_blank"
                                sx={{ textDecoration: 'none', marginLeft: 0.5 }}
                                href="http://stockmanager.rf.gd/Stock-Management/"
                            >
                                OPTIM'STOCK
                            </Typography>
                            <Typography sx={{ marginLeft: 1 }}>(admin/admin)</Typography>
                        </ListItem>
                    </List>
                    <Typography variant="h4" gutterBottom>
                        <span style={{ fontWeight: '500', borderBottom: '4px solid #f5df4e', paddingBottom: '5px' }}>
                            {translations.productManagementTitle}
                        </span>
                    </Typography>
                    <List>
                        <ListItem sx={{ flexDirection: 'column', alignItems: 'flex-start' }}>
                            <span style={{ fontWeight: '500', fontSize: '18px' }}>1 - {translations.productManagementTitle}:</span>
                            <List sx={{ listStyleType: 'disc' }}>
                                <ListItem>
                                    <ListItemText primary={`- ${translations.productManagement1}`} />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary={`- ${translations.productManagement2}`} />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary={`- ${translations.productManagement3}`} />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary={`- ${translations.productManagement4}`} />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary={`- ${translations.productManagement5}`} />
                                </ListItem>
                            </List>
                        </ListItem>

                        <ListItem sx={{ flexDirection: 'column', alignItems: 'flex-start' }}>
                            <span style={{ fontWeight: '500', fontSize: '18px' }}>2 - {translations.ordersTitle}:</span>
                            <List>
                                <ListItem>
                                    <ListItemText primary={`- ${translations.orders1}`} />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary={`- ${translations.orders2}`} />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary={`- ${translations.orders3}`} />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary={`- ${translations.orders4}`} />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary={`- ${translations.orders5}`} />
                                </ListItem>
                            </List>
                        </ListItem>

                        <ListItem sx={{ flexDirection: 'column', alignItems: 'flex-start' }}>
                            <span style={{ fontWeight: '500', fontSize: '18px' }}>3 - {translations.customersTitle}:</span>
                            <List>
                                <ListItem>
                                    <ListItemText primary={`- ${translations.customers1}`} />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary={`- ${translations.customers2}`} />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary={`- ${translations.customers3}`} />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary={`- ${translations.customers4}`} />
                                </ListItem>
                            </List>
                        </ListItem>

                        <ListItem sx={{ flexDirection: 'column', alignItems: 'flex-start' }}>
                            <span style={{ fontWeight: '500', fontSize: '18px' }}>4 - {translations.suppliersTitle}:</span>
                            <List>
                                <ListItem>
                                    <ListItemText primary={`- ${translations.suppliers1}`} />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary={`- ${translations.suppliers2}`} />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary={`- ${translations.suppliers3}`} />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary={`- ${translations.suppliers4}`} />
                                </ListItem>
                            </List>
                        </ListItem>

                        <ListItem sx={{ flexDirection: 'column', alignItems: 'flex-start' }}>
                            <span style={{ fontWeight: '500', fontSize: '18px' }}>5 - {translations.otherFeaturesTitle}:</span>
                            <List>
                                <ListItem>
                                    <ListItemText primary={`- ${translations.otherFeatures1}`} />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary={`- ${translations.otherFeatures2}`} />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary={`- ${translations.otherFeatures3}`} />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary={`- ${translations.otherFeatures4}`} />
                                </ListItem>
                            </List>
                        </ListItem>
                    </List>

                    <Typography variant="h4" gutterBottom>
                        <span style={{ fontWeight: '500', borderBottom: '4px solid #f5df4e', paddingBottom: '5px' }}>
                            {translations.benefitsTitle}
                        </span>
                    </Typography>
                    <List>
                        <ListItem>
                            <span style={{ fontWeight: '600', fontSize: '16px' }}>- {translations.benefits1Title}</span>
                            <ListItemText primary={` ${translations.benefits1}`} />
                        </ListItem>
                        <ListItem>
                            <span style={{ fontWeight: '600', fontSize: '16px' }}>- {translations.benefits2Title}</span>
                            <ListItemText primary={` ${translations.benefits2}`} />
                        </ListItem>
                        <ListItem>
                            <span style={{ fontWeight: '600', fontSize: '16px' }}>- {translations.benefits3Title}</span>
                            <ListItemText primary={` ${translations.benefits3}`} />
                        </ListItem>
                        <ListItem>
                            <span style={{ fontWeight: '600', fontSize: '16px' }}>- {translations.benefits4Title}</span>
                            <ListItemText primary={` ${translations.benefits4}`} />
                        </ListItem>
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
                        <span style={{ fontWeight: '500', borderBottom: '4px solid #f5df4e', paddingBottom: '5px' }}>
                            {translations.overviewTitle}
                        </span>
                    </Typography>
                    <Box>
                        <Typography variant="h6" gutterBottom sx={{ borderBottom: '1px solid black', display: 'inline' }}>
                            Login Page:
                        </Typography>
                        <Box
                            component="img"
                            src={login}
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
                    <Box>
                        <Typography variant="h6" gutterBottom sx={{ borderBottom: '1px solid black', display: 'inline' }}>
                            Dashboard:
                        </Typography>
                        <Box
                            component="img"
                            src={dashboard}
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
                    <Box>
                        <Typography variant="h6" gutterBottom sx={{ borderBottom: '1px solid black', display: 'inline' }}>
                            Caisse:
                        </Typography>
                        <Box
                            component="img"
                            src={caisse}
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
                    <Box>
                        <Typography variant="h6" gutterBottom sx={{ borderBottom: '1px solid black', display: 'inline' }}>
                            Ticket:
                        </Typography>
                        <Box
                            component="img"
                            loading="lazy"
                            src={ticket}
                            mt={2}
                            width={{ xs: '40%', md: '15%' }}
                            sx={{
                                borderRadius: '15px',
                                border: '1px solid black',
                                marginBottom: 5,
                                display: 'block',
                                marginLeft: { xs: 10, md: 15 }
                            }}
                        ></Box>
                    </Box>
                    <Box>
                        <Typography variant="h6" gutterBottom sx={{ borderBottom: '1px solid black', display: 'inline' }}>
                            Liste:
                        </Typography>
                        <Box
                            component="img"
                            loading="lazy"
                            src={liste}
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
                    <Box>
                        <Typography variant="h6" gutterBottom sx={{ borderBottom: '1px solid black', display: 'inline' }}>
                            Insert Form:
                        </Typography>
                        <Box
                            component="img"
                            loading="lazy"
                            src={insert}
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

export default StockManager;
