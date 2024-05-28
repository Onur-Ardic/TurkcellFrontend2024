import React from "react";
import { Button } from "../../atoms/buttons/Button";

export const Cards = ({toDo}) => {
  return (
    <>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{toDo.title}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{toDo.endDate}</h6>
          <p className="card-text">{toDo.description}</p>
          <Button text="delete" />
          <Button text="güncelle" />
        </div>
      </div>
    </>
  );
};
