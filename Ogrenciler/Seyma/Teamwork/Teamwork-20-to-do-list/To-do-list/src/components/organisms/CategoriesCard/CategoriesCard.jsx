import React, { useEffect, useState } from "react";
import styles from "./CategoriesCard.module.css";
import { Cards } from "../../molecules/Cards/Cards";
import { deleteData, getFiltered, update } from "../../../service/Api";

export const CategoriesCard = ({
  view,
  toDo,
  title,
  color,
  onDelete,
  onUpdate,
}) => {
  const [filtered, setFiltered] = useState([]);

  const fetchCategories = async () => {
    const selectCategories = await getFiltered(title);
    setFiltered(selectCategories);
  };

  useEffect(() => {
    fetchCategories();
  }, [toDo]);

  return (
    <div
      className={`${
        view ? styles.categoriesCardVertical : styles.categoriesCardHorizontal
      } ${styles[color]}`}
    >
      <h2 className={styles.cardsTitle}>{title}</h2>
      {filtered.map((toDo, index) => (
        <Cards
          toDo={toDo}
          key={index}
          onDelete={(id) => onDelete(id)}
          onUpdate={onUpdate}
        />
      ))}
    </div>
  );
};
