import React, { useState, useContext } from "react";
import { AppContext } from "../../context";

function Search() {
  const [query, setQuery] = useState("");
  const { state, dispatch } = useContext(AppContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(query);
  };

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" onChange={(e) => setQuery(e.target.value)} />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default Search;
