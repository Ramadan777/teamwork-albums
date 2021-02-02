import Header from './Header';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { hideShow, loadUsers } from '../redux/actions';
import Users from './Users';
import Albums from './Albums';
import { Route } from 'react-router-dom';
import Photos from './Photos';

function App() {
  const hidingUsers = useSelector((state) => state.users.hidden);
  const dispatch = useDispatch();
  const show = useSelector((state) => state.show.show);

  useEffect(() => {
    dispatch(loadUsers());
  }, [dispatch]);

  const hide = () => {
    dispatch(hideShow());
  };

  //fixme повторяющийся код, нужно исправить

  return (
    <div className={`app ${show ? 'showTheme' : ''}`}>
      <button className="button" onClick={hide}>
        {show ? '🌞' : '🌛'}
      </button>
      <Header />
      <div className="container-fluid">
        <div className={`row ${hidingUsers ? 'd-none' : ''}`}>
          <div className="col-3 users">List of users</div>
          <div className="col-3 albums">List of albums</div>
          <div className="col-6 photos">List of photos</div>
        </div>
        <div className="row justify-content-center">
          <div className={`col-3 ${hidingUsers ? 'd-none' : ''}`}>
            <Users />
          </div>
          <div className={`col-3 ${hidingUsers ? 'd-none' : ''}`}>
            <Route path={`/:id?`}>
              <Albums />
            </Route>
          </div>
          <div className={`col-6 ${hidingUsers ? 'col-8' : ''}`}>
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
