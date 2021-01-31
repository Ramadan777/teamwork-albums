const initialState = {
  items: [],
  loading: false,
  hiding: false, //fixme лучше назвать просто hide либо hidden (непонятно
  // почему этот ключ находится в двух редюсерах
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
    case 'users/albums/hiding':
      return {
        ...state,
        hiding: !state.hiding,
      };

    default:
      return state;
  }
};

export default albumsReducer;
