import { useGetIdentity,useOne } from "@pankod/refine-core"
import { Profile } from "components"

const MyProfile = () => {
  const {data : user} = useGetIdentity();
  const {data,isLoading,isError} = useOne({
    resource : "users",
    id : user?.userid
  });

    const myProfile = data?.data ?? [];
    if(isLoading) return <div>Loading ...</div>
    if(isError) return <div>Error ...</div>

  return (
    <Profile 
    type={"My"} 
    name={""} 
    avatar={""} 
    email={""} 
    properties={undefined}    
    />
  )
}

export default MyProfile