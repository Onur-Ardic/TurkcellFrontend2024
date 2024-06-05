import "./App.css";
import Navbar from "./components/Navbar";
import { useState } from "react";
import UserList from "./components/UserList";
import { getUser } from "./request.js";
import { useEffect } from "react";
import { getRepos } from "./request.js";

function App() {
  const [showUser, setShowUser] = useState([]);
  const [user, setUser] = useState("sevval-erhan");
  const [repoData, setRepoData] = useState([]);
  const [loading, setLoading] = useState(false);

  async function handleClick(user) {
    try {
      setLoading(true);
      const data = await getUser(user);
      setShowUser([data]);
      const rData = await getRepos(user);
      setRepoData(rData);
      setUser("");
    } catch (error) {
      console.error("Error fetching user data:", error);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    handleClick(user);
  }, []);

  return (
    <>
      {!loading && (
        <>
          <Navbar
            handleClick={handleClick}
            setShowUser={setShowUser}
            user={user}
            setUser={setUser}
          />
          <UserList showUser={showUser} repoData={repoData} />
        </>
      )}
    </>
  );
}

export default App;
