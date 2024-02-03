import { AppBar, Box, IconButton, Drawer, Stack, Grid, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import React, { useEffect, useState } from 'react';
import Navigation from './Navigation';
import { config, ColoredTheme } from '../../config';
import image from '../../assets/images/Logo.png';
import MobileNavigation from './MobileNavigation';

const Header = () => {
    const [navColor, setNavColor] = useState('unset');
    const [openDrawer, setOpenDrawer] = useState(false);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const ChangeNavColor = () => {
        window.scrollY > 50 ? setNavColor('#000') : setNavColor('unset');
    };

    const ChangeScreenWidth = () => {
        setScreenWidth(window.innerWidth);
    };

    useEffect(() => {
        ChangeNavColor();
        window.addEventListener('scroll', ChangeNavColor);
        window.addEventListener('resize', ChangeScreenWidth);
    });

    const openDrawerHandle = () => {
        setOpenDrawer(!openDrawer);
    };

    return (
        <AppBar
            sx={{
                color: config.TextColor,
                boxShadow: '0px -70px 90px black',
                backgroundColor: ColoredTheme ? config.White : navColor
            }}
        >
            <Grid
                container
                justifyContent={{ xs: 'space-between', md: 'space-around' }}
                alignItems="center"
                direction="row"
                sx={{ height: config.HeaderHeight, paddingX: { xs: '10px' } }}
            >
                <Grid item>
                    <Stack justifyContent="space-between" alignItems="center" direction="row" spacing={2}>
                        <Box
                            component="img"
                            src={image}
                            sx={{
                                height: {
                                    xs: '35px',
                                    md: '40px',
                                    lg: '50px'
                                }
                            }}
                        />
                        {screenWidth > 600 ? <Typography variant="h6">Youness JELLOULI</Typography> : null}
                    </Stack>
                </Grid>

                <Grid item>{screenWidth < 600 ? <Typography variant="h6">Youness JELLOULI</Typography> : null}</Grid>

                <Grid item>
                    {screenWidth > 770 ? (
                        <Navigation />
                    ) : (
                        <IconButton onClick={openDrawerHandle}>
                            <MenuIcon />
                        </IconButton>
                    )}
                </Grid>
            </Grid>
            <Drawer anchor="right" open={openDrawer} onClose={openDrawerHandle}>
                <MobileNavigation />
            </Drawer>
        </AppBar>
    );
};

export default Header;
