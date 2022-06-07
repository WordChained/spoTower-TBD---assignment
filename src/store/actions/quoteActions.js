export const getQuotesAction = () => {
  return { type: "GET_QUOTES" };
};
export const addQuoteAction = (newQuote) => {
  return { type: "ADD_QUOTES", newQuote };
};
export const filterQuotesAction = (quoteFilters) => {
  return { type: "SET_FILTER", quoteFilters };
};
