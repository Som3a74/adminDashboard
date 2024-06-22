import React, { useEffect, useState } from "react";
import { DataGrid, GridToolbar, GridActionsCellItem } from "@mui/x-data-grid";
import { Box } from "@mui/material";
// import { columns } from "../../utils/ContactsData";
import Header from './../../Components/Header';
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from './../../firebase';
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import CircularProgress from '@mui/material/CircularProgress';





export default function Contacts() {
  const [DataFireBase, setDataFireBase] = useState(null)

  const handleDeleteClick = (id) => async () => {
    let IdDelete = ''
    DataFireBase.map((docs) => {
      if (docs.id == id) {
        IdDelete = docs.IdDoc
      }
    })
    console.log(IdDelete)
    try {
      await deleteDoc(doc(db, "Users", IdDelete))
      setDataFireBase(DataFireBase.filter((DataFireBase) => DataFireBase.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  async function GetData() {
    const allDocs = [];
    const querySnapshot = await getDocs(collection(db, "Users"));
    querySnapshot.forEach((doc) => {
      allDocs.push({ ...doc.data(), IdDoc: doc.id });
    });
    setDataFireBase(allDocs);
    console.log(allDocs)
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
            icon={<DeleteIcon />}
            label="Delete"
            onClick={handleDeleteClick(id)}
            color="inherit"
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
            <DataGrid checkboxSelection slots={{ toolbar: GridToolbar, }} rows={DataFireBase} columns={columns} editMode="row" />
          </Box>
        </Box>
        :
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height:'50vw' }}>
          <CircularProgress />
        </Box>
      }
    </>
  )
}
