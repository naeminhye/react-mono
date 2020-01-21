import React, { useState } from "react";
import { LogInPage, HomePage } from "pages";
import { configureDataStore } from "store/dataStore";
import { useStore } from "store";
import './common/styles/style.scss'

configureDataStore();

const App = () => {
  const [state, dispatch] = useStore();
  // const [counter, setCounter] = useState(state.counter);

  return (
    <div>
      <HomePage />
    </div>
  );
};

export default App;
