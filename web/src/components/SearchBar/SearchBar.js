import React, { useContext } from "react";
import classes from "./SearchBar.module.css";
import { DataContext } from "../../useContext/DataContext.js";

function SearchBar() {
  const { search, setSearch } = useContext(DataContext);

  return (
    <div>
      <input
        className={classes.input}
        type="text"
        value={search}
        onChange={e => setSearch(e.target.value)}
        placeholder="หาที่เที่ยวแล้วไปกัน..."
      />
    </div>
  );
}

export default SearchBar;
