import { useEffect } from "react";
import Requests from "../Requests";


function HomePage() {

    const getNews = () => {
        Requests.get("https://newsapi.org/v2/top-headlines/sources?country=trapiKey=223d61cd6e5a43d683afc6f5405454d3")
            .then(data => console.log(data)).catch(err => console.log(err));
    }

    useEffect(() => {
        getNews();
    },[])


  return (
    <>

    </>
  )
}

export default HomePage