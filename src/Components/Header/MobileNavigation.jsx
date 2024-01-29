import { Avatar, List, ListItem, ListItemAvatar, ListItemButton, ListItemText, MenuItem, Select, Stack, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { config, ColoredTheme } from '../../config';
import en from '../../assets/Lang/en.webp';
import fr from '../../assets/Lang/fr.webp';
import { useState } from 'react';

const MobileNavigation = () => {
    const [lang, setLang] = useState('en');
    const handleLangChange = (event) => {
        setLang(event.target.value);
    };
    return (
        <>
            <Stack spacing={0} alignItems="center" px={4}>
                <Typography
                    component={Link}
                    to="#Home"
                    variant="subtitle1"
                    sx={{
                        fontWeight: '600',
                        textDecoration: 'none',
                        color: config.TextColor,
                        paddingY: '3.25vh',
                        paddingX: '20px'
                    }}
                >
                    HOME
                </Typography>
                <Typography
                    component={Link}
                    to="#About"
                    variant="subtitle1"
                    sx={{ fontWeight: '600', textDecoration: 'none', color: config.TextColor, paddingY: '24px', paddingX: '20px' }}
                >
                    ABOUT
                </Typography>
                <Typography
                    component={Link}
                    to="#Services"
                    variant="subtitle1"
                    sx={{ fontWeight: '600', textDecoration: 'none', color: config.TextColor, paddingY: '24px', paddingX: '20px' }}
                >
                    SERVICES
                </Typography>
                <Typography
                    component={Link}
                    to="#Resume"
                    variant="subtitle1"
                    sx={{ fontWeight: '600', textDecoration: 'none', color: config.TextColor, paddingY: '24px', paddingX: '20px' }}
                >
                    RESUME
                </Typography>
                <Typography
                    component={Link}
                    to="#Projects"
                    variant="subtitle1"
                    sx={{ fontWeight: '600', textDecoration: 'none', color: config.TextColor, paddingY: '24px', paddingX: '20px' }}
                >
                    PROJECTS
                </Typography>
                <Typography
                    component={Link}
                    to="#Contact"
                    variant="subtitle1"
                    sx={{ fontWeight: '600', textDecoration: 'none', color: config.TextColor, paddingY: '24px', paddingX: '20px' }}
                >
                    CONTACT
                </Typography>
                {/* <Select
                    sx={{
                        boxShadow: 'none',
                        '.MuiOutlinedInput-notchedOutline': { border: 0 },
                        '&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
                            border: 0
                        },
                        '&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                            border: 0
                        }
                    }}
                    value={lang}
                    autoWidth
                    onChange={handleLangChange}
                >
                    <MenuItem value="en">
                        <Avatar sx={{ width: 24, height: 24 }} src={en} />
                    </MenuItem>
                    <MenuItem value="fr">
                        <Avatar sx={{ width: 24, height: 24 }} src={fr} />
                    </MenuItem>
                </Select> */}
            </Stack>
        </>
    );
};

export default MobileNavigation;
