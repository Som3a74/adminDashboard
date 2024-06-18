import React from 'react'
import { Box, Button, Paper, TextField, Typography, useTheme } from '@mui/material'
import { Link } from 'react-router-dom';

export default function Login() {
  const theme = useTheme();
  return (
    <Box width={'100%'} height={'70vh'} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>

      <Paper sx={{ p: 2, width: { sm: "60vw", lg: '500px' } }} >

        <Typography color={theme.palette.info.light} variant='h3' textAlign={'center'} mb={6}>Login</Typography>

        <TextField type='email' label="Email" variant="filled" sx={{ display: 'block', margin: '10px', paddingRight: '20px' }} fullWidth />
        <TextField type='password' label="Password" variant="filled" sx={{ display: 'block', margin: '10px', paddingRight: '20px' }} fullWidth />

        <Button sx={{ mt: 2, width: '100%', fontWeight: '600' }} variant="contained">Log In</Button>

      </Paper>

      <Typography mt={2} >Already have an account? <Link className='Link_Form' to="/register">Register</Link></Typography>

    </Box>
  )
}
