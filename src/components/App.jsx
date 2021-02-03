import Header from './Header';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { loadUsers } from '../redux/actions';
import Users from './Users';
import Albums from './Albums';
import { Route } from 'react-router-dom';
import Photos from './Photos';

function App() {
  const hidingUsers = useSelector((state) => state.users.hidden);
  const dispatch = useDispatch();
  const show = useSelector((state) => state.theme.show);

  useEffect(() => {
    dispatch(loadUsers());
  }, [dispatch]);

  return (
    <div className={`app ${show ? 'showTheme' : ''}`}>
      <Header />
      <div className="container-fluid">
        <div className={`row ${hidingUsers ? 'd-none' : ''}`}>
          <div className="col-3 users">List of users</div>
          <div className="col-3 albums">List of albums</div>
          <div className="col-6 photos">List of photos</div>
        </div>
        <div className="row">
          <div className={`col-3 ${hidingUsers ? 'd-none' : ''}`}>
            <Users />
          </div>
          <div className={`col-3 ${hidingUsers ? 'd-none' : ''}`}>
            <Route path={`/:id?`}>
              <Albums />
            </Route>
          </div>
          <div className={`col-6 ${hidingUsers ? 'col-12' : ''}`}>
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
