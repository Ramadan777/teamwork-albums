import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

function User(props) {
  return (
    <li className="user">
      <NavLink
        to={`/${props.user.id}`}
        activeClassName="list-group-item-info"
        className="list-group-item"
      >
        <div className="user-name">{props.user.name}</div>
        <div className="user-email">{props.user.email}</div>
      </NavLink>
    </li>
  );
}

//fixme неверно указаны пропстайпы, этот компонент принимает один пропс - user
//а здесь указано, что принимает три пропса
User.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  email: PropTypes.string,
};

export default User;
