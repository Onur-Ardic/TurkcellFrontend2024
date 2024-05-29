import PropTypes from "prop-types";

const listItem = ({ student, value }) => {
  return (
    <li>
      {student} {console.log(student)} {value}
    </li>
  );
};

listItem.propTypes = {
  student: PropTypes.string.isRequired,
  value: PropTypes.number,
};

export default listItem;
