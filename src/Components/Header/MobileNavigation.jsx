import { Avatar, List, ListItem, ListItemAvatar, ListItemButton, ListItemText, MenuItem, Select, Stack, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { config, ColoredTheme } from '../../config';
import en from '../../assets/Lang/en.webp';
import fr from '../../assets/Lang/fr.webp';
import Element from './Element';
import { useDispatch, useSelector } from 'react-redux';
import { useEng, useFr } from '../../store/lang';
import eng from '../../Data/eng';
import frr from '../../Data/fr';

const MobileNavigation = () => {
    const dispatch = useDispatch();
    const { value } = useSelector((state) => state.lang);
    const data = value === 'en' ? eng : frr;

    const handleLangChange = (event) => {
        switch (event.target.value) {
            case 'en':
                dispatch(useEng());
                break;
            case 'fr':
                dispatch(useFr());
                break;
            default:
                break;
        }
    };
    return (
        <>
            <Stack spacing={0} alignItems="center" px={4}>
                <Element href="#Hero" title={data.Home} />
                <Element href="#About" title={data.About} />
                <Element href="#Services" title={data.Services} />
                <Element href="#Resume" title={data.Experiences} />
                <Element href="#Projects" title={data.Projects} />
                <Element href="#Contact" title={data.Contact} />
                <Select
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
                    value={value}
                    autoWidth
                    onChange={handleLangChange}
                >
                    <MenuItem value="en">
                        <Avatar sx={{ width: 24, height: 24 }} src={en} />
                    </MenuItem>
                    <MenuItem value="fr">
                        <Avatar sx={{ width: 24, height: 24 }} src={fr} />
                    </MenuItem>
                </Select>
            </Stack>
        </>
    );
};

export default MobileNavigation;
