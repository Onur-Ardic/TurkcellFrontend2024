import { useEffect, useState } from "react";
import "./App.css";
import { InputGroup } from "./components/molecules/InputGroup";
import UserCard from "./components/molecules/UserCard";
function App() {
  const [username, setUsername] = useState("alpayozer");
  const [data, setData] = useState(null);
  async function handleClick() {
    await fetch(`https://api.github.com/users/${username}`)
      .then((data) => data.json())
      .then((response) => setData(response))
      .catch((e) => alert(e.message));
  }
  function handleChange(e) {
    setUsername(e.target.value);
  }
  useEffect(() => {
    handleClick();
    setUsername("");
  }, []);

  return (
    <>
      <InputGroup
        type="text"
        Name="userName"
        value={username}
        onChange={handleChange}
        onClick={handleClick}
        text={"kullanıcıyı getir"}
        placeholder="Bir isim giriniz"
      />
      {data ? <UserCard user={data} /> : null}
    </>
  );
}

export default App;
