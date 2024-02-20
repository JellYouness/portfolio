import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import { config } from '../../../config';
import gds from '../../../assets/images/gds.png';

const StockManager = () => {
    return (
        <Box sx={{ paddingTop: '13vh', bgcolor: 'rgba(248,249,250)' }}>
            <Container>
                <Typography sx={{ fontWeight: '500', bgcolor: config.PrimaryColor }} variant="h2">
                    OPTUM'Stock - Stock Manager
                </Typography>
                <Box component="img" src={gds} mt={2} width="100%" sx={{ borderRadius: '30px', border: '1px solid black' }}></Box>
            </Container>
        </Box>
    );
};

export default StockManager;
