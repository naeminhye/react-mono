import React, { useState } from "react";
import { LogInPage, HomePage, LuckyNumberPage } from "pages";
import { configureDataStore } from "store/dataStore";
import { useStore } from "store";
// import 'styles/style.scss'

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
