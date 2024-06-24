import React from 'react'
import Row1 from "./Row1";
import Row2 from "./Row2";
import Row3 from "./Row3";
import { Button } from '@mui/material'
import Header from './../../Components/Header';
import { DownloadOutlined } from '@mui/icons-material';
import { Box, Stack, Typography, useTheme } from "@mui/material";
import html2canvas from "html2canvas";

export default function Dashboard() {
  const theme = useTheme();

  const handleDownloadScreenshot = async () => {
    const element = document.body; // Change this to the specific element you want to screenshot
    const canvas = await html2canvas(element);
    const dataUrl = canvas.toDataURL("image/png");

    // Create a link element to trigger the download
    const link = document.createElement("a");
    link.href = dataUrl;
    link.download = "screenshot.png";

    // Append the link to the body (necessary for Firefox)
    document.body.appendChild(link);
    
    // Trigger the download
    link.click();

    // Remove the link from the body
    document.body.removeChild(link);
  };



  return <>

    <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>

      <Header title="DASHBOARD" subTitle="Welcome to your dashboard" />

      <Box sx={{ textAlign: "right", mb: 1.3 }}>
        <Button onClick={handleDownloadScreenshot} color="primary" sx={{ padding: "6px 8px", fontWeight: '800', textTransform: "capitalize" }} variant="contained"> <DownloadOutlined /> Download Reports</Button>
      </Box>

    </Stack>

    <Row1 />
    <Row2 />
    <Row3 />

  </>
}
