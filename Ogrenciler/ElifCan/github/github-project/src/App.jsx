import { useEffect, useState } from "react";
import "./App.css";
import { InputGroup } from "./components/molecules/InputGroup";
import UserCard from "./components/molecules/UserCard";
import RepoCard from "./components/molecules/RepoCard";

function App() {
  const [username, setUsername] = useState("alpayozer");
  const [data, setData] = useState(null);
  const [repository, setRepository] = useState([]);

  async function handleClick() {
    await fetch(`https://api.github.com/users/${username}`)
      .then((data) => data.json())
      .then((response) => setData(response))
      .catch((e) => alert(e.message));
  }

  const fetchRepos = async () => {
    await fetch(`https://api.github.com/users/${username}/repos`)
      .then((data) => data.json())
      .then((res) => setRepository(res))
      .catch((e) => alert(e.message));
  };

  function handleChange(e) {
    setUsername(e.target.value);
  }
  useEffect(() => {
    handleClick();
    fetchRepos();
    setUsername("");
  }, []);

  return (
    <>
      <div className="backgroundCard">
        <InputGroup
          type="text"
          Name="userName"
          value={username}
          onChange={handleChange}
          onClick={handleClick}
          text={"Get Person"}
          placeholder="Bir isim giriniz"
        />
        <div className="row content">
        <div className="backgroundCardBottom col-6">
          {data ? <UserCard user={data} /> : null}
        </div>
        <div className="repoCard col-6">
          <div className="row">
          {repository.slice(0, 6).map((repo) => {
            return(
              <div className="col-6">
                <RepoCard key={repo.id} repository={repo} />
              </div>
            )
          })}
          </div>
        </div>
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
