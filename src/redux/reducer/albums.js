const initialState = {
  items: [],
  loading: false,
};

const albumsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'albums/load/start':
      return {
        ...state,
        loading: true,
      };

    case 'albums/load/success':
      return {
        ...state,
        items: action.payload,
        loading: false,
      };

    //fixme название кейса начинается с users/ - не понятно почему
    // так как сейчас находимся в редюсере albums

    default:
      return state;
  }
};

export default albumsReducer;
