import { useList } from "@pankod/refine-core";
import { Box , Typography } from "@pankod/refine-mui"
import { AgentCard } from "components"; 

type Props = {}

const Agent = (props: Props) => {
  const { data,isLoading,isError} = useList({
    resource : "users"
  });

  const allAgents = data?.data ?? [];

  console.log(allAgents);
  
  if(isLoading) return <div>Loading ...</div>
  if(isError) return <div>Error ...</div>
  return (
    <Box>
      <Typography
        fontSize={25}
        fontWeight={700}
        color="#11142d"
      >
        Agents List
      </Typography>

      <Box
        mt="20px"
        sx={{
          display : "flex",
          flexWrap : "wrap",
          gap : "20px",
          backgroundColor : "#fcfcfc"
        }}
      >
        {
          allAgents.map((agent)=>(
            <AgentCard 
              key={agent.id}
              id={agent._id} 
              name={agent.name} 
              email={agent.email} 
              avatar={agent.avatar} 
              noOfProperties={agent.allProperties.length}              
            /> 
          ))
        }
      </Box>
    </Box>
  )
}

export default Agent