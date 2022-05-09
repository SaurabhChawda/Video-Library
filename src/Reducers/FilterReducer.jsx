export const Reducer = (state, action) => {
  switch (action.type) {
    case "Current_Affairs":
      return { ...state, filteredData: action.payload.filter((item) => item.categoryName === "Current-Affairs") };
    case "Education":
      return { ...state, filteredData: action.payload.filter((item) => item.categoryName === "Education") };
    case "Solutions":
      return { ...state, filteredData: action.payload.filter((item) => item.categoryName === "Solutions") };
    case "Interview":
      return { ...state, filteredData: action.payload.filter((item) => item.categoryName === "Interview") };
    default:
      return { ...state, filteredData: action.payload };
  }
};
