import styles from "./styles.module.css";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircle,
  faCircleCheck,
  faEdit,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

const ListItem = ({
  id,
  title,
  checked,
  createdAt,
  updatedAt,
  deleteTodo,
  fillInput,
  checkTodo,
}) => {
  const createdDate = new Date(createdAt).toLocaleDateString();
  const updatedDate = new Date(updatedAt).toLocaleDateString();
  return (
    <li className={styles.listItem}>
      <div className={styles.tickContainer} onClick={() => checkTodo(id)}>
        {checked ? (
          <FontAwesomeIcon icon={faCircleCheck} color="green" />
        ) : (
          <FontAwesomeIcon icon={faCircle} />
        )}
        <p className={checked ? styles.checked : ""}>{title}</p>
      </div>
      <div className={styles.infos}>
        <div>
          <p>Oluşturulma Tarihi: {createdDate}</p>
          {updatedAt && <p>Güncellenme Tarihi: {updatedDate}</p>}
        </div>
        <p className={styles.trashContainer}>
          <FontAwesomeIcon
            icon={faEdit}
            color="green"
            onClick={() => fillInput(id)}
          />
          <FontAwesomeIcon
            icon={faTrash}
            color="red"
            onClick={() => deleteTodo(id)}
          />
        </p>
      </div>
    </li>
  );
};

ListItem.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  checked: PropTypes.bool,
  createdAt: PropTypes.string,
  updatedAt: PropTypes.string,
  deleteTodo: PropTypes.func,
  fillInput: PropTypes.func,
  checkTodo: PropTypes.func,
};

export default ListItem;
