const ListItem = ({ classNames, content, controlContent }) => {
  return (
    controlContent && (
      <li>
        <i className={classNames}></i> {content}
      </li>
    )
  );
};

export default ListItem;
