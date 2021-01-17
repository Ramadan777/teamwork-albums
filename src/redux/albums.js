const initialState = {
  items: [],
  loading: false
}

const albumsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'albums/load/start':
      return {
        ...state,
        loading: true
      }

    case 'albums/load/success':
      return {
        ...state,
        items: action.payload,
        loading: false
      }

    default:
      return state;
  }
}

export default albumsReducer;