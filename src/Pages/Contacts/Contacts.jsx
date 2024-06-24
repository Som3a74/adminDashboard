import React, { useEffect, useState } from "react";
import { DataGrid, GridToolbar, GridActionsCellItem } from "@mui/x-data-grid";
import { Box, Button, Typography } from "@mui/material";
import Header from './../../Components/Header';
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from './../../firebase';
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import Loading from './../Loading/Loading';
import useCheckAdmin from "../../utils/checkAdmin";


export default function Contacts() {
  const [DataFireBase, setDataFireBase] = useState(null)
  const [loadingDlt, setloadingDlt] = useState(null)

  const handleDeleteClick = (id) => async () => {
    let IdDelete = ''
    DataFireBase.map((docs) => {
      if (docs.id == id) {
        IdDelete = docs.IdDoc
      }
    })
    // console.log(IdDelete)
    try {
      setloadingDlt(true)
      await deleteDoc(doc(db, "Users", IdDelete))
      setDataFireBase(DataFireBase.filter((DataFireBase) => DataFireBase.id !== id));
    } catch (error) {
      console.log(error);
    }
    setloadingDlt(false)
  };

  const isAdmin = useCheckAdmin();

  async function GetData() {
    const allDocs = [];
    const querySnapshot = await getDocs(collection(db, "Users"));
    querySnapshot.forEach((doc) => {
      allDocs.push({ ...doc.data(), IdDoc: doc.id });
    });
    setDataFireBase(allDocs);
  }

  useEffect(() => {
    GetData()
  }, [])

  const columns = [
    {
      field: "id",
      headerName: "ID",
      flex: 1,
    },
    {
      field: "firstName",
      headerName: "Name",
      width: 120,
      cellClassName: "name-column--cell",
    },
    {
      field: "Age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left",
      width: 44
    },
    {
      field: "contactNumber",
      headerName: "Phone Number",
      headerAlign: "center",
      align: "center",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "Adress1",
      headerName: "Address",
      flex: 1,
    },
    {
      field: "password",
      headerName: "Password",
      flex: 1,
    },
    {
      field: "actions",
      type: "actions",
      headerName: "Actions",
      width: 100,
      cellClassName: "actions",
      getActions: ({ id }) => {
        return [
          <GridActionsCellItem
            disabled={loadingDlt}
            icon={<DeleteIcon />}
            label="Delete"
            onClick={handleDeleteClick(id)}
            color="#ffff"
          />
        ];
      }
    }
  ];

  return (
    <>
      <Header title="CONTACTS" subTitle="List of Contacts for Future Reference" />
      {DataFireBase ?
        <Box>
          <Box sx={{ height: 650, width: "99%", mx: "auto" }}>
            {
              isAdmin ? <DataGrid checkboxSelection slots={{ toolbar: GridToolbar, }} rows={DataFireBase} columns={columns} editMode="row" />
                : <Typography textAlign={'center'} variant="h3" mt={10}>You should be An admin</Typography>
            }
          </Box>
        </Box>
        :
        <Loading />
      }
    </>
  )
}
