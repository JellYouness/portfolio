import { Box, Grid, Link, Typography } from '@mui/material';
import React from 'react';
import { config } from '../../config';

const Footer = () => {
    return (
        <Box component="footer">
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="center"
                sx={{ padding: '2rem 0', backgroundColor: 'black', color: 'white' }}
            >
                <Grid item xs={3}>
                    <Typography variant="body2" sx={{ margin: '0 auto' }}>
                        Copyright © 2024{' '}
                        <Link href="/" sx={{ color: config.PrimaryColor, fontWeight: '500' }}>
                            JELLOULI Youness
                        </Link>
                        . All Rights Reserved.
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Footer;
