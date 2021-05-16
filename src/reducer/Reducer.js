const reducer = (state, action) => {
  switch (action.type) {
    case "DISABLE":
      return [...state, action.id]
    case "ENABLE":
      return state.filter(item => item !== action.id)
    default:
      return state;
  }
};

export default reducer;