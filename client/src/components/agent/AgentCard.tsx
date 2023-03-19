import { EmailOutlined,LocationCity,Phone,Place } from '@mui/icons-material'
import { useGetIdentity } from '@pankod/refine-core'
import { AgentCardProp,InfoBarProps } from 'interfaces/agent'
import { Box, Stack,Typography } from '@pankod/refine-mui'
import { Link } from '@pankod/refine-react-router-v6'

const AgentCard = ({id,name,email,avatar,noOfProperties}: AgentCardProp) => {
  const { data : currentUser } = useGetIdentity(); 

  const generateLink = () => {
    if(currentUser.email === email) 
        return "/my-profile";

        return `/agent/show/${id}`;
  }
  return (
    <Box
     component={Link}
     to={`/`}
     width="100%"
     sx={{
      display : "flex",
      flexDirection : { xs : "column" , sm : "row" },
      gap : "20px",
      padding : "20px",
      "&:hover" : {
        boxShadow : "0 22px 45px 2px rgba(176,176,176,0.1)"
      }
     }}
    >
        <img
          src={avatar}
          alt="user"
          width={90}
          height={90}
          style={{borderRadius : 8,objectFit : "cover"}}
        />
    </Box>
  )
}

export default AgentCard