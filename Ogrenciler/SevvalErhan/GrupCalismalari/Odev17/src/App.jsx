import { useEffect } from "react";
import { get } from "./api";

function App() {
  const fetchData = async () => {
    const result = await get();
    console.log(result);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
     
    </>
  )
}

export default App
