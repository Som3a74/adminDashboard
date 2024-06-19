import { React, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Alert, Box, Button, Paper, TextField, Typography, useTheme } from '@mui/material'
import { useAuth } from './../../Context/AuthContext';

export default function Register() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const theme = useTheme();
  const { signup } = useAuth();


  async function handleSubmit(e) {
    e.preventDefault()
    if (passwordRef.current.lastElementChild.firstChild.value !== passwordConfirmRef.current.lastElementChild.firstChild.value) {
      return setError("Passwords do not match");
    }
    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.lastElementChild.firstChild.value, passwordRef.current.lastElementChild.firstChild.value);
      navigate("/pie");
    } catch (error) {
      console.log(error.message)
      if (error.message =='Firebase: Password should be at least 6 characters (auth/weak-password).') {
        return setError("Password should be at least 6 characters");
      }
      setError("Failed to create an account");
    }
    setLoading(false)
  }
  return (
    <Box width={'100%'} height={'70vh'} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>


      <Paper component="form" onSubmit={handleSubmit} sx={{ p: 2, width: { xs: "70vw", lg: '500px' } }} >

        <Typography color={theme.palette.info.light} variant='h3' textAlign={'center'} mb={5}>Register</Typography>
        {error && <Alert variant="outlined" severity="error">{error}</Alert>}

        <TextField ref={emailRef} type='email' label="Email" variant="filled" sx={{ display: 'block', margin: '10px', paddingRight: '20px' }} fullWidth />
        <TextField ref={passwordRef} type='password' label="Password" variant="filled" sx={{ display: 'block', margin: '10px', paddingRight: '20px' }} fullWidth />
        <TextField ref={passwordConfirmRef} type='password' label=" Password Confirmation" variant="filled" sx={{ display: 'block', margin: '10px', paddingRight: '20px' }} fullWidth />

        <Button type="submit" disabled={loading} sx={{ mt: 2, width: '100%', fontWeight: '600' }} variant="contained">Sign Up</Button>

      </Paper>

      <Typography mt={2} >Already have an account? <Link className='Link_Form' to="/login">Log In</Link></Typography>

    </Box>
  )
}
