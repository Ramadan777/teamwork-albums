import React from 'react';
import { useSelector } from 'react-redux';
import User from './User';
import ReactLoading from 'react-loading';

function Users() {
  const users = useSelector((state) => state.users.items);
  const loading = useSelector((state) => state.users.loading);

  if (loading) {
    return (
      <div className="preload-users">
        <div>Идет загрузка...</div>
        <div>
          <ReactLoading type="spin" color="green" height={100} width={100} />
        </div>
      </div>
    );
  }

  return (
    <ul className="list-group">
      {users.map((user) => {
        return <User user={user} key={user.id} />;
      })}
    </ul>
  );
}

export default Users;