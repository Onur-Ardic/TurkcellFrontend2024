import PropTypes from "prop-types";
import {useEffect} from "react";

const ListItem = ({student, value}) => {
    // useEffect(() => {
    //     console.log("Hata");
    // }, [student]);
    return  <li>{student}</li>;  
    };

ListItem.propTypes = {
    student: PropTypes.string.isRequired
};
export default ListItem;