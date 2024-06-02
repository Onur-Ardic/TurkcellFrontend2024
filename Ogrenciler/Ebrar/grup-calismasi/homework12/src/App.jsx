import "./App.css";
import styled from "styled-components";
import  NavbarExample  from "./components/Navbar";
import { useState } from "react";
import UserList from "./components/UserList";
import { getUser } from "./request.js";
import { useEffect } from 'react';
import { getRepos } from "./request.js";



function App() {
  const [showUser, setShowUser] = useState([]);
  const [user, setUser] = useState("sevval-erhan");
  const [repoData, setRepoData] = useState([]);
  
    async function handleClick(user) {
      try {
        const data = await getUser(user);
        setShowUser([data]);
        const rData = await getRepos(user);
        setRepoData(rData);
        console.log(repoData);
        setUser("");
        console.log(rData);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    }
    useEffect(() => {
      handleClick(user);
    }, []);
  return (
    <>
      <NavbarExample handleClick={handleClick} setShowUser={setShowUser} user={user} setUser={setUser} />
      <UserList showUser={showUser} repoData={repoData} />
    </>
  );
}

export default App;
