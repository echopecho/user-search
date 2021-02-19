import React, { useReducer, useMemo, useEffect } from "react";
import { LOADING, SUCCESS, FAILURE } from './util/dispatch-types';
import { fetchData } from './util/data';
import Search from "./components/search/Search";
import UserList from "./components/user-list/UserList";
import { initialState, reducer } from "./reducer";
import { AppContext } from "./context";
import "./App.css";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const contextValue = useMemo(() => {
    return { state, dispatch };
  }, [state, dispatch]);

  useEffect(() => {
    console.log("The query has changed", state.query);
    if(state.query !== '') {
      handleRequest();
    }
  }, [state.query, state.currentPage]);
  
  const handleRequest = async () => {
  dispatch({ type: LOADING });
  try {
    const data = await fetchData(state.query, state.currentPage);
    console.log(data);
    dispatch({ type: SUCCESS, payload: data });
  } catch (err) {
    console.log(err);
    dispatch({ type: FAILURE, payload: err.message });
  }
}
  

  return (
    <AppContext.Provider value={contextValue}>
      <div className="App">
        <Search />
        <UserList />
      </div>
    </AppContext.Provider>
  );
}

export default App;
