import React, { useState } from 'react';
import { Grid, Typography, TextField, Button, Divider, Stack, Box, TextareaAutosize, InputLabel } from '@mui/material';
import { ColoredTheme, config } from '../../config';
import { ArrowForward } from '@mui/icons-material';
import SlideUp from '../Animations/SlideUp';
import { useSelector } from 'react-redux';
import eng from '../../Data/eng';
import fr from '../../Data/fr';

const Contact = () => {
    const { value } = useSelector((state) => state.lang);
    const data = value === 'en' ? eng : fr;
    return (
        <Box
            component="section"
            id="Contact"
            sx={{
                // backgroundColor: ColoredTheme ? config.PrimaryColor : 'unset',
                color: config.TextColor,
                minHeight: '100vh',
                overflow: 'hidden',
                paddingY: '6.5vh'
            }}
        >
            <Stack justifyContent="start" alignItems="center">
                <Typography variant="subtitle1" sx={{ backgroundColor: config.PrimaryColor, paddingX: '10px', fontWeight: '500' }}>
                    Contact
                </Typography>
            </Stack>
            <SlideUp>
                <Stack
                    mt={6}
                    direction={{
                        xs: 'column',
                        md: 'row'
                    }}
                    spacing={{ xs: 6 }}
                    justifyContent="space-evenly"
                    alignItems={{ xs: 'center', md: 'flex-start' }}
                    flexWrap="wrap"
                >
                    <Stack justifyContent="space-between" spacing={2} width={{ xs: '80%', md: '25%', lg: '25%' }}>
                        <Typography variant="h4" sx={{ fontWeight: '600', borderBottom: '4px solid #f5df4e', paddingBottom: '5px' }}>
                            {data.InTouch}
                        </Typography>
                        <Typography variant="body1" fontWeight="normal">
                            {data.InTouchDesc}
                        </Typography>
                        <Typography variant="h5" fontWeight="500">
                            {data.Living}
                        </Typography>
                        <Typography variant="body1">Salmia 2, Casablanca, MA.</Typography>
                        <Typography variant="h5" fontWeight="500">
                            Email:
                        </Typography>
                        <Typography variant="body1">younessjellouli12@gmail.com</Typography>
                        <Typography variant="h5" fontWeight="500">
                            {data.Call}
                        </Typography>
                        <Typography variant="body1">+212 627 594 239</Typography>
                    </Stack>
                    <Stack
                        width={{ xs: '80%', md: '25%', lg: '25%' }}
                        sx={{ ms: 'auto', mt: 5, mtLg: 0, wow: 'fadeInUp', visibility: 'visible', animationDelay: '0.3s' }}
                    >
                        <Typography variant="h4" sx={{ fontWeight: '600', borderBottom: '4px solid #f5df4e', paddingBottom: '5px' }}>
                            {data.ContactMe}
                        </Typography>
                        <Box component="form" method="post" sx={{ marginBottom: '4rem' }} mt={4}>
                            <Grid container spacing={3}>
                                <Grid item xs={12}>
                                    <InputLabel htmlFor="name">{data.Name}:</InputLabel>
                                    <TextField id="name" fullWidth variant="standard" />
                                </Grid>
                                <Grid item xs={12}>
                                    <InputLabel htmlFor="email">{data.Email}:</InputLabel>
                                    <TextField id="email" fullWidth variant="standard" />
                                </Grid>
                                <Grid item xs={12}>
                                    <InputLabel htmlFor="message">{data.Message}:</InputLabel>
                                    <TextField id="message" fullWidth variant="standard" multiline rows={5} />
                                </Grid>
                                <Grid item xs={12} text-lg-start>
                                    <Button
                                        id="submit-btn"
                                        variant="contained"
                                        type="submit"
                                        sx={{
                                            borderRadius: 0,
                                            backgroundColor: 'black',
                                            color: 'white',
                                            '&:hover': {
                                                backgroundColor: '#424649',
                                                boxShadow: '0 5px 15px rgba(0,0,0,.3)',
                                                transition: '0.4s'
                                            }
                                        }}
                                        endIcon={<ArrowForward />}
                                    >
                                        {data.Send}
                                    </Button>
                                </Grid>
                            </Grid>
                        </Box>
                    </Stack>
                </Stack>
            </SlideUp>
        </Box>
    );
};

export default Contact;
