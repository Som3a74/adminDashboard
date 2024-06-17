import { Avatar, Box } from '@mui/material'
import React from 'react'
import errorPng from '../../../public/error.svg'



export default function NotFound() {
    return (
        <Box sx={{ height:'70vh' , display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 5 }}>
            <Box>
                <img sx={{width:'100%' , mt:4}} src={errorPng} />
            </Box>
        </Box>
    )
}
// className='d-flex justify-content-center align-items-center flex-column my-5'