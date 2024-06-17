import React from 'react';
import { Box, Typography, useTheme } from "@mui/material";

export default function Header({ title, subTitle}) {
    const theme = useTheme()
    return (
        <Box textAlign={'inherit'}>
            <Typography textAlign={'inherit'} variant="h5" sx={{ color: theme.palette.info.light, fontWeight: "bold" }} >
                {title}
            </Typography>
            <Typography variant="body1" mb={2}>{subTitle}</Typography>
        </Box>
    )
}
