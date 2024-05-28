import { useState } from "react";
import styles from "../CustomStyle.module.css";

const ListItem = ({ item, removeTask, setTask }) => {
  // const date = new Date();
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };
  return (
    <>
      <div className={isChecked? styles.listItemChecked :styles.listItem}>
        <div className={styles.taskInfos}>
          <h3>{item.task}</h3>
          <p>Açıklama: {item.desc}</p>
          <div className={styles.dates}>
            <p>O. Tarihi: {item.addDate}</p>
            <p>D. Tarihi: {item.updateDate}</p>
          </div>
        </div>
        <div className={styles.tools}>
          <input className={styles.checkbox} type="checkbox"  onChange={handleCheckboxChange}/>
          <div className={styles.btns}>
            <button className={styles.itemBtn} onClick={() => removeTask(item.id)}><i className="fa-regular fa-trash-can"></i></button>
            <button className={styles.itemBtn} onClick={() => setTask(item)}><i className="fa-solid fa-pen-to-square"></i></button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListItem;
