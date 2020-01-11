import React, { useState } from "react";
import "./App.css";
import { LogInPage } from "pages";
import { configureDataStore } from "store/dataStore";
import { useStore } from "store";

configureDataStore();

const App = () => {
  const [state, dispatch] = useStore();
  // const [counter, setCounter] = useState(state.counter);

  return (
    <div>
      <LogInPage />
    </div>
  );
};

export default App;
