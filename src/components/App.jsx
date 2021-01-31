import Header from './Header';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { hideShow, loadUsers } from '../redux/actions';
import Users from './Users';
import Albums from './Albums';
import { Route } from 'react-router-dom';
import Photos from './Photos';

function App() {
  const hidingUsers = useSelector((state) => state.users.hiding);
  const hidingAlbums = useSelector((state) => state.albums.hiding);
  const dispatch = useDispatch();
  const show = useSelector((state) => state.show.show);

  useEffect(() => {
    dispatch(loadUsers());
  }, [dispatch]);

  const hide = () => {
    dispatch(hideShow());
  };

  if (hidingAlbums || hidingUsers) {
    return (
      <div className={`app ${show ? 'showTheme' : ''}`}>
        {/*fixme переключение темы относится к хедеру, поэтому должно быть в этом компоненте*/}
        <button className="button" onClick={hide}>
          {show ? '🌞' : '🌛'}
        </button>
        <Header />
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <Route path={`/:userId?/:id?`}>
                <Photos />
              </Route>
            </div>
          </div>
        </div>
      </div>
    );
  }

  //fixme повторяющийся код, нужно исправить

  return (
    <div className={`app ${show ? 'showTheme' : ''}`}>
      <button className="button" onClick={hide}>
        {show ? '🌞' : '🌛'}
      </button>
      <Header />
      <div className="container-fluid">
        <div className="row">
          <div className="col-3 users">List of users</div>
          <div className="col-3 albums">List of albums</div>
          <div className="col-6 photos">List of photos</div>
        </div>
        <div className="row">
          <div className="col-3">
            <Users />
          </div>
          <div className="col-3">
            <Route path={`/:id?`}>
              <Albums />
            </Route>
          </div>
          <div className="col-6">
            <Route path={`/:userId?/:id?`}>
              <Photos />
            </Route>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
