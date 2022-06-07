export const initialState = {
  quotes: [
    {
      id: "123",
      advanteges: [],
      promotionTitle: "quote1",
      image: "",
      zipCodeList: [],
      ageRestriction: undefined,
      isAgeRestricted: false,
    },
  ],
};

export const quoteReducer = (state, action) => {
  switch (type.action) {
    case "GET_QUOTES":
      return { ...state };
    case "ADD_QUOTES":
      return { ...state, quotes: [...state.quotes, action.newQuote] };
    default:
      return state;
  }
};
