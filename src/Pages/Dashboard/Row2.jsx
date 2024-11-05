import { Box, Paper, Stack, Typography, useTheme, IconButton } from "@mui/material";
import { DownloadOutlined } from '@mui/icons-material';
import LineChartComponent from '../../Components/LineChartComponent';
import { Transactions } from '../../utils/dataDashbordPie';

export default function Row2() {
  const theme = useTheme();
  return (
    <Stack direction={"row"} flexWrap={"wrap"} gap={1.2} mt={1.3}>
      <Paper p={4} sx={{ maxWidth: { xs: "100%", lg: 900 }, flexGrow: 1, minWidth: { xs: "100%", lg: 480 } }}>

        <Stack direction={'row'} alignItems={"center"} justifyContent={"space-between"} flexWrap={"wrap"}>
          <Box >
            <Typography color={theme.palette.secondary.main} m={1} mb={1} mt={2} ml={4} variant='h6' fontWeight={"bold"}>Revenue Generated</Typography>
            <Typography variant="body2" ml={4}> $59,342.32</Typography>
          </Box>

          <IconButton aria-label='button screenshot' sx={{ mr: 3 }}> <DownloadOutlined /> </IconButton>
        </Stack>

        <LineChartComponent left={false} bottom={false} heightLine="280px" />
      </Paper>


      <Box sx={{ overflow: "auto", borderRadius: "4px", minWidth: "280px", maxHeight: 355, flexGrow: 1, }}>

        <Paper >
          <Typography color={theme.palette.secondary.main} fontWeight={"bold"} p={1.2} variant="h6">Recent Transactions</Typography>
        </Paper>

        <Paper >
          {Transactions.map((ele) =>
            <Paper key={ele.txId} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 0.4, }}>

              <Box p={1.2}>
                <Typography fontWeight={600} variant='body1'>{ele.user}</Typography>
                <Typography fontWeight={500} variant='body2'>{ele.txId}</Typography>
              </Box>

              <Typography>{ele.date}</Typography>

              <Typography
                borderRadius={1.4}
                p={1}
                mr={1}
                bgcolor={theme.palette.error.main}
                color={theme.palette.getContrastText(theme.palette.error.main)}
                variant="body2"
              >
                {ele.cost}
              </Typography>

            </Paper>
          )}
        </Paper>
      </Box>

    </Stack>
  )
}
