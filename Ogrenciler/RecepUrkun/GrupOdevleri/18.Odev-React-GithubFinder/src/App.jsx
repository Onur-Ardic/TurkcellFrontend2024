import { useState, useRef } from "react";
import "./App.css";
import Error from "./components/Error";
import { Button, Input } from "./components/Styled";
import RepoCard from "./components/RepoCard";
import UserCard from "./components/UserCard";

function App() {
  const [userName, setUserName] = useState("");
  const [userData, setUserData] = useState(null);
  const [userRepos, setUserRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [moreInfo, setMoreInfo] = useState(false);
  const topRef = useRef(null);

  const apiUrl = `https://api.github.com/users/${userName}`;

  const searchUser = async () => {
    setLoading(true);
    setError(null);
    setUserData(null);
    try {
      const res = await fetch(apiUrl);
      if (!res.ok) {
        throw new Error("User not found");
      }
      const data = await res.json();
      setUserData(data);

      const reposRes = await fetch(data.repos_url);
      if (!reposRes.ok) {
        throw new Error("Repositories not found");
      }
      const reposData = await reposRes.json();
      setUserRepos(reposData);
    } catch (err) {
      setError("Kullanıcı bulunamadı");
      console.log("hata: ", err);
    } finally {
      setLoading(false);
    }
  };

  const getUserNameHandler = (e) => {
    setUserName(e.target.value);
  };

  const dateFormatter = (isoString) => {
    const date = new Date(isoString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const scrollToTop = () => {
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="container py-4" ref={topRef}>
      <div className="row">
        <div className="d-flex flex-row flex-wrap align-items-center">
          <div className="col-12 col-lg-4 text-center text-lg-start">
            <h4 className="display-6 m-0">
              <a href="/" className="text-reset text-decoration-none">
                Github Finder
              </a>
            </h4>
          </div>
          <div className="col-12 col-lg-8 text-center text-lg-end">
            <Input
              type="text"
              placeholder="Kullanıcı adı giriniz"
              onChange={getUserNameHandler}
              value={userName}
            />
            <Button $primary={true} onClick={searchUser} disabled={loading}>
              {loading ? "Aranıyor..." : "Ara"}
            </Button>
          </div>
        </div>
        <hr />
        <div className="error-message">
          {error && <Error message={error} scrollToTop={scrollToTop} />}
        </div>
      </div>

      {userData && (
        <div className="row">
          <UserCard
            userData={userData}
            dateFormatter={dateFormatter}
            moreInfo={moreInfo}
            setMoreInfo={setMoreInfo}
          />
          <div className="col-12 col-md-6 col-lg-9">
            <div className="d-flex flex-wrap justify-content-center">
              {userRepos.map((repo) => (
                <RepoCard
                  key={repo.id}
                  repo={repo}
                  dateFormatter={dateFormatter}
                />
              ))}
            </div>
            <div className="d-flex justify-content-center mt-5">
              <Button $primary={true} onClick={scrollToTop}>
                <i className="fa-solid fa-arrow-up mx-2"></i> Yukarıya çık
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
