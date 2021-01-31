const initialState = {
  show: false,
};

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    //fixme название кейса должно быть theme/show, чтобы соответствовал
    // принятому именованию
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
