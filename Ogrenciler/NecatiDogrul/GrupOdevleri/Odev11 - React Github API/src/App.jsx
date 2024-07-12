import React, { useState } from "react";
import UserInput from "./components/UserInput";
import UserProfile from "./components/UserProfile";
import "./App.css";

function App() {
  const [userData, setUserData] = useState(null);

  const fetchUserData = async (username) => {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      const data = await response.json();
      setUserData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="App">
      <h1>GitHub User Profile</h1>
      <UserInput onSearch={fetchUserData} />
      <UserProfile userData={userData} />
    </div>
  );
}

export default App;
