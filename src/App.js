import React, { useReducer, useMemo } from "react";
import Search from "./components/search/Search";
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
      </div>
    </AppContext.Provider>
  );
}

export default App;
