import React from 'react'
import {Box,Stack,Typography} from "@pankod/refine-mui";
import { propertyReferralsInfo } from 'constants/index';
type Props = {}

interface ProgressBarProps {
  title : string,
  percentage : number,
  color : string
}

const ProgressBar = ({title,percentage,color} : ProgressBarProps) => (
  <Box
  width={"100%"}
  >
      <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      >
        <Typography 
        fontSize={16}
        fontWeight={500}
        color="#11142d"
        >
            {title}
        </Typography>
        <Typography 
        fontSize={16}
        fontWeight={500}
        color="#11142d"
        >
            {percentage}
        </Typography>
      </Stack>
  </Box>
)

const PropertyReferrals = (props: Props) => {
  return (
    <Box
    p={4}
    bgcolor="#fcfcfc"
    id="chart"
    display="flex"
    minWidth={490}
    flexDirection="column"
    borderRadius="15px">
      <Typography 
      fontSize={18} 
      fontWeight={600} 
      color="#11142d">
          Property Referrals
      </Typography>
      
      <Stack 
      my="20px"
      direction="column"
      gap={4}
      >
        {propertyReferralsInfo.map((bar : ProgressBarProps ,_)=>(
            <ProgressBar
            key={bar.title}
            {...bar}
            />
        ))}
      </Stack>
    </Box>
  )
}

export default PropertyReferrals