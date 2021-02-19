import React, { useState, useContext } from "react";
import { AppContext } from "../../context";
// import { fetchData } from "../../util/data";
import { SEARCH } from "../../util/dispatch-types";

function Search() {
  const [query, setQuery] = useState("");
  const { dispatch } = useContext(AppContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("submit fired")
    dispatch({ type: SEARCH, payload: query });
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
