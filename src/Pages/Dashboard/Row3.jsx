import React from 'react'
import { Box, Paper, Stack, Typography, useTheme } from "@mui/material";
import BarChartComponent from './../../Components/BarChartComponent';
import GeographyComponent from '../../Components/GeographyComponent';
import { data } from './../../utils/dataPie';
import PieChartComponent from '../../Components/PieChartComponent';


const dataBar = [
  {
    year: 2019,
    Spain: 900,
    France: 1400,
    Germany: 1700,
  },

  {
    year: 2020,
    Spain: 1000,
    France: 1500,
    Germany: 1800,
  },

  {
    year: 2021,
    Spain: 1100,
    France: 1600,
    Germany: 1900,
  },

  {
    year: 2022,
    Spain: 1200,
    France: 1700,
    Germany: 2000,
  },

  {
    year: 2023,
    Spain: 1260,
    France: 1709,
    Germany: 2080,
  },
];

export default function Row3() {

  const theme = useTheme();
  return (
    <Stack gap={1.5} direction={"row"} flexWrap={"wrap"} mt={1.4}>

      <Paper sx={{ flexGrow: 1, minWidth: "400px", width: "28%", }}>
        <Typography color={theme.palette.secondary.main} sx={{ padding: "30px 30px 0 30px" }} variant='h6' fontWeight={"bold"}>Campaign</Typography>

        <PieChartComponent height={"200px"} Radius={.8} dataPie={data} Dash={false} />

        <Typography variant="h6" align="center" sx={{ mt: "15px" }}>$48,352 revenue generated</Typography>
        <Typography variant="body2" px={0.7} pb={3} align="center">Includes extra misc expenditures and costs</Typography>
      </Paper>

      <Paper sx={{ flexGrow: 1, minWidth: "400px", width: "28%", }}>
        <Typography color={theme.palette.secondary.main} sx={{ padding: "30px 30px 0 30px" }} variant='h6' fontWeight={"bold"}>Sales Quantity</Typography>
        <BarChartComponent indexIs={'year'} heightLine="300px" left={false} bottom={false} dataBars={dataBar} keys={["Spain", "France", "Germany"]} themeColor={"paired"} />
      </Paper>

      <Paper sx={{ flexGrow: 1, minWidth: "400px", width: "28%", }}>
        <GeographyComponent heightGeo="350px" Scale={70} legend={false} />
      </Paper>
    </Stack>
  )
}
