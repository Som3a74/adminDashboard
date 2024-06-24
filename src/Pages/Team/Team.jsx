import React, { useEffect, useState } from "react";
import { DataGrid } from '@mui/x-data-grid';
import { useTheme } from "@mui/material";
import { Box, Typography } from "@mui/material";
import { AdminPanelSettingsOutlined, LockOpenOutlined, SecurityOutlined } from "@mui/icons-material";
import Header from './../../Components/Header';
import { collection, getDocs } from "firebase/firestore";
import { db } from './../../firebase';
import Loading from './../Loading/Loading';
import useCheckAdmin from "../../utils/checkAdmin";


export default function Team() {
  const theme = useTheme();
  const [DataFireBase, setDataFireBase] = useState(null)

  const isAdmin = useCheckAdmin();

  async function GetData() {
    const allDocs = [];
    const querySnapshot = await getDocs(collection(db, "Roles"));
    querySnapshot.forEach((doc) => {
      allDocs.push({ ...doc.data(), IdDoc: doc.id });
    });
    setDataFireBase(allDocs);
  }

  useEffect(() => {
    GetData()
  }, [])

  const columns = [
    { field: "id", headerName: "ID", width: 55, align: "center", headerAlign: "center", },
    { field: "firstName", headerName: "name", align: "center", headerAlign: "center", },
    { field: "email", headerName: "email", flex: 1, align: "center", headerAlign: "center", },
    { field: "contactNumber", headerName: "phone", flex: 1, align: "center", headerAlign: "center", },
    {
      field: "role", headerName: "access", flex: 1, cellClassName: "cellstyle", headerAlign: "center",
      renderCell: ({ row: { role } }) => {
        // console.log(role)
        return (
          <Box
            sx={{
              p: "5px",
              width: "99px",
              borderRadius: "3px",
              textAlign: "center",
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: 'center',

              backgroundColor:
                role === "Admin" ? theme.palette.primary.dark
                  : role === "Manager" ? theme.palette.secondary.dark : "#3da58a",
            }}
          >
            {role === "Admin" && (
              <AdminPanelSettingsOutlined sx={{ color: "#fff" }} fontSize="small" />
            )}
            {role === "Manager" && (
              <SecurityOutlined sx={{ color: "#fff" }} fontSize="small" />
            )}
            {role === "User" && (
              <LockOpenOutlined sx={{ color: "#fff" }} fontSize="small" />
            )}

            <Typography sx={{ fontSize: "13px", color: "#fff" }}>
              {role}
            </Typography>
          </Box>
        );
      },
    },
  ];

  return (
    <>
      <Header title="TEAM" subTitle="Managing the Team Members" />
      {DataFireBase ?
        <Box sx={{ height: 600, width: '98%' }}>
          {
            isAdmin ? <DataGrid rows={DataFireBase} columns={columns} />
              : <Typography textAlign={'center'} variant="h3" mt={10}>You should be An admin</Typography>
          }
        </Box>
        : <Loading />}
    </>
  )
}
