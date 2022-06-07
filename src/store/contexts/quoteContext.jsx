import { createContext, useReducer } from "react";
import quoteReducer, { initialState } from "../reducers/quoteReducer";

export const QuotesContext = createContext();

export const QuoteContextProvider = ({ children }) => {
  const [quotesState, quotesDispatch] = useReducer(quoteReducer, initialState);
  return (
    <QuotesContext.Provider value={{ quotesState, quotesDispatch }}>
      {children}
    </QuotesContext.Provider>
  );
};
