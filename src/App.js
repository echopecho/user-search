import React, { useReducer, useMemo } from "react";
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
