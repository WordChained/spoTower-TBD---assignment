import { createContext, useReducer } from "react";

export const QuoteContext = createContext();

import React from "react";
import { initialState, quoteReducer } from "../reducers/quoteReducer";

export const QuoteContextProvider = ({ children }) => {
  const [quoteState, quoteDispatch] = useReducer(quoteReducer, initialState);
  return (
    <QuoteContext.Provider value={{ quoteState, quoteDispatch }}>
      {children}
    </QuoteContext.Provider>
  );
};
