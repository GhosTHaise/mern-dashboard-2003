import ReactApexChart from 'react-apexcharts';
import { Box,Typography,Stack } from '@pankod/refine-mui';
import { ArrowCircleUpRounded } from '@mui/icons-material';
import { TotalRevenueOptions,TotalRevenueSeries } from './chart.config';

type Props = {}

const TotalRevenue = (props: Props) => {
  return (
    <Box
    p={4}
    flex={1}
    bgcolor="#fcfcfc"
    id="chart"
    display="flex"
    flexDirection="column"
    borderRadius="15px"
    >
      <Typography 
      fontSize={18} 
      fontWeight={600} 
      color="#11142d">
          Total Revenu
      </Typography>
      <Stack
      my={20} 
      direction="row"
      gap={4}
      flexWrap="wrap"   
      >
          <Typography 
          fontSize={28} 
          fontWeight={700}
          color="#11142d"
          >
              $236,575
          </Typography>
      </Stack>
    </Box>
  )
}

export default TotalRevenue