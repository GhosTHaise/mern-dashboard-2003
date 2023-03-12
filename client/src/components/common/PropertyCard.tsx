import { Place } from '@mui/icons-material'
import { Link } from '@pankod/refine-react-router-v6'
import { Typography,Box,Card,CardMedia,CardContent,Stack } from '@pankod/refine-mui'
import { PropertyCardProps } from 'interfaces/property'

const PropertyCard = ({id,title,location,price,photo} : PropertyCardProps) => {
  return (
    <Card
    component={Link}
    to={`/properties/${id}`}
    sx={{
      maxWidth : "330px",
      padding : "10px",
      "&:hover" : {
        boxShadow : "0 22px 45px 2px rgba(176,176,176,0.1)"
      },
      cursor : "pointer",
    }}
    elevation={0}
    >
      <CardMedia 
        component="img"
        width="100%"
        height={210}
        image={photo}
        alt="card image"
        sx={{borderRadius : "10px"}}
      />
    </Card>
  )
}

export default PropertyCard