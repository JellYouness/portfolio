import React from 'react';
import { GitHub, LinkedIn, Instagram } from '@mui/icons-material';
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
        <Stack direction="row" spacing={0.5}>
            <Box component="a" href="https://github.com/JellYouness">
                <GitHub
                    sx={{
                        fontSize: '26px',
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
                        fontSize: '28px',
                        textDecoration: 'none',
                        color: 'black',
                        '&:hover': {
                            transform: 'scale(1.1)',
                            transition: '200ms'
                        }
                    }}
                />
            </Box>
            <Box component="a" href="https://www.instagram.com/yns_jell/">
                <Instagram
                    sx={{
                        fontSize: '28px',
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
