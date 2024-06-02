import React from "react";
import searchIcon from "../../../assets/icons/search.svg";
import styles from "./SearchBar.module.css";

const SearchBar = ({ value, onChange, onKeyUp, placeholder, onSubmit }) => {
  return (
    <div className={styles.searchBarContainer}>
      <img src={searchIcon} alt="search" />
      <input
        className={styles.searchBarInput}
        type="text"
        value={value}
        onChange={onChange}
        onKeyUp={onKeyUp}
        placeholder={placeholder}
        onSubmit={onSubmit}
      />
    </div>
  );
};

export default SearchBar;
