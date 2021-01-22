import React from 'react';
import { NavLink } from 'react-router-dom';

function Album(props) {
  return (
    <li className="album">
      <NavLink
        to={`/${props.album.userId}/${props.album.id}`}
        activeClassName="list-group-item-dark"
        className="list-group-item"
      >
        {props.album.title}
      </NavLink>
    </li>
  );
}

export default Album;
