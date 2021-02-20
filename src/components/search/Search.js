import React, { useState, useContext } from "react";
import { AppContext } from "../../context";
import { SEARCH } from "../../util/dispatch-types";
import { Button } from "../../shared/style";
import { SearchContainer } from "./style";

function Search() {
  const [query, setQuery] = useState("");
  const { dispatch } = useContext(AppContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: SEARCH, payload: query });
    setQuery("");
  };

  return (
    <SearchContainer>
      <form onSubmit={(e) => handleSubmit(e)} data-testid="search-form">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          data-testid="search-input"
        />
        <Button type="submit" data-testid="search-btn">
          Search
        </Button>
      </form>
    </SearchContainer>
  );
}

export default Search;
