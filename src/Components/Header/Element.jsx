import React from 'react';
import { Typography } from '@mui/material';
import { config, ColoredTheme } from '../../config';

const Element = ({ href, title }) => {
    return (
        <Typography
            component="a"
            href={href}
            sx={{
                fontWeight: '600',
                fontSize: '14px',
                textDecoration: 'none',
                color: config.TextColor,
                paddingY: '18px',
                paddingX: '20px'
            }}
        >
            {title}
        </Typography>
    );
};

export default Element;
