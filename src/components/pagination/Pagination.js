import React, { useContext } from "react";
import { AppContext } from "../../context";
import { PAGINATE } from "../../util/dispatch-types";
import { PaginationContainer } from "./style";
import { Button } from "../../shared/style";

function Pagination() {
  const { state, dispatch } = useContext(AppContext);
  const { total_count, currentPage } = state;

  const paginate = (dir) => {
    dispatch({ type: PAGINATE, payload: dir });
  };
  return (
    <PaginationContainer>
      <p className="results-display">Total results: {total_count}</p>
      <div className="controls">
        <Button onClick={() => paginate(-1)} disabled={currentPage === 1}>
          Prev
        </Button>
        <Button
          onClick={() => paginate(1)}
          disabled={currentPage * 10 >= total_count}
        >
          Next
        </Button>
      </div>
    </PaginationContainer>
  );
}

export default Pagination;
