import { Typography,Box,Stack } from "@pankod/refine-mui";
import { useDelete,useGetIdentity,useShow } from "@pankod/refine-core";
import { useParams,useNavigate } from "@pankod/refine-react-router-v6";
import { ChatBubble,Delete,Edit,Phone,Place,Star } from "@mui/icons-material";
import { CustomButton } from "components";

const PropertyDetails = () => {
  const navigate = useNavigate();
  const { data : user} = useGetIdentity();
  const { id } = useParams();
  const {mutate} = useDelete();
  const { queryResult } = useShow();
  
  const { data, isLoading, isError } = queryResult;

  const propertyDetails = data?.data ?? {};
  //console.log(data)

  if(isLoading) return <div>Loading ...</div>
  if(isError) return <div>Error</div>
  return (
    <Box
    borderRadius="15px"
    padding="20px"
    bgcolor="#fcfcfc"
    width="fit-content"
    >
      <Typography
        fontSize={25}
        fontWeight={700}
        color="#11142d"
      >
          Details
      </Typography>
      <Box 
      mt="20px"
      display="flex"
      flexDirection={{
        xs : "column",lg : "row"
      }}
      gap={4}
      >
          <Box 
            flex={1}
            maxWidth={764}
          >
              <img
              src={ propertyDetails.photo }
              alt={ propertyDetails.title }
              height={546}
              style={{
                 objectFit : "cover",
                 borderRadius : "10px"
              }}
              className="property_details-img"
              />
              <Box
              mt={"15px"}
              >
                 <Stack 
                 direction="row"
                 justifyContent="space-between"
                 flexWrap={"wrap"}
                 alignItems="center"
                 >
                    <Typography 
                    fontSize={18}
                    fontWeight={500}
                    color="#11142d"
                    textTransform="capitalize"

                    >
                        {propertyDetails.propertyType}
                    </Typography>
                    <Box>
                                {[1,2,3,4,5].map((star)=>(
                                    <Star 
                                    key={`start-${star}`} 
                                    sx={{color : "#f2c94c" }} />
                                ))}
                    </Box>
                 </Stack>

                 <Stack 
                 direction="row"
                 justifyContent="space-between"
                 flexWrap={"wrap"}
                 alignItems="center"
                 >
                    <Typography 
                    fontSize={22}
                    fontWeight={600}
                    color="#11142d"
                    textTransform="capitalize"

                    >
                        {propertyDetails.title}
                    </Typography>
                    <Stack 
                    mt={0.5}
                    direction="row"
                    alignItems="center"
                    >
                        <Place sx={{color : "#808191"}} />
                        <Typography
                        fontSize={14}
                        color={"#808191"}
                        >
                            {propertyDetails.location}
                        </Typography>
                    </Stack>
                 </Stack>
              </Box>
          </Box>
      </Box>
    </Box>
  )
}

export default PropertyDetails