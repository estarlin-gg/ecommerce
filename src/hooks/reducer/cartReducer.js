export const cartReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD":
      const exists = state.some((item) => item.id === action.payload.id);
      if (exists) {
        return state;
      }
      return [...state, action.payload];
    case "DELETE":
      return state.filter((item) => item.id !== action.payload.id);

    default:
      return state;
  }
};
