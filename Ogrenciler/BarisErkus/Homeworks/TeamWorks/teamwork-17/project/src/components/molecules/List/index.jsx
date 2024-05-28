import styles from "./styles.module.css";
import ListItem from "../../atoms/ListItem";
import PropTypes from "prop-types";

const List = ({ dataList, deleteTodo, fillInput, checkTodo }) => {
  return (
    <ul className={styles.list}>
      {dataList.map((item) => (
        <ListItem
          id={item.id}
          key={item.id}
          title={item.title}
          checked={item.checked}
          createdAt={item.createdAt}
          updatedAt={item.updatedAt}
          deleteTodo={deleteTodo}
          fillInput={fillInput}
          checkTodo={checkTodo}
        />
      ))}
    </ul>
  );
};

List.propTypes = {
  dataList: PropTypes.array,
  deleteTodo: PropTypes.func,
  fillInput: PropTypes.func,
  checkTodo: PropTypes.func,
};

export default List;
