import { NavLink } from 'react-router-dom';
import React from 'react';
import PropTypes from 'prop-types';

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


Album.propTypes = {
  album: PropTypes.object,
};

export default Album;
