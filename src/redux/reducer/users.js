const initialState = {
  items: [],
  loading: false,
  hiding: false, //fixme лучше назвать просто hide либо hidden (непонятно
  // почему этот ключ находится в двух редюсерах
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
        hiding: !state.hiding,
      };

    default:
      return state;
  }
};

export default usersReducer;
