import { NavLink } from 'react-router-dom';
import React from 'react';
import PropTypes from 'prop-types';
import Photo from '../Photos/Photo'; //fixme неиспользуемый код

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

//fixme неверно указаны типы (см замечание в компоненте User)

Album.propTypes = {
  userId: PropTypes.number,
  title: PropTypes.string,
};

export default Album;
