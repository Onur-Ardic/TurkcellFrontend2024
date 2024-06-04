import axios from "axios";

const url = "http://localhost:3000/projects"

export const getAllProjects = async() => {
    return await axios.get(url)
}

