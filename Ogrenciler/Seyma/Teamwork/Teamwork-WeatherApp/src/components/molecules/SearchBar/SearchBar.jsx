import React from "react";
import styles from "./SearchBar.module.css";

const SearchBar = ({ value, onChange, onKeyUp, placeholder, onSubmit }) => {
  return (
    <div className={styles.searchBarContainer}>
      <i className="fas fa-search"></i>
      <input
        className={styles.searchBarInput}
        type="text"
        value={value}
        onChange={onChange}
        onKeyUp={onKeyUp}
        placeholder={placeholder}
      />
    </div>
  );
};

export default SearchBar;
