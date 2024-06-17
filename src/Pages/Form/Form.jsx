import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Header from './../../Components/Header';
import { Alert, Button, MenuItem, Snackbar, Stack } from '@mui/material';
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

const data = [
  {
    value: "Admin",
    label: "Admin",
  },
  {
    value: "Manger",
    label: "Manger",
  },
  {
    value: "User",
    label: "User",
  },
];

const schema = yup.object({
  firstName: yup.string().required('firstName is Required').min(3, 'min is 3').max(10, 'max is 10'),
  lastName: yup.string().required('lastName is Required').min(3, 'min is 3').max(10, 'max is 10'),
  email: yup.string().required('email is Required').email('email is invalid'),
  contactNumber: yup.string().required('phone is required').matches(/^01[0125][0-9]{8}$/, 'is not a egyption phone'),
  Adress1: yup.string().required('Adress is Required'),
  Adress2: yup.string().required('Adress is Required'),
  Role: yup.string().required('Role is Required')
}).required()


export default function Form() {
  const { register, handleSubmit, watch, formState: { errors }, } = useForm({ resolver: yupResolver(schema), })
  const [open, setOpen] = React.useState(false);

  
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  const handleClick = () => {
    setOpen(true);
  };



  const onSubmit = (data) => {
    console.log(data)
    handleClick()
  }

  console.log(watch("example")) // watch input value by passing the name of it

  return (
    <Box>
      <Header title="CREATE USER" subTitle="Create a New User Profile" />
      <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ display: "flex", flexDirection: "column", gap: 3 }}>

        <Stack sx={{ gap: 2, flexDirection: { sm: 'row' } }} >
          <TextField
            error={Boolean(errors.firstName)}
            helperText={Boolean(errors.firstName) && errors.firstName?.message}
            {...register("firstName")}
            sx={{ flex: 1 }} label="First Name" variant="filled"
          />

          <TextField
            error={Boolean(errors.lastName)}
            helperText={Boolean(errors.lastName) && errors.lastName?.message}
            {...register("lastName")}
            sx={{ flex: 1 }} label="Last Name" variant="filled"
          />
        </Stack>

        <TextField
          error={Boolean(errors.email)}
          helperText={Boolean(errors.email) && errors.email?.message}
          {...register("email")}
          sx={{ flex: 1 }} label="Email" variant="filled"
        />

        <TextField
          error={Boolean(errors.contactNumber)}
          helperText={Boolean(errors.contactNumber) && errors.contactNumber?.message}
          {...register("contactNumber")}
          sx={{ flex: 1 }} label="Contact Number" variant="filled"
        />

        <TextField
          error={Boolean(errors.Adress1)}
          helperText={Boolean(errors.Adress1) && errors.Adress1?.message}
          {...register("Adress1")}
          label="Adress 1" variant="filled"
        />
        <TextField
          error={Boolean(errors.Adress2)}
          helperText={Boolean(errors.Adress2) && errors.Adress2?.message}
          {...register("Adress2")}
          label="Adress 2" variant="filled"
        />

        <TextField sx={{ flex: 1 }}
          error={Boolean(errors.Role)}
          helperText={Boolean(errors.Role) && errors.Role?.message}
          {...register("Role")}
          select label="Role" defaultValue="User" id="outlined-select-currency" variant="filled"
        >
          {data.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>


        <Box sx={{ textAlign: "right" }}>
          <Button type="submit" sx={{ textTransform: "capitalize" }} variant="contained">
            Create New User
          </Button>


          <Snackbar
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            open={open}
            autoHideDuration={3000}
            onClose={handleClose}
          >
            <Alert onClose={handleClose} severity="info" sx={{ width: "100%" }}>
              Account created successfully
            </Alert>
          </Snackbar>



        </Box>

      </Box>
    </Box >
  )
}
