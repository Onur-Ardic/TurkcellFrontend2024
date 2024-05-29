import React from "react";
import { CategoriesCard } from "../../organisms/CategoriesCard/CategoriesCard";

function CategoryCardGroup({ toDo, view, onDelete, onUpdate }) {
  return (
    <div className="container">
      <div className="row">
        <div className={view ? "col-lg-3 px-2" : "row"}>
          <CategoriesCard
            view={view}
            toDo={toDo}
            color="yellow"
            title="On Hold"
            onDelete={(id) => onDelete(id)}
            onUpdate={onUpdate}
          />
        </div>
        <div className={view ? "col-lg-3 px-2" : "row"}>
          <CategoriesCard
            view={view}
            toDo={toDo}
            color="pink"
            title="To Do"
            onDelete={(id) => onDelete(id)}
            onUpdate={onUpdate}
          />
        </div>
        <div className={view ? "col-lg-3 px-2" : "row"}>
          <CategoriesCard
            view={view}
            toDo={toDo}
            color="blue"
            title="In Progress"
            onDelete={(id) => onDelete(id)}
            onUpdate={onUpdate}
          />
        </div>
        <div className={view ? "col-lg-3 px-2" : "row"}>
          <CategoriesCard
            view={view}
            toDo={toDo}
            color="green"
            title="Done"
            onDelete={(id) => onDelete(id)}
            onUpdate={onUpdate}
          />
        </div>
      </div>
    </div>
  );
}

export default CategoryCardGroup;
