import Input from "../components/Input";
import Card from "../components/Card";
import "./App.css";
import { useState } from "react";
import { getUser, getRepos } from "../components/Request";
import { Container, Header, Navbar, P } from "./styled";
import { FaSearchengin } from "react-icons/fa";

function App() {
  const [username, setUsername] = useState("");
  const [userInfo, setUserInfo] = useState([]);
  const [userRepos, setUserRepos] = useState([]);
  const [error, setError] = useState("");

  function handleChange(e) {
    setUsername(e.target.value);
    if (error) setError("");
  }

  function handleClick() {
    getUser(username)
      .then((data) => {
        if (!data || Object.keys(data).length === 0) {
          setError("Böyle bir kullanıcı olduğuna emin misin?");
        } else {
          setUserInfo(data);
          setError("");
        }
      })
      .catch((error) => {
        setError(error.message);
      });

    getRepos(username)
      .then((data) => {
        setUserRepos(data);
      })
      .catch((error) => {
        setError(error.message);
      });
  }

  return (
    <>
      <Header position="relative">
        <Navbar>
          <Container>
            <Input
              username={username}
              handleChange={handleChange}
              handleClick={handleClick}
            />
          </Container>
        </Navbar>
      </Header>
      <Container>
        {!error && userInfo && userRepos.length > 0 ? (
          <Card userInfo={userInfo} userRepos={userRepos} />
        ) : (
          <P className="error-message">
            <FaSearchengin size="5rem" />
            {error || ""}
          </P>
        )}
      </Container>
    </>
  );
}

export default App;
