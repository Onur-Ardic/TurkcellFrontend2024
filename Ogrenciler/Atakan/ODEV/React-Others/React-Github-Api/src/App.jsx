import { useState } from "react"
import FormGroup from "./components/FormGroup"
import UserCard from "./components/UserCard"
import { getUser } from "./api"

function App() {

  const [username, setUsername] = useState("")
  const [userInfo, setUserInfo] = useState([])

  function handleChange(e) {
    setUsername(e.target.value)
  }

  function handleClick() {
    setUserInfo([])
    getUser(username).then((data) => {
      setUserInfo((userInfo) => [...userInfo, data]);
    });
  }

  return (
    <>
      <FormGroup username={username} handleChange={handleChange} handleClick={handleClick} />
      <UserCard userInfo={userInfo} />
    </>
  )
}

export default App
