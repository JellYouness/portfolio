import React from 'react';
import { GitHub, LinkedIn } from '@mui/icons-material';
import { Box, Stack } from '@mui/material';

const FABs = () => {
    const style = {
        margin: 0,
        top: 'auto',
        right: 20,
        bottom: 150,
        left: 'auto',
        position: 'fixed'
    };
    return (
        <Stack direction="column" spacing={0.5} style={style}>
            <Box component="a" href="https://github.com/JellYouness">
                <GitHub
                    sx={{
                        fontSize: '40px',
                        textDecoration: 'none',
                        color: 'black',
                        '&:hover': {
                            transform: 'scale(1.1)',
                            transition: '200ms'
                        }
                    }}
                />
            </Box>
            <Box component="a" href="https://www.linkedin.com/in/youness-jellouli/">
                <LinkedIn
                    sx={{
                        fontSize: '40px',
                        textDecoration: 'none',
                        color: 'black',
                        '&:hover': {
                            transform: 'scale(1.1)',
                            transition: '200ms'
                        }
                    }}
                />
            </Box>
        </Stack>
    );
};

export default FABs;
