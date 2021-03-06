const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      if (state.amount !== 5) {
        return {
          ...state,
          amount: state.amount + 1,
        };
      } else {
        return {
          ...state,
          amount: 5,
          handleError: true,
        };
      }

    case "DECREMENT":
      if (state.amount !== 0) {
        return {
          ...state,

          amount: state.amount - 1,
        };
      } else {
        return {
          ...state,
          amount: 0,
        };
      }
    case "HIDE_NOTIFICATION":
      return {
        ...state,
        handleError: false,
      };
    case "CLEAR_CART":
      return {
        ...state,
        amount: 0,
      };

    default:
      throw new Error("no matching action type");
  }
};

export default reducer;
