import { React, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Alert, Box, Button, Paper, TextField, Typography, useTheme } from '@mui/material'
import { useAuth } from './../../Context/AuthContext';
import { Navigate, useLocation } from "react-router-dom";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const theme = useTheme();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();
  const location = useLocation();
  const redirectPath = location.state?.path || "/Team";

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.lastElementChild.firstChild.value, passwordRef.current.lastElementChild.firstChild.value);
      navigate(redirectPath, { replace: true });
    } catch (error) {
      console.log(error.message)
      setError("Failed to log in");
    }
    setLoading(false);
  }

  return (
    <Box width={'100%'} height={'70vh'} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>

      <Paper component="form" onSubmit={handleSubmit} sx={{ p: 2, width: { xs: "70vw", lg: '500px' } }} >

        <Typography color={theme.palette.info.light} variant='h3' textAlign={'center'} mb={6}>Login</Typography>
        {error && <Alert variant="outlined" severity="error">{error}</Alert>}

        <TextField ref={emailRef} type='email' label="Email" variant="filled" sx={{ display: 'block', margin: '10px', paddingRight: '20px' }} fullWidth />
        <TextField ref={passwordRef} type='password' label="Password" variant="filled" sx={{ display: 'block', margin: '10px', paddingRight: '20px' }} fullWidth />

        <Button type="submit" disabled={loading} sx={{ mt: 2, width: '100%', fontWeight: '600' }} variant="contained">Log In</Button>
        <Typography textAlign={'center'} mt={2} ><Link className='Link_Form' to="/ForgotPassword">Forget password</Link></Typography>

      </Paper>

      <Typography mt={2} >Already have an account? <Link className='Link_Form' to="/register">Register</Link></Typography>
    </Box>
  )
}
