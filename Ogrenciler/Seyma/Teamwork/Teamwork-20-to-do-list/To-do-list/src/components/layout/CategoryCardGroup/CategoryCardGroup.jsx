import React from "react";
import { CategoriesCard } from "../../organisms/CategoriesCard/CategoriesCard";

function CategoryCardGroup({ toDo, view }) {
  return (
    <div className="container">
      <div className="row">
        <div className={view ? "col-lg-3" : "row"}>
          <CategoriesCard
            view={view}
            toDo={toDo}
            color="green"
            title="On Hold"
          />
        </div>
        <div className={view ? "col-lg-3" : "row"}>
          <CategoriesCard view={view} toDo={toDo} color="pink" title="To Do" />
        </div>
        <div className={view ? "col-lg-3" : "row"}>
          <CategoriesCard
            view={view}
            toDo={toDo}
            color="blue"
            title="In Progress"
          />
        </div>
        <div className={view ? "col-lg-3" : "row"}>
          <CategoriesCard view={view} toDo={toDo} color="yellow" title="Done" />
        </div>
      </div>
    </div>
  );
}

export default CategoryCardGroup;
