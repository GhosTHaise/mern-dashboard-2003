import { Add } from '@mui/icons-material'
import { useTable } from '@pankod/refine-core'
import { Box,Stack,TextField,Typography,Select,MenuItem } from '@pankod/refine-mui'
import { useNavigate } from '@pankod/refine-react-router-v6'
import { PropertyCard,CustomButton } from 'components'

type Props = {}

const AllProperties = (props: Props) => {
  const navigate = useNavigate();
  const {
    tableQueryResult : {
        data,
        isLoading,
        isError
    },
    current,
    setCurrent,
    setPageSize,
    pageCount,
    sorter,
    setSorter,
    filters,
    setFilters
  } = useTable();
  
  const allProperties = data?.data ?? [];
  console.log(allProperties);
  
  if(isLoading) return <Typography>Loading...</Typography>
  if(isError) return <Typography>Error...</Typography>
  return (
    <Box>
      <Box
      mt="20px"
      sx={{
        display : "flex",
        flexWrap : "wrap",
        gap : 3
      }}
      >
        <Stack
          direction="column"
          width="100%"
        >
          <Typography
            fontSize={25}
            fontWeight={700}
            color="#11142d"
          >
              {!allProperties.length ? "There are no properties" : "All Properties" }
          </Typography>
          <Box 
          mb={2}
          mt={3}
          display="flex"
          width="84%"
          justifyContent="space-between"
          flexWrap="wrap"
          > 
            <Box
            display="flex"
            gap={2}
            flexWrap="wrap"
            mb={{ xs : "20px" , sm : 0}}
            >
                <CustomButton 
                title={`Sort price`}
                handleClick={()=>{}}
                backgroundColor={'#475be8'} 
                color={'#fcfcfc'} />
                <TextField 
                  variant='outlined'
                  color='info'
                  placeholder='Search by title'
                  value={""}
                  onChange={()=>{}}
                />
                <Select
                  variant='outlined'
                  color="info"
                  displayEmpty
                  required
                  inputProps={{"aria-label":"Without label"}}
                  defaultValue=""
                  value=''
                  onChange={()=>{}}
                >
                  <MenuItem value="">All</MenuItem>
                </Select>
            </Box>
          </Box>  
        </Stack>
      </Box>
      <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      >
          <CustomButton 
            title="App Property"
            handleClick={()=> navigate("/properties/create")}
            backgroundColor="#475be8"
            color="#fcfcfc"
            icon={<Add />}
          />
      </Stack>
      <Box 
      mt="20px" 
      sx={{
        display : "flex",
        flexWrap : "wrap",
        gap : 3
      }}>
          {allProperties.map((property)=>( 
              <PropertyCard 
                key={property._id}
                id={property._id}
                title={property.title}
                price={property.price}
                location={property.location}
                photo={property.photo}
              />
          ))}
      </Box>
    </Box>
  )
}

export default AllProperties