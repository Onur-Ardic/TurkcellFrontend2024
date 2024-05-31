import PropTypes from "prop-types";
// import { useEffect } from "react";

const ListItem = ({ student, value }) => {
  // useEffect(() => {
  //   console.log("Hata");
  // }, []);
  return (
    <li>
      {student} {console.log(student)} {value}
    </li>
  );
};

ListItem.propTypes = {
  student: PropTypes.string.isRequired,
  value: PropTypes.number,
};

export default ListItem;
