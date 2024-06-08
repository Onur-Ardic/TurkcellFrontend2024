import { useEffect } from "react";
import Requests from "../Requests";

const HealthNewView = () => {

    const getNews = () => {
        Requests.get("health")
            .then(data => console.log(data)).catch(err => console.log(err));
    }

    useEffect(() => {
        getNews();
      }, []);


  return (
    <div>HealthNewView</div>
  )
}

export default HealthNewView