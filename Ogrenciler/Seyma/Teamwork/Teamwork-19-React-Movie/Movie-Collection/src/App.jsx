import "./App.css";
import { Form } from "./components/Form/Form";
import List from "./components/List/List";
import { useEffect, useState } from "react";
import { get, post, update, deleteData } from "./request/Request";

function App() {
  const [newMovie, setMovie] = useState({
    name: "",
    director: "",
    year: "",
    type: "",
    image: "",
  });
  const [data, setData] = useState([]);

  const handleData = async () => {
    const getData = await get();
    setData(getData);
  };

  useEffect(() => {
    handleData();
  }, [newMovie]);

  const postMovie = (e) => {
    e.preventDefault();
    post(newMovie);
    setMovie({ name: "", director: "", year: "", type: "", image:"" });
  };

  const updateMovie = async (id, data) => {
    const updateData = await update(id, data);
    setData(updateData);
  }

  return (
    <>
      <div className="App">
        <h1 className="text-center my-5">Movie Collection</h1>
        <div className="container">
          <div className="row">
          <Form newMovie={newMovie} setMovie={setMovie} postMovie={postMovie} />
          <List data={data} updateMovie ={updateMovie} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
