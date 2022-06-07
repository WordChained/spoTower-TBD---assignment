import libertyMutualLogo from "../../assets/imgs/liberty-mutual.png";
import progressiveLogo from "../../assets/imgs/progressive.png";
import allstateLogo from "../../assets/imgs/allstate.png";

export const initialState = {
  quotes: [
    {
      id: "123",
      advanteges: [
        {
          id: "4566",
          text: "Take Advantage of safe Driver, Sign Online, Pay-in-full, Multi-Car and other Discounts",
        },
        {
          id: "236234",
          text: "Fast, easy and reliable claims service available 24 hours a day",
        },
        {
          id: "873453",
          text: "Bundle your auto and home policies for additional savings",
        },
      ],
      promotionTitle: "Liberty Mutual - Are You Overpaying For Auto Insurance?",
      image: libertyMutualLogo,
      zipCodeList: [123, 456, 789],
      ageRestriction: 0,
      isAgeRestricted: false,
    },
    {
      id: "456",
      advanteges: [
        {
          id: "123",
          text: "Take Advantage of safe Driver, Sign Online, Pay-in-full, Multi-Car and other Discounts",
        },
        {
          id: "456",
          text: "Fast, easy and reliable claims service available 24 hours a day",
        },
        {
          id: "678",
          text: "Bundle your auto and home policies for additional savings",
        },
      ],
      promotionTitle: "Drivers Switch & save an Average of $727/Year",
      image: progressiveLogo,
      zipCodeList: [],
      ageRestriction: 18,
      isAgeRestricted: false,
    },
    {
      id: "678",
      advanteges: [
        {
          id: "4566",
          text: "Take Advantage of safe Driver, Sign Online, Pay-in-full, Multi-Car and other Discounts",
        },
        {
          id: "236234",
          text: "Fast, easy and reliable claims service available 24 hours a day",
        },
        {
          id: "873453",
          text: "Bundle your auto and home policies for additional savings",
        },
      ],
      promotionTitle: "Stop overpaing on your auto insurance",
      image: allstateLogo,
      zipCodeList: [123, 456],
      ageRestriction: 30,
      isAgeRestricted: false,
    },
    {
      id: "8910",
      advanteges: [
        {
          id: "234234",
          text: "Take Advantage of safe Driver, Sign Online, Pay-in-full, Multi-Car and other Discounts",
        },
        {
          id: "5123235",
          text: "Fast, easy and reliable claims service available 24 hours a day",
        },
        {
          id: "623234",
          text: "Bundle your auto and home policies for additional savings",
        },
      ],
      promotionTitle:
        "Drivers who switch from state farm & save with progressive save",
      image: progressiveLogo,
      zipCodeList: [123, 456],
      ageRestriction: 66,
      isAgeRestricted: false,
    },
  ],
  filter: { age: undefined, zipCode: "" },
};

export default (state, action) => {
  switch (action.type) {
    case "GET_QUOTES":
      return { ...state };
    case "ADD_QUOTES":
      return { ...state, quotes: [...state.quotes, action.newQuote] };
    case "SET_FILTER":
      return { ...state, filter: action.quoteFilters };
    default:
      return state;
  }
};
