import { useState } from "react"
import { useGetIdentity } from "@pankod/refine-core"
import { FieldValues,useForm } from "@pankod/refine-react-hook-form"
import { useNavigate } from "@pankod/refine-react-router-v6"
import Form from "components/common/Form"
type Props = {}

const CreateProperty = (props: Props) => {
  const navigate = useNavigate()
  return (
    <div>create-property</div>
  )
}

export default CreateProperty