import { useEffect, useState } from "react";
import "./App.css";
import { InputGroup } from "./components/molecules/InputGroup";
import UserCard from "./components/molecules/UserCard";
import { Div } from '../../../../AbdullahAkkologlu/23-React-Github/src/styled';
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
      <div className="backgroundCard">
        <div>
        <InputGroup
          type="text"
          Name="userName"
          value={username}
          onChange={handleChange}
          onClick={handleClick}
          text={"Get Person"}
          placeholder="Bir isim giriniz" />
        </div>
        <div className="backgroundCardBottom">        {data ? <UserCard user={data} /> : null}
</div>
        
        <div className="topLeft">
          <img src="https://r.resimlink.com/9rhDAiKw.png" alt="" />
        </div>
    
        <div className="bottomRight">
          <img src="https://r.resimlink.com/42S8fPobFBDr.png" alt="" />
        </div>
      </div>
    </>
  );
}

export default App;
