import React, { useState, useContext } from "react";
import { AppContext } from "../../context";
import { fetchData } from "../../util/data";
import { LOADING, SUCCESS, FAILURE } from "../../util/dispatch-types";

function Search() {
  const [query, setQuery] = useState("");
  const { dispatch } = useContext(AppContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: LOADING });
    try {
      const data = await fetchData(query);
      console.log(data);
      dispatch({ type: SUCCESS, payload: data });
    } catch (err) {
      console.log(err);
      dispatch({ type: FAILURE, payload: err.message });
    }
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
