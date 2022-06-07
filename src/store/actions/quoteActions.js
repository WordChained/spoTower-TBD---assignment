export const getQuotesAction = () => {
  return { type: "GET_QUOTES" };
};
export const addQuoteAction = (newQuote) => {
  return { type: "ADD_QUOTES", newQuote };
};
export const setFilterAction = (filter) => {
  return { type: "SET_FILTER", filter };
};
