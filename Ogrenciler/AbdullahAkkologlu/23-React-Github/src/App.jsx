import { useEffect, useRef, useState } from "react";
import "./App.css";
import { readData, readRepo } from "./request";
import Form from "./components/Form";
import { Container, DivGap, SpinnerDiv } from "./styled";
import Profile from "./components/Profile";
import Repos from "./components/Repos";
import Spinner from "./components/Spinner";

function App() {
  const input = useRef();
  const [data, setData] = useState([]);
  const [repos, setRepos] = useState([]);
  const [user, setUser] = useState("waroi");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const fetchData = async () => {
    try {
      setError(null);
      setLoading(true);
      const result = await readData(user);
      const reposResult = await readRepo(user);
      setData(result);
      setRepos(reposResult);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
      input.current.value = "";
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <Container>
        <Form setUser={setUser} fetchData={fetchData} input={input} />
        {loading ? (
          <SpinnerDiv>
            <Spinner />
          </SpinnerDiv>
        ) : error ? (
          <p>{error.message}</p>
        ) : (
          <DivGap>
            <Profile data={data} />
            <Repos repos={repos} />
          </DivGap>
        )}
      </Container>
    </>
  );
}

export default App;
