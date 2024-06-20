import { React, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Alert, Box, Button, Paper, TextField, Typography, useTheme } from '@mui/material'
import { useAuth } from './../../Context/AuthContext';

export default function UpdateProfile() {
  const theme = useTheme();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { currentUser, updateUserPassword, updateUserEmail } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (passwordRef.current.lastElementChild.firstChild.value !== passwordConfirmRef.current.lastElementChild.firstChild.value) {
      return setError("Passwords do not match");
    }

    const promises = [];
    setLoading(true);
    setError("");

    if (emailRef.current.lastElementChild.firstChild.value !== currentUser.email) {
      promises.push(updateUserEmail(emailRef.current.lastElementChild.firstChild.value));
    }

    if (passwordRef.current.value) {
      promises.push(updateUserPassword(passwordRef.current.lastElementChild.firstChild.value));
    }

    Promise.all(promises)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message)
        setError("Failed to update account");
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <Box width={'100%'} height={'70vh'} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>

      <Paper component="form" onSubmit={handleSubmit} sx={{ p: 2, width: { xs: "70vw", lg: '500px' } }} >

        <Typography color={theme.palette.info.light} variant='h3' textAlign={'center'} mb={6}>Update Profile</Typography>
        {error && <Alert variant="outlined" severity="error">{error}</Alert>}

        <TextField ref={emailRef} type='email' label="Email" variant="filled" sx={{ display: 'block', margin: '10px', paddingRight: '20px' }} required fullWidth defaultValue={currentUser?.email} />
        <TextField ref={passwordRef} type='password' label="Password" variant="filled" sx={{ display: 'block', margin: '10px', paddingRight: '20px' }} fullWidth />
        <TextField ref={passwordConfirmRef} type='password' label=" Password Confirmation" variant="filled" sx={{ display: 'block', margin: '10px', paddingRight: '20px' }} fullWidth />

        <Button type="submit" disabled={loading} sx={{ mt: 2, width: '100%', fontWeight: '600' }} variant="contained">Update</Button>
      </Paper>

      <Typography mt={2} >Cansel and go to  <Link className='Link_Form' to="/">Home</Link></Typography>
    </Box>
  )
}
