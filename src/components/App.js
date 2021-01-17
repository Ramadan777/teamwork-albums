import Header from './Header'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { loadUsers } from '../redux/actions'
import Users from './Users'
import Albums from './Albums'
import Photos from './Photos'
import { Route } from 'react-router-dom'

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUsers())
  }, [dispatch]);

  return (
    <div className="app">
      <Header />
      <Route path={"/:id?"}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-3 users">
              List of users
            </div>
            <div className="col-3 albums">
              List of albums
            </div>
            <div className="col-6 photos">
              List of photos
            </div>
          </div>
          <div className="row">
            <div className="col-3">
              <Users />
            </div>
            <div className="col-3">
              <Albums />
            </div>
            <div className="col-6">
              <Photos />
            </div>
          </div>
        </div>
      </Route>
    </div>
  );
}

export default App;
