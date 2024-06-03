import { useEffect, useState } from "react";
import "./App.css";
import { tertiary, quinary } from "./components/common/colors";
import RightGroup from "./components/organisms/RightGroup";
import LeftGroup from "./components/organisms/LeftGroup";

function App() {
  const [data, setData] = useState("");
  const [repos, setRepos] = useState([]);
  const [userName, setUserName] = useState("waroi");
  const [manupulation, setManupulation] = useState(null);

  const clickHandler = () => {
    fetch(`https://api.github.com/users/${userName}`)
      .then((data) => data.json())
      .then((response) => {
        if (response.message === "Not Found") {
          alert("User not found");
          return;
        }
        setData(response);
        fetch(
          manupulation ? response.repos_url + manupulation : response.repos_url
        )
          .then((data) => data.json())
          .then((response) => {
            setRepos(response);
          })
          .catch((error) => alert(error.message));
      })
      .catch((error) => alert(error.message));
  };

  useEffect(() => {
    clickHandler();
  }, [manupulation]);

  const buttons = [
    {
      text: "Search",
      onClick: clickHandler,
      backgroundColor: tertiary,
    },
    {
      text: "Sort by name",
      onClick: () => setManupulation("?&sort=name"),
      backgroundColor: tertiary,
    },
    {
      text: "Sort by stars",
      onClick: () => setManupulation("?&sort=stargazers"),
      backgroundColor: tertiary,
    },
    {
      text: "New",
      onClick: () => console.log("Button 4 clicked"),
      backgroundColor: quinary,
    },
  ];

  return (
    <>
      <div className="container">
        <LeftGroup data={data} />
        <RightGroup
          buttons={buttons}
          setUserName={setUserName}
          userName={userName}
          repos={repos}
          placeholder={"Search"}
          type={"text"}
        />
      </div>
    </>
  );
}

export default App;
