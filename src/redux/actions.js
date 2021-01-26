export const loadUsers = () => {
  return (dispatch) => {
    dispatch({
      type: 'users/load/start',
    });

    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: 'users/load/success',
          payload: json,
        });
      });
  };
};

export const loadAlbums = (id) => {
  return (dispatch) => {
    dispatch({
      type: 'albums/load/start',
    });

    fetch(`https://jsonplaceholder.typicode.com/albums/?userId=${id}`)
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: 'albums/load/success',
          payload: json,
        });
      });
  };
};

export const loadPhotos = (id) => {
  return (dispatch) => {
    dispatch({
      type: 'photos/load/start',
    });

    fetch(`https://jsonplaceholder.typicode.com/photos/?albumId=${id}`)
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: 'photos/load/success',
          payload: json,
        });
      });
  };
};

export const hideShow = () => {
  return (dispatch) => {
    dispatch({ type: 'show' });
  };
};

export const hidingAlbumsAndUsers = () => {
  return {
    type: 'users/albums/hiding',
  };
};
