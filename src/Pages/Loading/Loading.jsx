import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import { Box } from "@mui/material";

export default function Loading() {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '50vw' }}>
            <CircularProgress />
        </Box>
    )
}
