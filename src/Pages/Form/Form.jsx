import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Header from './../../Components/Header';
import { Alert, Button, MenuItem, Snackbar, Stack } from '@mui/material';
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { doc, collection, addDoc } from "firebase/firestore";
import { db } from './../../firebase';

const data = [
  // {
  //   value: "Admin",
  //   label: "Admin",
  // },
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
  firstName: yup.string().required('firstName is Required').min(3, 'min is 3').max(20, 'max is 20'),
  Age: yup.string().required('Age is Required').min(1, 'min is 1').max(2, 'max is 3'),
  email: yup.string().required('email is Required').email('email is invalid'),
  password: yup.string().required('password is Required').min(6, 'min is 6'),
  contactNumber: yup.string().required('phone is required').matches(/^01[0125][0-9]{8}$/, 'is not a egyption phone'),
  Adress1: yup.string().required('Adress is Required'),
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



  const onSubmit = async (data) => {
    setOpen(true);
    console.log(data)

    const newDocRef = doc(collection(db, "Users"));
    data.id = newDocRef.id;
    await addDoc(collection(db, "Users"), data);

    handleClick()
  }


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
            error={Boolean(errors.Age)}
            helperText={Boolean(errors.Age) && errors.Age?.message}
            {...register("Age")}
            sx={{ flex: 1 }} label="Age" type='number' variant="filled"
          />
        </Stack>

        <TextField
          error={Boolean(errors.email)}
          helperText={Boolean(errors.email) && errors.email?.message}
          {...register("email")}
          sx={{ flex: 1 }} label="Email" variant="filled"
        />

        <TextField
          error={Boolean(errors.password)}
          helperText={Boolean(errors.password) && errors.password?.message}
          {...register("password")}
          sx={{ flex: 1 }} label="password" type='password' variant="filled"
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
          <Button disabled={open} type="submit" sx={{ textTransform: "capitalize" }} variant="contained">
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
