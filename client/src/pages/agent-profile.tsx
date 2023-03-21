import { useOne } from "@pankod/refine-core"
import { Profile } from "components"
import { useParams } from "@pankod/refine-react-router-v6";

const AgentProfile = () => {
  const { id } = useParams();

  const {data,isLoading,isError} = useOne({
    resource : "users",
    id : id as string
  });

    const myProfile = data?.data ?? [];
    if(isLoading) return <div>Loading ...</div>
    if(isError) return <div>Error ...</div>

  return (
    <Profile 
    type={"Agent"} 
    name={myProfile.name} 
    avatar={myProfile.avatar} 
    email={myProfile.email} 
    properties={myProfile.allProperties}    
    />
  )
}

export default AgentProfile