import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import styles from "./Search.module.css";

const Search = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${encodeURIComponent(search)}`);
    setSearch("");
  };

  return (
    <form className={styles.formStyle} onSubmit={handleSubmit}>
      <div className={styles.input}>
        <FaSearch />
        <input
          type="text"
          value={search}
          placeholder="Search Gnammy Recipes"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </div>
    </form>
  );
};

export default Search;
