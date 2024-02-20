import React from 'react';
import { Typography } from '@mui/material';
import { config, ColoredTheme } from '../../config';

const Element = ({ href, title }) => {
    return (
        <Typography
            component="a"
            href={href}
            variant="subtitle2"
            sx={{
                fontWeight: '600',
                textDecoration: 'none',
                color: config.TextColor,
                paddingY: '24px',
                paddingX: '20px'
            }}
        >
            {title}
        </Typography>
    );
};

export default Element;
