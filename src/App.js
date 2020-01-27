import React, { useState } from "react";
import { Example } from "pages";
import { configureDataStore } from "store/dataStore";
import { useStore } from "store";
// import 'styles/style.scss'

configureDataStore();

const App = () => {
  const [state, dispatch] = useStore();
  // const [counter, setCounter] = useState(state.counter);

  return <Example />;
};

export default App;
