import { useEffect } from "react";
import Requests from "../Requests";

function HomePage() {
  const getNews = () => {
      Requests.get("")
          .then(data => console.log(data)).catch(err => console.log(err));
  }

  useEffect(() => {
    getNews();
  }, []);

  return (
    <>
    </>
  );
}

export default HomePage;
