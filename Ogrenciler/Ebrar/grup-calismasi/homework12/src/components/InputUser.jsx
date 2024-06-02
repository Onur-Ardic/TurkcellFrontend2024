import React from "react";
import { getUser } from "../request.js";
import UserList from "../components/UserList.jsx";
import { useState } from "react";

function InputUser() {
  const [showUser, setShowUser] = useState([]);
  const [user, setUser] = useState("");

  async function handleClick() {
    try {
      const data = await getUser(user);
      setShowUser((users) => [...users, data]);
      setShowUser([data]);
      setUser("");
      console.log(data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  }
  return (
    <>
      <input
        type="text"
        value={user}
        onChange={(e) => setUser(e.target.value)}
        placeholder="Github Kullanıcı Adını Girin"
      />
      <button onClick={handleClick}>Kişiyi gör</button>
      <UserList showUser={showUser} />
    </>
  );
}

export default InputUser;
