import { useEffect } from "react";
import Requests from "../Requests";

const EconomyNewView = () => {

    const getNews = () => {
        Requests.get("business")
            .then(data => console.log(data)).catch(err => console.log(err));
    }

    useEffect(() => {
        getNews();
      }, []);

  return (
    <div>EconomyNewView</div>
  )
}

export default EconomyNewView