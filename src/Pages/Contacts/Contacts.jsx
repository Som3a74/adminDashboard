import React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import { columns, rows } from "../../utils/ContactsData";
import Header from './../../Components/Header';


export default function Contacts() {
  return (
    <>
      <Header title="CONTACTS" subTitle="List of Contacts for Future Reference" />

      <Box>
        <Box sx={{ height: 650, width: "99%", mx: "auto" }}>
          <DataGrid checkboxSelection slots={{ toolbar: GridToolbar, }} rows={rows} columns={columns} />
        </Box>
      </Box>
    </>
  )
}
