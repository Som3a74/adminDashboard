import { React, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Alert, Box, Button, Paper, TextField, Typography, useTheme } from '@mui/material'
import { useAuth } from './../../Context/AuthContext';

export default function ForgotPassword() {
  const emailRef = useRef();
  const theme = useTheme();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const { resetPassword } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setMessage("");
      setError("");
      setLoading(true);
      await resetPassword(emailRef.current.lastElementChild.firstChild.value);
      setMessage("Check your inbox for further instructions");
    } catch {
      setError("Failed to reset password");
    }
    setLoading(false);
  }


  return (
    <Box width={'100%'} height={'70vh'} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>

      <Paper component="form" onSubmit={handleSubmit} sx={{ p: 2, width: { xs: "70vw", lg: '500px' } }} >

        <Typography color={theme.palette.info.light} variant='h3' textAlign={'center'} mb={6}>Password Reset</Typography>
        {error && <Alert variant="outlined" severity="error">{error}</Alert>}

        {
          message ?
            <Alert variant="outlined" severity="success">{message} <Link className='Link_Form' to="/login">Login Now</Link> </Alert>
            : <TextField ref={emailRef} type='email' label="Email" variant="filled" sx={{ display: 'block', margin: '10px', paddingRight: '20px' }} fullWidth />
        }



        <Button type="submit" disabled={loading} sx={{ mt: 2, width: '100%', fontWeight: '600' }} variant="contained">Reset Password</Button>

      </Paper>

      <Typography mt={2} >Need an account? <Link className='Link_Form' to="/register">Register</Link></Typography>
    </Box>
  )
}
