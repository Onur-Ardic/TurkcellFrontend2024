import { useState, useEffect } from "react";
import { get } from "../../api";

const EconomyView = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const result = get("economy").then((data) => setData(data));
    }, []);

    return (
        <div className="container">
            <div className="row justify-content-center">
            {data.articles?.slice(0, 20).map((article, index) => (
                <div className="col-12 col-md-4" key={index}>
                <div className="card p-2">
                <img src={article.urlToImage} alt="" />
                <h5>{article.title}</h5>
                <p>{article.publishedAt}</p>
                <p>{article.description}</p>
                <a href={article.url}>Haberin Detayı...</a>
                </div>
                </div>
            ))} 
            </div>
        </div>
    );
  
};

export default EconomyView;