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

User.propTypes = {
  user: PropTypes.object,
};

export default User;
