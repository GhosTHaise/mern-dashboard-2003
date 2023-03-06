import { Add } from '@mui/icons-material'
import { useList } from '@pankod/refine-core'
import { Box,Stack,Typography } from '@pankod/refine-mui'
import { useNavigate } from '@pankod/refine-react-router-v6'
import { PropertyCard,CustomButton } from 'components'

type Props = {}

const AllProperties = (props: Props) => {
  const navigate = useNavigate();
  return (
    <Box>
      <Stack
      
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      >
          <Typography
            fontSize={25}
            fontWeight={700}
            color="#11142d"
          >
              All Properties
          </Typography>
          <CustomButton 
            title="App Property"
            handleClick={()=> navigate("/properties/create")}
            backgroundColor="#475be8"
            color="#fcfcfc"
            icon={<Add />}
          />
      </Stack>
    </Box>
  )
}

export default AllProperties