const initialState = {
  all: []
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_All':
      return {
        ...state,
        all: action.reducer
      };
    default:
      return state;
  }
}

export default reducer;
