import { useEffect, useState } from "react";

// 1. state, actions and listeners declared OUTSIDE of the useStore hooks
let actions = {};
let globalState = {};
let listeners = [];

// 2. defining custom hook
export const useStore = () => {
  // global state is taped into by the locally instantiated listener
  const [state, setState] = useState(globalState);

  // 3. defining the setter of the custom hook --- dispatch
  const dispatch = (actionIdentifier, withPayload) => {
    const newState = actions[actionIdentifier](globalState, withPayload);
    globalState = { ...globalState, ...newState };

    for (const listener of listeners) {
      listener(globalState);
    }
  };

  useEffect(() => {
    listeners.push(setState);

    return () => {
      listeners = listeners.filter(keepIf => keepIf !== setState);
    };
  }, [setState]);

  return [globalState, dispatch];
};

// initializing the store with actions and initial state
export const initStore = (userActions = {}, initialState = {}) => {
  if (initialState) globalState = { ...globalState, ...initialState };
  actions = { ...actions, ...userActions };
};