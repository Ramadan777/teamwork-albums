const initialState = {
  show: false,
};

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'show':
      return {
        ...state,
        show: !state.show,
      };

    default:
      return state;
  }
};

export default themeReducer;
