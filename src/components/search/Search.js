import React, { useState, useContext } from "react";
import { AppContext } from "../../context";
import { fetchData } from '../../util/data';

function Search() {
  const [query, setQuery] = useState("");
  const { state, dispatch } = useContext(AppContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await fetchData(query)
    console.log(data)
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
