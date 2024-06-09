import React from "react";

const Card = ({ data }) => {
  return (
    <div className="col-3 mb-4 text-center">
      <div className="card h-100">
        <div className="card-body">
          <h5 className="card-title mx-3 my-3">{data.title}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{data.author}</h6>
          <a
            href={data.url}
            className="btn btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read more
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
