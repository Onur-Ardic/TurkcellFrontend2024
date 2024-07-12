import { object, string } from "yup"

const formSchema = object({
    email: string().email().required(),
    password: string().required(),
})

export default formSchema