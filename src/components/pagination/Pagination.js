import React, { useContext } from 'react';
import { AppContext } from '../../context';
import { PAGINATE } from '../../util/dispatch-types';

function Pagination() {
  const { state, dispatch } = useContext(AppContext);
  const { total_count, currentPage } = state;

  const paginate = (dir) => {
    dispatch({ type: PAGINATE, payload: dir });
  }
  return (
    <div>
      <button onClick={() => paginate(-1)} disabled={currentPage === 1}>Prev</button>
      <button onClick={() => paginate(1)} disabled={currentPage + 10 >= total_count}>Next</button>
      <p>Total results: {total_count}</p>
    </div>
  )
}

export default Pagination
