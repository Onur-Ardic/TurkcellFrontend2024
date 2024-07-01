import { object, string, number } from "yup"

const formSchema = object({
    firstName: string().required(),
    lastName: string().required(),
    age: number().required().positive().integer(),
    city: string().required(),
    university: string().required(),
    internshipDay: number().required().positive().integer(),
    // internshipType: required()
})

export default formSchema