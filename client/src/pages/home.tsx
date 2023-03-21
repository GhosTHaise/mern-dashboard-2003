import React from 'react'
import { useList } from '@pankod/refine-core'
import {
  PieChart,
  PropertyReferrals,
  TotalRevenue,
  PropertyCard,
  TopAgent
} from "components"
import { Box , Typography,Stack } from '@pankod/refine-mui'

type Props = {}

const Home = (props: Props) => {

  const {data : properties,isLoading,isError} = useList({
    resource : "properties",
    config : {
      pagination : {
        pageSize : 5
      }
    }
  });

  const latestProperties = properties?.data ?? [];

  if(isLoading) return <Typography>Loading...</Typography>
  if(isError) return <Typography>Something went wrong!</Typography>

  return (
    <Box>
        <Typography 
          fontSize={25}
          fontWeight={600}
          color="#11142d"
          >
           Dashboard
        </Typography> 
        <Box
          mt="20px"
          display="flex"
          flexWrap="wrap"
          gap={4}
        >
            <PieChart
              title="Properties for Sale"
              value={684}
              series={[75,25]}
              colors={["#275be8","#c4e8ef"]}
            />
            <PieChart
              title="Properties for Rent"
              value={550}
              series={[60,40]}
              colors={["#275be8","#c4e8ef"]}
            />
            <PieChart
              title="Total customers"
              value={5684}
              series={[75,25]}
              colors={["#275be8","#c4e8ef"]}
            />
            <PieChart
              title="Properties for Cities"
              value={555}
              series={[75,25]}
              colors={["#275be8","#c4e8ef"]}
            />
        </Box>
        <Stack  
        mt="25px"
        width="100%" 
        direction={{
            xs : "column",
            lg : "row"
        }}
        gap={4}
        >
            <TotalRevenue/>
            <PropertyReferrals/>
        </Stack>
        <Box
          flex={1}
          borderRadius="15px"
          padding="20px"
          bgcolor={"#fcfcfc"}
          display="flex"
          flexDirection={"column"}
          minWidth="100%"
          mt="25px"
        >
          <Typography
          fontSize={"18px"}
          fontWeight={600}
          color="#11142d"
          >
            Latest Properties
          </Typography>
          <Box
            mt={2.5}
            sx={{
              display : "flex",
              flexWrap : "wrap",
              gap : 4
            }}
          >
                {
                  
                }
          </Box>
        </Box>
    </Box>
  )
}

export default Home