import React from "react";
import { Box, Paper, Stack, Typography, useTheme } from "@mui/material";
import { card } from "../../utils/dataDashbordPie";
import PieChartComponent from "../../Components/PieChartComponent";








export default function Row1() {
  const theme = useTheme();
  return (
    <Stack direction={"row"} justifyContent={{ sm: "center", md: "space-between" }} flexWrap={"wrap"} alignItems={"center"} gap={1}>
      {card.map((ele, index) =>

        <Paper key={index} sx={{ minWidth: "333px", flexGrow: 1, p: 1.5, display: 'flex', justifyContent: "space-between" }} >

          <Stack gap={.3}>
            <Box sx={{ fontSize: "23px", padding: 0, color: theme.palette.secondary.main }}>{ele.icon}</Box>
            <Typography variant="body2" sx={{ fontSize: "13px" }}>{ele.number}</Typography>
            <Typography variant="body2" sx={{ fontSize: "13px" }}>{ele.name}</Typography>
          </Stack>

          <Stack alignItems={"center"}>
            <Box height={"70px"} width={"87px"}><PieChartComponent height={"100%"} dataPie={ele.chart} colorSchema={ele.scheme} Radius={.8} Dash={false} /></Box>
            <Typography>{ele.parent}</Typography>
          </Stack>

        </Paper>
      )}
    </Stack>
  )
}
