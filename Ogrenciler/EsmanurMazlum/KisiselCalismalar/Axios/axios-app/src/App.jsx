import { useEffect } from 'react';
import './App.css'
import axios from 'axios'

const BASE_URL = "http://localhost:4000";

function App() {

  const getAllUsers = async () => {
    const response = await axios.get(BASE_URL +"/users");
    console.log(response.data);
  }

  const getUser = async (id) => {
    const response = await axios.get(`${BASE_URL}/users/${id}`);
    console.log(response.data);
  }

  const createUser = async (user) => {
    const response = await axios.post(`${BASE_URL}/users`, user);
    console.log(response.data);
  }

  const updateUser = async (id, user) => {
    const response = await axios.put(`${BASE_URL}/users/${id}`, user);
    console.log(response.data);
  }

  const deleteUser = async (id) => {
    const response = await axios.delete(`${BASE_URL}/users/${id}`);
    console.log(response.data);
  }


  // ---------------------------------------

  const getUserById = async (id) => {
    const response = await axios.get(`${BASE_URL}/users/${id}`);
    return response.data.postId;
  }

  const getPostById = async (id) => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
    return response.data;
  }

  const getPost = async () => {
    const postId = await getUserById(1);
    const postData = await getPostById(postId);
    console.log(postData);
  }



  useEffect(() => {
    getPost();
    // getAllUsers();
    // getUser(2);
    // const newUser = {username: "fatma", password: "zz"}
    // createUser(newUser);
    // const updatedUser = {username: "selen", password: "1212"};
    // updateUser("d580", updatedUser);
    deleteUser(2);
  }, [])

  return (
    <>

    </>
  )
}

export default App
