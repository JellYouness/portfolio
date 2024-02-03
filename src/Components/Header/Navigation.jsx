import { Stack, Typography } from '@mui/material';
import React from 'react';
import en from '../../assets/Lang/en.webp';
import fr from '../../assets/Lang/fr.webp';
import { useState } from 'react';
import Element from './Element';

const Navigation = () => {
    const [lang, setLang] = useState('en');
    const handleLangChange = (event) => {
        setLang(event.target.value);
    };
    return (
        <>
            <Stack direction="row" spacing={0} alignItems="center">
                <Element href="#Home" title="HOME" />
                <Element href="#About" title="ABOUT" />
                <Element href="#Services" title="SERVICES" />
                <Element href="#Resume" title="RESUME" />
                <Element href="#Projects" title="PROJECTS" />
                <Element href="#Contact" title="CONTACT" />
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

export default Navigation;
