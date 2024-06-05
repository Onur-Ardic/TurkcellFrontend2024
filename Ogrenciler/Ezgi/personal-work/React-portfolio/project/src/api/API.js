import axios from "axios";

const projectUrl = "http://localhost:3000/projects"
const contactsUrl = "http://localhost:3000/contacts"

export const getAllProjects = async() => {
    return await axios.get(projectUrl)
}

export const addContacts = async(formData) => {
    return await axios.post(contactsUrl, formData)
}

