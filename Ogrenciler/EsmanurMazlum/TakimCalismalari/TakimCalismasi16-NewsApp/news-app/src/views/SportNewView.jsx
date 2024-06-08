import { useEffect } from "react";
import Requests from "../Requests";

const SportNewView = () => {

    const getNews = () => {
        Requests.get("sport")
            .then(data => console.log(data)).catch(err => console.log(err));
    }

    useEffect(() => {
        getNews();
      }, []);


  return (
    <div>sport sayfası</div>
  )
}

export default SportNewView