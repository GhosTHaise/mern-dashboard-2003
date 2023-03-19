import { useList } from "@pankod/refine-core";
import { Box , Typography } from "@pankod/refine-mui"
import { AgentCard } from "components"; 

type Props = {}

const Agent = (props: Props) => {
  const { data,isLoading,isError} = useList({
    resource : "users"
  });

  const allAgents = data?.data ?? [];

  if(isLoading) return <div>Loading ...</div>
  if(isError) return <div>Error ...</div>
  return (
    <div>agent</div>
  )
}

export default Agent