const initialState = {
  items: [],
  loading: false,
  hidden: false,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'users/load/start':
      return {
        ...state,
        loading: true,
      };

    case 'users/load/success':
      return {
        ...state,
        items: action.payload,
        loading: false,
      };

    case 'users/albums/hiding':
      return {
        ...state,
        hidden: !state.hidden,
      };

    default:
      return state;
  }
};

export default usersReducer;
