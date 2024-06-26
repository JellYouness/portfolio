import React, { useRef, useState } from 'react';
import { Grid, Typography, TextField, Button, Divider, Stack, Box, TextareaAutosize, InputLabel, Alert } from '@mui/material';
import { ColoredTheme, config } from '../../config';
import { ArrowForward } from '@mui/icons-material';
import SlideUp from '../Animations/SlideUp';
import { useSelector } from 'react-redux';
import eng from '../../Data/eng';
import fr from '../../Data/fr';
import emailjs from '@emailjs/browser';
import SlideLeft from '../Animations/SlideLeft';

const Contact = () => {
    const { value } = useSelector((state) => state.lang);
    const data = value === 'en' ? eng : fr;
    const form = useRef();
    const [isSent, setIsSent] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
            .sendForm('service_0uvn7ai', 'template_e0dowwb', form.current, {
                publicKey: 'dKYNURZMld6SibCCd'
            })
            .then(
                () => {
                    setIsSent((current) => !current);
                },
                (error) => {
                    console.log('FAILED...', error.text);
                }
            );
        form.current.reset();
    };
    return (
        <Box
            component="section"
            id="Contact"
            sx={{
                // backgroundColor: ColoredTheme ? config.PrimaryColor : 'unset',
                color: config.TextColor,
                // minHeight: '100vh',
                overflow: 'hidden',
                padding: '6.5vh 0 6vh 0'
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
                        <Typography variant="body1" fontWeight="normal" sx={{ textIndent: 20 }}>
                            {data.InTouchDesc}
                        </Typography>
                        <Typography variant="h5" fontWeight="500">
                            {data.Living}
                        </Typography>
                        <Typography variant="body1">Casablanca, MA.</Typography>
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
                        <Box component="form" ref={form} onSubmit={sendEmail} sx={{ marginBottom: '4rem' }} mt={4}>
                            <Grid container spacing={3}>
                                <Grid item xs={12}>
                                    <InputLabel htmlFor="name">{data.Name}:</InputLabel>
                                    <TextField id="name" name="name" fullWidth variant="standard" />
                                </Grid>
                                <Grid item xs={12}>
                                    <InputLabel htmlFor="email">{data.Email}:</InputLabel>
                                    <TextField id="email" name="email" fullWidth variant="standard" />
                                </Grid>
                                <Grid item xs={12}>
                                    <InputLabel htmlFor="message">{data.Message}:</InputLabel>
                                    <TextField id="message" name="message" fullWidth variant="standard" multiline rows={5} />
                                </Grid>
                                {isSent && (
                                    <Grid item xs={12}>
                                        <SlideLeft>
                                            <Alert severity="success">{data.Sent}</Alert>
                                        </SlideLeft>
                                    </Grid>
                                )}
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
